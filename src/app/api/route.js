import { NextResponse } from "next/server";
import { render } from "@react-email/render";
import { sendMail } from "@/lib/mailService.js";
import EmailTemplate from "../../../emails/EmailTemplate";


export async function POST(request) {
  const req = await request.json();
  console.log(req);
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
      if (res.accepted) {
        return new Response('Mail Sent', {
          status: 200,
          body: res.response
        });
      }
    })
    .catch(err => {
      throw new Error(err);
    });

}

export async function OPTIONS(req, res) {
  res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
  res.status(405).end(`Method ${method} Not Allowed`);
}