import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
console.log(name, email, message);

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Configure nodemailer transport
    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can change this or use host/port for other providers
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      // If you are having issues with Gmail, you might need to enable less secure apps
      // or preferably use an App Password.
    });

    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      replyTo: email, // So you can reply directly to the sender
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    };

    // Auto-reply for the user
    const userMailOptions = {
      from: `"Shuaib Khan" <${process.env.EMAIL_USER}>`,
      to: email, // Send to the user who submitted the form
      subject: `Thank you for reaching out, ${name}!`,
      text: `Hi ${name},\n\nThank you for reaching out! I have received your message and will get back to you as soon as possible.\n\nHere is a copy of your message:\n${message}\n\nBest regards,\nShuaib Khan`,
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>Thank you for your message!</h2>
          <p>Hi ${name},</p>
          <p>I have received your message and will get back to you as soon as possible.</p>
          <br />
          <p><strong>Your Message:</strong></p>
          <blockquote style="border-left: 4px solid #ccc; padding-left: 10px; color: #666; white-space: pre-wrap;">${message}</blockquote>
          <br />
          <p>Best regards,</p>
          <p><strong>Shuaib Khan</strong></p>
        </div>
      `,
    };

    // Send both emails simultaneously
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions)
    ]);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
