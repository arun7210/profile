import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Define the shape of the data you expect from the frontend
interface ContactFormData {
  name: string;
  email: string;
  phone?: string; // Optional if not strictly required
  details: string;
}

export async function POST(req: Request) {
  try {
    // 1. Parse the form data and cast it to our Interface
    const body = await req.json() as ContactFormData;
    const { name, email, phone, details } = body;

    // 2. Validate essential fields
    if (!name || !email || !details) {
      return NextResponse.json(
        { message: 'Missing required fields' }, 
        { status: 400 }
      );
    }

    // 3. Configure the Transporter (SMTP connection)
    // Note: process.env variables are strings by default, so we wrap the port in Number()
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT), // Cast string to number
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // 4. Configure the Email Options
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

    // 5. Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' }, 
      { status: 200 }
    );

  } catch (error) {
    console.error('Email Error:', error);
    return NextResponse.json(
      { message: 'Failed to send email' }, 
      { status: 500 }
    );
  }
}