

/** ============ 通訊錯誤 ============ */
export interface TransactionError extends Error {
    failureType: FailureType;
}

/** ============ 錯誤類型 ============ */
export enum FailureType {
    CONNECTION_FAILURE = "連線錯誤",
    PRECONDITION_FAILURE = "前置條件不符",
    POSTCONDITION_FAILURE = "後置條件無法完成",
    UNDEFINED_FAILURE = "未能歸類為以上三種"
}

/** ============ 通訊格式 ============ */
export interface TransactionResponse<T> {
    isFinished: boolean;
    error?: TransactionError;
    data: T;
}
