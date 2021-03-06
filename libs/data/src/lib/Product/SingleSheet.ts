
import {SingleSheet as SingleSheetInterface} from "@gainhow-review/interfaces";
import Product from "./Product";
import { Exclude, Type } from "class-transformer";
import Coat from "../Material/Coat";
import Paper from "../Material/Paper";
import SingleSheetFrameDictionary from "../FrameDictionary/SingleSheetFrameDictionary";

export default class SingleSheet extends Product implements SingleSheetInterface {
    productSubTypeChineseName = "單張";
    public getInfo(): Array<string> {
        return [
            "單張",
            `寬 ${this.width} x 長 ${this.height}`,
            this.paper.name,
            `正面：${(this.frontSideCoat)? this.frontSideCoat: "不上膜"}`,
            `背面：${(this.backSideCoat)? this.backSideCoat: "不上膜"}`
        ];
    }
    readonly __productSubType: "SingleSheet" = "SingleSheet";
    
    @Exclude()
    protected _frameDictionary?: SingleSheetFrameDictionary;

    public get frameDictionary(): SingleSheetFrameDictionary {
        if (!this._frameDictionary) this._frameDictionary = new SingleSheetFrameDictionary(this);
        return this._frameDictionary;
    }

    @Type(() => Paper)
    public paper: Paper;

    @Type(() => Coat)
    public frontSideCoat?: Coat;

    @Type(() => Coat)
    public backSideCoat?: Coat;

    constructor(
        public width: number,
        public height: number,
        public isDoubleSided: boolean,
        paper: Paper,
        frontSideCoat?: Coat,
        backSideCoat?: Coat
    ) {
        super();
        this.paper = paper;
        this.frontSideCoat = frontSideCoat;
        this.backSideCoat = backSideCoat;
    }
}