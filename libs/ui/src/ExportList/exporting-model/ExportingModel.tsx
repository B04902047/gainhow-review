
import { FramedPage, ReviewModel } from '@gainhow-review/data';
import React, { CSSProperties } from 'react';
import ExportingFrame from '../exporting-frame/ExportingFrame';





  import './ExportingModel.module.css';
  

/* eslint-disable-next-line */
export interface ExportingModelProps {
  selectedFrameIndex?: string;
  onFrameSelect(frameIndex: string): void;
  reviewModel: ReviewModel
}

export function ExportingModel(props: ExportingModelProps) {
  let style: CSSProperties = {
    padding: 8,
    paddingBottom: 0
  }
  let modelIndexStyle: CSSProperties = {
    fontSize: 16,
    fontFamily: "Arial",
    fontWeight: "bold"
  }
  let pageIndices: string[] = props.reviewModel.frameIndices;
  let framedPages: Map<string, FramedPage> = props.reviewModel.framedPages;
  return (
    <div style={style}>
      <div style={modelIndexStyle}>
        第 {props.reviewModel.modelIndexInReviewItem} 款
      </div>
      <div>
        {pageIndices.map((frameIndex: string) => {
          return (
            <ExportingFrame
              key={frameIndex}
              onSelect={() => props.onFrameSelect(frameIndex)}
              framedPage={framedPages.get(frameIndex)}
              isSelected={props.selectedFrameIndex === frameIndex}
            />
          )
        })}
      </div>
    </div>
  );
};


export default ExportingModel;
