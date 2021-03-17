
import { Exclude, Expose } from "class-transformer";
import Frame from "../Frame/Frame";
import { FramedPage as FramedPageInterface} from "@gainhow-review/interfaces";
import ReviewModel from "./ReviewModel";
import { UploadFilePageInfo, UploadFileStatus } from "../Review";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class FramedPage implements FramedPageInterface {

    @PrimaryGeneratedColumn()
    public id?: string;  // 資料庫要用的primary key

    @Column()
    sourceFileIndex?: number;

    @Column()
    sourcePageNumber?: number;

    @Column()
    resultingJpegUrl?: string;

    @Column()
    resultingPdfUrl?: string;

    @Exclude()
    @Column()
    private _rotationDegree: number;

    @Exclude()
    @ManyToOne(() => ReviewModel, (model: ReviewModel) => model.framedPages)
    public reviewModel: ReviewModel;

    @Column()
    public readonly frameName: string;

    @Column()
    public positionX: number;

    @Column()
    public positionY: number;

    @Column()
    public scaleX: number;

    @Column()
    public scaleY: number;

    constructor (
        frameName: string,
        reviewModel: ReviewModel,
        positionX: number = 0,
        positionY: number = 0,
        scaleX: number = 1,
        scaleY: number = 1,
        _rotationDegree: number = 0
    ) {
        this.frameName = frameName;
        this.reviewModel = reviewModel;
        this.positionX = positionX;
        this.positionY = positionY;
        this.scaleX = scaleX;
        this.scaleY = scaleY;
        this._rotationDegree = _rotationDegree;
    }

    public getFrame(): Frame | undefined {
      return this.reviewModel.getFrame(this.frameName);
    }

    public getSourcePageInfo(): UploadFilePageInfo | undefined {
        if (this.sourceFileIndex === undefined
            || this.sourcePageNumber === undefined
        ) {
            return undefined;
        }
        
        let fileStatus: UploadFileStatus | undefined = this.reviewModel.reviewItem.status.uploadFileStatuses[this.sourceFileIndex];
        if (!fileStatus || !fileStatus.pageInfos) {
            return undefined;
        }
        return fileStatus.pageInfos[this.sourcePageNumber];
    }

    public reset(): void {
        this.rotate(0);   // 回到原本的角度
        this.moveTo(0, 0);  // 回到預設原點
        this.scale(1, 1);   // 回到原本的縮放
    }

    // 旋轉
    public rotate(degree: number): void {
        this.rotationDegree = degree;
    }

    @Expose()
    public get rotationDegree(): number {
        return this._rotationDegree;
    }

    public set rotationDegree(degree: number) {
        this._rotationDegree = degree % 360;
    }
    // 縮放
    public scale(x: number, y: number): void {
        if(x > 0 && y > 0) {
            this.setScale(x, y);
        }
        else {
            //TODO: 錯誤? 就默默不讓他做? 提醒? 還是0沒有關係?
        }
    }

    private setScale(x: number, y:number) {
        this.scaleX = x;
        this.scaleY = y;
    }

    // 移動位置
    public moveTo(x: number, y: number): void {
        // 檢查是否超出去，最多就是剛好超出去?防呆要在這裡嗎? 還是說寫前端的時候再防就好了
        this.setPosition(x,y);
    }

    private setPosition(x: number, y: number) {
        this.positionX = x;
        this.positionY = y;
    }

    public clone(): FramedPage {
        return Object.assign(this);
    }
    // 需要的method : setFile  getPreviewImage getResultImage getResultFlie
    // cleanFile? 空白頁? 選擇了頁是不是可以改選擇用空白頁 

    private calculateInitialPostionXandPostionY () {
        let positionX: number;
        let positionY: number;
        let sourcePage: UploadFilePageInfo | undefined= this.getSourcePageInfo();
            let frame: Frame | undefined = this.getFrame();
            if (sourcePage && frame) { //有指定的sourceFile
                let sourceWidth: number = sourcePage.widthInMm;
                let sourceHeight: number = sourcePage.heightInMm;
                let frameWidth: number = frame.maxWidth;
                let frameHeight: number = frame.maxHeight;
                positionX = (frameWidth - sourceWidth) / 2;
                positionY =(frameHeight - sourceHeight) / 2;
            }
            else {
                positionX = 0;
                positionY = 0;
            }
        return ({
            positionX: positionX,
            positionY: positionY
        })
    }
}
