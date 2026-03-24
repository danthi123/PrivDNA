import nodemailer from "nodemailer";
import type { Transporter } from "nodemailer";

let transporter: Transporter | null = null;

function getTransporter(): Transporter {
  if (transporter) return transporter;

  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const secure = process.env.SMTP_SECURE === "true";

  if (!host || !user || !pass) {
    throw new Error("SMTP_HOST, SMTP_USER, and SMTP_PASS environment variables are required");
  }

  transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
    tls: {
      // Set SMTP_REJECT_UNAUTHORIZED=false ONLY for localhost Proton Mail Bridge
      // with self-signed certs. In production with smtp.protonmail.ch, keep true.
      rejectUnauthorized: process.env.SMTP_REJECT_UNAUTHORIZED !== "false",
    },
  });

  return transporter;
}

export async function sendEmail(
  to: string,
  subject: string,
  html: string,
  text: string,
  unsubscribeUrl?: string
): Promise<void> {
  const from = process.env.SMTP_FROM;
  if (!from) {
    throw new Error("SMTP_FROM environment variable is required");
  }

  const headers: Record<string, string> = {};
  if (unsubscribeUrl) {
    headers["List-Unsubscribe"] = `<${unsubscribeUrl}>`;
    headers["List-Unsubscribe-Post"] = "List-Unsubscribe=One-Click";
  }

  try {
    await getTransporter().sendMail({
      from,
      to,
      subject,
      html,
      text,
      headers,
    });
  } catch (err) {
    // Reset transporter on auth/connection errors so next attempt creates a fresh connection
    transporter = null;
    throw err;
  }
}

export function isMailerConfigured(): boolean {
  return !!(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS && process.env.SMTP_FROM);
}
