import { SingleSheet } from "@gainhow-review/data";
import { ReviewItem, ReviewStatus } from "@gainhow-review/data";
import Book from "libs/data/src/lib/Product/Book";
import { ReviewReception } from "libs/features/src/lib/ReviewReception";
import React, { useEffect, useState } from "react";
import { BookReviewer } from "./book-reviewer/BookReviewer";
import { SingleSheetReviewer } from "./single-sheet-reviewer/SingleSheetReviewer";


export function Reviewer(props: {reviewId: string}): JSX.Element {
    let [reviewItem, setReviewItem] = useState<ReviewItem | undefined>(undefined);
    let reviewReception = new ReviewReception('/api');

    if (!reviewItem) {
        reviewReception.loadReviewItem(props.reviewId)
            .then(setReviewItem);
        return <LoadingStage/>;
    }
    if (reviewItem.product instanceof Book) {
        return (
            <BookReviewer
                reviewItem={reviewItem}
                saveReviewItem={saveReviewItem}
            />
        );
    } else if (reviewItem.product instanceof SingleSheet) {
        return (
            <SingleSheetReviewer
                reviewItem={reviewItem}
                saveReviewItem={saveReviewItem}
            />
        );
    } else throw new Error("product type not implemented");

    async function saveReviewItem(reviewItem: ReviewItem): Promise<void> {
        await Promise.all(reviewItem.models.map((model) => {
            return reviewReception.updateReviewModel(model);
        }));
        setReviewItem(reviewItem);
    }
}

function LoadingStage(): JSX.Element {

}

