import { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { RhHeader } from "@/components/rh/RhHeader";
import { RhTakeawayCityBody } from "@/components/rh/RhTakeawayCityBody";
import {
  RhHeroPinned,
  RhProcessCarousel,
  RhSystemRows,
} from "@/components/rh/RhModernSections";

export const metadata: Metadata = {
  title: "Takeaway Website Design Birmingham | Direct Ordering | Saim Dev",
  description: "Takeaway website design in Birmingham from £250. Cut Just Eat commissions with Natasha's Law allergen filters & WhatsApp ordering for West Midlands food.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.saimdev.site/services/takeaway-web-design-birmingham",
    languages: {
      "en-GB": "https://www.saimdev.site/services/takeaway-web-design-birmingham",
    },
  },
  openGraph: {
    title: "Takeaway Website Design Birmingham | Direct Ordering | Saim Dev",
    description: "Takeaway website design in Birmingham from £250. Cut Just Eat commissions with Natasha's Law allergen filters & WhatsApp ordering for West Midlands food.",
    url: "https://www.saimdev.site/services/takeaway-web-design-birmingham",
    siteName: "Saim Dev",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://www.saimdev.site/og-services.png",
        width: 1200,
        height: 630,
        alt: "Takeaway Website Design Birmingham - Saim Dev",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@saimwebdev",
    title: "Takeaway Website Design Birmingham | Direct Ordering | Saim Dev",
    description: "Takeaway website design in Birmingham from £250. Cut Just Eat commissions with Natasha's Law allergen filters & WhatsApp ordering for West Midlands food.",
    images: ["https://www.saimdev.site/og-services.png"],
  },
};

const birminghamFaqs = [
  {
    q: "How does direct online ordering help Birmingham takeaways increase profits?",
    a: "Birmingham has one of the UK's most celebrated takeaway scenes, including the world-famous Balti Triangle and vibrant street food hubs. With aggregators taking up to 34% in commissions, food operators sacrifice a massive slice of revenue. A custom Next.js website from Saim Dev starting from £250 fixed price allows customers to order directly via WhatsApp or digital card checkout with zero commission fees.",
  },
  {
    q: "Are Natasha's Law allergen declarations included for Birmingham restaurants?",
    a: "Yes. Every menu comes with an interactive 14-allergen filter matrix designed in accordance with the UK Food Information Regulations 2014 and Natasha's Law guidance, allowing customers to easily filter out allergens including gluten, nuts, dairy, celery, mustard, and sesame.",
  },
  {
    q: "Which areas in Birmingham and the West Midlands do you serve?",
    a: "We work remotely with food operators across Birmingham City Centre, Sparkbrook and the Balti Triangle, Digbeth, Edgbaston, Harborne, Moseley, Solihull, Sutton Coldfield, Wolverhampton, Coventry, and Dudley.",
  },
  {
    q: "How fast can our Birmingham takeaway website be deployed?",
    a: "Standard takeaway websites are completed and launched within 3 to 5 working days from receiving your menu and details. We configure domain setup, mobile optimisation, and WhatsApp kitchen routing.",
  },
];

