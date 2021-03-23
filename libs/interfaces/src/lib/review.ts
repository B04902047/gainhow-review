import { Product } from './product'

/** ============ 審稿 ============ */
// 審稿資訊物件
export interface ReviewItem {
    status?: ReviewStatus;
    product: Product;
    models: Array<ReviewModel>;    
}
// 審稿狀態
export interface ReviewStatus {
    numberOfModels: number;
    numberOfFiles: number;
    uploadFileStatuses?: Array<UploadFileStatus>;
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
    "REGISTERED",                  // '已登記審稿',
    // "UPLOADING",                // '已經開始上傳檔案，但還有檔案沒上傳完畢',
    // "GENERATING_PREVIEW_PAGES", // '所有檔案都上傳完畢，但還有檔案預覽圖在生成中',
    // "WAITING_PRINTABLE_REVIEW", // '預覽圖都生成完畢，但使用者還在確認排版',
    "REVIEWED",
    // "GENERATING_PRINTABLE_REVIEWED_PAGES", // '使用者已確認排版，但還有印刷檔在生成中',
    // "WAITING_FOR_USER_CHECK", // '印刷檔都生成完畢，但使用者還沒確認最終結果',
    "FINISHED", // '使用者審稿完畢'
] as const;
export type ReviewingProgress = typeof REVIEWING_PROGRESS[number];

// 審稿頁與框的配對
export interface ReviewModel {
    readonly modelName: string;
    framedPages: Array<FramedPage>;
}
// 審稿頁與框的資訊
export interface FramedPage {
    frameName: string;
    sourcePageJpegUrl?: string;
    sourcePagePdfUrl?: string;
    resultingJpegUrl?: string;
    resultingPdfUrl?: string;
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
    "UPLOADING",                     // 已登記上傳檔案，但檔案還沒上傳完
    "GENERATING_PRINTABLE_PAGES",   // 已收到上傳檔，但正在生成每一頁單獨的PDF和JPEG
    "FINISHED"                    // 處理完畢
] as const;

export type UploadFileProcessingStage = typeof UPLOAD_FILE_PROCESSING_STAGES[number];
// 上傳檔案的資訊
export interface UploadFileStatus {
    fileName: string;
    uploadToken?: string;
    currentStage: UploadFileProcessingStage;
    hasError: boolean;
    numberOfPages?: number;
    fileAddress?: string;
    pageInfos?: Array<UploadFilePageInfo>;
    errorStage?: UploadFileProcessingStage;   
}

export interface UploadFilePageInfo {
    pdfTokenInFileConvertingServer: string;
    jpegUrl: string;
    heightInMm: number;
    widthInMm: number;
}