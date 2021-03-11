
import { FramedPage, ReviewItem } from '@gainhow-review/data';
import { ImportList, ModelInfo, ExportList } from '@gainhow-review/ui';
import { realpath } from 'fs';
import React, { CSSProperties, useState } from 'react';
import { reviewItem, singleSheet1, uploadFileStatuses1 } from '../testObjects1';
import { Canvans as Canvas } from './canvans/Canvans'
import { SideToolBar } from './side-tool-bar/SideToolBar';
import WorkSpace from './work-space/WorkSpace';

  import './WorkingStage.module.css';
  

/* eslint-disable-next-line */
export interface WorkingStageProps {
  initialReviewItem: ReviewItem;  // for buffering in current component
}

export function WorkingStage(props: WorkingStageProps): JSX.Element {

  let [bufferedReviewItem, updateBufferedReviewItem] = useState<ReviewItem>(props.initialReviewItem);

  let firstModelIndex: number = 1;
  let firstFrameIndex: string = bufferedReviewItem.frameDictionary.frameIndices[0];
  let [[selectedModelIndex, selectedFrameIndex], selectFrame] = useState<[number, string]>([firstModelIndex, firstFrameIndex]);
  let selectedFramedPage: FramedPage | undefined = bufferedReviewItem.getFramedPage(selectedModelIndex, selectedFrameIndex);
  if (!selectedFramedPage) throw new Error("debug: selected frame is undefined???å");

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
    width: `calc(100vw - ${importListStyle.width}px - ${modelInfoStyle.width}px - 12px)`
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
      <div>
        <ImportList
          style={importListStyle}
          files={bufferedReviewItem.status.uploadFileStatuses}
          selectPage={(fileId: string, pageIndex: number) => {
            let newFramedPage: FramedPage = new FramedPage(
              selectedFramedPage.frameIndex,
              selectedFramedPage.reviewModel
            );
            newFramedPage.sourceFileId = fileId;
            newFramedPage.sourcePageNumber = pageIndex;
            let newReviewItemForBuffering: ReviewItem = bufferedReviewItem.setFramedPage(
              newFramedPage.reviewModel.modelIndexInReviewItem,
              newFramedPage.frameIndex,
              newFramedPage
            );
            updateBufferedReviewItem(newReviewItemForBuffering);
          }}
          isSelected={(fileId: string, pageIndex: number) => {
            return (
              fileId === selectedFramedPage.sourceFileId
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
        onFrameSelect={(modelIndex: number, frameIndex: string) => selectFrame([modelIndex, frameIndex])}
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


export default WorkingStage;


interface ButtonProps {
  children: string;
  isPrimary?: boolean;
  style?: CSSProperties;
}
function Button(props: ButtonProps): JSX.Element {
  const blue: string = '#1581ff';
  let style: CSSProperties = {
    backgroundColor: (props.isPrimary)? blue: 'none',
    border: `solid 2px ${blue}`,
    width: 184,
    height: 40,
    borderRadius: 20,
    fontSize: 18,
    color: (props.isPrimary)? 'white': blue,
    ...props.style,
  };
  return (
    <button
      style={style}
    >
      {props.children}
    </button>
  )
}