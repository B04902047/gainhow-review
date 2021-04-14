import { deserialize, Exclude, serialize, Type } from "class-transformer";
import { ReviewingProgress, REVIEWING_PROGRESS, ReviewStatus as ReviewStatusInterface } from "@gainhow-review/interfaces";
import UploadFileStatus from "./UploadFileStatus";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UploadFilePageInfo } from "../Review";

@Entity()
export default class ReviewStatus implements ReviewStatusInterface {

    @PrimaryGeneratedColumn()       // 由typeorm在第一次存到資料庫的時候幫忙生成
    @Exclude()
    public id?: number;             // 資料庫用的primary key

    @Type(() => UploadFileStatus)
    @OneToMany(() => UploadFileStatus, (fileStatus: UploadFileStatus) => fileStatus.reviewStatus)
    public uploadFileStatuses?: UploadFileStatus[];

    // TODO: enum? string literal? serializable?
    @Column({
        type: 'enum',
        enum: REVIEWING_PROGRESS
    })
    public progress: ReviewingProgress;

    @Column('int')
    public numberOfFiles: number = 0;

    @Column('int')
    public numberOfModels: number;

    constructor (
        numberOfModels: number,
    ) {
        this.numberOfModels = numberOfModels;
        this.progress = "REGISTERED";
    }
    public toJson(status: ReviewStatus): string {
        return serialize(status);
    }
    public fromJson(text: string): ReviewStatus {
        let reviewStatus: ReviewStatus = deserialize(ReviewStatus, text);
        reviewStatus.uploadFileStatuses!.forEach((fileStatus: UploadFileStatus) => {
            fileStatus.reviewStatus = reviewStatus;
            fileStatus.pageInfos?.forEach((pageInfo: UploadFilePageInfo) => {
                pageInfo.fileStatus = fileStatus;
            });
        });
        return reviewStatus;
    }

    public allUploadFilesAreConverted(): boolean {
        if (this.uploadFileStatuses === undefined) throw new Error('TypeORM should have set uploadFileStatuses.');
        for (let fileStatus of this.uploadFileStatuses) {
            if (fileStatus.pageInfos === undefined) return false;
        }
        return true;
    }
}