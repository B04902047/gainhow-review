import { ReviewItem } from "@gainhow-review/data";
import { useState } from "react";
import { useReviewItemBusyChecker } from '@gainhow-review/features';
import React from "react";


interface CheckingStageProps {
    initialReviewItem: ReviewItem;
}

export function CheckingStage(props: CheckingStageProps): JSX.Element {
    let [bufferedReviewItem, updateBufferedReviewItem] = useState<ReviewItem>(props.initialReviewItem);

    let [isLoading, setIsLoading] = useState(props.initialReviewItem.allExportFilesAreGenerated());
    
    // busy checking
    useReviewItemBusyChecker(
        bufferedReviewItem.reviewId,
        bufferedReviewItem,
        updateBufferedReviewItem,
        (reviewItem) => { 
            setIsLoading(false);
            updateBufferedReviewItem(reviewItem);
        },
        (reviewItem) => reviewItem.allExportFilesAreGenerated(),
        isLoading
    );
    return (
        <div>
            {isLoading && <ExportFileGeneratingModal reviewItem={bufferedReviewItem}/>}
        </div>
    );
}

interface ExportFileGeneratingModalProps {
    reviewItem: ReviewItem;
}

function ExportFileGeneratingModal(props: ExportFileGeneratingModalProps): JSX.Element {
    return (

    );
}