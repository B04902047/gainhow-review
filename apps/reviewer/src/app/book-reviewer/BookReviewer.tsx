import { FramedPage, ReviewItem, ReviewModel } from "@gainhow-review/data";
import { Button, ImportList, ModelInfo } from "@gainhow-review/ui";
import BookFrameDictionary from "libs/data/src/lib/FrameDictionary/BookFrameDictionary";
import Book from "libs/data/src/lib/Product/Book";
import ExportingFrame from "libs/ui/src/ExportList/exporting-frame/ExportingFrame";
import React, { CSSProperties, Props, ReactChild, useState } from "react";
import { PlusOutlined, SwapOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import ExportList from "./ExportList";
import BasicSideToolBar from "../working-stage/side-tool-bar/SideToolBar";

interface BookReviewerProps {
    initialReviewItem: ReviewItem;
}

export function BookReviewer(props: BookReviewerProps): JSX.Element {
    let [bufferedReviewItem, updateBufferedReviewItem] = useState<ReviewItem>(props.initialReviewItem);

    let [selectedFrameIndex, selectFrame] = useState<number>(0);
    let selectedFramedPage: FramedPage | undefined
      = bufferedReviewItem.getFramedPage(0, selectedFrameIndex);
    if (!selectedFramedPage) throw new Error("debug: selected frame is undefined???");

    let [importListIsHidden, setImportListIsHidden] = useState<boolean>(true);
    let importListStyle: CSSProperties = {
        display: "inline-block",
        verticalAlign: "top",
        width: (importListIsHidden)? 40: 240,
        height: '100vh',
    };
    let rightAreaStyle: CSSProperties = {
        display: "inline-block",
        verticalAlign: "top",
    }
    let modelInfoStyle: CSSProperties = {
        width: 300,
        height: 'calc(100vh - 182px)'
    };

    let downRightAreaStyle: CSSProperties = {
        display: 'inline-block',
        width: 300,
        height: 180,
        verticalAlign: 'top',
        border: "solid 2px #E4E4E4",
        borderTop: "none",
        backgroundColor: "#F7F7F7"
    };
    let nextStepButtonStyle: CSSProperties = {
        marginBottom: 10,
        marginTop: 50,
        marginLeft: 58
    };
    let previousStepButtonStyle: CSSProperties = {
        marginLeft: 58
    };

    let workSpaceStyle: CSSProperties = {
        display: "inline-block",
        height: "100vh",
        verticalAlign: "top",
        backgroundColor: "#f4f4f4",
        border: "solid 2px #E4E4E4",
        borderBottom: "none",
        userSelect: "none",
        width: `calc(100vw - ${importListStyle.width}px - ${modelInfoStyle.width}px - 14px - 50px)`,
    };
    let [viewMode, setViewMode] = useState<"DOUBLE_PAGE"|"OVERVIEW">("OVERVIEW");
    return (
        <div>
            <ImportList
              style={importListStyle}
              files={bufferedReviewItem.status.uploadFileStatuses}
              selectPage={() => {}}
              isSelected={() => false}
              isHidden={importListIsHidden}
              onToggle={() => setImportListIsHidden(!importListIsHidden)}
            />
            <SideToolBar
                style={{
                    height: '100vh',
                    display: 'inline-block'
                }}
                zoom={() => {}}
            />
            {(viewMode === "OVERVIEW")? <ExportOverview
                style={workSpaceStyle}
                reviewItem={bufferedReviewItem}
                selectedFrameIndex={selectedFrameIndex}
                onSelect={(frameIndex: number) => selectFrame(frameIndex)}
                onEdit={(frameIndex) => onEdit(frameIndex)}
            /> : <DoublePageView
                style={workSpaceStyle}
                reviewItem={bufferedReviewItem}
            />}
            <div style={rightAreaStyle}>
                <ModelInfo
                    product={bufferedReviewItem.product}
                    isHidden={false}
                    onToggle={() => {}}
                    style={modelInfoStyle}
                    hidable={false}
                />

                <div style={downRightAreaStyle}>
                    <Button
                        style={nextStepButtonStyle}
                        isPrimary
                    >
                        下一步
                    </Button>
                    <Button style={previousStepButtonStyle}>
                        上一步
                    </Button>
                </div>
            </div>
        </div>
      );
    function onEdit(frameIndex: number): void {
        selectFrame(frameIndex);
        setViewMode("DOUBLE_PAGE");
    }
}

interface ExportOverviewProps {
    reviewItem: ReviewItem;
    style: CSSProperties;
    selectedFrameIndex: number;
    onSelect(frameIndex: number): void;
    onEdit(frameIndex: number): void;
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
            isSelected: false,
            onSelect: () => {}
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
                isSelected: false,
                onSelect: () => {}
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
            framedPage: reviewModel.framedPages[frameIndex],
            isSelected: (frameIndex == props.selectedFrameIndex),
            onSelect: () => props.onSelect(frameIndex),
            onEdit: () => props.onEdit(frameIndex),
            onInsert: () => {},
            onDelete: () => {},
            onSwap: () => {}
        }
    }
}


