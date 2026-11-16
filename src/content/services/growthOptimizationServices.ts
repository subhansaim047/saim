import type { ServicePageData } from "@/components/services/ServicePageTemplate";

export const GROWTH_OPTIMIZATION_SERVICES: Record<string, ServicePageData> = {
  // ==============================================================
  // 9. HIGH-CONVERTING LANDING PAGES (CRO)
  // ==============================================================
  "landing-pages-cro": {
    slug: "landing-pages-cro",
    serviceName: "Conversion Landing Pages",
    mainKeyword: "Landing Page Design & CRO UK",
    seoTitle: "Conversion Landing Pages UK | Google Ads CRO | Saim Dev",
    seoDescription:
      "Dedicated Google and Meta Ads landing pages built in Next.js 16. Fast mobile above-the-fold clarity, GA4 event tracking and fixed packages from £250.",
    canonicalUrl: "https://www.saimdev.site/services/landing-pages-cro",
    badge: "Paid Traffic & Lead-Gen Funnels • From £250",
    h1: "Conversion-Engineered Landing Pages — Stop Wasting Paid Ad Clicks on Slow Homepages",
    subheading:
      "Built strictly around one campaign offer, one audience pain point, and one crystal-clear CTA. Message-matched above-the-fold headlines, mobile thumb-zone triggers, GA4/Meta event firing, and crisp speed over 4G from £250 fixed.",
    primaryCtaText: "Book a Campaign Page (£250)",
    secondaryCtaText: "Inspect Funnel Concepts",
    stripLabel: "Ad-Click Conversion Architecture",
    stripItems: [
      {
        label: "1:1 Ad Message Match",
        tag: "Quality Score",
        tagValue: "Hero Clarity",
        summary: "Headline mirrors exact Google/Meta search intent inside the first 600ms of tap.",
        href: "/services/seo-services",
      },
      {
        label: "Single Conversion Path",
        tag: "Focus",
        tagValue: "Zero Distractions",
        summary: "Strip noisy header menus that leak paid traffic onto irrelevant About/Blog detours.",
        href: "/pricing",
      },
      {
        label: "Consent Mode v2",
        tag: "Tracking",
        tagValue: "GA4 + Meta Events",
        summary: "Clean conversion event triggers on form submit and WhatsApp tap aligned with UK PECR.",
        href: "/privacy",
      },
      {
        label: "From £250 Fixed",
        tag: "Pricing",
        tagValue: "£250 / £380 / £550",
        summary: "Matched directly with our studio Landing tier — optional A/B hero test variants included.",
        href: "/pricing",
      },
      {
        label: "Mobile Thumb CTAs",
        tag: "UX Detail",
        tagValue: "48px+ Targets",
        summary: "Sticky bottom-bar action prompts keep consultation booking reachable during scroll.",
        href: "/contact",
      },
    ],
    painPoints: [
      {
        problem: "Sending £2–£8 Google Ads clicks straight to a crowded homepage spreads visitor attention across 12 navigation links.",
        solution: "Dedicated landing pages remove distracting global nav detours, focusing every scroll section on proving and converting one specific offer.",
      },
      {
        problem: "Slow builder pages (Unbounce/Leadpages/ClickFunnels) delay initial paint over mobile networks, burning bounce clicks before headlines show.",
        solution: "Static-edge Next.js landing pages paint immediately, protecting Quality Score ratings and dropping cost-per-acquisition friction.",
      },
      {
        problem: "Long 10-field enquiry forms intimidate cold paid-social visitors into closing tabs mid-scroll.",
        solution: "Progressive micro-step forms, honest price qualifiers, and dual WhatsApp/calendar triggers keep friction low on mobile.",
      },
      {
        problem: "Subscription funnel software taxes campaigns £99–£297 every single month forever.",
        solution: "Deploy unlimited landing campaigns inside your own domain repository with £0 monthly SaaS seat rent.",
      },
    ],
    problemSection: {
      overline: "01 / PAID TRAFFIC WASTE AUDIT",
      titleBefore: "Stopping Ad Leakage From",
      titleStrike: "distracted generic homepages",
      titleOwned: "With Focused CRO Architecture.",
      subtitle:
        "You paid for the click — don't lose the visitor because the headline feels generic or takes 4 seconds to reveal a price cue.",
      solutionTag: "DIRECT-RESPONSE PAGE SYSTEM",
      solutionTitle: "Ad Scent Continuity + Low-Friction Micro-Steps",
      solutionDesc:
        "Every section follows proven persuasion sequencing: Value Prop Hero -> Friction Contrast -> Deliverables Proof -> Objection FAQ -> Risk-Reducing Guarantee.",
      solutionMetrics: [
        { value: "£250", label: "Fixed Campaign LP" },
        { value: "A/B", label: "Split Variant Option" },
        { value: "GA4", label: "Event Ready" },
      ],
      chartTitle: "Visitor Attention Drop-Off: Homepage vs Focused Funnel",
      chartBadge: "CRO Attention Model",
      chartYAxis: "Focus Retention Index",
      chartXAxis: "Destination Type",
      chartCaption:
        "Single-intent campaign pages remove unnecessary links, lifting form start likelihood per 100 paid ad clicks.",
      bars: [
        {value: "39", label: "Busy Homepage", heightPx: 74},
        {value: "59", label: "No-Code Unbounce", heightPx: 112},
        {value: "81", label: "Clean Brochure LP", heightPx: 150},
        {value: "97", label: "CRO Next.js Funnel", isHighlight: true, heightPx: 192},
      ],
    },
    deliverables: [
      {
        title: "Above-the-Fold Offer Hero & Visual Anchor",
        description: "Crisp problem-solving headline, sub-offer trust line, visual social proof, and primary CTA without scrolling.",
      },
      {
        title: "Mobile Sticky Thumb-Zone Trigger Bar",
        description: "Bottom conversion strip appearing cleanly after hero scroll so consultation booking is always one thumb away.",
      },
      {
        title: "Objection Handling & Offer Comparison Matrix",
        description: "Side-by-side table showing clearly what your offer includes compared to slow or vague alternatives.",
      },
      {
        title: "Micro-Step Qualification / WhatsApp Triage",
        description: "Clean short input forms with spam guard plus optional Calendly embed or instant pre-filled WhatsApp brief.",
      },
      {
        title: "A/B Headline / Hero Test Props (Tiered)",
        description: "Duplicate parameterized route variants (/offer-a, /offer-b) ready for Google Ads split testing.",
      },
      {
        title: "GA4, GTM & UK PECR Event Hygiene",
        description: "Clean custom conversion dataLayer pushes guarded properly by cookie consent checks.",
      },
    ],
    deliverablesMeta: {
      overline: "02 / CRO FUNNEL MODULES",
      title: "Engineered Inside Every",
      titleMuted: "Campaign Landing Page",
      subtitle:
        "Structured around eye-tracking scan behaviour on smartphone screens where 70%+ of paid traffic arrives.",
      rowTags: ["Paid Ads CRO", "Split-Test Ready", "£250 Fixed"],
    },
    sectionHeadings: {
      valueOverline: "03 / Conversion Anatomy",
      valueTitle: "Why Specialist Offer Pages",
      valueMuted: "Outperform Generic Pages",
      marketOverline: "04 / Campaign Use Cases",
      marketTitle: "High-Intent Niches &",
      marketMuted: "Funnel Concepts",
      processOverline: "05 / CAMPAIGN SPEED",
      processTitle: "Ad Brief to Live",
      processMuted: "URL in 3–5 Days",
      processSummary: "Built around your exact Ad Group keywords or Meta hook creative.",
      processStageTag: "GA4 Event Verified",
      stackOverline: "06 / FUNNEL TECH",
      stackTitle: "Owned Landing Code Without",
      stackMuted: "ClickFunnels Monthly Subscriptions",
      proofOverline: "07 / LIVE LEAD-GEN CONCEPTS",
      proofTitle: "Focused Campaign",
      proofMuted: "Concept Builds",
      pricingOverline: "08 / FIXED LANDING PAGE TIERS",
      pricingTitle: "Ad-Ready CRO",
      pricingMuted: "Packages",
      pricingNote: "Matched to our £250 Landing tier • Includes GA4 trigger wiring",
      pricingButtonText: "Launch Campaign Page",
      advantageOverline: "09 / Why Owned Code Beats SaaS Funnels",
      advantageTitle: "Faster Quality Scores at",
      advantageMuted: "Zero Recurring Per-Page Rent",
      feedbackOverline: "10 / Target Reference Scenarios",
      feedbackTitle: "Paid Traffic",
      feedbackMuted: "Funnel Blueprints",
      faqOverline: "11 / Ad & Tracking FAQ",
      faqIntro:
        "Questions on Subdomain vs Root Path URLs, Google Ads Quality Score impact, A/B splits, and pixel firing.",
      bannerTag: "Fixed £250 • Sub-Second Paint • A/B Variant Option",
    },
    featuresAndBenefits: [
      {
        feature: "Root Domain Path (yoursite.com/offer)",
        benefit: "Avoid Tracking Cookie Loss",
        description: "Host funnels right inside your primary domain instead of clumsy Unbounce third-party subdomains.",
      },
      {
        feature: "Zero Global Menu Detours",
        benefit: "Higher Funnel Completion",
        description: "Optional logo-only minimalist header prevents ad clickers wandering off onto old About/Career tabs.",
      },
      {
        feature: "Scannable Visual Proof Blocks",
        benefit: "Passes 5-Second Test",
        description: "Checkmarks, clear price cues, timeline transparency, and concrete spec cards scan cleanly at thumb speed.",
      },
      {
        feature: "Low Client-JS Footprint",
        benefit: "Supports Google Ads Quality Score",
        description: "Fast landing page load metrics contribute directly toward favourable Landing Page Experience checks.",
      },
      {
        feature: "Copy & Headline Structure Coaching",
        benefit: "Stronger Ad Continuity",
        description: "We tighten bloated paragraphs into crisp benefit headlines aligned with your search keyword theme.",
      },
      {
        feature: "Clean Noindex Option for Paid-Only Tests",
        benefit: "Zero Keyword Cannibalisation",
        description: "Keep aggressive paid split-test variants cleanly marked noindex if desired while organic service pages rank cleanly.",
      },
    ],
    industries: [
      {
        industry: "Private Clinics & Cosmetic Offers",
        description: "Treatment-specific campaigns (Invisalign, Skin Boosters, Consultations) with qualification booking steps.",
        exampleProject: "MedSpa Clinic Concept",
        demoUrl: "/demos/medspa/index.html",
      },
      {
        industry: "High-Ticket Trades & Detailing",
        description: "Ceramic coating, solar, boiler, and roofing paid-search quote funnels for regional UK postcodes.",
        exampleProject: "AK Detailing Concept",
        demoUrl: "/demos/akdetailing/index.html",
      },
      {
        industry: "B2B Lead Magnets & Audits",
        description: "High-trust downloadable guides, calculators, and audit requests converting LinkedIn & Google traffic.",
        exampleProject: "Studio D'Brickell Concept",
        demoUrl: "/demos/studio-dbrickell/index.html",
      },
      {
        industry: "Hero Product Single-SKU Drops",
        description: "Focused advertorial + direct checkout landers for hero consumer products promoted on Meta & TikTok.",
        exampleProject: "HQ Leathercon Showcase",
        demoUrl: "/hq-leathercon/index.html",
      },
      {
        industry: "Wellness & Aesthetic Launches",
        description: "Editorial new-location promo landers pairing voucher incentives cleanly with online booking.",
        exampleProject: "Serenia Wellness Concept",
        demoUrl: "/demos/serenia/index.html",
      },
      {
        industry: "Mobile On-Demand Services",
        description: "Rapid postcode coverage validation paired with instant booking inquiries.",
        exampleProject: "Beauticians On The Go",
        demoUrl: "/demos/beauticiansonthego/index.html",
      },
    ],
    process: [
      {
        step: "Step 01",
        title: "Ad Creative & Offer Alignment",
        description: "Review your Google Ad headlines, Meta hooks, primary competitor pages, and core conversion CTA.",
        duration: "Day 1",
      },
      {
        step: "Step 02",
        title: "Wireframe Copy & Hero Angle",
        description: "Structure scannable hero message, trust metrics, comparison contrast, and micro-step lead capture.",
        duration: "Day 2",
      },
      {
        step: "Step 03",
        title: "Next.js Funnel & Tracking Wiring",
        description: "Code responsive desktop/mobile UI, configure GA4 / GTM conversion events, and verify WhatsApp/CRM forms.",
        duration: "Day 3–4",
      },
      {
        step: "Step 04",
        title: "Live Tag Check & Campaign Go-Live",
        description: "Verify Tag Assistant trigger events across test clicks before you turn paid ad spend live.",
        duration: "Day 5",
      },
    ],
    techStack: [
      { name: "Next.js 16 Edge", role: "Fast Ad-Click First Paint" },
      { name: "GTM / GA4 Consent v2", role: "Clean Conversion Attribution" },
      { name: "Multi-Step Hook Forms", role: "High Completion Lead Flow" },
      { name: "Tailwind CSS", role: "Mobile-First Sticky Thumb UI" },
      { name: "Variant Routing Props", role: "Clean A/B Headline Splits" },
      { name: "Spam Honeypot Guards", role: "Higher Lead Purity" },
    ],
    caseStudies: [
      {
        title: "MedSpa High-Intent Offer Concept",
        category: "Clinic Lead Funnel",
        description: "Focused treatment funnel concept featuring trust reassurance, process steps, and fast consultation CTAs.",
        tech: ["Clean Hierarchy", "Mobile UX", "Booking CTA"],
        metrics: "Interactive Demo",
        demoUrl: "/demos/medspa/index.html",
      },
      {
        title: "AK Detailing Service Quote Funnel",
        category: "Local Google Ads Pattern",
        description: "Tiered service cards built to convert local search intent into pre-qualified garage bookings.",
        tech: ["Package Contrast", "Fast 4G Paint", "WhatsApp CTA"],
        metrics: "Interactive Demo",
        demoUrl: "/demos/akdetailing/index.html",
      },
      {
        title: "Beauticians On The Go Booking Page",
        category: "Mobile-First Conversion UI",
        description: "Rapid service selection structure tuned specifically for smartphone visitors coming from social ads.",
        tech: ["Responsive Flow", "Clear CTAs", "Low Bounce"],
        metrics: "Interactive Demo",
        demoUrl: "/demos/beauticiansonthego/index.html",
      },
    ],
    competitorComparison: {
      overline: "FUNNEL PLATFORM ECONOMICS",
      title: "Owned Next.js Funnel vs",
      titleMuted: "Unbounce, Leadpages & ClickFunnels",
      subtitle:
        "See how fixed-fee bespoke funnel code compares against recurring funnel-builder software.",
      columns: ["Campaign Metric", "Saim Dev Next.js Landing (£250)", "Paid Funnel Builders (£99+/mo)"],
      rows: [
        {
          criteria: "12-Month Software Spend",
          saim: "£250 once — runs natively on your primary site",
          alternative: "£1,188+ / year per workspace seat & traffic cap",
        },
        {
          criteria: "Subdomain vs Root Domain",
          saim: "Serves natively from yourdomain.co.uk/offer with shared SEO authority",
          alternative: "Often forced onto promo.yourdomain.com losing cookie & domain context",
        },
        {
          criteria: "Builder Overhead Bloat",
          saim: "Zero third-party drag-and-drop wrapper JS",
          alternative: "Shared funnel runtime styles slow mobile paint",
        },
        {
          criteria: "Form Routing Ownership",
          saim: "Sends cleanly to your email, CRM webhook, Calendly, or WhatsApp",
          alternative: "Lead data trapped behind Zapier webhook paid tiers",
        },
      ],
    },
    engineeringChecklist: {
      title: "Paid Search & Paid Social Readiness Audit",
      subtitle:
        "Verified across test ads prior to directing paid spend to your new landing URL:",
      items: [
        "Hero headline, sub-headline, and primary button completely visible inside 390x844 iPhone viewport",
        "Zero unrequested external navigation links leaking traffic away from main CTA",
        "Clear UK Privacy Policy & Terms links cleanly visible beside every enquiry submit button",
        "Dedicated thank-you conversion confirmation state (or /thank-you redirect for pixel deduplication)",
        "Explicit image width/height ensuring zero accidental tap shifts during load",
        "Spam honeypot + rate protection filtering junk bots from polluting Google Ads offline data",
      ],
    },
    pricing: [
      {
        name: "Single Campaign LP",
        price: "£250",
        description: "One conversion-engineered landing page built for a single product, treatment, or search offer.",
        popular: true,
        features: [
          "High-clarity offer copy restructuring",
          "Custom mobile-first responsive build",
          "Contact form + WhatsApp + Calendly CTA",
          "GA4 / Meta / Google Ads conversion events",
          "Dedicated confirmation state for tracking",
          "7 days post-launch technical support",
        ],
      },
      {
        name: "LP + A/B Split Variant",
        price: "£380",
        description: "Deliver two controlled landing routes testing distinct hero hooks, proof blocks, or pricing frames.",
        features: [
          "Everything in Single LP + /variant-b route",
          "Clean noindex option on paid test variants",
          "GTM dataLayer tracking event mapping",
          "Interactive calculator / qualification quiz toggle",
          "2 rounds of fast copy & CRO refinement",
          "14 days dedicated support",
        ],
      },
      {
        name: "Multi-Offer Ad Suite",
        price: "£550",
        description: "Up to 3 tailored campaign landers mapped across distinct Google Ad Groups or local UK regions.",
        features: [
          "Up to 3 targeted offer landing pages",
          "Shared unified component design tokens",
          "Custom lead triage per offer / location",
          "PECR Cookie Mode consent configuration",
          "Full GitHub handover + tracking check",
          "21 days campaign launch support",
        ],
      },
    ],
    whyChooseUs: [
      {
        title: "Synced With £250 Landing Tier",
        desc: "Exact clear entry fee matching our studio /pricing tier without mysterious media-buyer retainers.",
      },
      {
        title: "Direct Response Copy Discipline",
        desc: "We banish vague slogans like 'Innovative Excellence' in favour of plain answers to price, speed, and risk.",
      },
      {
        title: "No Page-View Traffic Caps",
        desc: "Scale ad spend from 500 to 50,000 monthly clicks without an Unbounce plan automatically bumping tiers.",
      },
      {
        title: "Consent & Privacy Compliant",
        desc: "Clean analytics loading respects PECR preferences cleanly on UK visits.",
      },
      {
        title: "Built For Paid Ad Teams & Freelancers",
        desc: "Drop our static React landing components seamlessly alongside any existing site or marketing stack.",
      },
      {
        title: "Lightning Turnaround",
        desc: "Campaign going live next week? Focused single-offer LPs ship rapidly within 3–5 working days.",
      },
    ],
    testimonials: [
      {
        quote: "Illustrative target scenario: A UK dental clinic redirecting Google Ads clicks from its noisy 12-page menu onto a focused Invisalign offer page with instant consult triage.",
        client: "Cosmetic Dental Practice",
        role: "Search Ad Funnel",
        company: "Reference Specification",
      },
      {
        quote: "Illustrative target scenario: A home insulation/trade advertiser matching town names dynamically in hero copy for local search Ad Groups.",
        client: "Regional Energy Trade",
        role: "Local PPC Scenario",
        company: "Reference Specification",
      },
      {
        quote: "Illustrative target scenario: A B2B consultancy escaping £120/mo Leadpages bills while doubling mobile hero speed on Meta traffic.",
        client: "Advisory Firm",
        role: "Paid Social Scenario",
        company: "Reference Specification",
      },
    ],
    faqs: [
      {
        question: "Can this landing page sit inside my existing WordPress or Shopify domain?",
        answer:
          "Yes — we can deploy it cleanly via reverse proxy / Cloudflare route at yourdomain.co.uk/offer or dedicated fast subdomain offer.yourdomain.co.uk so your main legacy site remains untouched.",
      },
      {
        question: "Do I get a /thank-you confirmation state for tracking Google Ads conversions?",
        answer:
          "Yes. We trigger both clean client/dataLayer conversion events and an optional distinct /thank-you state or URL view so Google Ads & Meta Pixel count qualified submissions cleanly.",
      },
      {
        question: "Do you write the landing page headline and structure?",
        answer:
          "Yes. Give us your campaign brief, USP, and price anchor — we write structured, benefit-led British English copy built around visitor objections before visual sign-off.",
      },
      {
        question: "Why avoid using global site menus inside PPC landing pages?",
        answer:
          "Clicking a 'Blog' or 'About Team' header menu interrupts purchase momentum; clean focused pages typically convert noticeably better than general homepages.",
      },
      {
        question: "How fast can we launch an urgent campaign page?",
        answer:
          "Standard single landing pages complete inside 3–5 working days once assets and offer details are shared.",
      },
    ],
    finalCta: {
      headline: "Stop Paying Full Click Prices Into Leaky, Slow Websites",
      description:
        "Send us the URL you currently route ads to plus your offer pitch. Get a concrete conversion teardown and £250 fixed landing plan.",
      primaryButtonText: "Fix My Paid Traffic Funnel",
      whatsappText: "CRO Campaign Landing Page (£250)",
    },
    relatedServices: [
      {
        name: "Business Websites UK",
        href: "/services/business-websites",
        desc: "Upgrade your entire multi-page SME brand presence from £390.",
      },
      {
        name: "Website Speed Optimisation",
        href: "/services/website-speed-optimization",
        desc: "Eliminate slow mobile paint bottlenecks across existing site assets.",
      },
      {
        name: "Custom Next.js eCommerce",
        href: "/services/ecommerce-development",
        desc: "Connect direct product sales directly into Stripe Apple Pay & Klarna.",
      },
    ],
  },

  // ==============================================================
  // 10. WEBSITE REDESIGN & MODERNISATION SERVICES
  // ==============================================================
  "website-redesign": {
    slug: "website-redesign",
    serviceName: "Website Redesign & Upgrade",
    mainKeyword: "Website Redesign Services UK",
    seoTitle: "Website Redesign Services UK | Next.js Rebuild | Saim Dev",
    seoDescription:
      "Modernise dated websites into high-speed Next.js 16 builds while safeguarding existing Google rankings with full 301 redirect mapping and free preview.",
    canonicalUrl: "https://www.saimdev.site/services/website-redesign",
    badge: "Visual Overhaul & SEO Preservation",
    h1: "Modern Website Redesigns — Rebuilt Cleanly in Next.js 16 Without Dropping Rankings",
    subheading:
      "Your expertise grew, but your website still looks stuck in 2017 — cramped mobile text, generic stock banners, and declining engagement. Modernise visual authority, motion, accessibility, and speed in one complete rebuild protected by a Free Concept Preview option.",
    primaryCtaText: "Request Free Concept Preview",
    secondaryCtaText: "See Modernisation Demos",
    stripLabel: "Full Brand & UX Upgrade",
    stripItems: [
      {
        label: "Free Concept Option",
        tag: "Preview First",
        tagValue: "Live Staging Link",
        summary: "Inspect a bespoke hero & section direction preview before activating full build sprint.",
        href: "/contact",
      },
      {
        label: "Zero Ranking Loss",
        tag: "SEO Audit",
        tagValue: "301 Mapped",
        summary: "Every backlinked URL, image alt, and meta title audited side-by-side before switch.",
        href: "/services/seo-services",
      },
      {
        label: "Modern Design System",
        tag: "Visual UX",
        tagValue: "WCAG AA Contrast",
        summary: "Updated typography rhythm, dark/light sections, interactive UI cards, and crisp spacing.",
        href: "/demos",
      },
      {
        label: "Codebase Fresh Start",
        tag: "Refactor",
        tagValue: "React 19 + Tw",
        summary: "Drop messy nested legacy tables, broken Bootstrap v3 grids, and jQuery conflicts forever.",
        href: "/technologies",
      },
      {
        label: "Fixed Tier Pricing",
        tag: "Budget Clarity",
        tagValue: "£550 / £950 / £1,650",
        summary: "Milestone payment structure cleanly aligned with written page & redesign scope.",
        href: "/pricing",
      },
    ],
    painPoints: [
      {
        problem: "Outdated aesthetics instantly lower perceived authority — prospects assume operational quality matches a stale site.",
        solution: "Upgrading to sharp editorial typography, purposeful whitespace, and modern motion positions your brand seamlessly alongside top-tier peers.",
      },
      {
        problem: "Cosmetic CSS skinning on top of broken legacy HTML leaves slow load times, awkward mobile overflow, and messy source debt.",
        solution: "We re-architect clean TypeScript components from scratch rather than taping fresh paint over crumbling legacy markup.",
      },
      {
        problem: "Careless redesign launches break existing Google-indexed pages, causing sudden organic traffic crashes.",
        solution: "We benchmark your live Search Console top pages and ship exact path parity plus tested 301 rules at launch.",
      },
      {
        problem: "Decision-makers hesitate investing £550–£1,650 blindly without seeing the modern aesthetic direction first.",
        solution: "For qualifying commercial builds, request a non-binding homepage Free Concept Preview on staging first.",
      },
    ],
    problemSection: {
      overline: "01 / LEGACY TRUST EROSION",
      titleBefore: "Upgrading Past",
      titleStrike: "dated 2017 template skins",
      titleOwned: "To Editorial Agency Authority.",
      subtitle:
        "Modern buyers judge professionalism in under half a second on mobile. An overcrowded header and fuzzy slider tell visitors they can negotiate prices down.",
      solutionTag: "FULL ARCHITECTURE MODERNISATION",
      solutionTitle: "New Visual Poise + Preserved Search Equity",
      solutionDesc:
        "We replace cluttered multi-row navbars, low-contrast grey-on-grey forms, and static stock boxes with sharp typographic contrast, interactive drawers, and schema-verified architecture.",
      solutionMetrics: [
        { value: "Free", label: "Concept Preview Option" },
        { value: "301", label: "URL Equity Map" },
        { value: "WCAG", label: "Accessible Contrast" },
      ],
      chartTitle: "Visual Trust & Mobile Usability Lift Model",
      chartBadge: "Redesign Reference",
      chartYAxis: "UX & Trust Index",
      chartXAxis: "Design Era",
      chartCaption:
        "Replacing dated template sites with fresh typography and focused buyer paths restores trust without cannibalising search equity.",
      bars: [
        {value: "37", label: "2016 Bootstrap Site", heightPx: 74},
        {value: "58", label: "CSS Reskin Only", heightPx: 112},
        {value: "79", label: "Clean Static Site", heightPx: 150},
        {value: "98", label: "Full Next.js Redesign", isHighlight: true, heightPx: 192},
      ],
    },
    deliverables: [
      {
        title: "Full UI/UX Teardown & Aesthetic Direction",
        description: "Audit current friction points, weak mobile hierarchy, and broken layouts prior to redesigning.",
      },
      {
        title: "New Design Token System & Typography",
        description: "Cohesive font pairing, responsive heading scales, dark/light editorial sections, and card depth.",
      },
      {
        title: "Complete Content Flow Restructuring",
        description: "Reorganise dense walls of text into scannable comparison decks, checklists, and clear FAQs.",
      },
      {
        title: "Full URL Parity & 301 Redirect Plan",
        description: "Safeguard top organic entry routes, external backlinks, and PDF assets during transition.",
      },
      {
        title: "Modern Motion & Tactile States",
        description: "Subtle interactive accordions, sticky stacks, and smooth page switches free of scroll jank.",
      },
      {
        title: "Accessibility & Contrast Remediation",
        description: "Verify legible base font sizing (>=16px body), crisp focus outlines, and clean landmark ARIA tags.",
      },
    ],
    deliverablesMeta: {
      overline: "02 / MODERNISATION DELIVERABLES",
      title: "Engineered Into Every",
      titleMuted: "Website Redesign",
      subtitle:
        "Never cosmetic CSS patches — complete design system reconstruction inside clean React 19 & Tailwind code.",
      rowTags: ["UX Overhaul", "SEO Preserved", "Clean React"],
    },
    sectionHeadings: {
      valueOverline: "03 / Commercial Refresh Impact",
      valueTitle: "What Changes When Visitors",
      valueMuted: "See Modern Craft",
      marketOverline: "04 / Cross-Sector Upgrades",
      marketTitle: "Redesign Examples Across",
      marketMuted: "Service & Retail Niches",
      processOverline: "05 / RISK-REDUCED REDESIGN FLOW",
      processTitle: "Preview Aesthetic Direction",
      processMuted: "Before Full Commitment",
      processSummary: "Request Free Concept Preview option, confirm URL map, deploy cleanly to staging.",
      processStageTag: "Side-by-Side Diff Audit",
      stackOverline: "06 / REBUILT PLATFORM",
      stackTitle: "Throwing Out Legacy JQuery",
      stackMuted: "And Keeping Modern Speed",
      proofOverline: "07 / BENCHMARK MODERN BUILDS",
      proofTitle: "Compare Visual",
      proofMuted: "Editorial Polish",
      pricingOverline: "08 / FIXED REDESIGN PACKAGES",
      pricingTitle: "Transparent Redesign",
      pricingMuted: "Investment",
      pricingNote: "Fixed quote by page tier • 50/50 milestones • Free Concept option",
      pricingButtonText: "Request Redesign Quote",
      advantageOverline: "09 / Why Rebuild Instead of Re-Skinning",
      advantageTitle: "Replace Old Code Debt,",
      advantageMuted: "Don't Paint Over It",
      feedbackOverline: "10 / Target Reference Scenarios",
      feedbackTitle: "Typical Redesign",
      feedbackMuted: "Transformations",
      faqOverline: "11 / Redesign Safety FAQ",
      faqIntro:
        "Clarity on handling existing text/copywriting, logo refreshes, Google ranking protection, and Free Concept criteria.",
      bannerTag: "Free Concept Preview Option • 301 SEO Guard • £550–£1,650",
    },
    featuresAndBenefits: [
      {
        feature: "Restructured Messaging Hierarchy",
        benefit: "Instant Visitor Comprehension",
        description: "Clear headline specificity replaces vague corporate mission waffle.",
      },
      {
        feature: "Legacy Mobile Horizontal-Overflow Removal",
        benefit: "Zero Pinched Tables or Buttons",
        description: "Every card, pricing table, and hero grid fits 360px smartphone viewports smoothly.",
      },
      {
        feature: "Modern Stock & Vector Upgrades",
        benefit: "Retina Crispness Throughout",
        description: "Swap stretched 72dpi JPEGs and pixelated icons for clean high-DPI SVGs and WebPs.",
      },
      {
        feature: "Zero Broken Links During Cutover",
        benefit: "Clean Search Console Health",
        description: "Automated link checking across every updated route and image path pre-DNS switch.",
      },
      {
        feature: "Consolidated Tooling Architecture",
        benefit: "Remove Third-Party Widget Clutter",
        description: "Replace clunky external form iframes and sluggish popup banners with crisp native code.",
      },
      {
        feature: "Retain What Already Works",
        benefit: "Honour Verified Brand Equity",
        description: "Keep core logo marks, established colour DNA, and proven offers while upgrading layout execution.",
      },
    ],
    industries: [
      {
        industry: "Architects & Engineering Consultancies",
        description: "Elevate dated gallery grids into crisp modern project portfolios worthy of commercial briefs.",
        exampleProject: "Architecture Studio",
        demoUrl: "/demos/architecture/index.html",
      },
      {
        industry: "Private Health & Aesthetic Practices",
        description: "Shift clinical template portals into warm, reassuring luxury patient experiences.",
        exampleProject: "MedSpa Clinic Concept",
        demoUrl: "/demos/medspa/index.html",
      },
      {
        industry: "Established Family Trades & Services",
        description: "Modernise trusted 15-year trading businesses so younger homeowners book immediately online.",
        exampleProject: "AK Detailing Concept",
        demoUrl: "/demos/akdetailing/index.html",
      },
      {
        industry: "Legacy Retail & eCommerce Shops",
        description: "Upgrade stiff 2015 catalog tables into fast interactive product discovery experiences.",
        exampleProject: "HQ Leathercon Store",
        demoUrl: "/hq-leathercon/index.html",
      },
      {
        industry: "Boutique Hospitality & Venues",
        description: "Turn difficult PDF menus and sluggish Flash-era sites into instant mobile ordering & booking.",
        exampleProject: "HotBite Concept",
        demoUrl: "/hotbite/index.html",
      },
      {
        industry: "Spas, Salons & Lifestyle Studios",
        description: "Elevate brand presentation seamlessly to match premium treatment pricing.",
        exampleProject: "Serenia Wellness Concept",
        demoUrl: "/demos/serenia/index.html",
      },
    ],
    process: [
      {
        step: "Step 01",
        title: "URL Audit & Free Concept Mockup",
        description: "Inspect your live domain, map top SEO URLs, and deliver an optional homepage visual direction preview.",
        duration: "Day 1–3",
      },
      {
        step: "Step 02",
        title: "Copy Sharpening & Page Restructuring",
        description: "Reorganise service sections cleanly, streamline navigation labels, and finalise visual tokens.",
        duration: "Day 4–5",
      },
      {
        step: "Step 03",
        title: "Clean Next.js Build & 301 Redirect Rules",
        description: "Hand-code all responsive layouts, accessible drawers, contact routing, and permanent redirects.",
        duration: "Day 6–10",
      },
      {
        step: "Step 04",
        title: "Staging Inspection & Seamless Switch",
        description: "Verify every link and Schema entity on private URL before smooth zero-downtime cutover.",
        duration: "Day 11–12",
      },
    ],
    techStack: [
      { name: "Next.js 16", role: "Fast Fresh Foundation" },
      { name: "Tailwind CSS v4", role: "Modern Accessible Tokens" },
      { name: "next.config Redirects", role: "Old-to-New URL Mapping" },
      { name: "Framer Motion / GSAP", role: "Refined Brand Motion" },
      { name: "JSON-LD Entity Schema", role: "Upgraded Rich Markup" },
      { name: "GitHub Repository", role: "Clean Versioned Handover" },
    ],
    caseStudies: [
      {
        title: "Architecture Studio Portfolio Refresh Concept",
        category: "Modern Minimalist Redesign",
        description: "Demonstrating restrained editorial spacing, sharp typography, and crisp architectural project galleries.",
        tech: ["Editorial Typography", "Gallery Grid", "Clean Code"],
        metrics: "Interactive Demo",
        demoUrl: "/demos/architecture/index.html",
      },
      {
        title: "Serenia Spa Aesthetic Refresh Concept",
        category: "Luxury Visual Polish",
        description: "Modern calm colour harmony and frictionless treatment discovery designed for high-trust wellness brands.",
        tech: ["Balanced Contrast", "Booking UX", "Mobile Polished"],
        metrics: "Interactive Demo",
        demoUrl: "/demos/serenia/index.html",
      },
      {
        title: "Woshico Trade Brand Modernisation",
        category: "Local Trade Upgrade",
        description: "Transforming plain service lists into bold structured package clarity built for fast mobile conversion.",
        tech: ["Modern Cards", "WhatsApp CTA", "Fast Load"],
        metrics: "Interactive Demo",
        demoUrl: "/demos/woshico/index.html",
      },
    ],
    competitorComparison: {
      overline: "REDESIGN APPROACH MATRIX",
      title: "Clean Next.js Redesign vs",
      titleMuted: "Patchwork Template Reskinning",
      subtitle:
        "See the difference between rebuilding cleanly vs forcing another WordPress theme onto aged database tables.",
      columns: ["Redesign Aspect", "Saim Dev Clean Code Rebuild", "Theme Reskin / Cosmetic Fix"],
      rows: [
        {
          criteria: "Underlying Speed & Code Debt",
          saim: "Starts cleanly on React 19 with zero historical plugin baggage",
          alternative: "Legacy shortcodes and abandoned plugin scripts stay lurking underneath",
        },
        {
          criteria: "Visual Risk Before Paying Full Deposit",
          saim: "Optional Free Concept Preview lets you judge styling direction early",
          alternative: "Usually locked behind full-project contracts or generic theme demos",
        },
        {
          criteria: "Search Ranking Transition",
          saim: "Automated URL parity check + 301 map written directly in router config",
          alternative: "Easy to break category URLs and lose indexed backlinks accidentally",
        },
        {
          criteria: "Long-Term Platform Cost",
          saim: "Zero ongoing theme licence renewals or bloated server requirements",
          alternative: "Tied to recurring annual Elementor / Envato theme licences",
        },
      ],
    },
    engineeringChecklist: {
      title: "Rankings-Safe Website Redesign Launch Protocol",
      subtitle:
        "Strict precautions executed on every overhaul so historical SEO authority strengthens on cutover:",
      items: [
        "Export current sitemap & Google-indexed URLs prior to changing any directory naming",
        "Maintain or enhance word count & topical headings on pages with existing commercial rankings",
        "Verify canonical tags cleanly point to https://www.yourdomain without www mismatch",
        "Cross-check contrast ratios (>= 4.5:1 body text) across dark and light section surfaces",
        "Configure immediate WhatsApp, tel:, and contact submission alerts so zero launch-day leads fail",
        "Resubmit updated XML sitemap in Search Console cleanly on launch hour",
      ],
    },
    pricing: [
      {
        name: "Core Site Redesign",
        price: "£550",
        description: "Up to 8 existing brochure routes redesigned cleanly into fast React 19 & Tailwind code.",
        features: [
          "Up to 8 pages redesigned from scratch",
          "Optional homepage Free Concept direction",
          "Copy flow tightening & mobile readability",
          "301 URL map & Search Console meta checks",
          "WhatsApp + modern responsive lead forms",
          "14 days post-launch technical support",
        ],
      },
      {
        name: "Growth Brand Modernisation",
        price: "£950",
        description: "Full 15-page overhaul + interactive proof sections, Headless blog hub, and schema upgrades.",
        popular: true,
        features: [
          "Up to 15 bespoke pages & blog architecture",
          "Custom GSAP / Motion interaction touches",
          "Comprehensive Service + Organization JSON-LD",
          "Old CMS blog post import + 301 preservation",
          "WCAG contrast & mobile thumb-zone audit",
          "30 days dedicated post-launch support",
        ],
      },
      {
        name: "Full Store / Portal Overhaul",
        price: "£1,650",
        description: "Modernise dated WooCommerce/Shopify storefronts or multi-service enterprise hubs cleanly.",
        features: [
          "25+ routes or full catalog redesign",
          "Interactive product filters / quote tools",
          "Stripe Checkout or Headless Shopify wiring",
          "Full crawl & redirect QA verification",
          "GitHub repository handover + walkthrough",
          "30 days priority engineering support",
        ],
      },
    ],
    whyChooseUs: [
      {
        title: "Judge Direction via Free Preview Option",
        desc: "For qualifying businesses with stale active sites, request a clean concept direction preview before committing.",
      },
      {
        title: "SEO Equity Guardrails Built In",
        desc: "Never casually trash strong backlinked service URLs without verified 301 protection.",
      },
      {
        title: "Sharp Editorial Design Taste",
        desc: "High-contrast typography, generous breathing room, and tactile card discipline rather than gaudy gradients.",
      },
      {
        title: "Upgrade Text Without Writing Novels",
        desc: "We keep what accurately describes your craft and trim weak filler clichés cleanly.",
      },
      {
        title: "Clean Next.js Fresh Start",
        desc: "Leave broken plugins, outdated PHP versions, and clunky visual builders permanently behind.",
      },
      {
        title: "Clear 50/50 Milestone Billing",
        desc: "Written fixed scope agreed upfront — final milestone transfers only when staging passes your review.",
      },
    ],
    testimonials: [
      {
        quote: "Illustrative target scenario: A trusted regional trades firm modernising a 2016 WordPress site onto sleek dark/light Next.js design while keeping top city rankings via 301 mapping.",
        client: "Established UK Practice",
        role: "Brand Refresh Scenario",
        company: "Reference Specification",
      },
      {
        quote: "Illustrative target scenario: A medical clinic transitioning confusing multi-scroll pages into serene high-contrast treatment clarity with clean mobile booking.",
        client: "Private Health Brand",
        role: "UX Overhaul Scenario",
        company: "Reference Specification",
      },
      {
        quote: "Illustrative target scenario: A growing store redesigning clunky legacy product filters into seamless interactive swatches and sub-second image transitions.",
        client: "Independent Retailer",
        role: "Store Refresh Scenario",
        company: "Reference Specification",
      },
    ],
    faqs: [
      {
        question: "Who qualifies for a Free Concept Preview before milestone commitment?",
        answer:
          "Existing active businesses looking to modernise a dated website can submit their current domain via /contact to request a focused concept direction mockup illustrating visual tone and above-the-fold layout before kicking off full scope.",
      },
      {
        question: "Do we need a brand new logo before starting a redesign?",
        answer:
          "No — we frequently refine typography and layout cadence seamlessly around an existing clean SVG/PNG brand mark, or craft a clean modern wordmark lockup if your legacy file is unusable.",
      },
      {
        question: "How do you prevent Google search traffic drops during launch?",
        answer:
          "We pull your live indexed paths beforehand, retain URL slugs wherever effective, upgrade thin titles/meta cleanly without discarding core commercial terms, and apply HTTP 301 rules for every modified path.",
      },
      {
        question: "Can I extract usable photos from my current website?",
        answer:
          "Yes — we pull any high-res team, premises, and portfolio images cleanly while recommending or sourcing crisp substitutes for blurry 2014 stock photos.",
      },
      {
        question: "Will my new redesigned website work effortlessly on iPhone & Android?",
        answer:
          "Yes — mobile ergonomics (clear spacing, large clickable targets, non-overlapping sticky headers, zero horizontal overflow) are core build verification requirements.",
      },
    ],
    finalCta: {
      headline: "Give Your Expertise the Modern Digital Flagship It Deserves",
      description:
        "Send your current URL today. Tell us which competitors look sharpest to you, and request an honest teardown or Free Concept Preview direction.",
      primaryButtonText: "Send Your Current Website URL",
      whatsappText: "Website Redesign & Modernisation",
    },
    relatedServices: [
      {
        name: "WordPress to Next.js",
        href: "/services/wordpress-headless-cms",
        desc: "Upgrade an editorial WP site cleanly with Sanity CMS or MDX.",
      },
      {
        name: "Technical & Local SEO",
        href: "/services/seo-services",
        desc: "Deepen entity schema & topic structure right alongside redesign.",
      },
      {
        name: "Core Web Vitals Speed Fix",
        href: "/services/website-speed-optimization",
        desc: "Tune performance on an existing Next.js/React build without redesigning.",
      },
    ],
  },

  // ==============================================================
  // 11. WEBSITE SPEED & CORE WEB VITALS OPTIMIZATION
  // ==============================================================
  "website-speed-optimization": {
    slug: "website-speed-optimization",
    serviceName: "Core Web Vitals Speed Fix",
    mainKeyword: "Website Speed Optimization UK",
    seoTitle: "Core Web Vitals & Speed Optimization UK | Saim Dev",
    seoDescription:
      "Fix failing LCP, INP and CLS Core Web Vitals scores on Next.js, React and business websites. Deep waterfall profiling and asset tuning from £199 fixed.",
    canonicalUrl: "https://www.saimdev.site/services/website-speed-optimization",
    badge: "LCP • INP • CLS Performance Engineering",
    h1: "Core Web Vitals & Website Speed Engineering — Fix Sluggish LCP, INP & CLS Bottlenecks",
    subheading:
      "Fake caching plugins hide bloated CSS until Chrome CrUX flags red vitals anyway. We profile network waterfalls, critical rendering paths, JavaScript hydration blocking (INP), hero media preloads (LCP), and font layout shifts (CLS) from £199 fixed.",
    primaryCtaText: "Audit Your URL Speed Bottleneck",
    secondaryCtaText: "Inspect Optimisation Stack",
    stripLabel: "Performance Engineering Metrics",
    stripItems: [
      {
        label: "Target LCP < 2.5s",
        tag: "Largest Paint",
        tagValue: "Hero Priority",
        summary: "Strip lazy-load anti-patterns off above-the-fold heroes and inline critical paint hints.",
        href: "/overview",
      },
      {
        label: "INP <= 200ms Fix",
        tag: "Interactivity",
        tagValue: "Main Thread",
        summary: "Break heavy JS tasks, defer GTM/chat scripts cleanly, and split hydration boundaries.",
        href: "/technologies",
      },
      {
        label: "CLS = 0.00 Shift",
        tag: "Visual Stability",
        tagValue: "Zero Jumps",
        summary: "Lock explicit media aspect ratios, swap webfont fallbacks cleanly, and reserve banner heights.",
        href: "/process",
      },
      {
        label: "From £199 Fixed",
        tag: "Fixed Scope",
        tagValue: "£199 / £350 / £550",
        summary: "Before-and-after Lighthouse & WebPageTest trace evidence attached to staging deliverables.",
        href: "/pricing",
      },
      {
        label: "No Fake Hacks",
        tag: "Honest Code",
        tagValue: "Real CrUX Ready",
        summary: "Never install user-agent cloaking scripts that trick bots while real shoppers wait.",
        href: "/services/seo-services",
      },
    ],
    painPoints: [
      {
        problem: "Lazy-loading scripts or 'speed optimiser plugins' accidentally delay the hero banner (`loading=lazy` on LCP), crippling mobile first paint.",
        solution: "We trace exact LCP elements in Chrome DevTools, strip incorrect lazy attributes, transcode to AVIF/WebP, and add `fetchpriority='high'`.",
      },
      {
        problem: "Heavy third-party marketing pixels (chat bubbles, heatmaps, GTM containers) freeze main-thread taps, failing Google's INP metric.",
        solution: "Defer non-essential third-party tags off main hydration windows via next/script strategies cleanly without breaking conversion tracking.",
      },
      {
        problem: "Cumulative Layout Shift (CLS) jumps buttons mid-tap when un-sized images, cookie banners, or external web fonts pop in late.",
        solution: "Reserve deterministic containers via CSS aspect ratios, `next/font` zero-shift metrics, and non-disruptive cookie shells.",
      },
      {
        problem: "Unbundled CSS, synchronous Google Fonts, and oversized 3MB hero PNGs crush budget Android handsets on UK 4G.",
        solution: "Subsetting typography, responsive srcset variants, and tree-shaking dead rules drops initial page bytes dramatically.",
      },
    ],
    problemSection: {
      overline: "01 / CRITICAL RENDER WATERFALL AUDIT",
      titleBefore: "Eliminating Real",
      titleStrike: "render-blocking JS & lazy-load bugs",
      titleOwned: "Down to the Critical Paint Frame.",
      subtitle:
        "Throwing WP Rocket or NitroPack over unoptimised themes rarely passes real user CrUX INP checks. Passing Core Web Vitals sustainably demands profiling asset order and DOM execution.",
      solutionTag: "CHRONIC WATERFALL REMEDIATION",
      solutionTitle: "Profile Waterfall -> Prune Payload -> Verify Lab & Staging",
      solutionDesc:
        "We test before/after traces in Chrome DevTools Performance panel across throttled Slow 4G CPU emulation, targeting green LCP (<2.5s), INP (<200ms), and CLS (<0.1) baselines.",
      solutionMetrics: [
        { value: "<2.5s", label: "Target Mobile LCP" },
        { value: "<200ms", label: "Target Mobile INP" },
        { value: "0.00", label: "CLS Tolerance" },
      ],
      chartTitle: "Throttled Mobile Bottleneck Resolution Model",
      chartBadge: "CWV Target Model",
      chartYAxis: "Composite Speed Score",
      chartXAxis: "Optimisation Depth",
      chartCaption:
        "True payload engineering addresses JS hydration, third-party script execution, and critical CSS rather than synthetic bot-delay tricks.",
      bars: [
        {value: "39", label: "Unoptimised Build", heightPx: 74},
        {value: "62", label: "Cache Plugin Only", heightPx: 112},
        {value: "84", label: "Media & Font Tuning", heightPx: 150},
        {value: "97", label: "Full Code CWV Sprint", isHighlight: true, heightPx: 192},
      ],
    },
    deliverables: [
      {
        title: "Chrome DevTools Waterfall & Bundle Trace",
        description: "Pinpoint exact render-blocking styles, long JS tasks (>50ms), and duplicate third-party payloads.",
      },
      {
        title: "LCP Media Pipeline & Preload Tuning",
        description: "Convert bloated hero banners/Lotties/videos, strip bad lazy-load attrs, and add clean priority hints.",
      },
      {
        title: "INP Main-Thread & Script Deferral",
        description: "Break up long React/DOM mounts, apply dynamic imports (`next/dynamic`), and isolate chat/GTM scripts.",
      },
      {
        title: "Zero-Shift CLS Stabilization",
        description: "Fix shifting headers, carousel height pops, font flash reflows (`font-display`), and sticky consent bars.",
      },
      {
        title: "Font Subsetting & Unused CSS Pruning",
        description: "Remove orphaned weights, unused icon libraries, and render-blocking CDN stylesheets cleanly.",
      },
      {
        title: "Before/After Diagnostic Evidence Report",
        description: "Annotated summary showing payload KB drops, DOM node count changes, and verified lab metrics.",
      },
    ],
    deliverablesMeta: {
      overline: "02 / OPTIMISATION WORKFLOW",
      title: "Technical Remediation Inside",
      titleMuted: "Our Speed Sprint",
      subtitle:
        "Honest engineering improvements targeting genuine human load speed and Google Search Console CrUX health.",
      rowTags: ["LCP / INP / CLS", "Real Profiling", "From £199"],
    },
    sectionHeadings: {
      valueOverline: "03 / Ranking & Revenue Retention",
      valueTitle: "What Passes Search Console",
      valueMuted: "After Clean Engineering",
      marketOverline: "04 / Platforms & Pain Profiles",
      marketTitle: "Stacks We Profile &",
      marketMuted: "Speed Scenarios",
      processOverline: "05 / PROFILED FIX WORKFLOW",
      processTitle: "Audit URL to Verified",
      processMuted: "Staging Trace",
      processSummary: "Full code diagnostics without destroying site layout or breaking pixels.",
      processStageTag: "Lighthouse + Trace Proof",
      stackOverline: "06 / PROFILING TOOLKIT",
      stackTitle: "Browser Tracing Tools,",
      stackMuted: "Zero Bot-Cloaking Gimmicks",
      proofOverline: "07 / FAST ARCHITECTURE EXAMPLES",
      proofTitle: "Sites Tuned Around",
      proofMuted: "Sub-Second Critical Paint",
      pricingOverline: "08 / FIXED SPEED PACKAGES",
      pricingTitle: "Core Web Vitals",
      pricingMuted: "Sprint Tiers",
      pricingNote: "Fixed fee • Includes traceable before/after diagnostic summary",
      pricingButtonText: "Book Speed Sprint",
      advantageOverline: "09 / Honest Performance Engineering",
      advantageTitle: "Real User Speed Without",
      advantageMuted: "Deceptive Bot Tricks",
      feedbackOverline: "10 / Target Reference Scenarios",
      feedbackTitle: "Typical Bottleneck",
      feedbackMuted: "Remediation Profiles",
      faqOverline: "11 / CWV & Search Console FAQ",
      faqIntro:
        "Truthful explanations on Google CrUX 28-day lag, Lab scores vs Field data, third-party chat widgets, and realistic goals.",
      bannerTag: "Fixed £199–£550 • Honest Trace Evidence • Real CrUX Readiness",
    },
    featuresAndBenefits: [
      {
        feature: "Real INP Task Splitting",
        benefit: "Noticeable Instant Tap Response",
        description: "Accordion buttons, mobile drawers, and filters react on the first touch without frozen screen lag.",
      },
      {
        feature: "Zero Visual Regressions",
        benefit: "Design Stays 100% Intact",
        description: "We optimise behind the scenes — visual layout and brand identity never get stripped ugly.",
      },
      {
        feature: "Honest Third-Party Cost Conversations",
        benefit: "Smart Marketing Balance",
        description: "We measure how many milliseconds chat widgets or tracking pixels cost and defer them cleanly without losing data.",
      },
      {
        feature: "CDN Cache-Control & Compression",
        benefit: "Faster Repeat Navigation",
        description: "Immutable asset headers, Brotli compression checks, and edge routing minimize repeat downloads.",
      },
      {
        feature: "Honest Field vs Lab Expectations",
        benefit: "Zero Misleading Promises",
        description: "Remember: Search Console CrUX updates over a rolling 28-day field window — we align both Lab checks and real user bottlenecks cleanly.",
      },
      {
        feature: "Migration Path If Hopelessly Bloated",
        benefit: "Never Waste Fees on Broken Foundations",
        description: "If an unfixable legacy host or plugin ruins fixes, we advise honestly whether to apply our speed sprint or pivot to our clean Next.js migration.",
      },
    ],
    industries: [
      {
        industry: "Paid-Ad High-Bounce Landers",
        description: "Stop slow hero banners or massive video background tags from dropping paid traffic pre-scroll.",
        exampleProject: "Hero Optimization Study",
        demoUrl: "/overview",
      },
      {
        industry: "Next.js / React Apps With Bundle Creep",
        description: "Trim bloated client-side dependencies, unused animation packages, and redundant fonts.",
        exampleProject: "Tech Architecture Hub",
        demoUrl: "/technologies",
      },
      {
        industry: "Large Catalog Storefronts",
        description: "Fix lazy thumbnail queues, script waterfalls, and slow collection swatch interactions.",
        exampleProject: "HQ Leathercon Store",
        demoUrl: "/hq-leathercon/index.html",
      },
      {
        industry: "Media-Heavy Studio Portfolios",
        description: "Optimise hero animations, WebP sizing, and font loading without dulling design polish.",
        exampleProject: "Studio D'Brickell Concept",
        demoUrl: "/demos/studio-dbrickell/index.html",
      },
      {
        industry: "Content Publishers & Blogs",
        description: "Reserve embedded dimensions cleanly to eradicate CLS jumps on article load.",
        exampleProject: "Technical Blog Architecture",
        demoUrl: "/blogs",
      },
      {
        industry: "Food Ordering Menus on 4G",
        description: "Keep menu cards fast so Friday night mobile guests complete orders without buffering.",
        exampleProject: "HotBite Concept",
        demoUrl: "/hotbite/index.html",
      },
    ],
    process: [
      {
        step: "Step 01",
        title: "URL Waterfall & CrUX Bottleneck Audit",
        description: "Capture throttled mobile traces, inspect large dependencies, and confirm realistic scope target before fee commitment.",
        duration: "Day 1",
      },
      {
        step: "Step 02",
        title: "Critical Path, Images & Fonts Sprint",
        description: "Transcode heavy assets, inline or preload true LCP resources, lock dimensions against CLS, and streamline fonts.",
        duration: "Day 2–3",
      },
      {
        step: "Step 03",
        title: "JS Chunking & Script Deferral",
        description: "Split heavy client modules cleanly, defer analytics/chat scripts off critical paint, and prune dead code.",
        duration: "Day 4",
      },
      {
        step: "Step 04",
        title: "Regression Visual Check & Trace Handover",
        description: "Verify forms, visual screenshots, and Lab Lighthouse/DevTools metrics before final handover.",
        duration: "Day 5",
      },
    ],
    techStack: [
      { name: "Chrome DevTools Tracing", role: "Long-Task & INP Profiling" },
      { name: "Webpack Bundle Analyzer", role: "Client Payload Pruning" },
      { name: "Sharp / AVIF / WebP", role: "Lossless Image Compression" },
      { name: "next/font & Preload", role: "Zero-CLS Typography Loading" },
      { name: "next/script Strategy", role: "Off-Main-Thread Third-Party Execution" },
      { name: "Search Console CrUX", role: "Field Metric Alignment" },
    ],
    caseStudies: [
      {
        title: "HQ Leathercon Media Asset Overhaul Concept",
        category: "Image & Route Speed",
        description: "Structuring heavy garment galleries so category and product grids paint smoothly on handheld networks.",
        tech: ["Image Pipeline", "Route Hygiene", "Responsive Sizing"],
        metrics: "Reference Architecture",
        demoUrl: "/hq-leathercon/index.html",
      },
      {
        title: "Content Library Clean DOM Pattern",
        category: "Zero-Bloat Publishing",
        description: "Semantic markup structure keeping large multi-hundred-page websites responsive without client bloat.",
        tech: ["Static Pre-Render", "Minimal JS", "Zero Shift"],
        metrics: "Live on Site",
        demoUrl: "/blogs",
      },
      {
        title: "Medical Practice Fast Hero Concept",
        category: "LCP Priority Focus",
        description: "Fast headline and primary CTA visibility across both desktop and 390px mobile viewports.",
        tech: ["Critical Path", "Font Subsetting", "Hero Clarity"],
        metrics: "Interactive Demo",
        demoUrl: "/demos/medspa/index.html",
      },
    ],
    competitorComparison: {
      overline: "REAL ENGINEERING VS FAKE FIXES",
      title: "Code-Level Bottleneck Fix vs",
      titleMuted: "Bot-Cloaking '100 Score' Plugins",
      subtitle:
        "Never buy cheap shortcuts that detect Googlebot user-agents and freeze assets — Chrome measures real human user sessions.",
      columns: ["Performance Area", "Saim Dev Engineering Fix", "Shortcut Caching / Cloaking Plugins"],
      rows: [
        {
          criteria: "Impact on Real User CrUX / INP",
          saim: "Genuine faster main thread and smaller JS downloads for actual visitors",
          alternative: "Often hides heavy scripts from Lighthouse while real mobile users still freeze",
        },
        {
          criteria: "Third-Party Chat & GTM Impact",
          saim: "Thoughtful lazy hydration / consent-safe loading timing",
          alternative: "Breaks click tracking or delays interactive elements confusing users",
        },
        {
          criteria: "Hero LCP Image Handling",
          saim: "Explicit fetchpriority=high + true responsive sizing without hiding visual frame",
          alternative: "Frequently breaks heroes by blind-applying lazy loading to everything",
        },
        {
          criteria: "Long-Term Platform Stability",
          saim: "Clean repository diffs you inspect cleanly in Git",
          alternative: "Breaks site layout intermittently on theme updates",
        },
      ],
    },
    engineeringChecklist: {
      title: "Core Web Vitals Remediation Verification Checks",
      subtitle:
        "What we check on every optimised route prior to signing off a performance engagement:",
      items: [
        "Hero media & above-the-fold typography excluded cleanly from lazy loading anti-patterns",
        "All hero / banner slots reserved with explicit CSS width/height preventing CLS pops",
        "Main-thread JS long tasks (>50ms) audited under 4x CPU slowdown in DevTools",
        "All large uncompressed PNGs/GIFs converted to right-sized AVIF/WebP or compressed media",
        "Unused CSS icon sets and orphan JS polyfills identified and pruned safely",
        "Forms, modals, dropdowns, and tracking analytics re-verified working cleanly after deferral",
      ],
    },
    pricing: [
      {
        name: "Single Landing Speed Fix",
        price: "£199",
        description: "Deep profiling, image/font optimisation, and script fixes on one flagship/ad URL.",
        features: [
          "LCP image, font & CSS critical-path fixes",
          "Script deferral & tracking tag cleanup",
          "CLS shift removal on banners/modals",
          "Before/after throttled Lighthouse trace report",
          "Clean diff applied directly to codebase",
          "7 days verification support",
        ],
      },
      {
        name: "Full Site CWV Sprint",
        price: "£350",
        description: "Comprehensive Next.js, React, or marketing website optimisation targeting 90–95+ Lab health.",
        popular: true,
        features: [
          "Template-wide bundle & code-splitting audit",
          "Site-wide media transcoding & preload map",
          "INP event-handler & React hydration fixes",
          "Cache-Control & compression verification",
          "Tested across 5 key mobile/desktop templates",
          "14 days CrUX monitoring check-in",
        ],
      },
      {
        name: "Storefront / App Speed Fix",
        price: "£550",
        description: "Large retail catalogues, Liquid/Headless builds, or interactive JS dashboards.",
        features: [
          "Collection/filter query & DOM node pruning",
          "Shopify/WP third-party app cleanup strategy",
          "PDP gallery & variant switch responsiveness",
          "Full Search Console CrUX baseline review",
          "Honest architectural upgrade advice if needed",
          "21 days technical support",
        ],
      },
    ],
    whyChooseUs: [
      {
        title: "Zero Fake Bot-Trick Scripts",
        desc: "Every optimisation genuinely reduces byte weight, script execution, and paint delay for real customers.",
      },
      {
        title: "Upfront Diagnostic Honesty",
        desc: "If a legacy host or forced third-party embed imposes a hard ceiling, we tell you honestly before invoicing.",
      },
      {
        title: "Deep React / Next.js Internals",
        desc: "From SSR hydration waterfalls to Framer Motion compositor rules, we tune modern JS natively.",
      },
      {
        title: "Pixel & Conversion Safety First",
        desc: "Never sacrifice GA4 conversion tracking or break interactive sliders just to chase vanity metrics.",
      },
      {
        title: "Transparent Diffs & Reports",
        desc: "Review clean code pull requests and exact payload reduction numbers before final sign-off.",
      },
      {
        title: "Clear £199 Entry Sprint",
        desc: "Targeted speed engineering without signing multi-month technical retainers.",
      },
    ],
    testimonials: [
      {
        quote: "Illustrative target scenario: An ad-driven service site stripping lazy-load errors off its hero poster, resizing 4MB PNG icons, and deferring live-chat scripts onto interaction.",
        client: "PPC Lead-Gen Operator",
        role: "LCP & INP Scenario",
        company: "Reference Specification",
      },
      {
        quote: "Illustrative target scenario: A Next.js portfolio dashboard breaking large charting libraries cleanly into dynamic client chunks so initial brochure routes fly.",
        client: "SaaS Marketing Team",
        role: "Bundle Split Scenario",
        company: "Reference Specification",
      },
      {
        quote: "Illustrative target scenario: An eCommerce shop locking container aspect ratios on banners & review stars to eradicate red CLS scores inside Search Console.",
        client: "UK Online Store",
        role: "CLS Remediation Scenario",
        company: "Reference Specification",
      },
    ],
    faqs: [
      {
        question: "Why does Google Search Console Core Web Vitals still show old numbers right after fixing a site?",
        answer:
          "Google Search Console CrUX reports a rolling 28-day window of real Chrome user field telemetry. Lab tools (Lighthouse, WebPageTest) update immediately upon deploy, while Search Console field status reflects fixes cleanly over the following 2–4 weeks.",
      },
      {
        question: "Do you guarantee a 100/100 score regardless of third-party scripts?",
        answer:
          "We never make dishonest blanket guarantees when a business mandates heavy third-party widgets (e.g. live chat popups, heavy video embeds, or tracking pixels). Instead, we diagnose exact ms bottlenecks upfront, optimise everything within our architectural control cleanly targeting 90–95+ scores, and deliver traceable Lab improvements before sign-off.",
      },
      {
        question: "Will speed optimisation alter how our website looks or remove animations?",
        answer:
          "No. We preserve intentional brand typography, layouts, and animations while shifting heavy motions cleanly onto GPU compositor properties and sequencing downloads properly.",
      },
      {
        question: "Can you fix slow sites if they are on shared legacy hosting or Elementor?",
        answer:
          "We audit your URL first for free. Where server TTFB or PHP/Elementor lock-in sets a strict ceiling, we advise transparently whether a £199/£350 optimisation helps meaningfully or whether migrating cleanly via our WordPress-to-Next.js service gives far stronger ROI.",
      },
      {
        question: "What access do you need to optimise an existing codebase?",
        answer:
          "Typically read/PR access to your Git repository (or WordPress/hosting staging environment) plus current analytics script list so zero conversion tags get interrupted.",
      },
    ],
    finalCta: {
      headline: "Stop Losing Mobile Visitors During the First Three Seconds of Load",
      description:
        "Send your sluggish URL via /contact or WhatsApp. We run a focused Chrome trace audit and reply with the exact bottlenecks holding back LCP, INP, or CLS.",
      primaryButtonText: "Request Speed Diagnostic Audit",
      whatsappText: "Core Web Vitals Speed Fix",
    },
    relatedServices: [
      {
        name: "WordPress to Next.js Migration",
        href: "/services/wordpress-headless-cms",
        desc: "Escape deep PHP plugin lag permanently onto static edge rendering.",
      },
      {
        name: "Technical & Local SEO",
        href: "/services/seo-services",
        desc: "Combine technical speed fixes with clean canonical & schema architecture.",
      },
      {
        name: "Conversion Landing Pages",
        href: "/services/landing-pages-cro",
        desc: "Build fast £250 campaign pages specifically tuned for Google Ads clicks.",
      },
    ],
  },

  // ==============================================================
  // 12. TECHNICAL & LOCAL SEO SERVICES
  // ==============================================================
  "seo-services": {
    slug: "seo-services",
    serviceName: "Technical & Local SEO",
    mainKeyword: "Technical & Local SEO Services UK",
    seoTitle: "Technical Local SEO Services UK | Schema | Saim Dev",
    seoDescription:
      "Technical SEO engineering, Schema.org entity graphs, UK local search structure and crawl hygiene built directly in clean code. Fixed audit fees from £299.",
    canonicalUrl: "https://www.saimdev.site/services/seo-services",
    badge: "Code-Native Entity Schema & Crawl Hygiene",
    h1: "Technical & Local SEO Engineering — Fix Crawl Waste, Duplicate Routes & Entity Schema",
    subheading:
      "Forget vague £700/month link-farm retainers. We fix the code, information architecture, duplicate content clusters, canonical signals, semantic landmarks, and JSON-LD `@graph` markup that help search engines understand and trust every commercial page.",
    primaryCtaText: "Book a Technical SEO Overhaul",
    secondaryCtaText: "Explore Our Local UK Pages",
    stripLabel: "Technical Search Engineering",
    stripItems: [
      {
        label: "Unified @graph JSON-LD",
        tag: "Entity Linking",
        tagValue: "Org + Service",
        summary: "Interlink Organization, LocalBusiness, Service, OfferCatalog, and Breadcrumb entities.",
        href: "/services/website-development",
      },
      {
        label: "Anti-Duplication Audit",
        tag: "Content Depth",
        tagValue: "Unique Value",
        summary: "Audit thin boilerplate templates, keyword cannibalisation, and city doorway-page risks.",
        href: "/services/takeaway-web-design-london",
      },
      {
        label: "Canonical & Sitemap QA",
        tag: "Crawl Budget",
        tagValue: "Zero 404 Chains",
        summary: "Purge parameter leaks, broken redirect hops, missing alt semantics, and sitemap errors.",
        href: "/process",
      },
      {
        label: "Local UK Signals",
        tag: "UK Geography",
        tagValue: "GBP Alignment",
        summary: "Align service pages with Google Business Profile categories, areas served, and postcodes.",
        href: "/services/business-websites",
      },
      {
        label: "One-Time Audit Fee",
        tag: "No Retainer",
        tagValue: "£299 / £499 / £850",
        summary: "Fixed engineering implementation — keep zero ongoing SEO retainer tie-in after launch.",
        href: "/pricing",
      },
    ],
    painPoints: [
      {
        problem: "Cookie-cutter service or city pages reuse identical copy with only town names swapped, triggering weak topical differentiation.",
        solution: "We architect genuinely distinct intent modules, local economics, decision tables, and FAQs tailored cleanly per commercial query.",
      },
      {
        problem: "Wrong self-canonicals, missing trailing-slash parity, or multiple H1 headings confuse crawler focus across key landing pages.",
        solution: "Strict heading hierarchy audit (1 H1 per route), verified self-canonicals, and clean semantic <header><nav><main> landmarks.",
      },
      {
        problem: "Disjointed Schema plugins spit out fragmented snippets missing `@id` references back to Organization and Offers.",
        solution: "Clean linked `@graph` JSON-LD connects Brand, Founder, Service Catalogs, GBP prices, and Breadcrumbs seamlessly.",
      },
      {
        problem: "Businesses pay £600+/month for automated PDF SEO reports while core internal linking and crawl blockers sit untouched in code.",
        solution: "One fixed engineering fee resolves codebase, schema, metadata, internal linking, and speed structure cleanly.",
      },
    ],
    problemSection: {
      overline: "01 / STRUCTURAL CRAWL AUDIT",
      titleBefore: "Eliminating Hidden",
      titleStrike: "duplicate templates & schema gaps",
      titleOwned: "Directly in Your Source Code.",
      subtitle:
        "Most small-business websites don't suffer from lack of spam backlinks — they fail because crawlers encounter thin copy overlap, muddled page titles, and missing entity clarity.",
      solutionTag: "CODE-FIRST SEARCH ARCHITECTURE",
      solutionTitle: "Clean Intent Silos + Linked Entity Markup + Speed",
      solutionDesc:
        "We audit page-by-page word overlap, title length compliance (<=60 HTML-rendered chars), internal hub-and-spoke link equity, and JSON-LD validation in Rich Results.",
      solutionMetrics: [
        { value: "<=57", label: "Crisp Title Lengths" },
        { value: "1x H1", label: "Semantic Hierarchy" },
        { value: "@graph", label: "Entity JSON-LD" },
      ],
      chartTitle: "Technical On-Page Hygiene: Typical vs Code-Engineered",
      chartBadge: "Technical Audit Model",
      chartYAxis: "On-Page Readiness Index",
      chartXAxis: "Implementation Type",
      chartCaption:
        "Clean semantic markup, unique hub links, and verified metadata lift page authority clarity without spam tactics.",
      bars: [
        {value: "43", label: "Thin Templates", heightPx: 74},
        {value: "61", label: "Auto SEO Plugin", heightPx: 112},
        {value: "82", label: "Clean Brochure", heightPx: 150},
        {value: "98", label: "Code-Native SEO", isHighlight: true, heightPx: 192},
      ],
    },
    deliverables: [
      {
        title: "Full-Site Duplicate & Thin Content Audit",
        description: "Detect cookie-cutter copy blocks, cannibalising titles, and weak category pages needing differentiation.",
      },
      {
        title: "Linked Schema.org @graph Implementation",
        description: "Hand-coded Organization, Service, OfferCatalog, LocalBusiness, Article, and BreadcrumbList JSON-LD.",
      },
      {
        title: "Title & Meta Description Length Calibration",
        description: "Rewrite truncated >60-char titles (including &amp; HTML encoding margin!) and 125–155 char CTR descriptions.",
      },
      {
        title: "Hub-and-Spoke Internal Link Engineering",
        description: "Connect homepage, pillar pages, blogs, free tools, and regional city routes with clean descriptive anchor text.",
      },
      {
        title: "Semantic DOM & Landmark Hygiene",
        description: "Isolate mobile nav drawers inside <nav>, verify single <h1> per view, and enforce clean H2->H3 outline depth.",
      },
      {
        title: "XML Sitemap, Robots & Search Console Check",
        description: "Clean canonical hygiene eliminating staging/noindex leaks or orphan dynamic URLs from indexing.",
      },
    ],
    deliverablesMeta: {
      overline: "02 / TECHNICAL SEO DELIVERABLES",
      title: "Code Changes Applied By",
      titleMuted: "Our SEO Engineering Sprint",
      subtitle:
        "Real pull requests, tested JSON-LD graphs, and clean copy architectures rather than PDF checkup spreadsheets.",
      rowTags: ["Schema @graph", "Crawl Hygiene", "UK Local SEO"],
    },
    sectionHeadings: {
      valueOverline: "03 / Search Authority Logic",
      valueTitle: "Built Around What Search Engines",
      valueMuted: "Actually Reward Today",
      marketOverline: "04 / UK Search Intents",
      marketTitle: "Local, Service &",
      marketMuted: "Programmatic Silos",
      processOverline: "05 / AUDIT TO PR PIPELINE",
      processTitle: "Crawl -> Rewrite ->",
      processMuted: "Schema Validation",
      processSummary: "Every code edit tested on staging and checked against Rich Results specs.",
      processStageTag: "Schema Validator Check",
      stackOverline: "06 / SEO ENGINEERING STACK",
      stackTitle: "Clean Code Metadata Without",
      stackMuted: "Bloated Plugin Conflicts",
      proofOverline: "07 / LIVE ARCHITECTURAL EXAMPLES",
      proofTitle: "Topic Clusters &",
      proofMuted: "Local Hub Models",
      pricingOverline: "08 / FIXED TECHNICAL SEO PACKAGES",
      pricingTitle: "One-Time SEO",
      pricingMuted: "Engineering Tiers",
      pricingNote: "Fixed implementation quote • Zero mandatory monthly agency retainers",
      pricingButtonText: "Book Technical Audit",
      advantageOverline: "09 / Anti-Fluff SEO Engineering",
      advantageTitle: "Developers Fixing Root Causes",
      advantageMuted: "Not Writing Vague Reports",
      feedbackOverline: "10 / Target Reference Scenarios",
      feedbackTitle: "Technical SEO",
      feedbackMuted: "Audit Scenarios",
      faqOverline: "11 / Technical & Local SEO FAQ",
      faqIntro:
        "Honest explanations on off-page backlinks vs on-page topical authority, Schema types (May 2026 standards), and GBP setup.",
      bannerTag: "Fixed £299–£850 • Entity @graph Schema • Zero Monthly Lock-In",
    },
    featuresAndBenefits: [
      {
        feature: "Zero Cookie-Cutter City Pages",
        benefit: "Prevents Doorway-Page Penalties",
        description: "Every UK town/service route carries localized proof, unique FAQ objections, and distinct structural depth.",
      },
      {
        feature: "Up-to-Date Schema Standards",
        benefit: "Avoid Deprecated Markup Bloat",
        description: "Focus cleanly on active Organization, Service, Product, LocalBusiness, Article, and BreadcrumbList schemas.",
      },
      {
        feature: "Keyword Intent Separation",
        benefit: "Clean Rank Stability",
        description: "Keep informational guides, commercial service routes, and interactive calculators cleanly distinguished.",
      },
      {
        feature: "Fast Static Edge Response",
        benefit: "Efficient Googlebot Crawl Budget",
        description: "Pre-rendered HTML returns instantaneously with zero server timeout 5xx spikes.",
      },
      {
        feature: "Flat 2-Click Link Depth",
        benefit: "Pass Authority Evenly",
        description: "Ensure no deep resource or template guide languishes orphaned 5 clicks away from navigation.",
      },
      {
        feature: "Honest Clarity on Off-Page Metrics",
        benefit: "Zero False DR/PA Guarantees",
        description: "We strengthen 100% of on-page technical & topical authority cleanly while advising honestly where PR/backlinks belong.",
      },
    ],
    industries: [
      {
        industry: "UK Regional Hospitality & Takeaways",
        description: "Distinct city hubs aligned cleanly with UK local pack queries across London, Birmingham, and Manchester.",
        exampleProject: "London Takeaway Hub",
        demoUrl: "/services/takeaway-web-design-london",
      },
      {
        industry: "Multi-Service Clinics & Trades",
        description: "Clear one-service-per-URL structuring eliminating cannibalisation across overlapping treatments.",
        exampleProject: "MedSpa Clinic Concept",
        demoUrl: "/demos/medspa/index.html",
      },
      {
        industry: "High-Volume Template & Directory Sites",
        description: "Programmatic differentiation turning thin templated hubs into genuinely valuable deep guides.",
        exampleProject: "160+ Template Architecture",
        demoUrl: "/tools",
      },
      {
        industry: "D2C & Custom eCommerce Brands",
        description: "Product, Offer, and category schema hygiene preventing filter URL crawl explosions.",
        exampleProject: "HQ Leathercon Taxonomy",
        demoUrl: "/hq-leathercon/index.html",
      },
      {
        industry: "B2B Editorial & Resource Blogs",
        description: "Structured topic clusters linking long-form insights neatly back into commercial money pages.",
        exampleProject: "Insights & Blog Hub",
        demoUrl: "/blogs",
      },
      {
        industry: "Interactive Free Tool Funnels",
        description: "Linkable browser utilities designed cleanly to attract organic bookmarks and citations.",
        exampleProject: "Free UK Food Safety Tools",
        demoUrl: "/tools",
      },
    ],
    process: [
      {
        step: "Step 01",
        title: "Full-Site Similarity & Crawl Audit",
        description: "Run automated heading, canonical, title-byte-length, n-gram overlap, and dead-link checks across all URLs.",
        duration: "Day 1–2",
      },
      {
        step: "Step 02",
        title: "Intent Map, Canonicals & 301 Hygiene",
        description: "Consolidate duplicate slugs, align canonical targets cleanly, and tighten page titles under 57 characters.",
        duration: "Day 3",
      },
      {
        step: "Step 03",
        title: "Entity @graph Schema & Unique Content Modules",
        description: "Code unified JSON-LD entities directly into templates and add unique comparative depth across thin views.",
        duration: "Day 4–5",
      },
      {
        step: "Step 04",
        title: "Validation & Search Console Readiness",
        description: "Re-audit all pages via local build inspection + Schema Validator, then update sitemap cleanly.",
        duration: "Day 6",
      },
    ],
    techStack: [
      { name: "JSON-LD @graph", role: "Unified Entity Graph" },
      { name: "Next.js Metadata API", role: "Strict Canonicals & OpenGraph" },
      { name: "Semantic HTML5", role: "Clean Landmarks & Single H1" },
      { name: "Similarity & Link Auditors", role: "Duplicate Content Elimination" },
      { name: "Sitemap & Robots Automation", role: "Indexation Hygiene" },
      { name: "Google Search Console", role: "Sitemap & Coverage Verification" },
    ],
    caseStudies: [
      {
        title: "Saim Dev Technical Architecture Overhaul",
        category: "Own Site Reference",
        description: "Live implementation of unified @graph JSON-LD, duplicate-elimination modules, and tight <=57 char title hygiene across 180+ URLs.",
        tech: ["Schema @graph", "Next.js Metadata", "Topic Hubs"],
        metrics: "Live Architecture",
        demoUrl: "/overview",
      },
      {
        title: "160-Page Compliance Template Hub",
        category: "Programmatic Content Model",
        description: "Category-specific statutory data modules eliminating boilerplate overlap across niche food hygiene pages.",
        tech: ["Dynamic Modules", "Clean Links", "UK Regulatory"],
        metrics: "Live on Site",
        demoUrl: "/tools",
      },
      {
        title: "UK Local City Service Cluster",
        category: "Geo-Intent Differentiation",
        description: "Separate local council nuances, boroughs, and ROI tools per UK city rather than sloppy find-and-replace copy.",
        tech: ["LocalBusiness Schema", "Unique City Data", "Geo Anchors"],
        metrics: "Live Cluster",
        demoUrl: "/services/takeaway-web-design-birmingham",
      },
    ],
    competitorComparison: {
      overline: "CODE SEO VS MONTHLY RETAINER AGENCIES",
      title: "Code-Native SEO Engineering vs",
      titleMuted: "Passive Monthly Retainers",
      subtitle:
        "See what gets shipped in six focused days vs waiting six months on a recurring retainer.",
      columns: ["SEO Deliverable", "Saim Dev Technical Sprint (£299+)", "Typical £650/mo SEO Agency"],
      rows: [
        {
          criteria: "Root Codebase & Schema Execution",
          saim: "Direct Next.js/React edits shipped cleanly by engineers in days",
          alternative: "Developers often never touch code — send vague PDF recs to you",
        },
        {
          criteria: "Template Similarity Cleanup",
          saim: "Rebuilds duplicate pages with dynamic data modules directly in TSX",
          alternative: "Rarely inspects HTML-rendered DOM similarity across template pages",
        },
        {
          criteria: "Contract & Cancellation Trap",
          saim: "Zero 6-month lock-in; fixed one-off fee per audit/implementation tier",
          alternative: "Commonly 6–12 month retainers even before first code changes go live",
        },
        {
          criteria: "Transparency on DR / Page Authority",
          saim: "Explicit clarity separating on-page authority vs off-page backlink PR",
          alternative: "Frequently bundles opaque low-quality directory guest-post links",
        },
      ],
    },
    engineeringChecklist: {
      title: "On-Page Technical SEO Completion Criteria",
      subtitle:
        "Every technical audit concludes only after verifying these foundational signals cleanly:",
      items: [
        "100% unique `<title>` tags sized <= 60 HTML-rendered chars (no accidental entity truncation)",
        "100% unique meta descriptions tuned inside 120–155 characters for sharp SERP CTR",
        "Strict single `<h1>` heading per document and unbroken nested `<h2>` -> `<h3>` outlines",
        "Navigation links, mobile drawers, and footer badges structurally separated from `<main>` text",
        "Zero broken internal anchors (`href='#'`), missing assets, or redirect loops",
        "Clean Schema.org JSON-LD validation linking Organization, Service/Article, and Breadcrumbs",
      ],
    },
    pricing: [
      {
        name: "Technical Audit & Schema",
        price: "£299",
        description: "Full crawl audit, metadata calibration, heading hierarchy fix, and @graph JSON-LD schema setup.",
        features: [
          "Audit up to 25 core site URLs",
          "Title, meta desc & canonical cleanup",
          "Semantic landmark & H1 hierarchy fix",
          "Unified Organization + Service JSON-LD",
          "Sitemap & robots.txt verification",
          "14 days post-deploy QA check",
        ],
      },
      {
        name: "Local & Hub Architecture",
        price: "£499",
        description: "Full duplicate elimination, GBP service-hub linking, and UK city/service differentiator modules.",
        popular: true,
        features: [
          "Everything in Technical Audit + up to 50 pages",
          "Rewrite duplicate/thin commercial sections",
          "Clean hub-and-spoke internal link graph",
          "LocalBusiness + areaServed UK geo schema",
          "Search Console & Core Web Vitals trace check",
          "21 days dedicated follow-up review",
        ],
      },
      {
        name: "Multi-Route Scale Architecture",
        price: "£850",
        description: "Programmatic websites (50–250+ routes), taxonomy cleanup, and category-specific dynamic modules.",
        features: [
          "Programmatic content deduplication architecture",
          "Automated similarity checks across build output",
          "Multi-city / multi-service taxonomy design",
          "Full 301 consolidation of overlapping slugs",
          "Detailed engineering handover documentation",
          "30 days priority support",
        ],
      },
    ],
    whyChooseUs: [
      {
        title: "Code-Level Implementation Included",
        desc: "We don't merely tell you what's broken in a spreadsheet — we write and ship the fixes cleanly in Next.js/React.",
      },
      {
        title: "Anti-Doorway Discipline",
        desc: "Every local or template page delivers distinct value, unique data tables, and localized answers.",
      },
      {
        title: "Honest Authority Expectations",
        desc: "We explain honestly that technical/topical SEO maximises on-page authority cleanly while off-page backlink PR drives domain-level DR.",
      },
      {
        title: "Zero Grey-Hat Link Schemes",
        desc: "Clean white-hat search architecture aligned with Google Search Essentials documentation — never risky PBNs.",
      },
      {
        title: "Entity-First Schema Design",
        desc: "Connect your founder, brand, services, tools, and pricing cleanly inside linked Knowledge Graph nodes.",
      },
      {
        title: "Transparent One-Time Audit Pricing",
        desc: "Fix foundational tech SEO in a single sprint from £299 rather than endless retainers.",
      },
    ],
    testimonials: [
      {
        quote: "Illustrative target scenario: Consolidating 4 duplicated commercial service routes that mirrored identical boilerplate content into distinct intent-specific pages with valid self-canonicals.",
        client: "Multi-Service UK Brand",
        role: "Deduplication Scenario",
        company: "Reference Specification",
      },
      {
        quote: "Illustrative target scenario: Upgrading a 150-page programmatic template directory so every group renders unique category-specific guidance and linked Schema entities.",
        client: "Niche Resource Publisher",
        role: "Programmatic SEO Scenario",
        company: "Reference Specification",
      },
      {
        quote: "Illustrative target scenario: Fixing bloated >70-character truncated titles and unifying fragmented LocalBusiness + Breadcrumb markup across UK regional pages.",
        client: "Multi-City Operator",
        role: "Local Entity Scenario",
        company: "Reference Specification",
      },
    ],
    faqs: [
      {
        question: "Can technical on-page SEO guarantee Page Authority 100 or Moz DA 100?",
        answer:
          "No ethical engineer can truthfully promise a score of 100 in third-party metrics like Moz PA/DA or Ahrefs DR — those measure external backlink volume across the open web. What we achieve is 100% on-page technical hygiene, schema entity completeness, unique topical depth, zero duplication, and fast Core Web Vitals.",
      },
      {
        question: "Why does duplicate/similar content across service pages hurt rankings?",
        answer:
          "When 4+ pages share 60–100% identical headings, FAQs, and boilerplate blocks, search engines treat them as redundant clones — diluting crawl focus, triggering canonical overrides, and suppressing impressions.",
      },
      {
        question: "What does '@graph JSON-LD schema' do better than single plugins?",
        answer:
          "Instead of spitting isolated disconnected snippets per section, a linked `@graph` uses shared `@id` anchors connecting WebPage -> BreadcrumbList -> Service -> OfferCatalog -> Organization cleanly.",
      },
      {
        question: "Do you handle Google Business Profile verification too?",
        answer:
          "We ensure your website's landing URLs, NAP consistency, and local schema align accurately with your Google Business Profile primary categories and service areas — actual GBP postcard/video verification happens directly in your business owner Google login.",
      },
      {
        question: "Should technical SEO come before buying PR backlinks or running ads?",
        answer:
          "Always fix site architecture, speed, titles, and duplication first — sending paid ads or earned press links into slow, cannibalised pages wastes hard-won equity.",
      },
    ],
    finalCta: {
      headline: "Fix Hidden Crawl, Duplication & Schema Blockers in One Focused Sprint",
      description:
        "Send your domain URL via /contact. We audit your heading outline, duplicate templates, title lengths, and schema graph for a clear fixed fix quote.",
      primaryButtonText: "Request Technical SEO Audit",
      whatsappText: "Technical & Local SEO Sprint",
    },
    relatedServices: [
      {
        name: "Core Web Vitals Speed Fix",
        href: "/services/website-speed-optimization",
        desc: "Eliminate LCP, INP, and CLS issues dragging mobile Search Console health.",
      },
      {
        name: "Next.js Developer UK Pillar",
        href: "/nextjs-developer-uk",
        desc: "Full UK engineering overview pairing architecture, speed, and ownership.",
      },
      {
        name: "Insights & Guides",
        href: "/blogs",
        desc: "Explore our deep-dive UK business & technical architecture guides.",
      },
    ],
  },
};
