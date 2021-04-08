import Book from "../Product/Book";
import BleededRectangleFrame from "../Frame/BleededRectangleFrame";
import BookCoverFrame from "../Frame/BookCoverFrame";
import FrameDictionary from "./FrameDictionary";
import RectangleFrame from "../Frame/RectangleFrame";
import BookFrontCoverFrame from "../Frame/BookFrontCoverFrame";
import BookBackCoverFrame from "../Frame/BookBackCoverFrame";

export default abstract class BookFrameDictionary extends FrameDictionary {
    public abstract coverFrame: BookCoverFrame;
    public frontCoverFrame: BookFrontCoverFrame;
    public backCoverFrame: BookBackCoverFrame;
    public abstract innerPageFrames: Map<string, BleededRectangleFrame>;
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
        if (!this._frames) {
            let newFrames = new Map<string, RectangleFrame>();
            // frames.set('cover', this.coverFrame);
            newFrames.set('封面', this.frontCoverFrame);
            this.innerPageFrames.forEach((frame, key) => {
                newFrames.set(key, frame);
            });
            newFrames.set('封底', this.backCoverFrame);
            this._frames = newFrames;
        }
        return this._frames;
    }
    protected set frames(newFrames: Map<string, RectangleFrame>) {
        this._frames = newFrames;
    }
}
