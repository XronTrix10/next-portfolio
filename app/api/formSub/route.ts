import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { google } from "googleapis";

const CLIENT_ID = process.env.CLIENT_ID || "";
const CLIENT_SECRET = process.env.CLIENT_SECRET || "";
const REFRESH_TOKEN = process.env.REFRESH_TOKEN || "";
const REDIRECT_URL = process.env.REDIRECT_URL || "";
const MY_EMAIL = process.env.MY_EMAIL || "";
const SENDER_EMAIL = process.env.SENDER_EMAIL || "";

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URL
);

oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

export async function POST(request: Request) {
  const data = await request.json();

  const ACCESS_TOKEN = await oAuth2Client.getAccessToken();
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: SENDER_EMAIL,
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: REFRESH_TOKEN,
      accessToken: ACCESS_TOKEN,
    },
    tls: {
      rejectUnauthorized: true,
    },
  });

  try {
    const res = await transporter.sendMail({
      from: `Xron Trix <${SENDER_EMAIL}>`,
      to: MY_EMAIL,
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
    if (res.rejected) {
      console.log(res);
    }
    return NextResponse.json(res);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
