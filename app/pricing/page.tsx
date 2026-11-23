import type { Metadata } from "next";
import { RhPricingInteractive } from "../../src/components/rh/RhPricingInteractive";

export const metadata: Metadata = {
  title: "Website Development Pricing & Packages UK | Saim Dev",
  description:
    "Transparent fixed-price web development packages from £250. Zero monthly retainers, 100% code ownership, and 50/50 milestone payment protection.",
  alternates: {
    canonical: "https://www.saimdev.site/pricing",
    languages: {
      en: "https://www.saimdev.site/pricing",
      "en-GB": "https://www.saimdev.site/pricing",
      "en-US": "https://www.saimdev.site/pricing",
      "x-default": "https://www.saimdev.site/pricing",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Website Development Pricing & Packages UK | Saim Dev",
    description:
      "Transparent fixed-price web development packages from £250. Zero monthly retainers, 100% code ownership, and 50/50 milestone protection.",
    url: "https://www.saimdev.site/pricing",
    siteName: "Saim Dev",
    locale: "en_GB",
    alternateLocale: ["en_US"],
    type: "website",
    images: [
      {
        url: "https://www.saimdev.site/og-image.png",
        width: 1200,
        height: 630,
        alt: "Website Development Pricing & Packages UK | Saim Dev",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development Pricing & Packages UK | Saim Dev",
    description:
      "Transparent fixed-price web development packages from £250. Zero monthly retainers, 100% code ownership, and 50/50 milestone protection.",
    creator: "@saimwebdev",
    images: ["https://www.saimdev.site/og-image.png"],
  },
};

const faqEntities = [
  {
    "@type": "Question",
    name: "Are there any hidden monthly fees or recurring retainers?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. All our website packages are one-off fixed fees. You own 100% of the code, domain, and hosting accounts from day one. You only pay your own hosting provider directly (e.g. Vercel free tier or £16/mo Pro, Cloudflare £0, or your chosen domain registrar).",
    },
  },
  {
    "@type": "Question",
    name: "How does the 50/50 milestone payment work?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "You pay a 50% initial deposit to begin wireframing and engineering. The remaining 50% is only payable after you test and approve the completed staging website on our private preview link, before production DNS launch.",
    },
  },
  {
    "@type": "Question",
    name: "What happens if I need changes after launch?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Every package includes 14 to 30 days of direct post-launch warranty support where we fix any bugs or issues immediately at zero extra charge. Afterwards, we offer affordable on-demand hourly maintenance or straightforward fixed-rate update quotes.",
    },
  },
  {
    "@type": "Question",
    name: "How do your prices compare to traditional UK digital agencies?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Traditional UK digital agencies have high office overheads, account managers, and sales commissions, typically charging £3,000 to £15,000+ for standard websites. Because you work directly with a senior full-stack engineer remotely, you receive agency-grade Next.js engineering at a fraction of the traditional cost.",
    },
  },
  {
    "@type": "Question",
    name: "Do you offer website design one time payment and fixed price website design worldwide?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. Every Saim Dev tier is structured as fixed price website design with a clear one-time payment split 50/50 across milestones — starting at £250 ($300 USD) for landing or takeaway sites, £390 ($500 USD) for starter business sites, and £790 ($999 USD) for multi-page flagships for clients across the UK, US, Canada, Australia, and Europe, with £0/$0 mandatory monthly studio fees.",
    },
  },
];

const pricingGraphSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.saimdev.site/pricing#webpage",
      name: "Website Development Pricing & Packages UK | Saim Dev",
      description:
        "Transparent fixed-price web development packages and custom software rates from Saim Dev.",
      url: "https://www.saimdev.site/pricing",
      inLanguage: "en-GB",
      isPartOf: { "@id": "https://www.saimdev.site/#website" },
      about: { "@id": "https://www.saimdev.site/#organization" },
      breadcrumb: { "@id": "https://www.saimdev.site/pricing#breadcrumb" },
      mainEntity: { "@id": "https://www.saimdev.site/pricing#catalog" },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "h2"],
      },
    },
    {
      "@type": "OfferCatalog",
      "@id": "https://www.saimdev.site/pricing#catalog",
      name: "Saim Dev Fixed-Price Web Development Packages",
      itemListElement: [
        {
          "@type": "Offer",
          position: 1,
          name: "Takeaway Direct Ordering Starter",
          price: "250",
          priceCurrency: "GBP",
          url: "https://www.saimdev.site/services/takeaway-web-design",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          position: 2,
          name: "High-Converting Landing Page Sprint",
          price: "390",
          priceCurrency: "GBP",
          url: "https://www.saimdev.site/services/landing-pages-cro",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          position: 3,
          name: "Custom Next.js Business Website",
          price: "790",
          priceCurrency: "GBP",
          url: "https://www.saimdev.site/services/business-websites",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          position: 4,
          name: "Full-Stack Web App & SaaS MVP",
          price: "1900",
          priceCurrency: "USD",
          url: "https://www.saimdev.site/services/custom-web-apps",
          availability: "https://schema.org/InStock",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.saimdev.site/pricing#faq",
      isPartOf: { "@id": "https://www.saimdev.site/pricing#webpage" },
      mainEntity: faqEntities,
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.saimdev.site/pricing#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.saimdev.site/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Pricing",
          item: "https://www.saimdev.site/pricing",
        },
      ],
    },
  ],
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingGraphSchema) }}
      />
      <RhPricingInteractive faqs={faqEntities} />
    </>
  );
}
