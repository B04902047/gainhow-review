import { ExportingFrame } from '@gainhow-review/ui';

import { Frame, FramedPage, ReviewItem, ReviewModel } from '@gainhow-review/data';
import React, { CSSProperties, useEffect, useState } from 'react';
import { BookPagingDirection } from 'libs/interfaces/src/lib/product';
import e from 'express';
import Book from 'libs/data/src/lib/Product/Book';
import { CoverBlankFramePage, DrogMiddleLine } from '@gainhow-review/ui'

import { GroupFramedPage, getRightOrLeftPageKeyByframeName, 
    FORNT_COVER_BLANK_PAGENAME ,BACK_COVER_BLANK_PAGENAME,
    LEFT_PAGE,RIGHT_PAGE, groupFramedPage, framedPagesToSortableFramedPages, sortableGroupFramedPage, SortableGroupFramedPage, SortableFramedPage } from '@gainhow-review/utils'
import { ReactSortable, Sortable } from "react-sortablejs";
import { from } from 'form-data';

export interface SortableExportListProps {
    selectedModelIndex: number;
    selectedFrameIndex: number;
    reviewItem: ReviewItem;
    style: CSSProperties;
    onFrameSelect(modelIndex: number, frameIndex: number): void;
    updateReviewItem(newReviewItem: ReviewItem) :void;
    onShiftFramesBetween(start: number, end: number): void;
  }
  
  export function SortableExportList(props: SortableExportListProps) {
    let [sortableFramedPages,setSortable] = useState<SortableFramedPage[]>(
        framedPagesToSortableFramedPages(props.reviewItem.models[props.selectedModelIndex].framedPages)
    );
    function setSortableFramedPages(sortableFramedPages: SortableFramedPage[]) {
        console.log(sortableFramedPages);
        setSortable(sortableFramedPages)
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
        props.onFrameSelect(props.selectedModelIndex, evt.newIndex);
        let newIndex = evt.newIndex;
        let oldIndex = evt.oldIndex;
        console.log(props);
        console.log(`oldIndex=${oldIndex} , newIndex=${newIndex}`);
        props.onShiftFramesBetween(oldIndex, newIndex);
    }

    

    let groupPages: SortableGroupFramedPage[] = sortableGroupFramedPage(sortableFramedPages,product.pagingDirection);

    return (
      <div style={style}> 
      <div 
                style={modelsStyle}
            >
        <ReactSortable 
            list={sortableFramedPages} 
            setList={setSortable}
            onStart={onDragStart}
            onEnd={onDragEnd}
        >
            
            {
               
                groupPages.map((groupPage: SortableGroupFramedPage,index: number) => {
                    
                    return(
                        <ExportingSortableGroupFrame
                            key={index}
                            style={groupStyle}
                            groupPage={groupPage}
                            direct={product.pagingDirection}
                            onSelect={(frameIndex: number)=>{props.onFrameSelect(0,frameIndex)}}
                            isSelected={(frameIndex: number)=>{return isSelected(0, frameIndex)}}
                        />
                    )
                }
               
                )
            }
            
        </ReactSortable>
        </div>  
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

  interface ExportingSortableGGroupFrameProps {
    groupPage: SortableGroupFramedPage,
    direct: BookPagingDirection,
    onSelect(frameIndex: number): void; 
    isSelected(frameIndex: number): boolean;
    style?: CSSProperties;
    height?: number;
  }
  function ExportingSortableGroupFrame (props: ExportingSortableGGroupFrameProps) :JSX.Element {
    let pages:JSX.Element[];
    let style: CSSProperties = {
            ...props.style,
            display:'inline-block',
            margin: '0px 25px',
    }
        
    
    

        pages = Object.keys(props.groupPage).map((pageKey, index) => {
            

            let framedPage: FramedPage = props.groupPage[pageKey].FramedPage;
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
  