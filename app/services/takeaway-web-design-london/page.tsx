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
  title: "Takeaway Website Design London | Direct Site | Saim Dev",
  description:
    "London takeaway ordering websites from £250 fixed. Cut Just Eat & Deliveroo fees with 14-allergen menus and postcode zones across all 32 boroughs.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.saimdev.site/services/takeaway-web-design-london",
    languages: {
      "en": "https://www.saimdev.site/services/takeaway-web-design-london",
      "en-GB": "https://www.saimdev.site/services/takeaway-web-design-london",
      "en-US": "https://www.saimdev.site/services/takeaway-web-design-london",
      "x-default": "https://www.saimdev.site/services/takeaway-web-design-london",
    },
  },
  openGraph: {
    title: "Takeaway Website Design London | Direct Site | Saim Dev",
    description:
      "London takeaway ordering websites from £250 fixed. Cut Just Eat & Deliveroo fees with 14-allergen menus and postcode zones across all 32 boroughs.",
    url: "https://www.saimdev.site/services/takeaway-web-design-london",
    siteName: "Saim Dev",
    locale: "en_GB",
    alternateLocale: ["en_US"],
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
    title: "Takeaway Website Design London | Direct Site | Saim Dev",
    description:
      "London takeaway ordering websites from £250 fixed. Cut Just Eat & Deliveroo fees with 14-allergen menus and postcode zones across all 32 boroughs.",
    images: ["https://www.saimdev.site/og-services.png"],
  },
};

const londonFaqs = [
  {
    q: "Why do London Zone 1–6 takeaways struggle most with aggregator app fees?",
    a: "Between high commercial business rates, London Living Wage staffing, and ULEZ/moped rider logistics, London independents often run tighter net margins than regional kitchens. Giving away 22%–34% on repeat local regulars shrinks room for profit — switching regular collections and short-radius deliveries onto a direct £250 site protects cashflow.",
  },
  {
    q: "How do London takeaways handle tight borough delivery zones without long cross-river drops?",
    a: "Instead of wide chaotic courier pins across Thames bridges, we configure postcode-prefix fencing and minimum basket tiers per Zone (e.g., E1/E2/E8 or SW11/SW4) paired with clear collection incentives for commuter pick-ups.",
  },
  {
    q: "Are Natasha's Law 14-allergen warnings formatted for London Borough EHO inspections?",
    a: "Yes — London boroughs such as Camden, Westminster, Hackney, and Tower Hamlets scrutinise online menu allergen traceability closely during Food Hygiene Rating inspections. Our menus flag all 14 statutory allergens beside items and include mandatory order-note prompts.",
  },
  {
    q: "Can a London dark kitchen run multiple virtual brands off clear direct links?",
    a: "Yes — single operators in Battersea, Park Royal, Bermondsey, or Mile End shipping out of dark units frequently use clean branded menu sites paired with flyer QRs to convert aggregator discovery into profitable repeat business.",
  },
];

