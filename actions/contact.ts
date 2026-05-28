"use server";

import { Resend } from "resend";
import { ContactEmail } from "@/components/emails/contact-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  try {
    const { name, email, subject, message } = data;

    if (!process.env.RESEND_API_KEY) {
      console.warn("Missing RESEND_API_KEY environment variable. Form submission simulated.");
      // Just simulate success if key is missing
      return { success: true };
    }

    const { data: result, error } = await resend.emails.send({
      from: process.env.CONTACT_EMAIL_FROM || "onboarding@resend.dev",
      to: process.env.CONTACT_EMAIL_TO || "delivered@resend.dev",
      subject: `New Contact Form Message: ${subject}`,
      react: ContactEmail({ name, email, subject, message }),
      replyTo: email,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return { error: error.message };
    }

    return { success: true, data: result };
  } catch (error: any) {
    console.error("Error sending email:", error);
    return { error: error.message || "Failed to send email" };
  }
}
