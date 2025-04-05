type ErrorResponseParams = {
    statusCode: number;
    message: string;
    errors?: string[];
    stack?: string;
};

class ErrorResponse extends Error {
    statusCode: number;
    success: boolean;
    errors?: string[];
    data: null;
    stack?: string;
    constructor({
        statusCode,
        message = "Something went wrong",
        errors = [],
        stack = "",
    }: ErrorResponseParams) {
        super(message);
        this.statusCode = statusCode;
        this.success = false;
        this.errors = errors;
        this.data = null;

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
export default ErrorResponse;
