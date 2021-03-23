import { UploadFilePageInfo as UploadFilePageInfoInterface } from '@gainhow-review/interfaces';
import { Exclude, Expose } from 'class-transformer';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UploadFileStatus } from '../Review';

@Entity()
export default class UploadFilePageInfo implements UploadFilePageInfoInterface {

    @PrimaryGeneratedColumn()
    readonly id?: number;

    @Column('text')
    readonly pdfTokenInFileConvertingServer: string;

    @Column('text')
    readonly jpegUrl: string;

    @Column('int')
    readonly widthInMm: number;

    @Column('int')
    readonly heightInMm: number;

    @Exclude()
    @ManyToOne(() => UploadFileStatus, (fileStatus) => fileStatus.pageInfos)
    public fileStatus: UploadFileStatus;
    
    constructor(
        fileStatus: UploadFileStatus,
        pdfAddress: string,
        jpegAddress: string,
        widthInMm: number,
        heightInMm: number
    ) {
        this.fileStatus = fileStatus;
        this.pdfTokenInFileConvertingServer = pdfAddress;
        this.jpegUrl = jpegAddress;
        this.widthInMm = widthInMm;
        this.heightInMm = heightInMm;
    }
}