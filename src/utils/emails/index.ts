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
            link: "https://mailgen.js/",
        },
    });

    const emailText = mailGenerator.generatePlaintext(content);
    const emailHTML = mailGenerator.generate(content);

    const transporter = nodemailer.createTransport({
        host: process.env.MailTRAP_SMPT_HOST,
        port: Number(process.env.port),
        secure: false, // true for port 465
        auth: {
            user: process.env.MailTRAP_SMPT_USER,
            pass: process.env.MailTRAP_SMPT_PASS,
        },
    });
    try {
        await transporter.sendMail({
            from: "hello@projectzen.com",
            to: email,
            subject: subject,
            text: emailText,
            html: emailHTML,
        });
    } catch (error) {
        Logger.error(`${error}`, "Email");
    }
};
