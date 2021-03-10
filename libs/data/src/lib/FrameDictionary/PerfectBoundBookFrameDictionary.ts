import PerfectBoundBook from "../Product/PerfectBoundBook";
import BleededRectangleFrame from "../Frame/BleededRectangleFrame";
import BookCoverFrame from "../Frame/BookCoverFrame";
import BookFrameDictionary from "./BookFrameDictionary";
import Line from "../Frame/Line";
import PerfectBoundBookSoftCoverFrame from "../Frame/PerfectBoundBookSoftCoverFrame";
import PerfectBoundBookHardCoverFrame from "../Frame/PerfectBoundHardCoverFrame";
import { Frame } from "../Frame";

export default class PerfectBoundBookFrameDictionary extends BookFrameDictionary {
    protected frames: Map<string, Frame>;
    private static readonly INNER_PAGE_CUT_ERROR = 3;
    private static readonly COVER_CUT_ERROR = 3;
    private static readonly BOUND_SIDE_SAFE_DISTANCE: number = 5;
    constructor(
        readonly product: PerfectBoundBook
    ) {
        super(product);
        this.frames = this.createFrames();    
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
            protected createSafeArea(): string {
                let cutErrorPercentageInMaxWidth: number
                    = this.cutError / this.maxWidth * 100;
                let cutErrorPercentageInMaxHeight: number
                    = this.cutError / this.maxHeight * 100;
                let boundSideSafeDistancePercentageInMaxWidth: number
                    = PerfectBoundBookFrameDictionary.BOUND_SIDE_SAFE_DISTANCE / this.maxWidth * 100;
                let left: number = cutErrorPercentageInMaxWidth * 2;
                let right: number = 100 - cutErrorPercentageInMaxWidth - boundSideSafeDistancePercentageInMaxWidth;
                let top: number = cutErrorPercentageInMaxHeight * 2;
                let bottom: number = 100 - cutErrorPercentageInMaxHeight * 2;
                return `polygon(${left}% ${top}%, ${right}% ${top}%, ${right}% ${bottom}%, ${left}% ${bottom}%)`;
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
            protected createSafeArea(): string {
                let cutErrorPercentageInMaxWidth: number
                    = this.cutError / this.maxWidth * 100;
                let cutErrorPercentageInMaxHeight: number
                    = this.cutError / this.maxHeight * 100;
                let boundSideSafeDistancePercentageInMaxWidth: number
                    = PerfectBoundBookFrameDictionary.BOUND_SIDE_SAFE_DISTANCE / this.maxWidth * 100;
                let left: number = cutErrorPercentageInMaxWidth + boundSideSafeDistancePercentageInMaxWidth;
                let right: number = 100 - cutErrorPercentageInMaxWidth * 2;
                let top: number = cutErrorPercentageInMaxHeight * 2;
                let bottom: number = 100 - cutErrorPercentageInMaxHeight * 2;
                return `polygon(${left}% ${top}%, ${right}% ${top}%, ${right}% ${bottom}%, ${left}% ${bottom}%)`;
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
            protected createSafeArea(): string {
                let cutErrorPercentageInMaxWidth: number
                    = this.cutError / this.maxWidth * 100;
                let cutErrorPercentageInMaxHeight: number
                    = this.cutError / this.maxHeight * 100;
                let boundSideSafeDistancePercentageInMaxHeight: number
                    = PerfectBoundBookFrameDictionary.BOUND_SIDE_SAFE_DISTANCE / this.maxHeight * 100;
                let left: number = cutErrorPercentageInMaxWidth * 2;
                let right: number = 100 - cutErrorPercentageInMaxWidth * 2;
                let top: number = cutErrorPercentageInMaxHeight + boundSideSafeDistancePercentageInMaxHeight;
                let bottom: number = 100 - cutErrorPercentageInMaxHeight * 2;
                return `polygon(${left}% ${top}%, ${right}% ${top}%, ${right}% ${bottom}%, ${left}% ${bottom}%)`;
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