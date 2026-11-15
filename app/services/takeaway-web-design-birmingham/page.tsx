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
  title: "Takeaway Web Design Birmingham | Direct Site | Saim Dev",
  description:
    "Birmingham takeaway websites from £250 fixed. Bypass Just Eat commissions in the Balti Triangle and West Midlands with 14-allergen menus and WhatsApp dispatch.",
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
    title: "Takeaway Web Design Birmingham | Direct Site | Saim Dev",
    description:
      "Birmingham takeaway websites from £250 fixed. Bypass Just Eat commissions in the Balti Triangle and West Midlands with 14-allergen menus and WhatsApp dispatch.",
    url: "https://www.saimdev.site/services/takeaway-web-design-birmingham",
    siteName: "Saim Dev",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://www.saimdev.site/og-services.png",
        width: 1200,
        height: 630,
        alt: "Takeaway Web Design Birmingham - Saim Dev",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@saimwebdev",
    title: "Takeaway Web Design Birmingham | Direct Site | Saim Dev",
    description:
      "Birmingham takeaway websites from £250 fixed. Bypass Just Eat commissions in the Balti Triangle and West Midlands with 14-allergen menus and WhatsApp dispatch.",
    images: ["https://www.saimdev.site/og-services.png"],
  },
};

const birminghamFaqs = [
  {
    q: "Why are large family grill and Balti baskets in Birmingham hurt hardest by percentage commissions?",
    a: "Unlike solo £11 lunch boxes, West Midlands households regularly place £35–£65 mixed platters, Balti feasts, and naan family bundles. A flat 25%–32% app charge on a £55 order costs £14–£17 in a single ticket — whereas owned direct checkout drops platform fees near zero.",
  },
  {
    q: "Can Birmingham takeaways set postcode delivery tiers across B1–B98 suburbs?",
    a: "Yes — Birmingham delivery spans wide arterial routes between Sparkbrook, Digbeth, Erdington, Solihull, and Sutton Coldfield. We structure stepped postcode fees and minimum spend levels per ring so far-out drops stay strictly profitable.",
  },
  {
    q: "Do menus support Birmingham City Council Food Hygiene Rating (FHRS) trust badges?",
    a: "Yes — we allocate a proud verified 5-star Hygiene badge block paired with interactive 14-allergen filtering so West Midlands families order comfortably with clear ingredient notes.",
  },
  {
    q: "Can regular Foodhub or Just Eat customers migrate easily onto our own Birmingham domain?",
    a: "Every £250 package includes a high-contrast printable QR bag insert prompting local regulars with a direct collection/delivery perk when ordering straight at your .co.uk menu.",
  },
];

