

import * as Interface from "@gainhow-review/interfaces";
import FrameDictionary from "../FrameDictionary/FrameDictionary";
import { deserialize, Exclude, serialize } from "class-transformer";




export default abstract class Product implements Interface.Product {

    readonly abstract __productSubType: Interface.ProductSubtypeName;   // 給class transformer判斷它的實例是哪個subclass

    readonly abstract productSubTypeChineseName: string;
    
    public abstract get frameDictionary(): FrameDictionary;

    public abstract getInfo(): Array<string>;
}



