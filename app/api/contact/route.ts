import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, service, budget, description } = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'gideonagbavor8@gmail.com',
      subject: `New project inquiry from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1E6FD9;">New Contact Form Submission</h2>
          <hr style="border-color: #1E6FD9; opacity: 0.3;" />
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Budget:</strong> ${budget}</p>
          <p><strong>Message:</strong></p>
          <p style="background: #f5f5f5; padding: 1rem; border-radius: 6px;">${description}</p>
          <hr style="border-color: #1E6FD9; opacity: 0.3;" />
          <p style="color: #888; font-size: 12px;">Sent via Kordex Technologies contact form</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });

  } catch (error) {
    console.error('Contact route error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}