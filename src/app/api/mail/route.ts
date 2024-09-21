import { sendMail } from "@/src/lib/mail";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  let contact: string = "";
  let message: string = "";
  try {
    const { contact: contactData, message: messageData } = await req.json();
    contact = contactData;
    message = messageData;
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Incorrect data format" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  if (!contact || !message) {
    return new NextResponse(
      JSON.stringify({ message: "Missing contact or message" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  const success = await sendMail({
    to: "",
    name: "",
    subject: "Message from Portfolio",
    body: `Contact: ${contact}\n\n\n${message}`,
  });

  if (!success) {
    return new NextResponse(
      JSON.stringify({ message: "Failed to send email" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  return new NextResponse(
    JSON.stringify({ message: "Email sent successfully" }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
};

export const GET = async (request: Request) => {
  return new Response("Mail API", {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
};

export const OPTIONS = async (request: Request) => {
  return new Response("Mail API OPTIONS", {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
};
