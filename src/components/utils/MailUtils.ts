import nodemailer from "nodemailer";
import type Mail from "nodemailer/lib/mailer";
export async function sendEmail({
  sender,
  receivers,
  subject,
  message,
}: {
  sender: Mail.Address;
  receivers: Mail.Address[];
  subject: string;
  message: string;
}) {
  const port = Number(process.env.MAIL_PORT || 587);
  const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST || "smtp.gmail.com",
    port,
    secure: port === 465,
    requireTLS: port !== 465,
    auth: { user: process.env.GMAIL_USER, pass: process.env.APP_PASS },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  });
  return transport.sendMail({
    from: { name: "Portfolio contact", address: process.env.GMAIL_USER! },
    replyTo: sender,
    to: receivers,
    subject,
    text: `From: ${sender.name} <${sender.address}>\n\n${message}`,
  });
}
