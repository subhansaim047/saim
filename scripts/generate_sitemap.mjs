import fs from "fs";

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
  { url: "https://www.saimdev.site/overview", priority: "0.9", changefreq: "weekly" },
  { url: "https://www.saimdev.site/tools/commission-savings-calculator", priority: "0.9", changefreq: "weekly" },
  { url: "https://www.saimdev.site/services/takeaway-web-design", priority: "0.95", changefreq: "weekly" },
  { url: "https://www.saimdev.site/services/takeaway-web-design-london", priority: "0.9", changefreq: "monthly" },
  { url: "https://www.saimdev.site/services/takeaway-web-design-manchester", priority: "0.9", changefreq: "monthly" },
  { url: "https://www.saimdev.site/services/takeaway-web-design-birmingham", priority: "0.9", changefreq: "monthly" },
  { url: "https://www.saimdev.site/nextjs-developer-uk", priority: "0.95", changefreq: "weekly" },
  { url: "https://www.saimdev.site/services", priority: "0.9", changefreq: "weekly" },
  { url: "https://www.saimdev.site/services/website-clone", priority: "0.95", changefreq: "weekly" },
  { url: "https://www.saimdev.site/services/website-development", priority: "0.95", changefreq: "weekly" },
  { url: "https://www.saimdev.site/services/custom-web-apps", priority: "0.95", changefreq: "weekly" },
  { url: "https://www.saimdev.site/services/ecommerce-development", priority: "0.9", changefreq: "weekly" },
  { url: "https://www.saimdev.site/services/website-redesign", priority: "0.9", changefreq: "weekly" },
  { url: "https://www.saimdev.site/services/seo-services", priority: "0.9", changefreq: "weekly" },
  { url: "https://www.saimdev.site/services/ecommerce-shopify", priority: "0.9", changefreq: "weekly" },
  { url: "https://www.saimdev.site/services/business-websites", priority: "0.9", changefreq: "weekly" },
  { url: "https://www.saimdev.site/services/wordpress-headless-cms", priority: "0.9", changefreq: "weekly" },
  { url: "https://www.saimdev.site/services/landing-pages-cro", priority: "0.9", changefreq: "weekly" },
  { url: "https://www.saimdev.site/services/website-speed-optimization", priority: "0.9", changefreq: "weekly" },
  { url: "https://www.saimdev.site/process", priority: "0.85", changefreq: "monthly" },
  { url: "https://www.saimdev.site/pricing", priority: "0.9", changefreq: "weekly" },
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
  { url: "https://www.saimdev.site/blog/nextjs-website-development-cost-uk-us", priority: "0.9", changefreq: "weekly" },
  { url: "https://www.saimdev.site/blog/nextjs-app-router-vs-wordpress-uk-seo", priority: "0.9", changefreq: "weekly" },
  { url: "https://www.saimdev.site/blog/migrate-wordpress-webflow-to-nextjs-seo-guide", priority: "0.85", changefreq: "weekly" },
  { url: "https://www.saimdev.site/blog/nextjs-website-development-guide-uk-us-startups", priority: "0.85", changefreq: "weekly" },
  { url: "https://www.saimdev.site/blog/why-small-business-needs-website", priority: "0.85", changefreq: "monthly" },
  { url: "https://www.saimdev.site/blog/free-website-for-local-business", priority: "0.85", changefreq: "monthly" },
  { url: "https://www.saimdev.site/blog/50-percent-off-agency-launch", priority: "0.85", changefreq: "monthly" },
  { url: "https://www.saimdev.site/blog/uk-food-hygiene-rating-scheme-5-star-checklist", priority: "0.9", changefreq: "weekly" },
  { url: "https://www.saimdev.site/blog/natashas-law-ppds-food-labelling-guide", priority: "0.9", changefreq: "weekly" },
  { url: "https://www.saimdev.site/terms", priority: "0.6", changefreq: "monthly" },
  { url: "https://www.saimdev.site/privacy", priority: "0.6", changefreq: "monthly" },
  { url: "https://www.saimdev.site/cookie-policy", priority: "0.6", changefreq: "monthly" },
  { url: "https://www.saimdev.site/disclaimer", priority: "0.6", changefreq: "monthly" },
];

const allEntries = [...staticPages];
const today = new Date().toISOString().split("T")[0];

function renderImageTags(images) {
  return images
    .map(
      (img) =>
        `\n    <image:image>\n      <image:loc>${xmlEscape(img.loc)}</image:loc>\n      <image:title>${xmlEscape(img.title)}</image:title>\n      <image:caption>${xmlEscape(img.caption)}</image:caption>\n    </image:image>`
    )
    .join("");
}

