// import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

// Initialize Resend client
// const resend = new Resend(process.env.RESEND_API_KEY);

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate field lengths
    if (name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Name must be at least 2 characters' },
        { status: 400 }
      );
    }

    if (message.trim().length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters' },
        { status: 400 }
      );
    }

    // Get the recipient email from environment variable or use default
    // const recipientEmail = process.env.CONTACT_EMAIL || 'sharifparish4@gmail.com';
    // const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

    // TODO: Uncomment when ready to implement Resend email service
    // Send email using Resend
    // const { data, error } = await resend.emails.send({
    //   from: fromEmail,
    //   to: recipientEmail,
    //   replyTo: email,
    //   subject: `New Contact Form Submission from ${name}`,
    //   html: `
    //     <!DOCTYPE html>
    //     <html>
    //       <head>
    //         <meta charset="utf-8">
    //         <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //         <title>New Contact Form Submission</title>
    //       </head>
    //       <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
    //         <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 8px 8px 0 0; color: white;">
    //           <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
    //         </div>
    //         <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb;">
    //           <div style="margin-bottom: 20px;">
    //             <strong style="display: block; margin-bottom: 5px; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Name</strong>
    //             <p style="margin: 0; font-size: 16px; color: #111827;">${name}</p>
    //           </div>
    //           <div style="margin-bottom: 20px;">
    //             <strong style="display: block; margin-bottom: 5px; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Email</strong>
    //             <p style="margin: 0; font-size: 16px; color: #111827;">
    //               <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a>
    //             </p>
    //           </div>
    //           <div style="margin-bottom: 20px;">
    //             <strong style="display: block; margin-bottom: 5px; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Message</strong>
    //             <p style="margin: 0; font-size: 16px; color: #111827; white-space: pre-wrap;">${message}</p>
    //           </div>
    //         </div>
    //         <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 12px;">
    //           <p style="margin: 0;">This email was sent from your portfolio contact form.</p>
    //         </div>
    //       </body>
    //     </html>
    //   `,
    //   text: `
    // New Contact Form Submission
    //
    // Name: ${name}
    // Email: ${email}
    //
    // Message:
    // ${message}
    //
    // ---
    // This email was sent from your portfolio contact form.
    //   `.trim(),
    // });

    // if (error) {
    //   console.error('Resend error:', error);
    //   return NextResponse.json(
    //     { error: 'Failed to send email. Please try again later.' },
    //     { status: 500 }
    //   );
    // }

    // return NextResponse.json(
    //   { 
    //     success: true, 
    //     message: 'Email sent successfully',
    //     id: data?.id 
    //   },
    //   { status: 200 }
    // );

    // Temporary mock response until Resend is implemented
    console.log('Contact form submission:', { name, email, message });
    return NextResponse.json(
      { 
        success: true, 
        message: 'Form submitted successfully (email service not yet implemented)'
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
