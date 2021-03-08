
import { ReviewItem, ReviewModel } from '@gainhow-review/data';
import React, { CSSProperties } from 'react';
import ExportingModel from './exporting-model/ExportingModel';





  import './ExportList.module.css';
  

/* eslint-disable-next-line */
export interface ExportListProps {
  selectedModelIndex: number;
  selectedPageIndex: string;
  reviewItem: ReviewItem
}

export function ExportList(props: ExportListProps) {
  let style: CSSProperties = {
    backgroundColor: "#f7f7f7",
    paddingTop: 5,
    paddingLeft: 37,
    paddingBottom: 26,
    width: `calc(100vw - 300px)`,
    height: 144,
    overflow: "auto",
    whiteSpace: "nowrap"
  };
  let modelIndices: number[] = Array.from(props.reviewItem.models.keys());
  let models: Map<number, ReviewModel> = props.reviewItem.models;
  let modelStyle: CSSProperties = {
    display: "inline-block",
  };
  return (
    <div style={style}>
      {modelIndices.map((modelIndex => {
        return (
          <div
            key={modelIndex}
            style={modelStyle}
          >
            <ExportingModel
              reviewModel={models.get(modelIndex)}
              selectedPageIndex={(props.selectedModelIndex === modelIndex)? props.selectedPageIndex : undefined}
            />
          </div>
        )
      }))}
    </div>
  );
};


export default ExportList;
