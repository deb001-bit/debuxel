import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { type, message, email } = await req.json();

        if (!message) {
            return NextResponse.json({ error: "Message is required" }, { status: 400 });
        }

        // Check if SMTP credentials are provided
        const hasSmtpConfig = process.env.SMTP_HOST && process.env.SMTP_PORT && process.env.SMTP_USER && process.env.SMTP_PASS;
        const toEmail = process.env.FEEDBACK_EMAIL || process.env.SMTP_USER;

        if (!hasSmtpConfig || !toEmail) {
            console.log("Feedback received (No SMTP configured to send email):", { type, message, email });
            return NextResponse.json(
                { message: "Feedback saved locally (Configure SMTP to receive emails)" },
                { status: 200 }
            );
        }

        // Configure nodemailer
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: `"Debuxel Feedback" <${process.env.SMTP_USER}>`,
            to: toEmail,
            subject: `New Debuxel Feedback: ${type}`,
            html: `
        <h2>New Feedback Received</h2>
        <p><strong>Type:</strong> ${type}</p>
        <p><strong>From:</strong> ${email || "Anonymous"}</p>
        <hr />
        <h3>Message:</h3>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: "Feedback sent successfully" });
    } catch (error) {
        console.error("Error sending feedback email:", error);
        return NextResponse.json(
            { error: "Failed to send feedback email. Check server logs." },
            { status: 500 }
        );
    }
}
