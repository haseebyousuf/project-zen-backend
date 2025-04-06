import { Request, Response, NextFunction } from "express";
import ApiResponse from "./api-response.js";

type AsyncRequestHandler = (
    req: Request,
    res: Response,
    next: NextFunction,
) => Promise<any>;

export function asyncHandler(requestHandler: AsyncRequestHandler) {
    return function (req: Request, res: Response, next: NextFunction) {
        Promise.resolve(requestHandler(req, res, next)).catch(function (error) {
            ApiResponse.error(res, error);
        });
    };
}
