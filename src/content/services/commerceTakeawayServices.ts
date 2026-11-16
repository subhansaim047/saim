import type { ServicePageData } from "@/components/services/ServicePageTemplate";

export const COMMERCE_TAKEAWAY_SERVICES: Record<string, ServicePageData> = {
  // ==============================================================
  // 5. WEBSITE CLONE & 1:1 UI PORT SERVICE
  // ==============================================================
  "website-clone": {
    slug: "website-clone",
    serviceName: "1:1 UI Port & Site Rebuild",
    mainKeyword: "1:1 Website Rebuild & UI Port",
    seoTitle: "1:1 Website Rebuild & UI Port | Clean Code | Saim Dev",
    seoDescription:
      "Rebuild an existing reference UI or legacy Framer, Webflow or HTML design into clean Next.js 16 and Tailwind CSS. £1,500 fixed quote with repo handover.",
    canonicalUrl: "https://www.saimdev.site/services/website-clone",
    badge: "Pixel-Accurate Frontend Reconstruction",
    h1: "1:1 Frontend UI Reconstruction — Port Framer, Webflow or Figma Specs to Next.js 16",
    subheading:
      "Port your existing brand design, approved design mockup, or bloated Framer/Webflow layout into a clean Next.js 16 and Tailwind CSS repository. Keep exact layout geometry and 60fps interaction while dropping platform runtime lock-in.",
    primaryCtaText: "Submit Reference URL or Figma",
    secondaryCtaText: "View Concept Rebuilds",
    stripLabel: "1:1 UI Port Precision",
    stripItems: [
      {
        label: "Exact Layout Parity",
        tag: "Precision",
        tagValue: "1:1 Spacing",
        summary: "Type scale, responsive breakpoints, grids, and spacing tokens preserved faithfully.",
        href: "/demos",
      },
      {
        label: "Framer / Webflow Exit",
        tag: "Hosting",
        tagValue: "£0 Platform Tax",
        summary: "Escape high per-seat Webflow CMS and Framer CDN runtime lags in clean React code.",
        href: "/services/wordpress-headless-cms",
      },
      {
        label: "Clean Componentization",
        tag: "Code",
        tagValue: "Tailwind v4",
        summary: "Zero inline spaghetti CSS — modular React TypeScript files ready for internal engineers.",
        href: "/technologies",
      },
      {
        label: "Fixed Tier Quote",
        tag: "Pricing",
        tagValue: "£750–£2,200",
        summary: "Aligned cleanly with our £1,500 ($1,900) studio multi-page rebuild standard.",
        href: "/pricing",
      },
      {
        label: "Clean Asset Upgrade",
        tag: "Media",
        tagValue: "SVG + WebP",
        summary: "Sharpen blurry PNG icons to clean vector SVGs and convert heavy frames cleanly.",
        href: "/services/website-speed-optimization",
      },
    ],
    painPoints: [
      {
        problem: "Auto-exported HTML tools dump unreadable div soup, broken responsive grids, and rigid runtime scripts.",
        solution: "We reconstruct the UI architecture cleanly by hand using semantic HTML5, React 19 components, and Tailwind utilities.",
      },
      {
        problem: "Heavy no-code Framer and Webflow bundles download massive runtime libraries before mobile hero interactions respond.",
        solution: "Native CSS transitions paired with selective Framer Motion / GSAP keep layout responsiveness sharp without third-party scripts.",
      },
      {
        problem: "Junior contractors eyeball layouts loosely, causing awkward line breaks, wrong letter spacing, and jumpy headers.",
        solution: "We verify viewport parity across 360px, 768px, 1280px, and 1440px breakpoints against your approved reference design.",
      },
      {
        problem: "Copying copyrighted brand assets blind creates commercial infringement risks if original marks stay swapped in.",
        solution: "We port layout structure only for designs you own, hold Figma rights to, or commission cleanly with your own copy and imagery.",
      },
    ],
    problemSection: {
      overline: "01 / NO-CODE EXPORT PROBLEMS",
      titleBefore: "Replacing",
      titleStrike: "locked platform exports",
      titleOwned: "With Handwritten Next.js UI.",
      subtitle:
        "Design tools like Webflow and Framer excel at visual exploration, but scaling custom logic, strict SEO, and clean ownership calls for real TypeScript components.",
      solutionTag: "PIXEL-FAITHFUL ENGINEERING",
      solutionTitle: "Clean Component Code Without Proprietary Bloat",
      solutionDesc:
        "Every button hover, accordion ease, mobile drawer transition, and typographic ratio is rebuilt as maintainable React components under your private GitHub repository.",
      solutionMetrics: [
        { value: "60fps", label: "Smooth Motion" },
        { value: "360–4k", label: "Breakpoint Parity" },
        { value: "£1,500", label: "Standard Rebuild" },
      ],
      chartTitle: "Script Footprint: Visual Builder vs Hand-Built React UI",
      chartBadge: "Payload Model",
      chartYAxis: "Code Cleanliness Index",
      chartXAxis: "Implementation Approach",
      chartCaption:
        "Reconstructing visual fidelity inside clean React drops redundant builder scripts while matching design tokens accurately.",
      bars: [
        {value: "36", label: "Auto HTML Export", heightPx: 74},
        {value: "58", label: "Heavy Webflow", heightPx: 112},
        {value: "74", label: "Framer Runtime", heightPx: 150},
        {value: "98", label: "Handwritten Next.js", isHighlight: true, heightPx: 192},
      ],
    },
    deliverables: [
      {
        title: "Component-By-Component React Breakdown",
        description: "Reusable Hero, Navigation Drawer, Bento Grid, Marquee, Pricing, and Footer TypeScript components.",
      },
      {
        title: "Exact Typography & Spatial Token Port",
        description: "Font weights, tracking, clamp() sizes, radii, and dark/light surfaces matched accurately.",
      },
      {
        title: "Compositor-Safe Animation Porting",
        description: "Scroll choreography, sticky decks, and hover drawers recreated in Framer Motion / GSAP.",
      },
      {
        title: "Original Brand Swaps & Copy Cleansing",
        description: "Clean insertion of your domain, metadata, forms, WhatsApp routing, and legal ownership copy.",
      },
      {
        title: "Crisp Vector & WebP Asset Conversion",
        description: "Extracting vector strokes and transcoding heavy media cleanly without CDN hotlinks.",
      },
      {
        title: "Clean Semantic Landmarks & SEO Wiring",
        description: "Replacing messy builder nested <div> wrappers with valid <header>, <nav>, <main>, and JSON-LD schema.",
      },
    ],
    deliverablesMeta: {
      overline: "02 / PORTING ARCHITECTURE",
      title: "Included in Every",
      titleMuted: "1:1 UI Port",
      subtitle:
        "You receive readable engineering source code rather than a brittle scraped snapshot.",
      rowTags: ["UI Reconstruction", "Tailwind v4", "Repo Handover"],
    },
    sectionHeadings: {
      valueOverline: "03 / Clean Portability",
      valueTitle: "Exact Visual Standard Without",
      valueMuted: "Monthly Builder Tolls",
      marketOverline: "04 / Conversion Targets",
      marketTitle: "Rebuilt Aesthetic",
      marketMuted: "Reference Categories",
      processOverline: "05 / RECONSTRUCTION WORKFLOW",
      processTitle: "Visual Audit to",
      processMuted: "Clean GitHub Commit",
      processSummary: "Breakpoint check at 360px–1440px, 50/50 milestone terms, full ownership transfer.",
      processStageTag: "Side-by-Side Staging QA",
      stackOverline: "06 / UI RECONSTRUCTION STACK",
      stackTitle: "Rebuilt Cleanly in",
      stackMuted: "React 19 & Motion",
      proofOverline: "07 / LIVE SHOWCASE BUILDS",
      proofTitle: "Frontend Craft",
      proofMuted: "Concept Demos",
      pricingOverline: "08 / FLAT RECONSTRUCTION TIERS",
      pricingTitle: "1:1 Port & Rebuild",
      pricingMuted: "Pricing",
      pricingNote: "Fixed GBP/USD quote • Synced with studio Clone tier (£1,500 / $1,900)",
      pricingButtonText: "Request Rebuild Quote",
      advantageOverline: "09 / Why Reconstruct Cleanly",
      advantageTitle: "Zero Scraped Junk —",
      advantageMuted: "100% Typed Architecture",
      feedbackOverline: "10 / Target Reference Scenarios",
      feedbackTitle: "Typical UI Port",
      feedbackMuted: "Scenarios",
      faqOverline: "11 / Legal & Technical FAQ",
      faqIntro:
        "Clarity on intellectual property responsibility, Figma/Framer migrations, animations, and fixed pricing tiers.",
      bannerTag: "Clean React Rebuild • Owned Git Repo • £1,500 / $1,900 Standard",
    },
    featuresAndBenefits: [
      {
        feature: "Zero Builder Hotlinks",
        benefit: "Total Asset Independence",
        description: "All scripts, fonts, videos, and icons serve cleanly from your own deployment rather than Framer/Webflow CDNs.",
      },
      {
        feature: "Interactive State Fidelity",
        benefit: "Everything Works on Touch",
        description: "Modals, currency toggles, accordions, and mobile navigation drawers behave cleanly across iOS & Android.",
      },
      {
        feature: "Accessible Focus & Keyboard States",
        benefit: "Superior Usability",
        description: "We add clean keyboard escape handling and ARIA states that design tools often skip.",
      },
      {
        feature: "Editable Content Separation",
        benefit: "Simple Text Updates Later",
        description: "Keep headlines, packages, and links in clean TypeScript data files so updating wording takes seconds.",
      },
      {
        feature: "Native Lead Routing",
        benefit: "Zero Third-Party Form Branding",
        description: "Ditch Webflow form submission limits and branded thank-you screens with native API routing.",
      },
      {
        feature: "Ready for Backend Scaling",
        benefit: "Expand Whenever Needed",
        description: "Drop database dashboards, Stripe checkout, or gated tools directly into your newly ported Next.js app.",
      },
    ],
    industries: [
      {
        industry: "High-Design Agencies Moving Off Webflow",
        description: "Replicate complex dark editorial layouts and cursor effects cleanly outside Webflow Enterprise fees.",
        exampleProject: "Studio D'Brickell Concept",
        demoUrl: "/demos/studio-dbrickell/index.html",
      },
      {
        industry: "Luxury Minimalist Fashion & Retail",
        description: "Preserve fluid scroll lookbooks and typographic poise inside static-edge storefront code.",
        exampleProject: "Atelier Noir Concept",
        demoUrl: "/demos/atelier-noir/index.html",
      },
      {
        industry: "Salon & Wellness Brands Exiting Framer",
        description: "Port mobile drawers, treatment tabs, and parallax image strips onto fast, zero-retainer hosting.",
        exampleProject: "Valèria Studio Concept",
        demoUrl: "/demos/valeria/index.html",
      },
      {
        industry: "Architectural Firms With Visual Specs",
        description: "Convert high-resolution Figma portfolios into fast keyboard-accessible project grids.",
        exampleProject: "Architecture Studio Concept",
        demoUrl: "/demos/architecture/index.html",
      },
      {
        industry: "Large Legacy Static Storefronts",
        description: "Refactor sprawling multi-page static catalogs into clean reusable React route templates.",
        exampleProject: "HQ Leathercon Concept",
        demoUrl: "/hq-leathercon/index.html",
      },
      {
        industry: "Hospitality Concepts Ready to Take Orders",
        description: "Port menu branding cleanly while adding interactive cart calculation and allergen filtering.",
        exampleProject: "HotBite Street Food",
        demoUrl: "/hotbite/index.html",
      },
    ],
    process: [
      {
        step: "Step 01",
        title: "Design File / Reference Inspection",
        description: "Review every breakpoint, hover animation, modal, and ownership/brand substitution rule upfront.",
        duration: "Day 1",
      },
      {
        step: "Step 02",
        title: "Design Token & Layout Shell",
        description: "Extract fonts, spacing cadence, CSS variables, and shared navigation/footer primitives.",
        duration: "Day 2–3",
      },
      {
        step: "Step 03",
        title: "Full Component & Motion Engineering",
        description: "Hand-code each route section, wire mobile drawers, contact handlers, and clean metadata.",
        duration: "Day 4–7",
      },
      {
        step: "Step 04",
        title: "Breakpoint Parity Check & Repo Transfer",
        description: "Side-by-side desktop and iPhone visual sign-off on staging followed by clean GitHub handover.",
        duration: "Day 8–10",
      },
    ],
    techStack: [
      { name: "Next.js 16", role: "Modular App Router Views" },
      { name: "Tailwind CSS v4", role: "Precise Responsive Utility Tokens" },
      { name: "Framer Motion / GSAP", role: "Scroll & Drawer Choreography" },
      { name: "React 19", role: "Zero-Junk Clean Markup" },
      { name: "TypeScript", role: "Typed Component Props" },
      { name: "Sharp / WebP", role: "Optimised Self-Hosted Assets" },
    ],
    caseStudies: [
      {
        title: "Atelier Noir Luxury Lookbook Port",
        category: "Luxury UI Reconstruction",
        description: "Minimalist luxury aesthetic ported into clean static views with fast mobile responsiveness.",
        tech: ["Tailwind CSS", "Static HTML/React", "Self-Hosted Media"],
        metrics: "Reference Concept",
        demoUrl: "/demos/atelier-noir/index.html",
      },
      {
        title: "Valèria Salon Framer-to-Code Build",
        category: "Framer Migration Concept",
        description: "Multi-view editorial beauty concept rebuilt without external Framer script runtime bloat.",
        tech: ["Next.js", "Motion Transitions", "Mobile Drawer"],
        metrics: "Interactive Demo",
        demoUrl: "/demos/valeria/index.html",
      },
      {
        title: "Studio D'Brickell Agency Showcase",
        category: "Dark Editorial Concept",
        description: "High-contrast dark agency interface concept pairing bold grotesque scale with crisp card grids.",
        tech: ["React UI", "Custom Tokens", "Responsive Grid"],
        metrics: "Interactive Demo",
        demoUrl: "/demos/studio-dbrickell/index.html",
      },
    ],
    competitorComparison: {
      overline: "REBUILD QUALITY GAP",
      title: "Clean Next.js Port vs",
      titleMuted: "Automated Site Scrapers / No-Code",
      subtitle:
        "Inspect why hand-engineered React ports outlast broken HTML site-cloners and expensive no-code plans.",
      columns: ["Implementation Standard", "Saim Dev Clean Code Port", "HTTrack Scrapers / No-Code Plans"],
      rows: [
        {
          criteria: "Maintainability & Code Hygiene",
          saim: "Clean Tailwind + TypeScript components editable in any IDE",
          alternative: "Unreadable obfuscated JS bundles and broken CSS filenames",
        },
        {
          criteria: "Monthly Runtime Cost",
          saim: "£0 platform fee on standard static/serverless tiers",
          alternative: "Recurring Framer/Webflow Pro CMS invoices every month",
        },
        {
          criteria: "Brand & SEO Independence",
          saim: "Fresh Schema.org JSON-LD, clean meta tags, self-hosted assets",
          alternative: "Dangling external asset URLs that break when source CDN updates",
        },
        {
          criteria: "Backend Expandability",
          saim: "Ready for custom API routes, calculators, auth, and Stripe",
          alternative: "Requires messy Zapier scripts or external iframes",
        },
      ],
    },
    engineeringChecklist: {
      title: "Legal, Aesthetic & Technical Parity Checklist",
      subtitle:
        "Every UI reconstruction project is verified against clean engineering and ownership standards:",
      items: [
        "All client brand logos, copy, legal pages, and favicons cleanly substituted (zero leftover source marks)",
        "Pixel typography hierarchy & spacing checked across mobile (360px), tablet (768px), and laptop (1440px)",
        "Zero external hotlinked images or CSS bundles pointing back to third-party Webflow/Framer domains",
        "Interactive forms, CTAs, and drawers tested with real keyboard & touch events",
        "Clean Git commit history and README instructions for running/deploying locally",
        "Full semantic HTML5 check so screen readers and search bots parse every section cleanly",
      ],
    },
    pricing: [
      {
        name: "Single Landing Port",
        price: "£750",
        description: "Reconstruct a single approved high-craft landing page design into clean Next.js code ($950 USD).",
        features: [
          "Full desktop & mobile responsive fidelity",
          "Interactive animations & custom form routing",
          "Assets upgraded & self-hosted locally",
          "Clean Tailwind + TypeScript repo transfer",
          "2 rounds of fine visual alignment",
          "14 days post-launch technical support",
        ],
      },
      {
        name: "Full Website Clone / Port",
        price: "£1,500",
        description: "Multi-page Figma, Framer, Webflow, or approved UI reconstruction (£1,500 GBP / $1,900 USD).",
        popular: true,
        features: [
          "Up to 10 bespoke routes & interactive drawers",
          "Full GSAP / Framer Motion micro-interactions",
          "Brand logo, copy & metadata replacement",
          "Self-hosted assets + zero builder lock-in",
          "Clean Schema.org + Core Web Vitals tuning",
          "30 days dedicated post-launch support",
        ],
      },
      {
        name: "Storefront / App UI Port",
        price: "£2,200",
        description: "Complex storefront layouts, custom configurators, or multi-view SaaS interface ports ($2,800 USD).",
        features: [
          "Large component library (20+ complex views)",
          "Custom cart drawers, filter UI & pricing logic",
          "Interactive state persistence & form flows",
          "Performance optimization & split bundles",
          "Dedicated walkthrough & staging verification",
          "30 days priority support",
        ],
      },
    ],
    whyChooseUs: [
      {
        title: "Aligned With Official £1,500 / $1,900 Rate",
        desc: "Exact pricing parity with our published studio plans table — transparent GBP & USD quotes upfront.",
      },
      {
        title: "Handwritten Clean TypeScript",
        desc: "Never an automated Web-ZIP download. Every component is genuinely authored from scratch for long-term editing.",
      },
      {
        title: "Design Fidelity Down to Hover Eases",
        desc: "We notice button border transitions, letter tracking, sticky stack ratios, and mobile padding rhythm.",
      },
      {
        title: "Responsible Structural Rebuilding",
        desc: "We build from your licensed Figma specs, owned legacy sites, or clean layout concepts with your own IP & brand.",
      },
      {
        title: "Instant CMS Upgrades Optional",
        desc: "Need blog or gallery items editable later? Easily bind Sanity or MDX cleanly inside the ported code.",
      },
      {
        title: "Free Concept Slice Inspection",
        desc: "Ask for a short preview or walkthrough of our similar live concept builds before locking in full scope.",
      },
    ],
    testimonials: [
      {
        quote: "Illustrative target scenario: Moving a finished Framer agency launch site onto clean owned Next.js code so engineers can embed a Stripe portal directly inside the site.",
        client: "Design-Led SaaS Startup",
        role: "Framer Port Scenario",
        company: "Reference Specification",
      },
      {
        quote: "Illustrative target scenario: Turning an approved 8-frame Figma prototype into responsive React components without losing animation fluidity.",
        client: "Creative Brand Team",
        role: "Figma-to-Next Scenario",
        company: "Reference Specification",
      },
      {
        quote: "Illustrative target scenario: Offboarding an expensive Webflow Enterprise tier onto zero-subscription serverless hosting with clean component ownership.",
        client: "Commercial Digital Group",
        role: "Webflow Exit Scenario",
        company: "Reference Specification",
      },
    ],
    faqs: [
      {
        question: "What types of UI sources can you port into Next.js 16?",
        answer:
          "We reconstruct approved Figma design systems, your company's existing Webflow/Framer/Squarespace site that needs clean code ownership, or structured reference layouts swapped completely with your brand copy, assets, and legal marks.",
      },
      {
        question: "Do I pay anything ongoing after porting from Webflow or Framer?",
        answer:
          "No Webflow/Framer workspace fees remain. Your exported codebase runs directly on free or usage-based serverless edge platforms (like Vercel or Cloudflare) with zero recurring studio fees.",
      },
      {
        question: "Why does the package list both £1,500 and $1,900?",
        answer:
          "We publish clear UK GBP (£1,500) and international USD ($1,900) fixed benchmarks matched to our /pricing matrix so UK and international founders know exact scope cost upfront.",
      },
      {
        question: "Are copyrighted third-party images or trademarks copied?",
        answer:
          "Never — clients must supply rights to their own designs, imagery, and logos (or commission replacement branding). We transfer structure cleanly and replace assets strictly with licensed or original brand media.",
      },
      {
        question: "How long does a full multi-page UI port take?",
        answer:
          "Single landing ports complete in 4–5 days; multi-page £1,500 rebuilds typically deliver to staging within 7–10 working days.",
      },
    ],
    finalCta: {
      headline: "Turn Your Figma Spec or Legacy Builder Site Into Owned React Code",
      description:
        "Share your design link or URL via /contact for a precise component estimate, breakpoint plan, and written £750–£2,200 quote.",
      primaryButtonText: "Submit URL for Rebuild Quote",
      whatsappText: "1:1 UI Port & Next.js Rebuild",
    },
    relatedServices: [
      {
        name: "Website Redesign UK",
        href: "/services/website-redesign",
        desc: "Upgrade an outdated design entirely rather than keeping existing layouts.",
      },
      {
        name: "WordPress to Headless CMS",
        href: "/services/wordpress-headless-cms",
        desc: "Keep blog publishing easy while dropping WordPress runtime fees.",
      },
      {
        name: "Live Concept Gallery",
        href: "/demos",
        desc: "Inspect our interactive luxury, salon, and hospitality UI rebuild demos.",
      },
    ],
  },

  // ==============================================================
  // 6. CUSTOM E-COMMERCE DEVELOPMENT (NEXT.JS + STRIPE)
  // ==============================================================
  "ecommerce-development": {
    slug: "ecommerce-development",
    serviceName: "Custom Next.js eCommerce",
    mainKeyword: "Custom eCommerce Development UK",
    seoTitle: "Custom Next.js eCommerce UK | Stripe Checkout | Saim Dev",
    seoDescription:
      "Custom Next.js 16 storefronts with Stripe Checkout, product configurators, Apple Pay and zero monthly SaaS platform taxes. Built for UK retail conversion.",
    canonicalUrl: "https://www.saimdev.site/services/ecommerce-development",
    badge: "Direct-to-Consumer & Stripe Checkout",
    h1: "Custom Next.js 16 eCommerce Storefronts — Fast Product Filters, Configurators & Stripe Pay",
    subheading:
      "Built for UK and European retail brands needing bespoke configurators, multi-variant catalogues, or subscription bundles without bloated SaaS checkout plugins. Native Stripe Apple Pay, Google Pay, Klarna support, and UK VAT clarity.",
    primaryCtaText: "Scope Your Online Store",
    secondaryCtaText: "Launch HQ Leathercon Demo",
    stripLabel: "D2C Storefront Engineering",
    stripItems: [
      {
        label: "Custom Configurators",
        tag: "Feature",
        tagValue: "Size / Finish UI",
        summary: "Inspect our live custom leather jacket measurement and material builder concept.",
        href: "/hq-leathercon/products/custom-leather-jacket-builder/index.html",
      },
      {
        label: "Zero App Subscriptions",
        tag: "Overheads",
        tagValue: "£0 App Tax",
        summary: "Code size charts, cross-sell slide carts, and bundle logic natively without monthly add-ons.",
        href: "/services/ecommerce-shopify",
      },
      {
        label: "UK Wallet Support",
        tag: "Checkout",
        tagValue: "Apple + Klarna",
        summary: "Express one-tap wallets through verified Stripe Checkout or Payment Element APIs.",
        href: "/technologies",
      },
      {
        label: "Instant Facet Filtering",
        tag: "UX Speed",
        tagValue: "No Reloads",
        summary: "Colour swatches, leather type, price range, and collection filters update smoothly.",
        href: "/hq-leathercon/index.html",
      },
      {
        label: "UK Postage Logic",
        tag: "Fulfilment",
        tagValue: "Royal Mail / DPD",
        summary: "Configure mainland UK free-shipping thresholds, Highlands/NI rates, and international duties.",
        href: "/contact",
      },
    ],
    painPoints: [
      {
        problem: "Off-the-shelf stores look identical and break down as soon as products need bespoke measurements or mix-and-match builders.",
        solution: "Bespoke React product views handle unlimited custom attributes, conditional pricing add-ons, and measurement capture cleanly.",
      },
      {
        problem: "Paying monthly commissions plus 8 paid SaaS plugins for mega-menus, sticky carts, and filters eats retail margin.",
        solution: "Native Tailwind slide-out bag drawers, swatch selectors, and cross-sell upsells run inside clean owned code with £0 monthly app rent.",
      },
      {
        problem: "Sluggish product pages on 4G kill paid social ROAS before high-res lookbook shots even appear.",
        solution: "Priority preloading on primary product media paired with WebP swatch switching delivers tactile instant browsing.",
      },
      {
        problem: "Disconnected checkout webhooks risk unrecorded orders when customers close tabs mid-redirect.",
        solution: "Idempotent Stripe webhook confirmation updates inventory/email receipts reliably regardless of customer browser behaviour.",
      },
    ],
    problemSection: {
      overline: "01 / RETAIL CONVERSION FRICTION",
      titleBefore: "Stopping Margin Bleed From",
      titleStrike: "plugin-heavy slow checkouts",
      titleOwned: "With Custom Stripe Storefronts.",
      subtitle:
        "Generic D2C themes buckle under paid traffic when heavy cart scripts fight third-party tracking tags. Bespoke React storefronts strip retail UX down to pure speed and clarity.",
      solutionTag: "CUSTOM D2C RETAIL STACK",
      solutionTitle: "Bespoke Product UX + Native Stripe Checkout Infrastructure",
      solutionDesc:
        "From bespoke luxury customisation builders to focused 20–500 SKU UK retail catalogues, every tap leads cleanly into Apple Pay, Google Pay, or Klarna checkout.",
      solutionMetrics: [
        { value: "£0", label: "Monthly App Fees" },
        { value: "Stripe", label: "Apple/Klarna Pay" },
        { value: "UK VAT", label: "Postage Rules" },
      ],
      chartTitle: "Checkout Responsiveness & Script Weight Model",
      chartBadge: "Storefront Model",
      chartYAxis: "Store Efficiency Index",
      chartXAxis: "Store Platform",
      chartCaption:
        "Custom Next.js retail components remove heavy WooCommerce queries and overlapping third-party plugin scripts.",
      bars: [
        {value: "41", label: "Heavy WooCommerce", heightPx: 74},
        {value: "63", label: "App-Laden Liquid", heightPx: 112},
        {value: "82", label: "Clean Static Shop", heightPx: 150},
        {value: "97", label: "Next.js + Stripe", isHighlight: true, heightPx: 192},
      ],
    },
    deliverables: [
      {
        title: "Persistent Slide-Out Bag & Upsell Logic",
        description: "Client-persisted basket state calculating free UK delivery thresholds and bundle discounts live.",
      },
      {
        title: "Multi-Variant Swatch & Attribute Matrices",
        description: "Switch colour finishes, sizes, and price deltas cleanly without jarring page refreshes.",
      },
      {
        title: "Custom Product Configurator Views",
        description: "Step-by-step measurement, trim, or engraving selectors passing structured line-item metadata to order summaries.",
      },
      {
        title: "Stripe Checkout + Payment Element APIs",
        description: "Support UK Debit/Credit cards, Apple Pay, Google Pay, and Buy Now Pay Later options seamlessly.",
      },
      {
        title: "Structured Product & Offer JSON-LD",
        description: "Rich price, currency, availability, and brand markup tuned cleanly per product route.",
      },
      {
        title: "Admin Order Notification & Inventory Bridge",
        description: "Instant transactional email receipts, CSV/webhook fulfillment export, or Sanity/Postgres inventory hooks.",
      },
    ],
    deliverablesMeta: {
      overline: "02 / RETAIL ENGINEERING SCOPE",
      title: "Engineered Inside Every",
      titleMuted: "Next.js Storefront",
      subtitle:
        "Every component designed around basket average order value, fast mobile image zooming, and clear UK delivery expectations.",
      rowTags: ["Stripe Commerce", "Product UX", "£0 Plugin Rent"],
    },
    sectionHeadings: {
      valueOverline: "03 / Commercial Store Edge",
      valueTitle: "Removing Subscription Bloat While",
      valueMuted: "Lifting Basket Clarity",
      marketOverline: "04 / Retail Verticals",
      marketTitle: "Storefront Categories &",
      marketMuted: "Interactive Demos",
      processOverline: "05 / STOREFRONT BUILD SPRINT",
      processTitle: "Catalog Spec to",
      processMuted: "Test Checkout Launch",
      processSummary: "Tested end-to-end with Stripe test cards before flipping live keys.",
      processStageTag: "Stripe Test Card QA",
      stackOverline: "06 / COMMERCE ENGINE",
      stackTitle: "Owned Store Code Paired With",
      stackMuted: "Global Payment Rails",
      proofOverline: "07 / LIVE STOREFRONT CONCEPTS",
      proofTitle: "Inspect Bespoke Store",
      proofMuted: "Interactive Builds",
      pricingOverline: "08 / FIXED E-COMMERCE PACKAGES",
      pricingTitle: "Custom Storefront",
      pricingMuted: "Build Tiers",
      pricingNote: "Fixed retail quote • Zero percentage cut taken by Saim Dev",
      pricingButtonText: "Scope My Storefront",
      advantageOverline: "09 / Retail Engineering Edge",
      advantageTitle: "Built Around Products",
      advantageMuted: "That Won't Fit Templates",
      feedbackOverline: "10 / Target Reference Scenarios",
      feedbackTitle: "D2C Storefront",
      feedbackMuted: "Blueprints",
      faqOverline: "11 / Retail & Tax FAQ",
      faqIntro:
        "Answers covering Stripe UK fees, VAT display rules, SKU catalogue size, and bespoke builders vs Shopify.",
      bannerTag: "Stripe Direct • £0 Monthly App Subscriptions • Owned Store Code",
    },
    featuresAndBenefits: [
      {
        feature: "Zero App Subscription Bloat",
        benefit: "Fixed Operating Costs",
        description: "Cross-sells, size guides, trust ribbons, and promo bars live directly inside native JSX.",
      },
      {
        feature: "Product JSON-LD Rich Data",
        benefit: "Cleaner Google Shopping Signals",
        description: "Exact SKU, priceCurrency GBP, availability, and image metadata on every product route.",
      },
      {
        feature: "Tailored UK Postage Matrix",
        benefit: "No Surprise Shipping Errors",
        description: "Configure flat rates, weight tiers, express courier rules, and free delivery progress bars cleanly.",
      },
      {
        feature: "Mobile Sticky Add-to-Bag",
        benefit: "Higher Handheld Checkout Starts",
        description: "Keep price, variant state, and Add to Bag reachable while shoppers read fabrics or specs.",
      },
      {
        feature: "Multi-Currency Readiness",
        benefit: "Sell UK, EU & US Cleanly",
        description: "Present GBP (£), EUR (€), or USD ($) cleanly alongside automatic locale selection.",
      },
      {
        feature: "Clean Return & Warranty Blocks",
        benefit: "Reduce Pre-Purchase Hesitation",
        description: "Embed crisp UK 14–30 day return assurances and delivery ETAs straight under purchase CTAs.",
      },
    ],
    industries: [
      {
        industry: "Bespoke Apparel & Leatherwear",
        description: "Made-to-measure selectors, hide/hardware customisation matrices, and luxury editorial lookbooks.",
        exampleProject: "HQ Leathercon Flagship",
        demoUrl: "/hq-leathercon/index.html",
      },
      {
        industry: "Made-to-Order Builders",
        description: "Custom jacket, sign, Print-on-Demand, or modular kit builders calculating options cleanly.",
        exampleProject: "Custom Jacket Configurator",
        demoUrl: "/hq-leathercon/products/custom-leather-jacket-builder/index.html",
      },
      {
        industry: "Minimalist Fashion & Capsules",
        description: "Editorial drop storefronts with crisp collection storytelling and high-contrast garment framing.",
        exampleProject: "Atelier Noir Lookbook",
        demoUrl: "/demos/atelier-noir/index.html",
      },
      {
        industry: "Artisan Beverage & Packaged Food",
        description: "Box builders, tasting flight bundles, UK nutrition/allergen tables, and cold-chain courier schedules.",
        exampleProject: "Frenchyse Brand Concept",
        demoUrl: "/frenchyse/index.html",
      },
      {
        industry: "Skincare & Wellness Retail",
        description: "Routine step bundles, ingredient breakdown tabs, and repeat refill purchase links.",
        exampleProject: "Serenia Wellness Concept",
        demoUrl: "/demos/serenia/index.html",
      },
      {
        industry: "High-Margin Equipment & Gear",
        description: "Spec comparison tables, CAD/PDF datasheet downloads, and B2B/B2C checkout lanes.",
        exampleProject: "AK Automotive Kit Store",
        demoUrl: "/demos/akdetailing/index.html",
      },
    ],
    process: [
      {
        step: "Step 01",
        title: "Catalogue & Checkout Audit",
        description: "Review SKUs, variant attributes, custom builder rules, UK postage zones, and payment accounts.",
        duration: "Day 1–2",
      },
      {
        step: "Step 02",
        title: "Design System, Filters & PDP Wireframes",
        description: "Craft home, collection filtering, product page gallery, and slide-out basket experience.",
        duration: "Day 3–6",
      },
      {
        step: "Step 03",
        title: "Stripe Payment Element & Catalog Build",
        description: "Connect live Stripe products/server pricing checks, webhooks, transactional email receipts, and schemas.",
        duration: "Day 7–11",
      },
      {
        step: "Step 04",
        title: "Live Payment Testing & Store Launch",
        description: "Test Apple Pay, refund flows, mobile basket edge states, and hand over repository & admin docs.",
        duration: "Day 12–14",
      },
    ],
    techStack: [
      { name: "Next.js 16", role: "Fast Product & Collection SSR" },
      { name: "Stripe Checkout & Webhooks", role: "Secure Payment Processing" },
      { name: "Sanity / Postgres Catalogue", role: "Clean Product & Order Sync" },
      { name: "Tailwind CSS", role: "Responsive Lookbook & Grid UI" },
      { name: "Product Schema JSON-LD", role: "Rich Price & Stock Snippets" },
      { name: "Resend / SMTP", role: "Branded Order Confirmation Mails" },
    ],
    caseStudies: [
      {
        title: "HQ Leathercon Luxury Store Concept",
        category: "Multi-Category Retail Concept",
        description: "Comprehensive catalogue structure handling deep jacket categories, editorial cards, and crisp product galleries.",
        tech: ["Static Performance", "Retail Taxonomy", "Responsive PDP"],
        metrics: "Interactive Demo",
        demoUrl: "/hq-leathercon/index.html",
      },
      {
        title: "Custom Leather Jacket Configurator Concept",
        category: "Interactive Product Builder",
        description: "Hands-on multi-option jacket sizing, styling, and finish workflow proving bespoke product UX.",
        tech: ["State Management", "Interactive Steps", "Custom Payload"],
        metrics: "Interactive Demo",
        demoUrl: "/hq-leathercon/products/custom-leather-jacket-builder/index.html",
      },
      {
        title: "Atelier Noir Editorial Storefront",
        category: "Luxury D2C Aesthetic",
        description: "Focused minimalist garment presentation designed for high perceived value and editorial brand recall.",
        tech: ["Dark Editorial UI", "Typography", "Mobile Nav"],
        metrics: "Interactive Demo",
        demoUrl: "/demos/atelier-noir/index.html",
      },
    ],
    competitorComparison: {
      overline: "PLATFORM TRADE-OFFS",
      title: "Custom Next.js + Stripe vs",
      titleMuted: "WooCommerce / Plugin Stores",
      subtitle:
        "Understand when bespoke Next.js eCommerce beats clunky PHP shopping carts (or explore our Headless Shopify path if you already rely on Shopify POS).",
      columns: ["Commerce Need", "Saim Dev Next.js + Stripe", "Typical WooCommerce Build"],
      rows: [
        {
          criteria: "Bespoke Configurators",
          saim: "Clean React components built around exact custom rules",
          alternative: "Fragile conflicting PHP add-on plugins per attribute",
        },
        {
          criteria: "Catalog Filter Speed",
          saim: "Instant client/edge filtering with zero spinner stalls",
          alternative: "Heavy SQL meta_query joins choking on mobile traffic",
        },
        {
          criteria: "Checkout Security & PCI",
          saim: "Card data handled 100% inside hosted Stripe TLS frames",
          alternative: "Requires ongoing security monitoring of entire WordPress DB",
        },
        {
          criteria: "Plugin Tax Savings",
          saim: "Upsells, promo bars, and size guides coded natively at £0/mo",
          alternative: "Accumulated annual WooCommerce extension renewals",
        },
      ],
    },
    engineeringChecklist: {
      title: "Custom eCommerce Pre-Launch QA Checklist",
      subtitle:
        "Verified across test transactions before accepting a single live customer payment:",
      items: [
        "Server-side price verification in Stripe API (never trusting client-submitted totals)",
        "Verified Stripe signature webhook endpoint handling order completion & confirmation emails",
        "Explicit image aspect ratios across product cards ensuring zero CLS jumping during loads",
        "Product & Offer JSON-LD verified for GBP/USD pricing and clear shipping disclosures",
        "Empty cart, sold-out variant, invalid postcode, and coupon state handling tested on mobile",
        "Clear UK distance-selling terms, refund timeframes, and VAT clarity linked in footer/checkout",
      ],
    },
    pricing: [
      {
        name: "Core D2C Storefront",
        price: "£750",
        description: "Curated custom Next.js store for up to 25 focused products with Stripe Apple Pay & Klarna.",
        features: [
          "Up to 25 SKUs with variant selectors",
          "Slide-out basket & free delivery bar",
          "Stripe Checkout (Apple Pay, Google Pay, Cards)",
          "UK postage rules & order receipt emails",
          "Product JSON-LD schema & fast image sizing",
          "14 days post-launch technical support",
        ],
      },
      {
        name: "Growth Retail Flagship",
        price: "£1,250",
        description: "Full dynamic collection filtering, CMS product manager (Sanity), and editorial lookbooks.",
        popular: true,
        features: [
          "Unlimited collection categories via Sanity CMS",
          "Instant colour/size faceted filtering",
          "Custom upsell drawer, promo codes & bundles",
          "UK/EU/US multi-currency toggle support",
          "Webhook inventory sync & GA4 eCommerce events",
          "30 days dedicated post-launch support",
        ],
      },
      {
        name: "Bespoke Configurator Store",
        price: "£2,200",
        description: "Custom interactive product builders, made-to-measure pricing logic, or subscription retail.",
        features: [
          "Multi-step interactive customisation builder",
          "Conditional dimension / add-on price calculation",
          "Customer account portal & order history",
          "Stripe Subscriptions or CRM webhook bridge",
          "Staging load test + GitHub codebase handover",
          "30 days priority support",
        ],
      },
    ],
    whyChooseUs: [
      {
        title: "Stripe Server-Verified Totals",
        desc: "All item pricing and shipping thresholds calculate cleanly server-side so basket totals cannot be tampered with.",
      },
      {
        title: "True Custom Product UX",
        desc: "Don't squash made-to-order goods into tiny generic dropdowns — build tactile interactive pickers.",
      },
      {
        title: "Zero Agency Order Tax",
        desc: "Standard card processing goes straight to your own Stripe merchant account with zero cut from us.",
      },
      {
        title: "Already Using Shopify Admin?",
        desc: "If your warehouse relies on Shopify Inventory/POS, view our dedicated /services/ecommerce-shopify headless build instead.",
      },
      {
        title: "Fast Ad-Ready Product Pages",
        desc: "Google Shopping and Meta Catalog clickers land directly on crisp, mobile-ready buy frames.",
      },
      {
        title: "Owned Retail Infrastructure",
        desc: "Zero risk of sudden theme licensing changes or mandatory expensive app upgrades.",
      },
    ],
    testimonials: [
      {
        quote: "Illustrative target scenario: A made-to-measure outerwear label introducing an interactive size/lining builder attached straight to Stripe Checkout.",
        client: "Bespoke Apparel Brand",
        role: "Configurator Scenario",
        company: "Reference Specification",
      },
      {
        quote: "Illustrative target scenario: An artisan skincare/food studio launching an 18-product D2C shop without managing complex WooCommerce SQL databases.",
        client: "Boutique D2C Makers",
        role: "Core Store Scenario",
        company: "Reference Specification",
      },
      {
        quote: "Illustrative target scenario: A multi-currency UK brand splitting retail and wholesale pricing tiers cleanly in one React codebase.",
        client: "Specialist Consumer Brand",
        role: "Growth Store Scenario",
        company: "Reference Specification",
      },
    ],
    faqs: [
      {
        question: "When should I choose Custom Next.js + Stripe instead of Shopify?",
        answer:
          "Choose Custom Next.js + Stripe if you sell a curated range (1–300 SKUs), require custom product configurators or calculators, or run subscriptions/digital products without needing retail POS hardware. If you already rely on Shopify Admin/POS and dozens of inventory workflows, choose our Headless Shopify service instead.",
      },
      {
        question: "Does this support Apple Pay, Google Pay, and Klarna in the UK?",
        answer:
          "Yes — via your official UK Stripe account, Apple Pay, Google Pay, Link, and Klarna/Clearpay can all activate seamlessly during checkout.",
      },
      {
        question: "How do I add new products or adjust stock numbers after launch?",
        answer:
          "On our Growth package (£1,250), products and collections manage cleanly via a visual Sanity Studio dashboard (or PostgreSQL admin UI) with instant revalidation — no coding required.",
      },
      {
        question: "Does Saim Dev take any percentage commission from our store sales?",
        answer:
          "No. You pay our fixed build fee under 50/50 milestones, and every checkout settles directly to your own Stripe merchant dashboard under standard Stripe processing fees.",
      },
      {
        question: "Can we migrate existing WooCommerce product URLs cleanly?",
        answer:
          "Yes. We map old /product/* URLs using explicit 301 rules inside next.config so Google Shopping history and organic links carry straight across.",
      },
    ],
    finalCta: {
      headline: "Build an Online Storefront Engineered Around How Your Product Sells",
      description:
        "Share your SKU count, variant rules, and fulfillment workflow. We return an architectural store spec and fixed quote.",
      primaryButtonText: "Request eCommerce Quote",
      whatsappText: "Custom Next.js eCommerce Storefront",
    },
    relatedServices: [
      {
        name: "Headless Shopify + Next.js",
        href: "/services/ecommerce-shopify",
        desc: "Keep Shopify Admin & POS while replacing slow Liquid themes cleanly.",
      },
      {
        name: "Paid Ad Landing Pages",
        href: "/services/landing-pages-cro",
        desc: "High-speed offer funnels engineered specifically for Meta & TikTok ads.",
      },
      {
        name: "Website Speed Optimisation",
        href: "/services/website-speed-optimization",
        desc: "Fix sluggish LCP/CLS issues throttling mobile store conversions.",
      },
    ],
  },

  // ==============================================================
  // 7. SHOPIFY HEADLESS & NEXT.JS STOREFRONT API
  // ==============================================================
  "ecommerce-shopify": {
    slug: "ecommerce-shopify",
    serviceName: "Headless Shopify & Next.js",
    mainKeyword: "Headless Shopify Development UK",
    seoTitle: "Headless Shopify & Next.js Storefronts UK | Saim Dev",
    seoDescription:
      "Keep Shopify Admin, POS and inventory while swapping sluggish Liquid themes for a fast Next.js Storefront API frontend with custom bundles and filters.",
    canonicalUrl: "https://www.saimdev.site/services/ecommerce-shopify",
    badge: "Shopify Storefront API + Edge Frontend",
    h1: "Headless Shopify Storefronts — Keep Shopify Inventory, Drop Slow Liquid Themes & App Bloat",
    subheading:
      "Already running orders, 3PL warehouse dispatch, or retail POS inside Shopify Admin? Connect your existing store via the official Shopify Storefront GraphQL API onto a custom Next.js 16 frontend — eliminating dozens of slow third-party Liquid apps.",
    primaryCtaText: "Audit Your Shopify Theme",
    secondaryCtaText: "Compare Liquid vs Headless",
    stripLabel: "Shopify Headless Engineering",
    stripItems: [
      {
        label: "Keep Shopify Admin",
        tag: "Operations",
        tagValue: "100% Intact",
        summary: "Zero warehouse disruption: inventory, ShipStation, POS, and tax reports stay inside Shopify.",
        href: "/process",
      },
      {
        label: "Native Cart Drawer",
        tag: "App Savings",
        tagValue: "Cut £150+/mo",
        summary: "Replace Rebuy, PageFly, Globo filters, and sticky cart scripts with native TSX code.",
        href: "/pricing",
      },
      {
        label: "Storefront GraphQL",
        tag: "API Layer",
        tagValue: "ISR Cached",
        summary: "Sub-second collection browsing and metafield swatch sync backed by webhook invalidation.",
        href: "/technologies",
      },
      {
        label: "Full Brand UI Freedom",
        tag: "Design",
        tagValue: "Beyond Liquid",
        summary: "Ship luxury lookbooks, interactive bundle builders, and editorial storytelling uninhibited.",
        href: "/hq-leathercon/index.html",
      },
      {
        label: "Ad Landing Speed",
        tag: "ROAS Lift",
        tagValue: "Clean LCP",
        summary: "Stop wasting Meta & Google Shopping ad spend on sluggish third-party script waterfalls.",
        href: "/services/website-speed-optimization",
      },
    ],
    painPoints: [
      {
        problem: "Shopify Liquid sites load 15+ injected third-party JavaScript bundles sequentially, pushing mobile LCP past 4 seconds.",
        solution: "Next.js renders product markup cleanly at the edge via GraphQL Storefront queries without injecting third-party app script tags.",
      },
      {
        problem: "Merchants accumulate £150–£450/month in Shopify Apps just for Mega Menus, Collection Swatches, Slide Cart Upsells, and Landing Pages.",
        solution: "We implement those UI features natively in TypeScript inside your codebase, cutting ongoing monthly SaaS overhead dramatically.",
      },
      {
        problem: "Liquid section limits constrain brands into cookie-cutter grid rows that look identical to competitors using Dawn/Impulse.",
        solution: "React 19 unlocks magazine lookbooks, custom interactive garment builders, and crisp motion without fighting Liquid schemas.",
      },
      {
        problem: "Teams fear losing their battle-tested Shopify fulfillment, Klarna, Royal Mail Click & Drop, or POS workflow.",
        solution: "Your backend stays 100% Shopify! Checkout routes cleanly to Shopify's high-trust native Checkout while customers browse a custom Next.js storefront.",
      },
    ],
    problemSection: {
      overline: "01 / SHOPIFY LIQUID LIMITATIONS",
      titleBefore: "Upgrading From",
      titleStrike: "app-laden Liquid themes",
      titleOwned: "To Storefront GraphQL Speed.",
      subtitle:
        "Shopify's admin and checkout are world-class, but the public Liquid theme layer slows down sharply as soon as merchants bolt on visual builders, swatch apps, and upsell scripts.",
      solutionTag: "HYBRID HEADLESS ARCHITECTURE",
      solutionTitle: "Shopify Admin Backend + Edge-Cached Next.js Storefront",
      solutionDesc:
        "Products, SKUs, and stock changes inside Shopify automatically invalidate cached Next.js routes via webhooks, delivering luxury brand speed without operational disruption.",
      solutionMetrics: [
        { value: "Shopify", label: "POS & Inventory Safe" },
        { value: "GraphQL", label: "Storefront API v2026" },
        { value: "Cut Apps", label: "Zero JS Bloat" },
      ],
      chartTitle: "Shopify Liquid + 12 Apps vs Next.js Storefront API",
      chartBadge: "Headless Benchmark",
      chartYAxis: "Mobile Speed Index",
      chartXAxis: "Storefront Stack",
      chartCaption:
        "Replacing bloated App-injected Liquid themes with Storefront GraphQL keeps Shopify checkout intact while accelerating discovery.",
      bars: [
        {value: "44", label: "PageFly + Apps", heightPx: 74},
        {value: "66", label: "Tuned Dawn Theme", heightPx: 112},
        {value: "88", label: "Shopify Markets", heightPx: 150},
        {value: "97", label: "Next.js Storefront", isHighlight: true, heightPx: 192},
      ],
    },
    deliverables: [
      {
        title: "Shopify Storefront GraphQL Data Bridge",
        description: "Typed queries syncing collections, variants, metafields, prices, and real-time availability securely.",
      },
      {
        title: "Native Cart API & Persistent Drawer",
        description: "Uses official Shopify Cart GraphQL mutations supporting discount codes, cart notes, and express Checkout redirect.",
      },
      {
        title: "Instant Collection & Metafield Filters",
        description: "Filter garments or gear by size, colour, fit, or fabric without clunky Liquid reloads.",
      },
      {
        title: "Webhook Revalidation on Stock/Price Edit",
        description: "Updating a price or selling out inside Shopify Admin updates live frontend HTML within seconds.",
      },
      {
        title: "Replacement of Paid UI Shopify Apps",
        description: "Custom Announcement Marquee, Free Shipping Bar, Cross-Sell Drawer, Size Chart Modal, and Sticky Buy CTA built in.",
      },
      {
        title: "GA4, Meta CAPI & Clean Canonical Wiring",
        description: "Clean eCommerce view_item / add_to_cart triggers alongside proper canonical parity.",
      },
    ],
    deliverablesMeta: {
      overline: "02 / HEADLESS DELIVERABLES",
      title: "Engineered On Top of Your",
      titleMuted: "Shopify Storefront API",
      subtitle:
        "Keep every warehouse label, courier integration, and Shopify payout account untouched while replacing the public storefront experience.",
      rowTags: ["Storefront API", "Keep Shopify Admin", "Cut App Spend"],
    },
    sectionHeadings: {
      valueOverline: "03 / Commercial Store Upgrade",
      valueTitle: "Luxury Brand Speed Without",
      valueMuted: "Switching Operational ERPs",
      marketOverline: "04 / Ideal Shopify Stores",
      marketTitle: "Brands Best Suited to",
      marketMuted: "Headless Shopify",
      processOverline: "05 / SAFE TRANSITION",
      processTitle: "Built Beside Your",
      processMuted: "Live Shopify Theme",
      processSummary: "Shopify storefront stays live uninterrupted while your Next.js headless frontend builds cleanly in parallel.",
      processStageTag: "GraphQL Sync Audit",
      stackOverline: "06 / STOREFRONT ARCHITECTURE",
      stackTitle: "Shopify GraphQL Meets",
      stackMuted: "React 19 Edge Caching",
      proofOverline: "07 / HIGH-CRAFT RETAIL CONCEPTS",
      proofTitle: "Frontend Freedom",
      proofMuted: "Live Demos",
      pricingOverline: "08 / FIXED HEADLESS PACKAGES",
      pricingTitle: "Headless Shopify",
      pricingMuted: "Build Tiers",
      pricingNote: "Fixed integration quote • Keep your existing Shopify plan untouched",
      pricingButtonText: "Book Headless Audit",
      advantageOverline: "09 / Why Choose Headless Over Another Theme",
      advantageTitle: "Break Out of Liquid",
      advantageMuted: "Section Ceilings Forever",
      feedbackOverline: "10 / Target Reference Scenarios",
      feedbackTitle: "Shopify Scaling",
      feedbackMuted: "Scenarios",
      faqOverline: "11 / Shopify Migration FAQ",
      faqIntro:
        "Answers covering Shopify apps/reviews (Klaviyo, Judge.me, Yotpo), checkout domains, stock sync, and cost ROI.",
      bannerTag: "Keep Shopify Checkout & Inventory • Cut App Costs • Edge Speed",
    },
    featuresAndBenefits: [
      {
        feature: "Zero Checkout Risk",
        benefit: "Shopify Handles PCI & Fraud",
        description: "Visitors seamlessly enter Shopify's trusted native checkout with Shop Pay, Apple Pay, and your tax setup.",
      },
      {
        feature: "Retain Email & Review Ecosystems",
        benefit: "Clean API Webhooks",
        description: "Klaviyo, Judge.me, Loox, or Trustpilot review feeds pull cleanly via REST/GraphQL without slowing initial render.",
      },
      {
        feature: "Multi-Collection Storytelling",
        benefit: "Higher Editorial Trust",
        description: "Combine editorial blog posts, product lookbooks, and interactive bundle drawers cleanly in one Next.js app.",
      },
      {
        feature: "Reduced Monthly Shopify App Bills",
        benefit: "Direct Monthly Savings",
        description: "Retire costly UI subscription apps while keeping lightweight backend fulfillment tools running cleanly.",
      },
      {
        feature: "Shopify Markets Multi-Currency",
        benefit: "UK, EU & US Localization",
        description: "Query contextualized @inContext country pricing so UK sees GBP VAT-inclusive pricing natively.",
      },
      {
        feature: "URL Parity With /products/* & /collections/*",
        benefit: "Full Google Shopping Preservation",
        description: "Match Shopify's familiar URL structures directly so paid feed links and organic rankings never wobble.",
      },
    ],
    industries: [
      {
        industry: "Apparel & Leatherwear Brands",
        description: "Combine multi-angle colour switching, size fit tools, and fast collection grids over Shopify stock.",
        exampleProject: "HQ Leathercon Store",
        demoUrl: "/hq-leathercon/index.html",
      },
      {
        industry: "Luxury Capsule & Fashion Houses",
        description: "Swap stiff Liquid blocks for fluid editorial typography and seamless drawer navigation.",
        exampleProject: "Atelier Noir Concept",
        demoUrl: "/demos/atelier-noir/index.html",
      },
      {
        industry: "Beauty, Cosmetics & Haircare",
        description: "Interactive routine bundle builders powered by Shopify Storefront GraphQL + Klaviyo capture.",
        exampleProject: "Serenia Wellness Concept",
        demoUrl: "/demos/serenia/index.html",
      },
      {
        industry: "Specialist Automotive & Accessories",
        description: "Fast vehicle/kit compatibility filtering without laggy third-party search app widgets.",
        exampleProject: "AK Detailing Concept",
        demoUrl: "/demos/akdetailing/index.html",
      },
      {
        industry: "Supplements & Packaged Food",
        description: "Clean nutrition panels, flavour variant toggles, and custom box-bundle logic.",
        exampleProject: "Frenchyse Concept",
        demoUrl: "/frenchyse/index.html",
      },
      {
        industry: "Paid-Social Scaleups (£10k+/mo Ads)",
        description: "Brands tired of sluggish mobile LCP eroding Meta and TikTok click-to-cart efficiency.",
        exampleProject: "Studio Funnel Showcase",
        demoUrl: "/demos/studio-dbrickell/index.html",
      },
    ],
    process: [
      {
        step: "Step 01",
        title: "Shopify App & Waterfall Audit",
        description: "List every installed Shopify app — separate essential backend fulfillment apps from replaceable UI scripts.",
        duration: "Day 1–2",
      },
      {
        step: "Step 02",
        title: "Storefront API Token & GraphQL Typing",
        description: "Configure read-only Storefront API access and map metafields, product galleries, and Market contexts cleanly.",
        duration: "Day 3–4",
      },
      {
        step: "Step 03",
        title: "Next.js UI, Filters & Slide Cart Build",
        description: "Build custom collection filters, upsell basket drawer, PDP specs, and webhook revalidation handlers.",
        duration: "Day 5–10",
      },
      {
        step: "Step 04",
        title: "Review Feed, Checkout Test & Cutover",
        description: "Test live checkout transitions onto checkout subdomain, verify URLs, and switch primary storefront DNS cleanly.",
        duration: "Day 11–14",
      },
    ],
    techStack: [
      { name: "Shopify Storefront GraphQL", role: "Real-Time Inventory & Cart API" },
      { name: "Next.js 16 ISR", role: "Webhook-Revalidated Collection Pages" },
      { name: "Shopify Native Checkout", role: "Shop Pay, Apple Pay & Taxes" },
      { name: "Klaviyo / Review APIs", role: "Non-Blocking Social Proof" },
      { name: "TypeScript", role: "Strict Shopify Data Typing" },
      { name: "Tailwind CSS", role: "App-Free Custom UI Design" },
    ],
    caseStudies: [
      {
        title: "HQ Leathercon High-SKU Store Architecture",
        category: "Headless Catalog Blueprint",
        description: "Multi-category storefront concept separating heavy garment grids cleanly with responsive filters and custom builder.",
        tech: ["Custom Catalog", "Instant Media", "Builder UI"],
        metrics: "Reference Architecture",
        demoUrl: "/hq-leathercon/index.html",
      },
      {
        title: "Bespoke Configurator Storefront Bridge",
        category: "Custom Attribute UX",
        description: "Passing rich custom sizing/material line-item properties seamlessly into retail checkout baskets.",
        tech: ["Interactive Builder", "Line-Item Meta", "Mobile Smooth"],
        metrics: "Interactive Demo",
        demoUrl: "/hq-leathercon/products/custom-leather-jacket-builder/index.html",
      },
      {
        title: "Atelier Noir Editorial Store Concept",
        category: "Luxury Liquid Escape",
        description: "Proving how headless stores look like luxury fashion flagships rather than generic Dawn/Impulse themes.",
        tech: ["Editorial Layout", "Fast Asset Preload", "Mobile Drawer"],
        metrics: "Interactive Demo",
        demoUrl: "/demos/atelier-noir/index.html",
      },
    ],
    competitorComparison: {
      overline: "HEADLESS VS SHOPIFY LIQUID",
      title: "Next.js Storefront API vs",
      titleMuted: "Standard App-Heavy Liquid Themes",
      subtitle:
        "See what stays intact in Shopify and what accelerates dramatically when migrating the presentation layer to Next.js 16.",
      columns: ["Shopify Merchant Concern", "Headless Next.js + Storefront API", "Standard Liquid Theme + Paid Apps"],
      rows: [
        {
          criteria: "Shopify Admin, POS & Fulfilment",
          saim: "100% preserved — staff change zero daily shipping habits",
          alternative: "100% same backend",
        },
        {
          criteria: "Monthly UI App Costs",
          saim: "Cut Rebuy/PageFly/Filter subscriptions (coded cleanly once)",
          alternative: "Often £100–£450/mo recurring per functional widget",
        },
        {
          criteria: "Theme Customisation Ceiling",
          saim: "Complete freedom across customizers, motion, and PDP layouts",
          alternative: "Restricted inside Liquid schema JSON blocks and global CSS",
        },
        {
          criteria: "Third-Party Script Contention",
          saim: "Strict React loading priority; reviews/analytics load after hero",
          alternative: "Apps inject competing sync <script> tags into theme.liquid",
        },
      ],
    },
    engineeringChecklist: {
      title: "Headless Shopify Production Verification Spec",
      subtitle:
        "Critical engineering safeguards baked into every Shopify Storefront API connection we ship:",
      items: [
        "Webhook signature verification updating Next.js cache automatically on stock/price edits",
        "Preserved /products/[handle] & /collections/[handle] routes avoiding ad feed breakage",
        "Server-side Klaviyo / Judge.me review pre-fetching so zero client layout shift occurs",
        "Out-of-stock variant detection syncing accurately before customer reaches checkout",
        "Subdomain routing check (checkout.yourdomain.com) so Shop Pay & cookies persist cleanly",
        "Clean TypeScript GraphQL schemas eliminating runtime undefined variant crashes",
      ],
    },
    pricing: [
      {
        name: "Headless Storefront Core",
        price: "£850",
        description: "Convert an existing Shopify store layout into an app-free Next.js Storefront API frontend.",
        features: [
          "Full Storefront GraphQL + Cart API wiring",
          "Replaces slow page builder & upsell apps",
          "Instant collection swatch & drawer filters",
          "Webhook inventory & price revalidation",
          "Shopify Checkout & Shop Pay seamless handoff",
          "14 days post-launch technical support",
        ],
      },
      {
        name: "Bespoke Bundles & Markets",
        price: "£1,450",
        description: "Custom Shopify headless flagship with tier-based bundles, metafield specs, and review integrations.",
        popular: true,
        features: [
          "Everything in Core + custom mix-and-match bundles",
          "Klaviyo + Judge.me / Loox API integration",
          "Shopify Markets (@inContext GBP/EUR/USD)",
          "Custom editorial lookbooks & CMS blog hub",
          "Meta CAPI / GA4 checkout tracking bridge",
          "30 days dedicated post-launch support",
        ],
      },
      {
        name: "Shopify Plus / Configurator",
        price: "£2,500",
        description: "Complex interactive product builders, B2B wholesale portals, or multi-brand Shopify setups.",
        features: [
          "Custom made-to-measure property builders",
          "Multi-region / wholesale gated price tiers",
          "Edge performance profiling under heavy SKU sets",
          "Dedicated CI/CD pipeline & handover docs",
          "Full GitHub repo + walkthrough session",
          "30 days priority support",
        ],
      },
    ],
    whyChooseUs: [
      {
        title: "No Disruption to Daily Orders",
        desc: "Your warehouse printers, Royal Mail, and accounting sync stay inside Shopify Admin unchanged.",
      },
      {
        title: "Usually Pays Back via Cancelled Apps",
        desc: "Replacing £150–£300/month in clunky page builder and filter apps quickly offsets the build investment.",
      },
      {
        title: "Keep Shop Pay Conversion Power",
        desc: "Customers still get one-click Shop Pay & Apple Pay checkout while browsing a much faster frontend.",
      },
      {
        title: "Zero Vendor App-Store Spam",
        desc: "Stop unverified third-party Shopify apps injecting unmonitored tracking scripts across your store.",
      },
      {
        title: "Exact URL & Ad Feed Parity",
        desc: "Clean slug preservation protects Meta Product Catalogs and Google Merchant Center feeds.",
      },
      {
        title: "Built In-House in TypeScript",
        desc: "You own your Next.js storefront code completely on GitHub — zero headless SaaS agency lock-in.",
      },
    ],
    testimonials: [
      {
        quote: "Illustrative target scenario: A fast-growing UK fashion store replacing 14 slow Liquid plugins and PageFly pages while keeping existing warehouse Shopify POS sync.",
        client: "Apparel Shopify Merchant",
        role: "Headless Transition",
        company: "Reference Specification",
      },
      {
        quote: "Illustrative target scenario: A supplement brand building a custom interactive monthly bundle selector wired directly into Shopify Cart API mutations.",
        client: "Health & Nutrition Store",
        role: "Custom Bundle Scenario",
        company: "Reference Specification",
      },
      {
        quote: "Illustrative target scenario: A UK homeware seller expanding into EU/US Markets with edge-cached regional GBP/EUR/USD product pages.",
        client: "Multi-Market Retailer",
        role: "Markets Scenario",
        company: "Reference Specification",
      },
    ],
    faqs: [
      {
        question: "Do I have to upgrade to Shopify Plus (£1,600+/mo) to go headless?",
        answer:
          "No! Standard Shopify plans (Basic, Shopify, and Advanced) include official Storefront API access completely free. You only connect Next.js cleanly using a Storefront API token.",
      },
      {
        question: "Will Klarna, Shop Pay, Apple Pay, and Klaviyo still work?",
        answer:
          "Yes. All checkout payment methods continue working untouched inside Shopify's checkout domain, while Klaviyo signup boxes and review widgets connect cleanly through lightweight server-friendly APIs.",
      },
      {
        question: "What happens when a product sells out inside Shopify Admin?",
        answer:
          "We configure a Shopify product/update webhook targeting your Next.js API route so out-of-stock inventory statuses update cleanly at the edge within seconds.",
      },
      {
        question: "Should I switch from Shopify altogether or go headless?",
        answer:
          "Stay on Shopify (headless) if your ops, POS, courier apps, or 3PL warehouse depend on Shopify Admin. Switch completely to our Custom Stripe eCommerce package if you want zero monthly SaaS store subscriptions altogether.",
      },
      {
        question: "How does checkout stay on my custom brand domain?",
        answer:
          "We configure a clean checkout subdomain (e.g. checkout.yourbrand.co.uk) inside Shopify Domains so customers never see an unfamiliar .myshopify.com URL during payment.",
      },
    ],
    finalCta: {
      headline: "Keep Shopify Operations. Unlock Custom Next.js Speed & Freedom.",
      description:
        "Send your current `.myshopify` or public store URL and app list. We pinpoint which monthly apps we can remove cleanly in a headless build.",
      primaryButtonText: "Audit My Shopify Store",
      whatsappText: "Headless Shopify + Next.js Build",
    },
    relatedServices: [
      {
        name: "Custom Next.js eCommerce",
        href: "/services/ecommerce-development",
        desc: "Own a zero-subscription Stripe store with custom product builders.",
      },
      {
        name: "Core Web Vitals Speed Fix",
        href: "/services/website-speed-optimization",
        desc: "Improve LCP and script execution delays bottlenecks cleanly.",
      },
      {
        name: "Paid Ad Landing Pages",
        href: "/services/landing-pages-cro",
        desc: "Standalone Meta/TikTok hero offer pages designed for ROAS.",
      },
    ],
  },

  // ==============================================================
  // 8. TAKEAWAY WEB DESIGN UK (DIRECT ORDERING HUB)
  // ==============================================================
  "takeaway-web-design": {
    slug: "takeaway-web-design",
    serviceName: "UK Takeaway Web Design",
    mainKeyword: "Takeaway Website Design UK",
    seoTitle: "Takeaway Web Design UK | Direct Ordering | Saim Dev",
    seoDescription:
      "Commission-free takeaway websites for UK kitchens. Escape Just Eat fees with Natasha's Law 14-allergen filters, postcode delivery zones and £250 pricing.",
    canonicalUrl: "https://www.saimdev.site/services/takeaway-web-design",
    badge: "0% Commission Direct Ordering • From £250",
    h1: "Direct-Ordering Takeaway & Restaurant Websites UK — Zero Commission Fees",
    subheading:
      "Stop surrendering 14%–30% of every burger, pizza, and curry order to Just Eat, Uber Eats, and Deliveroo. Launch an owned mobile-first takeaway ordering website with UK postcode radius pricing, Natasha's Law allergen filters, and instant kitchen dispatch from £250 fixed.",
    primaryCtaText: "Launch Your Direct Menu (£250)",
    secondaryCtaText: "Try Live Takeaway Demos",
    stripLabel: "UK Hospitality Margin Recovery",
    stripItems: [
      {
        label: "0% Per-Order Commission",
        tag: "Economics",
        tagValue: "£0 Commission",
        summary: "Own every repeat regular via QR bag inserts instead of splitting margins with aggregators.",
        href: "/services/takeaway-web-design-london",
      },
      {
        label: "Natasha's Law Filters",
        tag: "FSA Compliance",
        tagValue: "14 Allergens",
        summary: "Dietary allergen tags per menu dish aligned with UK FSA transparency standards.",
        href: "/tools/allergen-matrix-generator",
      },
      {
        label: "Fixed £250 Package",
        tag: "Pricing",
        tagValue: "Fixed £250",
        summary: "Complete mobile menu, collection/delivery toggles, and direct kitchen WhatsApp or card setup.",
        href: "/pricing",
      },
      {
        label: "Live Food Demos",
        tag: "Try Live",
        tagValue: "4 Concepts",
        summary: "Test HotBite, Burger Garage, Frenchyse, and Anzaar directly inside your mobile browser.",
        href: "/hotbite/index.html",
      },
      {
        label: "Free Kitchen Tools",
        tag: "Bonus Utility",
        tagValue: "PPDS + Costing",
        summary: "Use our free UK Food Cost Calculator, PPDS Label PDF engine, and 160+ SFBB templates.",
        href: "/tools/food-cost-calculator",
      },
    ],
    painPoints: [
      {
        problem: "Delivery marketplaces charge 14%–30% + VAT per order, turning busy Friday nights into razor-thin profit.",
        solution: "Redirect repeat customers via £15 bag-flyer QR codes onto your own website with 0% agency or per-order fees.",
      },
      {
        problem: "Clunky WordPress food themes take 5+ seconds to open PDFs on Friday 8pm 4G — hungry diners jump straight back to Uber Eats.",
        solution: "Mobile thumb-scroll menu categories, instant +/- basket counters, and meal deal upsells operate instantaneously on phones.",
      },
      {
        problem: "Incomplete allergen info during phone or website orders risks serious UK Food Standards Agency enforcement issues.",
        solution: "Structured 14-allergen warnings (Gluten, Crustaceans, Nuts, Sesame, Dairy, etc.) display clearly beside every dish & modifier.",
      },
      {
        problem: "Rival UK takeaway agencies lock kitchens into £90/mo lease contracts + 5% gateway surcharges forever.",
        solution: "Pay a clean £250 fixed fee once — card checkouts route cleanly to your own Stripe/Square terminal with zero hidden markups.",
      },
    ],
    problemSection: {
      overline: "01 / AGGREGATOR MARGIN RECOVERY",
      titleBefore: "Stopping Losses From",
      titleStrike: "14–30% delivery app cuts",
      titleOwned: "Through Owned Repeat Ordering.",
      subtitle:
        "Marketplaces help new diners discover your takeaway once. Paying them 30% on a local regular's 25th Friday order is avoidable pure profit loss.",
      solutionTag: "DIRECT HOSPITALITY SYSTEM",
      solutionTitle: "Keep Discovery on Apps — Move Repeat Orders Direct at 0% Fee",
      solutionDesc:
        "Every collection bag leaves with a direct-order QR flyer (10% off or free drink on direct site). Customers reorder in 3 taps straight to kitchen ticket / WhatsApp or Stripe.",
      solutionMetrics: [
        { value: "£250", label: "One-Time Build" },
        { value: "0%", label: "Our Order Fee" },
        { value: "14", label: "FSA Allergens" },
      ],
      chartTitle: "Takeaway Net Profit Per £1,000 Monthly Direct Switch",
      chartBadge: "Unit Margin Model",
      chartYAxis: "Monthly Commission Saved",
      chartXAxis: "Direct Order Share",
      chartCaption:
        "Illustrative saving at ~22% blended aggregator rate when moving repeat takeaway orders onto an owned £250 storefront.",
      bars: [
        {value: "£0", label: "100% Aggregator", heightPx: 74},
        {value: "£220", label: "£1k Switched", heightPx: 112},
        {value: "£660", label: "£3k Switched", heightPx: 150},
        {value: "£1,100", label: "£5k Switched", isHighlight: true, heightPx: 192},
      ],
    },
    deliverables: [
      {
        title: "Interactive Thumb-Scroll Menu & Deals",
        description: "Category sticky pills, Pizza/Burger/Kebab meal upgrade modifiers, dips, and instant allergen icons.",
      },
      {
        title: "Collection vs UK Postcode Delivery Engine",
        description: "Pre-set minimum order spends, radius zones (e.g. 0–2 mi, 2–4 mi), and automatic fee calculation.",
      },
      {
        title: "FSA 14-Allergen Matrix & Warning Filter",
        description: "Interactive guest dietary toggle plus allergy free-text warning step inside basket confirmation.",
      },
      {
        title: "WhatsApp / Email / Direct Card Checkout",
        description: "Send formatted docket messages straight to the kitchen counter or take Apple Pay / Card via Stripe.",
      },
      {
        title: "Opening Hours & Busy Kitchen Cutoff",
        description: "Clear collection prep ETAs, closed-day banners, and automated next-open scheduling notice.",
      },
      {
        title: "Print-Ready QR Flyer Asset for Bags",
        description: "Delivered with a clean branded vector QR code linking direct to your ordering menu for takeaway packaging.",
      },
    ],
    deliverablesMeta: {
      overline: "02 / TAKEAWAY SYSTEM MODULES",
      title: "Included Inside Every",
      titleMuted: "UK Takeaway Website",
      subtitle:
        "Engineered specifically around UK fast-food kitchen workflows — zero clunky desktop software needed to get started.",
      rowTags: ["0% Commission", "Natasha's Law", "UK Postcodes"],
    },
    sectionHeadings: {
      valueOverline: "03 / Kitchen Margins",
      valueTitle: "Built Around How Diners",
      valueMuted: "Reorder on Friday Nights",
      marketOverline: "04 / UK City Hubs & Concepts",
      marketTitle: "Local UK Cities &",
      marketMuted: "Cuisine Specialties",
      processOverline: "05 / RAPID LAUNCH",
      processTitle: "Menu PDF to Live",
      processMuted: "Ordering in 4–5 Days",
      processSummary: "Send your printed paper flyer or Just Eat link — we structure the full digital menu.",
      processStageTag: "Test Ticket Checkout",
      stackOverline: "06 / HOSPITALITY TECH",
      stackTitle: "Mobile Speed Tuned For",
      stackMuted: "Hungry 4G Shoppers",
      proofOverline: "07 / LIVE HOSPITALITY DEMOS",
      proofTitle: "Test Live UK Takeaway",
      proofMuted: "Concept Storefronts",
      pricingOverline: "08 / FIXED UK TAKEAWAY PACKAGES",
      pricingTitle: "Zero-Commission",
      pricingMuted: "Takeaway Pricing",
      pricingNote: "One-time fee • £0 per-order commission from Saim Dev forever",
      pricingButtonText: "Claim Direct Takeaway Site",
      advantageOverline: "09 / Why UK Kitchens Leave Lease Terminals",
      advantageTitle: "Own Your Diners Instead of",
      advantageMuted: "Renting Them Back",
      feedbackOverline: "10 / Target Reference Scenarios",
      feedbackTitle: "Kitchen Direct-Order",
      feedbackMuted: "Rollout Scenarios",
      faqOverline: "11 / Kitchen Owner FAQ",
      faqIntro:
        "Practical answers on EPOS / kitchen ticket flow, Stripe payouts, paper menu digitisation, and FSA compliance.",
      bannerTag: "Fixed £250 • 0% Commission • Includes Print QR Code",
    },
    featuresAndBenefits: [
      {
        feature: "Repeat Customer Habit Hook",
        benefit: "Beats App Reorders Naturally",
        description: "Save a bookmarkable link + exclusive direct combo deals cheaper than bloated marketplace markups.",
      },
      {
        feature: "Zero App Download Required",
        benefit: "3-Tap Instant Checkout",
        description: "Customers scan a bag QR or tap Google Maps 'Order Direct' and finish before installing any app.",
      },
      {
        feature: "Google Business Profile Menu Link",
        benefit: "Capture High-Intent Maps Searches",
        description: "Pair our clean URL inside Google Business Profile's Website & Order link fields to bypass app middlemen.",
      },
      {
        feature: "Combo Meal Upsell Modifiers",
        benefit: "Lift Average Ticket Value",
        description: "Prompt drinks, dips, loaded fries, and dessert add-ons cleanly inside the mobile basket drawer.",
      },
      {
        feature: "Free Built-In UK Compliance Utilities",
        benefit: "Save on Admin Tools",
        description: "Bookmark our free /tools/commission-savings-calculator, /tools/food-cost-calculator, and 160+ EHO log templates.",
      },
      {
        feature: "Clean Post-Code Coverage Boundaries",
        benefit: "Protect Driver Fuel & Time",
        description: "Block out-of-zone late delivery orders automatically so your driver stays inside profitable postcodes.",
      },
    ],
    industries: [
      {
        industry: "London High-Street Takeaways",
        description: "Zone-specific congestion & postcode radius handling across East, South, North & West London boroughs.",
        exampleProject: "London Takeaway Service",
        demoUrl: "/services/takeaway-web-design-london",
      },
      {
        industry: "Birmingham & Balti Mile Kitchens",
        description: "Family-feast curry/grill combo builders tailored for Birmingham postcodes B1–B98.",
        exampleProject: "Birmingham Takeaway Service",
        demoUrl: "/services/takeaway-web-design-birmingham",
      },
      {
        industry: "Manchester & Rusholme Operators",
        description: "Student & late-night smash burger, wrap, and pizza direct ordering across M1–M90.",
        exampleProject: "Manchester Takeaway Service",
        demoUrl: "/services/takeaway-web-design-manchester",
      },
      {
        industry: "Gourmet Burger & Fried Chicken",
        description: "Meal-deal builders with patty counts, sauces, and crisp visual stack layouts.",
        exampleProject: "Burger Garage Concept",
        demoUrl: "/burger-garage/index.html",
      },
      {
        industry: "Street Food, Pizza & Peri-Peri",
        description: "Spice level toggles, half-and-half modifiers, and sizzling editorial menu cards.",
        exampleProject: "HotBite Street Food",
        demoUrl: "/hotbite/index.html",
      },
      {
        industry: "Curries, Wraps & Biryani Houses",
        description: "Multi-course starter/main/sundry ordering paired with crisp allergen badge tables.",
        exampleProject: "Anzaar Indian Concept",
        demoUrl: "/anzaar/index.html",
      },
    ],
    process: [
      {
        step: "Step 01",
        title: "Send Your Paper Menu or App Link",
        description: "WhatsApp photos of your shop flyer, prices, postcode fees, and allergy info — zero manual typing needed.",
        duration: "Day 1",
      },
      {
        step: "Step 02",
        title: "Branded Menu & Allergen Structuring",
        description: "We digitise all categories, build combo options, tag FSA 14 allergens, and brand colours.",
        duration: "Day 2–3",
      },
      {
        step: "Step 03",
        title: "Test Checkout & Ticket Routing",
        description: "Test WhatsApp docket formatting, Stripe Checkout test payments, and UK delivery fee math live.",
        duration: "Day 4",
      },
      {
        step: "Step 04",
        title: "Google Maps Setup & Bag QR Launch",
        description: "Connect your .co.uk domain cleanly, export printable QR bag artwork, and guide Maps link wiring.",
        duration: "Day 5",
      },
    ],
    techStack: [
      { name: "Next.js 16 Edge", role: "Instant Menu Load on 4G" },
      { name: "Stripe / Pay-on-Collection", role: "0% Platform Cut Checkout" },
      { name: "Natasha's Law UI Tags", role: "14-Allergen Warning Matrix" },
      { name: "UK Postcode Radius Logic", role: "Delivery Fee & Min-Spend Validation" },
      { name: "WhatsApp / Email Docket", role: "Zero Extra Hardware Needed" },
      { name: "Print QR Generator", role: "Bag Stuffer Loyalty Loop" },
    ],
    caseStudies: [
      {
        title: "HotBite Street Food Concept",
        category: "Direct Ordering Demo",
        description: "Dark sleek mobile takeaway showcase highlighting rapid burger/loaded fries menu browsing and direct cart.",
        tech: ["Mobile UX", "Live Menu", "0% Fee Flow"],
        metrics: "Interactive Demo",
        demoUrl: "/hotbite/index.html",
      },
      {
        title: "Burger Garage Hospitality Concept",
        category: "Fast-Food Build",
        description: "Bold craft burger layout structured around combo upsells, opening times, and crisp photography.",
        tech: ["Combo Flows", "Fast Mobile UI", "Brand Focus"],
        metrics: "Interactive Demo",
        demoUrl: "/burger-garage/index.html",
      },
      {
        title: "Frenchyse Café & Bistro Concept",
        category: "Hospitality Storefront",
        description: "Versatile dine-in/collection culinary website balancing brand storytelling with menu discoverability.",
        tech: ["Hospitality UX", "Responsive Grid", "Direct Inquiry"],
        metrics: "Interactive Demo",
        demoUrl: "/frenchyse/index.html",
      },
    ],
    competitorComparison: {
      overline: "TAKEAWAY MARGIN AUDIT",
      title: "Saim Dev (£250 Direct Site) vs",
      titleMuted: "Delivery Apps & Lease Portals",
      subtitle:
        "See why owning a £250 commission-free website beats both 30% marketplace cuts and £89/mo rented ordering software.",
      columns: ["Takeaway Cost & Control", "Saim Dev Takeaway Site (£250)", "Apps / Rented Lease Portals"],
      rows: [
        {
          criteria: "Commission Per £25 Order",
          saim: "£0 platform commission (only standard ~1.5% + 20p Stripe if paying by card)",
          alternative: "£3.50–£7.50 taken on apps, or £50–£120/mo fixed SaaS lease fees",
        },
        {
          criteria: "Customer Data & Loyalty",
          saim: "Direct customer enquiries, phone numbers & zero competitor ads beside your food",
          alternative: "Competitor takeaways advertised above your own menu page",
        },
        {
          criteria: "Allergen & PPDS Integration",
          saim: "Built-in 14-allergen filters + linked free EHO templates & label tools",
          alternative: "Generic small-print disclaimers or extra paid add-on plugins",
        },
        {
          criteria: "Website Code Ownership",
          saim: "Full GitHub codebase & custom .co.uk domain owned outright",
          alternative: "Menu disappears the day a monthly lease stops",
        },
      ],
    },
    engineeringChecklist: {
      title: "UK Food Operator Compliance & Launch Checklist",
      subtitle:
        "Everything we verify alongside your digital menu prior to going live on Friday service:",
      items: [
        "All 14 FSA scheduled allergens clearly represented next to dishes + mandatory guest allergy prompt",
        "Clear distinction between Pay Cash/Card on Delivery vs instant Stripe Apple Pay",
        "Verified postcode/radius table preventing drivers taking long loss-making journeys",
        "Direct WhatsApp & printed ticket order formatting verified on kitchen smartphone/tablet",
        "FHRS Food Hygiene Rating sticker section ready to showcase your 4★/5★ EHO score",
        "Printable PNG/SVG QR bag flyer graphic formatted cleanly for A6/menu flyer printers",
      ],
    },
    pricing: [
      {
        name: "Direct Takeaway Core",
        price: "£250",
        description: "Complete mobile menu, 14-allergen UI, postcode zones, and instant WhatsApp/email dockets.",
        popular: true,
        features: [
          "Full menu digitisation (Starters to Desserts)",
          "Custom combo & topping modifier options",
          "Natasha's Law 14-allergen matrix filters",
          "UK postcode delivery / collection switcher",
          "QR bag-flyer graphics & Maps setup help",
          "14 days post-launch technical support",
        ],
      },
      {
        name: "Direct Card + Stripe",
        price: "£390",
        description: "Accept instant online card, Apple Pay, and Google Pay straight to your Stripe bank account.",
        features: [
          "Everything in £250 Core package",
          "Stripe Checkout (Cards, Apple Pay, Google Pay)",
          "Instant automated order confirmation emails",
          "Kitchen tablet / email order docket alerts",
          "Discount promo codes (e.g. DIRECT10)",
          "21 days post-launch technical support",
        ],
      },
      {
        name: "Multi-Branch Engine",
        price: "£450",
        description: "2–4 takeaway locations or multi-kitchen group managing unified brand with branch routing.",
        features: [
          "Branch postcode selector per kitchen site",
          "Separate kitchen order routing per branch",
          "Central brand domain + Local SEO schema per town",
          "Unified loyalty promo codes & analytics",
          "Priority staging QA & walkthrough",
          "30 days priority support",
        ],
      },
    ],
    whyChooseUs: [
      {
        title: "Zero Monthly Lease Fee",
        desc: "Save £600–£1,200/year vs takeaway portal subscriptions that disappear if you stop renting.",
      },
      {
        title: "UK City Expertise Built In",
        desc: "Explore dedicated local insights on London, Birmingham, and Manchester takeaway markets linked right from your hub.",
      },
      {
        title: "Natasha's Law & EHO Tool Ecosystem",
        desc: "Only agency giving UK kitchens 160+ free Food Safety & SFBB downloadable templates alongside their storefront.",
      },
      {
        title: "QR Bag-Flyer Conversion Strategy",
        desc: "We don't just launch a URL — we supply printable QR artwork designed to convert every Just Eat bag into a direct customer.",
      },
      {
        title: "Works Even Without New Hardware",
        desc: "Orders land formatted clearly on your existing kitchen smartphone/tablet WhatsApp or email inbox, with Stripe card options ready.",
      },
      {
        title: "We Type Up Your Paper Menu",
        desc: "Snap clean photos of your paper flyer — we transcribe every item, price, and spice note cleanly.",
      },
    ],
    testimonials: [
      {
        quote: "Illustrative target scenario: A busy suburban pizza/burger shop slipping DIRECT15 QR cards inside marketplace delivery bags to shift 40+ weekly repeat orders onto £0-commission card checkout.",
        client: "Urban Burger & Pizza Kitchen",
        role: "Margin Recovery Scenario",
        company: "Reference Specification",
      },
      {
        quote: "Illustrative target scenario: A family-run Indian takeaway showcasing a 5-star FHRS rating and searchable 14-allergen menu cleanly inside Google Business Profile.",
        client: "Curry & Grill House",
        role: "Allergen Trust Scenario",
        company: "Reference Specification",
      },
      {
        quote: "Illustrative target scenario: A two-site Birmingham/Manchester street food kitchen splitting postcode delivery rules cleanly between branches.",
        client: "Multi-Site Street Food Brand",
        role: "Multi-Branch Scenario",
        company: "Reference Specification",
      },
    ],
    faqs: [
      {
        question: "How do orders actually arrive in a busy Friday-night kitchen?",
        answer:
          "On our £250 Core package, formatted itemised tickets (including allergy notes, postcode, and delivery/collection mode) arrive immediately via WhatsApp & email. On our £390 Card package, Stripe processes payment upfront and fires instant verified receipts/tickets straight to your counter inbox/tablet.",
      },
      {
        question: "Does this replace Just Eat and Uber Eats completely on day one?",
        answer:
          "No — smart kitchens stay listed on apps to catch first-time diners, then include an exclusive QR flyer inside every delivery bag offering 10% off or a free side on direct website reorders. Over months, repeat profits stay 100% yours.",
      },
      {
        question: "Can customers filter out Gluten, Dairy, or Nut dishes automatically?",
        answer:
          "Yes — our menu templates pair dishes cleanly with clear FSA 14-allergen indicators and allergen filter states, plus you can link our free Allergen Matrix tool cleanly for walk-in compliance.",
      },
      {
        question: "Are menu prices or closed holiday hours easy to update later?",
        answer:
          "Yes. Menu items store cleanly in structured data files so adjusting meal prices or pausing an item out-of-stock is fast and transparent.",
      },
      {
        question: "Do you offer city-specific local setup guidance for London, Birmingham, or Manchester?",
        answer:
          "Yes — view our dedicated UK city guides at /services/takeaway-web-design-london, /services/takeaway-web-design-birmingham, and /services/takeaway-web-design-manchester for local postcode, EHO rating, and cost breakdowns.",
      },
    ],
    finalCta: {
      headline: "Stop Paying 30% on Regular Customers Who Already Love Your Food",
      description:
        "Send a photo of your printed menu flyer on WhatsApp or via /contact. Go live in days with your own £250 commission-free storefront.",
      primaryButtonText: "Send Your Paper Menu Now",
      whatsappText: "UK Direct Takeaway Ordering Website (£250)",
    },
    relatedServices: [
      {
        name: "London Takeaway Web Design",
        href: "/services/takeaway-web-design-london",
        desc: "Direct ordering strategy tailored for London boroughs and high-rent kitchens.",
      },
      {
        name: "Birmingham Takeaway Web Design",
        href: "/services/takeaway-web-design-birmingham",
        desc: "Commission-free menus for Birmingham Balti, Grill, and B-postcode zones.",
      },
      {
        name: "Manchester Takeaway Web Design",
        href: "/services/takeaway-web-design-manchester",
        desc: "Direct mobile ordering systems across Greater Manchester neighbourhoods.",
      },
    ],
  },
};
