
import { FramedPage, ReviewItem } from '@gainhow-review/data';
import { SourceImageToolBar } from '@gainhow-review/ui';
import { BACK_COVER_BLANK_PAGENAME, FORNT_COVER_BLANK_PAGENAME } from '@gainhow-review/utils';
import Book from 'libs/data/src/lib/Product/Book';
import React, { CSSProperties, useEffect, useState } from 'react';
import Canvas from '../canvans/Canvans';
import {SortableExportList} from '../../sortable-export-list/SortableExportList'
import './DoublePageView.module.css';
import { BookPagingDirection } from 'libs/interfaces/src/lib/product';
type GroupFramedPage  = {
    leftPage : FramedPage,
    rightPage : FramedPage,
};
  
interface DoublePageViewProps {
    style: CSSProperties;
    reviewItem: ReviewItem;
    selectedModelIndex: number;
    selectedFrameIndex: number;
    onSelect(modelIndex:number, frameIndex:number):void;
    updateReviewItem(newReviewItem: ReviewItem): void;
    onShiftFramesBetween(start: number, end: number): void;
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


    function groupFramedPage(framedPages: FramedPage[], direct: BookPagingDirection) : Array<GroupFramedPage> {
        let groupArray: Array<GroupFramedPage> = [];
        if ( direct === 'RIGHT_TO_LEFT' ) {
            groupArray = rightToLeftGroupFramedPage(framedPages);
        }
        else if ( direct === 'LEFT_TO_RIGHT' ) {
            groupArray = leftToRightGroupFramedPage(framedPages);
        }
        return groupArray;
    
        function leftToRightGroupFramedPage (framedPages: FramedPage[]): Array<GroupFramedPage> {
            let rightToLeftGroup = rightToLeftGroupFramedPage(framedPages);
            let result = rightToLeftGroup.map((group)=>{
            let temp = group.leftPage;
            group.leftPage = group.rightPage ;
            group.rightPage = temp;
            return group;
            })
            return result;
        }

        function rightToLeftGroupFramedPage (framedPages: FramedPage[]): Array<GroupFramedPage> {
            let groupArray: Array<GroupFramedPage> = [];
            let blankFramePage = new FramedPage(
                '空白頁',
                '空白頁',
                framedPages[0].reviewModel,
                -1
            );
            for( let framedPage of framedPages) {
                let inputGroup: GroupFramedPage = {
                    leftPage: blankFramePage,
                    rightPage: blankFramePage
                };
                let lastGroupIndex: number = (groupArray.length === 0)? 0 : groupArray.length-1;
                let lastGroup: GroupFramedPage = groupArray[lastGroupIndex];
                let isNeedUseOldGroup: boolean = false;
                if (lastGroup) {
                    if(lastGroup.rightPage.frameName === '空白頁') isNeedUseOldGroup = true;
                }
                if (framedPage.frameName === '封面') { 
                    inputGroup.rightPage = framedPage;
                } else if (framedPage.frameName === '封底') {
                    // TODO: 加上封底裏
                    let backCoverBlankPage = new FramedPage(
                        BACK_COVER_BLANK_PAGENAME,
                        BACK_COVER_BLANK_PAGENAME,
                        framedPage.reviewModel,
                        -1
                    );
                    if ( isNeedUseOldGroup ) {
                        lastGroup.rightPage = backCoverBlankPage;
                    } else {
                        let backFramePageGroup = {
                            leftPage: blankFramePage,
                            rightPage: backCoverBlankPage
                        }
                        groupArray.push(backFramePageGroup);
                    }
                    inputGroup.leftPage =  framedPage
                } else if (framedPage.frameName === '1' ) {
                    let frontCoverBlankPage = new FramedPage(
                        FORNT_COVER_BLANK_PAGENAME,
                        FORNT_COVER_BLANK_PAGENAME,
                        framedPage.reviewModel,
                        -1
                    );
                    inputGroup = {leftPage: frontCoverBlankPage, rightPage: framedPage};
                } else {
                    
                    if (isNeedUseOldGroup) {
                        inputGroup = groupArray.pop();
                        inputGroup.rightPage = framedPage;
                    }
                    else {
                        inputGroup.leftPage = framedPage;
                    }
                }
                groupArray.push(inputGroup);
            }
            return groupArray;
        }

    }

    function findGroupFramedPageWithFramedPage(groups:Array<GroupFramedPage>, framedPage: FramedPage): GroupFramedPage {
    let result:GroupFramedPage;
    let index:number = framedPage.frameIndexInModel;
    for (let i=0;i<groups.length ; i++) {
        let pageKeyArray = Object.keys(groups[i]);
        for(let j=0;j<pageKeyArray.length;j++) {
        let key:string = pageKeyArray[j];
        if(groups[i][key].frameIndexInModel === index) {
            result = groups[i];
            break;
        }
        if(result) break;
        }
    }
    if(!result) throw Error('findGroupFramedPageWithFramedPage找不到GroupFramedPage');
    return result
    }

    return (
        <div style={props.style}>
            <DoublePageWorkSpace 
                style={workSpaceStyle}
                leftFramePage={pages.leftPage}
                rightFramePage={pages.rightPage}
                changeEditingPage={changeEditingPage}
                selectedFrameIndex={props.selectedFrameIndex}
            />
            <SortableExportList
                selectedModelIndex={props.selectedModelIndex}
                selectedFrameIndex={props.selectedFrameIndex}
                reviewItem={props.reviewItem}
                style={exportListStyle}
                onFrameSelect={props.onSelect}
                updateReviewItem={(newReviewItem)=>props.updateReviewItem(newReviewItem)}
                onShiftFramesBetween={props.onShiftFramesBetween}
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
        if(props.selectedFrameIndex === props.leftFramePage.frameIndexInModel && isRightPageEditing) {
            setLeftIsEditing();
        }
        if(props.selectedFrameIndex === props.rightFramePage.frameIndexInModel && isLeftPageEditing) {
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
