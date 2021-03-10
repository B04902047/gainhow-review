import Line from "./Line";

export default abstract class Frame {
    public abstract readonly foldLines: Array<Line>;        // 折線：有可能是0條，但不會是undefined (單位：%)
    public abstract readonly bleedingArea: string;          // 出血範圍的css clip-path (單位：%)
    public abstract readonly shape: string;                 // 成品範圍的css clip-path (單位：%)
    public abstract readonly safeArea?: string;             // 安全範圍的css clip-path (單位：%)
    public abstract readonly cutOutAreas: Array<string>;    // 鏤空範圍的css clip-paths (單位：%)
    constructor(
        readonly maxWidth: number,  // 最大寬度（mm）
        readonly maxHeight: number  // 最大高度（mm）
    ) {}
}