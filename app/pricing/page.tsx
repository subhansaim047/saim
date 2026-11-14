import type { Metadata } from "next";
import { RhPricingInteractive } from "../../src/components/rh/RhPricingInteractive";

export const metadata: Metadata = {
  title: "Website Development Pricing & Packages UK | Saim Dev",
  description:
    "Transparent fixed-price web development packages from £250. Zero monthly retainers, 100% code ownership, and 50/50 milestone payment protection.",
  alternates: {
    canonical: "https://www.saimdev.site/pricing",
  },
  openGraph: {
    title: "Website Development Pricing & Packages UK | Saim Dev",
    description:
      "Transparent fixed-price web development packages from £250. Zero monthly retainers, 100% code ownership, and 50/50 milestone protection.",
    url: "https://www.saimdev.site/pricing",
    siteName: "Saim Dev",
    locale: "en_GB",
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

const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Website Development Pricing & Packages UK",
  description:
    "Transparent fixed-price web development packages and custom software rates from Saim Dev.",
  url: "https://www.saimdev.site/pricing",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "h2"],
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "GBP",
    lowPrice: "250",
    highPrice: "2500",
    offerCount: "4",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
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
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.saimdev.site",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Pricing",
      item: "https://www.saimdev.site/pricing",
    },
  ],
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <RhPricingInteractive faqs={faqSchema.mainEntity} />
    </>
  );
}
