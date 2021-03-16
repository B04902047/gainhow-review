import { deserialize, serialize, Type } from "class-transformer";
import { ReviewingProgress, ReviewStatus as ReviewStatusInterface } from "@gainhow-review/interfaces";
import UploadFileStatus from "./UploadFileStatus";

export default class ReviewStatus implements ReviewStatusInterface {

    @Type(() => UploadFileStatus)
    public uploadFileStatuses = new Map<string, UploadFileStatus>();

    // TODO: enum? string literal? serializable?
    public progress: ReviewingProgress;
    public numberOfFiles: number = 0;
    public modelIds: string[] = [];
    constructor (
        public numberOfModels: number,
    ) {
        this.progress = "REGISTERING";
    }
    public toJson(status: ReviewStatus): string {
        return serialize(status);
    }
    public fromJson(text: string): ReviewStatus {
        return deserialize(ReviewStatus, text);
    }
}