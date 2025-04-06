import z from "zod";
import { AvailableUserRoles } from "../utils/constants.js";

const IEmail = z.object({
    email: z
        .string({
            required_error: "Email is required",
            invalid_type_error: "Email must be a string",
        })
        .email("Invalid email address")
        .trim()
        .toLowerCase(),
});

const IPassword = z.object({
    password: z
        .string({
            required_error: "Password is required",
            invalid_type_error: "Password must be a string",
        })
        .min(8, "Password must be at least 8 characters long")
        .trim(),
});

const IUsername = z.object({
    username: z
        .string({
            required_error: "Username is required",
            invalid_type_error: "Username must be a string",
        })
        .trim()
        .min(4, "Username must be at least 4 characters long"),
});

const ILogin = z
    .object({
        credential: z
            .string({
                required_error: "Email or username is required",
                invalid_type_error: "Email or username must be a string",
            })
            .trim(),
    })
    .merge(IPassword);

const IRegister = IEmail.merge(IUsername)
    .merge(IPassword)
    .merge(
        z.object({
            role: z.enum(AvailableUserRoles as [string, ...string[]], {
                required_error: "Role is required",
                invalid_type_error: "Invalid role",
            }),
        }),
    );

export { IEmail, IPassword, ILogin, IRegister };
