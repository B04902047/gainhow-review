import Line from "./Line";

export default abstract class Frame {
    public abstract readonly foldLines: Array<Line>;        // 折線：有可能是0條，但不會是undefined
    public abstract readonly bleedingArea: string;          // 出血範圍的css clip-path
    public abstract readonly area: string;                  // 成品範圍的css clip-path
    public abstract readonly safeArea?: string;             // 安全範圍的css clip-path
    public abstract readonly cutOutAreas: Array<string>;    // 鏤空範圍的css clip-paths
    constructor(
        readonly maxWidth: number,
        readonly maxHeight: number
    ) {}
}