
import { ReviewItem, ReviewModel } from '@gainhow-review/data';
import BookFrameDictionary from 'libs/data/src/lib/FrameDictionary/BookFrameDictionary';
import { Book } from 'libs/interfaces/src/lib/product';
import React, { CSSProperties } from 'react';
import NamedFramedPage, { NamedFramedPagePair, PagePair } from '../named-framed-page/NamedFramedPage';





  import './ExportOverview.module.css';
  

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


export default ExportOverview;
