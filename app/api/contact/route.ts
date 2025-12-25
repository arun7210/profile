// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
// 1. Import the specific type for SMTP transport
import SMTPTransport from 'nodemailer/lib/smtp-transport';

// Define the shape of the form data
interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  details: string;
}

export async function POST(req: Request) {
  try {
    const body = await req.json() as ContactFormData;
    const { name, email, phone, details } = body;

    if (!name || !email || !details) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // 2. Create the transporter with explicit type casting
    // We cast the object to `SMTPTransport.Options` to fix the "No overload matches" error
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT), // Ensure this is a number
      secure: true, 
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    } as SMTPTransport.Options);

    const mailOptions = {
      from: process.env.SMTP_EMAIL,
      to: process.env.TO_EMAIL,
      replyTo: email,
      subject: `New Portfolio Inquiry from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        
        Project Details:
        ${details}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <br/>
        <p><strong>Project Details:</strong></p>
        <p>${details}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });

  } catch (error) {
    console.error('Email Error:', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}