export default function BirminghamTakeawayWebDesignPage() {
  const canonicalUrl = "https://www.saimdev.site/services/takeaway-web-design-birmingham";

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
      { "@type": "ListItem", position: 4, name: "Birmingham", item: canonicalUrl },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${canonicalUrl}#service`,
    name: "Takeaway Web Design Birmingham - Saim Dev",
    description:
      "Birmingham takeaway websites from £250 fixed. Bypass Just Eat commissions in the Balti Triangle and West Midlands with 14-allergen menus and WhatsApp dispatch.",
    url: canonicalUrl,
    priceRange: "£250",
    areaServed: { "@type": "City", name: "Birmingham" },
    provider: {
      "@type": "Organization",
      "@id": "https://www.saimdev.site/#organization",
      name: "Saim Dev",
      url: "https://www.saimdev.site",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Birmingham Takeaway Web Design Packages",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Birmingham Direct Takeaway Website",
          price: "250",
          priceCurrency: "GBP",
          description:
            "Fixed £250 West Midlands direct ordering menu featuring family platter modifiers, B-postcode zoning, and 14-allergen warnings.",
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
          badge="West Midlands & Balti Triangle · 0% Commission"
          title={
            <>
              Takeaway Web Design{" "}
              <span className="text-[#939393]">Birmingham</span>
            </>
          }
          subtitle="Direct Next.js 16 online ordering for Birmingham Balti houses, smash-burger bars, grill kitchens, and Black Country eateries from £250 fixed. Protect high-value family platters from percentage aggregator cuts."
          primaryCta={{
            label: "Scope Birmingham Build (£250)",
            href: "https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20discuss%20a%20Birmingham%20takeaway%20website",
          }}
          secondaryCta={{
            label: "Try Anzaar & Food Demos",
            href: "/anzaar/index.html",
          }}
          videoType="mobile"
          stripLabel="West Midlands Kitchen Ordering"
          stripItems={[
            {
              label: "Family Platter UX",
              tag: "Ticket Size",
              tagValue: "£40–£75 Baskets",
              summary: "Custom spice heat, naan swap, and sharing platter modifiers structured for West Midlands orders.",
              href: "/anzaar/index.html",
            },
            {
              label: "B-Postcode Rings",
              tag: "Coverage",
              tagValue: "B1–B98 Zones",
              summary: "Distinct minimum order & delivery pricing across Sparkbrook, Edgbaston, Solihull & Sutton.",
              href: "/services/takeaway-web-design",
            },
            {
              label: "Foodhub & App Switch",
              tag: "Savings",
              tagValue: "£0 Commission",
              summary: "Stop surrendering £10–£18 per family dinner to third-party aggregator portals.",
              href: "/pricing",
            },
            {
              label: "Council FHRS Trust",
              tag: "Allergens",
              tagValue: "Dairy / Nut Clear",
              summary: "Explicit ghee, almond, mustard, and gluten dish tagging matching Birmingham City Council checks.",
              href: "/tools/allergen-matrix-generator",
            },
            {
              label: "Free GP% Cost Tool",
              tag: "Margin Control",
              tagValue: "Platter Profit",
              summary: "Price mixed grill and lamb curry trays profitably with our free UK kitchen cost calculator.",
              href: "/food-cost-calculator",
            },
          ]}
        />

        <RhTakeawayCityBody
          stats={[
            { value: "£0%", label: "Per-Order Fee", detail: "Keep full tray & grill revenue" },
            { value: "B1–B98", label: "Midlands Zoning", detail: "Sparkbrook, Solihull, Dudley" },
            { value: "Spice + Allergen", label: "Custom Modifiers", detail: "Balti & platter variants" },
            { value: "5 Days", label: "Full Menu Digitised", detail: "Paper flyer to direct cart" },
          ]}
          aeoQuestion="How can Birmingham curry houses and grill takeaways protect high-ticket family order margins?"
          aeoAnswer="West Midlands group takeaways routinely generate larger basket sizes (£40–£70 per household) than inner-city solo lunches. Paying 25%–32% marketplace charges on large sharing orders wipes out gross margin on lamb and chicken grills. Shifting repeat family bookings onto a fixed £250 direct ordering domain preserves substantial cash per weekend."
          marketEyebrow="West Midlands Hospitality Market"
          marketHeading="Why Large Family Takeaway Orders Belong on Your Own Domain"
          marketSubtitle="Across the Balti Triangle, Soho Road, Alum Rock, Digbeth, and Solihull, family loyalty runs deep — customers love calling direct or reordering from a fast bookmark once shown where."
          marketCards={[
            {
              icon: "percent",
              title: "Zero Loss on High-Spend Baskets",
              description: "A £60 family mixed-grill order costs ~£18 via an aggregator. On an owned £250 storefront, your platform cut stays £0 while Stripe card settlement (on £390 tier) costs mere pence.",
            },
            {
              icon: "shield",
              title: "Clear Nut, Dairy & Mustard Declarations",
              description: "Rich sauces and masala marinades carry critical nut, almond, ghee, and sesame alerts. Highlighting all 14 allergens side-by-side elevates household buyer confidence.",
            },
            {
              icon: "zap",
              title: "Instant Saturday-Peak Responsiveness",
              description: "Clean mobile drawer carts process combo upgrades, mild/hot spice preferences, and side swaps smoothly without lag when queues stack up from 6pm–10pm.",
            },
          ]}
          localBenchmark={{
            eyebrow: "BIRMINGHAM SUBURB LOGISTICS",
            heading: "Built Around West Midlands Suburban Distances & Group Menus",
            intro: "Practical differences engineered specifically for Birmingham & Black Country takeaway operators:",
            rows: [
              {
                topic: "Suburban Minimum-Spend Tiers",
                detail: "Charge standard local delivery inside core B10/B12/B13 postcodes while applying fair distance thresholds for outer Solihull, Sutton Coldfield, or Walsall runs.",
              },
              {
                topic: "Tray & Feast Sharing Builders",
                detail: "Handle multi-item starter/curry/rice/naan set-meal choices smoothly cleanly instead of confusing stacked dropdown lists.",
              },
              {
                topic: "Halal & Dietary Badge Clarity",
                detail: "Prominent HMC/Halal verification icons and Vegetarian/Nut-Free indicators styled directly inside mobile dish tiles.",
              },
              {
                topic: "Midlands Local Search Signals",
                detail: "Dedicated West Midlands Schema entities reinforcing town/district relevance across Google Maps packs.",
              },
            ],
          }}
          coverageEyebrow="Birmingham & Midlands Delivery Zones"
          coverageHeading="Configured Across Every Major West Midlands District"
          coverageSubtitle="Remote setup covering independent high streets, dark kitchens, and family venues throughout Birmingham and bordering towns:"
          coverageAreas={[
            "Balti Triangle (Sparkbrook/Ladypool)",
            "Birmingham City & Digbeth",
            "Edgbaston & Harborne B15/B17",
            "Moseley & Kings Heath B13/B14",
            "Alum Rock & Washwood Heath",
            "Solihull & Shirley B90/B91",
            "Sutton Coldfield B72–B76",
            "Wolverhampton, West Brom & Coventry",
          ]}
          toolsHeading="West Midlands Kitchen Costing & Compliance Tools"
          toolsDescription="Use our free UK Food Cost Percentage calculator to cost mixed grill platters accurately before locking your direct online prices."
          toolsCtaLabel="Run GP% & Allergen Tools"
          faqEyebrow="Birmingham Operator FAQ"
          faqHeading="Birmingham Takeaway Website FAQ"
          faqs={birminghamFaqs}
          networkHeading="Explore UK Regional Takeaway Pages"
          networkSubtitle="Compare West Midlands specs alongside our national £250 takeaway blueprint, London, and Manchester pages."
          siblings={[
            {
              href: "/services/takeaway-web-design",
              tag: "National Hub",
              title: "UK Takeaway Web Design",
              description: "National fixed £250 direct ordering overview, Stripe tiers & demo storefronts.",
            },
            {
              href: "/services/takeaway-web-design-london",
              tag: "Capital City",
              title: "London Takeaway Web Design",
              description: "Zone 1–6 postcode fencing and Borough EHO compliance across Greater London.",
            },
            {
              href: "/services/takeaway-web-design-manchester",
              tag: "North West",
              title: "Manchester Takeaway Web Design",
              description: "Late-night Curry Mile student rush and Greater Manchester ordering UX.",
            },
          ]}
          ctaHeading="Stop Paying Third-Party Cuts on £50 Birmingham Family Orders"
          ctaSubtitle="Send your menu photos via WhatsApp. Go live cleanly with a £250 fixed site built around West Midlands diners."
          whatsappHref="https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20launch%20a%20direct%20Birmingham%20takeaway%20website"
        />

        <RhSystemRows
          overline="WEST MIDLANDS STACK"
          title="Custom menu selectors"
          titleMuted="without aggregator lease lock-in."
          subtitle="Built to highlight mixed grills, set-meal bundles, and allergen safety across Birmingham family kitchens."
          rows={[
            {
              num: "01",
              title: "Set-Meal & Platter Customiser UI",
              description: "Allow guests to select base curry, spice level, bread swaps, and chutney pots in clean step rows.",
              tags: ["Platter Upsells", "Fast Mobile UI", "Clean Tickets"],
              href: "/anzaar/index.html",
            },
            {
              num: "02",
              title: "Suburban Radius Minimum-Order Rules",
              description: "Prevent drivers losing fuel on low-margin outer B-postcode runs via clear postcode-matched spend thresholds.",
              tags: ["B1–B98 Rules", "Driver Friendly", "0% App Fees"],
              href: "/pricing",
            },
            {
              num: "03",
              title: "Midlands LocalBusiness Schema",
              description: "Rich JSON-LD metadata paired with printable SFBB records supporting 5-star Council inspections.",
              tags: ["Birmingham Geo", "FHRS Ready", "SFBB Templates"],
              href: "/food-safety-templates",
            },
          ]}
        />

        <RhProcessCarousel
          overline="MIDLANDS ROLLOUT TIMELINE"
          title="Digitise your menu"
          titleMuted="cleanly across 4 rapid steps."
          stagesSummaryCount="4"
          stagesSummaryTitle="Sprints"
          stagesSummaryText="Send paper menu leaflets or app screenshots — we build your complete ordering web app."
          stages={[
            {
              stage: "01",
              duration: "Day 1",
              title: "Platter, Spice & Allergen Audit",
              description: "Capture family deals, halal certifications, allergen columns, and Birmingham postcode pricing zones.",
              deliverables: ["Deal Structure", "14-Allergen Tags", "Postcode Matrix"],
            },
            {
              stage: "02",
              duration: "Days 2–3",
              title: "Branded Storefront & Basket Build",
              description: "Construct fast mobile ordering drawer supporting meal-for-4 combos and instant pickup toggles.",
              deliverables: ["Mobile Cart", "Combo Flow", "Staging URL"],
            },
            {
              stage: "03",
              duration: "Day 4",
              title: "WhatsApp / Stripe Docket QA",
              description: "Run test orders verifying kitchen ticket readability, allergy notes, and B-postcode math.",
              deliverables: ["Flyer QR PNG", "Live Ticket QA", "Allergen Prompt"],
            },
            {
              stage: "04",
              duration: "Day 5",
              title: "Launch & Repeat-Order Loop",
              description: "Connect your domain cleanly, print promo QRs on takeaway bags, and own every returning family.",
              deliverables: ["Domain Launch", "GBP Menu Link", "Source Handover"],
            },
          ]}
          quote="Reference Midlands Scenario: Retaining 28% platform commission across 20 weekly £55 family grill orders puts ~£1,230 extra cash monthly directly into kitchen payroll and stock."
          author="West Midlands Margin Model"
          role="Birmingham Platter Blueprint"
          ctaHref="/contact"
          ctaLabel="Scope Birmingham Build"
        />
      </main>

      <SiteFooter theme="dark" />
    </div>
  );
}
