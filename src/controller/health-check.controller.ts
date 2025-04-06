import { Request, Response } from "express";
import ApiResponse from "../utils/api-response.js";

export const healthCheck = (_: Request, res: Response) => {
    ApiResponse.success(res, {
        statusCode: 200,
        message: "Server is running",
    });
};
