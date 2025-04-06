import { Content } from "mailgen";

export const generateEmailVerificationContent = (
    username: string,
    verficationUrl: string,
): Content => {
    return {
        body: {
            name: username,
            intro: "Welcome to Project Zen! We're very excited to have you on board.",
            action: {
                instructions:
                    "To get started with Project Zen, please verify your email:",
                button: {
                    color: "#22BC66",
                    text: "Verify your email",
                    link: verficationUrl,
                },
            },
            outro: "Need help, or have questions? Just reply to this email, we'd love to help.",
        },
    };
};
