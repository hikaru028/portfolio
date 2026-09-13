import type { NextApiRequest, NextApiResponse } from "next";
import { contactSchema } from "@/lib/contact";
import { sendEmail } from "@/components/utils/MailUtils";
export const config = { api: { bodyParser: { sizeLimit: "16kb" } } };
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method not allowed." });
  }
  const parsed = contactSchema.safeParse(req.body);
  if (!parsed.success)
    return res.status(400).json({ message: parsed.error.issues[0].message });
  if (!process.env.GMAIL_USER || !process.env.APP_PASS || !process.env.EMAIL)
    return res
      .status(503)
      .json({
        message:
          "The contact form is temporarily unavailable. Please email me directly.",
      });
  try {
    await sendEmail({
      sender: { name: parsed.data.sender, address: parsed.data.email },
      receivers: [
        {
          name: process.env.OWNER || "Hikaru Suzuki",
          address: process.env.EMAIL,
        },
      ],
      subject: parsed.data.subject,
      message: parsed.data.message,
    });
    return res
      .status(200)
      .json({
        message: "Thanks for reaching out! Your message has been sent.",
      });
  } catch {
    return res
      .status(500)
      .json({
        message:
          "Unable to send your message. Please try emailing me directly.",
      });
  }
}
