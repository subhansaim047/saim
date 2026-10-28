import type { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ProcessSection } from "@/components/ProcessSection";
import { PerformanceSection } from "@/components/PerformanceSection";
import { TechStackSection } from "@/components/TechStackSection";
import { FeaturedToolsSection } from "@/components/FeaturedToolsSection";
import { PricingSection } from "@/components/PricingSection";
import { FaqSection } from "@/components/FaqSection";
import { ContactSection } from "@/components/ContactSection";
import { FooterSection } from "@/components/FooterSection";

export const metadata: Metadata = {
  title: "Next.js Websites for UK Small Businesses | Saim Dev",
  description: "Bespoke Next.js websites for UK small businesses and takeaways from £250. Fast load speeds, clean code ownership, built-in SEO, and zero monthly fees.",
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
    title: "Next.js Websites for UK Small Businesses | Saim Dev",
    description: "Bespoke Next.js websites for UK small businesses and takeaways from £250. Fast load speeds, clean code ownership, built-in SEO, and zero monthly fees.",
    url: "https://www.saimdev.site",
    siteName: "Saim Dev",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://www.saimdev.site/og-image.png",
        width: 1200,
        height: 630,
        alt: "Saim Dev - Next.js Websites for UK Small Businesses",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js Websites for UK Small Businesses | Saim Dev",
    description: "Bespoke Next.js websites for UK small businesses and takeaways from £250. Fast load speeds, clean code ownership, built-in SEO, and zero monthly fees.",
    creator: "@saimwebdev",
    images: ["https://www.saimdev.site/og-image.png"],
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.saimdev.site/#webpage",
  "url": "https://www.saimdev.site",
  "name": "Next.js Websites for UK Small Businesses | Saim Dev",
  "description": "Bespoke Next.js websites for UK small businesses and takeaways from £250. Fast load speeds, clean code ownership, built-in SEO, and zero monthly fees.",
  "inLanguage": "en-GB",
  "isPartOf": {
    "@id": "https://www.saimdev.site/#website"
  },
  "about": {
    "@id": "https://www.saimdev.site/#organization"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does a website take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Starter websites are typically completed within 5–7 business days. Full Business Plan websites take 7–10 days from initial discovery to final deployment."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide hosting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We guide you through selecting and setting up ultra-fast cloud hosting, custom domain configuration, and free SSL security setup for sub-second page loads."
      }
    },
    {
      "@type": "Question",
      "name": "Can I edit content myself?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Your website is engineered with clean content architecture and clear instructions so you can easily update text, images, blog posts, and services whenever needed."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer support after launch?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Every project includes 14 to 30 days of free dedicated technical support post-launch to handle minor tweaks, bug fixes, backups, and security checks."
      }
    },
    {
      "@type": "Question",
      "name": "What's included in SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "On-page SEO includes optimized title tags, meta descriptions, structured schema markup, sub-second page speed optimization, mobile responsiveness, and Google Search Console indexing setup."
      }
    }
  ]
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen overflow-x-hidden bg-black">
        <HeroSection />
        <AboutSection />
        <BenefitsSection />
        <PerformanceSection />
        <TechStackSection />
        <FeaturedToolsSection />
        <ProcessSection />
        <PricingSection />
        <FaqSection />
        <ContactSection />
        <FooterSection />
      </main>
    </>
  );
}
