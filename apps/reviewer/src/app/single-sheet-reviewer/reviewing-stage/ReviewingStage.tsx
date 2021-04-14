
import { FramedPage, ReviewItem } from '@gainhow-review/data';
import { ImportList, ModelInfo, ExportList, Button } from '@gainhow-review/ui';
import React, { CSSProperties, useState } from 'react';
import WorkSpace from './work-space/WorkSpace';

  import './WorkingStage.module.css';
  

/* eslint-disable-next-line */
export interface ReviewingStageProps {
  initialReviewItem: ReviewItem;  // for buffering in current component
  saveReviewItem(reviewItem: ReviewItem): void;
}

export function ReviewingStage(props: ReviewingStageProps): JSX.Element {

  let [bufferedReviewItem, updateBufferedReviewItem] = useState<ReviewItem>(props.initialReviewItem);

  let [[selectedModelIndex, selectedFrameIndex], selectFrame] = useState<[number, number]>([0, 0]);
  let selectedFramedPage: FramedPage | undefined
    = bufferedReviewItem.getFramedPage(selectedModelIndex, selectedFrameIndex);
  if (!selectedFramedPage) throw new Error("debug: selected frame is undefined???");

  let [importListIsHidden, setImportListIsHidden] = useState<boolean>(false);
  let middleAreaHeight: string = "calc(100vh - 182px)";
  let importListStyle: CSSProperties = {
    display: "inline-block",
    verticalAlign: "top",
    width: (importListIsHidden)? 40: 240,
    height: middleAreaHeight,
  };
  
  const [modelInfoIsHidden, setModelInfoIsHidden] = useState<boolean>(false);
  let modelInfoStyle: CSSProperties = {
    display: "inline-block",
    verticalAlign: "top",
    width: (modelInfoIsHidden)? 40: 300,
    height: middleAreaHeight
  };

  let workSpaceStyle: CSSProperties = {
    display: "inline-block",
    height: middleAreaHeight,
    verticalAlign: "top",
    backgroundColor: "#E4E4E4",
    border: "solid 2px #E4E4E4",
    borderBottom: "none",
    width: `calc(100vw - ${importListStyle.width}px - ${modelInfoStyle.width}px - 14px)`,
  };

  let exportListStyle: CSSProperties = {
    display: 'inline-block',
    verticalAlign: 'top',
    width: `calc(100vw - 300px - 6px)`,
    height: 160,
  };

  let downRightAreaStyle: CSSProperties = {
    display: 'inline-block',
    width: 300,
    height: 180,
    verticalAlign: 'top',
    border: "solid 2px #E4E4E4",
    borderLeft: "none",
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
  return (
    <div>
      <div style={{whiteSpace: 'nowrap'}}>
        <ImportList
          style={importListStyle}
          files={bufferedReviewItem.status.uploadFileStatuses}
          selectPage={(fileIndex: number, pageIndex: number) => {
            let newFramedPage: FramedPage = new FramedPage(
              selectedFramedPage.frameId,
              selectedFramedPage.frameName,
              selectedFramedPage.reviewModel,
              selectedFrameIndex
            );
            newFramedPage.sourceFileIndex = fileIndex;
            newFramedPage.sourcePageNumber = pageIndex;
            let newReviewItemForBuffering: ReviewItem = bufferedReviewItem.setFramedPageImmutably(
              selectedModelIndex,
              selectedFrameIndex,
              newFramedPage
            );
            updateBufferedReviewItem(newReviewItemForBuffering);
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
        <WorkSpace
          style={workSpaceStyle}
          framedPage={bufferedReviewItem.getFramedPage(selectedModelIndex, selectedFrameIndex)}
        />
        <ModelInfo
          product={bufferedReviewItem.product}
          hidable
          isHidden={modelInfoIsHidden}
          onToggle={() => setModelInfoIsHidden(!modelInfoIsHidden)}
          style={modelInfoStyle}
        />
      </div>
      <ExportList
        style={exportListStyle}
        reviewItem={bufferedReviewItem}
        selectedModelIndex={selectedModelIndex}
        selectedFrameIndex={selectedFrameIndex}
        onFrameSelect={(modelIndex: number, frameIndex: number) => selectFrame([modelIndex, frameIndex])}
      />
      <div style={downRightAreaStyle}>
        <Button
          style={nextStepButtonStyle}
          isPrimary
        >
          預覽列印
        </Button>
        <Button style={previousStepButtonStyle}>
          下一步
        </Button>
      </div>
    </div>
  );
  
};


export default ReviewingStage;

