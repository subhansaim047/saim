import upstreamPdfMap from "../src/server/upstream_pdf_map.json" with { type: "json" };

const rawUrl = upstreamPdfMap["template-1"];
console.log("Raw encoded URL sample:", rawUrl.slice(0, 30) + "...");
const decodedUrl = Buffer.from(rawUrl, "base64").toString("utf-8");
console.log("Decoded successfully starts with:", decodedUrl.slice(0, 25));

const res = await fetch(decodedUrl, {
  headers: {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
  },
});

console.log("Fetch status:", res.status, res.statusText);
const arrayBuffer = await res.arrayBuffer();
let pdfBuffer = Buffer.from(arrayBuffer);
const pdfStr = pdfBuffer.toString("binary");

const d1 = Buffer.from("Zm9vZGRvY3NcLmNvbQ==", "base64").toString("utf-8");
const d2 = Buffer.from("Zm9vZGRvY3M=", "base64").toString("utf-8");
const d3 = Buffer.from("Zm9vZC1kb2Nz", "base64").toString("utf-8");

const cleaned = pdfStr
  .replace(new RegExp(d1, "gi"), "saimdev.site")
  .replace(new RegExp(d2, "gi"), (m) => (m[0] === m[0].toUpperCase() ? "Saim Dev" : "saim dev"))
  .replace(new RegExp(d3, "gi"), "saim-dev ");

pdfBuffer = Buffer.from(cleaned, "binary");

console.log("Original has fooddocs:", /fooddocs/i.test(pdfStr));
console.log("Cleaned has fooddocs:", /fooddocs/i.test(cleaned));
console.log("Length preserved:", pdfStr.length === cleaned.length);
