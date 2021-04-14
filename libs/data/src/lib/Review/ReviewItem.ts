
import FrameDictionary from "../FrameDictionary/FrameDictionary";
import { PRODUCT_TYPE_DISCRIMINATOR, Product, productToJson, jsonToProduct } from "../Product"
import { ReviewItem as ReviewItemInterface } from "@gainhow-review/interfaces"
import ReviewModel from "./ReviewModel";
import ReviewStatus from "./ReviewStatus";
import { deserialize, Exclude, serialize, Type } from "class-transformer";
import FramedPage from "./FramedPage";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, AfterLoad, BeforeInsert, BeforeUpdate, PrimaryColumn, JoinColumn } from "typeorm";
import UploadFileStatus from "./UploadFileStatus";
import UploadFilePageInfo from "./UploadFilePageInfo";

@Entity()
export default class ReviewItem implements ReviewItemInterface {
    
    @PrimaryColumn('varchar', { length: 255 })
    readonly reviewId: string; // 資料庫要用的primary key

    @Type(() => ReviewModel)
    @OneToMany(() => ReviewModel, (model: ReviewModel) => model.reviewItem)
    protected _models?: Array<ReviewModel>;

    @Type(() => ReviewStatus)
    @OneToOne(() => ReviewStatus, {
        cascade: true
    })
    @JoinColumn()
    public status: ReviewStatus;

    @Type(() => Product, {
        discriminator: PRODUCT_TYPE_DISCRIMINATOR
    })
    private _product: Product;
    public get product(): Product {
        return this._product;
    }

    @Exclude()
    @Column('text')
    private _serializedProduct?: string;
    @AfterLoad()
    deserializeProduct(): void {
        if (this._serializedProduct === undefined) throw new Error("TypeORM should have set '__serializedProduct' but didn't.");
        this._product = jsonToProduct(this._serializedProduct);
    }
    @BeforeInsert()
    serializeProduct(): void {
        this._serializedProduct = productToJson(this._product);
    }
    
    constructor(
        status: ReviewStatus,
        reviewId: string,
        product: Product,
    ) {
        this.status = status;
        this.reviewId = reviewId;
        this._product = product;
    }

    public get numberOfModels(): number {
        return this.status!.numberOfModels;
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

    public get models(): Array<ReviewModel> {
        if (!this._models) return this.createAndSetBlankModels();
        return this._models;
    }

    protected createAndSetBlankModels(): Array<ReviewModel> {
        this.models = this.createBlankModels();
        return this.models;
    }
    protected createBlankModels(): Array<ReviewModel> {
        let models = [];
        for (let modelNumber: number = 1; modelNumber <= this.numberOfModels; modelNumber++) {
            models.push(new ReviewModel(
                generateModelIdFromReviewId(this.reviewId, modelNumber),
                `第${modelNumber}款`,
                this
            ))
        }
        return models;

        function generateModelIdFromReviewId(reviewId: string, modelNumber: number): string {
            let modelNumberInString: string = modelNumber.toString();
            let numberOfModelNumberDigits: number = modelNumberInString.length;
            const modelIdMaximalLength: number = 3;
            let numberOfZerosToAppend: number = modelIdMaximalLength - numberOfModelNumberDigits;
            let modelId: string = reviewId + '0'.repeat(numberOfZerosToAppend) + modelNumberInString;
            return modelId;
        }
    }

    public get frameDictionary(): FrameDictionary {
        return this._product.frameDictionary;
    }

    public static fromJson(text: string): ReviewItem {
        let item: ReviewItem = deserialize(ReviewItem, text);
        item.models.forEach((model: ReviewModel) => {
            model.reviewItem = item;
            model.framedPages.forEach((framedPage: FramedPage) => {
                framedPage.reviewModel = model;
            });
        });
        item.status!.uploadFileStatuses!.forEach((fileStatus: UploadFileStatus) => {
            fileStatus.reviewStatus = item.status!;
            fileStatus.pageInfos?.forEach((pageInfo: UploadFilePageInfo) => {
                pageInfo.fileStatus = fileStatus;
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
            this.reviewId,
            this._product
        );
        newReviewItem.status = this.status;
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
    public swapFramedPagesImmutably(modelIndex: number, frameIndex1: number, frameIndex2: number): ReviewItem {
        let oldModel: ReviewModel | undefined
            = this.models[modelIndex];
        if (!oldModel) throw new Error("modelIndex out of index");
        let newModel: ReviewModel = oldModel.swapFramedPagesImmutably(frameIndex1, frameIndex2);
        return this.setReviewModelImmutably(modelIndex, newModel);
    }

    public allExportFilesAreGenerated(): boolean {
        for (let model of this.models) {
            for (let framedPage of model.framedPages) {
                if (framedPage.hasResults()) return false;
            }
        }
        return true;
    }
    public allUploadFilesAreConverted(): boolean {
        return this.status.allUploadFilesAreConverted();
    }
}