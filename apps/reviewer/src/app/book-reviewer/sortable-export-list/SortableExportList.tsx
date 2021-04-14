import { ExportingFrame } from '@gainhow-review/ui';

import { Frame, FramedPage, ReviewItem, ReviewModel } from '@gainhow-review/data';
import React, { CSSProperties, useEffect, useState } from 'react';
import { BookPagingDirection } from 'libs/interfaces/src/lib/product';
import e from 'express';
import Book from 'libs/data/src/lib/Product/Book';
import { CoverBlankFramePage, DrogMiddleLine } from '@gainhow-review/ui'

import { GroupFramedPage,groupFramedPage } from '@gainhow-review/utils'
import { ReactSortable, Sortable } from "react-sortablejs";
import { from } from 'form-data';

export interface SortableExportListProps {
    selectedModelIndex: number;
    selectedFrameIndex: number;
    reviewItem: ReviewItem;
    style: CSSProperties;
    onFrameSelect(modelIndex: number, frameIndex: number): void;
    updateReviewItem(newReviewItem: ReviewItem) :void;
  }
  
  export function SortableExportList(props: SortableExportListProps) {
    let sortableFramedPages = (
        props.reviewItem.models[props.selectedModelIndex].framedPages.map((framedPages) => {
            return {id:framedPages.frameIndexInModel,framedPage:framedPages}
        })
    );

    function setSortableFramedPages(sortableFramedPages) {
        console.log(sortableFramedPages);
        let newframedPages: FramedPage[];
        let reviewModel: ReviewModel = sortableFramedPages[0].framedPage.reviewModel;
        let newReviewItem: ReviewItem;
        let numberOfPages = reviewModel.framedPages.length;
        let framedPages = reviewModel.framedPages;
        newframedPages = Object.keys(sortableFramedPages).map((key,index) => {
            let item= sortableFramedPages[key];
            let framedPage = item.framedPage; 
            let newFramedPageName: string = framedPages[index].frameName;
           
            let newFramedPage = new FramedPage(
                framedPage.frameId,
                newFramedPageName,
                reviewModel,
                index,
                framedPage.positionX,
                framedPage.positionY,
                framedPage.scaleX,
                framedPage.scaleY,
                framedPage.rotationDegree
            );
            newFramedPage.sourceFileIndex = framedPage.sourceFileIndex;
            newFramedPage.sourcePageNumber = framedPage.sourcePageNumber;
            return newFramedPage
        });
        console.log(newframedPages);
        reviewModel.framedPages = newframedPages;
        newReviewItem = reviewModel.reviewItem.setReviewModelImmutably(props.selectedModelIndex,reviewModel);
        props.updateReviewItem(newReviewItem);
    }
   
    function cloneReviewItemByUpdateFramedPages(framedPages: FramedPage[]): ReviewItem {
        let newReviewItem: ReviewItem; 
        let newFramedPages: FramedPage[];
        Object.assign(newReviewItem,props.reviewItem);
        newFramedPages = framedPages.map((framedPage)=>{return framedPage.clone()});
        newReviewItem.models[props.selectedModelIndex].framedPages = newFramedPages;
        return newReviewItem
    }
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
    function onDragStart(evt: Sortable.SortableEvent) {
        console.log(evt.oldIndex);
        props.onFrameSelect(props.selectedModelIndex, evt.oldIndex);
    }

    function onDragEnd(evt: Sortable.SortableEvent) {
        console.log(evt.newIndex);
        props.onFrameSelect(props.selectedModelIndex, evt.newIndex);
    }

    // return (
    //     <div style={style}>
    //       <div style={modelsStyle}>
    //         {models.map((model: ReviewModel, modelIndex: number) => {
    //             let groupPages = groupFramedPage(model.framedPages,product.pagingDirection);
                
    //             return (
    //               <div 
    //                   key={modelIndex}
    //                   style={modelStyle}
    //               >
                     
    //                   {   
    //                       groupPages.map((groupPage: GroupFramedPage,index: number) => {
    //                           return(
    //                               <ExportingGroupFrame
    //                                   key={index}
    //                                   style={groupStyle}
    //                                   groupPage={groupPage}
    //                                   direct={product.pagingDirection}
    //                                   onSelect={(frameIndex: number)=>{props.onFrameSelect(modelIndex,frameIndex)}}
    //                                   isSelected={(frameIndex: number)=>{return isSelected(modelIndex, frameIndex)}}
    //                               />
    //                           )
    //                       })
    //                   }
                     
    //               </div>
    //           );
              
    //         })}
    //       </div>
    //     </div>
    //   );
    return (
      <div style={style}>
        <ReactSortable 
            list={sortableFramedPages} 
            setList={setSortableFramedPages}
            onStart={onDragStart}
            onEnd={onDragEnd}
        >
            {
                sortableFramedPages.map((item) => {
                    let framedPage = item.framedPage;
                    if(framedPage.frameName === '空白頁' ) {
                        return null
                    }
                    else if (framedPage.frameName === '(封面裏)' || framedPage.frameName === '(封底裏)' ) {
                        let coverFrame: Frame = framedPage.reviewModel.getFrame('封面');
                        let frameHeightInMm = coverFrame.maxHeight;
                        let frameWidthInMm = coverFrame.maxWidth;
                        let ratio: number = frameWidthInMm / frameHeightInMm;
                        let frameHeightInPx = 96;
                        let frameWidthInPx: number = frameHeightInPx * ratio;
                        let coverBlankFramePageStyle: CSSProperties;
                        return (
                            <span key={item.id}>
                            <CoverBlankFramePage
                                frameName={framedPage.frameName}
                                style={coverBlankFramePageStyle}
                                frameHeightInPx={frameHeightInPx}
                                frameWidthInPx={frameWidthInPx}
                                horizontalPadding={3}
                            />
                            </span>
                        )
                    }
                    else {
                        return (
                            <span key={item.id}>
                                <ExportingFrame
                                    framedPage={framedPage}
                                    onSelect={()=>{props.onFrameSelect(props.selectedModelIndex,framedPage.frameIndexInModel)}}
                                    isSelected={isSelected(props.selectedModelIndex, framedPage.frameIndexInModel)}
                                    horizontalPadding={3}
                                    isDroggable={true}
                                />
                            </span>
                        )
                    }
                })
            }
            
        </ReactSortable>
            
      </div>
    );
  };



  interface ExportingGroupFrameProps {
    groupPage: GroupFramedPage,
    direct: BookPagingDirection,
    onSelect(frameIndex: number): void; 
    isSelected(frameIndex: number): boolean;
    style?: CSSProperties;
    height?: number;
  }
  function ExportingGroupFrame (props: ExportingGroupFrameProps) :JSX.Element {
    let style: CSSProperties;
    let pageKeyArray: Array<string>; 
    let pages:JSX.Element[];
    let [sortableGroupFrame,setFrame] = useState( Object.keys(props.groupPage).map((key,index)=>{
        return (
            {
                id: key,
                item:props.groupPage[key]
            }
        )
    }))
        style = {
            ...props.style,
            margin: '0px 25px',
            display:'inline-block'
        }
        pageKeyArray = ['左頁','右頁']
   

        pages = sortableGroupFrame.map((item, index) => {
            let framedPage: FramedPage = item.item;
            if(framedPage.frameName === '空白頁' ) {
                return null
            }
            else if (framedPage.frameName === '(封面裏)' || framedPage.frameName === '(封底裏)' ) {
                let coverFrame: Frame = framedPage.reviewModel.getFrame('封面');
                let frameHeightInMm = coverFrame.maxHeight;
                let frameWidthInMm = coverFrame.maxWidth;
                let ratio: number = frameWidthInMm / frameHeightInMm;
                let frameHeightInPx = props.height || 96;
                let frameWidthInPx: number = frameHeightInPx * ratio;
                let coverBlankFramePageStyle: CSSProperties;
                return (
                    <span key={index}>
                    {(framedPage.frameName==='(封底裏)')?
                            <DrogMiddleLine height={props.height}/>:<></>
                        }
                    <CoverBlankFramePage
                        frameName={framedPage.frameName}
                        style={coverBlankFramePageStyle}
                        frameHeightInPx={frameHeightInPx}
                        frameWidthInPx={frameWidthInPx}
                        horizontalPadding={3}
                    />
                    </span>
                )
            }
            else {
                return (
                    <span key={index}>
                        {(framedPage.frameName!=='封底')?
                            <DrogMiddleLine height={props.height}/>:<></>
                        }
                        <ExportingFrame
                            framedPage={framedPage}
                            isSelected={props.isSelected(framedPage.frameIndexInModel)}
                            onSelect={()=>{ props.onSelect(framedPage.frameIndexInModel)}}
                            height={props.height}
                            horizontalPadding={3}
                            isDroggable={true}
                        />
                        {(framedPage.frameName==='封底')?
                            <DrogMiddleLine height={props.height}/>:<></>
                        }
                    </span>
                )
            }
        });
        
        
   
   
    return (
        <div style={style}>
          {pages}
        </div>
    )
  }

  export default SortableExportList;
  