import { ReviewItem, FramedPage } from "@gainhow-review/data";
import { Button, ImportList, ModelInfo } from "@gainhow-review/ui";
import React, { useState, CSSProperties, useEffect } from "react";


import DoublePageViewMode from '../../../assets/icons/DoublePageViewMode.svg';
import DoublePageViewModeBlue from '../../../assets/icons/DoublePageViewModeBlue.svg';
import OverviewMode from '../../../assets/icons/OverviewMode.svg';
import OverviewModeBlue from '../../../assets/icons/OverviewModeBlue.svg';


import BasicSideToolBar, { Icon } from "../../single-sheet-reviewer/reviewing-stage/side-tool-bar/SideToolBar";
import { ExportOverview } from "./export-overview/ExportOverview";
import DoublePageView from "./double-page-view/DoublePageView";
import { ReviewReception } from "@gainhow-review/features";


interface BookReviewingStageProps {
    initialReviewItem: ReviewItem;
    saveReviewItem(bufferedReviewItem: ReviewItem): void;
}

export function BookReviewingStage(props: BookReviewingStageProps): JSX.Element {
    let [bufferedReviewItem, updateBufferedReviewItem] = useState<ReviewItem>(props.initialReviewItem);

    let [isLoading, setIsLoading] = useState(props.initialReviewItem.allExportFilesAreGenerated());
    /** TODO: busy check */


    let [selectedFrameIndex, selectFrame] = useState<number>(0);
    let selectedFramedPage: FramedPage | undefined
      = bufferedReviewItem.getFramedPage(0, selectedFrameIndex);
    if (!selectedFramedPage) throw new Error("debug: selected frame is undefined???");

    let [importListIsHidden, setImportListIsHidden] = useState<boolean>(true);
    let importListStyle: CSSProperties = {
        display: "inline-block",
        verticalAlign: "top",
        width: (importListIsHidden)? 40: 240,
        height: '100vh',
    };
    let rightAreaStyle: CSSProperties = {
        display: "inline-block",
        verticalAlign: "top",
    };
    let modelInfoStyle: CSSProperties = {
        width: 300,
        height: 'calc(100vh - 182px)'
    };

    let downRightAreaStyle: CSSProperties = {
        display: 'inline-block',
        width: 300,
        height: 180,
        verticalAlign: 'top',
        border: "solid 2px #E4E4E4",
        borderTop: "none",
        backgroundColor: "#F7F7F7"
    };
    let nextStepButtonStyle: CSSProperties = {
        marginBottom: 10,
        marginTop: 50,
        marginLeft: 58
    };
    let previousStepButtonStyle: CSSProperties = {
        marginLeft: 58
    };

    let workSpaceStyle: CSSProperties = {
        display: "inline-block",
        height: "100vh",
        verticalAlign: "top",
        backgroundColor: "#f4f4f4",
        border: "solid 2px #E4E4E4",
        borderBottom: "none",
        userSelect: "none",
        overflow: 'hidden',
        width: `calc(100vw - ${importListStyle.width}px - ${modelInfoStyle.width}px - 14px - 50px)`,
    };
    let [viewMode, setViewMode] = useState<"DOUBLE_PAGE"|"OVERVIEW">("OVERVIEW");
    return (
        <div>
            <ImportList
              style={importListStyle}
              files={bufferedReviewItem.status.uploadFileStatuses}
              selectPage={() => {}}
              isSelected={() => false}
              isHidden={importListIsHidden}
              onToggle={() => setImportListIsHidden(!importListIsHidden)}
            />
            <SideToolBar
                style={{
                    height: '100vh',
                    display: 'inline-block'
                }}
                zoom={() => {}}
                viewMode={viewMode}
                setViewMode={setViewMode}
            />
            {(viewMode === "OVERVIEW")? <ExportOverview
                style={workSpaceStyle}
                reviewItem={bufferedReviewItem}
                selectedFrameIndex={selectedFrameIndex}
                onFrameSelect={(frameIndex: number) => selectFrame(frameIndex)}
                onFrameEdit={(frameIndex) => onEdit(frameIndex)}
                onSwapFrames={(frameIndex1, frameIndex2) => {
                    updateBufferedReviewItem(reviewItem => reviewItem.swapFramedPagesImmutably(0, frameIndex1, frameIndex2))
                }}
            /> : <DoublePageView
                style={workSpaceStyle}
                reviewItem={bufferedReviewItem}
                selectedModelIndex={0}
                selectedFrameIndex={selectedFrameIndex}
                onSelect={(modelIndex, frameIndex) => selectFrame(frameIndex)}
            />}
            <div style={rightAreaStyle}>
                <ModelInfo
                    product={bufferedReviewItem.product}
                    isHidden={false}
                    onToggle={() => {}}
                    style={modelInfoStyle}
                    hidable={false}
                />

                <div style={downRightAreaStyle}>
                    <Button
                        style={nextStepButtonStyle}
                        isPrimary
                    >
                        下一步
                    </Button>
                    <Button style={previousStepButtonStyle}>
                        上一步
                    </Button>
                </div>
            </div>
        </div>
      );
    function onEdit(frameIndex: number): void {
        selectFrame(frameIndex);
        setViewMode("DOUBLE_PAGE");
    }
}

interface UploadFileConvertingStageProps {
    reviewItem: ReviewItem;
    reviewId: string;
    onConversionFinished(): void;
    updateReviewItem(reviewItem: ReviewItem): void;
}

function UploadFileConvertingStage(props: UploadFileConvertingStageProps): JSX.Element {

    let reviewReception = new ReviewReception('api/');
    let [reviewItem, setReviewItem] = useState<ReviewItem>(props.reviewItem);
    
    useEffect(() => {
        reviewReception.loadReviewItem(props.reviewId)
            .then(reviewItem => {
                if (reviewItem.status.allUploadFilesAreConverted()) {
                    props.onConversionFinished();
                } else {
                    setTimeout(() => setReviewItem(reviewItem), 2000);
                }
            });
    }, [reviewItem]);
    /** TODO: 畫一個可愛的等待畫面 */
    return (

    );
}

interface SideToolBarProps {
    style: CSSProperties;
    zoom: (power: number) => void;
    viewMode: "DOUBLE_PAGE"|"OVERVIEW";
    setViewMode(newMode: "DOUBLE_PAGE"|"OVERVIEW"): void;
}

function SideToolBar(props: SideToolBarProps): JSX.Element {
    return (
        <div style={{
            position: 'relative',
            ...props.style
        }}>
            <Icon
                style={{
                    position: 'absolute',
                    bottom: 510
                }}
                src={OverviewMode}
                srcWhenSelected={OverviewModeBlue}
                isSelected={props.viewMode === "OVERVIEW"}
                onClick={() => props.setViewMode("OVERVIEW")}
            />
            <Icon
                style={{
                    position: 'absolute',
                    bottom: 465
                }}
                src={DoublePageViewMode}
                srcWhenSelected={DoublePageViewModeBlue}
                isSelected={props.viewMode === "DOUBLE_PAGE"}
                onClick={() => props.setViewMode("DOUBLE_PAGE")}
            />
            <hr style={{
                position: 'absolute',
                bottom: 450,
                width: 33,
                margin: 8,
                border: 'solid 1px #d9d9d9'
            }}/>
            <BasicSideToolBar
                style={{
                    height: '100vh',
                }}
                zoom={() => {}}
            />
        </div>
    )
}
