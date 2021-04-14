import { ExportingFrame } from '@gainhow-review/ui';

import { Frame, FramedPage, ReviewItem, ReviewModel } from '@gainhow-review/data';
import React, { CSSProperties } from 'react';
import { BookPagingDirection } from 'libs/interfaces/src/lib/product';
import e from 'express';
import Book from 'libs/data/src/lib/Product/Book';
import { CoverBlankFramePage } from '@gainhow-review/ui'

import { GroupFramedPage,groupFramedPage } from '@gainhow-review/utils'
export interface ExportListProps {
    selectedModelIndex: number;
    selectedFrameIndex: number;
    reviewItem: ReviewItem;
    style: CSSProperties;
    onFrameSelect(modelIndex: number, frameIndex: number): void;
  }
  
  export function ExportList(props: ExportListProps) {
    let product: Book = props.reviewItem.product as Book;
    
    let style: CSSProperties = {
      backgroundColor: "#f7f7f7",
      border: '2px solid #E4E4E4',
      borderLeft: 'none',
      overflow: "auto",
      whiteSpace: "nowrap",
      userSelect: 'none',
      ...props.style
    };
    let modelsStyle: CSSProperties = {
      marginLeft: 30,
      marginRight: 30,
      display: "inline-block",
      marginTop: 27
    }
    let models: ReviewModel[] = props.reviewItem.models;
    let modelStyle: CSSProperties = {
      display: "inline-block",
    };

    let groupStyle: CSSProperties = {
        display: "inline-block"
    }

    function isSelected(modelIndex: number,frameIndex: number): boolean {
        if (props.selectedModelIndex === modelIndex && props.selectedFrameIndex ===frameIndex ) {
          return true;
        }
        return false;
    }
    return (
      <div style={style}>
        <div style={modelsStyle}>
          {models.map((model: ReviewModel, modelIndex: number) => {
              let groupPages = groupFramedPage(model.framedPages,product.pagingDirection);
              return (
                <div 
                    key={modelIndex}
                    style={modelStyle}
                >
                    {   
                        groupPages.map((groupPage: GroupFramedPage,index: number) => {
                            return(
                                <ExportingGroupFrame
                                    key={index}
                                    style={groupStyle}
                                    groupPage={groupPage}
                                    direct={product.pagingDirection}
                                    onSelect={(frameIndex: number)=>{props.onFrameSelect(modelIndex,frameIndex)}}
                                    isSelected={(frameIndex: number)=>{return isSelected(modelIndex, frameIndex)}}
                                />
                            )
                        })
                    }
                </div>
            );
            
          })}
        </div>
      </div>
    );
  };



  interface ExportingFrameProps {
    groupPage: GroupFramedPage,
    direct: BookPagingDirection,
    onSelect(frameIndex: number): void; 
    isSelected(frameIndex: number): boolean;
    style?: CSSProperties;
    height?: number;
  }
  function ExportingGroupFrame (props: ExportingFrameProps) :JSX.Element {
    let style: CSSProperties;
    let pageKeyArray: Array<string>; 
    let pages:JSX.Element[];
    if (props.direct === 'BOTTOM_TO_TOP') {
        style = {
            ...props.style,
            display:'inline-block'
        }
        pageKeyArray = ['上頁','下頁']
    } else {
        style = {
            ...props.style,
            margin: '0px 25px',
            display:'inline-block'
        }
        pageKeyArray = ['左頁','右頁']
    }

        pages = pageKeyArray.map((pageKey, index)=>{
            let framedPage: FramedPage = props.groupPage[pageKey];
            if(framedPage.frameName === '空白頁' ) {
                return null
            }
            else if (framedPage.frameName === '封面裏' || framedPage.frameName === '封底裏' ) {
                let coverFrame: Frame = framedPage.reviewModel.getFrame('封面');
                let frameHeightInMm = coverFrame.maxHeight;
                let frameWidthInMm = coverFrame.maxWidth;
                let ratio: number = frameWidthInMm / frameHeightInMm;
                let frameHeightInPx = props.height || 96;
                let frameWidthInPx: number = frameHeightInPx * ratio;
                let coverBlankFramePageStyle: CSSProperties;
                return (
                    <CoverBlankFramePage
                        key={index}
                        frameName={framedPage.frameName}
                        style={coverBlankFramePageStyle}
                        frameHeightInPx={frameHeightInPx}
                        frameWidthInPx={frameWidthInPx}
                        horizontalPadding={3}
                    />
                )
            }
            else {
                return (
                    <ExportingFrame
                    key={index}
                    framedPage={framedPage}
                    isSelected={props.isSelected(framedPage.frameIndexInModel)}
                    onSelect={()=>{ props.onSelect(framedPage.frameIndexInModel)}}
                    height={props.height}
                    horizontalPadding={3}
                />)
            }
        });
        
        
    
   
   
    return (
        <div style={style}>
            {pages}
        </div>
    )
  }

  export default ExportList;
  