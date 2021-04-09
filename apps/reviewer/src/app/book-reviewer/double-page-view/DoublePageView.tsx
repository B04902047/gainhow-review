
import { FramedPage, ReviewItem } from '@gainhow-review/data';
import { SourceImageToolBar } from '@gainhow-review/ui';
import { findGroupFramedPageWithFramedPage, GroupFramedPage,groupFramedPage } from '@gainhow-review/utils';
import Book from 'libs/data/src/lib/Product/Book';
import React, { CSSProperties, useEffect, useState } from 'react';
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
    function changeEditingPage(framedPage: FramedPage): void {
        let frameIndex: number = framedPage.frameIndexInModel
        if(frameIndex !== -1) {
            props.onSelect(props.selectedModelIndex, frameIndex);
        }
    }

    return (
        <div style={props.style}>
            <DoublePageWorkSpace 
                style={workSpaceStyle}
                leftFramePage={pages['左頁']}
                rightFramePage={pages['右頁']}
                changeEditingPage={changeEditingPage}
                selectedFrameIndex={props.selectedFrameIndex}
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
    selectedFrameIndex: number;
    changeEditingPage(framePage: FramedPage): void;
}

function DoublePageWorkSpace(props: DoublePageWorkSpaceProps): JSX.Element {
    const initialViewPercentage: number = 100;
    const [viewPercentage, setViewPercentage] = useState<number>(initialViewPercentage);
    const [isLeftPageEditing, setIsLeftPageEditing] = useState<boolean>(false);
    const [isRightPageEditing, setIsRightPageEditing] = useState<boolean>(false);
    function setRightIsEditing (){
        setIsLeftPageEditing(false);
        setIsRightPageEditing(true);
    }
    function setLeftIsEditing (){
        setIsRightPageEditing(false);
        setIsLeftPageEditing(true);
    }
    useEffect(()=>{
        if(props.selectedFrameIndex === props.leftFramePage.frameIndexInModel && (isRightPageEditing||isLeftPageEditing)) {
            setLeftIsEditing();
        }
        if(props.selectedFrameIndex === props.rightFramePage.frameIndexInModel && (isRightPageEditing||isLeftPageEditing)) {
            setRightIsEditing();
        }
    },[props.selectedFrameIndex]);
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
                isLeftPageEditing={isLeftPageEditing}
                isRightPageEditing={isRightPageEditing}
                setIsLeftPageEditing={(isEditing: boolean)=> {
                    setIsLeftPageEditing(isEditing);
                    if(isEditing) {
                        setIsRightPageEditing(false);
                        props.changeEditingPage(props.leftFramePage)
                    }
                }}
                setIsRightPageEditing={(isEditing: boolean)=> {
                    setIsRightPageEditing(isEditing);
                    if(isEditing) {
                        setIsLeftPageEditing(false);
                        props.changeEditingPage(props.rightFramePage)
                    }
                }}
            />
            {(isLeftPageEditing || isRightPageEditing) && <SourceImageToolBar/>}
        </div>
    )
}

export default DoublePageView;
