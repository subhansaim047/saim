import fs from "fs";
import path from "path";

const pagePlan = JSON.parse(fs.readFileSync("src/data/page_plan.json", "utf8"));

// Helper function to escape XML entities
function xmlEscape(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// Extract template metadata from saim_templates.ts
const tsContent = fs.readFileSync("src/data/saim_templates.ts", "utf8");
const equalsIdx = tsContent.indexOf("=", tsContent.indexOf("FOOD_SAFETY_TEMPLATES"));
const arrayStart = tsContent.indexOf("[", equalsIdx);
const catIdx = tsContent.indexOf("export const ALL_CATEGORIES");
const arrayEnd = tsContent.lastIndexOf("];", catIdx);
const templates = JSON.parse(tsContent.slice(arrayStart, arrayEnd + 1));

const templateMap = {};
for (const t of templates) {
  templateMap[t.slug] = t;
}

// 13 Demo Previews for Google Image Indexing
const demoImages = [
  {
    loc: "https://www.saimdev.site/demos/previews/frenchyse-takeaway-restaurant-banner.webp",
    title: "Frenchyse Gourmet Burger Takeaway Website Demo",
    caption: "Modern French burger and street food takeaway web design with digital menu and ordering"
  },
  {
    loc: "https://www.saimdev.site/demos/previews/anzaar-rooftop-restaurant-banner.webp",
    title: "Anzaar Luxury Rooftop Dining & Grill Showcase",
    caption: "High-end rooftop restaurant web platform with VIP table reservations and dark aesthetic"
  },
  {
    loc: "https://www.saimdev.site/demos/previews/burger-garage-restaurant-branding.webp",
    title: "Burger Garage Artisan Smash Burger Showcase",
    caption: "Retro-industrial diner and smash burger takeaway web architecture"
  },
  {
    loc: "https://www.saimdev.site/demos/previews/hotbite-street-food-takeaway.webp",
    title: "HotBite Fast-Casual Takeaway Website",
    caption: "Mobile-first takeaway website optimized for instant food ordering and local Google visibility"
  },
  {
    loc: "https://www.saimdev.site/demos/previews/atelier-noir-luxury-interior-design.webp",
    title: "Atelier Noir Luxury Interior Architecture Studio",
    caption: "Minimalist editorial portfolio for premium architectural and interior design firms"
  },
  {
    loc: "https://www.saimdev.site/demos/previews/architecture-interior-studio-design.webp",
    title: "ArchiStudio Modern Residential & Commercial Design",
    caption: "High-performance architecture practice portfolio with project galleries"
  },
  {
    loc: "https://www.saimdev.site/demos/previews/detailx-car-detailing-auto-repair.webp",
    title: "DetailX Auto Detailing & Ceramic Coating Studio",
    caption: "Conversion-focused automotive service website with booking schedule and package builder"
  },
  {
    loc: "https://www.saimdev.site/demos/previews/woshico-cleaning-services-preview.webp",
    title: "Woshico Commercial & Residential Cleaning Services",
    caption: "Fast, accessible local home services web platform with instant quote calculator"
  },
  {
    loc: "https://www.saimdev.site/demos/previews/beauticians-on-the-go-mobile-day-spa.webp",
    title: "Beauticians On The Go Mobile Beauty & Day Spa",
    caption: "Modern on-demand salon and wellness spa website with service menu"
  },
  {
    loc: "https://www.saimdev.site/demos/previews/liana-luxury-hair-beauty-salon.webp",
    title: "Liana Luxury Hair & Beauty Salon Showcase",
    caption: "High-fashion hair styling and aesthetics salon web design"
  },
  {
    loc: "https://www.saimdev.site/demos/previews/studio-dbrickell-luxury-beauty-spa.webp",
    title: "Studio D Brickell Luxury Aesthetics & Medical Spa",
    caption: "Editorial medspa web platform featuring treatment catalogs and online appointment booking"
  },
  {
    loc: "https://www.saimdev.site/demos/previews/valeria-luxury-beauty-salon.webp",
    title: "Valeria Premier Hair & Beauty Studio",
    caption: "Clean luxury aesthetics and bridal beauty web platform"
  },
  {
    loc: "https://www.saimdev.site/demos/previews/serenia-luxury-wellness-spa.webp",
    title: "Serenia Holistic Wellness Sanctuary & Spa",
    caption: "Calming botanical wellness retreat website design with treatment booking engine"
  }
];

// Core pages with associated image metadata
const staticPages = [
  {
    url: "https://www.saimdev.site/",
    priority: "1.0",
    changefreq: "weekly",
    images: [
      {
        loc: "https://www.saimdev.site/hero-shots/shot-1.webp",
        title: "Fresh and Reddy Dark Web Architecture",
        caption: "Bespoke Next.js restaurant web design and fast digital menu architecture"
      },
      {
        loc: "https://www.saimdev.site/hero-shots/shot-2.webp",
        title: "Evora Luxury Real Estate Web Platform",
        caption: "Sub-second load speed luxury property showcase engineered for UK small businesses"
      },
      {
        loc: "https://www.saimdev.site/hero-shots/shot-3.webp",
        title: "GAZU High-Conversion Fashion E-Commerce",
        caption: "Modern high-conversion fashion store built on Next.js with zero monthly fees"
      },
      {
        loc: "https://www.saimdev.site/hero-shots/shot-4.webp",
        title: "Interactive Digital SaaS Showcase",
        caption: "Bespoke SaaS platform with custom micro-animations and Google SEO optimization"
      },
      {
        loc: "https://www.saimdev.site/og-image.png",
        title: "Saim Dev Next.js Web Development Agency",
        caption: "Affordable high-performance Next.js websites for UK small businesses and takeaways"
      }
    ]
  },
  { url: "https://www.saimdev.site/tools", priority: "0.9", changefreq: "weekly" },
  { url: "https://www.saimdev.site/tools/ppds-label-generator", priority: "0.9", changefreq: "weekly" },
  { url: "https://www.saimdev.site/services/takeaway-web-design", priority: "0.95", changefreq: "weekly" },
  { url: "https://www.saimdev.site/nextjs-developer-uk", priority: "0.95", changefreq: "weekly" },
  { url: "https://www.saimdev.site/services", priority: "0.9", changefreq: "weekly" },
  { url: "https://www.saimdev.site/technologies", priority: "0.8", changefreq: "monthly" },
  { url: "https://www.saimdev.site/case-studies", priority: "0.85", changefreq: "monthly" },
  {
    url: "https://www.saimdev.site/demos",
    priority: "0.8",
    changefreq: "weekly",
    images: demoImages
  },
  { url: "https://www.saimdev.site/about", priority: "0.8", changefreq: "monthly" },
  { url: "https://www.saimdev.site/contact", priority: "0.85", changefreq: "monthly" },
  { url: "https://www.saimdev.site/blogs", priority: "0.9", changefreq: "weekly" },
  { url: "https://www.saimdev.site/blog/why-small-business-needs-website-2026", priority: "0.85", changefreq: "monthly" },
  { url: "https://www.saimdev.site/blog/free-website-for-local-business", priority: "0.85", changefreq: "monthly" },
  { url: "https://www.saimdev.site/blog/50-percent-off-agency-launch", priority: "0.85", changefreq: "monthly" },
  {
    url: "https://www.saimdev.site/blog/how-to-create-compliant-14-allergen-matrix-uk-restaurants",
    priority: "0.85",
    changefreq: "weekly",
    images: [
      {
        loc: "https://www.saimdev.site/templates/posters/template-146.webp",
        title: "14 Statutory Food Allergens Reference Chart for UK Food Businesses",
        caption: "Statutory 14 allergens checklist layout for UK commercial kitchens and takeaways"
      }
    ]
  },
  { url: "https://www.saimdev.site/blog/mastering-food-cost-percentage-commercial-kitchen-calculator", priority: "0.85", changefreq: "weekly" },
  { url: "https://www.saimdev.site/blog/how-to-scale-recipes-commercial-catering-batch-calculator", priority: "0.85", changefreq: "weekly" },
  { url: "https://www.saimdev.site/blog/sfbb-daily-kitchen-opening-closing-checklist-guide", priority: "0.85", changefreq: "weekly" },
  { url: "https://www.saimdev.site/blog/how-to-write-haccp-plan-uk-food-business-step-by-step", priority: "0.85", changefreq: "weekly" },
  { url: "https://www.saimdev.site/blog/level-2-food-hygiene-practice-test-kitchen-staff-guide", priority: "0.85", changefreq: "weekly" },
  { url: "https://www.saimdev.site/blog/uk-food-hygiene-rating-scheme-5-star-checklist", priority: "0.85", changefreq: "weekly" },
  {
    url: "https://www.saimdev.site/blog/natashas-law-ppds-food-labelling-guide",
    priority: "0.85",
    changefreq: "weekly",
    images: [
      {
        loc: "https://www.saimdev.site/templates/posters/template-121.webp",
        title: "UK PPDS Food Allergen Chart and Packaging Reference Guide",
        caption: "Statutory allergen identification and PPDS packaging label reference layout for UK caterers"
      }
    ]
  },
  {
    url: "https://www.saimdev.site/blog/commercial-kitchen-food-cooling-temperature-guide",
    priority: "0.85",
    changefreq: "weekly",
    images: [
      {
        loc: "https://www.saimdev.site/templates/charts/template-128.webp",
        title: "Commercial Kitchen Food Cooling Time and Temperature Curve Chart",
        caption: "Safe food cooling temperature progression curve for commercial kitchens"
      }
    ]
  },
];

// Add only KEEP and IMPROVE pages
const keepAndImproveSlugs = Object.keys(pagePlan).filter(
  slug => pagePlan[slug].bucket === "KEEP" || pagePlan[slug].bucket === "IMPROVE"
);

console.log(`Adding ${keepAndImproveSlugs.length} indexable food-safety templates to sitemap.xml`);

const templateEntries = keepAndImproveSlugs.map(slug => {
  const tmpl = templateMap[slug];
  const images = [];
  if (tmpl && tmpl.imgUrl) {
    images.push({
      loc: `https://www.saimdev.site${tmpl.imgUrl}`,
      title: `${tmpl.title} Template`,
      caption: `Free printable ${tmpl.title} for UK commercial kitchens and food businesses`
    });
  }

  return {
    url: `https://www.saimdev.site/food-safety-templates/${slug}`,
    priority: slug === "food-allergen-chart" || slug === "allergy-matrix" ? "0.9" : "0.8",
    changefreq: "weekly",
    images
  };
});

const allEntries = [...staticPages, ...templateEntries];
const today = new Date().toISOString().split("T")[0];

function renderUrlEntry(p) {
  let xml = `  <url>\n    <loc>${p.url}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority}</priority>`;
  
  if (p.images && p.images.length > 0) {
    for (const img of p.images) {
      xml += `\n    <image:image>\n      <image:loc>${xmlEscape(img.loc)}</image:loc>\n      <image:title>${xmlEscape(img.title)}</image:title>\n      <image:caption>${xmlEscape(img.caption)}</image:caption>\n    </image:image>`;
    }
  }
  
  xml += `\n  </url>`;
  return xml;
}

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd
        http://www.google.com/schemas/sitemap-image/1.1
        http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd">

  <!-- Core Agency & Editorial Pages -->
${staticPages.map(renderUrlEntry).join("\n")}

  <!-- Verified UK Food Safety Templates (KEEP & IMPROVE Indexable Pages) -->
${templateEntries.map(renderUrlEntry).join("\n")}

</urlset>
`;

fs.writeFileSync("public/sitemap.xml", sitemapXml, "utf8");
console.log(`Generated public/sitemap.xml with ${allEntries.length} total URLs and rich Google Image extensions.`);
