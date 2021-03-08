import Product from "../Product/Product";
import { ReviewRegistrationInfo as ReviewRegistrationInfoInterface } from "@gainhow-review/interfaces";
import { PRODUCT_TYPE_DISCRIMINATOR } from "../Product";
import { deserialize, Type, serialize } from "class-transformer";
export default class ReviewRegistrationInfo implements ReviewRegistrationInfoInterface {
    
    @Type(() => Product, {
        discriminator: PRODUCT_TYPE_DISCRIMINATOR
    })
    public readonly product: Product;
    constructor (
        public readonly numberOfModels: number,
        product: Product,
    ) {
        this.product = product;
    }

    public static toJson(info: ReviewRegistrationInfo) {
        return serialize(info);
    }

    public static fromJson(text: string): ReviewRegistrationInfo {
        return deserialize(ReviewRegistrationInfo, text);
    }
}