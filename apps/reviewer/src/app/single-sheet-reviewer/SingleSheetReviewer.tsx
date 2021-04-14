import { ReviewItem } from "@gainhow-review/data";
import React from "react";
import ReviewingStage from "./reviewing-stage/ReviewingStage";


interface SingleSheetReviewerProps {
    reviewItem: ReviewItem;
    saveReviewItem(bufferedReviewItem: ReviewItem): void;
}

export function SingleSheetReviewer(props: SingleSheetReviewerProps): JSX.Element {
    let stage: "REVIEWING" | "EXPORT_FILE_GENERATING" | "CHECKING";
    if (props.reviewItem.status.progress === "REGISTERED") stage = "REVIEWING";
    else if (!props.reviewItem.allExportFilesAreGenerated()) stage = "EXPORT_FILE_GENERATING";
    else stage = "CHECKING";
    
    switch (stage) {
        case "REVIEWING":
            return <ReviewingStage
                initialReviewItem={props.reviewItem}
                saveReviewItem={props.saveReviewItem}
            />
        case "EXPORT_FILE_GENERATING":
            return <ExportFileGeneratingStage/>
        case "CHECKING":
            return <CheckingStage/>
    }
}

function CheckingStage(): JSX.Element {

}

function ExportFileGeneratingStage(): JSX.Element {

}