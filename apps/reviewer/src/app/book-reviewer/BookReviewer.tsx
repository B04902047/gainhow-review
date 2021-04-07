import { FramedPage, ReviewItem, ReviewModel } from "@gainhow-review/data";
import { Button, ImportList, ModelInfo } from "@gainhow-review/ui";
import BookFrameDictionary from "libs/data/src/lib/FrameDictionary/BookFrameDictionary";
import Book from "libs/data/src/lib/Product/Book";
import ExportingFrame from "libs/ui/src/ExportList/exporting-frame/ExportingFrame";
import React, { CSSProperties, useState } from "react";

interface BookReviewerProps {
    reviewItem: ReviewItem;
}

export function BookReviewer(props: BookReviewerProps): JSX.Element {
    let [importListIsHidden, setImportListIsHidden] = useState<boolean>(false);
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
        borderLeft: "none",
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
        width: `calc(100vw - ${importListStyle.width}px - ${modelInfoStyle.width}px - 14px)`,
    };
    return (
        <div>
            <ImportList
              style={importListStyle}
              files={props.reviewItem.status.uploadFileStatuses}
              selectPage={() => {}}
              isSelected={() => false}
              isHidden={importListIsHidden}
              onToggle={() => setImportListIsHidden(!importListIsHidden)}
            />
            <ExportOverview
                style={workSpaceStyle}
                reviewItem={props.reviewItem}
            />
            <div style={rightAreaStyle}>
                <ModelInfo
                    product={props.reviewItem.product}
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
}

interface ExportOverviewProps {
    reviewItem: ReviewItem;
    style: CSSProperties;
}

export function ExportOverview(props: ExportOverviewProps): JSX.Element {
    let reviewModel: ReviewModel = props.reviewItem.models[0];
    let frameDictionary: BookFrameDictionary = props.reviewItem.product.frameDictionary as BookFrameDictionary;
    let book: Book = frameDictionary.product;
    let pagingDirection = book.pagingDirection;

    let pagePairs: NamedFramedPagePair[] = [];
    pagePairs.push({
        [(pagingDirection == "RIGHT_TO_LEFT")? "right": "left"]: {
            name: '封面',
            framedPage: reviewModel.framedPages[0]
        }
    });
    pagePairs.push({
        [(pagingDirection == "RIGHT_TO_LEFT")? "left": "right"]: {
            name: '封面裡'
        },
        [(pagingDirection == "RIGHT_TO_LEFT")? "right": "left"]: {
            name: '1',
            framedPage: reviewModel.framedPages[1]
        }
    });
    for (let i=2; i<=book.numberOfPages; i+=2) {
        let first: NamedFramedPage = {
            name: String(i),
            framedPage: reviewModel.framedPages[i]
        }
        let second: NamedFramedPage = (i+1 <= book.numberOfPages)? {
            name: `${i+1}`,
            framedPage: reviewModel.framedPages[i+1]
        } : {
            name: '封底裡'
        };
        pagePairs.push({
            left: (pagingDirection == "RIGHT_TO_LEFT")? first: second,
            right: (pagingDirection == "RIGHT_TO_LEFT")? second: first
        });
    }
    if (book.numberOfPages % 2 !== 0) {
        pagePairs.push({
            [(pagingDirection == "RIGHT_TO_LEFT")? "right": "left"]: {
                name: '封底裡'
            }
        });
    }

    pagePairs.push({
        [(pagingDirection == "RIGHT_TO_LEFT")? "left": "right"]: {
            name: '封底',
            // TODO: framedPage: reviewModel.framedPages[book.numberOfPages + 1]
        }
    });
    
    let pagePairStyle: CSSProperties = {
        paddingLeft: 10,
        paddingRight: 10,
        height: 200
    };
    let style: CSSProperties = {
        backgroundColor: "#F7F7F7",
        ...props.style,
    }
    return (
        <div style={style}>
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
    );
}


interface NamedFramedPage {
    name: string;
    framedPage?: FramedPage;
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
    return (
        <div style={style}>
            {(!props.pair.left)?
                <EmptyFrame
                    widthInMm={widthInMm}
                    heightInMm={heightInMm}
                    withBorder={false}
                    isSelected={false}
                    height={height}
                />
            : (!props.pair.left.framedPage)?
                <EmptyFrame
                    widthInMm={widthInMm}
                    heightInMm={heightInMm}
                    withBorder={true}
                    isSelected={false}
                    name={props.pair.left.name}
                    height={height}
                />
            : <ExportingFrame
                framedPage={props.pair.left.framedPage}
                isSelected={false}
                onSelect={() => {}}
                horizontalPadding={0}
                height={height}
            />}
            {(!props.pair.right)?
                <EmptyFrame
                    widthInMm={widthInMm}
                    heightInMm={heightInMm}
                    withBorder={false}
                    isSelected={false}
                    height={height}
                />
            : (!props.pair.right.framedPage)?
                <EmptyFrame
                    widthInMm={widthInMm}
                    heightInMm={heightInMm}
                    height={height}
                    withBorder={true}
                    isSelected={false}
                    name={props.pair.right.name}
                />
            : <ExportingFrame
                framedPage={props.pair.right.framedPage}
                isSelected={false}
                onSelect={() => {}}
                horizontalPadding={0}
                height={height}
            />}
        </div>
    )
}

interface EmptyFrameProps {
    widthInMm: number;
    heightInMm: number;
    withBorder: boolean;
    isSelected: boolean;
    name?: string;
    height: number;
}

function EmptyFrame(props: EmptyFrameProps): JSX.Element {

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
            <div
                style={{
                    width: frameWidthInPx,
                    height: props.height,
                    border: (!props.withBorder)? "none"
                            : (props.isSelected)? "solid 3px #1581ff"
                            : "solid 1px #707070",
                    marginTop: (props.isSelected)? 5: 9,
                    paddingBottom: 0,
                    backgroundColor: (props.withBorder)? "white": "inherit"
                }}
            />
            <div style={pageIndexStyle}>
                {props.name}
            </div>
        </div>
    )
}

