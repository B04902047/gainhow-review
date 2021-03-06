import { ReviewItem, ReviewModel, ReviewReception as ReviewReceptionInterface, ReviewRegistrationInfo, ReviewStatus, UploadFilePageInfo, UploadFileStatus } from '@gainhow-review/data'
import { keepTryingTo } from '@gainhow-review/utils'
import axios, { AxiosError, AxiosResponse } from 'axios';
import { Connection, Repository } from 'typeorm';
import * as fs from 'fs'
import * as FormData from 'form-data';
import * as os from 'os';
import { from } from 'form-data';
import { EditPdfRequestBody, EditPdfResponseBody } from '@gainhow-review/interfaces';

function paramsToFormData(data: {[key: string]: string}): FormData {
    let formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
    })
    return formData;
}


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
    
    async uploadFile(reviewId: string, fileName: string, filePath: string): Promise<[ReviewStatus, UploadFileStatus]> {
        // throw new Error('Method not implemented.');
        let reviewItemRepo: Repository<ReviewItem> = this.connection.getRepository(ReviewItem);
        let uploadFileStatusRepo: Repository<UploadFileStatus> = this.connection.getRepository(UploadFileStatus);
        let reviewItem: ReviewItem = await reviewItemRepo.findOne(reviewId, { relations: ["status"] });
        let fileStatus = new UploadFileStatus(
            reviewItem.status,
            fileName
        );
        await uploadFileStatusRepo.save(fileStatus);
        try {
            let uploadToken: string = await upload(filePath, fileName);
            fileStatus.uploadToken = uploadToken;
            fileStatus.currentStage = "GENERATING_PRINTABLE_PAGES";
            await uploadFileStatusRepo.save(fileStatus);
        } catch (error) {
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
            let readStream: fs.ReadStream = fs.createReadStream(filePath);
            let form = new FormData();
            form.append("secret_key", process.env.FILE_CONVERT_SERVER_UPLOAD_KEY);
            form.append("Filedata", readStream, fileName);
            try {
                let response: AxiosResponse<UploadToFileConvertingServerResponseBody> = await axios.post(
                    'http://ex.gding.com.tw/test/Upload_test8/server/php/api/uploadFile.php',
                    form,
                    { headers: form.getHeaders() }
                );
                if (response.data.msg === 'success') return (response.data.token);
                else throw (response.data.msg);
            } catch (error) {
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
        uploadFileStatus.pageInfos = await keepTryingTo(this.checkFileConversion, uploadFileStatus);
        // save pageInfos into uploadFileStatus
        await Promise.all(
            uploadFileStatus.pageInfos.map(async (pageInfo: UploadFilePageInfo): Promise<void> => {
                await this.connection.manager.save(UploadFilePageInfo, pageInfo);
            })
        );
        uploadFileStatus.currentStage = "FINISHED";
        this.connection.manager.save(UploadFileStatus, uploadFileStatus);
    }
    async checkFileConversion(uploadFileStatus: UploadFileStatus): Promise<Array<UploadFilePageInfo> | "NOT_FINISHED_YET"> {
        let uploadToken: string | undefined = uploadFileStatus.uploadToken;
        if (uploadToken === undefined) throw "checkFileConversion() should be called after uploadtoken is set, but before."
        let requestBody = {
            function: 'getjobStatus',
            token: uploadToken
        };
        let formData: FormData = paramsToFormData(requestBody);
        let responseBody: CheckFileConversionFromFileConvertingServerResponseBody
            = (await axios.post(
                'http://ex.gding.com.tw/test/Upload_test8/server/rd/api/fileconverter.php',
                formData,
                { headers: formData.getHeaders() }
            )).data;
        console.log(responseBody);
        if (responseBody.msg === "wait") {
            return "NOT_FINISHED_YET";
        } else if (responseBody.msg === "success") {
            const jpegLocalDir: string = __dirname + '/uploadFilePageImages';
            
            await fs.promises.mkdir(`${jpegLocalDir}/${uploadToken}`, { recursive: true });
            console.log('mkdir = '+ `${jpegLocalDir}/${uploadToken}`);
            
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
                    pagenum: pageNumber,        //頁次
                    imgurl: jpegRemoteUrl,    //JPG圖檔位置	
                    pdfurl: pdfRemoteUrl,       //PFD圖檔位置
                }) => {
                    let response: AxiosResponse = await axios.get(
                        jpegRemoteUrl, {
                        responseType: 'stream'
                    });
                    let jpegLocalPath: string = `uploadFilePageImages/${uploadToken}/${pageNumber}.jpeg`;
                    let writeStream = fs.createWriteStream(jpegLocalPath);
                    let jpegLocalUrl: string = `${os.networkInterfaces().en0[1].address}:3333/${jpegLocalPath}`;
                    //  ${os.hostname()}/${jpegLocalPath}
                    response.data.pipe(writeStream);
                    return {
                        pdfTokenInFileConvertingServer: pdfRemoteUrl,
                        jpegUrl: jpegLocalUrl
                    };
                })
            )
            console.log(5);
            let pageSizes: Array<PageSizeInMm>
                = await keepTryingTo(
                    checkFilePageSizes,
                    uploadToken
                );
            console.log('pageSizes = ' + pageSizes);
            console.log(9);
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
            console.log('checkFilePageSizes start!');
            let requestBody = {
                function: 'getStatus',
                token: uploadToken
            };
            let formData: FormData = paramsToFormData(requestBody);
            let responseBody: CheckFilePageSizeFromFileConvertingServerResponseBody
                = (await axios.post(
                    'http://ex.gding.com.tw/test/Upload_test8/server/php/api/fileconverter.php',
                    formData,
                    { headers: formData.getHeaders()}
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
                pagenum: number,		//頁次
                imgurl: string,	//JPG圖檔位置	
                pdfurl: string,		//PFD圖檔位置
            }>
        }
    }
    
    deleteFile(reviewId: string, fileId: string): Promise<ReviewStatus> {
        throw new Error('Method not implemented.');
    }
    async loadReviewStatus(reviewId: string): Promise<ReviewStatus> {
        return (await this.loadReviewItem(reviewId)).status;
    }
    async loadReviewItem(reviewId: string): Promise<ReviewItem> {
        let reviewItem: ReviewItem
            = await this.connection.manager.findOne(
                ReviewItem,
                reviewId,
                {
                    relations: [
                        "status",
                        "status.uploadFileStatuses",
                        "status.uploadFileStatuses.pageInfos"
                    ]
                }
            );
        return reviewItem;
    }
    public async updateReviewModel(reviewModel: ReviewModel): Promise<void> {
        let repo: Repository<ReviewModel>
            = this.connection.getRepository(ReviewModel);
        if (!repo.findOne(reviewModel.modelId)) throw "attempt to insert new review model calling 'updateReviewModel'";
        await repo.save(reviewModel);
    }
    async generateFinalResults(reviewItem: ReviewItem): Promise<void> {
        let timeStamp = new Date();
        let repo: Repository<FramedPage> = this.connection.getRepository(FramedPage);
        for (let reviewModel of reviewItem.models) {
            for (let framedPage of reviewModel.framedPages) {
                framedPage.lastEditRequestDate = timeStamp;
                await repo.save(framedPage);
            }   
        }
        await Promise.all(
            reviewItem.models.map(async (reviewModel) => {
                let requestBody: EditPdfRequestBody = {
                    tasks: reviewModel.framedPages.map((framedPage: FramedPage) => {
                        return {
                            taskToken: framedPage.frameId,
                            timeStamp: framedPage.lastEditRequestDate,
                            maxWidth: framedPage.getFrame().maxWidth,
                            maxHeight: framedPage.getFrame().maxHeight,
                            sourceFiles: [{
                                originalFileUploadToken: framedPage.getSourcePageInfo().fileStatus.uploadToken,
                                originalPageNumberWhenUpload: framedPage.sourcePageNumber,
                                transformation: framedPage
                            }]
                        }
                    }),
                    reportUrl: 'reportEditPdf'
                };
                let responseBody: EditPdfResponseBody = (await axios.post(
                    'editPdf',
                    requestBody
                )).data;
                if (responseBody.hasError) throw responseBody.message;
                return;
            })
        );
    }
}

