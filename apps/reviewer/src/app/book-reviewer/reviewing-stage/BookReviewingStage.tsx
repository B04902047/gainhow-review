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
import { ReviewReception, useReviewItemBusyChecker } from "@gainhow-review/features";
import Book from "libs/data/src/lib/Product/Book";
import { TextHistory } from '@gainhow-review/utils';

interface BookReviewingStageProps {
    initialReviewItem: ReviewItem;
    saveReviewItem(bufferedReviewItem: ReviewItem): Promise<void>;
    onFinished(bufferedReviewItem: ReviewItem): void;
}

function useReviewItemHistory(
    reviewItem: ReviewItem,
    setReviewItem: (reviewItem: ReviewItem) => void,
    capacity: number = 20
): {
    isUndoable: boolean;
    isRedoable: boolean;
    record: (reviewItem: ReviewItem) => void;
    redo: () => void;
    undo: () => void
} {
    let [history, setHistory] = useState<TextHistory>(new TextHistory(capacity));
    useEffect(() => {
        record(reviewItem);
    }, [])
    return {
        isUndoable: history.isUndoable,
        isRedoable: history.isRedoable,
        record,
        redo,
        undo
    }
    function redo(): void {
        setHistory(history => {
            let newHistory = history.clone();
            let reviewItemJson: string | null = newHistory.redo();
            if (reviewItemJson === null) throw new Error("redo out of history memory");
            let reviewItem: ReviewItem = ReviewItem.fromJson(reviewItemJson);
            setReviewItem(reviewItem);
            return newHistory;
        })
    }
    function undo(): void {
        setHistory(history => {
            let newHistory = history.clone();
            let reviewItemJson: string | null = newHistory.undo();
            if (reviewItemJson === null) throw new Error("undo out of history memory");
            let reviewItem: ReviewItem = ReviewItem.fromJson(reviewItemJson);
            setReviewItem(reviewItem);
            return newHistory;
        })
    }
    function record(reviewItem: ReviewItem): void {
        setHistory(history => {
            let newHistory = history.clone();
            newHistory.act(ReviewItem.toJson(reviewItem));
            return newHistory;
        });
    }
}

