
import { Exclude, Expose, Type } from "class-transformer";
import { UploadFileProcessingStage, UploadFileStatus as UploadFileStatusInterface, UPLOAD_FILE_PROCESSING_STAGES } from "@gainhow-review/interfaces";
import UploadFilePageInfo from "./UploadFilePageInfo";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ReviewStatus } from "../Review";

@Entity()
export default class UploadFileStatus implements UploadFileStatusInterface {
 
    @PrimaryGeneratedColumn()       // 由typeorm在第一次存到資料庫的時候幫忙生成
    @Exclude()
    public id?: number;             // 資料庫用的primary key

    @Column('text')
    readonly fileName: string;

    @Column('varchar', { length: 255 })
    public uploadToken?: string;   // 跟轉檔伺服器溝通用的id

    @Column({
        type: "enum",
        enum: UPLOAD_FILE_PROCESSING_STAGES,
        // default: "UPLOADING"
    })
    public currentStage: UploadFileProcessingStage;

    @Column('int')
    public numberOfPages?: number;

    @Column('text')
    public fileAddress?: string;

    @Type(() => UploadFilePageInfo)
    @OneToMany(() => UploadFilePageInfo, (pageInfo: UploadFilePageInfo) => pageInfo.fileStatus)
    public pageInfos?: Array<UploadFilePageInfo>;

    @Column({
        type: "enum",
        enum: UPLOAD_FILE_PROCESSING_STAGES,
        // default: undefined
    })
    public errorStage?: UploadFileProcessingStage;

    @Expose()
    @ManyToOne(() => ReviewStatus, (reviewStatus: ReviewStatus) => reviewStatus.uploadFileStatuses)
    reviewStatus: ReviewStatus;

    constructor (
        reviewStatus: ReviewStatus,
        fileName: string
    ) {
        this.reviewStatus = reviewStatus;
        this.fileName = fileName;
        this.currentStage = "UPLOADING";
    }

    @Expose()
    public get hasError(): boolean {
        if (this.errorStage) return true;
        return false;
    }
}
