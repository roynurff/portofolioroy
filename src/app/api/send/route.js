import { Resend } from "resend";
const resent = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    const { email, name, message } = await req.json();

    await resent.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: "roy1coc@gmail.com",
        subject: "New Message from Portfolio",
        html:  `<p><b>Name:</b> ${name}</p>
                <p><b>Email:</b> ${email}</p>
                <p><b>Message:</b> ${message}</p>`
    });

    return Response.json({ status: "Email Sent" });
}