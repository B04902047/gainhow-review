
import { Expose, Type } from "class-transformer";
import { UploadFileProcessingStage, UploadFileStatus as UploadFileStatusInterface } from "@gainhow-review/interfaces";
import UploadFilePageInfo from "./UploadFilePageInfo";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ReviewStatus } from "../Review";

@Entity()
export default class UploadFileStatus implements UploadFileStatusInterface {
 
    @PrimaryGeneratedColumn()
    public id?: string;             // 資料庫用的primary key

    @Column()
    readonly fileName: string;

    @Column()
    readonly uploadToken: string;   // 跟轉檔伺服器溝通用的id

    @Column()
    public currentStage: UploadFileProcessingStage;

    @Column()
    public numberOfPages?: number;

    @Column()
    public fileAddress?: string;

    @Type(() => UploadFilePageInfo)
    @OneToMany(() => UploadFilePageInfo, (pageInfo: UploadFilePageInfo) => pageInfo.fileStatus)
    public pageInfos?: Array<UploadFilePageInfo>;

    @Column()
    public errorStage?: UploadFileProcessingStage;

    @Expose()
    @ManyToOne(() => ReviewStatus, (reviewStatus: ReviewStatus) => reviewStatus.uploadFileStatuses)
    reviewStatus: ReviewStatus;

    constructor (
        reviewStatus: ReviewStatus,
        fileName: string,
        fileId: string,
        currentStage: UploadFileProcessingStage,
        numberOfPages?: number,
        fileAddress?: string,
        pages?: Array<UploadFilePageInfo>,
        errorStage?: UploadFileProcessingStage
    ) {
        this.reviewStatus = reviewStatus;
        this.fileName = fileName;
        this.uploadToken = fileId;
        this.currentStage = currentStage;
        this.numberOfPages = numberOfPages;
        this.fileAddress = fileAddress;
        this.pageInfos = pages;
        this.errorStage = errorStage;
    }

    @Expose()
    public get hasError(): boolean {
        if (this.errorStage) return true;
        return false;
    }
}
