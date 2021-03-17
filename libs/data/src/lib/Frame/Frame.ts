import Line from "./Line";

export type Mark = {
    positionX: number;
    positionY: number;
    svgString: string;
};
type CSSClipPath = string;

export default abstract class Frame {
    public abstract readonly bleedingArea: CSSClipPath;          // 出血範圍的css clip-path (單位：%)
    public abstract readonly shape: CSSClipPath;                 // 成品範圍的css clip-path (單位：%)
    public abstract readonly cutOutAreas: Array<CSSClipPath>;    // 鏤空範圍的css clip-paths (單位：%)
    public abstract readonly marks: Array<Mark>;       // 其它記號的SVG strings


 

    constructor(
        public readonly frameName : string,  //frameIndex
        readonly maxWidth: number,  // 最大寬度（mm）
        readonly maxHeight: number  // 最大高度（mm）
    ) {
    }
}