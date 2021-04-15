
export interface RegisterRequestBody {
    reviewRegistrationInfoJson: string;
}
export interface RegisterSuccessResponseBody {
    isSuccess: true;
    reviewId: string;
}
export interface RegisterErrorResponseBody {
    isSuccess: false;
    error?: any;
}
export type RegisterResponseBody
    = RegisterSuccessResponseBody
    | RegisterErrorResponseBody

export interface UpdateReviewModelRequestBody {
    reviewModelInJson: string;
}
export interface UploadSuccessResponseBody {
    isSuccess: true;
    reviewStatusInJson: string;
}
export interface UploadErrorResponseBody {
    isSuccess: false;
    error?: any;
}
export type UploadResponseBody
    = UploadSuccessResponseBody
    | UploadErrorResponseBody;

export interface LoadReviewStatusRequestBody {
    reviewId: string;
}
interface UpdateReviewModelSuccessResponseBody {
    isSuccess: true;
}
interface UpdateReviewModelErrorResponseBody {
    isSuccess: false;
    error?: any;
}
export type UpdateReviewModelResponseBody
    = UpdateReviewModelSuccessResponseBody
    | UpdateReviewModelErrorResponseBody;

export interface LoadReviewStatusRequestBody {
    reviewId: string;
}
interface LoadReviewStatusSuccessResponseBody {
    isSuccess: true;
    reviewStatusInJson: string;
}
interface LoadReviewStatusErrorResponseBody {
    isSuccess: false;
    error?: any;
}
export type LoadReviewStatusResponseBody
    = LoadReviewStatusSuccessResponseBody
    | LoadReviewStatusErrorResponseBody;

export interface LoadReviewItemRequestBody {
    reviewId: string;
}
interface LoadReviewItemSuccessResponseBody {
    isSuccess: true;
    reviewItemInJson: string;
}
interface LoadReviewItemErrorResponseBody {
    isSuccess: false;
    error?: any;
}
export type LoadReviewItemResponseBody
    = LoadReviewItemSuccessResponseBody
    | LoadReviewItemErrorResponseBody;

export interface GenerateFinalResultsRequestBody {
    reviewItemInJson: string;
}

interface GenerateFinalResultsSuccessResponseBody {
    isSuccess: true;
}
interface GenerateFinalResultsErrorResponseBody {
    isSuccess: false;
    error?: any;
}

export type GenerateFinalResultsResponseBody
    = GenerateFinalResultsSuccessResponseBody
    | GenerateFinalResultsErrorResponseBody;


/** ⬇️跟轉檔主機之間的API's ======================================================== */

export interface EditPdfRequestBody {
    tasks: Array<{
        taskToken: string;
        timeStamp: Date;
        maxWidth: number;
        maxHeight: number;
        sourceFiles: Array<{
            originalFileUploadToken: string;        // 上傳的時候是哪個檔案
            originalPageNumberWhenUpload: number;   // 上傳的時候是第幾頁
            transformation: {
                positionX: number;
                positionY: number;
                scaleX: number;
                scaleY: number;
                rotationDegree: number;
            };
        }>;
    }>;
    reportUrl: string;
}

export interface EditPdfSuccessResponseBody {
    taskToken: string;
    timeStamp: Date;
    hasError: false;
}
export interface EditPdfErrorResponseBody {
    taskToken: string;
    timeStamp: Date;
    hasError: true;
    message?: string;
}
export type EditPdfResponseBody = EditPdfSuccessResponseBody | EditPdfErrorResponseBody;

interface EditPdfSuccessfulReport {
    taskToken: string;
    timeStamp: Date;
    resultingFileToken: string;
    hasError: false;
}

interface EditPdfErrorReport {
    taskToken: string;
    timeStamp: Date;
    hasError: true;
    message?: any;
}

type EditPdfReport = EditPdfSuccessfulReport | EditPdfErrorReport;

export interface ReportEditPdfRequestBody {
    reports: Array<EditPdfReport>;
}



export interface MergeFilesRequestBody {
    sourceFilePdfTokens: Array<string>;
    taskToken: string;
    timeStamp: Date;
    reportUrl: string;
}

export interface MergeFilesSuccessResponseBody {
    taskToken: string;
    timeStamp: Date;
    hasError: false;
}

export interface MergeFilesErrorResponseBody {
    taskToken: string;
    timeStamp: Date;
    hasError: true;
    message?: any;
}

export type MergeFilesResponseBody
    = MergeFilesSuccessResponseBody
    | MergeFilesErrorResponseBody;

export interface ReportMergeFilesErrorRequestBody {
    taskToken: string;
    timeStamp: Date;
    hasError: true;
    message: string;
}

export interface ReportMergeFilesSuccessRequestBody {
    taskToken: string;
    timeStamp: Date;
    hasError: false;
    resultingPdfToken: string;
    resultingPdfUrl: string;
}

export type ReportMergeFilesRequestBody
    = ReportMergeFilesSuccessRequestBody
    | ReportMergeFilesErrorRequestBody;


export interface MoveFileRequestBody {
    taskToken: string;
    timeStamp: Date;
    sourceFileTokens: Array<string>;
    zip: boolean;
    targetPath: string;
    reportUrl: string;
}

export interface MoveFileSuccessResponseBody {
    taskToken: string;
    timeStamp: Date;
    hasError: false;
}

export interface MoveFileErrorResponseBody {
    taskToken: string;
    timeStamp: Date;
    hasError: true;
    message?: any;
}

export type MoveFileResponseBody = MoveFileSuccessResponseBody | MoveFileErrorResponseBody;

export interface ReportMoveFileSuccessRequestBody {
    taskToken: string;
    timeStamp: Date;
    hasError: false;
}

export interface ReportMoveFileErrorRequestBody {
    taskToken: string;
    timeStamp: Date;
    hasError: true;
    message?: any;
}

export type ReportMoveFileRequestBody
    = ReportMoveFileSuccessRequestBody
    | ReportMoveFileErrorRequestBody