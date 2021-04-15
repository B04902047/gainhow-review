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

    let groupStyle: CSSProperties = {
        display: "inline-block"
    }

    function isSelected(props: SortableExportListProps, modelIndex: number,frameIndex: number): boolean {
        if (props.selectedModelIndex === modelIndex && props.selectedFrameIndex ===frameIndex ) {
          return true;
        }
        return false;
    }
    function onDragStart(props: SortableExportListProps, evt: Sortable.SortableEvent) {
        console.log(evt.oldIndex);
        props.onFrameSelect(props.selectedModelIndex, evt.oldIndex);
    }

    function onDragEnd(props: SortableExportListProps, evt: Sortable.SortableEvent) {
        props.onFrameSelect(props.selectedModelIndex, evt.newIndex);
        let newIndex = evt.newIndex;
        let oldIndex = evt.oldIndex;
        console.log(props.onShiftFramesBetween);
        console.log(`oldIndex=${oldIndex} , newIndex=${newIndex}`);
        props.onShiftFramesBetween(oldIndex, newIndex);
    }

    

    let groupPages: SortableGroupFramedPage[] = sortableGroupFramedPage(sortableFramedPages,product.pagingDirection);

    return (
      <div style={style}> 
      <div style={modelsStyle} >
        <ReactSortable 
            list={sortableFramedPages} 
            setList={setSortable}
            onStart={(event: Sortable.SortableEvent) => onDragStart(props, event)}
            onEnd={(event: Sortable.SortableEvent) => onDragEnd(props, event)}
        >
            
            {
                groupPages.map((groupPage: SortableGroupFramedPage,index: number) => {
                    
                    return(
                        <ExportingSortableGroupFrame
                            key={index}
                            style={groupStyle}
                            groupPage={groupPage}
                            direct={product.pagingDirection}
                            onSelect={(frameIndex: number) => { props.onFrameSelect(0,frameIndex) }}
                            isSelected={(frameIndex: number) => { return isSelected(props, 0, frameIndex) }}
                        />
                    )
                })
            }
            
        </ReactSortable>
        </div>  
      </div>
    );
  };



  interface ExportingSortableGroupFrameProps {
    groupPage: SortableGroupFramedPage,
    direct: BookPagingDirection,
    onSelect(frameIndex: number): void; 
    isSelected(frameIndex: number): boolean;
    style?: CSSProperties;
    height?: number;
  }
  function ExportingSortableGroupFrame (props: ExportingSortableGroupFrameProps) :JSX.Element {
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
        else if (framedPage.frameName === FORNT_COVER_BLANK_PAGENAME || framedPage.frameName === BACK_COVER_BLANK_PAGENAME ) {
            let coverFrame: Frame = framedPage.reviewModel.getFrame('封面');
            let frameHeightInMm = coverFrame.maxHeight;
            let frameWidthInMm = coverFrame.maxWidth;
            let ratio: number = frameWidthInMm / frameHeightInMm;
            let frameHeightInPx = props.height || 96;
            let frameWidthInPx: number = frameHeightInPx * ratio;
            let coverBlankFramePageStyle: CSSProperties;
            return (
                <span key={index}>
                {(framedPage.frameName===BACK_COVER_BLANK_PAGENAME)?
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
  