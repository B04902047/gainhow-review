import BookCoverFrame from "./BookCoverFrame";
import Line from "./Line";

export default class PerfectBoundBookSoftCoverFrame extends BookCoverFrame {
    public foldLines: Line[];
    constructor(
        readonly bookWidth: number,
        readonly bookHeight: number,
        readonly bookSpineWidth: number,
        readonly cutError: number
    ) {
        super(
            bookWidth * 2 + bookSpineWidth,
            bookHeight,
            cutError
        );
        this.foldLines = this.createFoldLines();
    }
    protected createFoldLines(): Line[] {
        

        let leftFoldLine: Line = new Line(
            (this.cutError + this.bookWidth) / this.maxWidth * 100, 0,
            (this.cutError + this.bookWidth) / this.maxWidth * 100, (this.height) / this.maxHeight * 100
        );
        let rightFoldLine: Line = new Line(
            (this.width - this.cutError - this.bookWidth) / this.maxWidth * 100, 0,
            (this.width - this.cutError - this.bookWidth) / this.maxWidth * 100, (this.height) / this.maxHeight * 100
        );
        return [
            leftFoldLine,
            rightFoldLine
        ];
    }
}