
import { deserialize, Exclude, Expose, Type } from "class-transformer";
import Frame from "../Frame/Frame";
import FrameDictionary from "../FrameDictionary/FrameDictionary";
import { ReviewModel as ReviewModelInterface} from "@gainhow-review/interfaces";
import FramedPage from "./FramedPage";
import ReviewItem from "./ReviewItem";
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { ConnectionOptions } from "tls";

@Entity()
export default class ReviewModel implements ReviewModelInterface {

    @PrimaryColumn('varchar', { length: 255 })
    public modelId: string;  // 資料庫要用的primary key

    @Column('varchar', { length: 16 })
    public readonly modelName: string;

    @Type(() => FramedPage)
    @OneToMany(() => FramedPage, (framedPage: FramedPage) => framedPage.reviewModel)
    protected _framedPages?: Array<FramedPage>;

    @Exclude()
    protected _frameDictionary?: FrameDictionary;

    @Exclude()
    @ManyToOne(() => ReviewItem, (reviewItem: ReviewItem) => reviewItem.models)
    public reviewItem: ReviewItem;

    constructor(
        modelId: string,
        modelName: string,
        reviewItem: ReviewItem
    ) {
        this.modelId = modelId;
        this.modelName = modelName;
        this.reviewItem = reviewItem;
        // this.createAndSetBlankFramedPages();
    }

    public getFrame(name: string): Frame | undefined {
        return this.frameDictionary.getFrame(name);
    }

    public setFramedPageImmutably(index: number, framedPage: FramedPage): ReviewModel {
        let newReviewModel = new ReviewModel(
            this.modelId,
            this.modelName,
            this.reviewItem
        );
        let newFramedPages = new Array<FramedPage>();
            newFramedPages = [...this.framedPages];
            newFramedPages[index] = framedPage;
            
        newFramedPages.forEach((framedPage) => {
            framedPage.reviewModel = newReviewModel;
        })
        newReviewModel.framedPages = newFramedPages;
        return newReviewModel;
    }

    public get framedPages(): Array<FramedPage> {
        if (!this._framedPages) return this.createAndSetBlankFramedPages();
        return this._framedPages;
    }

    public get numberOfFramedPages(): number {
        return this.frameNames.length;
    }
    public set framedPages(framedPages: Array<FramedPage>) {
        if (framedPages.length !== this.numberOfFramedPages) throw new Error("map size inconsistent");
        this._framedPages = framedPages;
    }
    protected createAndSetBlankFramedPages(): Array<FramedPage> {
        this.framedPages = this.createBlankFramedPages();
        return this.framedPages;
    }

    protected createBlankFramedPages(): Array<FramedPage> {
        return this.frameNames.map((name, frameIndex) => {
            let frameId: string = generateFrameIdFromModelId(this.modelId, frameIndex + 1);
            return new FramedPage(
                frameId,
                name,
                this,
                frameIndex
            );
        });
        function generateFrameIdFromModelId(modelId: string, frameNumber: number): string {
            let frameNumberInString: string = frameNumber.toString();
            let numberOfFrameNumberDigits: number = frameNumberInString.length;
            const frameNumberMaximalLength: number = 4;
            let numberOfZerosToAppend: number = frameNumberMaximalLength - numberOfFrameNumberDigits;
            let frameId: string = modelId + '0'.repeat(numberOfZerosToAppend) + frameNumberInString;
            return frameId;
        }
    }
    public get frameNames(): Array<string> {
        return this.frameDictionary.frameNames;
    }
    public get frameDictionary(): FrameDictionary {
        if (!this._frameDictionary) return this.getAndSetFrameDictionary();
        return this._frameDictionary;
    }
    protected getAndSetFrameDictionary(): FrameDictionary {
        this._frameDictionary = this.reviewItem.frameDictionary;
        return this._frameDictionary;
    }
}