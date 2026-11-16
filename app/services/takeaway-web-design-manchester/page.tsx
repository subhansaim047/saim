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
  title: "Takeaway Web Design Manchester | Direct Site | Saim Dev",
  description:
    "Manchester direct takeaway websites from £250 fixed. Bypass aggregator fees across Rusholme, Northern Quarter & Greater Manchester with 14-allergen menus.",
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
    title: "Takeaway Web Design Manchester | Direct Site | Saim Dev",
    description:
      "Manchester direct takeaway websites from £250 fixed. Bypass aggregator fees across Rusholme, Northern Quarter & Greater Manchester with 14-allergen menus.",
    url: "https://www.saimdev.site/services/takeaway-web-design-manchester",
    siteName: "Saim Dev",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://www.saimdev.site/og-services.png",
        width: 1200,
        height: 630,
        alt: "Takeaway Web Design Manchester - Saim Dev",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@saimwebdev",
    title: "Takeaway Web Design Manchester | Direct Site | Saim Dev",
    description:
      "Manchester direct takeaway websites from £250 fixed. Bypass aggregator fees across Rusholme, Northern Quarter & Greater Manchester with 14-allergen menus.",
    images: ["https://www.saimdev.site/og-services.png"],
  },
};

const manchesterFaqs = [
  {
    q: "How do Manchester late-night and student takeaways move university traffic off delivery apps?",
    a: "Student halls in Fallowfield (M14), Rusholme (M13), and Salford re-order takeaways multiple times weekly in shared house groups. Tucking a 'Students: Free Fries or 15% Off Direct at YourSite.co.uk' QR code inside boxes shifts viral word-of-mouth hall traffic onto 0%-commission direct baskets.",
  },
  {
    q: "How does your system handle busy matchday and late-night closing spikes in Manchester?",
    a: "Clear kitchen opening/cutoff notices, scheduled-prep toggles, and concise itemised order dockets prevent messy overloaded tickets during football evenings or 11pm–2am late shifts.",
  },
  {
    q: "Can we restrict free delivery strictly to core M1–M20 districts while charging outer Salford/Stockport runs?",
    a: "Yes — Manchester spreads evenly across distinct boroughs (Trafford, Salford, Bury, Stockport, Oldham). Postcode prefix pricing ensures distant drops pay clean delivery surcharges automatically.",
  },
  {
    q: "Does every Manchester takeaway menu include Natasha's Law 14-allergen warnings?",
    a: "Yes — dairy, sesame, wheat/gluten, eggs, soya, peanuts, tree nuts, and mustard flag clearly inside every menu category paired with an allergy free-text field at basket review.",
  },
];

