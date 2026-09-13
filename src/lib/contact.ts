import { z } from "zod";
const singleLine = (label: string, max: number) =>
  z
    .string()
    .trim()
    .min(1, `${label} is required.`)
    .max(max, `${label} is too long.`)
    .regex(/^[^\r\n]+$/, `${label} must be a single line.`);
export const contactSchema = z.object({
  sender: singleLine("Name", 100),
  email: z
    .string()
    .trim()
    .max(254)
    .email("Please enter a valid email address."),
  subject: singleLine("Subject", 200),
  message: z
    .string()
    .trim()
    .min(1, "Message is required.")
    .max(5000, "Please keep your message under 5,000 characters."),
});
