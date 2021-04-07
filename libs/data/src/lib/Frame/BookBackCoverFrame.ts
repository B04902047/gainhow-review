import BookCoverFrame from "./BookCoverFrame";
import Line from "./Line";

export default class BookBackCoverFrame extends BookCoverFrame {
    public foldLines: Line[];

    constructor(
        bookWidth: number,
        bookHeight: number,
        cutError: number,
    ) {
        super(
            bookWidth,
            bookHeight,
            cutError
        );
        this.foldLines = [];
    }
    
}