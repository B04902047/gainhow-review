import BookCoverFrame from "./BookCoverFrame";
import Line from "./Line";

export default class SaddleStitchedBookCoverFrame extends BookCoverFrame {
    public foldLines: Line[];

    constructor(
        bookWidth: number,
        bookHeight: number,
        cutError: number,
    ) {
        super(
            bookWidth * 2,
            bookHeight,
            cutError
        );
        this.foldLines = this.createFoldLines();
    }
    protected createFoldLines(): Line[] {
        let middle: number = this.maxWidth / 2;
        let middleLine: Line = new Line(
            middle / this.maxWidth * 100, 0,
            middle / this.maxWidth * 100, 100
        )
        return [middleLine];
    }
}