import SaddleStichedBook from "../Product/SaddleStichedBook";
import BleededRectangleFrame from "../Frame/BleededRectangleFrame";
import BookFrameDictionary from "./BookFrameDictionary";
import SaddleStitchedBookCoverFrame from "../Frame/SaddleStitchedBookCoverFrame";
import BookCoverFrame from "../Frame/BookCoverFrame";
import { Mark } from "../Frame/Frame";

export default class SaddleStitchedBookFrameDictionary extends BookFrameDictionary {
    public coverFrame: BookCoverFrame;
    public innerPageFrames: Map<string, BleededRectangleFrame>;
    constructor(
        readonly product: SaddleStichedBook
    ) {
        super(product);
        this.innerPageFrames = this.createInnerPageFrames();
        this.coverFrame = this.createBookCoverFrame();
    }
    protected createBookCoverFrame(): SaddleStitchedBookCoverFrame {
        return new SaddleStitchedBookCoverFrame(
            this.product.width,
            this.product.height,
            SaddleStitchedBookFrameDictionary.COVER_CUT_ERROR
        );
    }
    protected createInnerPageFrames(): Map<string, BleededRectangleFrame> {
        let leftPageFramePrototype: SaddleStichedBookLeftPageFrame = this.createLeftPageFramePrototype();
        let rightPageFramePrototype: SaddleStichedBookRightPageFrame = this.createRightPageFramePrototype();
        let innerPageFrames = new Map<string, BleededRectangleFrame>();
        for (let i=1; i<=this.product.numberOfPages; i++) {
            let innerPageFramePrototype: BleededRectangleFrame;
            switch (this.product.pagingDirection) {
                case "LEFT_TO_RIGHT":
                    innerPageFramePrototype = (i % 2 === 0)? rightPageFramePrototype : leftPageFramePrototype;
                    break;
                case "RIGHT_TO_LEFT":
                    innerPageFramePrototype = (i % 2 === 0)? leftPageFramePrototype : rightPageFramePrototype;
                    break;
                case "BOTTOM_TO_TOP":
                    throw new Error("case not implemented: BOTTOM_TO_TOP")
            }
            innerPageFrames.set(String(i), innerPageFramePrototype);
        }
        return innerPageFrames;
    }
    protected createInnerPageFramePrototype(): BleededRectangleFrame {
        return new BleededRectangleFrame(
            this.product.width,
            this.product.height,
            SaddleStitchedBookFrameDictionary.INNER_PAGE_CUT_ERROR
        );
    }
    protected createLeftPageFramePrototype(): SaddleStichedBookLeftPageFrame {
        return new SaddleStichedBookLeftPageFrame(
            this.product.width,
            this.product.height,
            SaddleStitchedBookFrameDictionary.INNER_PAGE_CUT_ERROR
        );
    }
    protected createRightPageFramePrototype(): SaddleStichedBookRightPageFrame {
        return new SaddleStichedBookRightPageFrame(
            this.product.width,
            this.product.height,
            SaddleStitchedBookFrameDictionary.INNER_PAGE_CUT_ERROR
        );
    }
}

class SaddleStichedBookLeftPageFrame extends BleededRectangleFrame {

