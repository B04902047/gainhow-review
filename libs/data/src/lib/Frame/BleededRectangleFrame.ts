import Line from "./Line";
import RectangleFrame from "./RectangleFrame";

export default class BleededRectangleFrame extends RectangleFrame {
    public foldLines: Line[] = [];
    public bleedingArea: string;
    public shape: string;
    public safeArea?: string | undefined;
    public cutOutAreas: string[] = [];

    constructor(
        public readonly widthWithoutBleeding: number,   // 裁切後的寬（mm）
        public readonly heightWithoutBleeding: number,  // 裁切後的高（mm）
        public readonly cutError: number,               // 裁切誤差／出血範圍（mm）
    ) {
        super(
            widthWithoutBleeding + (2 * cutError),
            heightWithoutBleeding + (2 * cutError)
        );
        this.safeArea = this.createSafeArea();
        this.shape = this.createShape();
        this.bleedingArea = this.createBleedingArea();
    }

    protected createSafeArea(): string {
        let cutErrorPercentageInMaxWidth: number
            = this.cutError / this.maxWidth * 100;
        let cutErrorPercentageInMaxHeight: number
            = this.cutError / this.maxHeight * 100;
        let left: number = cutErrorPercentageInMaxWidth * 2;
        let right: number = 100 - cutErrorPercentageInMaxWidth * 2;
        let top: number = cutErrorPercentageInMaxHeight * 2;
        let bottom: number = 100 - cutErrorPercentageInMaxHeight * 2;
        return `polygon(${left}% ${top}%, ${right}% ${top}%, ${right}% ${bottom}%, ${left}% ${bottom}%)`;
    }
    protected createShape(): string {
        let cutErrorPercentageInMaxWidth: number
            = this.cutError / this.maxWidth * 100;
        let cutErrorPercentageInMaxHeight: number
            = this.cutError / this.maxHeight * 100;
        let left: number = cutErrorPercentageInMaxWidth;
        let right: number = 100 - cutErrorPercentageInMaxWidth;
        let top: number = cutErrorPercentageInMaxHeight;
        let bottom: number = 100 - cutErrorPercentageInMaxHeight;
        return `polygon(${left}% ${top}%, ${right}% ${top}%, ${right}% ${bottom}%, ${left}% ${bottom}%)`;
    }
    protected createBleedingArea(): string {
        return `polygon(0% 0%, 0% 100%, 100% 100%, 100%, 0%)`;
    }
}