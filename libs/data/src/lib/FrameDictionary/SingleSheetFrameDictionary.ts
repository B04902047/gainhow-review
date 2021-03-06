import SingleSheet from "../Product/SingleSheet";
import BleededRectangleFrame from "../Frame/BleededRectangleFrame";
import FrameDictionary from "./FrameDictionary";
import RectangleFrame from "../Frame/RectangleFrame";

export default class SingleSheetFrameDictionary extends FrameDictionary {
    protected frames: Map<string, RectangleFrame>;
    constructor(
        readonly product: SingleSheet 
        ) {
        super(product);
        this.frames = this.createFrames();
    }
    private static readonly CUT_ERROR = 2;
    protected createFrames(): Map<string, RectangleFrame> {
        let frame = new BleededRectangleFrame (
            this.product.width,
            this.product.height,
            SingleSheetFrameDictionary.CUT_ERROR,
        );
        let frames = new Map<string, RectangleFrame>();
        frames.set("正面", frame);
        if (this.product.isDoubleSided) {
            frames.set("背面", frame);
        }
        return frames;
    }
}