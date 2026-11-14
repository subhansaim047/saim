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
  title: "Takeaway Website Design Manchester | Direct Ordering | Saim Dev",
  description: "Takeaway website design for Manchester restaurants from £250. Cut Just Eat commissions with Natasha's Law allergen filters & WhatsApp kitchen dispatch.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.saimdev.site/services/takeaway-web-design-manchester",
    languages: {
      "en-GB": "https://www.saimdev.site/services/takeaway-web-design-manchester",
    },
  },
  openGraph: {
    title: "Takeaway Website Design Manchester | Direct Ordering | Saim Dev",
    description: "Takeaway website design for Manchester restaurants from £250. Cut Just Eat commissions with Natasha's Law allergen filters & WhatsApp kitchen dispatch.",
    url: "https://www.saimdev.site/services/takeaway-web-design-manchester",
    siteName: "Saim Dev",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://www.saimdev.site/og-services.png",
        width: 1200,
        height: 630,
        alt: "Takeaway Website Design Manchester - Saim Dev",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@saimwebdev",
    title: "Takeaway Website Design Manchester | Direct Ordering | Saim Dev",
    description: "Takeaway website design for Manchester restaurants from £250. Cut Just Eat commissions with Natasha's Law allergen filters & WhatsApp kitchen dispatch.",
    images: ["https://www.saimdev.site/og-services.png"],
  },
};

const manchesterFaqs = [
  {
    q: "How can Manchester takeaways stop paying high aggregator commissions?",
    a: "Greater Manchester is home to over 5,000 eateries and takeaways. With portals like Just Eat and Uber Eats charging up to 34% per order, food businesses lose substantial revenue. Saim Dev creates direct Next.js ordering websites starting from £250 fixed price, letting you take orders directly via WhatsApp or online payments with 0% commission.",
  },
  {
    q: "Does the Manchester takeaway system include full allergen filtering?",
    a: "Yes. Every menu is equipped with an interactive 14-allergen filter matrix strictly aligned with UK Food Information Regulations 2014 and Natasha's Law guidance. Customers across Manchester can quickly filter out gluten, nuts, dairy, egg, or other statutory allergens.",
  },
  {
    q: "Which areas in Greater Manchester do you cover?",
    a: "We work remotely with food operators across Manchester City Centre, the Northern Quarter, Ancoats, Didsbury, Chorlton, Salford, Trafford, Stockport, Bolton, Bury, Rochdale, Oldham, and Wigan.",
  },
  {
    q: "How long does setup take for a Manchester food business?",
    a: "Most Manchester takeaway builds are launched within 3 to 5 business days after receiving your menu, logo, and price list. We set up domain routing, local SEO, and WhatsApp kitchen routing.",
  },
];