    protected createMarks(): Array<Mark> {
        let marks: Array<Mark> = [];
        let safeArea: Mark;
        let cutMark: Mark;
        
        let cutErrorPercentageInMaxWidth: number
            = this.cutError / this.maxWidth * 100;
        let cutErrorPercentageInMaxHeight: number
            = this.cutError / this.maxHeight * 100;
        let safeAreaX: number = cutErrorPercentageInMaxWidth * 2;
        let safeAreaY: number = cutErrorPercentageInMaxHeight * 2;

        let safeAreaWidth: number = 100 - cutErrorPercentageInMaxWidth * 4;
        let safeAreaHeight: number = 100 - cutErrorPercentageInMaxHeight * 4;
        
        const saveAreaSVGStyle: string = `
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
            svgString: `
            <svg style='${saveAreaSVGStyle}' xmlns='http://www.w3.org/2000/svg' >
                <rect 
                    style='${saveAreaRectStyle}'
                    x='${safeAreaX}%'
                    y='${safeAreaY}%'
                    width='${safeAreaWidth}%'
                    height='${safeAreaHeight}%' 
                />
            </svg>
        `
        }
        const cutMarkLineLength: number = 5;
        const cutMarkLineMargin: number = 3;
        const cutMarkWidthScale:number = (this.maxHeight/this.maxWidth);
        const cutMarkHeightScale: number = 1;
        const cutMarkOffsetX: number = (cutMarkLineLength + cutMarkLineMargin) * cutMarkWidthScale;
        const cutMarkOffsetY: number = (cutMarkLineLength + cutMarkLineMargin) * cutMarkHeightScale;

        const cutMarkStyle: string = `
            width:calc(100% ); height:calc(100% );
        `
        const cutMarkLineStyle: string =`
            fill:none;
            stroke-width:1;
            stroke:rgb(51 51 51) ; 
        `
        const cutErrorPercentageIncutMarkWidth = this.cutError / (this.maxWidth * (1 + cutMarkOffsetX*2/100)) * 100;
        const cutErrorPercentageIncutMarkHeight = this.cutError / (this.maxHeight * (1 + cutMarkOffsetY*2/100)) * 100;


        const cutMarkLineX: string = `calc(${cutErrorPercentageIncutMarkWidth}% + ${cutMarkOffsetX/(1 + cutMarkOffsetX*2/100)}% )`;
        const cutMarkLineY: string = `calc(${cutErrorPercentageIncutMarkHeight}% + ${cutMarkOffsetY/(1 + cutMarkOffsetY*2/100)}% )`;
        cutMark = {
            positionX: cutMarkOffsetX,
            positionY: cutMarkOffsetY,
            svgString: `
                <svg style='${cutMarkStyle}' xmlns='http://www.w3.org/2000/svg' >
                    <line style='${cutMarkLineStyle}'
                        x1='${cutMarkLineX}'
                        y1='0%'
                        x2='${cutMarkLineX}'
                        y2='${cutMarkLineLength*cutMarkHeightScale}%'
                    />

                    <line style='${cutMarkLineStyle}'
                        x1='calc(100% - ${cutMarkLineX})'
                        y1='0%'
                        x2='calc(100% - ${cutMarkLineX})'
                        y2='${cutMarkLineLength*cutMarkHeightScale}%'
                    />

                    <line style='${cutMarkLineStyle}'
                        x1='calc(100% - ${cutMarkLineX})'
                        y1='100%'
                        x2='calc(100% - ${cutMarkLineX})'
                        y2='calc(100% - ${cutMarkLineLength*cutMarkHeightScale}%)'
                    />

                    <line style='${cutMarkLineStyle}'
                        x1='calc(${cutMarkLineX})'
                        y1='100%'
                        x2='calc(${cutMarkLineX})'
                        y2='calc(100% - ${cutMarkLineLength*cutMarkHeightScale}%)'
                    />

                    <line style='${cutMarkLineStyle}'
                        x1='0%'
                        y1='${cutMarkLineY}'
                        x2='${cutMarkLineLength*cutMarkWidthScale}%'
                        y2='${cutMarkLineY}'
                    />
                    <line style='${cutMarkLineStyle}'
                        x1='0%'
                        y1='calc(100% - ${cutMarkLineY})'
                        x2='calc(${cutMarkLineLength*cutMarkWidthScale}%)'
                        y2='calc(100% - ${cutMarkLineY})'
                    />
                    
                </svg>
            
            `
        }
        marks.push(safeArea);
        marks.push(cutMark);
        return marks;

      //  return `polygon(${safeAreaX}% ${safeAreaY}%, ${safeAreaRight}% ${safeAreaY}%, ${safeAreaRight}% ${safeAreaBottom}%, ${safeAreaX}% ${safeAreaBottom}%)`;
    }
}


class SaddleStichedBookRightPageFrame extends BleededRectangleFrame {

    protected createMarks(): Array<Mark> {
        let marks: Array<Mark> = [];
        let safeArea: Mark;
        let cutMark: Mark;
        
        let cutErrorPercentageInMaxWidth: number
            = this.cutError / this.maxWidth * 100;
        let cutErrorPercentageInMaxHeight: number
            = this.cutError / this.maxHeight * 100;
        let safeAreaX: number = cutErrorPercentageInMaxWidth * 2;
        let safeAreaY: number = cutErrorPercentageInMaxHeight * 2;

        let safeAreaWidth: number = 100 - cutErrorPercentageInMaxWidth * 4;
        let safeAreaHeight: number = 100 - cutErrorPercentageInMaxHeight * 4;
        
        const saveAreaSVGStyle: string = `
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
            svgString: `
            <svg style='${saveAreaSVGStyle}' xmlns='http://www.w3.org/2000/svg' >
                <rect 
                    style='${saveAreaRectStyle}'
                    x='${safeAreaX}%'
                    y='${safeAreaY}%'
                    width='${safeAreaWidth}%'
                    height='${safeAreaHeight}%' 
                />
            </svg>
        `
        }
        const cutMarkLineLength: number = 5;
        const cutMarkLineMargin: number = 3;
        const cutMarkWidthScale:number = (this.maxHeight/this.maxWidth);
        const cutMarkHeightScale: number = 1;
        const cutMarkOffsetX: number = (cutMarkLineLength + cutMarkLineMargin) * cutMarkWidthScale;
        const cutMarkOffsetY: number = (cutMarkLineLength + cutMarkLineMargin) * cutMarkHeightScale;

