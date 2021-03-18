import { ReviewItem, ReviewReception as ReviewReceptionInterface, ReviewRegistrationInfo, ReviewStatus } from '@gainhow-review/data'
import { createConnection, ConnectionOptions, Connection, Repository } from 'typeorm';

class ReviewReception implements ReviewReceptionInterface {
    constructor(
        public connectionOptions: ConnectionOptions
    ) {}

    // TODO: move to libs/utils
    private getRandomString(length: number): string {

    }

    /**
     *  根據反序列化後的reviewRegistrationInfo，初始化新的reviewItem
     *  ⇒ 把reviewItem序列化之後，用一個新的reviewId存入自己的database
     *  ⇒ 把reviewItem裡的reviewStatus序列化後回傳
     */
    async register(reviewRegistrationInfo: ReviewRegistrationInfo): Promise<string> {
        let newStatus = new ReviewStatus(reviewRegistrationInfo.numberOfModels);
        const connection = await createConnection(this.connectionOptions);
        const reviewIdLength: number = 36;
        let reviewId: string = this.getRandomString(reviewIdLength);
        while (await connection.manager.findOne(ReviewItem, reviewId)) {
            reviewId = this.getRandomString(reviewIdLength);
        }
        let newReviewItem = new ReviewItem(
            reviewId,
            newStatus,
            reviewRegistrationInfo.product
        );
        await connection.manager.save(newReviewItem);
        if (newReviewItem.reviewId !== undefined)
            return newReviewItem.reviewId;
        throw new Error("TypeORM should have set reviewId, but didn't.");
    }
    async deregister(reviewId: string): Promise<void> {
        const connection: Connection = await createConnection(this.connectionOptions);
        let repo: Repository<ReviewItem> = connection.getRepository(ReviewItem);
        const itemToRemove: ReviewItem = await repo.findOne(reviewId);
        await repo.remove(itemToRemove);
    }
    uploadFiles(reviewId: string, numberOfFiles: number, files: File[]): Promise<ReviewStatus> {
        throw new Error('Method not implemented.');
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