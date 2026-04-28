import { NextResponse } from "next/server";
import { PAGINA_WORDPRESS_ALIANCA_WEBHOOK_URL } from "@/lib/webhooks/pagina-wordpress-alianca";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await fetch(PAGINA_WORDPRESS_ALIANCA_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error(
        "pagina-wordpress-alianca webhook:",
        response.status,
        text
      );
      throw new Error("Falha ao enviar webhook pagina-wordpress-alianca");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erro no proxy pagina-wordpress-alianca:", error);
    return NextResponse.json(
      { success: false, message: "Erro ao enviar webhook" },
      { status: 500 }
    );
  }
}
