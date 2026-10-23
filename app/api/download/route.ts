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

  const upstreamUrl = (upstreamPdfMap as Record<string, string>)[template.id];

  if (!upstreamUrl) {
    return NextResponse.json(
      { error: "No PDF document associated with this template" },
      { status: 404 }
    );
  }

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

    return new NextResponse(Buffer.from(arrayBuffer), {
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
