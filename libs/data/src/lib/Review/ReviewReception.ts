import ReviewItem from "./ReviewItem";
import ReviewModel from "./ReviewModel";
import ReviewRegistrationInfo from "./ReviewRegistrationInfo";
import ReviewStatus from "./ReviewStatus";
import UploadFileStatus from "./UploadFileStatus";

export default interface ReviewReception {
    register(reviewRegistrationInfo: ReviewRegistrationInfo): Promise<string>;
    deregister(reviewId: string): Promise<void>;
    uploadFiles?(reviewId: string, files: File[]): Promise<ReviewStatus>;
    uploadFile:
        ((reviewId: string, fileName: string, filePath: string) => Promise<[ReviewStatus, UploadFileStatus]>)
        | ((reviewId: string, file: File) => Promise<ReviewStatus>)
    ;
    deleteFile(reviewId: string, fileId: string): Promise<ReviewStatus>;
    loadReviewStatus(reviewId: string): Promise<ReviewStatus>;
    loadReviewItem(reviewId: string): Promise<ReviewItem>;
    updateReviewModel(reviewModel: ReviewModel): Promise<void>;
    generateFinalResults(reviewItem: ReviewItem): Promise<void>;
}
