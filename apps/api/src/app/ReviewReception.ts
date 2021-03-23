import { ReviewItem, ReviewReception as ReviewReceptionInterface, ReviewRegistrationInfo, ReviewStatus, UploadFilePageInfo, UploadFileStatus } from '@gainhow-review/data'
import axios, { AxiosError, AxiosResponse } from 'axios';
import { createConnection, ConnectionOptions, Connection, Repository } from 'typeorm';
import * as fs from 'fs'
import * as FormData from 'form-data';
import * as os from 'os';

export class ReviewReception implements ReviewReceptionInterface {
    constructor(
        public connection: Connection
    ) {}

    // TODO: move to libs/utils
    private getRandomString(length: number): string {
        let result           = '';
        let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    /**
     *  根據反序列化後的reviewRegistrationInfo，初始化新的reviewItem
     *  ⇒ 把reviewItem序列化之後，用一個新的reviewId存入自己的database
     *  ⇒ 把reviewItem裡的reviewStatus序列化後回傳
     */
    async register(reviewRegistrationInfo: ReviewRegistrationInfo): Promise<string> {
        let newStatus = new ReviewStatus(reviewRegistrationInfo.numberOfModels);
        
        const reviewIdLength: number = 36;
        let reviewId: string = this.getRandomString(reviewIdLength);
        let itemRepo: Repository<ReviewItem> = this.connection.getRepository(ReviewItem);
        while (await itemRepo.findOne(reviewId)) {
            reviewId = this.getRandomString(reviewIdLength);
        }
        let newReviewItem = new ReviewItem(
            newStatus,
            reviewId,
            reviewRegistrationInfo.product
        );
        await itemRepo.save(newReviewItem);
        return newReviewItem.reviewId;
    }

    async deregister(reviewId: string): Promise<void> {
        let repo: Repository<ReviewItem> = this.connection.getRepository(ReviewItem);
        const itemToRemove: ReviewItem = await repo.findOne(reviewId);
        await repo.softDelete(itemToRemove);
    }
    
    async uploadFile(reviewId: string, file: { name: string, path: string; }): Promise<[ReviewStatus, UploadFileStatus]> {
        // throw new Error('Method not implemented.');
        let reviewItemRepo: Repository<ReviewItem> = this.connection.getRepository(ReviewItem);
        let uploadFileStatusRepo: Repository<UploadFileStatus> = this.connection.getRepository(UploadFileStatus);
        let reviewItem: ReviewItem = await reviewItemRepo.findOne(reviewId, { relations: ["status"] });
        let fileStatus = new UploadFileStatus(
            reviewItem.status,
            file.name
        );
        await uploadFileStatusRepo.save(fileStatus);
        try {
            console.log("uploading...");
            let uploadToken: string = await upload(file.path, file.name);
            console.log("uploaded...");
            fileStatus.uploadToken = uploadToken;
            fileStatus.currentStage = "GENERATING_PRINTABLE_PAGES";
            await uploadFileStatusRepo.save(fileStatus);
        } catch (error) {
            console.log("upload failed...");
            console.log(error);
            fileStatus.errorStage = "UPLOADING";
            await uploadFileStatusRepo.save(fileStatus);
        }
        let updatedReviewItem: ReviewItem
            = await reviewItemRepo.findOne(
                reviewId,
                {
                    relations: [
                        "status",
                        "status.uploadFileStatuses",
                        "status.uploadFileStatuses.pageInfos"
                    ]
                }
            );
        return [updatedReviewItem.status, fileStatus];
        
        // TODO: 把呼叫轉檔server的程式包到一個不管地帶
        async function upload(filePath: string, fileName: string): Promise<string> {
            
            console.log('filePath: '+ filePath);
            let readStream: fs.ReadStream = fs.createReadStream(filePath);
            let form = new FormData();
            form.append("secret_key", process.env.FILE_CONVERT_SERVER_UPLOAD_KEY);
            form.append("Filedata", readStream, fileName);
            console.log("fileName: " + fileName);
            try {
                console.log("upload start");
                let response: AxiosResponse<UploadToFileConvertingServerResponseBody> = await axios.post(
                    'http://ex.gding.com.tw/test/Upload_test8/server/php/api/uploadFile.php',
                    form,
                    { headers: form.getHeaders() }
                );
                console.log("response start");
                if (response.data.msg === 'success') return (response.data.token);
                else throw (response.data.msg);
            } catch (error) {
                console.log(error);
                throw (error);
            }

            interface UploadToFileConvertingServerResponseBody {
                msg: "success" | "Input Errors!" | "DB Error!";
                token: string;
            }
        }
    }

    /**
     * 
     * @param uploadFileStatus 
     */
    async busyCheckFileConversion(uploadFileStatus: UploadFileStatus): Promise<void> {
        uploadFileStatus.pageInfos = await this.keepTryingTo(this.checkFileConversion, uploadFileStatus);
        // save pageInfos into uploadFileStatus
        await Promise.all(
            uploadFileStatus.pageInfos.map(async (pageInfo: UploadFilePageInfo): Promise<void> => {
                await this.connection.manager.save(UploadFilePageInfo, pageInfo);
            })
        );
    }
    async checkFileConversion(uploadFileStatus: UploadFileStatus): Promise<Array<UploadFilePageInfo> | "NOT_FINISHED_YET"> {
        let uploadToken: string | undefined = uploadFileStatus.uploadToken;
        if (uploadToken === undefined) throw "checkFileConversion() should be called after uploadtoken is set, but before."
        let responseBody: CheckFileConversionFromFileConvertingServerResponseBody
            = (await axios.post(
                'http://ex.gding.com.tw/test/Upload_test8/server/php/api/fileconverter.php',
                {
                    function: "getjobStatus",
                    token: uploadToken
                }
            )).data;
        if (responseBody.msg === "wait") {
            return "NOT_FINISHED_YET";
        } else if (responseBody.msg === "success") {

            const jpegLocalDir: string = '';
            await fs.promises.mkdir(`${jpegLocalDir}/${uploadToken}`, { recursive: true });

            /**
             * 從轉檔伺服器得到遠端的pdf檔和jpeg檔的url之後：
             *  1. 把pdf的url存起來當作後續跟轉檔伺服器之間溝通用的token，直接存入pageInfo
             *  2. 透過jpeg的url將圖檔下載並存在本地，然後把本地的url存入pageInfo
             */
            let pageTokensAndImageUrls: Array<{
                pdfTokenInFileConvertingServer: string;
                jpegUrl: string
            }> = await Promise.all(
                responseBody.data.map(async ({
                    pageNum: pageNumber,        //頁次
                    imageUrl: jpegRemoteUrl,    //JPG圖檔位置	
                    pdfUrl: pdfRemoteUrl,       //PFD圖檔位置
                }) => {
                    let response: AxiosResponse = await axios.get(
                        jpegRemoteUrl, {
                        responseType: 'stream'
                    });
                    let jpegLocalPath: string = `${jpegLocalDir}/${uploadToken}/${pageNumber}.jpeg`
                    let writeStream = fs.createWriteStream(jpegLocalPath);
                    let jpegLocalUrl: string = `${os.hostname()}/${jpegLocalPath}`;
                    response.data.pipe(writeStream);
                    return {
                        pdfTokenInFileConvertingServer: pdfRemoteUrl,
                        jpegUrl: jpegLocalUrl
                    };
                })
            )
            let pageSizes: Array<PageSizeInMm>
                = await this.keepTryingTo(
                    checkFilePageSizes,
                    uploadToken
                );
            let pageInfos: Array<UploadFilePageInfo> = pageTokensAndImageUrls.map(({
                pdfTokenInFileConvertingServer,
                jpegUrl
            }, pageIndex: number) => {
                let widthInMm: number = pageSizes[pageIndex].widthInMm;
                let heightInMm: number = pageSizes[pageIndex].heightInMm;
                return new UploadFilePageInfo(
                    uploadFileStatus,
                    pdfTokenInFileConvertingServer,
                    jpegUrl,
                    widthInMm,
                    heightInMm
                );
            })
            return pageInfos;
        } else throw responseBody.msg;

        interface PageSizeInMm {
            widthInMm: number;
            heightInMm: number;
        }

        async function checkFilePageSizes(uploadToken: string): Promise<Array<PageSizeInMm> | "NOT_FINISHED_YET"> {
            let responseBody: CheckFilePageSizeFromFileConvertingServerResponseBody
                = (await axios.post(
                    'http://ex.gding.com.tw/test/Upload_test8/server/php/api/fileconverter.php',
                    {
                        function: 'getStatus',
                        token: uploadToken
                    }
                )).data;
            if (responseBody.msg === "wait") {
                return "NOT_FINISHED_YET";
            } else if (responseBody.msg === "success") {
                return responseBody.data.map(({
                    wi_mm: widthInMm,
                    hi_mm: heightInMm
                }): PageSizeInMm => ({
                    widthInMm,
                    heightInMm 
                }))
            } else throw responseBody.msg;

            interface CheckFilePageSizeFromFileConvertingServerResponseBody {                
                code: "200" | "404";
                msg: "wait" | "success" | "fail" | "Input Errors!" | "DB Error!";
                pagecount: number;
                processtime: number;
                data: Array<{
                    hi_mm: number;
                    hi_px: number;
                    imgprv: string;
                    page_dpi: number;
                    pagenum: number;
                    wi_mm: number;
                    wi_px: number;
                }>;
            }
        }

        type CheckFileConversionFromFileConvertingServerResponseBody
            = CheckFileConversionFromFileConvertingServerNotFinishedYetResponseBody
            | CheckFileConversionFromFileConvertingServerFinishedResponseBody;
        interface CheckFileConversionFromFileConvertingServerNotFinishedYetResponseBody {
            code: "200" | "404"				//執行狀態：成功｜失敗
            msg: "wait" | "fail" | "Input Errors!" | "DB Error!" 
            pageCount: number   			//總頁數
        }
        interface CheckFileConversionFromFileConvertingServerFinishedResponseBody {
            code: "200"				//執行狀態：成功｜失敗
            msg: "success" 
            pageCount: number   			//總頁數
            data: Array<{
                pageNum: number,		//頁次
                imageUrl: string,	//JPG圖檔位置	
                pdfUrl: string,		//PFD圖檔位置
            }>
        }
    }
    private keepTryingTo<X, Y>(
        doSomething: (input: X) => Promise<Y | "NOT_FINISHED_YET">,
        input: X,
        timeout: number = 2000
    ): Promise<Y> {
        return new Promise((resolve, reject) => {
            setTimeout(async () => {
                let doSomethingResult = await doSomething(input);
                if (doSomethingResult === "NOT_FINISHED_YET") resolve(
                    this.keepTryingTo(
                        doSomething,
                        input,
                        timeout
                    )
                );
                else resolve(doSomethingResult);
            }, timeout)
        })

    }
    deleteFile(reviewId: string, fileId: string): Promise<ReviewStatus> {
        throw new Error('Method not implemented.');
    }
    loadReviewStatus(reviewId: string): Promise<ReviewStatus> {
        throw new Error('Method not implemented.');
    }
    loadReviewItem(reviewId: string): Promise<ReviewItem> {
        throw new Error('Method not implemented.');
    }
    saveReviewItem(reviewItem: ReviewItem): Promise<ReviewItem> {
        throw new Error('Method not implemented.');
    }
    generateFinalResults(reviewItem: ReviewItem): Promise<void> {
        throw new Error('Method not implemented.');
    }
}