export default function LondonTakeawayWebDesignPage() {
  const canonicalUrl = "https://www.saimdev.site/services/takeaway-web-design-london";

  const londonGraphSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: "Takeaway Website Design London | Direct Site | Saim Dev",
        description:
          "London takeaway ordering websites from £250 fixed. Cut Just Eat & Deliveroo fees with 14-allergen menus and postcode zones across all 32 boroughs.",
        inLanguage: "en-GB",
        isPartOf: { "@id": "https://www.saimdev.site/#website" },
        about: { "@id": `${canonicalUrl}#service` },
        breadcrumb: { "@id": `${canonicalUrl}#breadcrumb` },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${canonicalUrl}#service`,
        name: "Takeaway Website Design London - Saim Dev",
        description:
          "London takeaway ordering websites from £250 fixed. Cut Just Eat & Deliveroo fees with 14-allergen menus and postcode zones across all 32 boroughs.",
        url: canonicalUrl,
        priceRange: "£250",
        areaServed: { "@type": "City", name: "London" },
        provider: {
          "@type": "Organization",
          "@id": "https://www.saimdev.site/#organization",
          name: "Saim Dev",
          url: "https://www.saimdev.site",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "London Takeaway Web Design Packages",
          itemListElement: [
            {
              "@type": "Offer",
              name: "London Direct Takeaway Ordering System",
              price: "250",
              priceCurrency: "GBP",
              description:
                "Fixed-price £250 Next.js ordering site with zero platform commission, 14-allergen dish filters, and postcode radius zoning.",
            },
          ],
        },
      },
      {
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
          { "@type": "ListItem", position: 4, name: "London", item: canonicalUrl },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        isPartOf: { "@id": `${canonicalUrl}#webpage` },
        mainEntity: londonFaqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <div className="rh-page min-h-screen bg-black text-white selection:bg-[#BAFF00] selection:text-[#0D0D0D]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(londonGraphSchema) }}
      />

      <RhHeader theme="dark" />

      <main>
        <RhHeroPinned
          badge="Greater London Hospitality Tech · Zones 1–6"
          breadcrumb={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Takeaway Web Design", href: "/services/takeaway-web-design" },
            { label: "London" },
          ]}
          title={
            <>
              Takeaway Website Design{" "}
              <span className="text-[#939393]">London</span>
            </>
          }
          subtitle="Direct Next.js 16 ordering websites for London takeaways, dark kitchens, and high-street restaurants from £250 fixed. Keep repeat neighbourhood orders off 30% courier apps across all 32 boroughs."
          primaryCta={{
            label: "Scope London Menu (£250)",
            href: "https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20discuss%20a%20London%20takeaway%20website",
          }}
          secondaryCta={{
            label: "Commission Calculator",
            href: "/tools/commission-savings-calculator",
          }}
          videoType="mobile"
          stripLabel="London Borough Ordering Specs"
          stripItems={[
            {
              label: "Zone 1–6 Postcodes",
              tag: "Dispatch",
              tagValue: "Borough Fencing",
              summary: "Restrict own-driver runs to profitable postcodes and steer bridges to Click & Collect.",
              href: "/services/takeaway-web-design",
            },
            {
              label: "Commuter Pre-Order",
              tag: "Peak Window",
              tagValue: "17:30–20:00",
              summary: "Capture station-walk home collections in Brixton, Clapham, Shoreditch & Stratford.",
              href: "/hotbite/index.html",
            },
            {
              label: "Borough EHO Ready",
              tag: "FSA Hygiene",
              tagValue: "14 Allergens",
              summary: "Clear dish-level allergen tags aligned with strict London borough environmental inspections.",
              href: "/blog/natashas-law-ppds-food-labelling-guide",
            },
            {
              label: "Fixed £250 Setup",
              tag: "Margins",
              tagValue: "£0 App Fee",
              summary: "Replace £3,000+ annual portal commissions with owned domain direct ordering.",
              href: "/pricing",
            },
            {
              label: "Dark Kitchen Ready",
              tag: "QR Packaging",
              tagValue: "Bag Flyers",
              summary: "Turn Deliveroo/Uber first-timers in Bermondsey & Bow into commission-free regulars.",
              href: "/contact",
            },
          ]}
        />

        <RhTakeawayCityBody
          stats={[
            { value: "£250", label: "Fixed Launch Fee", detail: "Zero per-order commission" },
            { value: "Zones 1–6", label: "London Postcode UI", detail: "E, SE, SW, N, W, NW prefixes" },
            { value: "14 FSA", label: "Allergen Tagging", detail: "Natasha's Law matrix UX" },
            { value: "4–5 Days", label: "Menu Turnaround", detail: "Paper flyer to live cart" },
          ]}
          aeoQuestion="How do independent London kitchens shift repeat orders off Deliveroo and Uber Eats?"
          aeoAnswer="Smart London takeaways remain discoverable on aggregators for cold first-time traffic, then tuck a bold 'Direct Exclusive: 10% Off + Free Side at OurOwnSite.co.uk' QR flyer inside every sealed delivery bag. Regular flats in Hackney, Greenwich, Ealing, or Kensington scan once and reorder directly with zero 28–34% aggregator cuts."
          marketEyebrow="London Unit Economics"
          marketHeading="Protecting Capital-City Kitchens From High Portal Fees"
          marketSubtitle="High London rents, evening congestion overhead, and rising ingredient wholesale prices mean giving third-party marketplaces a third of repeat orders drains net margin fast."
          marketCards={[
            {
              icon: "percent",
              title: "Stop Subsidising Repeat Riders",
              description: "When a local flat two streets away reorders via an app, you forfeit 25%–34% unnecessarily. Own-brand collection and local direct drops preserve nearly full basket profit.",
            },
            {
              icon: "shield",
              title: "Pass Strict Borough Allergen Checks",
              description: "Councils across Camden, Islington, Lambeth, and Westminster expect unambiguous online allergen disclosures. Every dish card pairs cleanly with dietary toggles.",
            },
            {
              icon: "zap",
              title: "Built for Undergrounds & Busy Streets",
              description: "Londoners browse menus walking off the Tube or bus. Next.js 16 static caching opens full photography menus in a fraction of a second even on patchy signal.",
            },
          ]}
          localBenchmark={{
            eyebrow: "LONDON OPERATIONAL BENCHMARK",
            heading: "Tailoring Digital Ordering Around London Borough Logistics",
            intro: "How London direct-ordering stores differ from generic provincial restaurant templates:",
            rows: [
              {
                topic: "Borough Postcode & River Rules",
                detail: "Pre-set minimum basket levels inside close NW/E/SW zones while gently steering cross-river or outer postcodes toward discounted collection slots.",
              },
              {
                topic: "Commuter Click & Collect Slots",
                detail: "Highlight express 15-minute collection discounts for office workers heading home past Tube & Overground high streets.",
              },
              {
                topic: "Dark Kitchen Flyer Conversion",
                detail: "Custom high-contrast QR packaging cards supplied at handover to move delivery-unit regulars off marketplaces legally.",
              },
              {
                topic: "London LocalBusiness Schema",
                detail: "Clean London areaServed city & postcode entities linking your menu route cleanly alongside Google Business Profile.",
              },
            ],
          }}
          coverageEyebrow="All 32 London Boroughs"
          coverageHeading="Postcode Zoning Across North, East, South & West London"
          coverageSubtitle="Remote setup covering every inner and outer Greater London dining strip — from Soho & Shoreditch to Tooting, Stratford, & Hounslow:"
          coverageAreas={[
            "Soho, Bloomsbury & W1",
            "Hackney, Dalston & E8",
            "Tower Hamlets, Bow & E3",
            "Islington & Camden NW1",
            "Bermondsey & Peckham SE",
            "Brixton & Clapham SW",
            "Ealing, Acton & W3",
            "Stratford, Barking & IG/E",
          ]}
          toolsHeading="Takeaway ROI Calculator & UK Hygiene Guides"
          toolsDescription="Estimate delivery commission savings cleanly, then review our 5-star EHO hygiene and Natasha's Law PPDS compliance checklists."
          toolsCtaLabel="Run Commission Calculator"
          faqEyebrow="London Operator Questions"
          faqHeading="London Takeaway Website FAQ"
          faqs={londonFaqs}
          networkHeading="Explore UK Takeaway Web Hubs"
          networkSubtitle="View our national takeaway architecture hub alongside regional ordering strategies across England."
          siblings={[
            {
              href: "/services/takeaway-web-design",
              tag: "National Hub",
              title: "UK Takeaway Web Design",
              description: "National commission-free menu packages (£250 / £390 Stripe / £450 Multi-Branch).",
            },
            {
              href: "/services/takeaway-web-design-birmingham",
              tag: "West Midlands",
              title: "Birmingham Takeaway Web Design",
              description: "Direct ordering tuned for Balti Triangle curry houses, Digbeth, & B-postcodes.",
            },
            {
              href: "/services/takeaway-web-design-manchester",
              tag: "North West",
              title: "Manchester Takeaway Web Design",
              description: "Late-night Rusholme, Northern Quarter, and Greater Manchester online ordering.",
            },
          ]}
          ctaHeading="Keep Your London Kitchen Margin at Home"
          ctaSubtitle="Send your flyer photo on WhatsApp for a crisp mobile concept layout, £250 fixed quote, and 4-day turnaround."
          whatsappHref="https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20launch%20a%20direct%20London%20takeaway%20website"
          architectureSection={
            <RhSystemRows
              overline="04 / LONDON MENU ARCHITECTURE"
              title="Built to convert"
              titleMuted="first-time app diners into site regulars."
              subtitle="Structured around fast high-street takeaway collections, meal-deal combos, and clean postcode dispatch."
              rows={[
                {
                  num: "01",
                  title: "Click & Collect Commuter Promos",
                  description: "Show automated 10% collection perks above delivery prices so local pedestrians skip delivery delays cleanly.",
                  tags: ["Zone 1–6", "Express Pickup", "High Margin"],
                  href: "/hotbite/index.html",
                },
                {
                  num: "02",
                  title: "14-Allergen Menu Search Filter",
                  description: "Interactive allergen matrix tagging nuts, gluten, dairy, sesame, and mustard cleanly beside dishes.",
                  tags: ["Borough EHO", "FSA Guidance", "Clean Matrix"],
                  href: "/blog/natashas-law-ppds-food-labelling-guide",
                },
                {
                  num: "03",
                  title: "Stripe Apple Pay & WhatsApp Docket",
                  description: "Accept cards directly via Stripe (£390 tier) or dispatch formatted cash-on-delivery tickets cleanly (£250).",
                  tags: ["0% App Commission", "Direct Receipts", "Own Domain"],
                  href: "/pricing",
                },
              ]}
            />
          }
          processSection={
            <RhProcessCarousel
              overline="06 / LONDON LAUNCH SPRINT"
              title="From paper flyer"
              titleMuted="to weekend direct trading."
              stagesSummaryCount="4"
              stagesSummaryTitle="Sprints"
              stagesSummaryText="Zero manual menu entry — snap photos of your London leaflet and we digitise the rest."
              stages={[
                {
                  stage: "01",
                  duration: "Day 1",
                  title: "Leaflet Capture & Postcode Plan",
                  description: "Review London delivery zones, collection timings, spicy modifiers, and mandatory allergen details.",
                  deliverables: ["Borough Matrix", "Full Dish JSON", "Fixed Scope"],
                },
                {
                  stage: "02",
                  duration: "Days 2–3",
                  title: "Tube-Speed Mobile Ordering UI",
                  description: "Build crisp dark menu layout with instant +/- basket drawers optimised for iOS & Android.",
                  deliverables: ["Thumb Navigation", "Combo Modifiers", "Staging Preview"],
                },
                {
                  stage: "03",
                  duration: "Day 4",
                  title: "A6 Flyer QR Code & Docket Tests",
                  description: "Export high-resolution print QR bag-stuffer graphics and verify live test tickets cleanly.",
                  deliverables: ["Print QR Vector", "Ticket Format", "Mobile Trace"],
                },
                {
                  stage: "04",
                  duration: "Day 5",
                  title: "Domain Cutover & Maps Integration",
                  description: "Wire your Google Business Profile Order Direct link onto your new London domain.",
                  deliverables: [".co.uk Routing", "GBP Order Link", "Repo Ownership"],
                },
              ]}
              quote="Reference London Scenario: Moving just 35 weekly borough repeat orders from 30% apps onto an owned QR website saves over £1,100 a month on typical £28 baskets."
              author="London Direct-Order Model"
              role="Zone 2 Takeaway Blueprint"
              ctaHref="/contact"
              ctaLabel="Start London Build"
            />
          }
        />
      </main>

      <SiteFooter theme="dark" />
    </div>
  );
}
