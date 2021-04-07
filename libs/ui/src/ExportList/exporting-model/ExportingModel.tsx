
import { FramedPage, ReviewModel } from '@gainhow-review/data';
import React, { CSSProperties } from 'react';
import ExportingFrame from '../exporting-frame/ExportingFrame';





  import './ExportingModel.module.css';
  

/* eslint-disable-next-line */
export interface ExportingModelProps {
  selectedFrameIndex?: number;
  onFrameSelect(frameIndex: number): void;
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
  let framedPages: FramedPage[] = props.reviewModel.framedPages;
  return (
    <div style={style}>
      <div style={modelIndexStyle}>
        {props.reviewModel.modelName}
      </div>
      <div style={{backgroundColor: "white"}}>
        {framedPages.map((framedPage: FramedPage, frameIndex: number) => {
          return (
            <ExportingFrame
              key={frameIndex}
              onSelect={() => props.onFrameSelect(frameIndex)}
              framedPage={framedPage}
              isSelected={props.selectedFrameIndex === frameIndex}
            />
          )
        })}
      </div>
    </div>
  );
};


export default ExportingModel;
