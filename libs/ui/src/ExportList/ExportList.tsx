
import { ReviewItem, ReviewModel } from '@gainhow-review/data';
import React, { CSSProperties } from 'react';
import ExportingModel from './exporting-model/ExportingModel';





  import './ExportList.module.css';
  

/* eslint-disable-next-line */
export interface ExportListProps {
  selectedModelIndex: number;
  selectedFrameIndex: number;
  reviewItem: ReviewItem;
  style: CSSProperties;
  onFrameSelect(modelIndex: number, frameIndex: number): void;
}

export function ExportList(props: ExportListProps) {
  let style: CSSProperties = {
    backgroundColor: "#f7f7f7",
    border: '2px solid #E4E4E4',
    borderRight: 'none',
    paddingTop: 5,
    paddingBottom: 16,
    overflow: "auto",
    whiteSpace: "nowrap",
    ...props.style
  };
  let modelsStyle: CSSProperties = {
    marginLeft: 37
  }
  let models: ReviewModel[] = props.reviewItem.models;
  let modelStyle: CSSProperties = {
    display: "inline-block",
  };
  return (
    <div style={style}>
      <div style={modelsStyle}>
        {models.map((model: ReviewModel, modelIndex: number) => {
          return (
            <div
              key={modelIndex}
              style={modelStyle}
            >
              <ExportingModel
                onFrameSelect={(frameIndex: number) => props.onFrameSelect(modelIndex, frameIndex)}
                reviewModel={model}
                selectedFrameIndex={(props.selectedModelIndex === modelIndex)? props.selectedFrameIndex : undefined}
              />
            </div>
          )
        })}
      </div>
    </div>
  );
};


export default ExportList;
