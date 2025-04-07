import Mailgen, { Content } from "mailgen";
import nodemailer from "nodemailer";
import Logger from "../logger.js";

export const sendMail = async ({
    email,
    subject,
    content,
}: {
    email: string;
    subject: string;
    content: Content;
}) => {
    const mailGenerator = new Mailgen({
        theme: "default",
        product: {
            name: "Project Zen",
            link: "https://projectzen.com/",
        },
    });

    const emailText = mailGenerator.generatePlaintext(content);
    const emailHTML = mailGenerator.generate(content);

    const transporter = nodemailer.createTransport({
        host: process.env.MAILTRAIP_SMPT_HOST!,
        port: Number(process.env.MAILTRAIP_SMPT_PORT),
        secure: false, // true for port 465
        auth: {
            user: process.env.MAILTRAIP_SMPT_USER,
            pass: process.env.MAILTRAIP_SMPT_PASS,
        },
    });
    try {
        await transporter.verify();
        Logger.info("SMTP connection verified successfully");
        await transporter.sendMail({
            from: `"Project Zen" <${process.env.EMAIL}>`,
            to: email,
            subject: subject,
            text: emailText,
            html: emailHTML,
        });
        Logger.info(`Email sent successfully`);
    } catch (error) {
        Logger.error(
            `Failed to send email: ${error instanceof Error ? error.message : "Unknown error"}`,
        );
        throw new Error(
            `Email sending failed: ${error instanceof Error ? error.message : "Unknown error"}`,
        );
    } finally {
        transporter.close();
    }
};
