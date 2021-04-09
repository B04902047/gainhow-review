
import { FramedPage, ReviewItem, ReviewModel } from '@gainhow-review/data';
import { ExportingFrame } from '@gainhow-review/ui';
import BookFrameDictionary from 'libs/data/src/lib/FrameDictionary/BookFrameDictionary';
import { Book } from 'libs/interfaces/src/lib/product';
import React, { CSSProperties, useEffect, useState } from 'react';
import { PlusOutlined, SwapOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';




  import './ExportOverview.module.css';
import { useDrag } from 'libs/ui/src/hooks';
  

interface ExportOverviewProps {
    reviewItem: ReviewItem;
    style: CSSProperties;
    selectedFrameIndex: number;
    onFrameSelect(frameIndex: number): void;
    onFrameEdit(frameIndex: number): void;
    onSwapFrames(frameIndex1: number, frameIndex2: number): void;
    onFrameReplaceSourceFile(frameIndex: number, sourceFileNumber: number, pageNumberInSourceFile: number): void;
}

export function ExportOverview(props: ExportOverviewProps): JSX.Element {
    let reviewModel: ReviewModel = props.reviewItem.models[0];
    let frameDictionary: BookFrameDictionary = props.reviewItem.product.frameDictionary as BookFrameDictionary;
    let book: Book = frameDictionary.product;
    let pagingDirection = book.pagingDirection;

    let pagePairs: NamedFramedPagePair[] = [];
    pagePairs.push({
        [(pagingDirection == "RIGHT_TO_LEFT")? "right": "left"]: {
            ...getNamedFramedPage(0),
            name: '封面'
        }
    });
    pagePairs.push({
        [(pagingDirection == "RIGHT_TO_LEFT")? "left": "right"]: {
            name: '（封面裡）',
            isSelected: false
        },
        [(pagingDirection == "RIGHT_TO_LEFT")? "right": "left"]: getNamedFramedPage(1)
    });
    for (let i=2; i<=book.numberOfPages; i+=2) {
        let first: NamedFramedPage = getNamedFramedPage(i)
        let second: NamedFramedPage = (i+1 <= book.numberOfPages)? getNamedFramedPage(i+1) : {
            name: '（封底裡）',
            isSelected: false
        };
        pagePairs.push({
            left: (pagingDirection == "RIGHT_TO_LEFT")? first: second,
            right: (pagingDirection == "RIGHT_TO_LEFT")? second: first
        });
    }
    if (book.numberOfPages % 2 !== 0) {
        pagePairs.push({
            [(pagingDirection == "RIGHT_TO_LEFT")? "right": "left"]: {
                name: '（封底裡）',
                isSelected: false
            }
        });
    }

    pagePairs.push({
        [(pagingDirection == "RIGHT_TO_LEFT")? "left": "right"]: {
            ...getNamedFramedPage(book.numberOfPages + 1),
            name: '封底'
        }
    });
    
    let pagePairStyle: CSSProperties = {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 20,
        height: 200
    };
    let pagePairsStyle: CSSProperties = {
        padding: 30,
        paddingTop: 30,
    };
    let style: CSSProperties = {
        backgroundColor: "#F7F7F7",
        ...props.style,
    }
    return (
        <div style={style}>
            <div style={pagePairsStyle}>
                {pagePairs.map(pair => {
                    return (
                        <PagePair
                            style={pagePairStyle}
                            key={pair.left?.name || pair.right?.name}
                            pair={pair}
                        />
                    );
                })}
            </div>
        </div>
    );

    function insertFramedPage(frameIndex: number, sourceFileNumber: number, pageNumberInSourceFile: number): void {

    }
    function deleteFrame(frameIndex: number): void {

    }
    function insertBlankFramedPage(frameIndex: number): void {

    }
    function getNamedFramedPage(frameIndex: number): NamedFramedPage {
        return {
            name: String(frameIndex),
            frameIndex,
            framedPage: reviewModel.framedPages[frameIndex],
            isSelected: (frameIndex == props.selectedFrameIndex),
            onSelect: () => props.onFrameSelect(frameIndex),
            onEdit: () => props.onFrameEdit(frameIndex),
            onInsert: () => {},
            onDelete: () => {},
            onReplaceSourcePage: () => {},
            onDrop: () => {
                props.onSwapFrames(frameIndex, props.selectedFrameIndex);
            }
        }
    }
}


export default ExportOverview;

interface NamedFramedPage {
    name: string;
    framedPage?: FramedPage;
    frameIndex?: number;
    isSelected: boolean;
    onSelect?(): void;
    onEdit?(): void;
    onInsert?(): void;
    onDelete?(): void;
    onReplaceSourcePage?(): void;
    onDrop?(): void;
}

export interface NamedFramedPagePair {
    left?: NamedFramedPage;
    right?: NamedFramedPage;
}

interface PagePairProps {
    pair: NamedFramedPagePair;
    style?: CSSProperties;
}

export function PagePair(props: PagePairProps): JSX.Element {
    let style: CSSProperties = {
        display: "inline-block",
        verticalAlign: "top",
        ...props.style
    };
    let widthInMm: number = 210+6;
    let heightInMm: number = 297+6;
    let height: number = 160;
    return (
        <div style={style}>
            <SingleFrame
                namedFramePage={props.pair.left}
                widthInMm={widthInMm}
                heightInMm={heightInMm}
                height={height}
            />
            <MiddleLine/>
            <SingleFrame
                namedFramePage={props.pair.right}
                widthInMm={widthInMm}
                heightInMm={heightInMm}
                height={height}
            />
        </div>
    )
}

function MiddleLine(props: {}): JSX.Element {
    let [isDraggedOver, setIsDraggedOver] = useState(false);

    return (
        <div
            style={{
                display: "inline-block",
                width: 5,
                marginTop: 20,
                height: 187,
                backgroundColor: (isDraggedOver)? '#4ba3ff77' : 'inherit',
                borderRadius: '1px',
                boxShadow: (isDraggedOver)? '0 0 1px 1px #4ba3ff77' : 'none'
            }}
            onDragEnter={() => setIsDraggedOver(true)}
            onDragLeave={() => setIsDraggedOver(false)}
        />
    );
}

type SingleFrameProps = {
    namedFramePage?: NamedFramedPage;
    widthInMm: number;
    heightInMm: number;
    height: number;
};

function SingleFrame(props: SingleFrameProps): JSX.Element {
    let [showToolBar, setShowToolBar] = useState<boolean>(false);
    let [isDroppable, setIsDroppable] = useState<boolean>(false);

    let [[positionX, positionY], setPosition] = useState([0, 0]);

    return (
        <div style={{
            display: "inline-block",
            verticalAlign: "top",
            position: "relative",
            left: positionX,
            top: positionY,
        }}
            onMouseEnter={() => setShowToolBar(true)}
            onMouseLeave={() => setShowToolBar(false)}
            title="拖曳以調換頁序"
        >
            <SingleFrameToolBar
                isHidden={!showToolBar || (props.namedFramePage?.framedPage === undefined)}
                onEdit={props.namedFramePage?.onEdit}
                onInsert={props.namedFramePage?.onInsert}
                onDelete={props.namedFramePage?.onDelete}
                onReplaceSourcePage={props.namedFramePage?.onReplaceSourcePage}
            />
            {(!props.namedFramePage)?
                <NoFrame
                    widthInMm={props.widthInMm}
                    heightInMm={props.heightInMm}
                    height={props.height}
                />
            : (!props.namedFramePage.framedPage)?
                <BlankFrame
                    widthInMm={props.widthInMm}
                    heightInMm={props.heightInMm}
                    withBorder={true}
                    isSelected={props.namedFramePage.isSelected}
                    name={props.namedFramePage.name}
                    height={props.height}
                />
            : 
            <div style={{ position: 'relative', cursor: 'move' }}
                onClick={() => props.namedFramePage.onSelect()}
                onDoubleClick={() => props.namedFramePage.onEdit()}
                draggable
                onDragStart={() => {}}
            >
                <ExportingFrame
                    shadowed
                    framedPage={props.namedFramePage.framedPage}
                    isSelected={props.namedFramePage.isSelected}
                    onSelect={() => props.namedFramePage.onSelect()}
                    horizontalPadding={0}
                    height={props.height}
                    onDragEnter={() => setIsDroppable(true)}
                />
                {isDroppable && <div 
                    style={{
                        position: "absolute",
                        top: (props.namedFramePage.isSelected)? -1: 1,
                        left: (props.namedFramePage.isSelected)? 3: 1
                    }}
                    onDragLeave={() => setIsDroppable(false)}
                >
                    <ShadowingFrame
                        widthInMm={props.widthInMm}
                        heightInMm={props.heightInMm}
                        height={props.height}
                    />
                </div>
                }
            </div>}
        </div>
        
    );

    
}

interface BlankFrameProps {
    widthInMm: number;
    heightInMm: number;
    withBorder: boolean;
    isSelected: boolean;
    name?: string;
    height: number;
    backgroundColor?: string;
}

function BlankFrame(props: BlankFrameProps): JSX.Element {

    let frameWidthInPx = props.height / props.heightInMm * props.widthInMm;
    let pageIndexStyle: CSSProperties = {
        width: frameWidthInPx + ((props.isSelected)? 6 : 0),
        color: (props.isSelected)? "#1581ff" : "black",
        fontSize: 14,
        fontFamily: "arial",
        textAlign: "center"
    };

    return (
        <div style={{
            display: "inline-block",
            verticalAlign: "top"
        }}>
            <div style={{
                    width: frameWidthInPx,
                    height: props.height,
                    border: (!props.withBorder)? "none"
                            : (props.isSelected)? "solid 3px #1581ff"
                            : "solid 1px #707070",
                    marginTop: (props.isSelected)? 5: 9,
                    paddingBottom: 0,
                    backgroundColor: (props.backgroundColor)? props.backgroundColor
                                    : (props.withBorder)? "white"
                                    :  "inherit"
                }}
            />
            <div style={pageIndexStyle}>
                {props.name}
            </div>
        </div>
    )
}

interface NoFrameProps {
    widthInMm: number;
    heightInMm: number;
    height: number;
}

function NoFrame(props: NoFrameProps): JSX.Element {
    return (
        <BlankFrame
            widthInMm={props.widthInMm}
            heightInMm={props.heightInMm}
            withBorder={false}
            isSelected={false}
            height={props.height}
        />
    );
}

interface ShadowingFrameProps {
    widthInMm: number;
    heightInMm: number;
    height: number;
}

function ShadowingFrame(props: ShadowingFrameProps): JSX.Element {
    return (
        <BlankFrame
            widthInMm={props.widthInMm}
            heightInMm={props.heightInMm}
            withBorder={false}
            isSelected={false}
            height={props.height}
            backgroundColor="#4ba3ff77"
        />
    );

}



interface SingleFrameToolBarProps {
  isHidden: boolean;
  onEdit(): void;
  onInsert(): void;
  onDelete(): void;
  onReplaceSourcePage(): void;
}

function SingleFrameToolBar(props: SingleFrameToolBarProps): JSX.Element {
    let style: CSSProperties = {
        height: 20,
        fontSize: 18,
        color: "#777777"
    }
    return (
        <div style={style}>
            {
                !props.isHidden && (<>
                    &thinsp;
                    <SingleFrameToolBarButton
                        onClick={props.onInsert}
                        title="往左新增頁面"
                    >
                        <PlusOutlined/>
                    </SingleFrameToolBarButton>
                    &thinsp;
                    <SingleFrameToolBarButton
                        onClick={props.onReplaceSourcePage}
                        title="置入頁面"
                    >
                        <SwapOutlined/>
                    </SingleFrameToolBarButton>
                    &thinsp;
                    <SingleFrameToolBarButton
                        onClick={props.onEdit}
                        title="編輯頁面"
                    >
                        <EditOutlined/>
                    </SingleFrameToolBarButton>
                    &thinsp;
                    <SingleFrameToolBarButton
                        onClick={props.onDelete}
                        title="刪除頁面"
                    >
                        <DeleteOutlined/>
                    </SingleFrameToolBarButton>
                </>)
            }
        </div>
    );
}

interface SingleFrameToolBarButtonProps {
  children: JSX.Element;
  onClick(): void;
  title?: string
}

function SingleFrameToolBarButton(props: SingleFrameToolBarButtonProps): JSX.Element {
  let [isHovered, setIsHovered] = useState<boolean>(false);
  return (
      <div style={{
          borderRadius: '30% 30%',
          padding: '0px 3px',
          backgroundColor: (isHovered)? 'LightGray' : 'inherit',
          display: 'inline-block',
          cursor: 'pointer'
      }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={props.onClick}
          title={props.title}
      >
          {props.children}
      </div>
  )
}