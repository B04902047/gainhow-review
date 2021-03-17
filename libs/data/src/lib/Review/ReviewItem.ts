
import FrameDictionary from "../FrameDictionary/FrameDictionary";
import Product from "../Product/Product";
import { PRODUCT_TYPE_DISCRIMINATOR } from "../Product"
import ReviewModel from "./ReviewModel";
import ReviewStatus from "./ReviewStatus";
import { deserialize, Exclude, Expose, serialize, Type } from "class-transformer";
import FramedPage from "./FramedPage";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

export default class ReviewItem implements ReviewItem {
    
    @Exclude()
    protected _models: Array<ReviewModel> = [];

    @Type(() => ReviewStatus)
    public readonly status: ReviewStatus;

    @Type(() => Product, {
        discriminator: PRODUCT_TYPE_DISCRIMINATOR
    })
    public readonly product: Product;

    @PrimaryGeneratedColumn()
    public reviewId?: string;
    
    constructor(
        status: ReviewStatus,
        product: Product,
    ) {
        this.status = status;
        this.product = product;
        this.createAndSetBlankModels();
    }

    public get numberOfModels(): number {
        return this.status.numberOfModels;
    }

    public getFramedPage(modelIndex: number, frameIndex: number): FramedPage | undefined {
        let model: ReviewModel | undefined = this.models[modelIndex];
        if (!model) return undefined;
        return model.framedPages[frameIndex];
    }

    public set models(models: Array<ReviewModel>) {
        if (models.length !== this.numberOfModels) {
            throw new Error(`number of models inconsistent: should be ${this.numberOfModels}, but has ${models.length}`);
        }
        this._models = models;
    }

    @Expose()
    @Type(() => ReviewModel)
    public get models(): Array<ReviewModel> {
        if (this._models.length !== this.numberOfModels) return this.createAndSetBlankModels();
        return this._models;
    }

    protected createAndSetBlankModels(): Array<ReviewModel> {
        this.models = this.createBlankModels();
        return this.models;
    }
    protected createBlankModels(): Array<ReviewModel> {
        let models = [];
        for (let modelNumber: number = 1; modelNumber <= this.numberOfModels; modelNumber++) {
            models.push(new ReviewModel(`第${modelNumber}款`, this))
        }
        return models;
    }

    public get frameDictionary(): FrameDictionary {
        return this.product.frameDictionary;
    }

    public static fromJson(text: string): ReviewItem {
        let item: ReviewItem = deserialize(ReviewItem, text);
        item.models.forEach((model: ReviewModel) => {
            model.reviewItem = item;
            model.framedPages.forEach((framedPage: FramedPage) => {
                framedPage.reviewModel = model;
            });
        });
        return item;
    }
    public static toJson(item: ReviewItem): string {
        return serialize(item);
    }


    public setReviewModelImmutably(modelIndex: number, model: ReviewModel): ReviewItem {
        let newReviewItem = new ReviewItem(
            this.status,
            this.product
        );
        let newReviewModels: Array<ReviewModel>
            = [...this.models];
        newReviewModels[modelIndex] = model;
        newReviewModels.forEach((model) => {
            model.reviewItem = newReviewItem;
        })
        newReviewItem.models = newReviewModels;
        return newReviewItem;
    }

    public setFramedPageImmutably(modelIndex: number, frameIndex: number, framedPage: FramedPage): ReviewItem {
        let oldModel: ReviewModel | undefined
            = this.models[modelIndex];
        if (!oldModel) throw new Error("modelIndex out of index");
        let newModel: ReviewModel = oldModel.setFramedPageImmutably(frameIndex, framedPage);
        return this.setReviewModelImmutably(modelIndex, newModel);
    }
}