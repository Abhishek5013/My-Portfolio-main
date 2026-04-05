// lib/actions.ts
import emailjs from "emailjs-com";

export async function submitContactForm(values: { name: string; email: string; message: string }) {
  try {
    const result = await emailjs.send(
      "service_lh7snza",     // your EmailJS Service ID
      "template_hmpe4gz",    // your EmailJS Template ID
      {
        from_name: values.name,       // person’s name from form
        from_email: values.email,     // person’s email from form
        message: values.message,      // message from form
        to_email: "abhishekyadav8952@gmail.com", // your Gmail (where mail will come)
      },
      "rSr_3rTejWy20aEQI"  // ⚠️ replace with your EmailJS Public Key from dashboard
    );

    return { success: true, message: "Message sent successfully ✅" };
  } catch (error) {
    console.error("EmailJS Error:", error);
    return { success: false, message: "Failed to send message ❌" };
  }
}
