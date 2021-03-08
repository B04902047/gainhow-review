
import { Expose } from "class-transformer";
import { UploadFilePageInfo, UploadFileProcessingStage, UploadFileStatus as UploadFileStatusInterface } from "@gainhow-review/interfaces";


export default class UploadFileStatus implements UploadFileStatusInterface {

    constructor (
        readonly fileName: string,
        readonly fileId: string,
        public currentStage: UploadFileProcessingStage,
        public numberOfPages?: number,
        public fileAddress?: string,
        public pages?: Array<UploadFilePageInfo>,
        public errorStage?: UploadFileProcessingStage
    ) {}

    @Expose()
    public get hasError(): boolean {
        if (this.errorStage) return true;
        return false;
    }
}
