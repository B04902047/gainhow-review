

import * as Interface from "@gainhow-review/interfaces";
import FrameDictionary from "../FrameDictionary/FrameDictionary";
import { deserialize, Exclude, serialize } from "class-transformer";




export default abstract class Product implements Interface.Product {

    readonly abstract __productSubType: Interface.ProductSubtypeName;   // 給class transformer判斷它的實例是哪個subclass

    readonly abstract productSubTypeChineseName: string;
    
    @Exclude()
    protected abstract _frameDictionary?: FrameDictionary;

    public get frameDictionary(): FrameDictionary {
        return this.getOrCreateFrameDictionary();
    }
    protected getOrCreateFrameDictionary(): FrameDictionary {
        if(!this._frameDictionary) return this.createAndSetFrameDictionary();
        return this._frameDictionary;
    }
    private createAndSetFrameDictionary(): FrameDictionary {
        this._frameDictionary = this.createFrameDictionary();
        return this._frameDictionary;
    }
    protected abstract createFrameDictionary(): FrameDictionary;
    public abstract getInfo(): Array<string>;
}



