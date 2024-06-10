import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import Mail from 'nodemailer/lib/mailer';

const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: parseInt(process.env.MAIL_PORT!, 10),
    secure: false, // use TLS
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    },
    tls: {
        rejectUnauthorized: false, // Allow self-signed certificates
    },
} as SMTPTransport.Options);

type SendEmailDto = {
    sender: Mail.Address;
    receiver: Mail.Address;
    subject: string;
    message: string;
}

export const sendEmail = async (dto: SendEmailDto) => {
    const { sender, receiver, subject, message } = dto;

    return await transport.sendMail({
        from: sender,
        to: receiver,
        subject: subject,
        html: message,
        text: message,
    });
}
