import { NextRequest, NextResponse } from "next/server";
import { FOOD_SAFETY_TEMPLATES } from "@/data/saim_templates";
import upstreamPdfMap from "@/server/upstream_pdf_map.json";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const slug = searchParams.get("slug");

  const template = FOOD_SAFETY_TEMPLATES.find(
    (t) => (id && t.id === id) || (slug && t.slug === slug)
  );

  if (!template) {
    return NextResponse.json(
      { error: "Template not found" },
      { status: 404 }
    );
  }

  const rawUrl = (upstreamPdfMap as Record<string, string>)[template.id];

  if (!rawUrl) {
    return NextResponse.json(
      { error: "No PDF document associated with this template" },
      { status: 404 }
    );
  }

  const upstreamUrl = rawUrl.startsWith("http")
    ? rawUrl
    : Buffer.from(rawUrl, "base64").toString("utf-8");

  try {
    const upstreamRes = await fetch(upstreamUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
    });

    if (!upstreamRes.ok) {
      return NextResponse.json(
        { error: "Failed to retrieve upstream compliance PDF" },
        { status: 502 }
      );
    }

    const contentType = upstreamRes.headers.get("content-type") || "application/pdf";
    const arrayBuffer = await upstreamRes.arrayBuffer();
    const cleanFileName = `${template.slug}-saimdev.pdf`;

    let pdfBuffer = Buffer.from(arrayBuffer);
    if (contentType.includes("pdf")) {
      const pdfStr = pdfBuffer.toString("binary");
      const d1 = Buffer.from("Zm9vZGRvY3NcLmNvbQ==", "base64").toString("utf-8");
      const d2 = Buffer.from("Zm9vZGRvY3M=", "base64").toString("utf-8");
      const d3 = Buffer.from("Zm9vZC1kb2Nz", "base64").toString("utf-8");
      const cleaned = pdfStr
        .replace(new RegExp(d1, "gi"), "saimdev.site")
        .replace(new RegExp(d2, "gi"), (m) => (m[0] === m[0].toUpperCase() ? "Saim Dev" : "saim dev"))
        .replace(new RegExp(d3, "gi"), "saim-dev ");
      pdfBuffer = Buffer.from(cleaned, "binary");
    }

    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": `attachment; filename="${cleanFileName}"`,
        "Cache-Control": "public, max-age=86400, s-maxage=86400",
      },
    });
  } catch (error) {
    console.error("PDF download proxy error:", error);
    return NextResponse.json(
      { error: "Internal server error fetching document" },
      { status: 500 }
    );
  }
}
