import { z } from "zod";
import { fromZodError } from "zod-validation-error";

export async function validate<T>(data: T, schema: z.ZodSchema) {
    const result = await schema.safeParseAsync(data);

    if (result.success) {
        return {
            success: true,
            data: result.data,
        };
    }

    const error = fromZodError(result.error, {
        prefix: null,
        issueSeparator: " | ",
        maxIssuesInMessage: 1,
    });

    return {
        success: false,
        error: {
            message: error.message,
            details: result.error.errors.map((err) => err.message),
        },
    };
}
