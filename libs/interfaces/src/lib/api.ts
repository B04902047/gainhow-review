
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

export type RegisterResponseBody = RegisterSuccessResponseBody | RegisterErrorResponseBody

export interface UploadSuccessResponseBody {
    isSuccess: true;
    reviewStatusInJson: string;
}

export interface UploadErrorResponseBody {
    isSuccess: false;
    error?: any;
}

export type UploadResponseBody = UploadSuccessResponseBody | UploadErrorResponseBody

export interface UpdateReviewModelRequestBody {
    reviewModelInJson: string;
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