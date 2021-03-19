
import { ReviewItem, ReviewReception as ReviewReceptionInterface, ReviewRegistrationInfo, ReviewStatus, UploadFileStatus } from '@gainhow-review/data'
import { RegisterRequestBody, RegisterResponseBody } from '@gainhow-review/interfaces';
import axios from 'axios';
import { serialize } from 'class-transformer';

export class ReviewReception implements ReviewReceptionInterface {
    constructor(
        readonly requestUrl: string
    ) {}
    async register(reviewRegistrationInfo: ReviewRegistrationInfo): Promise<string> {
        let requestBody: RegisterRequestBody = {
            reviewRegistrationInfoJson: serialize(reviewRegistrationInfo)
        };
        let responseBody: RegisterResponseBody = (await axios.post(
            this.requestUrl + '/register',
            requestBody
        )).data;
        console.log(responseBody);
        if (responseBody.isSuccess === true) {
            return responseBody.reviewId;
        } else throw responseBody.error;
    }
    deregister(reviewId: string): Promise<void> {
        throw new Error('Method not implemented.');
    }
    uploadFiles(reviewId: string, files: File[]): Promise<ReviewStatus> {
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