
import { FramedPage, ReviewItem } from '@gainhow-review/data';
import { findGroupFramedPageWithFramedPage, GroupFramedPage,groupFramedPage } from '@gainhow-review/utils';
import Book from 'libs/data/src/lib/Product/Book';
import React, { CSSProperties, useState } from 'react';
import Canvas from '../canvans/Canvans';
import { ExportList } from '../export-list/ExportList';





  import './DoublePageView.module.css';
  

  interface DoublePageViewProps {
    style: CSSProperties;
    reviewItem: ReviewItem;
    selectedModelIndex: number;
    selectedFrameIndex: number;
    onSelect(modelIndex:number, frameIndex:number):void;
}

function DoublePageView(props: DoublePageViewProps): JSX.Element {
    let framePage: FramedPage = props.reviewItem.getFramedPage(props.selectedModelIndex, props.selectedFrameIndex);
    let product = props.reviewItem.product as Book;
    let groupFramedPages: Array<GroupFramedPage> = groupFramedPage(framePage.reviewModel.framedPages,product.pagingDirection);
    let pages: GroupFramedPage = findGroupFramedPageWithFramedPage(groupFramedPages,framePage);
    
    let exportListStyle: CSSProperties = {
        //display: 'inline-block',
        verticalAlign: 'top',
        width: props.style.width,
        height: '180px',
    };
    let workSpaceStyle: CSSProperties = {
        width: props.style.width,
        height: `calc(100vh - ${exportListStyle.height} - 2px)`
    };

    return (
        <div style={props.style}>
            <DoublePageWorkSpace 
                style={workSpaceStyle}
                leftFramePage={pages['左頁']}
                rightFramePage={pages['右頁']}
            />
            <ExportList
                selectedModelIndex={props.selectedModelIndex}
                selectedFrameIndex={props.selectedFrameIndex}
                reviewItem={props.reviewItem}
                style={exportListStyle}
                onFrameSelect={props.onSelect}
            />
        </div>
    )
}

interface DoublePageWorkSpaceProps {
    style: CSSProperties;
    leftFramePage: FramedPage
    rightFramePage: FramedPage
}

function DoublePageWorkSpace(props: DoublePageWorkSpaceProps): JSX.Element {
    const initialViewPercentage: number = 100;
    const [viewPercentage, setViewPercentage] = useState<number>(initialViewPercentage);
    const [isEditing, setIsEditing] = useState<boolean>(false);

    let canvasStyle: CSSProperties = {
        display: "inline-block",
        verticalAlign: "top",
        height: props.style.height,
        backgroundColor: "#E4E4E4",
        border: "solid 2px #E4E4E4",
        borderBottom: "none",
        width: `calc(${props.style.width})`
    };
  
    return (
        <div style={props.style}>
            <Canvas
                style={canvasStyle}
                leftFramePage={props.leftFramePage}
                rightFramePage={props.rightFramePage}
                viewPercentage={viewPercentage}
                isEditing={isEditing}
                setIsEditing={(isEditing: boolean)=>setIsEditing(isEditing)}
            />
        </div>
    )
}

export default DoublePageView;
