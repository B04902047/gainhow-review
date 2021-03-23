import { ReviewItem, ReviewReception as ReviewReceptionInterface, ReviewRegistrationInfo, ReviewStatus, UploadFilePageInfo, UploadFileStatus } from '@gainhow-review/data'
import axios, { AxiosError, AxiosResponse } from 'axios';
import { createConnection, ConnectionOptions, Connection, Repository } from 'typeorm';
import * as fs from 'fs'
import * as FormData from 'form-data';
import { File } from 'formidable';

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

    async busyCheckFileConversion(uploadFileStatus: UploadFileStatus): Promise<void> {
        let uploadToken: string | undefined = uploadFileStatus.uploadToken;
        let pageInfos: Array<UploadFilePageInfo> = await this.keepTryingToGetSomething(this.checkFileConversion, uploadToken);
        // TODO: save pageInfos into uploadFileStatus
    }
    async checkFileConversion(uploadToken: string): Promise<Array<UploadFilePageInfo> | "not finished yet"> {
        // TODO: call file converting server
    }
    private keepTryingToGetSomething<X, Y>(
        tryToDo: (input: X) => Promise<Y | "not finished yet">,
        input: X,
        timeout: number = 2000
    ): Promise<Y> {

    }

	// private timerCount: number = 0;
	// private getTimeoutTime(): number {
	// 	this.timerCount += 1;
	// 	return this.timerCount * 300;
	// }
	// private clearTimer(): void {
	// 	this.timerCount -= 1;
	// }

	// async getResultingPages(uploadFileToken: string)
	// 	: Promise<Array<{
	// 		resultingPdfUrl: string;
	// 		resultingJpegUrl: string
	// 	}>> {
	// 		const result = await this.keepTryingToGetSomething(
	// 			tryGetResultingPages,
	// 			uploadFileToken,
	// 			this.getTimeoutTime()
	// 		);
	// 		this.clearTimer();
	// 		return result;

	// 	function tryGetResultingPages(uploadFileToken: string)
	// 		: Promise<null | Array<{
	// 			resultingPdfUrl: string;
	// 			resultingJpegUrl: string
	// 		}>> {
	// 		return (
	// 			axios.post('php/getResultingPages.php', {
	// 				token: uploadFileToken
	// 			})
	// 				.catch((error: AxiosError<any>) => {
	// 					throw ErrorType.CONNECTION_FAILURE;
	// 				})
	// 				.then((response: AxiosResponse<any>) => {
	// 					let result: any = response.data;
	// 					if (!result.isSuccess) throw ErrorType.POSTCONDITION_FAILURE;
	// 					if (!result.isFinished) return null;
	// 					let pageDatas: any[] = result.data;
	// 					let output = pageDatas
	// 						.sort(function (a: any, b: any) {
	// 							return (a.pagenum > b.pagenum) ? 1 : -1;
	// 						})
	// 						.map(function (pageData: any) {
	// 							return {
	// 								resultingPdfUrl: pageData.pdfurl,
	// 								resultingJpegUrl: pageData.imgurl
	// 							};
	// 						});
	// 					return output;
	// 				})
	// 		);
	// 	}
	// }
	
	// keepTryingToGetSomething<X, Y>(
	// 	tryToGetSomething: (input: X) => Promise<Y | null>,
	// 	input: X,
	// 	timeout: number = 2000
	// ): Promise<Y> {
	// 	return new Promise((resolve, reject) => {
	// 		setTimeout(async () => {
	// 			try {
	// 				let output: Y | null = await tryToGetSomething(input);
	// 				if (output) resolve(output);
	// 				else {
	// 					let output: Y = await this.keepTryingToGetSomething(tryToGetSomething, input, timeout);
	// 					resolve(output);
	// 				}
	// 			} catch (error) {
	// 				reject(error);
	// 			}
	// 		}, timeout);
	// 	});
	// }
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