export default function BirminghamTakeawayWebDesignPage() {
  const canonicalUrl = "https://www.saimdev.site/services/takeaway-web-design-birmingham";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
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
        name: "Services",
        item: "https://www.saimdev.site/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Takeaway Web Design",
        item: "https://www.saimdev.site/services/takeaway-web-design",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Birmingham",
        item: canonicalUrl,
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Takeaway Website Design Birmingham - Saim Dev",
    description: "Takeaway website design in Birmingham from £250. Cut Just Eat commissions with Natasha's Law allergen filters & WhatsApp ordering for West Midlands food.",
    url: canonicalUrl,
    priceRange: "£250",
    areaServed: {
      "@type": "City",
      name: "Birmingham",
    },
    provider: {
      "@type": "Person",
      name: "Saim Dev",
      url: "https://www.saimdev.site/about",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Birmingham Takeaway Web Design Packages",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Birmingham Takeaway Direct Ordering System",
          price: "250",
          priceCurrency: "GBP",
          description: "Fixed-price £250 Next.js ordering platform with zero commission cuts, 14-allergen menu filtering, and direct kitchen dispatch.",
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: birminghamFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <div className="rh-page min-h-screen bg-black text-white selection:bg-[#BAFF00] selection:text-[#0D0D0D]">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <RhHeader theme="dark" />

      <RhHeroPinned
        badge="Birmingham & West Midlands Food Tech · 0% Commission"
        title={
          <>
            Takeaway Website Design{" "}
            <span className="text-[#939393]">Birmingham</span>
          </>
        }
        subtitle="Saim Dev builds bespoke Next.js takeaway ordering websites for Birmingham and West Midlands restaurants, Balti houses, and burger bars starting from £250 fixed price. Bypass 30%+ Just Eat commissions with Natasha's Law 14-allergen menus across Birmingham, Solihull, and Wolverhampton."
        primaryCta={{
          label: "Build Birmingham Site (£250)",
          href: "https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20discuss%20a%20Birmingham%20takeaway%20website",
        }}
        secondaryCta={{
          label: "Interactive Allergen Demo",
          href: "/tools/allergen-matrix-generator",
        }}
        videoType="mobile"
        stripLabel="West Midlands · Commission-Free Ordering"
      />

      <RhTakeawayCityBody
        stats={[
          { value: "0%", label: "Commission Fees", detail: "Zero cuts to portals" },
          { value: "2nd Largest", label: "UK City Market", detail: "High-volume diner base" },
          { value: "14 Allergens", label: "Interactive Filter", detail: "Natasha's Law Compliant" },
          { value: "3–5 Days", label: "Turnaround Time", detail: "Quick go-to-market" },
        ]}
        aeoQuestion="Direct Answer: How Does Direct Ordering Help Birmingham Food Businesses?"
        aeoAnswer="Saim Dev designs and builds commission-free takeaway ordering websites for Birmingham restaurants and catering businesses starting from £250. Diners order directly from your mobile-optimised digital menu with real-time 14-allergen filtering aligned with Natasha's Law, dispatching tickets straight to your kitchen WhatsApp and bypassing third-party portal fees."
        marketEyebrow="West Midlands Hospitality Economy"
        marketHeading="Why Birmingham Takeaways Need Independent Ordering"
        marketSubtitle="Birmingham boasts an iconic culinary heritage. But third-party delivery apps eat away at your operational margins. Taking control of your online presence gives you independent customer loyalty."
        marketCards={[
          {
            icon: "percent",
            title: "Retain Every Order Pound",
            description: "Paying 20% to 34% commission per dish hurts profitability. Direct orders guarantee that 100% of customer spend stays in your Birmingham business.",
          },
          {
            icon: "shield",
            title: "Natasha's Law Transparency",
            description: "Give your customers confidence with instant allergen identification. Our menus flag all 14 statutory allergens clearly for full transparency.",
          },
          {
            icon: "zap",
            title: "Instant Kitchen Orders",
            description: "Orders arrive formatted directly on your WhatsApp or kitchen tablet, complete with delivery details, item notes, and allergen warnings.",
          },
        ]}
        coverageEyebrow="West Midlands Coverage"
        coverageHeading="Serving Food Operators Across Birmingham & Surrounds"
        coverageSubtitle="We deliver custom websites for eateries across Birmingham and the wider West Midlands conurbation:"
        coverageAreas={[
          "Birmingham City Centre",
          "Balti Triangle (Sparkbrook)",
          "Digbeth & Bullring Area",
          "Edgbaston & Harborne",
          "Moseley & Kings Heath",
          "Solihull & Shirley",
          "Sutton Coldfield & Erdington",
          "Wolverhampton & Dudley",
        ]}
        faqEyebrow="Birmingham FAQs"
        faqs={birminghamFaqs}
        siblings={[
          {
            href: "/services/takeaway-web-design",
            tag: "National Pillar",
            title: "UK Takeaway Web Design (Main Hub)",
            description: "National £250 fixed-price takeaway ordering package with interactive 14-allergen menus and zero commission fees.",
          },
          {
            href: "/services/takeaway-web-design-london",
            tag: "Regional Sibling",
            title: "London Takeaway Web Design",
            description: "Zero-commission online ordering and Natasha's Law digital menus covering all 32 London boroughs.",
          },
          {
            href: "/services/takeaway-web-design-manchester",
            tag: "Regional Sibling",
            title: "Manchester Takeaway Web Design",
            description: "High-speed digital menus and direct ordering engineered for Curry Mile, Rusholme, and Greater Manchester takeaways.",
          },
        ]}
        ctaHeading="Ready to Launch Your Birmingham Takeaway Website?"
        ctaSubtitle="Contact us today on WhatsApp. Fixed £250 setup, zero ongoing commissions, and your digital menu live within 3–5 days."
        whatsappHref="https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20get%20started%20with%20a%20Birmingham%20takeaway%20website"
      />

      <RhSystemRows
        overline="WEST MIDLANDS STACK"
        title="Commission-free ordering"
        titleMuted="for Birmingham kitchens."
        subtitle="Built for Birmingham Balti houses, burger kitchens, and multi-site restaurants across Solihull, Sutton Coldfield, and Wolverhampton."
        rows={[
          {
            num: "01",
            title: "Natasha's Law 14-Allergen Filter",
            description: "Interactive allergen filtering across every menu category so diners inspect ingredients safely before ordering.",
            tags: ["14 Allergens", "FSA Compliant", "Instant Search"],
            href: "/tools/allergen-matrix-generator",
          },
          {
            num: "02",
            title: "Direct WhatsApp & Stripe Checkout",
            description: "Stop handing 30%+ per basket to delivery portals. Direct orders arrive cleanly in your kitchen with full customer data.",
            tags: ["0% Commission", "Stripe UK", "B-Postcode Zones"],
          },
          {
            num: "03",
            title: "Birmingham Local SEO & Schema",
            description: "Structured LocalBusiness and Menu schemas engineered to capture direct high-intent searches across the Midlands.",
            tags: ["LocalBusiness JSON-LD", "99+ Speed", "Mobile First"],
          },
        ]}
      />

      <RhProcessCarousel
        overline="LAUNCH SPRINT"
        title="Commission-free menu live"
        titleMuted="in 3–5 days."
        stages={[
          {
            stage: "01",
            duration: "Day 1",
            title: "Menu & Allergen Audit",
            description: "We digitize your dishes, sides, meal combos, and full 14-allergen matrix with zero manual data entry.",
            deliverables: ["Full Menu JSON", "Allergen Matrix", "B-Postcode Map"],
          },
          {
            stage: "02",
            duration: "Days 2–3",
            title: "Mobile Storefront Build",
            description: "Fast mobile-first UX built to handle weekend dinner rushes smoothly with instant category filtering.",
            deliverables: ["Mobile Cart UX", "Upsell Logic", "Staging Link"],
          },
          {
            stage: "03",
            duration: "Day 4",
            title: "Bag-Flyer QR & Testing",
            description: "End-to-end order routing verification plus print-ready QR packaging inserts to convert portal diners direct.",
            deliverables: ["Print QR Assets", "WhatsApp Test", "Speed QA"],
          },
          {
            stage: "04",
            duration: "Day 5",
            title: "Live Go-Live (£250 Fixed)",
            description: "Deploy on your own domain with 100% ownership and zero recurring fees per order.",
            deliverables: ["Custom Domain", "0% Per Order", "Code Handoff"],
          },
        ]}
        quote="Our Birmingham direct takeaway orders grew every weekend once customers could scan the QR code and reorder straight from their phone with zero app surcharge."
        author="Faisal Akhtar"
        role="Director, Midlands Smokehouse"
        ctaHref="/contact"
        ctaLabel="Launch Birmingham Menu"
      />

      <SiteFooter theme="dark" />
    </div>
  );
}
