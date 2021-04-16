import { ExportingFrame } from '@gainhow-review/ui';

import { Frame, FramedPage, ReviewItem, ReviewModel } from '@gainhow-review/data';
import React, { CSSProperties, useEffect, useState } from 'react';
import { BookPagingDirection } from 'libs/interfaces/src/lib/product';
import e from 'express';
import Book from 'libs/data/src/lib/Product/Book';
import { CoverBlankFramePage, DrogMiddleLine } from '@gainhow-review/ui'

import { GroupFramedPage, getRightOrLeftPageKeyByframeName, 
    FORNT_COVER_BLANK_PAGENAME ,BACK_COVER_BLANK_PAGENAME,
    LEFT_PAGE,RIGHT_PAGE, groupFramedPage, framedPagesToSortableFramedPages, sortableGroupFramedPage, SortableGroupFramedPage, SortableFramedPage, sortableFramedPagesWithFramedPages, sortableFramedPagesToFramedPages, findGroupFramedPageWithFramedPage } from '@gainhow-review/utils'
import { ReactSortable, Sortable } from "react-sortablejs";
import { ids } from 'konva/types/Node';

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
    let product: Book = props.reviewItem.product as Book;
    let [sortableFramedPages,setSortable] = useState<SortableFramedPage[]>(
        sortableFramedPagesWithFramedPages(props.reviewItem.models[props.selectedModelIndex].framedPages,product.pagingDirection)
    );

    function onSetSortable(sortableFramedPages:SortableFramedPage[]) {
        //TODO: 忽略額外加上的頁  sortableFramedPagesToFramedPages的話要注意框名 不然sortableFramedPagesWithFramedPages 會錯
        let newSortableFramedPages:SortableFramedPage[]= [] 
        let newFramedPages: FramedPage[] = sortableFramedPagesToFramedPages(sortableFramedPages);

        console.log('newFramedPages');
        console.log(newFramedPages);
        newSortableFramedPages =sortableFramedPagesWithFramedPages(newFramedPages,product.pagingDirection);

        console.log('sortableFramedPages');
        console.log(sortableFramedPages);
        console.log('newSortableFramedPages');
        console.log(newSortableFramedPages);
        setSortable(newSortableFramedPages); 
    }
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
    function onDragStart(props: SortableExportListProps,sortableFramedPages:SortableFramedPage[], evt: Sortable.SortableEvent) {
        let frameNames =  props.reviewItem.models[0].frameNames;
        let oldIndex = frameNames.indexOf((evt.clone.innerText).toString())
        if(oldIndex === -1) return;
        props.onFrameSelect(props.selectedModelIndex, oldIndex);
    }

    function onDragEnd(props: SortableExportListProps, evt: Sortable.SortableEvent) {
        let sortableFramedPage = sortableFramedPagesWithFramedPages(props.reviewItem.models[0].framedPages,product.pagingDirection);
        let newIndex = sortableFramedPage[evt.newIndex].FramedPage.frameIndexInModel;
        let oldIndex = sortableFramedPage[evt.oldIndex].FramedPage.frameIndexInModel;
        if(newIndex!= -1 && oldIndex!= -1) {
            props.onFrameSelect(props.selectedModelIndex, newIndex);
            console.log(`oldIndex=${oldIndex} , newIndex=${newIndex}`);
            props.onShiftFramesBetween(oldIndex, newIndex);
        }
    }

    

    let groupPages: SortableGroupFramedPage[] = sortableGroupFramedPage(sortableFramedPages,product.pagingDirection);

    return (
      <div style={style}> 
      <div style={modelsStyle} >
        <ReactSortable 
            list={sortableFramedPages} 
            setList={setSortable}
            onStart={(event: Sortable.SortableEvent) => onDragStart(props,sortableFramedPages, event)}
            onEnd={(event: Sortable.SortableEvent) => onDragEnd(props, event)}
        >
            
            {
                sortableFramedPages.map((sortableFramedPage,index)=>{
                    let page = (
                    <ShingleSortableFrame
                        key={index}
                        sortableFramedPage={sortableFramedPage}
                        onSelect={(frameIndex: number) => { props.onFrameSelect(0,frameIndex) }}
                        isSelected={(frameIndex: number) => { return isSelected(props, 0, frameIndex) }}
                    />
                    );
                    let marginDiv: JSX.Element = null;
                    if (index%2 === 1) {
                        marginDiv = (
                            <div style={{width: 25,height:'100%',display:'inline-block'}}/>
                        )
                    }
                    return (
                        <>
                        {page}
                        {marginDiv}
                        </>
                        )
                })
            }
            
        </ReactSortable>
        </div>  
      </div>
    );
  };

interface ShingleSortableFrame {
    sortableFramedPage:SortableFramedPage;
    onSelect(frameIndex: number): void; 
    isSelected(frameIndex: number): boolean;
    height?: number;
}
  
  function ShingleSortableFrame(props: ShingleSortableFrame): JSX.Element {
    
        let framedPage: FramedPage = props.sortableFramedPage.FramedPage;
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
                <div style={{display:'inline-block'}}>
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
                </div>
            )
        }
        else {
            return (
                <span>
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
   
  }




  export default SortableExportList;
  