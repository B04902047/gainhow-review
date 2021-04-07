
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

interface EditPdfRequestBody {
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

export interface EditPdfNotFinishedYetResponseBody {
    isFinished: false;
    hasError: false;
    resultingTokens: Array<string>;
}

export interface EditPdfFinishedResponseBody {
    isFinished: true;
    hasError: false;
}

export interface EditPdfErrorResponseBody {
    isFinished: false;
    hasError: true;
    error: any;
}

export type EditPdfResponseBody
    = EditPdfFinishedResponseBody
    | EditPdfNotFinishedYetResponseBody
    | EditPdfErrorResponseBody;