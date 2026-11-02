import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message, inquiryType } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    const ticketId = `AKASH-INQ-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;

    console.log(`[AKASH Contact API] Inquiry Received: ${ticketId}`, body);

    return NextResponse.json(
      {
        success: true,
        ticketId,
        message: "Thank you for reaching out. An AKASH business expansion specialist will respond within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process inquiry." },
      { status: 500 }
    );
  }
}
