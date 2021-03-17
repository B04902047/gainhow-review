import Product from "../Product/Product";
import Frame from "../Frame/Frame";

export default abstract class FrameDictionary {
    protected abstract frames: Map<string, Frame>;
    constructor(
        readonly product: Product  
    ) {}
    public get frameNames(): Array<string> {
        return Array.from(this.frames.keys());
    }
    public getFrame(frameIndex: string): Frame | undefined {
        return this.frames.get(frameIndex);
    }
}