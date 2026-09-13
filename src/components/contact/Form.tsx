"use client";
import { FormEvent, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { contactSchema } from "@/lib/contact";
const emptyForm = { sender: "", email: "", subject: "", message: "" };
export default function Form() {
  const [form, setForm] = useState(emptyForm);
  const [sending, setSending] = useState(false);
  const inFlight = useRef(false);
  const [result, setResult] = useState<{ ok: boolean; message: string } | null>(
    null,
  );
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inFlight.current) return;
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      setResult({ ok: false, message: parsed.error.issues[0].message });
      return;
    }
    inFlight.current = true;
    setSending(true);
    setResult(null);
    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const data = await response.json();
      if (!response.ok)
        throw new Error(
          data.message ||
            "Unable to send your message. Please try emailing me directly.",
        );
      setResult({ ok: true, message: data.message });
      setForm(emptyForm);
    } catch (error) {
      setResult({
        ok: false,
        message:
          error instanceof Error
            ? error.message
            : "Unable to send your message. Please try emailing me directly.",
      });
    } finally {
      inFlight.current = false;
      setSending(false);
    }
  }
  return (
    <form onSubmit={submit} className="contact-form" aria-busy={sending}>
      <div className="form-heading">
        <h2>Send a message</h2>
        <span className="small-note">All fields are required</span>
      </div>
      {(["sender", "email", "subject"] as const).map((field) => (
        <div className="form-field" key={field}>
          <label htmlFor={field}>
            {field === "sender"
              ? "Your name"
              : field === "email"
                ? "Email address"
                : "Subject"}
          </label>
          <input
            id={field}
            name={field}
            type={field === "email" ? "email" : "text"}
            autoComplete={
              field === "sender"
                ? "name"
                : field === "email"
                  ? "email"
                  : undefined
            }
            maxLength={field === "email" ? 254 : field === "sender" ? 100 : 200}
            required
            disabled={sending}
            value={form[field]}
            onChange={(event) =>
              setForm({ ...form, [field]: event.target.value })
            }
            placeholder={
              field === "sender"
                ? "Your full name"
                : field === "email"
                  ? "you@example.com"
                  : "What would you like to discuss?"
            }
          />
        </div>
      ))}
      <div className="form-field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          maxLength={5000}
          required
          disabled={sending}
          value={form.message}
          onChange={(event) =>
            setForm({ ...form, message: event.target.value })
          }
          placeholder="Tell me a little about your idea or opportunity…"
        />
      </div>
      <button type="submit" className="action-button" disabled={sending}>
        {sending ? "Sending…" : "Send message"}
        <ArrowUpRight size={17} />
      </button>
      {result && (
        <p
          role={result.ok ? "status" : "alert"}
          className={`form-result ${result.ok ? "success" : "error"}`}
        >
          {result.message}
        </p>
      )}
    </form>
  );
}
