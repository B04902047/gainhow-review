import { FramedPage, ReviewItem, ReviewModel } from "@gainhow-review/data";
import { Button, ImportList, ModelInfo } from "@gainhow-review/ui";
import BookFrameDictionary from "libs/data/src/lib/FrameDictionary/BookFrameDictionary";
import Book from "libs/data/src/lib/Product/Book";
import React, { CSSProperties, Props, ReactChild, useState } from "react";
import BasicSideToolBar from "../working-stage/side-tool-bar/SideToolBar";
import { ExportOverview } from "./export-overview/ExportOverview";
import DoublePageView from "./double-page-view/DoublePageView";

interface BookReviewerProps {
    initialReviewItem: ReviewItem;
}

export function BookReviewer(props: BookReviewerProps): JSX.Element {
    let [bufferedReviewItem, updateBufferedReviewItem] = useState<ReviewItem>(props.initialReviewItem);

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
            />
            {(viewMode === "OVERVIEW")? <ExportOverview
                style={workSpaceStyle}
                reviewItem={bufferedReviewItem}
                selectedFrameIndex={selectedFrameIndex}
                onFrameSelect={(frameIndex: number) => selectFrame(frameIndex)}
                onFrameEdit={(frameIndex) => onEdit(frameIndex)}
            /> : <DoublePageView
                style={workSpaceStyle}
                reviewItem={bufferedReviewItem}
                selectedModelIndex={0}
                selectedFrameIndex={selectedFrameIndex}
                onSelect={(modelIndex,frameIndex)=>{selectFrame(frameIndex)}}
                updateReviewItem={(newReviewItem)=> updateBufferedReviewItem(newReviewItem)}
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

interface SideToolBarProps {
    style: CSSProperties;
    zoom: (power: number) => void;
}

function SideToolBar(props: SideToolBarProps): JSX.Element {
    return (
        <div style={props.style}>
            <BasicSideToolBar
                style={{
                    height: '100vh',
                }}
                zoom={() => {}}
            />
        </div>
    )
}
