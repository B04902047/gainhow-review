import { BookPagingDirection, BookSubtypeName, Book as BookInterface } from "@gainhow-review/interfaces";
import Coat from "../Material/Coat";
import Paper from "../Material/Paper";
import Product from "./Product";

export default abstract class Book extends Product implements BookInterface {
    readonly abstract __productSubType: BookSubtypeName
    constructor(
        public width: number,
        public height: number,
        public numberOfPages: number,
        public pagingDirection: BookPagingDirection,
        public coverPaper: Paper,
        public innerPagesPaper: Paper,
        public coverCoating?: Coat,
        public innerPageCoating?: Coat,
        ) {
        super();
    }

    /**
     * 書背寬度（mm）
     */
    public get spineWidth(): number {
        return this.numberOfPages / 2 * this.innerPagesPaper.thickness;
    }
    productSubTypeChineseName = "書籍";
    public getInfo(): Array<string> {
        let coverInfo: string = `封面：${this.coverPaper}、${(this.coverCoating)? this.coverCoating.chineseName:'不上膜'}`;
        let innerPageInfo: string = `內頁：${this.innerPagesPaper}、${(this.innerPageCoating)? this.innerPageCoating.chineseName:'不上膜'}`
       
        let pagingDirectionInChineseName: string ;
        switch (this.pagingDirection) {
            case "LEFT_TO_RIGHT" :
                pagingDirectionInChineseName = '由左往右';
                break;
            case "RIGHT_TO_LEFT" :
                pagingDirectionInChineseName = '由右往左';
                break;
            case "BOTTOM_TO_TOP" :
                pagingDirectionInChineseName = '由下往上';
                break;
        }
     
        return [ 
            `${this.productSubTypeChineseName}，${this.numberOfPages}頁`,
            `寬 ${this.width} x 長 ${this.height}`,
            `翻頁方向：${pagingDirectionInChineseName}翻`,
            `${coverInfo}`,
            `${innerPageInfo}`
        ];
    }
}