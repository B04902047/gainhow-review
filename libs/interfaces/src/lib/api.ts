
export interface RegisterRequestBody {
    reviewRegistrationInfoJson: string;
}

export interface RegisterSuccessResponse {
    isSuccess: true;
    reviewId: string;
}

export interface RegisterErrorResponse {
    isSuccess: false;
    error?: any;
}

export type RegisterResponseBody = RegisterSuccessResponse | RegisterErrorResponse