function renderUrlEntry(p) {
  let xml = `  <url>\n    <loc>${p.url}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority}</priority>`;

  if (p.images && p.images.length > 0) {
    xml += renderImageTags(p.images);
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

  <!-- Core Agency, Commercial Tools & Kept Guides -->
${staticPages.map(renderUrlEntry).join("\n")}

</urlset>
`;

const imageSitemapEntries = [
  {
    url: "https://www.saimdev.site/",
    images: [
      ...staticPages[0].images,
      {
        loc: "https://www.saimdev.site/saim-dev-logo.jpg",
        title: "Saim Dev - Lead Next.js Developer & Takeaway Web Specialist",
        caption: "Official brand logo and profile of Saim Dev studio for UK restaurants and takeaways"
      }
    ]
  },
  {
    url: "https://www.saimdev.site/services/website-development",
    images: [
      {
        loc: "https://www.saimdev.site/og-image.png",
        title: "Next.js Website Development UK & US Architecture",
        caption: "Custom Next.js 16 & React 19 website development services for UK and US businesses from £390 / $500 fixed"
      },
      {
        loc: "https://www.saimdev.site/demos/previews/architecture-interior-studio-design.webp",
        title: "Custom Next.js Studio Portfolio Reference",
        caption: "Responsive Next.js 16 architecture studio showcase website built with Tailwind CSS"
      },
      {
        loc: "https://www.saimdev.site/demos/previews/hq-leathercon-ecommerce-storefront.webp",
        title: "HQ Leathercon Custom Next.js Catalog Build",
        caption: "Custom Next.js storefront catalog concept with edge CDN delivery"
      }
    ]
  },
  {
    url: "https://www.saimdev.site/services/takeaway-web-design",
    images: [
      {
        loc: "https://www.saimdev.site/og-image.png",
        title: "Takeaway Website Design UK Showcase",
        caption: "Custom online ordering systems with 0% commission and POS integration for UK takeaways"
      }
    ]
  },
  {
    url: "https://www.saimdev.site/demos",
    images: demoImages
  },
  {
    url: "https://www.saimdev.site/tools/commission-savings-calculator",
    images: [
      {
        loc: "https://www.saimdev.site/og-image.png",
        title: "UK Takeaway Commission Savings Calculator",
        caption: "Calculate annual delivery app commission loss and ROI of switching to direct takeaway ordering"
      }
    ]
  },
  {
    url: "https://www.saimdev.site/blog/uk-food-hygiene-rating-scheme-5-star-checklist",
    images: [
      {
        loc: "https://www.saimdev.site/og-image.png",
        title: "5-Star Food Hygiene Rating UK Checklist",
        caption: "Complete guide to achieving a 5-star Food Hygiene Rating from UK environmental health officers"
      }
    ]
  },
  {
    url: "https://www.saimdev.site/blog/natashas-law-ppds-food-labelling-guide",
    images: [
      {
        loc: "https://www.saimdev.site/og-image.png",
        title: "Natasha's Law PPDS Food Labelling Guide",
        caption: "Prepacked for Direct Sale allergen labelling regulations and compliant kitchen workflow"
      },
      {
        loc: "https://www.saimdev.site/templates/posters/template-121.webp",
        title: "Natasha's Law PPDS Allergen Warning Visual",
        caption: "Reference visual guide covering full ingredients and 14 UK allergen emphasis rules on PPDS labels"
      }
    ]
  },
  {
    url: "https://www.saimdev.site/blog/why-small-business-needs-website",
    images: [
      {
        loc: "https://www.saimdev.site/og-image.png",
        title: "Why UK Small Businesses Need a Modern Website in 2026",
        caption: "Benefits of mobile-first fast loading websites over social media pages for local businesses"
      }
    ]
  },
  {
    url: "https://www.saimdev.site/blog/free-website-for-local-business",
    images: [
      {
        loc: "https://www.saimdev.site/og-image.png",
        title: "Free Website Options for UK Local Businesses",
        caption: "Evaluating website builders versus bespoke high-converting websites"
      }
    ]
  },
  {
    url: "https://www.saimdev.site/blog/50-percent-off-agency-launch",
    images: [
      {
        loc: "https://www.saimdev.site/og-image.png",
        title: "Saim Dev Agency Launch Offer",
        caption: "Special promotion on custom Next.js takeaway websites and SEO setup"
      }
    ]
  }
];

const imageSitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${imageSitemapEntries
  .map((entry) => `  <url>\n    <loc>${entry.url}</loc>${renderImageTags(entry.images)}\n  </url>`)
  .join("\n")}
</urlset>
`;

fs.writeFileSync("public/sitemap.xml", sitemapXml, "utf8");
fs.writeFileSync("public/image-sitemap.xml", imageSitemapXml, "utf8");
console.log(`Generated public/sitemap.xml (${allEntries.length} URLs) and public/image-sitemap.xml (${imageSitemapEntries.length} URLs).`);
