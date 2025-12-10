import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Build both HTML and text templates for best compatibility
function buildEmailTemplate(name: string, email: string, phone: string, service: string, message: string) {
  const plain = `
Dobrý deň,

prijali ste novú správu odoslanú cez kontaktný formulár na webovej stránke www.CustomDev.sk.

--------------------------------------------------
Detaily správy:
--------------------------------------------------

Meno: ${name}
E-mail odosielateľa: ${email}
Telefón odosielateľa: ${phone}

Služba o ktorú majú záujem: ${service}

Správa:
${message}

--------------------------------------------------
Tento e-mail bol vygenerovaný automaticky.
`;

  const html = `
  <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; padding: 4px;">
    <p>Dobrý deň,</p>

    <p>
      Prijali ste novú správu odoslanú cez kontaktný formulár na webovej stránke
      <a href="https://www.CustomDev.sk" target="_blank" style="color: #007bff;">www.CustomDev.sk</a>.
    </p>

    <hr style="border: none; border-top: 1px solid #bbb; margin: 20px 0;" />
    <h3 style="margin-bottom: 10px;">Detaily správy:</h3>
    <hr style="border: none; border-top: 1px solid #bbb; margin: 20px 0;" />

    <p><strong>Meno:</strong> ${name}</p>
    <p>
      <strong>E-mail odosielateľa:</strong> ${email}<br />
      <strong>Telefón odosielateľa:</strong> ${phone}
    </p>
    <p><strong>Služba o ktorú majú záujem:</strong> ${service}</p>

    <p><strong>Správa:</strong></p>
    <p style="border-radius: 4px; padding: 8px; border: 1px solid #ddd;">
      ${message}
    </p>

    <p style="font-size: 12px; color: #777; padding-top: 8px;">
      Tento e-mail bol vygenerovaný automaticky.
    </p>
  </div>
  `;

  return { plain, html };
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, service, message } = await req.json();

    if (!name || !email) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields (name, email).' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const { plain, html } = buildEmailTemplate(name, email, phone ?? "-", service ?? "-", message ?? "-");

    await transporter.sendMail({
      from: `"Kontakt - CustomDev.sk" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER || process.env.SMTP_USER,
      subject: 'Nová správa z kontaktného formulára',
      text: plain,
      html: html,
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('Email send error:', err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
