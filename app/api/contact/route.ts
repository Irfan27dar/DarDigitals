import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  whatsapp?: string;
  need?: string;
  budget?: string;
  date?: string;
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let data: ContactPayload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  // Server-side validation mirrors the client.
  if (!data.name?.trim() || !data.email?.trim() || !data.need?.trim()) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields." },
      { status: 422 }
    );
  }
  if (!emailRe.test(data.email)) {
    return NextResponse.json(
      { ok: false, error: "Invalid email address." },
      { status: 422 }
    );
  }

  // Log the enquiry so it's visible in dev / server logs.
  console.info("[contact] New project enquiry:", {
    name: data.name,
    company: data.company || "—",
    email: data.email,
    whatsapp: data.whatsapp || "—",
    budget: data.budget || "—",
    date: data.date || "—",
    need: data.need,
    at: new Date().toISOString(),
  });

  // TODO: connect email/CRM — e.g. send via Resend/Postmark or push to HubSpot.

  return NextResponse.json({ ok: true });
}
