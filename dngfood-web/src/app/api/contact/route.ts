import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // In a real application, you would use nodemailer or a service like Resend/SendGrid
    // to actually send the email. For this demo, we'll just log it and return success.
    
    console.log("Contact form submission received:", body);
    
    // Example NodeMailer setup (commented out):
    /*
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: '"DNG FoodStuff Web" <noreply@dngfoodstuff.com>',
      to: "sales@dngfoodstuff.com",
      subject: `New Inquiry from ${body.name} - ${body.product}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        <p><strong>Company:</strong> ${body.company}</p>
        <p><strong>Product:</strong> ${body.product}</p>
        <p><strong>Quantity:</strong> ${body.quantity}</p>
        <p><strong>Message:</strong></p>
        <p>${body.message}</p>
      `
    });
    */

    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
