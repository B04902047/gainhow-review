import SaddleStichedBook from "../Product/SaddleStichedBook";
import BleededRectangleFrame from "../Frame/BleededRectangleFrame";
import BookFrameDictionary from "./BookFrameDictionary";
import RectangleFrame from "../Frame/RectangleFrame";
import SaddleStitchedBookCoverFrame from "../Frame/SaddleStitchedBookCoverFrame";
import { Frame } from "../Frame";
import BookCoverFrame from "../Frame/BookCoverFrame";

export default class SaddleStitchedBookFrameDictionary extends BookFrameDictionary {
    protected coverFrame: BookCoverFrame;
    protected innerPageFrames: Map<string, BleededRectangleFrame>;
    private static readonly INNER_PAGE_CUT_ERROR = 3;
    private static readonly COVER_CUT_ERROR = 3;
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
        let innerFramePrototype: BleededRectangleFrame = this.createInnerPageFramePrototype();
        let innerPageFrames = new Map<string, BleededRectangleFrame>();
        for (let i=1; i<=this.product.numberOfPages; i++) {
            this.innerPageFrames.set(String(i), innerFramePrototype);
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
}