        const cutMarkStyle: string = `
            width:calc(100% ); height:calc(100% );
        `
        const cutMarkLineStyle: string =`
            fill:none;
            stroke-width:1;
            stroke:rgb(51 51 51) ; 
        `
        const cutErrorPercentageIncutMarkWidth = this.cutError / (this.maxWidth * (1 + cutMarkOffsetX*2/100)) * 100;
        const cutErrorPercentageIncutMarkHeight = this.cutError / (this.maxHeight * (1 + cutMarkOffsetY*2/100)) * 100;


        const cutMarkLineX: string = `calc(${cutErrorPercentageIncutMarkWidth}% + ${cutMarkOffsetX/(1 + cutMarkOffsetX*2/100)}% )`;
        const cutMarkLineY: string = `calc(${cutErrorPercentageIncutMarkHeight}% + ${cutMarkOffsetY/(1 + cutMarkOffsetY*2/100)}% )`;
        cutMark = {
            positionX: cutMarkOffsetX,
            positionY: cutMarkOffsetY,
            svgString: `
                <svg style='${cutMarkStyle}' xmlns='http://www.w3.org/2000/svg' >
                    <line style='${cutMarkLineStyle}'
                        x1='${cutMarkLineX}'
                        y1='0%'
                        x2='${cutMarkLineX}'
                        y2='${cutMarkLineLength*cutMarkHeightScale}%'
                    />

                    <line style='${cutMarkLineStyle}'
                        x1='calc(100% - ${cutMarkLineX})'
                        y1='0%'
                        x2='calc(100% - ${cutMarkLineX})'
                        y2='${cutMarkLineLength*cutMarkHeightScale}%'
                    />

                    <line style='${cutMarkLineStyle}'
                        x1='calc(100% - ${cutMarkLineX})'
                        y1='100%'
                        x2='calc(100% - ${cutMarkLineX})'
                        y2='calc(100% - ${cutMarkLineLength*cutMarkHeightScale}%)'
                    />

                    <line style='${cutMarkLineStyle}'
                        x1='calc(${cutMarkLineX})'
                        y1='100%'
                        x2='calc(${cutMarkLineX})'
                        y2='calc(100% - ${cutMarkLineLength*cutMarkHeightScale}%)'
                    />
                    <line style='${cutMarkLineStyle}'
                        x1='100%'
                        y1='${cutMarkLineY}'
                        x2='calc(100% - ${cutMarkLineLength*cutMarkWidthScale}%)'
                        y2='${cutMarkLineY}'
                    />
                    <line style='${cutMarkLineStyle}'
                        x1='100%'
                        y1='calc(100% - ${cutMarkLineY})'
                        x2='calc(100% - ${cutMarkLineLength*cutMarkWidthScale}%)'
                        y2='calc(100% - ${cutMarkLineY})'
                    />
                </svg>
            
            `
        }
        marks.push(safeArea);
        marks.push(cutMark);
        return marks;

      //  return `polygon(${safeAreaX}% ${safeAreaY}%, ${safeAreaRight}% ${safeAreaY}%, ${safeAreaRight}% ${safeAreaBottom}%, ${safeAreaX}% ${safeAreaBottom}%)`;
    }
}