import PerfectBoundBook from "../Product/PerfectBoundBook";
import BleededRectangleFrame from "../Frame/BleededRectangleFrame";
import BookCoverFrame from "../Frame/BookCoverFrame";
import BookFrameDictionary from "./BookFrameDictionary";
import Line from "../Frame/Line";
import PerfectBoundBookSoftCoverFrame from "../Frame/PerfectBoundBookSoftCoverFrame";
import PerfectBoundBookHardCoverFrame from "../Frame/PerfectBoundHardCoverFrame";
import { Frame } from "../Frame";
import { Mark } from "../Frame/Frame";

export default class PerfectBoundBookFrameDictionary extends BookFrameDictionary {
    protected coverFrame: BookCoverFrame;
    protected innerPageFrames: Map<string, BleededRectangleFrame>;
    private static readonly INNER_PAGE_CUT_ERROR = 3;
    private static readonly COVER_CUT_ERROR = 3;
    private static readonly BOUND_SIDE_SAFE_DISTANCE: number = 5;
    constructor(
        readonly product: PerfectBoundBook
    ) {
        super(product);
        this.innerPageFrames = this.createInnerPageFrames();
        this.coverFrame = this.createBookCoverFrame();
    }
    protected createInnerPageFrames(): Map<string, BleededRectangleFrame> {
        let innerPageFrames = new Map<string, BleededRectangleFrame>();
        if (this.product.pagingDirection === "BOTTOM_TO_TOP") {
            let pageFramePrototype = this.createBottomToTopPagedPageFramePrototype();
            for (let i=1; i<=this.product.numberOfPages; i++) {
                innerPageFrames.set(String(i), pageFramePrototype);
            }
            return innerPageFrames;
        } else {
            let leftPageFramePrototype: BleededRectangleFrame = this.createLeftInnerPageFramePrototype();
            let rightPageFramePrototype: BleededRectangleFrame = this.createRightInnerPageFramePrototype();
            switch (this.product.pagingDirection) {
                case "LEFT_TO_RIGHT":
                    for (let i=1; i<=this.product.numberOfPages; i++) {
                        if ((i % 2 === 1)) {
                            innerPageFrames.set(String(i), leftPageFramePrototype);
                        } else {
                            innerPageFrames.set(String(i), rightPageFramePrototype);
                        }
                    }
                    return innerPageFrames;
                case "RIGHT_TO_LEFT":
                    for (let i=1; i<=this.product.numberOfPages; i++) {
                        if ((i % 2 === 1)) {
                            innerPageFrames.set(String(i), rightPageFramePrototype);
                        } else {
                            innerPageFrames.set(String(i), leftPageFramePrototype);
                        }
                    }
                    return innerPageFrames;
            }
        }   
    }
    protected createLeftInnerPageFramePrototype(): BleededRectangleFrame {
        class PerfectBoundLeftInnerPageFrame extends BleededRectangleFrame {
            protected createMarks(): Array<Mark> {
                

                let cutErrorPercentageInMaxWidth: number
                    = this.cutError / this.maxWidth * 100;
                let cutErrorPercentageInMaxHeight: number
                    = this.cutError / this.maxHeight * 100;
                let boundSideSafeDistancePercentageInMaxWidth: number
                    = PerfectBoundBookFrameDictionary.BOUND_SIDE_SAFE_DISTANCE / this.maxWidth * 100;
                let safeAreaLeft: number = cutErrorPercentageInMaxWidth * 2;
                let safeAreaRight: number = 100 - cutErrorPercentageInMaxWidth - boundSideSafeDistancePercentageInMaxWidth;
                let safeAreaTop: number = cutErrorPercentageInMaxHeight * 2;
                let safeAreaBottom: number = 100 - cutErrorPercentageInMaxHeight * 2;
                let marks: Array<Mark> = [];
                let safeArea: Mark;
                let safeAreaWidth: number = safeAreaRight - safeAreaLeft;
                let safeAreaHeight: number = safeAreaBottom - safeAreaTop;

                const safeAreaSVGStyle: string = `
                    width:100%; height:100%;
                `;
                const saveAreaRectStyle: string = `
                fill:none;
                stroke-width:2;
                stroke:rgb(102 102 102) ;
                stroke-dasharray:10,10;
                `;
                safeArea = {
                    positionX: 0,
                    positionY: 0,
                    svgString :`
                        <svg style='${safeAreaSVGStyle}' xmlns='http://www.w3.org/2000/svg' >
                            <rect 
                                style='${saveAreaRectStyle}'
                                x='${safeAreaLeft}%'
                                y='${safeAreaTop}%'
                                width='${safeAreaWidth}%'
                                height='${safeAreaHeight}%' 
                            />
                        </svg>
                    `
                }
                marks.push(safeArea);
                return marks;
               // return `polygon(${safeAreaLeft}% ${safeAreaTop}%, ${safeAreaRight}% ${safeAreaTop}%, ${safeAreaRight}% ${safeAreaBottom}%, ${safeAreaLeft}% ${safeAreaBottom}%)`;
            }
        }
        return new PerfectBoundLeftInnerPageFrame(
            this.product.width,
            this.product.height,
            PerfectBoundBookFrameDictionary.INNER_PAGE_CUT_ERROR
        );
    }
    protected createRightInnerPageFramePrototype(): BleededRectangleFrame {
        class PerfectBoundRightInnerPageFrame extends BleededRectangleFrame {
            protected createMarks(): Array<Mark> {
                let marks: Array<Mark> = [];
                let safeArea: Mark;
                let cutErrorPercentageInMaxWidth: number
                    = this.cutError / this.maxWidth * 100;
                let cutErrorPercentageInMaxHeight: number
                    = this.cutError / this.maxHeight * 100;
                let boundSideSafeDistancePercentageInMaxWidth: number
                    = PerfectBoundBookFrameDictionary.BOUND_SIDE_SAFE_DISTANCE / this.maxWidth * 100;
                let safeAreaLeft: number = cutErrorPercentageInMaxWidth + boundSideSafeDistancePercentageInMaxWidth;
                let safeAreaRight: number = 100 - cutErrorPercentageInMaxWidth * 2;
                let safeAreaTop: number = cutErrorPercentageInMaxHeight * 2;
                let safeAreaBottom: number = 100 - cutErrorPercentageInMaxHeight * 2;

                let safeAreaWidth: number = safeAreaRight - safeAreaLeft;
                let safeAreaHeight: number = safeAreaBottom - safeAreaTop;

                const safeAreaSVGStyle: string = `
                    width:100%; height:100%;
                `;
                const safeAreaRectStyle: string = `
                    fill:none;
                    stroke-width:2;
                    stroke:rgb(102 102 102) ;
                    stroke-dasharray:10,10;
                `;
                safeArea = {
                    positionX: 0,
                    positionY: 0,
                    svgString :`
                    <svg style='${safeAreaSVGStyle}' xmlns='http://www.w3.org/2000/svg' >
                        <rect 
                            style='${safeAreaRectStyle}'
                            x='${safeAreaLeft}%'
                            y='${safeAreaTop}%'
                            width='${safeAreaWidth}%'
                            height='${safeAreaHeight}%' 
                        />
                    </svg>
                `
            }
                marks.push(safeArea);
                return marks;
               
              //  return `polygon(${safeAreaLeft}% ${safeAreaTop}%, ${safeAreaRight}% ${safeAreaTop}%, ${safeAreaRight}% ${safeAreaBottom}%, ${safeAreaLeft}% ${safeAreaBottom}%)`;
            }
        }
        return new PerfectBoundRightInnerPageFrame(
            this.product.width,
            this.product.height,
            PerfectBoundBookFrameDictionary.INNER_PAGE_CUT_ERROR
        );
    }
    protected createBottomToTopPagedPageFramePrototype(): BleededRectangleFrame {
        class PerfectBoundBottomToTopPagedPageFrame extends BleededRectangleFrame {
            protected createMarks(): Array<Mark> {
                let marks: Array<Mark> = [];
                let safeArea: Mark;
                let cutErrorPercentageInMaxWidth: number
                    = this.cutError / this.maxWidth * 100;
                let cutErrorPercentageInMaxHeight: number
                    = this.cutError / this.maxHeight * 100;
                let boundSideSafeDistancePercentageInMaxHeight: number
                    = PerfectBoundBookFrameDictionary.BOUND_SIDE_SAFE_DISTANCE / this.maxHeight * 100;
                let safeAreaLeft: number = cutErrorPercentageInMaxWidth * 2;
                let safeAreaRight: number = 100 - cutErrorPercentageInMaxWidth * 2;
                let safeAreaTop: number = cutErrorPercentageInMaxHeight + boundSideSafeDistancePercentageInMaxHeight;
                let safeAreaBottom: number = 100 - cutErrorPercentageInMaxHeight * 2;


                let safeAreaWidth: number = safeAreaRight - safeAreaLeft;
                let safeAreaHeight: number = safeAreaBottom - safeAreaTop;

                const safeAreaSVGStyle: string = `
                width:100%; height:100%;
                `;
                const safeAreaRectStyle: string = `
                    fill:none;
                    stroke-width:2;
                    stroke:rgb(102 102 102) ;
                    stroke-dasharray:10,10;
                `;
                safeArea = {
                    positionX: 0,
                    positionY: 0,
                    svgString: `
                        <svg style='${safeAreaSVGStyle}' xmlns='http://www.w3.org/2000/svg' >
                            <rect 
                                style='${safeAreaRectStyle}'
                                x='${safeAreaLeft}%'
                                y='${safeAreaTop}%'
                                width='${safeAreaWidth}%'
                                height='${safeAreaHeight}%' 
                            />
                        </svg>
                    `
            }
                marks.push(safeArea);
                return marks;
                //return `polygon(${safeAreaLeft}% ${safeAreaTop}%, ${safeAreaRight}% ${safeAreaTop}%, ${safeAreaRight}% ${safeAreaBottom}%, ${safeAreaLeft}% ${safeAreaBottom}%)`;
            }
        }
        return new PerfectBoundBottomToTopPagedPageFrame(
            this.product.width,
            this.product.height,
            PerfectBoundBookFrameDictionary.INNER_PAGE_CUT_ERROR
        );
    }
    protected createBookCoverFrame(): BookCoverFrame {
        let bookWidth: number = this.product.width;         // 書寬
        let bookHeight: number = this.product.height;       // 書高
        let spineWidth: number = this.product.spineWidth;   // 書背寬
        if (this.product.hardCovered) {
            let outerHingeWidth: number                     // 書溝寬
                = (spineWidth > 25)? 14 : 10;
            return new PerfectBoundBookHardCoverFrame(
                bookWidth,
                bookHeight,
                spineWidth,
                outerHingeWidth,
                PerfectBoundBookFrameDictionary.COVER_CUT_ERROR
            );
        }
        return new PerfectBoundBookSoftCoverFrame(
            bookWidth,
            bookHeight,
            spineWidth,
            PerfectBoundBookFrameDictionary.COVER_CUT_ERROR
        );
    }
}