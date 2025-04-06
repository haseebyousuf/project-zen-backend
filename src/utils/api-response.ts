import { Response } from "express";
import ErrorResponse from "./error-response.js";
type ApiResponseParams<T> = {
    statusCode: number;
    message?: string;
    data?: T;
};

class ApiResponse {
    static success<T>(
        res: Response,
        { statusCode = 200, message = "Success", data }: ApiResponseParams<T>,
    ) {
        return res.status(statusCode).json({
            success: true,
            message,
            data,
        });
    }
    static error(res: Response, error: unknown) {
        if (error instanceof ErrorResponse) {
            return res.status(error.statusCode).json({
                success: false,
                message: error.message,
                data: null,
                errors: error.errors,
            });
        }

        if (error instanceof Error) {
            return res.status(500).json({
                success: false,
                message: error.message || "Internal Server Error",
                data: null,
                errors: [error.message],
            });
        }
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            data: null,
            errors: ["Unknown error occurred"],
        });
    }
}
export default ApiResponse;
