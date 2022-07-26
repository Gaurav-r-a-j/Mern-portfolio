import { createTransport } from "nodemailer";

export const sendMail = async (text) => {


    const transporter = createTransport({
        // host: process.env.SMTP_HOST,
        // port: process.env.SMTP_PORT,
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,

        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        },
    });

    await transporter.sendMail({
        from: process.env.MY_MAIL,
        to: process.env.MY_MAIL,
        subject: "CONTACT REQUEST FROM PORTFOLIO",
        text,
    });
};
