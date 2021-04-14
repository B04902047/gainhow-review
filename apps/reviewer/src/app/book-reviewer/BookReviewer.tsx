import { ReviewItem } from "@gainhow-review/data";
import React from "react";
import { CheckingStage } from "./checking-stage/CheckingStage";
import { BookReviewingStage } from "./reviewing-stage/BookReviewingStage";

interface BookReviewerProps {
    reviewItem: ReviewItem;
    saveReviewItem(bufferedReviewItem: ReviewItem): void;
}

export function BookReviewer(props: BookReviewerProps): JSX.Element {
    let stage: "REVIEWING" | "CHECKING";
    if (props.reviewItem.status.progress === "REVIEWED") stage = "CHECKING";
    else stage = "REVIEWING";
    
    switch (stage) {
        case "REVIEWING":
            return <BookReviewingStage
                initialReviewItem={props.reviewItem}
                saveReviewItem={props.saveReviewItem}
            />;
        case "CHECKING":
            return <CheckingStage/>;
    }
}

