import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const data = await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
    tls: {
      ciphers: "SSLv3",
    },
  });

  try {
    const res = await transporter.sendMail({
      from: `Xron Trix <${process.env.MY_EMAIL}>`,
      to: "driju9576@gmail.com",
      subject: "Contact Form 📝",
      html: `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Your Portfolio - Thank You for Contacting Us</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  background-color: #f2f2f2;
                  margin: 0;
                  padding: 0;
              }
              .container {
                  max-width: 600px;
                  margin: 0 auto;
                  padding: 20px;
                  background-color: #ffffff;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                  border-radius: 5px;
              }
              h1 {
                  color: #333333;
              }
              h3 {
                color: #ffd2ab;
              }
              p {
                  color: #666666;
              }
              a {
                  color: #0078D4;
                  text-decoration: none;
              }
          </style>
      </head>
      <body>
          <div class="container">
              <h1>Contact Form</h1>
              <h3>User Name</h3>
              <p>${data.FirstName} ${data.LastName}</p>
              <h3>User Email</h3>
              <p>${data.Email}</p>
              <h3>Message</h3>
              <p>${data.Message}</p>
          </div>
      </body>
      </html>
      `,
    });
    console.log(res);
    return NextResponse.json(res);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
