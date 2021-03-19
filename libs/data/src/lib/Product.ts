

import Product from "./Product/Product";
import SingleSheet from "./Product/SingleSheet";
import SaddleStichedBook from "./Product/SaddleStichedBook";
import PerfectBoundBook from "./Product/PerfectBoundBook";
import { ProductSubtypeName } from "@gainhow-review/interfaces";
import { deserialize, serialize } from "class-transformer";

export {
    Product,
    SingleSheet,
    SaddleStichedBook,
    PerfectBoundBook,
};

export function jsonToProduct(text: string): Product {
    let plainObject: any = JSON.parse(text);
    let subTypeName: any = plainObject.__productSubType;
    for (let {name, value} of PRODUCT_SUBTYPES) {
        if (subTypeName === name) return deserialize(value, text);
    }
    let validSubtypeNames: string[] = PRODUCT_SUBTYPES.map(({name, value}) => name)
    throw new Error(`'__productSubType' in json object should contain any value in ${validSubtypeNames.toString()}`);
}

export function productToJson(product: Product): string {
    return serialize(product);
}

export const PRODUCT_SUBTYPES: {
    name: ProductSubtypeName; value: any
}[] = [
    { name : "SingleSheet", value: SingleSheet },
    { name : "SaddleStichedBook", value: SaddleStichedBook },
    { name : "PerfectBoundBook", value: PerfectBoundBook }
];

export const PRODUCT_TYPE_DISCRIMINATOR = {
    property: '__productSubType',
    subTypes: PRODUCT_SUBTYPES
};