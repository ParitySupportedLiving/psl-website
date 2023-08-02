// var nodemailer = require("nodemailer");
import nodemailer from "nodemailer";
//-----------------------------------------------------------------------------
export async function sendMail({ subject, fromEmail, otpText, html }) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
    tls: {
      ciphers: 'SSLv3'
    }
  });

  var mailOptions = {
    from: fromEmail,
    to: process.env.SMTP_EMAIL,
    subject: subject,
    text: otpText,
    html: html,
    bcc: process.env.SMPT_BCC_LIST
  };

  return await transporter.sendMail(mailOptions);
}

// , async function (error, info) {
//   console.log(info.response);
//   if (error) {
//     throw new Error(error);
//   } else if (info.accepted) {
//     console.log(`Email Sent: %s`, info.messageId);
//     return true;
//   }
// }