export default function ManchesterTakeawayWebDesignPage() {
  const canonicalUrl = "https://www.saimdev.site/services/takeaway-web-design-manchester";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${canonicalUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.saimdev.site/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.saimdev.site/services" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Takeaway Web Design",
        item: "https://www.saimdev.site/services/takeaway-web-design",
      },
      { "@type": "ListItem", position: 4, name: "Manchester", item: canonicalUrl },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${canonicalUrl}#service`,
    name: "Takeaway Web Design Manchester - Saim Dev",
    description:
      "Manchester direct takeaway websites from £250 fixed. Bypass aggregator fees across Rusholme, Northern Quarter & Greater Manchester with 14-allergen menus.",
    url: canonicalUrl,
    priceRange: "£250",
    areaServed: { "@type": "City", name: "Manchester" },
    provider: {
      "@type": "Organization",
      "@id": "https://www.saimdev.site/#organization",
      name: "Saim Dev",
      url: "https://www.saimdev.site",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Manchester Takeaway Web Design Packages",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Manchester Direct Takeaway Storefront",
          price: "250",
          priceCurrency: "GBP",
          description:
            "Commission-free Next.js takeaway menu supporting late-night student trade, M-postcode pricing tiers, and 14-allergen transparency.",
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
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="rh-page min-h-screen bg-black text-white selection:bg-[#BAFF00] selection:text-[#0D0D0D]">
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

      <main>
        <RhHeroPinned
          badge="Greater Manchester & Curry Mile · 0% Commission"
          title={
            <>
              Takeaway Web Design{" "}
              <span className="text-[#939393]">Manchester</span>
            </>
          }
          subtitle="Commission-free Next.js 16 ordering websites built for Manchester burger bars, Curry Mile grill houses, and late-night pizzerias from £250 fixed. Convert high-frequency student and resident orders directly across M1–M90."
          primaryCta={{
            label: "Scope Manchester Build (£250)",
            href: "https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20discuss%20a%20Manchester%20takeaway%20website",
          }}
          secondaryCta={{
            label: "Try Burger Garage Demo",
            href: "/burger-garage/index.html",
          }}
          videoType="mobile"
          stripLabel="Greater Manchester Direct Ordering"
          stripItems={[
            {
              label: "Late-Night Student Trade",
              tag: "M13 / M14 Corridor",
              tagValue: "Box QR Promos",
              summary: "Shift Fallowfield, Rusholme, and Victoria Park repeat halls traffic onto zero-fee ordering.",
              href: "/burger-garage/index.html",
            },
            {
              label: "M1–M90 Postcode Zones",
              tag: "Greater Manc",
              tagValue: "Salford - Stockport",
              summary: "Apply accurate multi-ring courier pricing across Didsbury, Trafford, Bury, and Ancoats.",
              href: "/services/takeaway-web-design",
            },
            {
              label: "Split House Orders",
              tag: "Cart UX",
              tagValue: "Fast Combo Adds",
              summary: "Add double smashed patties, spice shakes, and pizzas cleanly for group hall checkouts.",
              href: "/hotbite/index.html",
            },
            {
              label: "Allergen Transparency",
              tag: "FSA Hygiene",
              tagValue: "14 Allergens",
              summary: "Built-in dietary warnings matching Manchester City Council food inspection readiness.",
              href: "/blog/natashas-law-ppds-food-labelling-guide",
            },
            {
              label: "One-Time £250 Cost",
              tag: "Zero Lease",
              tagValue: "Keep 100%",
              summary: "Escape monthly portal rentals taking £80–£120/mo out of Greater Manchester kitchens.",
              href: "/pricing",
            },
          ]}
        />

        <RhTakeawayCityBody
          stats={[
            { value: "M1–M90", label: "Greater Manc Zones", detail: "Rusholme, Salford, Didsbury" },
            { value: "£250", label: "One-Off Build", detail: "Zero per-order portal tax" },
            { value: "Fast UX", label: "Late-Shift Speed", detail: "Built for peak night surges" },
            { value: "14 FSA", label: "Allergen Matrix", detail: "Full UK legal disclosures" },
          ]}
          aeoQuestion="Why do late-night Manchester takeaways save more with student direct-order links?"
          aeoAnswer="University student housemates in M13/M14/M15 place frequent pooled late-night orders every semester. Moving a single student flat from Uber Eats onto your owned £250 direct domain saves commission across dozens of repeat group orders all academic year with zero extra advertising cost."
          marketEyebrow="Greater Manchester Takeaway Economy"
          marketHeading="Built for High-Frequency North West Food Streets"
          marketSubtitle="Across Northern Quarter smash kitchens, Rusholme Curry Mile, Cheetham Hill, and Stretford, fierce price competition leaves zero room to hand third-party portals 30% forever."
          marketCards={[
            {
              icon: "percent",
              title: "Stop Student Discount Squeeze on Apps",
              description: "Running 20% promo offers inside aggregator apps PLUS paying 28% platform commission wrecks contribution margin. Run controlled 10% direct deals exclusively on your own URL.",
            },
            {
              icon: "shield",
              title: "Allergen Clarity Across Late Shifts",
              description: "Late-hour allergy errors carry severe council risks. Prominent allergen flags alongside mandatory customer dietary confirmation safeguard overnight kitchens.",
            },
            {
              icon: "zap",
              title: "Handles Rainy Matchday Demand Cleanly",
              description: "Static-edge Next.js menu pages stay snappy even when dozens of mobile diners browse at once during Friday evenings or city fixture surges.",
            },
          ]}
          localBenchmark={{
            eyebrow: "GREATER MANCHESTER BENCHMARK",
            heading: "Tailored Specifically for M-Postcode & Late-Night Ordering",
            intro: "How our Manchester builds handle urban student, high-street, and outer borough realities:",
            rows: [
              {
                topic: "Student Corridor (M13–M15) Deals",
                detail: "Highlight bundle savings (e.g. Two Burgers + Loaded Fries) redeemable directly on box QR scans rather than paying portal fees twice.",
              },
              {
                topic: "Cross-Borough Delivery Guardrails",
                detail: "Separate free/low delivery in City Centre & Salford Quays from graduated courier fees reaching Didsbury, Altrincham, Oldham, or Stockport.",
              },
              {
                topic: "Last-Order & Kitchen Cutoffs",
                detail: "Clean visibility of 2am–4am late-shift schedules and delivery pause notices when rain delays courier fleets.",
              },
              {
                topic: "Greater Manchester Local Schema",
                detail: "Structured Greater Manchester LocalBusiness & service metadata indexing menus directly beside Map pack listings.",
              },
            ],
          }}
          coverageEyebrow="Greater Manchester Borough Network"
          coverageHeading="Active Across Central Manchester & All 10 Greater Districts"
          coverageSubtitle="Remote rollout covering urban kitchens, dessert shops, curry houses, and artisan burger spots throughout Greater Manchester:"
          coverageAreas={[
            "Northern Quarter & Ancoats M4",
            "Rusholme Curry Mile M14",
            "Fallowfield & Withington M14/M20",
            "Didsbury & Chorlton M20/M21",
            "Salford Quays & MediaCity M5/M50",
            "Trafford & Altrincham M16/WA",
            "Stockport & Cheadle SK1–SK8",
            "Bury, Bolton, Oldham & Wigan",
          ]}
          toolsHeading="Manchester Direct Margin & Commission Calculator"
          toolsDescription="Model how much cash your Greater Manchester kitchen saves each month by moving repeat orders onto a £250 direct website."
          toolsCtaLabel="Run Commission Calculator"
          faqEyebrow="Manchester Operator Questions"
          faqHeading="Manchester Takeaway Website FAQ"
          faqs={manchesterFaqs}
          networkHeading="Compare Other UK Takeaway Hubs"
          networkSubtitle="Review our national UK takeaway overview alongside regional strategy blueprints for London and Birmingham."
          siblings={[
            {
              href: "/services/takeaway-web-design",
              tag: "National Hub",
              title: "UK Takeaway Web Design",
              description: "National commission-free ordering architecture, £390 Stripe tiers & kitchen utilities.",
            },
            {
              href: "/services/takeaway-web-design-london",
              tag: "Capital City",
              title: "London Takeaway Web Design",
              description: "Zone 1–6 commuter collections, Borough EHO alignment & 32-borough coverage.",
            },
            {
              href: "/services/takeaway-web-design-birmingham",
              tag: "West Midlands",
              title: "Birmingham Takeaway Web Design",
              description: "Family platter selectors & Balti Triangle B-postcode routing.",
            },
          ]}
          ctaHeading="Turn Manchester Box Scans Into Permanent Direct Regulars"
          ctaSubtitle="Message your menu flyer photos over WhatsApp. Launch an owned commission-free storefront in 4–5 days for £250 fixed."
          whatsappHref="https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20launch%20a%20direct%20Manchester%20takeaway%20website"
          architectureSection={
            <RhSystemRows
              overline="04 / MANCHESTER ORDER ARCHITECTURE"
              title="Built for group halls,"
              titleMuted="late queues, and direct reorders."
              subtitle="Structured specifically around burger, wrap, pizza, dessert, and curry house workflows across M-postcodes."
              rows={[
                {
                  num: "01",
                  title: "Group-Order Quick Meal Bundles",
                  description: "Streamlined shared box deals and meal upgrades tailored for fast late-evening checkouts on phones.",
                  tags: ["Group Cart UX", "Fast Taps", "Upsell Combos"],
                  href: "/burger-garage/index.html",
                },
                {
                  num: "02",
                  title: "14-Allergen Safety Filtering",
                  description: "Instant ingredient transparency plus mandatory order allergy check boxes guarding overnight shifts.",
                  tags: ["Natasha's Law", "M-Council EHO", "Zero Ambiguity"],
                  href: "/blog/natashas-law-ppds-food-labelling-guide",
                },
                {
                  num: "03",
                  title: "Direct WhatsApp & Stripe Payments",
                  description: "Start free of card portal overhead on £250 cash/WhatsApp tickets or wire instant Stripe Apple Pay (£390).",
                  tags: ["0% App Cut", "Apple Pay Option", "Full Ownership"],
                  href: "/pricing",
                },
              ]}
            />
          }
          processSection={
            <RhProcessCarousel
              overline="06 / MANCHESTER DEPLOYMENT SPRINT"
              title="Menu photo to late-shift"
              titleMuted="live site in 4–5 days."
              stagesSummaryCount="4"
              stagesSummaryTitle="Sprints"
              stagesSummaryText="Keep service uninterrupted in kitchen while we build and QA your new direct domain."
              stages={[
                {
                  stage: "01",
                  duration: "Day 1",
                  title: "Menu, Bundles & Zone Ingestion",
                  description: "Capture spice variants, loaded fry toppings, student deal combinations, and Greater Manc delivery fees.",
                  deliverables: ["Deal JSON", "M1–M90 Fees", "Allergen Tags"],
                },
                {
                  stage: "02",
                  duration: "Days 2–3",
                  title: "Dark Mobile Storefront Engineering",
                  description: "Assemble tactile dark UI built for thumb navigation and late-night mobile clarity.",
                  deliverables: ["Thumb Cart UI", "Modifier Swatches", "Staging Build"],
                },
                {
                  stage: "03",
                  duration: "Day 4",
                  title: "Box-Lid QR Flyers & Docket Tests",
                  description: "Generate pizza-box & bag flyer QR graphics alongside live kitchen ticket stress checks.",
                  deliverables: ["Box QR Graphic", "WhatsApp Ticket", "Allergy Alert QA"],
                },
                {
                  stage: "04",
                  duration: "Day 5",
                  title: "Custom Domain & Local Pack Cutover",
                  description: "Publish onto your own domain cleanly and link your Google Business Profile Order Direct button.",
                  deliverables: ["Own .co.uk", "GBP Order Setup", "Repo Handover"],
                },
              ]}
              quote="Reference Manchester Scenario: Moving 12 weekly £32 student housemate orders from 30% delivery portals onto box-flyer direct reorders puts ~£460 monthly extra profit straight back into the kitchen."
              author="North West Takeaway Model"
              role="M13–M14 Student Trade Blueprint"
              ctaHref="/contact"
              ctaLabel="Start Manchester Build"
            />
          }
        />
      </main>

      <SiteFooter theme="dark" />
    </div>
  );
}
