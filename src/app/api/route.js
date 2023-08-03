import { NextResponse } from "next/server";
import { render } from "@react-email/render";
import { sendMail } from "@/lib/mailService.js";
import EmailTemplate from "../../../emails/EmailTemplate";

export async function GET(request) {
  const req = await request;

  return NextResponse.redirect(new URL('/', req.url));
}
export async function POST(request) {
  const req = await request.json();
  if (req.name && req.email && req.phoneNumber && req.message) {
    const mail = await sendMail({
      subject: req.subject || "General Enquiry",
      fromEmail: req.email,
      otpText: `name: ${req.name}
  number: ${req.phoneNumber}
  email: ${req.email}
  message: ${req.message}`,
      html: render(EmailTemplate({
        name: req.name,
        phoneNumber: req.phoneNumber,
        email: req.email,
        message: req.message
      }))
    })
      .then(res => {
        return res;
      })
      .catch(err => {
        console.error(err);
        throw new Error(err);
      });

    return new Response(`Mail Sent id: ${mail.messageId}`, {
      status: 200,
      body: mail.response
    });
  } else return new Response('Not enough valid details provided', {
    status: 400
  });

}

export async function OPTIONS(req, res) {
  res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
  res.status(405).end(`Method ${method} Not Allowed`);
}