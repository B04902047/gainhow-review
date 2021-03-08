
import { ProductSubtypeName } from "@gainhow-review/interfaces";

import Product from "./Product/Product";
import SingleSheet from "./Product/SingleSheet";
import SaddleStichedBook from "./Product/SaddleStichedBook";
import PerfectBoundBook from "./Product/PerfectBoundBook";

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

export {
    Product,
    SingleSheet,
    SaddleStichedBook,
    PerfectBoundBook
};