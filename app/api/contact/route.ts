import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
  subject: z.string().trim().min(1).max(200),
  message: z.string().trim().min(1).max(5000)
});

function requireEnv(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing environment variable: ${name}`);
  return v;
}

export async function POST(req: Request) {
  try {
    const json = await req.json().catch(() => null);
    const parsed = ContactSchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid request", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = parsed.data;

    const host = requireEnv("SMTP_HOST");
    const port = Number(requireEnv("SMTP_PORT"));
    const user = requireEnv("SMTP_USER");
    const pass = requireEnv("SMTP_PASS");
    const to = process.env.CONTACT_TO_EMAIL || user;

    const secure =
      process.env.SMTP_SECURE === "true" ? true : port === 465 ? true : false;

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass }
    });

    const from =
      process.env.CONTACT_FROM_EMAIL || process.env.SMTP_FROM || user;

    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}\n`,
      html: `<p><b>Name:</b> ${escapeHtml(name)}</p>
<p><b>Email:</b> ${escapeHtml(email)}</p>
<p><b>Subject:</b> ${escapeHtml(subject)}</p>
<p><b>Message:</b><br/>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>`
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

