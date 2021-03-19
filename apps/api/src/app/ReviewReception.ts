import { ReviewItem, ReviewReception as ReviewReceptionInterface, ReviewRegistrationInfo, ReviewStatus, UploadFileStatus } from '@gainhow-review/data'
import axios from 'axios';
import { createConnection, ConnectionOptions, Connection, Repository } from 'typeorm';

export class ReviewReception implements ReviewReceptionInterface {
    constructor(
        public connection: Connection
    ) {}

    // TODO: move to libs/utils
    private getRandomString(length: number): string {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
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
    async uploadFiles(reviewId: string, files: File[]): Promise<ReviewStatus> {
        throw new Error('Method not implemented.');
        // let reviewItemRepo: Repository<ReviewItem> = this.connection.getRepository(ReviewItem);
        // let uploadFileStatusRepo: Repository<UploadFileStatus> = this.connection.getRepository(UploadFileStatus);
        // let reviewItem: ReviewItem = await reviewItemRepo.findOne(reviewId, { relations: ["status"] });
        // let promises: Promise<void>[] = files.map(async (file: File): Promise<void> => {
        //     let fileStatus = new UploadFileStatus(
        //         reviewItem.status,
        //         file.name
        //     );
        //     await uploadFileStatusRepo.save(fileStatus);
        //     try {
        //         let uploadToken: string = await axios.post();
        //         fileStatus.uploadToken = uploadToken;
        //         fileStatus.currentStage = "GENERATING_PRINTABLE_PAGES";
        //         await uploadFileStatusRepo.save(fileStatus);
        //     } catch {
        //         fileStatus.errorStage = "UPLOADING";
        //         await uploadFileStatusRepo.save(fileStatus);
        //     }
        // });
        // await Promise.all(promises);
        // let updatedReviewItem: ReviewItem
        //     = await reviewItemRepo.findOne(
        //         reviewId,
        //         {
        //             relations: [
        //                 "status",
        //                 "status.uploadFileStatuses",
        //                 "status.uploadFileStatuses.pageInfos"
        //             ]
        //         }
        //     );
        // return updatedReviewItem.status;
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