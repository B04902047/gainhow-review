import { ReviewItem } from "@gainhow-review/data";
import { ReviewReception } from "@gainhow-review/features";
import React from "react";
import { useState } from "react";
import { CheckingStage } from "./checking-stage/CheckingStage";
import { BookReviewingStage } from "./reviewing-stage/BookReviewingStage";

interface BookReviewerProps {
    reviewItem: ReviewItem;
    saveReviewItem(reviewItem: ReviewItem): Promise<void>;
}

export function BookReviewer(props: BookReviewerProps): JSX.Element {
    let initialStage: "REVIEWING" | "CHECKING";
    if (props.reviewItem.status.progress === "REVIEWED") initialStage = "CHECKING";
    else initialStage = "REVIEWING";
    let [stage, setStage] = useState<"REVIEWING" | "CHECKING">(initialStage);
    
    switch (stage) {
        case "REVIEWING":
            return <BookReviewingStage
                initialReviewItem={props.reviewItem}
                saveReviewItem={props.saveReviewItem}
                onFinished={() => setStage("CHECKING")}
            />;
        case "CHECKING":
            return <CheckingStage initialReviewItem={props.reviewItem}/>;
    }
}

