import Book from "./Book";
import {BookPagingDirection, SaddleStichedBook as SaddleStichedBookInterface} from "@gainhow-review/interfaces";
import Paper from "../Material/Paper";
import Coat from "../Material/Coat";
import SaddleStitchedBookFrameDictionary from "../FrameDictionary/SaddleStitchedBookFrameDictionary";
import FrameDictionary from "../FrameDictionary/FrameDictionary";

export default class SaddleStichedBook extends Book implements SaddleStichedBookInterface {
    readonly __productSubType: "SaddleStichedBook" = "SaddleStichedBook";
    protected _frameDictionary?: SaddleStitchedBookFrameDictionary;
    constructor(
        coverWidth: number, 
        coverHeight: number, 
        numberOfPages: number,
        pagingDirection: BookPagingDirection,
        coverPaperTexture: Paper,
        innerPagesPaperTexture: Paper, 
        coverCoating?: Coat, 
        innerPageCoating?: Coat
    ) {
        super(
            coverWidth, 
            coverHeight, 
            numberOfPages,
            pagingDirection,
            coverPaperTexture, 
            innerPagesPaperTexture, 
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
}