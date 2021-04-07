import Book from "../Product/Book";
import BleededRectangleFrame from "../Frame/BleededRectangleFrame";
import BookCoverFrame from "../Frame/BookCoverFrame";
import FrameDictionary from "./FrameDictionary";
import RectangleFrame from "../Frame/RectangleFrame";
import BookFrontCoverFrame from "../Frame/BookFrontCoverFrame";
import BookBackCoverFrame from "../Frame/BookBackCoverFrame";

export default abstract class BookFrameDictionary extends FrameDictionary {
    protected abstract coverFrame: BookCoverFrame;
    protected frontCoverFrame: BookFrontCoverFrame;
    protected backCoverFrame: BookBackCoverFrame;
    protected abstract innerPageFrames: Map<string, BleededRectangleFrame>;
    protected static readonly INNER_PAGE_CUT_ERROR = 3;
    protected static readonly COVER_CUT_ERROR = 3;
    
    constructor(
        readonly product: Book
    ) {
        super(product);
        this.frontCoverFrame = this.createFrontCoverFrame();
        this.backCoverFrame = this.createBackCoverFrame();
    }
    createBackCoverFrame(): BookBackCoverFrame {
        return new BookBackCoverFrame(
            this.product.width,
            this.product.height,
            BookFrameDictionary.COVER_CUT_ERROR
        );
    }
    createFrontCoverFrame(): BookFrontCoverFrame {
        return new BookFrontCoverFrame(
            this.product.width,
            this.product.height,
            BookFrameDictionary.COVER_CUT_ERROR
        );
    }

    private _frames?: Map<string, RectangleFrame>;
    protected get frames(): Map<string, RectangleFrame> {
        if (this._frames) return this._frames;
        let frames = new Map<string, RectangleFrame>();
        // frames.set('cover', this.coverFrame);
        frames.set('封面', this.frontCoverFrame);
        frames = Object.assign(frames, this.innerPageFrames);
        frames.set('封底', this.backCoverFrame);
        return frames;
    }
}