interface NamedFramedPage {
    name: string;
    framedPage?: FramedPage;
    isSelected: boolean;
    onSelect(): void;
    onEdit?(): void;
    onInsert?(): void;
    onDelete?(): void;
    onSwap?(): void;
}

interface NamedFramedPagePair {
    left?: NamedFramedPage;
    right?: NamedFramedPage;
}

interface PagePairProps {
    pair: NamedFramedPagePair;
    style?: CSSProperties;
}

function PagePair(props: PagePairProps): JSX.Element {
    let style: CSSProperties = {
        display: "inline-block",
        verticalAlign: "top",
        ...props.style
    };
    let widthInMm: number = 210+6;
    let heightInMm: number = 297+6;
    let height: number = 160;
    let leftStyle: CSSProperties = {
        display: "inline-block",
        verticalAlign: "top",
        paddingRight: 1
    };
    let rightStyle: CSSProperties = {
        display: "inline-block",
        verticalAlign: "top",
        paddingLeft: 1
    };
    return (
        <div style={style}>
            <SingleFrame
                style={leftStyle}
                namedFramePage={props.pair.left}
                widthInMm={widthInMm}
                heightInMm={heightInMm}
                height={height}
            />
            <SingleFrame
                style={rightStyle}
                namedFramePage={props.pair.right}
                widthInMm={widthInMm}
                heightInMm={heightInMm}
                height={height}
            />
        </div>
    )
}

type SingleFrameProps = {
    namedFramePage?: NamedFramedPage;
    style: CSSProperties;
    widthInMm: number;
    heightInMm: number;
    height: number;
};

function SingleFrame(props: SingleFrameProps): JSX.Element {
    let [showToolBar, setShowToolBar] = useState<boolean>(false);
    let [isDraggable, setIsDraggable] = useState<boolean>(false);
    
    return (
        <div style={props.style}
            onMouseOver={() => setShowToolBar(true)}
            onMouseLeave={() => setShowToolBar(false)}
        >
            <SingleFrameToolBar
                isHidden={!showToolBar || (props.namedFramePage?.framedPage === undefined)}
                onEdit={props.namedFramePage?.onEdit}
                onInsert={props.namedFramePage?.onInsert}
                onDelete={props.namedFramePage?.onDelete}
                onSwap={props.namedFramePage?.onSwap}
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
            <div style={{
                position: 'relative'
            }}
                onMouseLeave={() => setIsDraggable(false)}
            >
                <ExportingFrame
                    shadowed
                    framedPage={props.namedFramePage.framedPage}
                    isSelected={props.namedFramePage.isSelected}
                    onSelect={() => props.namedFramePage.onSelect()}
                    horizontalPadding={0}
                    height={props.height}
                    onMouseOver={() => setIsDraggable(true)}
                />
                {isDraggable && <div 
                    style={{
                        position: "absolute",
                        top: (props.namedFramePage.isSelected)? -1: 1,
                        left: (props.namedFramePage.isSelected)? 3: 1,
                        cursor: 'move'
                    }}
                    onClick={() => props.namedFramePage.onSelect()}
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
        
    )
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
    onSwap(): void;
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
                    >
                        <PlusOutlined/>
                    </SingleFrameToolBarButton>
                    &thinsp;
                    <SingleFrameToolBarButton
                        onClick={props.onSwap}
                    >
                        <SwapOutlined/>
                    </SingleFrameToolBarButton>
                    &thinsp;
                    <SingleFrameToolBarButton
                        onClick={props.onEdit}
                    >
                        <EditOutlined/>
                    </SingleFrameToolBarButton>
                    &thinsp;
                    <SingleFrameToolBarButton
                        onClick={props.onDelete}
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
        >
            {props.children}
        </div>
    )
}

interface DoublePageViewProps {
    style: CSSProperties;
    reviewItem: ReviewItem;
}

function DoublePageView(props: DoublePageViewProps): JSX.Element {
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
            <DoublePageWorkSpace style={workSpaceStyle}/>
            <ExportList
                selectedModelIndex={0}
                selectedFrameIndex={0}
                reviewItem={props.reviewItem}
                style={exportListStyle}
                onFrameSelect={() => {}}
            />
        </div>
    )
}

interface DoublePageWorkSpaceProps {
    style: CSSProperties;
}

function DoublePageWorkSpace(props: DoublePageWorkSpaceProps): JSX.Element {
    return (
        <div style={props.style}>
        </div>
    )
}

interface SideToolBarProps {
    style: CSSProperties;
    zoom: (power: number) => void;
}

function SideToolBar(props: SideToolBarProps): JSX.Element {
    return (
        <div style={props.style}>
            <BasicSideToolBar
                style={{
                    height: '100vh',
                }}
                zoom={() => {}}
            />
        </div>
    )
}