import ApiResponse from "../utils/api-response.js";
import { asyncHandler } from "../utils/async-handler.js";
import ErrorResponse from "../utils/error-response.js";
import { IRegister } from "../validators/auth.validator.js";
import { validate } from "../validators/index.js";

export const registerUser = asyncHandler(async (req, res) => {
    const isValid = await validate(req.body, IRegister);

    if (!isValid.success) {
        throw new ErrorResponse({
            statusCode: 422,
            errors: isValid.error?.details,
            message: "User Registar validation failed",
        });
    }
    ApiResponse.success(res, { statusCode: 200, message: "User Created" });
});
