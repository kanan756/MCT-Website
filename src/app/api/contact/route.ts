import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // TODO: Integrate Google Sheets API here
    // Example:
    // await fetch("YOUR_GOOGLE_SCRIPT_URL_OR_SHEETS_API", {
    //   method: "POST",
    //   body: JSON.stringify({ name, email, service, message }),
    // });

    console.log("Form submission received (Ready for Google Sheets):", { name, email, message });

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return NextResponse.json(
      { error: "Failed to submit form" },
      { status: 500 }
    );
  }
}