export function BookReviewingStage(props: BookReviewingStageProps): JSX.Element {
    let [bufferedReviewItem, updateBufferedReviewItem] = useState<ReviewItem>(props.initialReviewItem);
    const initialViewPercentage: number = 100;
    const [viewPercentage, setViewPercentage] = useState<number>(initialViewPercentage);
    let [isLoading, setIsLoading] = useState(props.initialReviewItem.allUploadFilesAreConverted());

    // busy checking
    // useReviewItemBusyChecker(
    //     bufferedReviewItem.reviewId,
    //     bufferedReviewItem,
    //     updateBufferedReviewItem,
    //     (reviewItem) => { 
    //         setIsLoading(false);
    //         let initializedReviewItem = initFramedPagesWithUploadFiles(reviewItem)
    //         updateBufferedReviewItem(initializedReviewItem);
    //         props.saveReviewItem(initializedReviewItem);
    //     },
    //     (reviewItem) => reviewItem.allUploadFilesAreConverted(),
    //     isLoading
    // );

    let {
        isRedoable,
        isUndoable,
        record,
        undo,
        redo
    } = useReviewItemHistory(
        props.initialReviewItem,
        updateBufferedReviewItem
    );

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
    let [nextStepButtonIsTriggered, setNextStepButtonIsTriggered] = useState<boolean>(false);
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
        overflow: 'auto',
        width: `calc(100vw - ${importListStyle.width}px - ${modelInfoStyle.width}px - 14px - 50px)`,
    };
    let [viewMode, setViewMode] = useState<"DOUBLE_PAGE"|"OVERVIEW">("OVERVIEW");

    function delectFrame () {
        updateBufferedReviewItem((bufferedReviewItem) =>{
            let newReviewItem = bufferedReviewItem.setSourcePageIndexImmutably(
              0,
              selectedFrameIndex,
              undefined,
              undefined
            )
            record(newReviewItem);
            return newReviewItem;
        }
          );

    }
    return (
        <div>
            {isLoading && <UploadFileConvertingModal reviewItem={bufferedReviewItem}/>}
            <ImportList
              style={importListStyle}
              files={bufferedReviewItem.status.uploadFileStatuses}
              selectPage={(fileIndex: number, pageIndex: number) => {
                updateBufferedReviewItem((bufferedReviewItem) =>{
                  let newBufferedReviewItem = bufferedReviewItem.setSourcePageIndexImmutably(
                    0,
                    selectedFrameIndex,
                    fileIndex,
                    pageIndex
                  )
                  record(newBufferedReviewItem);
                  return (newBufferedReviewItem);
                }
                );
              }}
              isSelected={(fileNumber: number, pageIndex: number) => {
                return (
                  fileNumber === selectedFramedPage.sourceFileIndex
                  && pageIndex === selectedFramedPage.sourcePageNumber
                )
              }}
              isHidden={importListIsHidden}
              onToggle={() => setImportListIsHidden(!importListIsHidden)}
            />
            <SideToolBar
                style={{
                    height: '100vh',
                    display: 'inline-block',
                    userSelect: 'none'
                }}
                zoom={(ratio) => setViewPercentage(Math.pow(initialViewPercentage, ratio))}
                viewMode={viewMode}
                setViewMode={setViewMode}
                onRedo={() => { if (isRedoable) redo(); } }
                onUndo={() => { if (isUndoable) undo(); } }
            />
            {(viewMode === "OVERVIEW")? <ExportOverview
                style={workSpaceStyle}
                reviewItem={bufferedReviewItem}
                selectedFrameIndex={selectedFrameIndex}
                onFrameSelect={(frameIndex: number) => selectFrame(frameIndex)}
                onFrameEdit={(frameIndex) => onEdit(frameIndex)}
                onSwapFrames={(frameIndex1, frameIndex2) => {
                    updateBufferedReviewItem(reviewItem => {
                        let newReviewItem = reviewItem.swapFramedPagesImmutably(0, frameIndex1, frameIndex2);
                        record(newReviewItem);
                        return newReviewItem;
                    })
                }}
                onInsertBlankPageAfter={insertBlankFramedPageAfter}
                onShiftFramesBetween={shiftFramesBetween}
                onDeleteFrame={deleteFrame}
            /> : <DoublePageView
                style={workSpaceStyle}
                reviewItem={bufferedReviewItem}
                selectedModelIndex={0}
                selectedFrameIndex={selectedFrameIndex}
                onSelect={(modelIndex, frameIndex) => selectFrame(frameIndex)}
                onDeleteSorceFileImage={()=>{delectFrame()}}
                updateReviewItem={updateBufferedReviewItem}
                viewPercentage={viewPercentage}
                onShiftFramesBetween={shiftFramesBetween}
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
                        disabled={nextStepButtonIsTriggered}
                        onClick={async () => {
                            let reviewReception = new ReviewReception('/api');
                            setNextStepButtonIsTriggered(true);
                            try {
                                await props.saveReviewItem(bufferedReviewItem);
                                await reviewReception.generateFinalResults(bufferedReviewItem);
                                setNextStepButtonIsTriggered(false);
                                props.onFinished(bufferedReviewItem);
                            } catch (error) {
                                // TODO: 提醒使用者可以再按一次
                                // setNextStepButtonIsTriggered(false);
                            }
                        }}
                    >
                        {(nextStepButtonIsTriggered)? "印刷檔生成中..." : "生成印刷檔"}
                        
                    </Button>
                    <Button
                        style={previousStepButtonStyle}
                        onClick={() => {}}
                    >
                        上一頁
                    </Button>
                </div>
            </div>
        </div>
      );
    function onEdit(frameIndex: number): void {
        selectFrame(frameIndex);
        setViewMode("DOUBLE_PAGE");
    }
    function shiftFramesBetween(frameIndex1: number, frameIndex2: number): void {
        updateBufferedReviewItem(bufferedReviewItem => {
            let newReviewItem = bufferedReviewItem.shiftFramedPagesBetween(0, frameIndex1, frameIndex2);
            record(newReviewItem);
            return newReviewItem;
        });
    }

    function insertBlankFramedPageAfter(position: number) {

        updateBufferedReviewItem(bufferedReviewItem => {
            let newBook = (bufferedReviewItem.product as Book).clone();
            newBook.numberOfPages += 1;

            let newReviewItem = new ReviewItem(
                bufferedReviewItem.status,
                bufferedReviewItem.reviewId,
                newBook
            )
            let oldFramedPages: FramedPage[] = bufferedReviewItem.models[0].framedPages;
            let newFramedPages: FramedPage[] = newReviewItem.models[0].framedPages;
            for (let i=0; i<=position; i++) {
                let oldFramedPage: FramedPage = oldFramedPages[i];
                let newFramedPage: FramedPage = newFramedPages[i];
                cloneFramedPageExceptForNameAndIdAndIndexInto(oldFramedPage, newFramedPage);
            }

            for (let i=position+1; i<oldFramedPages.length; i++) {
                let oldFramedPage: FramedPage = oldFramedPages[i];
                let newFramedPage: FramedPage = newFramedPages[i+1];
                cloneFramedPageExceptForNameAndIdAndIndexInto(oldFramedPage, newFramedPage);
            }
            newReviewItem.models[0].framedPages = newFramedPages;
            record(newReviewItem);
            return newReviewItem;
        })
    }
    function insertBlankFramedPageBefore(position: number) {
        
    }

    function cloneFramedPageExceptForNameAndIdAndIndexInto(
        oldFramedPage: FramedPage,
        newFramedPage: FramedPage
    ): void {
        newFramedPage.sourceFileIndex = oldFramedPage.sourceFileIndex;
        newFramedPage.sourcePageNumber = oldFramedPage.sourcePageNumber;
        newFramedPage.positionX = oldFramedPage.positionX;
        newFramedPage.positionY = oldFramedPage.positionY;
        newFramedPage.scaleX = oldFramedPage.scaleX;
        newFramedPage.scaleY = oldFramedPage.scaleY;
        newFramedPage.rotationDegree = oldFramedPage.rotationDegree;
    }
    function deleteFrame(frameIndex: number): void {

        updateBufferedReviewItem(bufferedReviewItem => {

            let newBook = (bufferedReviewItem.product as Book).clone();
            if (newBook.numberOfPages <= 0) return bufferedReviewItem;
            newBook.numberOfPages -= 1;

            let newReviewItem = new ReviewItem(
                bufferedReviewItem.status,
                bufferedReviewItem.reviewId,
                newBook
            )
            let oldFramedPages: FramedPage[] = bufferedReviewItem.models[0].framedPages;
            let newFramedPages: FramedPage[] = newReviewItem.models[0].framedPages;
            for (let i=0; i<frameIndex; i++) {
                let oldFramedPage: FramedPage = oldFramedPages[i];
                let newFramedPage: FramedPage = newFramedPages[i];
                cloneFramedPageExceptForNameAndIdAndIndexInto(oldFramedPage, newFramedPage);
            }

            for (let i=frameIndex+1; i<oldFramedPages.length; i++) {
                let oldFramedPage: FramedPage = oldFramedPages[i];
                let newFramedPage: FramedPage = newFramedPages[i-1];
                cloneFramedPageExceptForNameAndIdAndIndexInto(oldFramedPage, newFramedPage);
            }
            newReviewItem.models[0].framedPages = newFramedPages;
            record(newReviewItem);
            /** 刪頁的時候 如果當前選擇的frameIndex是最後一個，要把它往前 */
            return newReviewItem;

            function cloneFramedPageExceptForNameAndIdAndIndexInto(oldFramedPage: FramedPage, newFramedPage: FramedPage): void {
                newFramedPage.sourceFileIndex = oldFramedPage.sourceFileIndex;
                newFramedPage.sourcePageNumber = oldFramedPage.sourcePageNumber;
                newFramedPage.positionX = oldFramedPage.positionX;
                newFramedPage.positionY = oldFramedPage.positionY;
                newFramedPage.scaleX = oldFramedPage.scaleX;
                newFramedPage.scaleY = oldFramedPage.scaleY;
                newFramedPage.rotationDegree = oldFramedPage.rotationDegree;
            }
        })
    }
}

function initFramedPagesWithUploadFiles(reviewItem: ReviewItem): ReviewItem {

}



interface UploadFileConvertingModalProps {
    reviewItem: ReviewItem;
}

function UploadFileConvertingModal(props: UploadFileConvertingModalProps): JSX.Element {
    /** TODO: 畫一個可愛的等待畫面 */
    return <></>;
}

interface SideToolBarProps {
    style: CSSProperties;
    zoom: (power: number) => void;
    viewMode: "DOUBLE_PAGE"|"OVERVIEW";
    setViewMode(newMode: "DOUBLE_PAGE"|"OVERVIEW"): void;
    onUndo(): void;
    onRedo(): void;
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
                zoom={props.zoom}
                onRedo={props.onRedo}
                onUndo={props.onUndo}
            />
        </div>
    )
}
