import { ExportingFrame } from '@gainhow-review/ui';
import { Frame, FramedPage, ReviewItem } from '@gainhow-review/data';
import React, { CSSProperties, useEffect, useState } from 'react';
import Book from 'libs/data/src/lib/Product/Book';
import { CoverBlankFramePage, DrogMiddleLine } from '@gainhow-review/ui'
import { FORNT_COVER_BLANK_PAGENAME ,BACK_COVER_BLANK_PAGENAME} from '@gainhow-review/utils'
import { ReactSortable, Sortable } from "react-sortablejs";


type SortableFramedPage ={
    id: string;
    FramedPage: FramedPage;
    chosen?: boolean;
    selected?: boolean;
    filtered?: boolean;
  
  }
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
    useEffect(()=>{
        setSortable(sortableFramedPagesWithFramedPages(props.reviewItem.models[props.selectedModelIndex].framedPages,product.pagingDirection)
        )
    },[props.reviewItem])

    function onSetSortable(sortableFramedPages:SortableFramedPage[]) {
        //TODO: 忽略額外加上的頁  sortableFramedPagesToFramedPages的話要注意框名 不然sortableFramedPagesWithFramedPages 會錯
        let newSortableFramedPages:SortableFramedPage[]= [] 
        let newFramedPages: FramedPage[] = sortableFramedPagesToFramedPages(sortableFramedPages);
        newSortableFramedPages =sortableFramedPagesWithFramedPages(newFramedPages,product.pagingDirection);
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

    function isSelected(props: SortableExportListProps, modelIndex: number,frameIndex: number): boolean {
        if (props.selectedModelIndex === modelIndex && props.selectedFrameIndex ===frameIndex ) {
          return true;
        }
        return false;
    }
    function onDragStart(props: SortableExportListProps, evt: Sortable.SortableEvent) {
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
            props.onShiftFramesBetween(oldIndex, newIndex);
        }
    }

function sortableFramedPagesToFramedPages(sortableFramedPages:Array<SortableFramedPage>): FramedPage[] {
    let result :FramedPage[] = [];
    for(let i=0 ; i<sortableFramedPages.length ; i++) {
      let page = sortableFramedPages[i].FramedPage;
      if(page.frameIndexInModel!=-1) {result.push(page);}
    }
    return  result;
  }
  
function sortableFramedPagesWithFramedPages(framedPages: FramedPage[], direct: BookPagingDirection): Array<SortableFramedPage>{
    let sortableFramedPages: Array<SortableFramedPage>= [];
    if ( direct === 'RIGHT_TO_LEFT' ) {
      sortableFramedPages = rightToLeftSortableFramedPage(framedPages);
  }
  else if ( direct === 'LEFT_TO_RIGHT' ) {
    sortableFramedPages = leftToRightSortableFramedPage(framedPages);
  }
  return sortableFramedPages;
  
  
  function rightToLeftSortableFramedPage(framedPages: Array<FramedPage>): Array<SortableFramedPage> {
    let sortableArray: Array<SortableFramedPage> = [];
    let reviewModel = framedPages[0].reviewModel;
    let blankSortableFramePage: SortableFramedPage= {
      id: '空白頁',
      FramedPage: new FramedPage(
        '空白頁',
        '空白頁',
        reviewModel,
        -1
      ),
      filtered:true
    };
    let frontCoverBlankPage: SortableFramedPage = {
      id: FORNT_COVER_BLANK_PAGENAME,
      FramedPage: new FramedPage(
        FORNT_COVER_BLANK_PAGENAME,
        FORNT_COVER_BLANK_PAGENAME,
        reviewModel,
        -1
      ),
      filtered:true
    };
    let backCoverBlankSortablePage: SortableFramedPage = {
      id: BACK_COVER_BLANK_PAGENAME,
      FramedPage: new FramedPage(
        BACK_COVER_BLANK_PAGENAME,
        BACK_COVER_BLANK_PAGENAME,
        reviewModel,
        -1,
      ),
      filtered:true
  };
    let lastFramedPageName: string =(framedPages.length-2).toString();
    for(let i=0; i<framedPages.length; i++) {
      let framedPage = framedPages[i];
      let frameName = framedPage.frameName;
      let sortableFramedPage: SortableFramedPage = {
        id: frameName,
        FramedPage: framedPage,
      }
      switch (frameName) {
        case '封面':
          sortableArray.push(blankSortableFramePage); //先插入空白頁
          sortableArray.push(sortableFramedPage); //插入自己
          break;
        case '1':
          sortableArray.push(frontCoverBlankPage); //先插入封面裏
          sortableArray.push(sortableFramedPage); //插入自己
          break;
        case lastFramedPageName :
          sortableArray.push(sortableFramedPage); //插入自己
          sortableArray.push(backCoverBlankSortablePage); //插入封面裏
          break;
        case '封底':
          sortableArray.push(sortableFramedPage); //插入自己
          sortableArray.push(blankSortableFramePage); //插入空白頁
          break;
        default:
          sortableArray.push(sortableFramedPage); //插入自己
      }
    }
    return sortableArray;
  }
  
  function leftToRightSortableFramedPage(framedPages: Array<FramedPage>): Array<SortableFramedPage> {
    let rightToLeftArray = rightToLeftSortableFramedPage(framedPages);
    let result = [];
    for(let i=0; i<rightToLeftArray.length; i++) {
      let rightPage: SortableFramedPage = rightToLeftArray[i];
      result.push(rightPage);
      if ((i+1)<rightToLeftArray.length) {
        i=i+1;
        let leftPage: SortableFramedPage = rightToLeftArray[i];
        result.push(leftPage);
      }
    }
    return result;
  }
  }
  

    return (
      <div style={style}> 
      <div style={modelsStyle} >
        <ReactSortable 
            list={sortableFramedPages} 
            setList={onSetSortable}
            onStart={(event: Sortable.SortableEvent) => onDragStart(props,event)}
            onEnd={(event: Sortable.SortableEvent) => onDragEnd(props, event)}
            filter={'.notSortable'}
        >            
            {
                sortableFramedPages.map((sortableFramedPage,index)=>{
                    let page = (
                    <ShingleSortableFrame
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
                        <div style={{display:'inline-block'}} key={index}>
                        {page}
                        {marginDiv}
                        </div>
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
            return <div className={'notSortable'}/>
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
                <div style={{display:'inline-block'}} key={framedPage.frameIndexInModel}>
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
  