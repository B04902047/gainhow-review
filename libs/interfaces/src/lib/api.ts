
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