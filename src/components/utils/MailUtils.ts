import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import Mail from 'nodemailer/lib/mailer';

const transport = nodemailer.createTransport({
    service: "gmail",
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT || 587,
    secure: false,
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.APP_PASS,
    },
    tls: {
        rejectUnauthorized: false, // Allow self-signed certificates
    },
} as SMTPTransport.Options);

export const sendEmail = async (dto: SendEmailDto) => {
    const { sender, receivers, subject, message } = dto;
    
    return await transport.sendMail({
        from: sender,
        to: receivers,
        subject: subject,
        html: message,
        text: message,
    });
}

type SendEmailDto = {
    sender: Mail.Address;
    receivers: Mail.Address[];
    subject: string;
    message: string;
}
