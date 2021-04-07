import { FramedPage, ReviewItem, ReviewModel } from "@gainhow-review/data";
import BookFrameDictionary from "libs/data/src/lib/FrameDictionary/BookFrameDictionary";
import Book from "libs/data/src/lib/Product/Book";
import ExportingFrame from "libs/ui/src/ExportList/exporting-frame/ExportingFrame";
import React from "react";

interface BookReviewerProps {

}

function BookReviewer(props: BookReviewerProps): JSX.Element {

}

interface ExportOverviewProps {
    reviewItem: ReviewItem;
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
            name: String(i+1),
            framedPage: reviewModel.framedPages[i+1]
        } : {
            name: '封底裡'
        };
        pagePairs.push({
            left: (pagingDirection == "RIGHT_TO_LEFT")? first: second,
            right: (pagingDirection == "RIGHT_TO_LEFT")? second: first
        });
    }
    if (book.numberOfPages % 2 === 0) {
        pagePairs.push({
            [(pagingDirection == "RIGHT_TO_LEFT")? "right": "left"]: {
                name: '封底裡'
            }
        });
    }
    return (
        <div>
           {pagePairs.map(pair => {
                return (
                    <PagePair
                        key={pair.left?.name || pair.right?.name}
                        pair={pair}
                    />
                )
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
}

function PagePair(props: PagePairProps): JSX.Element {
    return (
        <div>
            {props.pair.left?.framedPage && <ExportingFrame
                framedPage={props.pair.left.framedPage}
                isSelected={false}
                onSelect={() => {}}
            />}
            {props.pair.right?.framedPage && <ExportingFrame
                framedPage={props.pair.right.framedPage}
                isSelected={false}
                onSelect={() => {}}
            />}
        </div>
    )
}