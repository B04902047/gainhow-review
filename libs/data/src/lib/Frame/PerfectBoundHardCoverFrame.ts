
import BookCoverFrame from "./BookCoverFrame";
import Line from "./Line";

export default class PerfectBoundBookHardCoverFrame extends BookCoverFrame {
    public foldLines: Line[];
    constructor(
        readonly bookWidth: number,         // 書的寬度（mm）
        readonly bookHeight: number,        // 書的高度（mm）
        readonly bookSpineWidth: number,    // 書背寬度（mm）
        readonly outerHingeWidth: number,   // 書溝寬度（mm）
        readonly cutError: number           // 出血範圍（mm）
    ) {
        super(
            (bookWidth + outerHingeWidth) * 2 + bookSpineWidth,
            bookHeight,
            cutError
        );
        this.foldLines = this.createFoldLines();
    }
    protected createFoldLines(): Line[] {
        let leftHingeLeftFoldLine: Line = new Line(
            (this.cutError + this.bookWidth) / this.maxWidth * 100, 0,
            (this.cutError + this.bookWidth) / this.maxWidth * 100, this.bookHeight / this.maxHeight * 100
        );
        let leftHingeRightFoldLine: Line = new Line(
            (this.cutError + this.bookWidth + this.outerHingeWidth) / this.maxWidth * 100, 0,
            (this.cutError + this.bookWidth + this.outerHingeWidth) / this.maxWidth * 100, this.bookHeight / this.maxHeight * 100
        );
        let rightHingeLeftFoldLine: Line = new Line(
            (this.width - this.cutError - this.bookWidth - this.outerHingeWidth) / this.maxWidth * 100, 0,
            (this.width - this.cutError - this.bookWidth - this.outerHingeWidth) / this.maxWidth * 100, this.bookHeight / this.maxHeight * 100
        );
        let rightHingeRightFoldLine: Line = new Line(
            (this.width - this.cutError - this.bookWidth) / this.maxWidth * 100, 0,
            (this.width - this.cutError - this.bookWidth) / this.maxWidth * 100, this.bookHeight / this.maxHeight * 100
        );
        return [
            leftHingeLeftFoldLine,
            leftHingeRightFoldLine,
            rightHingeLeftFoldLine,
            rightHingeRightFoldLine
        ];
    }
}