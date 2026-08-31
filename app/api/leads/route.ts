import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  /* Integração futura: CRM, WhatsApp Business API, cobrança, suporte. */
  return NextResponse.json({ ok: true });
}
