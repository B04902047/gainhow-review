import { deserialize, serialize, Type } from "class-transformer";
import { ReviewingProgress, ReviewStatus as ReviewStatusInterface } from "@gainhow-review/interfaces";
import UploadFileStatus from "./UploadFileStatus";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UploadFilePageInfo } from "../Review";

export default class ReviewStatus implements ReviewStatusInterface {

    @Type(() => UploadFileStatus)
    @OneToMany(() => UploadFileStatus, (fileStatus: UploadFileStatus) => fileStatus.reviewStatus)
    public uploadFileStatuses: UploadFileStatus[] = [];

    // TODO: enum? string literal? serializable?
    @Column()
    public progress: ReviewingProgress;

    @Column()
    public numberOfFiles: number = 0;

    @Column()
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
        reviewStatus.uploadFileStatuses.forEach((fileStatus: UploadFileStatus) => {
            fileStatus.reviewStatus = reviewStatus;
            fileStatus.pageInfos?.forEach((pageInfo: UploadFilePageInfo) => {
                pageInfo.fileStatus = fileStatus;
            });
        });
        return reviewStatus;
    }
}