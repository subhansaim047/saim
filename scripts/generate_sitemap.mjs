import fs from "fs";

const pagePlan = JSON.parse(fs.readFileSync("src/data/page_plan.json", "utf8"));

// Core pages
const staticPages = [
  { url: "https://www.saimdev.site/", priority: "1.0", changefreq: "weekly" },
  { url: "https://www.saimdev.site/tools", priority: "0.9", changefreq: "weekly" },
  { url: "https://www.saimdev.site/food-safety-templates", priority: "0.9", changefreq: "weekly" },
  { url: "https://www.saimdev.site/nextjs-developer-uk", priority: "0.95", changefreq: "weekly" },
  { url: "https://www.saimdev.site/services", priority: "0.9", changefreq: "weekly" },
  { url: "https://www.saimdev.site/technologies", priority: "0.8", changefreq: "monthly" },
  { url: "https://www.saimdev.site/case-studies", priority: "0.85", changefreq: "monthly" },
  { url: "https://www.saimdev.site/demos", priority: "0.8", changefreq: "weekly" },
  { url: "https://www.saimdev.site/contact", priority: "0.85", changefreq: "monthly" },
  { url: "https://www.saimdev.site/blogs", priority: "0.9", changefreq: "weekly" },
  { url: "https://www.saimdev.site/blog/why-small-business-needs-website-2026", priority: "0.85", changefreq: "monthly" },
  { url: "https://www.saimdev.site/blog/free-website-for-local-business", priority: "0.85", changefreq: "monthly" },
  { url: "https://www.saimdev.site/blog/50-percent-off-agency-launch", priority: "0.85", changefreq: "monthly" },
  { url: "https://www.saimdev.site/blog/how-to-create-compliant-14-allergen-matrix-uk-restaurants", priority: "0.85", changefreq: "weekly" },
  { url: "https://www.saimdev.site/blog/mastering-food-cost-percentage-commercial-kitchen-calculator", priority: "0.85", changefreq: "weekly" },
  { url: "https://www.saimdev.site/blog/how-to-scale-recipes-commercial-catering-batch-calculator", priority: "0.85", changefreq: "weekly" },
  { url: "https://www.saimdev.site/blog/sfbb-daily-kitchen-opening-closing-checklist-guide", priority: "0.85", changefreq: "weekly" },
  { url: "https://www.saimdev.site/blog/how-to-write-haccp-plan-uk-food-business-step-by-step", priority: "0.85", changefreq: "weekly" },
  { url: "https://www.saimdev.site/blog/level-2-food-hygiene-practice-test-kitchen-staff-guide", priority: "0.85", changefreq: "weekly" },
  { url: "https://www.saimdev.site/privacy", priority: "0.5", changefreq: "monthly" },
  { url: "https://www.saimdev.site/terms", priority: "0.5", changefreq: "monthly" }
];

// Add only KEEP and IMPROVE pages
const keepAndImproveSlugs = Object.keys(pagePlan).filter(
  slug => pagePlan[slug].bucket === "KEEP" || pagePlan[slug].bucket === "IMPROVE"
);

console.log(`Adding ${keepAndImproveSlugs.length} indexable food-safety templates to sitemap.xml`);

const templateEntries = keepAndImproveSlugs.map(slug => ({
  url: `https://www.saimdev.site/food-safety-templates/${slug}`,
  priority: slug === "food-allergen-chart" || slug === "allergy-matrix" ? "0.9" : "0.8",
  changefreq: "weekly"
}));

const allEntries = [...staticPages, ...templateEntries];
const today = new Date().toISOString().split("T")[0];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

  <!-- Core Agency & Editorial Pages -->
${staticPages
  .map(
    p => `  <url>
    <loc>${p.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join("\n")}

  <!-- Verified UK Food Safety Templates (KEEP & IMPROVE Indexable Pages) -->
${templateEntries
  .map(
    p => `  <url>
    <loc>${p.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join("\n")}

</urlset>
`;

fs.writeFileSync("public/sitemap.xml", sitemapXml, "utf8");
console.log(`Generated public/sitemap.xml with ${allEntries.length} total URLs.`);
