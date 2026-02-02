import nodemailer from "nodemailer";

export const runtime = "nodejs";

const REQUIRED_FIELDS = ["name", "email", "message"];

const sanitizeField = (value) => {
  if (!value) return "";
  return String(value).replace(/[\r\n]+/g, " ").trim();
};

const buildEmailBody = ({ name, email, phone, company, message }) => {
  return [
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    company ? `Company: ${company}` : null,
    "",
    "Message:",
    message,
  ]
    .filter(Boolean)
    .join("\n");
};

export async function POST(request) {
  try {
    const payload = await request.json();
    const data = {
      name: sanitizeField(payload?.name),
      email: sanitizeField(payload?.email),
      phone: sanitizeField(payload?.phone),
      company: sanitizeField(payload?.company),
      message: sanitizeField(payload?.message),
    };

    const missing = REQUIRED_FIELDS.filter((field) => !data[field]);
    if (missing.length > 0) {
      return Response.json(
        { error: `Missing required fields: ${missing.join(", ")}.` },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || "0");
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const mailTo = process.env.MAIL_TO || smtpUser;
    const mailFrom =
      process.env.MAIL_FROM || (smtpUser ? `KaleLift <${smtpUser}>` : "");

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !mailTo || !mailFrom) {
      return Response.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: mailFrom,
      to: mailTo,
      replyTo: data.email,
      subject: `New contact request from ${data.name}`,
      text: buildEmailBody(data),
    });

    return Response.json({
      ok: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    return Response.json(
      { error: "Unable to process the request." },
      { status: 500 }
    );
  }
}
