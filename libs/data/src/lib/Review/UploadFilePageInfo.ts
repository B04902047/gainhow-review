import { UploadFilePageInfo as UploadFilePageInfoInterface } from '@gainhow-review/interfaces';

export default class UploadFilePageInfo implements UploadFilePageInfoInterface {
    constructor(
        readonly pdfAddress: string,
        readonly jpegAddress: string,
        readonly widthInMm: number,
        readonly heightInMm: number
    ) {}
}