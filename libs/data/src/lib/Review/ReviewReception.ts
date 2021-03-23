import ReviewItem from "./ReviewItem";
import ReviewRegistrationInfo from "./ReviewRegistrationInfo";
import ReviewStatus from "./ReviewStatus";
import UploadFileStatus from "./UploadFileStatus";

export default interface ReviewReception {
    register(reviewRegistrationInfo: ReviewRegistrationInfo): Promise<string>;
    deregister(reviewId: string): Promise<void>;
    uploadFiles?(reviewId: string, files: File[]): Promise<ReviewStatus>;
    uploadFile(reviewId: string, file: {name: string; path: string;} | File): Promise<[ReviewStatus, UploadFileStatus]>;
    deleteFile(reviewId: string, fileId: string): Promise<ReviewStatus>;
    loadReviewStatus(reviewId: string): Promise<ReviewStatus>;
    loadReviewItem(reviewId: string): Promise<ReviewItem>;
    saveReviewItem(reviewItem: ReviewItem): Promise<ReviewItem>;
    generateFinalResults(reviewItem: ReviewItem): Promise<void>;
}
