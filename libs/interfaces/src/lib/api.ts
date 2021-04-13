
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


/** ======================================================== */

export interface EditPdfRequestBody {
    tasks: Array<{
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
}

export interface EditPdfSuccessResponseBody {
    hasError: false;
    taskToken: string;
}
export interface EditPdfErrorResponseBody {
    hasError: true;
    message?: string;
}
export type EditPdfResponseBody = EditPdfSuccessResponseBody | EditPdfErrorResponseBody;

export interface CheckEditPdfRequestBody {
    taskToken: string;
}

export interface CheckEditPdfNotFinishedYetResponseBody {
    isFinished: false;
    hasError: false;
}

export interface CheckEditPdfFinishedResponseBody {
    isFinished: true;
    hasError: false;
    resultingTokens: Array<string>;
}

export interface CheckEditPdfErrorResponseBody {
    isFinished: false;
    hasError: true;
    error: any;
}

export type CheckEditPdfResponseBody
    = CheckEditPdfFinishedResponseBody
    | CheckEditPdfNotFinishedYetResponseBody
    | CheckEditPdfErrorResponseBody;

export interface MergeFilesRequestBody {
    sourceFilePdfTokens: Array<string>;
}

export interface MergeFilesSuccessResponseBody {
    hasError: false;
    taskToken: string;
}

export interface MergeFilesErrorResponseBody {
    hasError: true;
    message?: any;
}

export type MergeFilesResponseBody
    = MergeFilesSuccessResponseBody
    | MergeFilesErrorResponseBody;

export interface CheckMergeFilesRequestBody {
    taskToken: string;
}

export interface CkeckMergeFilesErrorResponseBody {
    hasError: true;
    message: string;
}

export interface CkeckMergeFilesNotFinishedYetResponseBody {
    isFinished: false;
    hasError: false;
}

export interface CkeckMergeFilesFinishedResponseBody {
    isFinished: true;
    hasError: false;
    resultingPdfToken: string;
    resultingPdfUrl: string
}

export interface CkeckMergeFilesErrorResponseBody {
    isFinished: false;
    hasError: true;
    error: any;
}

export type CkeckMergeFilesResponseBody
    = CkeckMergeFilesNotFinishedYetResponseBody
    | CkeckMergeFilesFinishedResponseBody
    | CkeckMergeFilesErrorResponseBody;


export interface MoveFileRequestBody {
    sourceFileToken: string;
    targetPath: string;
}

export interface MoveFileSuccessResponseBody {
    hasError: false;
}

export interface MoveFileErrorResponseBody {
    hasError: true;
    message?: any;
}

export type MoveFileResponseBody = MoveFileSuccessResponseBody | MoveFileErrorResponseBody;


// TODO: 搬檔 & 單邊拓模 的API

export interface ReplicateFileForRollStockPrintersRequestBody {
    sourceFileToken: string;
    maxWidth: number;
    productionMessage: string;
}

export interface ReplicateFileForRollStockPrintersSuccessResponseBody {
    hasError: false;
    taskToken: string;
}

export interface ReplicateFileForRollStockPrintersErrorsResponseBody {
    hasError: true;
    message?: any;
}

export interface CheckReplicateFileForRollStockPrintersRequestBody {
    taskToken: string;
}

export interface CheckReplicateFileForRollStockPrintersErrorResponseBody {
    hasError: true;
    isFinished: false;
    message?: any;
}

export interface CheckReplicateFileForRollStockPrintersNotFinishedResponseBody {
    hasError: false;
    isFinished: false;
}

export interface CheckReplicateFileForRollStockPrintersFinishedResponseBody {
    hasError: false;
    isFinished: true;
    resultingPdfToken: string;
}

export type CheckReplicateFileForRollStockPrintersResponseBody
    = CheckReplicateFileForRollStockPrintersErrorResponseBody
    | CheckReplicateFileForRollStockPrintersNotFinishedResponseBody
    | CheckReplicateFileForRollStockPrintersFinishedResponseBody;