

import * as Interface from "@gainhow-review/interfaces";
import FrameDictionary from "../FrameDictionary/FrameDictionary";
import { deserialize, Exclude, serialize } from "class-transformer";
import { PRODUCT_SUBTYPES } from "../Product";

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

    public static fromJson(text: string): Product {
        let plainObject: any = JSON.parse(text);
        let subTypeName: any = plainObject.__productSubType;
        for (let {name, value} of PRODUCT_SUBTYPES) {
            if (subTypeName === name) return deserialize(value, text);
        }
        let validSubtypeNames: string[] = PRODUCT_SUBTYPES.map(({name, value}) => name)
        throw new Error(`'__productSubType' in json object should contain any value in ${validSubtypeNames.toString()}`);
    }
    public static toJson(product: Product): string {
        return serialize(product);
    }
}