
import { ReviewItem, ReviewModel, ReviewReception as ReviewReceptionInterface, ReviewRegistrationInfo, ReviewStatus, UploadFileStatus } from '@gainhow-review/data'
import { LoadReviewItemRequestBody, LoadReviewItemResponseBody, LoadReviewStatusRequestBody, LoadReviewStatusResponseBody, RegisterRequestBody, RegisterResponseBody, UpdateReviewModelRequestBody, UpdateReviewModelResponseBody, UploadResponseBody, UploadSuccessResponseBody } from '@gainhow-review/interfaces';
import axios from 'axios';
import { deserialize, serialize } from 'class-transformer';
import { response } from 'express';
import Resumable from 'resumablejs';

export class ReviewReception implements ReviewReceptionInterface {
    constructor(
        readonly requestUrl: string
    ) {}
    async updateReviewModel(reviewModel: ReviewModel): Promise<void> {
        let requestBody: UpdateReviewModelRequestBody = {
            reviewModelInJson: serialize(reviewModel)
        };
        let responseBody: UpdateReviewModelResponseBody = (await axios.post(
            this.requestUrl + '/updateReviewModel',
            requestBody
        )).data;
        if (responseBody.isSuccess === true) return;
        else throw responseBody.error;
    }
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
    uploadFile(reviewId: string, file: File): Promise<ReviewStatus> {
        return new Promise((resolve, reject) => {
            let uploader = new Resumable({
                uploadMethod: "POST",
                target: this.requestUrl + '/upload',
                query: { reviewId },
                method: 'multipart',
                testChunks: false,
                chunkSize: 2 * 1024 * 1024 * 1024,
                maxFileSize: 2 * 1024 * 1024 * 1024 as any
            });
            uploader.on('fileAdded', () => {
                uploader.upload();
            });
            uploader.on('fileSuccess', (file: Resumable.ResumableFile, message: string) => {
                let responseBody: UploadResponseBody = JSON.parse(message);
                if (responseBody.isSuccess === true) {
                    let reviewStatus: ReviewStatus = deserialize(ReviewStatus, responseBody.reviewStatusInJson);
                    resolve(reviewStatus);
                } else {
                    reject(responseBody.error);
                }
            })
            uploader.on('error', (message, file) => {
                reject(message);
            })
            uploader.addFile(file);
        })
    }
    deleteFile(reviewId: string, fileId: string): Promise<ReviewStatus> {
        throw new Error('Method not implemented.');
    }
    async loadReviewStatus(reviewId: string): Promise<ReviewStatus> {
        let requestBody: LoadReviewStatusRequestBody = {
            reviewId
        };
        let responseBody: LoadReviewStatusResponseBody = (await axios.post(
            this.requestUrl + '/loadReviewStatus',
            requestBody
        )).data;
        if (responseBody.isSuccess === true) {
            return deserialize(ReviewStatus, responseBody.reviewStatusInJson);
        } else throw responseBody.error;
    }
    async loadReviewItem(reviewId: string): Promise<ReviewItem> {
        let requestBody: LoadReviewItemRequestBody = {
            reviewId
        };
        let responseBody: LoadReviewItemResponseBody = (await axios.post(
            this.requestUrl + '/loadReviewItem',
            requestBody
        )).data;
        if (responseBody.isSuccess === true) {
            return deserialize(ReviewItem, responseBody.reviewItemInJson);
        } else throw responseBody.error;
    }
    generateFinalResults(reviewItem: ReviewItem): Promise<void> {
        throw new Error('Method not implemented.');
    }

}