// app/api/contact/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    // 1. Parse the form data
    const { name, email, phone, details } = await req.json();

    // 2. Validate essential fields
    if (!name || !email || !details) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // 3. Configure the Transporter (SMTP connection)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true, // true for port 465, false for other ports
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // 4. Configure the Email Options
    const mailOptions = {
      from: process.env.SMTP_EMAIL, // Sender address (must be same as auth user)
      to: process.env.TO_EMAIL,   // Receive the email in your own inbox
      replyTo: email,               // When you hit reply, it goes to the user
      subject: `New Portfolio Inquiry from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        
        Project Details:
        ${details}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <br/>
        <p><strong>Project Details:</strong></p>
        <p>${details}</p>
      `,
    };

    // 5. Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });

  } catch (error) {
    console.error('Email Error:', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}