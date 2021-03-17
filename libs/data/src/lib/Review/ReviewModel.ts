
import { deserialize, Exclude, Expose, Type } from "class-transformer";
import Frame from "../Frame/Frame";
import FrameDictionary from "../FrameDictionary/FrameDictionary";
import { ReviewModel as ReviewModelInterface} from "@gainhow-review/interfaces";
import FramedPage from "./FramedPage";
import ReviewItem from "./ReviewItem";

export default class ReviewModel implements ReviewModelInterface {

    @Exclude()
    protected _framedPages: Array<FramedPage> = new Array();

    @Exclude()
    protected _frameDictionary?: FrameDictionary;

    @Exclude()
    public reviewItem: ReviewItem;

    constructor(
        public readonly modelName: string,
        reviewItem: ReviewItem
    ) {
        this.reviewItem = reviewItem;
        this.createAndSetBlankFramedPages();
    }

    public getFrame(name: string): Frame | undefined {
        return this.frameDictionary.getFrame(name);
    }

    public setFramedPageImmutably(index: number, framedPage: FramedPage): ReviewModel {
        let newReviewModel = new ReviewModel(
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

    @Expose()
    @Type(() => FramedPage)
    public get framedPages(): Array<FramedPage> {
        if (this._framedPages.length !== this.numberOfFramedPages) return this.createAndSetBlankFramedPages();
        return this._framedPages;
    }

    @Expose({toPlainOnly: true})
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
        return this.frameNames.map((name) => new FramedPage(name, this));
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