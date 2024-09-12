"use server";
import { formSchema } from "@/components/ui/contact";
import ContactFormEmail from "@/emails/contact-form-email";
import { Resend } from "resend";
import { z } from "zod";

type Icontact = z.infer<typeof formSchema>;

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(data: Icontact) {
  const result = formSchema.safeParse(data);

  if (result.error) {
    return { error: result.error.format() };
  }

  if (result.success) {
    const { name, email, messages } = result.data;
    try {
      const { data, error } = await resend.emails.send({
        from: "arzoon.thapa95@gmail.com",
        to: [email],
        cc: ["arzoon.thapa95@gmail.com"],
        subject: "Contact from submisson",
        text: `Name:${name}\nEmail:${email}\nMessage:${messages}`,
        react: ContactFormEmail({ name, email, messages }),
      });

      if (!data || error) {
        throw new Error("Failed to send email");
      }
      return { seccess: true };
    } catch (error) {
      return { error };
    }
  }
}
