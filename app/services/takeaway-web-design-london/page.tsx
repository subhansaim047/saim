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
  title: "Takeaway Website Design London | Online Ordering | Saim Dev",
  description: "Custom Next.js takeaway ordering websites for London restaurants from £250. Cut Just Eat commissions with Natasha's Law allergen filters & WhatsApp ordering.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.saimdev.site/services/takeaway-web-design-london",
    languages: {
      "en-GB": "https://www.saimdev.site/services/takeaway-web-design-london",
    },
  },
  openGraph: {
    title: "Takeaway Website Design London | Online Ordering | Saim Dev",
    description: "Custom Next.js takeaway ordering websites for London restaurants from £250. Cut Just Eat commissions with Natasha's Law allergen filters & WhatsApp ordering.",
    url: "https://www.saimdev.site/services/takeaway-web-design-london",
    siteName: "Saim Dev",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://www.saimdev.site/og-services.png",
        width: 1200,
        height: 630,
        alt: "Takeaway Website Design London - Saim Dev",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@saimwebdev",
    title: "Takeaway Website Design London | Online Ordering | Saim Dev",
    description: "Custom Next.js takeaway ordering websites for London restaurants from £250. Cut Just Eat commissions with Natasha's Law allergen filters & WhatsApp ordering.",
    images: ["https://www.saimdev.site/og-services.png"],
  },
};

const londonFaqs = [
  {
    q: "How does a direct ordering website save money for London takeaways?",
    a: "London food businesses face some of the highest overheads in the UK. Aggregator platforms like Just Eat, Deliveroo, and Uber Eats take between 20% and 34% of every order. With a custom Next.js website from Saim Dev starting at £250 fixed price, London takeaways take orders directly via WhatsApp or digital checkout, eliminating aggregator commissions entirely.",
  },
  {
    q: "Do your London restaurant websites support Natasha's Law allergen filters?",
    a: "Yes. Every menu features an interactive 14-allergen filter matrix built specifically to meet the Food Information Regulations 2014 and Natasha's Law guidance. London diners can instantly filter dishes for allergens such as gluten, nuts, dairy, celery, or shellfish before placing their order.",
  },
  {
    q: "Which areas and boroughs of London do you support?",
    a: "We work remotely with food operators across all 32 London boroughs, including Westminster, Camden, Hackney, Islington, Tower Hamlets, Southwark, Lambeth, Wandsworth, Croydon, Ealing, and Greenwich, as well as Greater London.",
  },
  {
    q: "How quickly can a London takeaway website be launched?",
    a: "Most London takeaway websites launch within 3 to 5 business days once your menu, pricing, and branding materials are received. We configure domain routing, Google local search optimization, and direct WhatsApp kitchen routing.",
  },
];

