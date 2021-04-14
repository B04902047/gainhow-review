import { ReviewItem } from "@gainhow-review/data";
import { useEffect } from "react";
import { ReviewReception } from './ReviewReception';

export function useReviewItemBusyChecker(
    reviewId: string,
    reviewItem: ReviewItem,
    updateReviewItem: (reviewItem: ReviewItem) => void,
    stop: (reviewItem: ReviewItem) => void,
    shouldStop: (reviewItem: ReviewItem) => boolean,
    isBusy: boolean
) {
    let reviewReception = new ReviewReception('/api');
    useEffect(() => {
        if (!isBusy) return;
        reviewReception.loadReviewItem(reviewId)
            .then(reviewItem => {
                if (shouldStop(reviewItem)) {
                    stop(reviewItem);
                } else {
                    setTimeout(() => updateReviewItem(reviewItem), 2000);
                }
            });
    }, [reviewItem, isBusy]);
}