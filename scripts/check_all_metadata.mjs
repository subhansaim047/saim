import fs from "fs";

const pages = [
  "about",
  "blogs",
  "case-studies",
  "contact",
  "cookie-policy",
  "demos",
  "disclaimer",
  "nextjs-developer-uk",
  "privacy",
  "services",
  "technologies",
  "terms",
  "tools"
];

for (const p of pages) {
  const content = fs.readFileSync(`app/${p}/page.tsx`, "utf8");
  const t = content.match(/title:\s*["']([^"']+)["']/);
  const d = content.match(/description:\s*["']([^"']+)["']/);
  const can = content.match(/canonical:\s*["']([^"']+)["']/);
  const ogTitle = content.match(/openGraph:\s*\{[\s\S]*?title:\s*["']([^"']+)["']/);
  const ogDesc = content.match(/openGraph:\s*\{[\s\S]*?description:\s*["']([^"']+)["']/);
  const ogUrl = content.match(/openGraph:\s*\{[\s\S]*?url:\s*["']([^"']+)["']/);
  console.log({
    page: p,
    title: t ? t[1] : null,
    descLen: d ? d[1].length : 0,
    hasCanonical: !!can,
    hasOgTitle: !!ogTitle,
    hasOgDesc: !!ogDesc,
    hasOgUrl: !!ogUrl
  });
}

console.log("\n--- Blog Posts ---");
const blogDirs = fs.readdirSync("app/blog");
for (const b of blogDirs) {
  const file = `app/blog/${b}/page.tsx`;
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, "utf8");
    const t = content.match(/title:\s*["']([^"']+)["']/);
    const d = content.match(/description:\s*["']([^"']+)["']/);
    const can = content.match(/canonical:\s*["']([^"']+)["']/);
    const ogTitle = content.match(/openGraph:\s*\{[\s\S]*?title:\s*["']([^"']+)["']/);
    const ogUrl = content.match(/openGraph:\s*\{[\s\S]*?url:\s*["']([^"']+)["']/);
    console.log({
      blog: b,
      title: t ? t[1] : null,
      descLen: d ? d[1].length : 0,
      hasCanonical: !!can,
      hasOgTitle: !!ogTitle,
      hasOgUrl: !!ogUrl
    });
  }
}
