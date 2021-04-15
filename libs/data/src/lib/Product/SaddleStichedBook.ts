import Book from "./Book";
import {BookPagingDirection, SaddleStichedBook as SaddleStichedBookInterface} from "@gainhow-review/interfaces";
import Paper from "../Material/Paper";
import Coat from "../Material/Coat";
import SaddleStitchedBookFrameDictionary from "../FrameDictionary/SaddleStitchedBookFrameDictionary";
import FrameDictionary from "../FrameDictionary/FrameDictionary";
import { deserialize, Exclude, serialize } from "class-transformer";

export default class SaddleStichedBook extends Book implements SaddleStichedBookInterface {
    readonly __productSubType: "SaddleStichedBook" = "SaddleStichedBook";
    @Exclude()
    protected _frameDictionary?: SaddleStitchedBookFrameDictionary;
    constructor(
        width: number, 
        height: number, 
        numberOfPages: number,
        pagingDirection: BookPagingDirection,
        coverPaper: Paper,
        innerPagesPaper: Paper, 
        coverCoating?: Coat, 
        innerPageCoating?: Coat
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
        this.productSubTypeChineseName = '騎馬釘書';
    }
    public get frameDictionary(): FrameDictionary {
        if (!this._frameDictionary) {
            this._frameDictionary = new SaddleStitchedBookFrameDictionary(this);
        }
        return this._frameDictionary;
    }

    public clone(): SaddleStichedBook {
        return new SaddleStichedBook(
            this.width, 
            this.height, 
            this.numberOfPages,
            this.pagingDirection,
            this.coverPaper, 
            this.innerPagesPaper, 
            this.coverCoating, 
            this.innerPageCoating
        );
    }
}