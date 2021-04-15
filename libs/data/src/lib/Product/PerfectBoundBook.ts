import Book from "./Book";
import { BookPagingDirection, PerfectBoundBook as PerfectBoundBookInterface } from "@gainhow-review/interfaces";
import Paper from "../Material/Paper";
import Coat from "../Material/Coat";
import { deserialize, Exclude, serialize, Type } from "class-transformer";
import FrameDictionary from "../FrameDictionary/FrameDictionary";
import PerfectBoundBookFrameDictionary from "../FrameDictionary/PerfectBoundBookFrameDictionary";

export default class PerfectBoundBook extends Book implements PerfectBoundBookInterface {
    readonly __productSubType = "PerfectBoundBook";

    constructor(
        public width: number,
        public height: number,
        public numberOfPages: number,
        public pagingDirection: BookPagingDirection,
        coverPaper: Paper,
        innerPagesPaper: Paper,
        coverCoating?: Coat,
        innerPageCoating?: Coat,
        public hardCovered: boolean = false,
        public threadSewn: boolean = false,
        public spineStyle: "standard" | "rounded" = "standard",
    ) {
        super(
            width,
            height,
            numberOfPages,
            pagingDirection,
            coverPaper,
            innerPagesPaper,
            coverCoating,
            innerPageCoating
        );
    }

    @Exclude()
    protected _frameDictionary?: FrameDictionary;
    public get frameDictionary(): FrameDictionary {
        if (!this._frameDictionary) {
            this._frameDictionary = new PerfectBoundBookFrameDictionary(this);
        }
        return this._frameDictionary;
    }

    public clone(): PerfectBoundBook {
        return new PerfectBoundBook(
            this.width, 
            this.height, 
            this.numberOfPages,
            this.pagingDirection,
            this.coverPaper, 
            this.innerPagesPaper, 
            this.coverCoating, 
            this.innerPageCoating,
            this.hardCovered,
            this.threadSewn,
            this.spineStyle
        );
    }
}