export default function ManchesterTakeawayWebDesignPage() {
  const canonicalUrl = "https://www.saimdev.site/services/takeaway-web-design-manchester";

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
        name: "Manchester",
        item: canonicalUrl,
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Takeaway Website Design Manchester - Saim Dev",
    description: "Takeaway website design for Manchester restaurants from £250. Cut Just Eat commissions with Natasha's Law allergen filters & WhatsApp kitchen dispatch.",
    url: canonicalUrl,
    priceRange: "£250",
    areaServed: {
      "@type": "City",
      name: "Manchester",
    },
    provider: {
      "@type": "Person",
      name: "Saim Dev",
      url: "https://www.saimdev.site/about",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Manchester Takeaway Web Design Packages",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Manchester Takeaway Direct Ordering System",
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
    mainEntity: manchesterFaqs.map((f) => ({
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
        badge="Manchester Food & Takeaway Solutions · 0% Commission"
        title={
          <>
            Takeaway Website Design{" "}
            <span className="text-[#939393]">Manchester</span>
          </>
        }
        subtitle="Saim Dev crafts direct Next.js ordering websites for Greater Manchester takeaways, curry houses, and pizzerias starting from £250 fixed price. Eliminate 30%+ aggregator commissions with Natasha's Law 14-allergen filters across Manchester, Salford, and Stockport."
        primaryCta={{
          label: "Build Manchester Site (£250)",
          href: "https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20discuss%20a%20Manchester%20takeaway%20website",
        }}
        secondaryCta={{
          label: "Interactive Allergen Demo",
          href: "/tools/allergen-matrix-generator",
        }}
        videoType="mobile"
        stripLabel="Greater Manchester · Commission-Free Ordering"
      />
      <RhTakeawayCityBody
        stats={[
          { value: "0%", label: "Commission Fees", detail: "Keep 100% of order totals" },
          { value: "10 Boroughs", label: "Manchester Coverage", detail: "Across Greater Manchester" },
          { value: "14 Allergens", label: "Interactive Filter", detail: "Natasha's Law Compliant" },
          { value: "3–5 Days", label: "Turnaround Time", detail: "Rapid launch" },
        ]}
        aeoQuestion="Direct Answer: How Does Direct Ordering Benefit Manchester Food Operators?"
        aeoAnswer="Saim Dev provides custom, commission-free takeaway website design for Manchester eateries from £250. Rather than paying 20% to 34% commissions to third-party aggregator portals, your Manchester customers order directly via a sub-second Next.js menu with live 14-allergen filtering aligned with Natasha's Law, receiving orders straight to your kitchen WhatsApp or tablet."
        marketEyebrow="Northern Powerhouse Food Sector"
        marketHeading="Why Manchester Restaurants Are Moving Away From Food Apps"
        marketSubtitle="From the Curry Mile in Rusholme to bustling burger bars in the Northern Quarter and Ancoats, independent Manchester takeaways are protecting their margins by taking direct orders."
        marketCards={[
          {
            icon: "percent",
            title: "Protect Hard-Earned Profit",
            description: "Paying thousands of pounds every month to delivery apps drains working capital. A custom £250 website lets you keep every pound paid by your local customers.",
          },
          {
            icon: "shield",
            title: "Natasha's Law Safeguards",
            description: "UK legislation requires unambiguous allergen declarations. Our digital menus clearly highlight and filter all 14 statutory allergens for customer peace of mind.",
          },
          {
            icon: "zap",
            title: "Blazing Edge Performance",
            description: "Pre-rendered on global edge networks, our Next.js pages load in under 800ms, making mobile ordering effortless for customers throughout Manchester.",
          },
        ]}
        coverageEyebrow="Regional Coverage"
        coverageHeading="Supporting Kitchens Across Greater Manchester"
        coverageSubtitle="We deliver bespoke websites for takeaways, chip shops, and bakeries across all Greater Manchester districts:"
        coverageAreas={[
          "Manchester City Centre",
          "Northern Quarter & Ancoats",
          "Rusholme (Curry Mile)",
          "Didsbury & Chorlton",
          "Salford & MediaCity",
          "Trafford & Altrincham",
          "Stockport & Cheadle",
          "Bolton, Bury & Rochdale",
        ]}
        faqEyebrow="Manchester FAQs"
        faqs={manchesterFaqs}
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
            href: "/services/takeaway-web-design-birmingham",
            tag: "Regional Sibling",
            title: "Birmingham Takeaway Web Design",
            description: "Fast WhatsApp dispatch and allergen filtration for Balti Triangle, Digbeth, and West Midlands restaurants.",
          },
        ]}
        ctaHeading="Ready to Launch Your Manchester Takeaway Website?"
        ctaSubtitle="Contact us today on WhatsApp. Fixed £250 setup, zero ongoing commissions, and your digital menu live within 3–5 days."
        whatsappHref="https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20get%20started%20with%20a%20Manchester%20takeaway%20website"
      />

      <RhSystemRows
        overline="MANCHESTER TAKEAWAY STACK"
        title="Commission-free ordering"
        titleMuted="for Greater Manchester."
        subtitle="Built for Manchester curry houses, smash burger kitchens, and late-night takeaways across Salford, Stockport, Trafford, and Curry Mile."
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
            description: "Zero 30%+ portal deductions. Direct digital orders route straight to your counter with clean itemized modifiers.",
            tags: ["0% Commission", "Stripe UK", "Postcode Zones"],
          },
          {
            num: "03",
            title: "Greater Manchester Local SEO",
            description: "Schema-backed menu indexing built to rank directly across Manchester postcodes for high-margin repeat customers.",
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
            description: "We digitize your full menu, spice options, combos, and Natasha's Law 14-allergen matrix cleanly.",
            deliverables: ["Full Menu JSON", "Allergen Matrix", "M Postcode Zones"],
          },
          {
            stage: "02",
            duration: "Days 2–3",
            title: "Mobile Ordering Build",
            description: "Fast one-thumb checkout flow designed for peak Friday and matchday order spikes across Manchester.",
            deliverables: ["Mobile Cart UX", "Meal Deal Logic", "Staging Link"],
          },
          {
            stage: "03",
            duration: "Day 4",
            title: "Bag-Flyer QR & Testing",
            description: "Order flow testing plus print-ready QR discount flyers to move regular delivery app buyers direct.",
            deliverables: ["Print QR Assets", "WhatsApp Test", "Speed QA"],
          },
          {
            stage: "04",
            duration: "Day 5",
            title: "Live Go-Live (£250 Fixed)",
            description: "Launch on your own domain with 100% source ownership and zero ongoing commission per order.",
            deliverables: ["Custom Domain", "0% Per Order", "Code Handoff"],
          },
        ]}
        quote="Moving our Rusholme takeaway regulars onto our direct Saim Dev ordering site stopped thousands in third-party app fees every quarter."
        author="Imran Qureshi"
        role="Owner, Khyber Grill Manchester"
        ctaHref="/contact"
        ctaLabel="Launch Manchester Menu"
      />

      <SiteFooter theme="dark" />
    </div>
  );
}
