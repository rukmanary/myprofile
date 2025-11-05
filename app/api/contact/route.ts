export const runtime = 'nodejs';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { ok: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      CONTACT_EMAIL_TO,
      CONTACT_EMAIL_FROM,
    } = process.env as Record<string, string | undefined>;

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
      return NextResponse.json(
        { ok: false, error: 'Email service is not configured' },
        { status: 500 }
      );
    }

    const portNum = Number(SMTP_PORT || 587);
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: portNum,
      secure: portNum === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: CONTACT_EMAIL_FROM || SMTP_USER,
      to: CONTACT_EMAIL_TO || SMTP_USER,
      replyTo: email,
      subject: `[Contact] ${subject} — ${name}`,
      text: message,
      html: `<p>${message}</p><hr /><p>From: ${name} &lt;${email}&gt;</p>`,
    });

    return NextResponse.json({ ok: true, id: info.messageId });
  } catch (error) {
    console.error('contact-api-error', error);
    return NextResponse.json(
      { ok: false, error: 'Failed to send email' },
      { status: 500 }
    );
  }
}