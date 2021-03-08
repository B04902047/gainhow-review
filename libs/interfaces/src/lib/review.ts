import { Product } from './product'

/** ============ 審稿 ============ */
// 審稿資訊物件
export interface ReviewItem {
    status: ReviewStatus;
    product: Product;
    models: Map<number, ReviewModel>;    
}
// 審稿狀態
export interface ReviewStatus {
    reviewId: string;
    numberOfModels: number;
    modelIds: Array<string>;
    numberOfFiles: number;
    uploadFileStatuses: Array<UploadFileStatus>;
    progress: ReviewingProgress;
}
// 登記審稿資訊
export interface ReviewRegistrationInfo {
    numberOfModels: number;
    product: Product;
}

/**
 * @enum
 */
// 審稿狀態
export const REVIEWING_PROGRESS = [
    "REGISTERED", // '已登記審稿，但還沒開始上傳檔案',
    "UPLOADING", // '已經開始上傳檔案，但還有檔案沒上傳完畢',
    "GENERATING_PREVIEW_PAGES", // '所有檔案都上傳完畢，但還有檔案預覽圖在生成中',
    "WAITING_PRINTABLE_REVIEW", // '預覽圖都生成完畢，但使用者還在確認排版',
    "GENERATING_PRINTABLE_REVIEWED_PAGES", // '使用者已確認排版，但還有印刷檔在生成中',
    "WAITING_FOR_USER_CHECK", // '印刷檔都生成完畢，但使用者還沒確認最終結果',
    "FINISHED", // '使用者審稿完畢'
] as const;
export type ReviewingProgress = typeof REVIEWING_PROGRESS[number];

// 審稿頁與框的配對
export interface ReviewModel {
    readonly modelIndexInReviewItem: number;
    framedPages: Map<string, FramedPage>;
}
// 審稿頁與框的資訊
export interface FramedPage {
    sourcePageImageFileId?: string;
    sourcePagePrintableFileId?: string;
    resultingImageFileId?: string;
    resultingPrintableFileId?: string;
    pageIndex: string; 
    positionX?: number;
    positionY?: number;
    scaleX?: number;
    scaleY?: number;
    rotationDegree?: number;
}

/**
 * @enum
 */
// 上傳檔案的狀態
export const UPLOAD_FILE_PROCESSING_STAGES = [
    "UPLOAD",                     // 已登記上傳檔案，但檔案還沒上傳完
    "GENERATING_PRINTABLE_PAGES",   // 已收到上傳檔，但正在生成每一頁單獨的PDF和JPEG
    "FINISHED"                    // 處理完畢
] as const;

export type UploadFileProcessingStage = typeof UPLOAD_FILE_PROCESSING_STAGES[number];
// 上傳檔案的資訊
export interface UploadFileStatus {
    fileName: string;
    fileId: string;
    currentStage: UploadFileProcessingStage;
    hasError: boolean;
    numberOfPages?: number;
    fileAddress?: string;
    previewPagesAddress?: Array<string>;
    printablePagesAddress?: Array<string>;
    errorStage?: UploadFileProcessingStage;   
}
