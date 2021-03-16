import ReviewItem from "./ReviewItem";
import ReviewRegistrationInfo from "./ReviewRegistrationInfo";
import ReviewStatus from "./ReviewStatus";

export default interface ReviewReception {
    register(reviewRegistrationInfo: ReviewRegistrationInfo): Promise<string>;
    deregister(reviewId: string): Promise<void>;
    uploadFiles(reviewId: string, numberOfFiles: number, files: Array<File>): Promise<ReviewStatus>;
    deleteFile(reviewId: string, fileId: string): Promise<ReviewStatus>;
    loadReviewStatus(reviewId: string): Promise<ReviewStatus>;
    loadReviewItem(reviewId: string): Promise<ReviewItem>;
    saveReviewItem(reviewItem: ReviewItem): Promise<ReviewItem>;
    generateFinalResults(reviewItem: ReviewItem): Promise<void>;
}