export default function LondonTakeawayWebDesignPage() {
  const canonicalUrl = "https://www.saimdev.site/services/takeaway-web-design-london";

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
        name: "London",
        item: canonicalUrl,
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Takeaway Website Design London - Saim Dev",
    description: "Custom Next.js takeaway ordering websites for London restaurants from £250. Cut Just Eat commissions with Natasha's Law allergen filters & WhatsApp ordering.",
    url: canonicalUrl,
    priceRange: "£250",
    areaServed: {
      "@type": "City",
      name: "London",
    },
    provider: {
      "@type": "Person",
      name: "Saim Dev",
      url: "https://www.saimdev.site/about",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "London Takeaway Web Design Packages",
      itemListElement: [
        {
          "@type": "Offer",
          name: "London Takeaway Direct Ordering System",
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
    mainEntity: londonFaqs.map((f) => ({
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
        badge="London Restaurant & Takeaway Tech · 0% Commission"
        title={
          <>
            Takeaway Website Design{" "}
            <span className="text-[#939393]">London</span>
          </>
        }
        subtitle="Saim Dev engineers direct Next.js takeaway ordering websites for London restaurants, dark kitchens, and cafes starting from £250 fixed price. Bypass 30%+ Just Eat and Deliveroo commissions with Natasha's Law 14-allergen filters across all 32 London boroughs."
        primaryCta={{
          label: "Build London Takeaway Site (£250)",
          href: "https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20discuss%20a%20London%20takeaway%20website",
        }}
        secondaryCta={{
          label: "Interactive Allergen Demo",
          href: "/tools/allergen-matrix-generator",
        }}
        videoType="mobile"
        stripLabel="London Boroughs · Commission-Free Ordering"
      />

      <RhTakeawayCityBody
        stats={[
          { value: "0%", label: "Commission Fees", detail: "Zero cuts to portals" },
          { value: "32 Boroughs", label: "London Coverage", detail: "All London regions" },
          { value: "14 Allergens", label: "Interactive Filter", detail: "Natasha's Law Compliant" },
          { value: "3–5 Days", label: "Turnaround Time", detail: "Swift deployment" },
        ]}
        aeoQuestion="Direct Answer: How Does It Work for London Food Businesses?"
        aeoAnswer="Saim Dev builds commission-free takeaway websites for London restaurants and food businesses starting from £250. Each site includes an online ordering menu, statutory 14-allergen filtering aligned with Natasha's Law, instant WhatsApp kitchen dispatch, and full Google local SEO setup — helping London takeaways recover 20% to 34% commission fees previously lost to third-party delivery aggregators."
        marketEyebrow="Capital City Dining Landscape"
        marketHeading="Why London Takeaways Must Own Their Customer Data"
        marketSubtitle="London is home to more than 18,000 food establishments. Relying entirely on delivery aggregators means losing your brand identity, paying thousands in commissions every month, and never owning your customer relationships."
        marketCards={[
          {
            icon: "percent",
            title: "Reclaim Monthly Profit",
            description: "If your London kitchen does £10,000 per month via delivery apps, you forfeit up to £3,400 every single month. A direct website pays for itself in less than two weeks.",
          },
          {
            icon: "shield",
            title: "London Allergen Compliance",
            description: "London Environmental Health Officers (EHOs) rigorously audit food businesses for accurate allergen declarations. Our digital menus highlight all 14 statutory allergens clearly.",
          },
          {
            icon: "zap",
            title: "Sub-Second Mobile Ordering",
            description: "Londoners expect immediate mobile responses. Built with Next.js, our menus load in under 800 milliseconds, ensuring zero drop-off on busy 4G and 5G mobile networks.",
          },
        ]}
        coverageEyebrow="Hyper-Local Coverage"
        coverageHeading="Serving All London Boroughs & Neighbourhoods"
        coverageSubtitle="Whether you manage a fish and chip shop in East London, an artisan bakery in South London, or a high-volume pizza takeaway in West London:"
        coverageAreas={[
          "Central London & Soho",
          "Camden & Islington",
          "Hackney & Shoreditch",
          "Tower Hamlets & Bow",
          "Brixton & Lambeth",
          "Southwark & Bermondsey",
          "Wandsworth & Battersea",
          "Ealing & Acton",
        ]}
        faqEyebrow="London FAQs"
        faqs={londonFaqs}
        siblings={[
          {
            href: "/services/takeaway-web-design",
            tag: "National Pillar",
            title: "UK Takeaway Web Design (Main Hub)",
            description: "National £250 fixed-price takeaway ordering package with interactive 14-allergen menus and zero commission fees.",
          },
          {
            href: "/services/takeaway-web-design-manchester",
            tag: "Regional Sibling",
            title: "Manchester Takeaway Web Design",
            description: "High-speed digital menus and direct ordering engineered for Curry Mile, Rusholme, and Greater Manchester takeaways.",
          },
          {
            href: "/services/takeaway-web-design-birmingham",
            tag: "Regional Sibling",
            title: "Birmingham Takeaway Web Design",
            description: "Fast WhatsApp dispatch and allergen filtration for Balti Triangle, Digbeth, and West Midlands restaurants.",
          },
        ]}
        ctaHeading="Ready to Launch Your London Takeaway Website?"
        ctaSubtitle="Contact us today on WhatsApp. Fixed £250 setup, no recurring commissions, and your digital menu live within 3–5 days."
        whatsappHref="https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20get%20started%20with%20a%20London%20takeaway%20website"
      />

      <RhSystemRows
        overline="LONDON TAKEAWAY STACK"
        title="Own your margin"
        titleMuted="across all 32 boroughs."
        subtitle="Built specifically for London independents, multi-branch burger kitchens, and dark kitchens bypassing 30% delivery app cuts."
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
            description: "Orders route straight to your kitchen printer or WhatsApp Business dashboard with 0% aggregator commission.",
            tags: ["0% Commission", "Stripe UK", "Postcode Zones"],
          },
          {
            num: "03",
            title: "Sub-Second Borough Local SEO",
            description: "Schema-backed menu indexing engineered to capture direct 'near me' food searches across London.",
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
            description: "We ingest your PDF menu, add-ons, meal deals, and Natasha's Law allergen data with zero manual work.",
            deliverables: ["Full Menu JSON", "Allergen Matrix", "London Zone Map"],
          },
          {
            stage: "02",
            duration: "Days 2–3",
            title: "Branded Storefront Build",
            description: "High-contrast dark editorial UI tailored to smartphones where 85%+ of London takeaway orders happen.",
            deliverables: ["Mobile Cart UX", "Upsell Flows", "Staging Link"],
          },
          {
            stage: "03",
            duration: "Day 4",
            title: "Order Routing & QR Assets",
            description: "Test WhatsApp order payloads, delivery radius rules, and generate table/flyer QR menus to convert app customers.",
            deliverables: ["Print QR Flyering", "WhatsApp Test", "Speed QA"],
          },
          {
            stage: "04",
            duration: "Day 5",
            title: "Live Go-Live (£250 Fixed)",
            description: "Deploy on your own .co.uk domain with 100% ownership and zero ongoing software cuts per order.",
            deliverables: ["Custom Domain", "0% Per Order", "Code Handoff"],
          },
        ]}
        quote="Switching repeat Friday night orders off aggregator apps to our direct Saim Dev menu saved over £1,400 in commissions during the first month alone."
        author="Tariq Mahmood"
        role="Founder, Spice Quarter Kitchen London"
        ctaHref="/contact"
        ctaLabel="Launch London Menu"
      />

      <SiteFooter theme="dark" />
    </div>
  );
}
