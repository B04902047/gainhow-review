import { markTimeline } from "console";
import { CSSProperties } from "react";
import { Mark } from "./Frame";
import Line from "./Line";
import RectangleFrame from "./RectangleFrame";

export default class BleededRectangleFrame extends RectangleFrame {
    public bleedingArea: string;
    public shape: string;
    public cutOutAreas: string[] = [];
    public marks: Array<Mark>;

    constructor(
        public readonly widthWithoutBleeding: number,   // 裁切後的寬（mm）
        public readonly heightWithoutBleeding: number,  // 裁切後的高（mm）
        public readonly cutError: number,               // 裁切誤差／出血範圍（mm）
    ) {
        super(
            widthWithoutBleeding + (2 * cutError),
            heightWithoutBleeding + (2 * cutError)
        );
        this.marks = this.createMarks();
        this.shape = this.createShape();
        this.bleedingArea = this.createBleedingArea();
    }

    protected createMarks(): Array<Mark> {
        let marks: Array<Mark> = [];
        let safeArea: Mark;
        let cutMark: Mark;
        
        let cutErrorPercentageInMaxWidth: number
            = this.cutError / this.maxWidth * 100;
        let cutErrorPercentageInMaxHeight: number
            = this.cutError / this.maxHeight * 100;
        let safeAreaX: number = cutErrorPercentageInMaxWidth * 2;
        let safeAreaY: number = cutErrorPercentageInMaxHeight * 2;

        let safeAreaWidth: number = 100 - cutErrorPercentageInMaxWidth * 4;
        let safeAreaHeight: number = 100 - cutErrorPercentageInMaxHeight * 4;
        
        const saveAreaSVGStyle: string = `
            width:100%; height:100%;
        `;
        const saveAreaRectStyle: string = `
            fill:none;
            stroke-width:2;
            stroke:rgb(102 102 102) ;
            stroke-dasharray:10,10;
        `;
        safeArea = {
            positionX: 0,
            positionY: 0,
            svgString: `
            <svg style='${saveAreaSVGStyle}' xmlns='http://www.w3.org/2000/svg' >
                <rect 
                    style='${saveAreaRectStyle}'
                    x='${safeAreaX}%'
                    y='${safeAreaY}%'
                    width='${safeAreaWidth}%'
                    height='${safeAreaHeight}%' 
                />
            </svg>
        `
        }

        const cutMarkLineLength: number = 5;
        const cutMarkLineMargin: number = 3;
        const cutMarkOffset: number = cutMarkLineLength + cutMarkLineMargin;
        const cutMarkStyle: string = `
            width:calc(100% ); height:calc(100% );
        `
        const cutMarkLineStyle: string =`
            fill:none;
            stroke-width:1;
            stroke:rgb(51 51 51) ; 
        `
        const cutErrorPercentageIncutMarkWidth = this.cutError / (this.maxWidth * (1 + cutMarkOffset*2/100)) * 100;
        const cutErrorPercentageIncutMarkHeight = this.cutError / (this.maxHeight * (1 + cutMarkOffset*2/100)) * 100;


        const cutMarkLineX: string = `calc(${cutErrorPercentageIncutMarkWidth}% + ${cutMarkOffset/(1 + cutMarkOffset*2/100)}% )`;
        const cutMarkLineY: string = `calc(${cutErrorPercentageIncutMarkHeight}% + ${cutMarkOffset/(1 + cutMarkOffset*2/100)}% )`;
        cutMark = {
            positionX: cutMarkOffset,
            positionY: cutMarkOffset,
            svgString: `
                <svg style='${cutMarkStyle}' xmlns='http://www.w3.org/2000/svg' >
                    <line style='${cutMarkLineStyle}'
                        x1='${cutMarkLineX}'
                        y1='0%'
                        x2='${cutMarkLineX}'
                        y2='${cutMarkLineLength}%'
                    />

                    <line style='${cutMarkLineStyle}'
                        x1='calc(100% - ${cutMarkLineX})'
                        y1='0%'
                        x2='calc(100% - ${cutMarkLineX})'
                        y2='${cutMarkLineLength}%'
                    />

                    <line style='${cutMarkLineStyle}'
                        x1='calc(100% - ${cutMarkLineX})'
                        y1='100%'
                        x2='calc(100% - ${cutMarkLineX})'
                        y2='calc(100% - ${cutMarkLineLength}%)'
                    />

                    <line style='${cutMarkLineStyle}'
                        x1='calc(${cutMarkLineX})'
                        y1='100%'
                        x2='calc(${cutMarkLineX})'
                        y2='calc(100% - ${cutMarkLineLength}%)'
                    />

                    <line style='${cutMarkLineStyle}'
                        x1='0%'
                        y1='${cutMarkLineY}'
                        x2='${cutMarkLineLength}%'
                        y2='${cutMarkLineY}'
                    />
                    <line style='${cutMarkLineStyle}'
                        x1='100%'
                        y1='${cutMarkLineY}'
                        x2='calc(100% - ${cutMarkLineLength}%)'
                        y2='${cutMarkLineY}'
                    />
                    <line style='${cutMarkLineStyle}'
                        x1='100%'
                        y1='calc(100% - ${cutMarkLineY})'
                        x2='calc(100% - ${cutMarkLineLength}%)'
                        y2='calc(100% - ${cutMarkLineY})'
                    />
                    <line style='${cutMarkLineStyle}'
                        x1='0%'
                        y1='calc(100% - ${cutMarkLineY})'
                        x2='calc(${cutMarkLineLength}%)'
                        y2='calc(100% - ${cutMarkLineY})'
                    />
                    
                </svg>
            
            `
        }
        marks.push(safeArea);
        marks.push(cutMark);
        return marks;

      //  return `polygon(${safeAreaX}% ${safeAreaY}%, ${safeAreaRight}% ${safeAreaY}%, ${safeAreaRight}% ${safeAreaBottom}%, ${safeAreaX}% ${safeAreaBottom}%)`;
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
        return `polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)`;
    }
}