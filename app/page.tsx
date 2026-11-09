import type { Metadata } from "next";
import { RhDesignHomepage } from "@/components/rh-design/RhDesignHomepage";

export const metadata: Metadata = {
  title: "Custom Web Development Agency UK | Next.js & Apps | Saim Dev",
  description: "Bespoke web development agency in the UK engineering custom business websites, Shopify stores, and Next.js web applications with sub-second performance.",
  alternates: {
    canonical: "https://www.saimdev.site",
    languages: {
      "en-GB": "https://www.saimdev.site",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Custom Web Development Agency UK | Next.js & Apps | Saim Dev",
    description: "Bespoke web development agency in the UK engineering custom business websites, Shopify stores, and Next.js web applications with sub-second performance.",
    url: "https://www.saimdev.site",
    siteName: "Saim Dev",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://www.saimdev.site/hero-shots/shot-4.webp",
        width: 1200,
        height: 630,
        alt: "Saim Dev - Custom Web Development & Digital Engineering Studio",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Web Development Agency UK | Next.js & Apps | Saim Dev",
    description: "Bespoke web development agency in the UK engineering custom business websites, Shopify stores, and Next.js web applications with sub-second performance.",
    creator: "@saimwebdev",
    images: ["https://www.saimdev.site/hero-shots/shot-4.webp"],
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.saimdev.site/#webpage",
  "url": "https://www.saimdev.site",
  "name": "Custom Web Development Agency UK | Next.js & Apps | Saim Dev",
  "description": "Bespoke web development agency in the UK engineering custom business websites, Shopify stores, and Next.js web applications with sub-second performance.",
  "inLanguage": "en-GB",
  "image": "https://www.saimdev.site/hero-shots/shot-4.webp",
  "primaryImageOfPage": {
    "@type": "ImageObject",
    "url": "https://www.saimdev.site/hero-shots/shot-4.webp",
    "width": 1080,
    "height": 1350
  },
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", "h2"]
  },
  "isPartOf": {
    "@id": "https://www.saimdev.site/#website",
  },
  "about": {
    "@id": "https://www.saimdev.site/#organization",
  },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.saimdev.site/#service-catalog",
  "name": "Saim Dev - Custom Web Development & Digital Engineering Studio",
  "url": "https://www.saimdev.site",
  "image": "https://www.saimdev.site/hero-shots/shot-4.webp",
  "priceRange": "£250 - £2500",
  "telephone": "+923196526604",
  "email": "contact@saimdev.site",
  "areaServed": [
    { "@type": "Country", "name": "United Kingdom" },
    { "@type": "Country", "name": "United States" },
    { "@type": "Country", "name": "Canada" },
    { "@type": "Country", "name": "Australia" },
    { "@type": "AdministrativeArea", "name": "European Union" },
  ],
  "parentOrganization": {
    "@id": "https://www.saimdev.site/#organization",
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Web Development & Digital Engineering Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Web Applications & SaaS MVPs",
          "description": "Full-stack web software, authenticated client portals, and real-time dashboards built on Next.js, Node.js, and serverless databases.",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "E-Commerce & High-Converting Storefronts",
          "description": "Custom Shopify theme design, Shopify Plus development, and WooCommerce storefronts with sub-second checkout speeds.",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Bespoke Business Websites & Redesigns",
          "description": "Custom digital flagships for B2B, healthcare, consultancies, and professional services engineered to convert visitors into enquiries.",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "WordPress & Headless CMS Engineering",
          "description": "Custom lightweight WordPress themes, Sanity.io and Strapi headless architectures with clean code and zero theme bloat.",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "High-Converting Landing Pages & CRO Funnels",
          "description": "Conversion-engineered landing pages built for PPC advertising, Google Ads, and marketing campaigns.",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Website Speed Optimization & Core Web Vitals Overhauls",
          "description": "Performance remediation delivering LCP under 1.2s, 0.00 CLS, and 95+ mobile Google PageSpeed scores.",
        },
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is custom web development and why choose it over website builders?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Custom web development involves engineering a website or application from scratch using clean, modern code (such as Next.js, React, and TypeScript) tailored directly to your business goals. Unlike DIY builders (Wix, Squarespace) or bloated WordPress themes that suffer from slow mobile speeds, rigid templates, and permanent monthly rent, custom web development gives you 100% code ownership, sub-second speeds, bespoke UX, and zero forced retainers.",
      },
    },
    {
      "@type": "Question",
      "name": "Why choose Next.js instead of a standard WordPress theme?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standard WordPress themes load dozens of third-party plugins, databases, and unoptimized CSS/JS files that drag mobile Google PageSpeed scores down into the 30–60 range. Next.js delivers static site generation (SSG) and server-side rendering (SSR) directly from the edge, achieving 95+ Core Web Vitals, impervious security (no database vulnerabilities to hack), and instant page transitions that convert more visitors.",
      },
    },
    {
      "@type": "Question",
      "name": "How much does a commercial website cost in the UK?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In the UK, traditional agencies charge £3,000 to £15,000+ for standard small business websites, plus £100–£500/month retainers. At Saim Dev, we offer transparent fixed milestone pricing: Landing Pages at £250, Starter Websites at £390, Full Business Platforms at £790, and Bespoke Web Applications or E-Commerce Stores from £1,250+, with 100% code ownership and zero monthly lock-in.",
      },
    },
    {
      "@type": "Question",
      "name": "Do you build custom e-commerce stores and Shopify websites?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We build high-converting e-commerce experiences on Shopify, WooCommerce, and custom headless Next.js Commerce. Our stores feature sub-second faceted catalog search, seamless Stripe and Apple Pay checkouts, automated tax and inventory syncing, and mobile-first cart optimization to eliminate checkout drop-off.",
      },
    },
    {
      "@type": "Question",
      "name": "Can you build custom SaaS MVPs and interactive web applications?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We engineer authenticated client portals, SaaS MVP web applications, dynamic multi-tenant dashboards, and custom business tools. Built on Next.js App Router, Node.js, TypeScript, and serverless databases (PostgreSQL, Supabase), our web apps are fast, secure, and ready to scale.",
      },
    },
    {
      "@type": "Question",
      "name": "How long does a website take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Starter websites are typically completed within 5–7 business days. Full Business Plan websites take 7–10 days from initial discovery to final deployment.",
      },
    },
    {
      "@type": "Question",
      "name": "Do you provide hosting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We guide you through selecting and setting up ultra-fast cloud hosting, custom domain configuration, and free SSL security setup for sub-second page loads.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I edit content myself?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Your website is engineered with clean content architecture and clear instructions so you can easily update text, images, blog posts, and services whenever needed.",
      },
    },
    {
      "@type": "Question",
      "name": "Do you offer support after launch?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Every project includes 14 to 30 days of free dedicated technical support post-launch to handle minor tweaks, bug fixes, backups, and security checks.",
      },
    },
    {
      "@type": "Question",
      "name": "What's included in SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "On-page SEO includes optimized title tags, meta descriptions, structured schema markup, sub-second page speed optimization, mobile responsiveness, and Google Search Console indexing setup.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#f4f5f6]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <RhDesignHomepage />
    </div>
  );
}
