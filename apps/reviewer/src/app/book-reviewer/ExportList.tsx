import { ExportingFrame } from '@gainhow-review/ui';

import { Frame, FramedPage, ReviewItem, ReviewModel } from '@gainhow-review/data';
import React, { CSSProperties } from 'react';
import { BookPagingDirection } from 'libs/interfaces/src/lib/product';
import e from 'express';
import Book from 'libs/data/src/lib/Product/Book';
import { CoverBlankFramePage } from './CoverBlankFramePage'

export interface ExportListProps {
    selectedModelIndex: number;
    selectedFrameIndex: number;
    reviewItem: ReviewItem;
    style: CSSProperties;
    onFrameSelect(modelIndex: number, frameName: string): void;
  }
  
  export function ExportList(props: ExportListProps) {
    let product: Book = props.reviewItem.product as Book;
    
    let style: CSSProperties = {
      backgroundColor: "#f7f7f7",
      border: '2px solid #E4E4E4',
      borderRight: 'none',
      paddingTop: 15,
      paddingBottom: 16,
      overflow: "auto",
      whiteSpace: "nowrap",
      userSelect: 'none',
      ...props.style
    };
    let modelsStyle: CSSProperties = {
      marginLeft: 37,
      display: "inline-block",
    }
    let models: ReviewModel[] = props.reviewItem.models;
    let modelStyle: CSSProperties = {
      display: "inline-block",
    };

    let groupStyle: CSSProperties = {
        display: "inline-block"
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
                                    onSelect={(frameName: string)=>{props.onFrameSelect(modelIndex,frameName)}}
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


export type GroupFramedPage  =  HorizontalGroupFramedPage | StraightGroupFramedPage ;
  type HorizontalGroupFramedPage = {
    '左頁' : FramedPage,
    '右頁' : FramedPage,
  }
  type StraightGroupFramedPage = {
    '上頁' : FramedPage,
    '下頁' : FramedPage,
  }
export function groupFramedPage(framedPages: FramedPage[], direct: BookPagingDirection) : Array<GroupFramedPage> {
    let groupArray: Array<GroupFramedPage> = [];

    if ( direct === 'RIGHT_TO_LEFT' ) {
        groupArray = rightToLeftGroupFramedPage(framedPages);
    }
    else if ( direct === 'LEFT_TO_RIGHT' ) {
        groupArray = leftToRightGroupFramedPage(framedPages);
    }
    else {
        groupArray = bottomToTopGroupFramedPage(framedPages);
    }
    return groupArray;
    
  }

  function bottomToTopGroupFramedPage (framedPages: FramedPage[]): Array<GroupFramedPage> {
    return [];
  }

  function leftToRightGroupFramedPage (framedPages: FramedPage[]): Array<GroupFramedPage> {
    return [];
  }

  function rightToLeftGroupFramedPage (framedPages: FramedPage[]): Array<HorizontalGroupFramedPage> {
    let groupArray: Array<HorizontalGroupFramedPage> = [];
    let blankFramePage = new FramedPage(
        '空白頁',
        '空白頁',
        framedPages[0].reviewModel
    );
    for( let framedPage of framedPages) {
        let inputGroup: HorizontalGroupFramedPage = {
            '左頁': blankFramePage,
            '右頁': blankFramePage
        };
        let lastGroupIndex: number = (groupArray.length === 0)? 0 : groupArray.length-1;
        let lastGroup: GroupFramedPage = groupArray[lastGroupIndex];
        let isNeedUseOldGroup: boolean = false;
        if (lastGroup) {
            if(lastGroup['右頁'].frameName === '空白頁') isNeedUseOldGroup = true;
        }
        if (framedPage.frameName === '封面') { 
            inputGroup['右頁'] = framedPage;
        } else if (framedPage.frameName === '封底') {
            // TODO: 加上封底裏
            let backCoverBlankPage = new FramedPage(
                '封底裏',
                '封底裏',
                framedPage.reviewModel
            );
            if ( isNeedUseOldGroup ) {
                lastGroup['右頁'] = backCoverBlankPage;
            } else {
                let backFramePageGroup = {
                    '左頁': backCoverBlankPage,
                    '右頁': backCoverBlankPage
                }
                groupArray.push(backFramePageGroup);
            }
            inputGroup['左頁'] =  framedPage
        } else if (framedPage.frameName === '1' ) {
            let frontCoverBlankPage = new FramedPage(
                '封面裏',
                '封面裏',
                framedPage.reviewModel
            );
            inputGroup = {'左頁': frontCoverBlankPage, '右頁': framedPage};
        } else {
            
            if (isNeedUseOldGroup) {
                inputGroup = groupArray.pop();
                inputGroup['右頁'] = framedPage;
            }
            else {
                inputGroup['左頁'] = framedPage;
            }
        }
        groupArray.push(inputGroup);
    }
    return groupArray;
  }


  interface ExportingFrameProps {
    groupPage: GroupFramedPage,
    direct: BookPagingDirection,
    onSelect(frameId: string): void; 
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
                    isSelected={false}
                    onSelect={()=>{ props.onSelect(framedPage.frameName)}}
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
  