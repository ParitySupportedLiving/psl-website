import { NextResponse } from "next/server";
import { render } from "@react-email/render";
import { sendMail } from "@/lib/mailService.js";
import EmailTemplate from "../../../emails/EmailTemplate";


export async function GET(req) {
  const mail = await sendMail({
    subject: "TEST4",
    toEmail: process.env.SMTP_EMAIL || 'willem@paritysl.com',
    otpText: "THI IS A TEST TO CHECK FOR HTML RENDER",
    html: render(EmailTemplate())
  })
    .then(res => {
      if (res.accepted) {
        return res;
      }
    })
    .catch(err => {
      throw new Error(err);
    });

  return new Response('testing', {
    status: 200,
    mail: mail.response
  });


  // return NextResponse.json({ message: 'Success', mail: mail });
  // return new Response('testing', {
  //   status: 200,
  // });
  // return res.status(200).json([
  //   { test: 'test' }
  // ]);
}

export async function POST(request) {
  const req = await request.json();
  const mail = await sendMail({
    subject: req.subject || "General Enquiry",
    toEmail: process.env.SMTP_EMAIL || 'willem@paritysl.com',
    otpText: `name: ${req.name}
number: ${req.phoneNumber}
message: ${req.message}`,
    html: render(EmailTemplate({
      name: req.name,
      phoneNumber: req.phoneNumber,
      message: req.message
    }))
  })
    .then(res => {
      if (res.accepted) {
        return res;
      }
    })
    .catch(err => {
      throw new Error(err);
    });


  return new Response('Mail Sent', {
    status: 200,
    body: mail.response
  });
}

export async function OPTIONS(req, res) {
  res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
  res.status(405).end(`Method ${method} Not Allowed`);
}