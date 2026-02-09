import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const PORT = Number.parseInt(process.env.CONTACT_API_PORT || '8787', 10);

const requiredEnv = [
  'SMTP_HOST',
  'SMTP_PORT',
  'SMTP_USER',
  'SMTP_PASS',
  'MAIL_FROM',
  'MAIL_TO',
];

function getMissingEnv() {
  return requiredEnv.filter((k) => !process.env[k]);
}

function isValidEmail(value) {
  return typeof value === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function safeText(value, maxLen) {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, maxLen);
}

const app = express();
app.set('trust proxy', 1);
app.use(express.json({ limit: '100kb' }));

// Tiny in-memory rate limiter (per IP)
const hitsByIp = new Map();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;

function checkRateLimit(ip) {
  const now = Date.now();
  const entry = hitsByIp.get(ip) || { count: 0, resetAt: now + WINDOW_MS };
  if (now > entry.resetAt) {
    entry.count = 0;
    entry.resetAt = now + WINDOW_MS;
  }
  entry.count += 1;
  hitsByIp.set(ip, entry);
  return entry.count <= MAX_HITS;
}

app.get('/api/health', (_req, res) => {
  const missing = getMissingEnv();
  res.status(missing.length ? 500 : 200).json({
    ok: missing.length === 0,
    missing,
  });
});

app.post('/api/contact', async (req, res) => {
  const ip = req.ip || req.headers['x-forwarded-for'] || 'unknown';
  if (!checkRateLimit(String(ip))) {
    return res.status(429).json({ success: false, message: 'Too many requests. Please try again later.' });
  }

  // Honeypot (optional)
  if (req.body && typeof req.body.website === 'string' && req.body.website.trim().length > 0) {
    return res.json({ success: true });
  }

  const missing = getMissingEnv();
  if (missing.length) {
    return res.status(500).json({ success: false, message: `Server email not configured: ${missing.join(', ')}` });
  }

  const name = safeText(req.body?.name, 120);
  const email = safeText(req.body?.email, 160);
  const phone = safeText(req.body?.phone, 60);
  const company = safeText(req.body?.company, 120);
  const service = safeText(req.body?.service, 120);
  const message = safeText(req.body?.message, 5000);

  if (!name || !isValidEmail(email) || !message) {
    return res.status(400).json({ success: false, message: 'Invalid form data.' });
  }

  const smtpPort = Number.parseInt(process.env.SMTP_PORT, 10);
  const secure = String(process.env.SMTP_SECURE || '').toLowerCase() === 'true' || smtpPort === 465;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: smtpPort,
    secure,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const from = process.env.MAIL_FROM;
  const to = process.env.MAIL_TO;
  const siteUrl = process.env.PUBLIC_SITE_URL || 'https://thegtservices.com';

  const adminSubject = `New Contact Form Submission — ${name}`;
  const adminText = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    company ? `Company: ${company}` : null,
    service ? `Service: ${service}` : null,
    '',
    'Message:',
    message,
    '',
    `Source: ${siteUrl}`,
  ].filter(Boolean).join('\n');

  const adminHtml = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ''}
    ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ''}
    ${service ? `<p><strong>Service:</strong> ${escapeHtml(service)}</p>` : ''}
    <hr />
    <p><strong>Message:</strong></p>
    <pre style="white-space:pre-wrap; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;">${escapeHtml(message)}</pre>
    <p style="color:#666">Source: ${escapeHtml(siteUrl)}</p>
  `;

  const autoReplySubject = 'We received your message';
  const autoReplyText = [
    `Hi ${name},`,
    '',
    "Thanks for reaching out to GT Services — we’ve received your message.",
    'Our team will review it and get back to you shortly.',
    '',
    'Here’s a copy of what you sent:',
    message,
    '',
    'Warm regards,',
    'GT Services Team',
    siteUrl,
  ].join('\n');

  const autoReplyHtml = `
    <p>Hi ${escapeHtml(name)},</p>
    <p>Thanks for reaching out to <strong>GT Services</strong> — we’ve received your message.</p>
    <p>Our team will review it and get back to you shortly.</p>
    <p><strong>Copy of your message:</strong></p>
    <blockquote style="margin: 0; padding: 12px 16px; border-left: 4px solid #ddd; background: #fafafa;">${escapeHtml(message).replace(/\n/g, '<br/>')}</blockquote>
    <p style="margin-top:16px">Warm regards,<br/>GT Services Team<br/><a href="${escapeHtml(siteUrl)}">${escapeHtml(siteUrl)}</a></p>
  `;

  try {
    await transporter.sendMail({
      from,
      to,
      subject: adminSubject,
      text: adminText,
      html: adminHtml,
      replyTo: email,
    });

    await transporter.sendMail({
      from,
      to: email,
      subject: autoReplySubject,
      text: autoReplyText,
      html: autoReplyHtml,
      replyTo: to,
    });

    return res.json({ success: true });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err instanceof Error ? err.message : 'Failed to send email',
    });
  }
});

function escapeHtml(str) {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

app.listen(PORT, '127.0.0.1', () => {
  console.log(`Contact API listening on http://127.0.0.1:${PORT}`);
});
