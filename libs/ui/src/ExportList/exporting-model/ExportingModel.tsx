
import { FramedPage, ReviewModel } from '@gainhow-review/data';
import React, { CSSProperties } from 'react';
import ExportingPage from '../exporting-page/ExportingPage';





  import './ExportingModel.module.css';
  

/* eslint-disable-next-line */
export interface ExportingModelProps {
  selectedPageIndex?: string;
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
  let pages: Map<string, FramedPage> = props.reviewModel.framedPages;
  return (
    <div style={style}>
      <div style={modelIndexStyle}>
        第 {props.reviewModel.modelIndexInReviewItem} 款
      </div>
      <div>
        {pageIndices.map((pageIndex: string) => {
          return (
            <ExportingPage
              key={pageIndex}
              framedPage={pages.get(pageIndex)}
              isSelected={props.selectedPageIndex === pageIndex}
            />
          )
        })}
      </div>
    </div>
  );
};


export default ExportingModel;
