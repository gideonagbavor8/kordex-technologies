import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { site } from '@/lib/site';

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Sender address.
 *
 * `onboarding@resend.dev` is Resend's sandbox sender. It is free and needs no
 * domain, but it can ONLY deliver to the address that owns the Resend account.
 * That is fine for lead notifications (they go to us) and impossible for the
 * prospect auto-reply (that goes to a stranger).
 *
 * Resend's free tier covers 3,000 emails/month and domain verification costs
 * nothing — so the auto-reply switches itself on as soon as you own a domain
 * and set CONTACT_FROM, e.g. "Kordex Technologies <hello@kordex.tech>".
 */
const SANDBOX_SENDER = 'onboarding@resend.dev';
const FROM = process.env.CONTACT_FROM ?? `Kordex Technologies <${SANDBOX_SENDER}>`;

/** Where new leads land. Set CONTACT_TO to your business inbox. */
const TO = process.env.CONTACT_TO ?? site.email;

/**
 * Auto-replies are only attempted from a verified domain. On the sandbox
 * sender they would fail for every prospect, so we skip them rather than
 * generate guaranteed errors — and the UI tells the visitor the truth either way.
 */
const canAutoReply = !FROM.includes(SANDBOX_SENDER);

/** Escape user input before interpolating it into email HTML. */
function escapeHtml(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, organisation, service, budget, description } = body;

    if (!firstName || !lastName || !email || !service || !budget || !description) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email))) {
      return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 });
    }

    const safe = {
      firstName: escapeHtml(firstName),
      lastName: escapeHtml(lastName),
      email: escapeHtml(email),
      // Optional — schools often leave it blank on a first enquiry.
      organisation: escapeHtml(organisation) || '—',
      service: escapeHtml(service),
      budget: escapeHtml(budget),
      description: escapeHtml(description).replace(/\n/g, '<br />'),
    };

    // 1. Notify us. This one must succeed — it is the actual lead.
    const { data, error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: String(email),
      subject: `New project inquiry from ${safe.firstName} ${safe.lastName} — ${safe.service}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1E6FD9;">New Contact Form Submission</h2>
          <hr style="border-color: #1E6FD9; opacity: 0.3;" />
          <p><strong>Name:</strong> ${safe.firstName} ${safe.lastName}</p>
          <p><strong>Email:</strong> <a href="mailto:${safe.email}">${safe.email}</a></p>
          <p><strong>School / organisation:</strong> ${safe.organisation}</p>
          <p><strong>Service:</strong> ${safe.service}</p>
          <p><strong>Budget:</strong> ${safe.budget}</p>
          <p><strong>Message:</strong></p>
          <p style="background: #f5f5f5; padding: 1rem; border-radius: 6px;">${safe.description}</p>
          <hr style="border-color: #1E6FD9; opacity: 0.3;" />
          <p style="color: #888; font-size: 12px;">Sent via Kordex Technologies contact form</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error (lead notification):', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // 2. Auto-reply to the prospect. Best-effort: a failure here must never make
    // the visitor think their message was lost, since we already have the lead.
    let confirmationSent = false;

    if (canAutoReply) {
      try {
        const { error: replyError } = await resend.emails.send({
          from: FROM,
          to: String(email),
          replyTo: site.email,
          subject: 'Thanks for reaching out to Kordex Technologies',
          html: autoReplyHtml(safe.firstName, safe.service),
        });

        if (replyError) {
          console.error('Resend error (auto-reply):', replyError);
        } else {
          confirmationSent = true;
        }
      } catch (replyError) {
        console.error('Auto-reply threw:', replyError);
      }
    }

    return NextResponse.json({ success: true, confirmationSent, data }, { status: 200 });
  } catch (error) {
    console.error('Contact route error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

function autoReplyHtml(firstName: string, service: string) {
  const whatsappRow = site.whatsapp
    ? `<p style="margin: 0 0 8px;">WhatsApp: <a href="https://wa.me/${site.whatsapp}" style="color: #1E6FD9;">+${site.whatsapp}</a></p>`
    : '';

  return `
  <div style="font-family: -apple-system, Segoe UI, sans-serif; max-width: 600px; margin: 0 auto; color: #1a2438;">
    <div style="background: #0A1628; padding: 28px 32px; border-radius: 10px 10px 0 0;">
      <span style="color: #ffffff; font-size: 18px; font-weight: 600;">Kordex</span>
      <span style="color: #4A9FFF; font-size: 18px; font-weight: 600;"> Technologies</span>
    </div>

    <div style="border: 1px solid #e3e8ef; border-top: none; border-radius: 0 0 10px 10px; padding: 32px;">
      <p style="font-size: 16px; margin: 0 0 16px;">Hi ${firstName},</p>

      <p style="line-height: 1.6; margin: 0 0 16px;">
        Thanks for getting in touch about <strong>${service}</strong>. Your message has
        reached us and we'll reply personally within 24 hours — usually much sooner.
      </p>

      <p style="line-height: 1.6; margin: 0 0 24px;">
        In the meantime, here is what happens next:
      </p>

      <ol style="line-height: 1.8; margin: 0 0 24px; padding-left: 20px;">
        <li>We review your project details.</li>
        <li>We send you a few questions, or book a short call if that's easier.</li>
        <li>You get a written proposal with clear scope, timeline and price.</li>
      </ol>

      <p style="line-height: 1.6; margin: 0 0 8px;">
        If it's urgent, reach us directly:
      </p>
      ${whatsappRow}
      <p style="margin: 0 0 24px;">Email: <a href="mailto:${site.email}" style="color: #1E6FD9;">${site.email}</a></p>

      <p style="line-height: 1.6; margin: 0 0 4px;">Talk soon,</p>
      <p style="margin: 0; font-weight: 600;">Gideon Agbavor</p>
      <p style="margin: 0; color: #6b7a90; font-size: 14px;">Founder, Kordex Technologies</p>

      <hr style="border: none; border-top: 1px solid #e3e8ef; margin: 28px 0 16px;" />
      <p style="color: #8a97a8; font-size: 12px; margin: 0;">
        You're receiving this because you submitted the contact form at
        <a href="${site.url}" style="color: #1E6FD9;">${site.url.replace(/^https?:\/\//, '')}</a>.
      </p>
    </div>
  </div>`;
}
