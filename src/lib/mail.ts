"use server";

import nodemailer from "nodemailer";

export const sendMail = async (mail: {
  to: string;
  name: string;
  subject: string;
  body: string;
}) => {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  try {
    const sendResult = await transport.sendMail({
      from: `"Xron Trix" <${SMTP_EMAIL}>`,
      to: SMTP_EMAIL,
      sender: "Xron Trix",
      subject: mail.subject,
      html: mail.body,
    });
    console.log(sendResult.response);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
