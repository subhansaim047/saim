import type { ServicePageData } from "@/components/services/ServicePageTemplate";

export const CORE_BUILD_SERVICES: Record<string, ServicePageData> = {
  // ==============================================================
  // 1. WEBSITE DEVELOPMENT (CORE NEXT.JS 16 ARCHITECTURE)
  // ==============================================================
  "website-development": {
    slug: "website-development",
    serviceName: "Next.js Website Development",
    mainKeyword: "Next.js Website Development",
    seoTitle: "Next.js Website Development UK | Fixed Quote | Saim Dev",
    seoDescription:
      "Bespoke Next.js 16 and React 19 website development for UK and European teams. Fixed milestone pricing, clean source code handover, zero monthly retainers.",
    canonicalUrl: "https://www.saimdev.site/services/website-development",
    badge: "Custom React 19 & App Router Engineering",
    h1: "Custom Next.js 16 Website Engineering — Fast, Ownable, Built Without CMS Bloat",
    subheading:
      "Hand-crafted Next.js App Router architectures engineered in strict TypeScript and Tailwind CSS. Sub-second edge delivery, semantic HTML5 structure, zero recurring plugin licensing, and full GitHub source handover.",
    primaryCtaText: "Scope Your Next.js Build",
    secondaryCtaText: "Inspect Architecture Specs",
    stripLabel: "Next.js 16 Engineering Specs",
    stripItems: [
      {
        label: "App Router SSR",
        tag: "Runtime",
        tagValue: "Next.js 16",
        summary: "Server Components reduce client JavaScript payloads for snappy mobile navigation.",
        href: "/technologies",
      },
      {
        label: "Strict TypeScript",
        tag: "Maintainability",
        tagValue: "100% Typed",
        summary: "Modular React 19 components structured so any internal or external dev can scale it.",
        href: "/process",
      },
      {
        label: "Edge Caching",
        tag: "Target LCP",
        tagValue: "Static / ISR",
        summary: "Pre-rendered HTML routes served from global CDN PoPs across London and Europe.",
        href: "/services/website-speed-optimization",
      },
      {
        label: "Zero Lock-In",
        tag: "Ownership",
        tagValue: "GitHub Repo",
        summary: "Host cleanly on Vercel, Cloudflare Pages, or AWS with zero monthly agency tie-ins.",
        href: "/pricing",
      },
      {
        label: "Milestone Billing",
        tag: "Terms",
        tagValue: "50/50 Split",
        summary: "50% deposit after written spec sign-off, 50% upon live staging URL approval.",
        href: "/contact",
      },
    ],
    painPoints: [
      {
        problem: "Monolithic themes bundle megabytes of unused JavaScript and CSS that choke mid-range mobile devices.",
        solution: "We write lean Server Components and CSS tokens with tree-shaken Tailwind output — keeping route bundles clean and fast.",
      },
      {
        problem: "Traditional agencies charge recurring monthly support retainers just to keep third-party plugins patched.",
        solution: "Static-first Next.js deployments eliminate fragile PHP plugin chains so your marketing site runs without maintenance fees.",
      },
      {
        problem: "Proprietary page-builder exports lock your business into a vendor subscription you cannot inspect or move.",
        solution: "We deliver a well-documented GitHub repository with clean TypeScript interfaces under your full commercial ownership.",
      },
      {
        problem: "Late surprises in agency scope creep delay launches and inflate original estimates.",
        solution: "Every route, integration, and animation deliverable is locked upfront in a written fixed-fee specification.",
      },
    ],
    problemSection: {
      overline: "01 / ARCHITECTURE AUDIT",
      titleBefore: "Shipping Beyond",
      titleStrike: "monolithic CMS bloat",
      titleOwned: "With Next.js 16 Engineering.",
      subtitle:
        "Most slow websites fail because database queries and bloated theme frameworks execute on every visitor request. Edge-rendered Next.js moves heavy work to build time.",
      solutionTag: "EDGE-FIRST FRONTEND STACK",
      solutionTitle: "Compiled React Components & Zero Runtime Bloat",
      solutionDesc:
        "Every marketing page, service route, and schema graph compiles cleanly into cacheable HTML and lean client islands — fast on 4G mobile networks across the UK.",
      solutionMetrics: [
        { value: "95+", label: "Target CWV Score" },
        { value: "<1s", label: "Static Edge TTFB" },
        { value: "£0", label: "Plugin Subscriptions" },
      ],
      chartTitle: "Architecture Complexity vs Route Latency Model",
      chartBadge: "Engineering Reference",
      chartYAxis: "Lab Performance Index",
      chartXAxis: "Stack Architecture",
      chartCaption:
        "Comparing compiled App Router static output against heavily plugined page builders.",
      bars: [
        {value: "52", label: "Legacy Theme", heightPx: 74},
        {value: "66", label: "Page Builder", heightPx: 112},
        {value: "84", label: "Tuned SSR", heightPx: 150},
        {value: "98", label: "Next.js 16 Edge", isHighlight: true, heightPx: 192},
      ],
    },
    deliverables: [
      {
        title: "Custom App Router Information Architecture",
        description: "Directory routing planned around buyer intent, crawl depth, and zero canonical overlap.",
      },
      {
        title: "React 19 Server & Client Island Split",
        description: "Heavy markup renders on the server while interactive drawers and calculators load lazily.",
      },
      {
        title: "Tailwind CSS Design Token System",
        description: "Unified spacing, typography, dark/light surfaces, and contrast-verified UI states.",
      },
      {
        title: "JSON-LD Entity Schema Wiring",
        description: "Structured Organization, Service, Offer, and BreadcrumbList metadata tailored per route.",
      },
      {
        title: "Lead & CRM Integration Handlers",
        description: "Server Actions or API routes validating enquiries with spam honeypots and instant routing.",
      },
      {
        title: "Image & Media Pipeline Optimisation",
        description: "AVIF/WebP compression, explicit dimensions for zero CLS, and priority preloads on heroes.",
      },
    ],
    deliverablesMeta: {
      overline: "02 / ENGINEERING DELIVERABLES",
      title: "Included Across Every",
      titleMuted: "Next.js Build",
      subtitle:
        "Inspect each layer engineered inside your repository before DNS cutover and final repo transfer.",
      rowTags: ["Next.js 16", "TypeScript", "Repo Ownership"],
    },
    sectionHeadings: {
      valueOverline: "03 / Architectural Value",
      valueTitle: "Built for Long-Term",
      valueMuted: "Commercial Leverage",
      marketOverline: "04 / Vertical Compatibility",
      marketTitle: "Sector Blueprints &",
      marketMuted: "Live Reference Demos",
      processOverline: "05 / SPRINT CADENCE",
      processTitle: "Structured",
      processMuted: "Build Milestones",
      processSummary: "Written specification, 50% deposit to start, 50% upon staging sign-off.",
      processStageTag: "GitHub Commit + Preview",
      stackOverline: "06 / CORE RUNTIME",
      stackTitle: "Production Stack:",
      stackMuted: "Zero Experimental Dependencies",
      proofOverline: "07 / INTERACTIVE REFERENCE DEMOS",
      proofTitle: "Interactive Concepts &",
      proofMuted: "Architecture Showcases",
      pricingOverline: "08 / FIXED PACKAGE SCOPE",
      pricingTitle: "Next.js Build",
      pricingMuted: "Tiers",
      pricingNote: "Fixed project quote • 50% deposit, 50% on staging approval",
      pricingButtonText: "Request Project Quote",
      advantageOverline: "09 / Delivery Discipline",
      advantageTitle: "Direct Engineering",
      advantageMuted: "Without Account Layers",
      feedbackOverline: "10 / Target Reference Scenarios",
      feedbackTitle: "Typical System",
      feedbackMuted: "Blueprints",
      faqOverline: "11 / Technical Clarity",
      faqIntro:
        "Technical answers covering Next.js 16 hosting, content editing workflows, milestone billing, and repo transfer.",
      bannerTag: "Fixed Scope • 50/50 Milestones • Full Code Ownership",
    },
    featuresAndBenefits: [
      {
        feature: "Static & ISR Rendering",
        benefit: "Consistent First Byte Speed",
        description: "Visitors never wait on database queries before seeing headline copy and navigation.",
      },
      {
        feature: "Zero Database Security Surface",
        benefit: "Hardened Frontend Posture",
        description: "Brochure and marketing routes expose zero public admin login paths or SQL endpoints.",
      },
      {
        feature: "Compositor-Driven Motion",
        benefit: "Smooth Desktop & Mobile UI",
        description: "Animations animate transform and opacity only, avoiding layout thrashing.",
      },
      {
        feature: "Clean URL & Sitemap Automation",
        benefit: "Predictable Search Crawling",
        description: "Automated sitemap generation, clean canonical links, and verified robots directives.",
      },
      {
        feature: "PECR & Privacy-Aware Setup",
        benefit: "UK Compliance Readiness",
        description: "Consent-gated analytics and clear third-party transport disclosures baked into the shell.",
      },
      {
        feature: "Clean Code Documentation",
        benefit: "Zero Future Agency Trap",
        description: "Readable TypeScript folder hierarchy ready for any future developer team.",
      },
    ],
    industries: [
      {
        industry: "Architecture & Property Practices",
        description: "Image-rich project showcase grids with static gallery optimisation and fast project filtering.",
        exampleProject: "Architecture Studio",
        demoUrl: "/demos/architecture/index.html",
      },
      {
        industry: "Private Healthcare & Clinics",
        description: "High-trust treatment service architectures with clear practitioner pathways and booking links.",
        exampleProject: "MedSpa Clinic Concept",
        demoUrl: "/demos/medspa/index.html",
      },
      {
        industry: "B2B Advisory & Agencies",
        description: "Editorial authority pages linking service depth, interactive calculators, and lead capture.",
        exampleProject: "Studio D'Brickell Concept",
        demoUrl: "/demos/studio-dbrickell/index.html",
      },
      {
        industry: "Automotive & Specialist Trades",
        description: "Location-focused service pages built around instant mobile quotes and WhatsApp triage.",
        exampleProject: "AK Detailing Concept",
        demoUrl: "/demos/akdetailing/index.html",
      },
      {
        industry: "Salons & Wellness Flagships",
        description: "Mobile-first service menus paired with editorial photography and appointment links.",
        exampleProject: "Serenia Wellness Concept",
        demoUrl: "/demos/serenia/index.html",
      },
      {
        industry: "Food & Hospitality Operators",
        description: "Direct ordering storefronts integrated alongside allergen guides and local SEO landing pages.",
        exampleProject: "Frenchyse Concept",
        demoUrl: "/frenchyse/index.html",
      },
    ],
    process: [
      {
        step: "Step 01",
        title: "Architecture & Sitemap Spec",
        description: "We audit competitors, define every URL route, map JSON-LD entities, and sign off written fixed pricing.",
        duration: "Day 1–2",
      },
      {
        step: "Step 02",
        title: "Interactive Wireframe & Concept Preview",
        description: "Review layout cadence, mobile hierarchy, and visual system in a live staging link.",
        duration: "Day 3–4",
      },
      {
        step: "Step 03",
        title: "Full Component & Content Build",
        description: "Production React 19 components, forms, schema markup, and responsive refinements wired cleanly.",
        duration: "Day 5–8",
      },
      {
        step: "Step 04",
        title: "QA, Lighthouse & Domain Cutover",
        description: "Cross-browser mobile checks, canonical verification, DNS launch, and final GitHub repository transfer.",
        duration: "Day 9–10",
      },
    ],
    techStack: [
      { name: "Next.js 16", role: "App Router & Static Generation" },
      { name: "React 19", role: "Server & Client Components" },
      { name: "TypeScript", role: "Strict End-to-End Typing" },
      { name: "Tailwind CSS", role: "Design System Styling" },
      { name: "Framer Motion / GSAP", role: "Compositor-Safe Motion" },
      { name: "Vercel / Node.js", role: "Global Edge Runtime" },
    ],
    caseStudies: [
      {
        title: "Architecture & Interior Concept",
        category: "Portfolio Architecture",
        description: "Concept multi-page studio layout built around responsive lookbooks, typography hierarchy, and instant enquiry flows.",
        tech: ["Next.js", "Tailwind CSS", "Static Assets"],
        metrics: "Reference Concept",
        demoUrl: "/demos/architecture/index.html",
      },
      {
        title: "Studio D'Brickell Agency Concept",
        category: "B2B Studio Flagship",
        description: "Interactive editorial showcase concept demonstrating scroll rhythm, contrast cards, and structured navigation.",
        tech: ["React", "Tailwind CSS", "Responsive UI"],
        metrics: "Interactive Demo",
        demoUrl: "/demos/studio-dbrickell/index.html",
      },
      {
        title: "AK Detailing Trade Concept",
        category: "Local Trade Lead Site",
        description: "Mobile-first service package presentation concept designed for UK local service operators.",
        tech: ["Semantic HTML", "Mobile UX", "Quote CTA"],
        metrics: "Interactive Demo",
        demoUrl: "/demos/akdetailing/index.html",
      },
    ],
    competitorComparison: {
      overline: "STACK COMPARISON",
      title: "Custom Next.js 16 vs",
      titleMuted: "Typical Template Agencies",
      subtitle:
        "See how owned App Router architecture compares with off-the-shelf CMS retainers across ownership, speed, and maintenance.",
      columns: ["Architectural Dimension", "Saim Dev Next.js 16 Build", "Typical WP / Page-Builder Agency"],
      rows: [
        {
          criteria: "Source Code & Hosting Lock-In",
          saim: "Full GitHub repo transferred; host on free/low-cost edge tiers",
          alternative: "Often tied to proprietary hosting or opaque agency maintenance plans",
        },
        {
          criteria: "Frontend Payload Size",
          saim: "Compiled Server Components + pruned CSS tokens only",
          alternative: "Large shared plugin JS/CSS loaded across every route",
        },
        {
          criteria: "Security Patching Burden",
          saim: "Zero exposed PHP admin endpoints or database plugin updates",
          alternative: "Ongoing core, theme, and plugin CVE patches needed monthly",
        },
        {
          criteria: "Concept Visibility Before Lock-In",
          saim: "Free live concept preview option prior to full build commitment",
          alternative: "Static PDF decks followed by rigid full-term invoices",
        },
        {
          criteria: "Billing Transparency",
          saim: "Written fixed scope; 50% milestone deposit, 50% on staging sign-off",
          alternative: "Hourly overages or recurring retainers for minor copy edits",
        },
      ],
    },
    engineeringChecklist: {
      title: "Pre-Launch Engineering Verification Checklist",
      subtitle:
        "Every website development engagement goes through these technical checks on our staging domain before handover:",
      items: [
        "Single semantic <h1> and strict H1 -> H2 -> H3 heading hierarchy per route",
        "Self-referencing canonical tags and cleanly validated OpenGraph metadata",
        "All interactive menus & modals placed in <header>/<nav> with keyboard navigation",
        "JSON-LD Organization, Service, BreadcrumbList & FAQ schema validated",
        "Explicit width/height or aspect ratios on hero visuals preventing CLS shift",
        "Touch target spacing >= 44px on mobile navigation and lead capture forms",
        "Spam-protected contact handlers with WhatsApp and direct email routing",
        "Clean production build verification via tsc --noEmit and link integrity checks",
      ],
    },
    pricing: [
      {
        name: "Starter Package",
        price: "£390",
        description: "Clean up to 5-page custom Next.js website built for rapid local UK visibility.",
        features: [
          "Up to 5 custom designed routes",
          "Next.js 16 static-edge performance",
          "Mobile responsive + WhatsApp & call CTAs",
          "Local SEO tags & JSON-LD Schema",
          "2 rounds of staging refinements",
          "14 days post-launch technical support",
        ],
      },
      {
        name: "Business Growth",
        price: "£790",
        description: "Multi-page authority architecture with blog/resource routing and advanced conversion flows.",
        popular: true,
        features: [
          "Up to 15 bespoke pages & landing views",
          "Dynamic MDX / content hub integration",
          "Comprehensive Service + FAQ Schema graph",
          "Custom interactive calculator or estimator widget",
          "5 revision rounds + PECR consent shell",
          "30 days dedicated post-launch support",
        ],
      },
      {
        name: "Multi-Region / Portal",
        price: "£1,450",
        description: "Large commercial architectures, UK/EU multi-service hubs, or custom API integrations.",
        features: [
          "Up to 35+ structured routes & service pages",
          "Headless CMS or external CRM webhook sync",
          "Custom React interactive components",
          "Full 301 redirect migration & crawl audit",
          "Dedicated CI/CD GitHub handover walkthrough",
          "30 days priority engineering support",
        ],
      },
    ],
    whyChooseUs: [
      {
        title: "Fixed Scope Written Upfront",
        desc: "Every deliverable page and integration is specified clearly before milestone billing begins.",
      },
      {
        title: "100% Source Ownership",
        desc: "Your finished repository belongs completely to your organisation on GitHub — zero code ransomware.",
      },
      {
        title: "Engineering First, Not Page Builders",
        desc: "Zero Elementor, Divi, or Wix wrappers. Every component is crafted cleanly in TypeScript.",
      },
      {
        title: "Transparent 50/50 Milestones",
        desc: "50% deposit activates engineering sprint; final 50% is invoiced once staging matches agreed scope.",
      },
      {
        title: "UK & European Commercial Focus",
        desc: "GBP pricing, PECR cookie disclosures, UK English copywriting, and local search architecture built in.",
      },
      {
        title: "Free Concept Preview Available",
        desc: "For qualifying commercial builds, request a live homepage concept link before committing.",
      },
    ],
    testimonials: [
      {
        quote: "Illustrative target scenario: Replacing a 4-second plugined WordPress brochure site with a 6-route Next.js build hosted cleanly without monthly PHP maintenance.",
        client: "Multi-Service UK Practice",
        role: "Target Architecture Pattern",
        company: "Reference Specification",
      },
      {
        quote: "Illustrative target scenario: Separating heavy marketing content onto static edge routes with lazy-loaded interactive enquiry estimators.",
        client: "Regional Construction Firm",
        role: "Target Architecture Pattern",
        company: "Reference Specification",
      },
      {
        quote: "Illustrative target scenario: Consolidating fragmented campaign pages under one unified design system and canonical sitemap structure.",
        client: "Advisory Consultancy",
        role: "Target Architecture Pattern",
        company: "Reference Specification",
      },
    ],
    faqs: [
      {
        question: "How does your pricing and milestone schedule work?",
        answer:
          "Projects follow fixed written quotes aligned to our Starter (£390), Business (£790), or custom tiers. Work starts on a 50% milestone deposit after written brief approval, with the remaining 50% due only after you review and sign off the live staging deployment.",
      },
      {
        question: "Can my non-technical team edit copy after launch?",
        answer:
          "Yes. Text and media can be structured via clean typed TypeScript content files (for developers/zero-cost simplicity) or wired to a friendly visual Headless CMS such as Sanity or MDX content collections at agreed scope.",
      },
      {
        question: "Why Next.js 16 instead of WordPress or Webflow?",
        answer:
          "Next.js pre-renders routes at build or request edge time without exposing heavy SQL/PHP databases, removing plugin update breakages and cutting ongoing platform subscription spend.",
      },
      {
        question: "Do you supply interactive demos before I decide?",
        answer:
          "Yes — browse our /demos gallery anytime to inspect live speed and responsive polish, or request a Free Concept Preview link via /contact for qualifying builds.",
      },
      {
        question: "Where will the finished website be hosted?",
        answer:
          "We deploy cleanly to your own Vercel, Cloudflare Pages, Netlify, or Node.js cloud account with SSL and custom domain routing configured during launch.",
      },
    ],
    finalCta: {
      headline: "Ready to Replace Slow Templates With Owned Next.js Engineering?",
      description:
        "Share your current site or brief for a written fixed-fee specification, milestone schedule, and optional Free Concept Preview.",
      primaryButtonText: "Request Fixed Scope Quote",
      whatsappText: "Bespoke Next.js 16 Website Build",
    },
    relatedServices: [
      {
        name: "Business Websites UK",
        href: "/services/business-websites",
        desc: "Lead-generation builds tailored for UK trades, clinics, and local firms.",
      },
      {
        name: "WordPress to Headless CMS",
        href: "/services/wordpress-headless-cms",
        desc: "Escape plugin lock-in while keeping effortless editorial publishing.",
      },
      {
        name: "Custom Web Apps & Portals",
        href: "/services/custom-web-apps",
        desc: "Full-stack React dashboards, auth flows, and interactive calculators.",
      },
    ],
  },

  // ==============================================================
  // 2. BUSINESS WEBSITES UK (SME LEAD GENERATION)
  // ==============================================================
  "business-websites": {
    slug: "business-websites",
    serviceName: "UK Business Website Design",
    mainKeyword: "Small Business Web Design UK",
    seoTitle: "UK Business Website Design | Leads & Bookings | Saim Dev",
    seoDescription:
      "Custom service websites for UK clinics, trades, law firms and consultants. WhatsApp routing, Calendly booking, local schema and transparent fixed packages.",
    canonicalUrl: "https://www.saimdev.site/services/business-websites",
    badge: "Lead-First SME Websites",
    h1: "Business Websites Engineered for UK Local Trust & Direct Customer Enquiries",
    subheading:
      "Purpose-built for dental clinics, tradespeople, beauty salons, solicitors, and local service providers across Britain. Turn casual visitors into phone calls, WhatsApp messages, and booked consultations.",
    primaryCtaText: "Get a SME Website Quote",
    secondaryCtaText: "View Local Business Demos",
    stripLabel: "UK SME Lead System",
    stripItems: [
      {
        label: "Packages from £250",
        tag: "Fixed Tiers",
        tagValue: "£250 / £390 / £790",
        summary: "Clear SME website pricing matching single-page offers up to 15-page authority sites.",
        href: "/pricing",
      },
      {
        label: "Mobile Tap-to-Call",
        tag: "Lead Routing",
        tagValue: "WhatsApp + Tel",
        summary: "Frictionless thumb-zone buttons connecting UK mobile visitors straight to your reception.",
        href: "/contact",
      },
      {
        label: "Local GBP Schema",
        tag: "Visibility",
        tagValue: "Map + Areas",
        summary: "Structured service area metadata aligned cleanly with your Google Business Profile.",
        href: "/services/seo-services",
      },
      {
        label: "Live Preview First",
        tag: "Option",
        tagValue: "Concept Mock",
        summary: "Request a non-binding live concept layout before locking in full project development.",
        href: "/demos",
      },
      {
        label: "UK Copy & Tone",
        tag: "Content",
        tagValue: "British English",
        summary: "Clear commercial messaging aligned around GBP pricing, UK postcodes, and local buyer trust.",
        href: "/overview",
      },
    ],
    painPoints: [
      {
        problem: "Brochure websites hide phone numbers and contact details behind buried hamburger menus on mobile.",
        solution: "We engineer persistent mobile click-to-call, WhatsApp chat triggers, and clear pricing expectation cues right where thumbs tap.",
      },
      {
        problem: "Generic template sites make independent clinics and tradespeople look identical to budget competitors.",
        solution: "Custom layout typography, service-specific FAQ accordions, and crisp accreditation badges establish instant local credibility.",
      },
      {
        problem: "Contact forms silently drop leads into unmonitored spam folders without instant notifications.",
        solution: "Dual-channel lead capture pushes form briefs to email and opens pre-filled WhatsApp/booking links so enquiries never go cold.",
      },
      {
        problem: "DIY site builders sneak in rising annual domain/app upsells every renewal cycle.",
        solution: "Own a clean static Next.js codebase with clear GBP fixed tiers starting from £250 and zero recurring platform commissions.",
      },
    ],
    problemSection: {
      overline: "01 / LOCAL ENQUIRY FRICTION",
      titleBefore: "Stopping Leaks in",
      titleStrike: "silent brochure templates",
      titleOwned: "With Guided SME Funnels.",
      subtitle:
        "Local UK prospects compare 3–4 providers in under 90 seconds on mobile. If pricing clarity, service areas, and contact buttons aren't obvious above the fold, the call goes to a competitor.",
      solutionTag: "SME CONVERSION ARCHITECTURE",
      solutionTitle: "Trust Signals, Service Proof & Zero-Friction Booking",
      solutionDesc:
        "Each page answers who you serve, where you operate, indicative pricing ranges, and the fastest way to book — cleanly structured for both human callers and Google Local Pack crawlers.",
      solutionMetrics: [
        { value: "£250", label: "Landing Entry" },
        { value: "5–10d", label: "Typical Launch" },
        { value: "100%", label: "Mobile Lead Flow" },
      ],
      chartTitle: "SME Website Readiness Score Comparison",
      chartBadge: "Conversion Model",
      chartYAxis: "Lead Clarity Index",
      chartXAxis: "Site Build Type",
      chartCaption:
        "Bespoke local service pages align Google Business Profile signals, explicit regional areas, and mobile call routing.",
      bars: [
        {value: "48", label: "DIY Wix", heightPx: 74},
        {value: "61", label: "Old Brochure", heightPx: 112},
        {value: "79", label: "Custom Theme", heightPx: 150},
        {value: "97", label: "Saim SME Funnel", isHighlight: true, heightPx: 192},
      ],
    },
    deliverables: [
      {
        title: "Home + Core Service Architecture",
        description: "Dedicated subpages per high-margin service so each ranks independently in regional search.",
      },
      {
        title: "Direct Booking & WhatsApp Triage",
        description: "Calendly embed, click-to-call tel: headers, and pre-populated WhatsApp enquiry buttons.",
      },
      {
        title: "Pricing Transparency & Expectation Sections",
        description: "Clear Tier or From-Price cards that filter out tyre-kickers before they call reception.",
      },
      {
        title: "Service Area & Postcode Signal Blocks",
        description: "Natural mentions of boroughs, counties, and towns covered paired with clean Maps embeds.",
      },
      {
        title: "Accreditation, Hygiene & Review Highlighting",
        description: "Structured showcase blocks for authentic verified reviews, Gas Safe / CQC / FHRS badges you hold.",
      },
      {
        title: "PECR Privacy & Domain Email Alignment",
        description: "Clean Cookie notice shell, UK Privacy Policy scaffolding, and verified contact@yourdomain routing.",
      },
    ],
    deliverablesMeta: {
      overline: "02 / SMALL BUSINESS DELIVERABLES",
      title: "Built Into Every",
      titleMuted: "UK Business Website",
      subtitle:
        "Practical commercial features engineered for owner-managed businesses across clinics, trades, and professional services.",
      rowTags: ["UK SME Design", "Lead Routing", "Local SEO"],
    },
    sectionHeadings: {
      valueOverline: "03 / Commercial Clarity",
      valueTitle: "Turning Local Searchers into",
      valueMuted: "Booked Appointments",
      marketOverline: "04 / Trades & Practices",
      marketTitle: "SME Industries &",
      marketMuted: "Concept Previews",
      processOverline: "05 / LAUNCH TIMELINE",
      processTitle: "Fast Turnaround",
      processMuted: "Without Agency Meetings",
      processSummary: "Quick WhatsApp/email brief onboarding, staging review within days, fixed quote.",
      processStageTag: "Mobile Staging Review",
      stackOverline: "06 / RELIABLE INFRASTRUCTURE",
      stackTitle: "Clean Modern Stack —",
      stackMuted: "Zero Maintenance Headaches",
      proofOverline: "07 / SECTOR CONCEPT BUILDS",
      proofTitle: "Interactive SME",
      proofMuted: "Concept Previews",
      pricingOverline: "08 / UK SMALL BUSINESS PRICING",
      pricingTitle: "Transparent SME",
      pricingMuted: "Packages",
      pricingNote: "Synced with studio pricing • 50/50 milestone terms",
      pricingButtonText: "Book This Package",
      advantageOverline: "09 / Why Independent Operators Choose Us",
      advantageTitle: "Built For Business Owners,",
      advantageMuted: "Not Marketing Committees",
      feedbackOverline: "10 / Target Reference Scenarios",
      feedbackTitle: "UK SME Growth",
      feedbackMuted: "Scenarios",
      faqOverline: "11 / Owner FAQ",
      faqIntro:
        "Straightforward answers on copywriting help, domain transfer, Google Maps setup, and post-launch changes.",
      bannerTag: "GBP Fixed Packages • From £250 • Free Concept Option",
    },
    featuresAndBenefits: [
      {
        feature: "Dedicated Service Subpages",
        benefit: "Higher Local Relevance",
        description: "Instead of stuffing 8 services onto one homepage, each core offering gets targeted search copy.",
      },
      {
        feature: "Mobile Thumb-Zone Actions",
        benefit: "Faster Enquiry Initiation",
        description: "Customers on the move can tap Call Now, WhatsApp, or Request Callback without hunting.",
      },
      {
        feature: "Structured FAQ Accordions",
        benefit: "Fewer Repetitive Calls",
        description: "Answer parking, turnaround times, guarantees, and coverage postcodes directly on page.",
      },
      {
        feature: "Zero Monthly SaaS Subscriptions",
        benefit: "Lower Annual Overheads",
        description: "Replace £35–£90/month template subscriptions with an asset your business owns outright.",
      },
      {
        feature: "Fast PageSpeed Over Mobile 4G",
        benefit: "Lower Ad Bounce Losses",
        description: "When running Google Local Services or search ads, pages paint rapidly before visitors back out.",
      },
      {
        feature: "Optional Copy & Photography Polish",
        benefit: "Clean Editorial Presentation",
        description: "We refine bullet specs and structure headlines around UK buyer objections cleanly.",
      },
    ],
    industries: [
      {
        industry: "Automotive & Mobile Valeting",
        description: "Package comparisons, turnaround estimates, and WhatsApp photo quote buttons for car detailers & mechanics.",
        exampleProject: "AK Detailing Concept",
        demoUrl: "/demos/akdetailing/index.html",
      },
      {
        industry: "Private Aesthetics & Dental Clinics",
        description: "Calm high-trust treatment menus, practitioner credentials blocks, and consultation booking pathways.",
        exampleProject: "MedSpa Clinic Concept",
        demoUrl: "/demos/medspa/index.html",
      },
      {
        industry: "Beauty Salons & Hair Studios",
        description: "Price list clarity, location map embed, and direct treatment booking CTAs.",
        exampleProject: "Valèria Salon Concept",
        demoUrl: "/demos/valeria/index.html",
      },
      {
        industry: "Mobile Therapists & Beauticians",
        description: "Coverage radius checkers and on-demand booking sections engineered around mobile conversions.",
        exampleProject: "Beauticians On The Go",
        demoUrl: "/demos/beauticiansonthego/index.html",
      },
      {
        industry: "Cleaning & Facility Services",
        description: "Checklist clarity, domestic vs commercial tiers, and recurring schedule enquiry forms.",
        exampleProject: "Woshico Service Concept",
        demoUrl: "/demos/woshico/index.html",
      },
      {
        industry: "Solicitors, Accountants & B2B",
        description: "Clear fee guide pages, consultation booking, and professional UK compliance trust bars.",
        exampleProject: "Studio D'Brickell Concept",
        demoUrl: "/demos/studio-dbrickell/index.html",
      },
    ],
    process: [
      {
        step: "Step 01",
        title: "15-Minute Brief & Service List",
        description: "Send your service list, trading towns, logo/photos, and preferred contact channels via WhatsApp or form.",
        duration: "Day 1",
      },
      {
        step: "Step 02",
        title: "Draft Copy & Homepage Preview",
        description: "We structure service copy in natural British English and share a staging link to inspect on your phone.",
        duration: "Day 2–3",
      },
      {
        step: "Step 03",
        title: "Full Pages, Maps & Lead Setup",
        description: "All inner service pages, LocalBusiness schema, contact form routing, and favicon/social cards wired up.",
        duration: "Day 4–6",
      },
      {
        step: "Step 04",
        title: "DNS Launch & Google Indexing",
        description: "We switch your domain cleanly with HTTPS active, submit your sitemap, and hand over full repository control.",
        duration: "Day 7",
      },
    ],
    techStack: [
      { name: "Next.js 16", role: "Fast Local Edge Delivery" },
      { name: "LocalBusiness JSON-LD", role: "UK Postcode & Geo Schema" },
      { name: "WhatsApp + Form API", role: "Zero-Missed-Lead Routing" },
      { name: "Tailwind CSS", role: "Clean Mobile Responsive UI" },
      { name: "Google Search Console", role: "Sitemap & Index Verification" },
      { name: "Free Static Edge Hosting", role: "£0 Monthly Software Fee" },
    ],
    caseStudies: [
      {
        title: "AK Detailing Service Concept",
        category: "UK Auto Care Funnel",
        description: "Interactive concept built for detailing garages showcasing ceramic packages, pricing clarity, and mobile quote triggers.",
        tech: ["Service Pricing", "Mobile CTA", "Responsive UI"],
        metrics: "Interactive Demo",
        demoUrl: "/demos/akdetailing/index.html",
      },
      {
        title: "Valèria Beauty Studio Concept",
        category: "Salon & Booking UI",
        description: "Editorial salon showcase concept designed to elevate perceived treatment value before consultation.",
        tech: ["Framer-Grade UI", "Service Menu", "Mobile Drawer"],
        metrics: "Interactive Demo",
        demoUrl: "/demos/valeria/index.html",
      },
      {
        title: "Woshico Commercial Service Concept",
        category: "Cleaning & Trade Site",
        description: "Clean high-contrast layout engineered for service quote transparency and fast booking on phones.",
        tech: ["Fast UI", "Quote Structure", "Tailwind CSS"],
        metrics: "Interactive Demo",
        demoUrl: "/demos/woshico/index.html",
      },
    ],
    competitorComparison: {
      overline: "WHY SWITCH FROM DIY BUILDERS",
      title: "Custom Business Website vs",
      titleMuted: "Wix, GoDaddy & Cheap Templates",
      subtitle:
        "DIY drag-and-drop tools appear inexpensive at month one, then lock your business into recurring subscriptions and slow templates.",
      columns: ["Business Factor", "Saim Dev Business Website", "DIY Builders / Budget Directories"],
      rows: [
        {
          criteria: "First-Year & 3-Year Cost",
          saim: "£250–£790 once + ~£12/yr domain only on free edge tiers",
          alternative: "£240–£540/year forever just to stay published",
        },
        {
          criteria: "Lead Ownership & Portability",
          saim: "Direct form + WhatsApp; full source files exported cleanly",
          alternative: "Site trapped inside proprietary builder editor forever",
        },
        {
          criteria: "Perceived Price Tier",
          saim: "Custom editorial polish supporting higher quote margins",
          alternative: "Recognisable stock layout shared by local competitors",
        },
        {
          criteria: "Local SEO Service Split",
          saim: "Separate service + location pages with bespoke schema",
          alternative: "Thin single-page scroll sites missing structured data",
        },
      ],
    },
    engineeringChecklist: {
      title: "UK Local Business Launch Checklist Included",
      subtitle:
        "Everything we configure so your local business appears credible from the moment you update Google Business Profile:",
      items: [
        "Verified click-to-call (tel:) and pre-filled WhatsApp enquiry links",
        "Dedicated core service pages matching Google Business Profile primary categories",
        "Localised UK spelling, GBP pricing display (£), and coverage area clarity",
        "UK GDPR & PECR privacy policy link + clean non-intrusive cookie preference notice",
        "OpenGraph social card preview image tailored for WhatsApp and Facebook shares",
        "Automated sitemap submission check ready for Google Search Console",
      ],
    },
    pricing: [
      {
        name: "Landing Page",
        price: "£250",
        description: "Focused single-page website for solo tradespeople, launch offers, or local Google Ads.",
        features: [
          "High-conversion responsive landing page",
          "Click-to-call, WhatsApp & contact form",
          "Google Maps embed & core local schema",
          "Social share card & fast image sizing",
          "1 round of text/visual refinements",
          "7 days post-launch technical support",
        ],
      },
      {
        name: "Starter SME",
        price: "£390",
        description: "Complete 5-page UK small business website built to establish local authority.",
        popular: true,
        features: [
          "Up to 5 custom pages (Home, Services, About, Reviews, Contact)",
          "Dedicated local area & FAQ sections",
          "Direct booking calendar or WhatsApp routing",
          "LocalBusiness Schema & Search Console setup",
          "2 rounds of revisions + PECR notice",
          "14 days dedicated support",
        ],
      },
      {
        name: "Business Growth",
        price: "£790",
        description: "Multi-service UK authority engine with individual town/service landing pages and blog hub.",
        features: [
          "Up to 15 bespoke pages & service breakdowns",
          "Local insights blog ready for seasonal guides",
          "Custom interactive cost estimator or checklist",
          "GA4 & conversion tracking wiring",
          "5 revision rounds + priority launch",
          "30 days dedicated engineering support",
        ],
      },
    ],
    whyChooseUs: [
      {
        title: "Aligned With Official Studio Plans",
        desc: "Exact transparent GBP packages (£250 Landing, £390 Starter, £790 Business) with zero surprise upsells.",
      },
      {
        title: "Speak Directly With the Engineer",
        desc: "Skip sales brokers and ticket queues — communicate directly on WhatsApp or email throughout the build.",
      },
      {
        title: "Zero Ongoing Agency Retainer",
        desc: "Once launched, pay zero mandatory monthly fees while owning your codebase cleanly.",
      },
      {
        title: "Designed Around Phone Buyers",
        desc: "Over 75% of local UK service clicks happen on smartphones; we design mobile-first, never as an afterthought.",
      },
      {
        title: "Help Structuring Your Copy",
        desc: "No need to hand over a 20-page Word document — give us bullet notes and we structure readable commercial copy.",
      },
      {
        title: "Free Domain & Hosting Guidance",
        desc: "Need help linking GoDaddy, Namecheap, Ionos, or Cloudflare DNS? Included cleanly in launch handover.",
      },
    ],
    testimonials: [
      {
        quote: "Illustrative target scenario: A local dental or aesthetics practice shifting from a dated brochure site onto clear treatment subpages with direct consultation booking.",
        client: "Independent Health Clinic",
        role: "Target SME Scenario",
        company: "Reference Specification",
      },
      {
        quote: "Illustrative target scenario: A regional detailing or home-improvement tradesperson qualifying quotes faster using package comparison cards and WhatsApp photos.",
        client: "Regional Specialist Trade",
        role: "Target SME Scenario",
        company: "Reference Specification",
      },
      {
        quote: "Illustrative target scenario: An accountancy or legal firm cutting ongoing Wix charges while improving mobile page load and structured trust presentation.",
        client: "Local Advisory Practice",
        role: "Target SME Scenario",
        company: "Reference Specification",
      },
    ],
    faqs: [
      {
        question: "Do I already need my photos and logo ready before starting?",
        answer:
          "Existing team photos and logos always increase local trust, though if you don't have finished visuals yet we can structure your typography/mark cleanly and use verified commercial placeholders while you take venue shots.",
      },
      {
        question: "Can you move my existing .co.uk or .uk domain onto the new website?",
        answer:
          "Yes. You retain 100% ownership of your registrar account; at launch we update DNS records safely without interrupting any existing Microsoft 365 or Google Workspace email inbox.",
      },
      {
        question: "Are the £250, £390, and £790 prices one-time fees?",
        answer:
          "Yes. They are one-time fixed development packages billed under 50/50 milestones. Your only recurring third-party cost is your standard annual domain registration (typically £10–£15/year) plus optional free/usage cloud hosting.",
      },
      {
        question: "How do I update phone numbers, prices, or opening hours later?",
        answer:
          "Minor occasional tweaks can be handled quickly via clear typed data files, or we can add an intuitive content dashboard if your team expects weekly menu or blog updates.",
      },
      {
        question: "Can I see what the site could look like before paying?",
        answer:
          "Yes — browse any relevant live build inside /demos or send your business details via /contact to request a Free Concept Preview prior to formal milestone kickoff.",
      },
    ],
    finalCta: {
      headline: "Give Your Local Business a Website That Wins Higher-Value Quotes",
      description:
        "Clear packages from £250, fast mobile load speed, and zero monthly template rent. Send your details for a quick scope reply.",
      primaryButtonText: "Start Your SME Website",
      whatsappText: "UK Business Website Package",
    },
    relatedServices: [
      {
        name: "Takeaway Web Design UK",
        href: "/services/takeaway-web-design",
        desc: "Zero-commission online food ordering websites from £250.",
      },
      {
        name: "Local & Technical SEO",
        href: "/services/seo-services",
        desc: "LocalBusiness schema and UK town coverage page engineering.",
      },
      {
        name: "Website Redesign UK",
        href: "/services/website-redesign",
        desc: "Modernise an older business website while keeping Google rankings intact.",
      },
    ],
  },

  // ==============================================================
  // 3. WORDPRESS TO NEXT.JS MIGRATION & HEADLESS CMS
  // ==============================================================
  "wordpress-headless-cms": {
    slug: "wordpress-headless-cms",
    serviceName: "WordPress to Next.js Migration",
    mainKeyword: "Headless WordPress & Next.js Migration",
    seoTitle: "WordPress to Next.js Migration | Headless CMS | Saim Dev",
    seoDescription:
      "Migrate slow WordPress sites to static-edge Next.js 16 with headless Sanity or WPGraphQL CMS, 301 URL preservation and zero downtime.",
    canonicalUrl: "https://www.saimdev.site/services/wordpress-headless-cms",
    badge: "De-Bloat & Headless CMS Migration",
    h1: "Migrate WordPress to Next.js 16 — Keep Your Editorial Workflow, Drop Plugin Bloat",
    subheading:
      "Tired of broken Elementor updates, WooCommerce sluggishness, and constant security scanner alerts? Keep effortless article and page editing via Sanity CMS, MDX, or Headless WP GraphQL while upgrading your frontend to edge-cached React 19.",
    primaryCtaText: "Audit Your WordPress Migration",
    secondaryCtaText: "Compare Headless Options",
    stripLabel: "WordPress Escape Engineering",
    stripItems: [
      {
        label: "Zero 404 Losses",
        tag: "SEO Safety",
        tagValue: "100% 301 Map",
        summary: "Automated URL parity check + explicit 301 redirect matrix protecting ranked URLs.",
        href: "/services/seo-services",
      },
      {
        label: "Sanity or Headless WP",
        tag: "CMS Choice",
        tagValue: "Visual Editor",
        summary: "Writers publish posts in seconds while Next.js ISR rebuilds pages quietly in background.",
        href: "/technologies",
      },
      {
        label: "Drop 20+ Plugins",
        tag: "Cleanup",
        tagValue: "0 PHP Bloat",
        summary: "Replace Contact Form 7, Yoast overhead, slider scripts, and caching plugins cleanly.",
        href: "/services/website-speed-optimization",
      },
      {
        label: "Content Extraction",
        tag: "Automated",
        tagValue: "Posts + Media",
        summary: "Clean migration of blog articles, slugs, alt text, categories, and OpenGraph meta.",
        href: "/process",
      },
      {
        label: "Cut Hosting Bills",
        tag: "Infra Savings",
        tagValue: "Zero VPS Scaling",
        summary: "Eliminate expensive managed WordPress tiers charged solely for traffic spikes.",
        href: "/pricing",
      },
    ],
    painPoints: [
      {
        problem: "One automatic WordPress plugin update breaks checkout layouts or triggers a fatal PHP white screen.",
        solution: "Decoupling the frontend eliminates PHP theme runtime entirely — visual UI sits in strongly typed Git version control.",
      },
      {
        problem: "Elementor, Divi, and WPBakery wrap simple paragraphs inside 14 nested divs, tanking INP and LCP mobile scores.",
        solution: "Clean semantic HTML5 and Tailwind CSS strip away page-builder DOM depth by up to 80% for effortless Core Web Vitals.",
      },
      {
        problem: "Bot traffic hammering wp-login.php and xmlrpc.php consumes server CPU and forces costly hosting upgrades.",
        solution: "Static-edge Next.js routes expose no database or login screen to public scanners, absorbing traffic spikes effortlessly.",
      },
      {
        problem: "Businesses fear losing years of organic Google search equity during a platform transition.",
        solution: "We extract every indexed URL from XML sitemaps and Search Console, matching slugs verbatim or issuing 301 redirects.",
      },
    ],
    problemSection: {
      overline: "01 / LEGACY WP BOTTLENECKS",
      titleBefore: "Decoupling From",
      titleStrike: "fragile PHP plugin chains",
      titleOwned: "Onto Headless Static Speed.",
      subtitle:
        "Monolithic WordPress couples editing, database state, and public rendering inside every single page load. Headless architecture separates editorial writing from visitor delivery.",
      solutionTag: "DECOUPLED EDITORIAL PIPELINE",
      solutionTitle: "Keep Easy Editing — Serve Pre-Built HTML Everywhere",
      solutionDesc:
        "Choose between migrating posts cleanly into Sanity Studio / Git MDX or keeping your familiar WordPress backend tucked behind a private API consumed at build/ISR time.",
      solutionMetrics: [
        { value: "0", label: "Public PHP Plugins" },
        { value: "301", label: "Redirect Safety" },
        { value: "ISR", label: "On-Demand Updates" },
      ],
      chartTitle: "DOM Bloat & Attack Surface Reduction Model",
      chartBadge: "Migration Impact",
      chartYAxis: "Optimization Index",
      chartXAxis: "Publishing Architecture",
      chartCaption:
        "Replacing database-rendered page builders with Next.js ISR preserves editorial flexibility with zero runtime theme bloat.",
      bars: [
        {value: "38", label: "Elementor WP", heightPx: 74},
        {value: "58", label: "Cached WP", heightPx: 112},
        {value: "86", label: "Headless WP", heightPx: 150},
        {value: "98", label: "Next.js + Sanity", isHighlight: true, heightPx: 192},
      ],
    },
    deliverables: [
      {
        title: "Complete Content & Media Export",
        description: "Posts, pages, author profiles, category taxonomies, and image assets migrated cleanly without shortcodes.",
      },
      {
        title: "301 Redirect Map & Canonical Parity",
        description: "Side-by-side audit of legacy WordPress permalinks (?p=, /category/, trailing slashes) mapped to exact destinations.",
      },
      {
        title: "Sanity Studio / MDX / WP-GraphQL Wiring",
        description: "Structured content schema with instant webhook preview so writers review drafts before publishing live.",
      },
      {
        title: "Native Replacement of Slow WP Plugins",
        description: "Forms, Yoast/RankMath JSON-LD metadata, tables of contents, and redirects coded natively in TypeScript.",
      },
      {
        title: "Staging Domain Crawl Verification",
        description: "Full link checker and HTTP status verification against the live site before DNS switchover.",
      },
      {
        title: "Zero-Downtime DNS Switch Protocol",
        description: "Coordinated TTL reduction and Cloudflare/Vercel edge cutover preventing missed form enquiries.",
      },
    ],
    deliverablesMeta: {
      overline: "02 / MIGRATION SCOPE",
      title: "Everything Handled During",
      titleMuted: "WordPress Offboarding",
      subtitle:
        "Zero manual copy-pasting or lost blog images. We engineer the full data bridge alongside your redesigned Next.js frontend.",
      rowTags: ["Headless CMS", "301 Redirects", "Zero WP Bloat"],
    },
    sectionHeadings: {
      valueOverline: "03 / Migration ROI",
      valueTitle: "What Changes the Day",
      valueMuted: "WordPress Unplugs",
      marketOverline: "04 / Publishing Workflows",
      marketTitle: "Headless Paths By",
      marketMuted: "Team Workflow",
      processOverline: "05 / ZERO-DOWNTIME TIMELINE",
      processTitle: "Step-By-Step",
      processMuted: "Safe Cutover",
      processSummary: "Parallel build on staging URL while old WordPress runs untouched until final check.",
      processStageTag: "SEO Parity Check",
      stackOverline: "06 / HEADLESS TOOLING",
      stackTitle: "Clean CMS Bridges &",
      stackMuted: "Webhook Revalidation",
      proofOverline: "07 / CONTENT & EDITORIAL MODELS",
      proofTitle: "Migrated Architecture",
      proofMuted: "Reference Concepts",
      pricingOverline: "08 / FIXED MIGRATION TIERS",
      pricingTitle: "WordPress Escape",
      pricingMuted: "Packages",
      pricingNote: "Fixed migration fee • 50/50 milestone terms",
      pricingButtonText: "Plan My Migration",
      advantageOverline: "09 / Why Migrate Instead of Re-Theming",
      advantageTitle: "Fix the Foundation,",
      advantageMuted: "Not Just Another Skin",
      feedbackOverline: "10 / Target Reference Scenarios",
      feedbackTitle: "Typical Migration",
      feedbackMuted: "Blueprints",
      faqOverline: "11 / Migration Concerns Answered",
      faqIntro:
        "Details on SEO link preservation, Sanity vs Headless WordPress choice, WooCommerce, and editor training.",
      bannerTag: "Full 301 SEO Map • Zero Downtime • Complete Ownership",
    },
    featuresAndBenefits: [
      {
        feature: "Shortcode & Divi Tag Stripper",
        benefit: "Pure Clean Content",
        description: "No leftover [vc_row] or Elementor markup junking up migrated blog posts.",
      },
      {
        feature: "On-Demand ISR Revalidation",
        benefit: "Publish in Under 2 Seconds",
        description: "Hit publish in Sanity or WP and only that specific URL regenerates cleanly at the edge.",
      },
      {
        feature: "Native Schema Replacement",
        benefit: "Cleaner Than Yoast",
        description: "Dynamic article, breadcrumb, and organization JSON-LD rendered deterministically in page code.",
      },
      {
        feature: "Media Offload & WebP Conversion",
        benefit: "Shrink Upload Bloat",
        description: "Heavy unresized 4MB wp-content uploads get optimised and cleanly organized.",
      },
      {
        feature: "Zero Database Runtime Outages",
        benefit: "Predictable Uptime",
        description: "Traffic spikes from PR or ads cannot take down MySQL connection pools.",
      },
      {
        feature: "Editorial Training Loom",
        benefit: "Instant Team Adoption",
        description: "Short recorded walkthrough showing your writers how to publish and preview drafts cleanly.",
      },
    ],
    industries: [
      {
        industry: "High-Traffic Content & Blogs",
        description: "Editorial hubs with 50–500+ archived articles migrated to clean MDX or Sanity with TOC & search.",
        exampleProject: "Editorial Insights Hub",
        demoUrl: "/blogs",
      },
      {
        industry: "B2B Agencies Stuck on Elementor",
        description: "Agency and consultancy flagships weighed down by slow animations rebuilt into responsive React.",
        exampleProject: "Studio D'Brickell Concept",
        demoUrl: "/demos/studio-dbrickell/index.html",
      },
      {
        industry: "Clinics Using Bloated Appointment Themes",
        description: "Healthcare providers leaving slow WP theme builders for crisp Next.js + Calendly routing.",
        exampleProject: "MedSpa Clinic Concept",
        demoUrl: "/demos/medspa/index.html",
      },
      {
        industry: "Luxury Portfolio & Architects",
        description: "Heavy Slider Revolution & Gallery plugins replaced with fast responsive Next.js image views.",
        exampleProject: "Architecture Studio Concept",
        demoUrl: "/demos/architecture/index.html",
      },
      {
        industry: "WooCommerce Catalogs Under 500 SKUs",
        description: "Transition slow WooCommerce DB queries onto clean Stripe Checkout or Shopify Headless.",
        exampleProject: "HQ Leathercon Concept",
        demoUrl: "/hq-leathercon/index.html",
      },
      {
        industry: "Hospitality Groups Using Plugin Menus",
        description: "Swap heavy PDF/WordPress restaurant themes for direct ordering and allergen filter UX.",
        exampleProject: "HotBite Menu Concept",
        demoUrl: "/hotbite/index.html",
      },
    ],
    process: [
      {
        step: "Step 01",
        title: "URL Inventory & Plugin Deconstruction",
        description: "Export your sitemap, inspect ranked URLs, and identify every WordPress plugin to replace natively.",
        duration: "Day 1–2",
      },
      {
        step: "Step 02",
        title: "CMS Schema & Content Import",
        description: "Set up Sanity CMS or clean Git MDX files and run automated parsing of posts, tags, and media.",
        duration: "Day 3–4",
      },
      {
        step: "Step 03",
        title: "Next.js Frontend & 301 Map Build",
        description: "Build crisp modern templates, wire dynamic blog/service routing, and bake in exact 301 redirect rules.",
        duration: "Day 5–8",
      },
      {
        step: "Step 04",
        title: "Staging Audit & Zero-Downtime Switch",
        description: "Check every internal link and HTTP 301 response, switch DNS cleanly, and decommission vulnerable WP servers.",
        duration: "Day 9–10",
      },
    ],
    techStack: [
      { name: "Next.js 16 ISR", role: "Instant Static Revalidation" },
      { name: "Sanity CMS / MDX", role: "Structured Visual Editing" },
      { name: "WPGraphQL (Optional)", role: "Keep Existing WP Admin Backend" },
      { name: "next.config Redirects", role: "Edge 301 SEO Map" },
      { name: "Resend / Form Actions", role: "Replace WP Mail / SMTP" },
      { name: "Tailwind CSS", role: "Zero Page-Builder Markup" },
    ],
    caseStudies: [
      {
        title: "Long-Form Regulatory Content Hub Architecture",
        category: "Headless Editorial Pattern",
        description: "Our own technical library model: clean TOC anchors, structured schemas, fast route switching across 160+ guides.",
        tech: ["Next.js", "Dynamic Slugs", "Zero DB Latency"],
        metrics: "Reference Architecture",
        demoUrl: "/blogs",
      },
      {
        title: "Studio Agency Re-Architecture Concept",
        category: "Elementor Replacement",
        description: "Heavy scripted visual effects rebuilt smoothly into React components without WordPress theme overhead.",
        tech: ["Tailwind CSS", "React 19", "Smooth Motion"],
        metrics: "Interactive Demo",
        demoUrl: "/demos/studio-dbrickell/index.html",
      },
      {
        title: "Medical Clinic Static Transition",
        category: "Zero-Vuln Practice Site",
        description: "Eliminates PHP plugin vulnerabilities for clinics prioritizing fast booking conversion.",
        tech: ["Static Edge", "Clean Semantics", "WhatsApp CTA"],
        metrics: "Interactive Demo",
        demoUrl: "/demos/medspa/index.html",
      },
    ],
    competitorComparison: {
      overline: "CMS PATH COMPARISON",
      title: "Monolithic WordPress vs",
      titleMuted: "Next.js + Headless CMS",
      subtitle:
        "Decoupling gives marketing editors a clean writing studio while giving engineers complete control over speed and security.",
      columns: ["Operational Factor", "Next.js 16 + Sanity / MDX / Headless", "Monolithic WordPress + Elementor"],
      rows: [
        {
          criteria: "Core Web Vitals & DOM Depth",
          saim: "Shallow clean JSX tags; fast mobile LCP & low INP",
          alternative: "Deep nested builder containers + blocking jQuery/CSS",
        },
        {
          criteria: "Monthly Hosting & Maintenance",
          saim: "Clean free/low-tier serverless tiers; zero security plugin subscriptions",
          alternative: "Managed WP hosting (£30–£120/mo) + paid firewall/backup plugins",
        },
        {
          criteria: "Malware & Ransomware Surface",
          saim: "No public PHP/SQL endpoint on frontend routes",
          alternative: "Continual risk from outdated third-party plugins",
        },
        {
          criteria: "Can Editors Still Preview Drafts?",
          saim: "Yes — private live draft preview links via Sanity / ISR",
          alternative: "In-WP preview mixed with broken cache states",
        },
      ],
    },
    engineeringChecklist: {
      title: "SEO-Safe WordPress Offboarding Checklist",
      subtitle:
        "Every migration executes these safeguards so existing backlinks and Google indexation transfer cleanly:",
      items: [
        "Export full XML sitemap and Google Search Console top-landing URL list pre-migration",
        "Strip legacy page-builder shortcodes ([et_pb_*], [vc_*]) cleanly from migrated copy",
        "Map all old /category/*, /tag/*, or attachment URLs via permanent 301 edge rules",
        "Preserve or upgrade existing SEO <title>, meta description, and alt attributes",
        "Configure Contact Form / Quote routing without fragile WP SMTP relay plugins",
        "Verify canonical domain (www vs non-www) and zero broken internal images post-cutover",
      ],
    },
    pricing: [
      {
        name: "Brochure WP Escape",
        price: "£550",
        description: "Migrate up to 10 WordPress marketing pages onto ultra-fast Next.js 16 with clean typed data.",
        features: [
          "Up to 10 pages converted to clean Next.js",
          "Modern visual layout refresh included",
          "301 redirect map & full meta preservation",
          "Clean native contact & WhatsApp forms",
          "Zero ongoing plugin maintenance needed",
          "14 days post-launch technical support",
        ],
      },
      {
        name: "Headless Blog & Growth",
        price: "£950",
        description: "Migrate marketing site + up to 50 blog posts into Sanity CMS or MDX with live preview.",
        popular: true,
        features: [
          "Full Sanity Studio or Git MDX setup",
          "Automated import of up to 50 WP posts & media",
          "Category, tag & TOC article rendering",
          "On-demand ISR webhook publishing",
          "301 redirect audit & Search Console checks",
          "30 days dedicated support + video guide",
        ],
      },
      {
        name: "Custom CMS / WP-GraphQL",
        price: "£1,650",
        description: "Large content libraries (50–500+ posts), custom post types, or decoupled Headless WP GraphQL.",
        features: [
          "Custom Sanity schemas or WPGraphQL bridge",
          "Batch script migration for 500+ archive URLs",
          "Dynamic search, filter, and gated resources",
          "Full CI/CD pipeline & Cloudflare edge tuning",
          "Dedicated launch coordination call",
          "30 days priority support",
        ],
      },
    ],
    whyChooseUs: [
      {
        title: "Keep Your Team Publishing",
        desc: "If your staff already knows WordPress or wants an even cleaner editor like Sanity Studio, publishing remains effortless.",
      },
      {
        title: "Strict SEO Migration Discipline",
        desc: "We never casually change URL slugs without automated 301 rules protecting historical Google equity.",
      },
      {
        title: "Stop Paying WordPress Tax",
        desc: "Say goodbye to Elementor Pro, WP Rocket, Wordfence, and bloated managed hosting renewals.",
      },
      {
        title: "Clean Redesign Built In",
        desc: "Never move an ugly 2018 layout line-for-line — we tighten spacing, mobile typography, and dark/light hierarchy cleanly.",
      },
      {
        title: "Real Database Freedom",
        desc: "Export clean structured JSON or markdown content rather than proprietary database tables.",
      },
      {
        title: "Tested Before DNS Changes",
        desc: "Your WordPress site remains untouched online while you test every route on a private preview link.",
      },
    ],
    testimonials: [
      {
        quote: "Illustrative target scenario: A B2B consultancy escaping 18 conflicting plugins on Elementor onto Sanity CMS + Next.js with full historical blog preservation.",
        client: "Content-Driven UK Consultancy",
        role: "Migration Scenario",
        company: "Reference Specification",
      },
      {
        quote: "Illustrative target scenario: A medical practice retaining private backend editorial approvals while shifting frontend visitor traffic onto cached static pages.",
        client: "Multi-Site Clinic Group",
        role: "Migration Scenario",
        company: "Reference Specification",
      },
      {
        quote: "Illustrative target scenario: A high-publishing news/resource site moving 150+ long-form guides into clean MDX routes with near-instant page switches.",
        client: "Specialist Publisher",
        role: "Migration Scenario",
        company: "Reference Specification",
      },
    ],
    faqs: [
      {
        question: "Will I lose my Google rankings when moving off WordPress?",
        answer:
          "No, provided URL structure and metadata are mapped methodically. We preserve identical slugs wherever structured well, match title/meta/canonical signals, and add explicit permanent 301 rules for every retired path.",
      },
      {
        question: "Should I pick Sanity Studio, MDX, or Headless WordPress?",
        answer:
          "Sanity Studio is best for non-technical marketing teams wanting a clean browser CMS with zero plugin risk. MDX works brilliantly for technical teams wanting zero external CMS accounts. Headless WP fits organisations mandated to keep their existing wp-admin login.",
      },
      {
        question: "What happens to Contact Form 7, Gravity Forms, and Yoast SEO?",
        answer:
          "We replace them natively inside Next.js — forms submit securely via API routes directly to email/CRM without PHP mail issues, and Yoast titles/schemas are replaced cleanly by native Next.js Metadata & JSON-LD.",
      },
      {
        question: "Can I keep using my Microsoft 365 / Google Workspace business email?",
        answer:
          "Yes. Migrating your website server never touches MX, SPF, DKIM, or DMARC DNS email records unless specifically requested.",
      },
      {
        question: "What if my WordPress site uses WooCommerce?",
        answer:
          "We either migrate your store to Stripe Checkout / headless architecture on our eCommerce package or keep WooCommerce strictly on a headless checkout subdomain.",
      },
    ],
    finalCta: {
      headline: "Stop Patching Fragile WordPress Plugins Every Month",
      description:
        "Send your current WordPress URL. We inspect your sitemap, plugins, and URL inventory to send a fixed migration quote with zero-downtime cutover plan.",
      primaryButtonText: "Request WP Migration Audit",
      whatsappText: "WordPress to Next.js Migration",
    },
    relatedServices: [
      {
        name: "Core Web Vitals Speed Fix",
        href: "/services/website-speed-optimization",
        desc: "Tune an existing React/Next.js or site bottleneck without full migration.",
      },
      {
        name: "Technical & Local SEO",
        href: "/services/seo-services",
        desc: "Post-migration structured schema, canonicals, and entity graph checks.",
      },
      {
        name: "Website Redesign UK",
        href: "/services/website-redesign",
        desc: "Full brand & UX modernisation for older websites on any platform.",
      },
    ],
  },

  // ==============================================================
  // 4. CUSTOM WEB APPS, PORTALS & SAAS MVPS
  // ==============================================================
  "custom-web-apps": {
    slug: "custom-web-apps",
    serviceName: "Custom Web Apps & SaaS MVPs",
    mainKeyword: "Custom Web Application Development",
    seoTitle: "Custom Web Apps & SaaS MVPs UK | Next.js 16 | Saim Dev",
    seoDescription:
      "Custom full-stack web applications, client portals, quote calculators and SaaS MVPs built with Next.js, TypeScript, Supabase Auth and Stripe webhooks.",
    canonicalUrl: "https://www.saimdev.site/services/custom-web-apps",
    badge: "Full-Stack TypeScript Software",
    h1: "Custom Web Applications, Client Portals & SaaS MVPs — Engineered in Strict TypeScript",
    subheading:
      "Turn spreadsheets, internal processes, or startup concepts into fast interactive web software. Authenticated Supabase/PostgreSQL backends, role-based dashboards, interactive quote calculators, PDF generators, and Stripe billing webhooks.",
    primaryCtaText: "Discuss Your Web App Scope",
    secondaryCtaText: "Test Interactive Calculators",
    stripLabel: "Full-Stack App Engineering",
    stripItems: [
      {
        label: "Live Client Tools",
        tag: "Proof",
        tagValue: "Interactive UI",
        summary: "Inspect our live allergen matrix, PPDS label PDF generator, and cost calculators right on site.",
        href: "/tools",
      },
      {
        label: "Auth & RBAC Security",
        tag: "Database",
        tagValue: "Supabase RLS",
        summary: "Row-level database isolation, magic links/OAuth, and server-side session verification.",
        href: "/technologies",
      },
      {
        label: "Stripe Subscriptions",
        tag: "Monetisation",
        tagValue: "Webhooks + VAT",
        summary: "Idempotent Checkout, customer billing portals, seat provisioning, and failed-payment handling.",
        href: "/services/ecommerce-development",
      },
      {
        label: "Zero Seat Tax",
        tag: "Economics",
        tagValue: "Owned IP",
        summary: "No per-user Bubble/Retool subscription spikes as your customer or staff count scales.",
        href: "/pricing",
      },
      {
        label: "PDF & Data Exports",
        tag: "Workflow",
        tagValue: "Client-Side / API",
        summary: "Generate crisp branded labels, invoices, CSVs, and compliance reports straight in browser.",
        href: "/tools/ppds-label-generator",
      },
    ],
    painPoints: [
      {
        problem: "Operations still rely on brittle shared Excel/Google Sheets that staff accidentally overwrite or break.",
        solution: "A role-based Next.js web portal enforces strict field validation, audit trails, and clean mobile access across teams.",
      },
      {
        problem: "No-code builders like Bubble hit severe performance walls, workload limits, and proprietary database lock-in.",
        solution: "Standard PostgreSQL, React 19, and REST/Server Action endpoints scale cleanly with portable SQL ownership.",
      },
      {
        problem: "Offshore software quotes drag out over 6–9 months before founders even test user onboarding.",
        solution: "We scope tight v1 MVPs delivered cleanly in 2–4 week milestones so real users validate workflows fast.",
      },
      {
        problem: "Untyped prototype APIs cause silent billing discrepancies and fragile edge states.",
        solution: "Zod runtime schema validation paired with strict TypeScript checks every payload at client and server boundary.",
      },
    ],
    problemSection: {
      overline: "01 / SOFTWARE BOTTLENECKS",
      titleBefore: "Moving Beyond",
      titleStrike: "no-code workload caps",
      titleOwned: "To Owned Full-Stack Software.",
      subtitle:
        "No-code tools work for quick mockups, then become expensive bottlenecks once paying users arrive. Owned TypeScript codebases scale cleanly without proprietary runtime ceilings.",
      solutionTag: "FULL-STACK NEXT.JS SOFTWARE",
      solutionTitle: "PostgreSQL + TypeScript + Edge API Routes",
      solutionDesc:
        "From self-service customer portals and bespoke quote calculators to paid SaaS subscriptions, we build crisp responsive web apps anchored by clean database schemas.",
      solutionMetrics: [
        { value: "RLS", label: "Row-Level Security" },
        { value: "Zod", label: "Strict Validation" },
        { value: "100%", label: "Source Ownership" },
      ],
      chartTitle: "Scaling Flexibility: No-Code vs Owned TypeScript Stack",
      chartBadge: "Software Benchmark",
      chartYAxis: "Portability & Throughput",
      chartXAxis: "App Foundation",
      chartCaption:
        "Postgres + Next.js App Router removes vendor workload pricing while maintaining sub-second interface response.",
      bars: [
        {value: "42", label: "Spreadsheets", heightPx: 74},
        {value: "56", label: "Bubble / No-Code", heightPx: 112},
        {value: "78", label: "Legacy Monolith", heightPx: 150},
        {value: "98", label: "Next.js + Postgres", isHighlight: true, heightPx: 192},
      ],
    },
    deliverables: [
      {
        title: "Database Schema & RLS Architecture",
        description: "Relational PostgreSQL models in Supabase/Neon with strict tenant isolation policies.",
      },
      {
        title: "Authentication & Role Dashboards",
        description: "Email, OAuth, or magic-link logins separating Admin, Staff, and Customer portal views cleanly.",
      },
      {
        title: "Interactive Calculators & Configurators",
        description: "Multi-variable quoting engines, recipe costing calculators, or custom product visualisers.",
      },
      {
        title: "Stripe Billing & Webhook Sync",
        description: "One-off charges, subscription upgrades, UK VAT invoicing links, and verified webhook handlers.",
      },
      {
        title: "Server Actions & API Layer",
        description: "Type-safe Next.js endpoints validating every input with Zod prior to database mutation.",
      },
      {
        title: "Print, CSV & PDF Export Engines",
        description: "Generate structured downloadable labels, invoices, or printable compliance sheets directly in client code.",
      },
    ],
    deliverablesMeta: {
      overline: "02 / APPLICATION LAYERS",
      title: "Full-Stack Scope for",
      titleMuted: "Web Apps & MVPs",
      subtitle:
        "Modular engineering layers delivered with readable schemas, environment docs, and repository handover.",
      rowTags: ["Full-Stack", "PostgreSQL / Auth", "Stripe Ready"],
    },
    sectionHeadings: {
      valueOverline: "03 / Engineering Precision",
      valueTitle: "Built Like Production Software,",
      valueMuted: "Scoped Like an MVP",
      marketOverline: "04 / Interactive Proof",
      marketTitle: "Web App Use Cases &",
      marketMuted: "Working Live Tools",
      processOverline: "05 / PRODUCT SPRINT CADENCE",
      processTitle: "Validated MVP",
      processMuted: "Build Stages",
      processSummary: "Data model & clickable screens agreed before full backend API implementation.",
      processStageTag: "PR & Staging Demo",
      stackOverline: "06 / SOFTWARE ARCHITECTURE",
      stackTitle: "Type-Safe From",
      stackMuted: "Postgres Row to UI Button",
      proofOverline: "07 / WORKING LIVE TOOLS ON SITE",
      proofTitle: "Inspect Real Web App",
      proofMuted: "Engineering Live",
      pricingOverline: "08 / FIXED SOFTWARE PACKAGES",
      pricingTitle: "Web App & MVP",
      pricingMuted: "Scope Tiers",
      pricingNote: "Milestone-based fixed quote • Clean IP transfer on final sign-off",
      pricingButtonText: "Scope Your Web App",
      advantageOverline: "09 / Why Ship Software With Us",
      advantageTitle: "Pragmatic Shipping Over",
      advantageMuted: "Over-Engineered Slides",
      feedbackOverline: "10 / Target Reference Scenarios",
      feedbackTitle: "Product & Portal",
      feedbackMuted: "Architecture Models",
      faqOverline: "11 / Software FAQ",
      faqIntro:
        "Questions covering IP ownership, database hosting under your account, Stripe webhooks, and Phase-2 expansion.",
      bannerTag: "Full IP Ownership • Postgres & TypeScript • Milestone Billing",
    },
    featuresAndBenefits: [
      {
        feature: "Zero Proprietary Runtime",
        benefit: "Export Any Time",
        description: "Runs cleanly on standard Node/Docker, Vercel, Railway, or AWS under your own credentials.",
      },
      {
        feature: "Client-First Optimistic UI",
        benefit: "Instant Tool Feedback",
        description: "Calculators, matrix filters, and table edits respond immediately rather than freezing on server waits.",
      },
      {
        feature: "Local Storage & DB Hybrid Sync",
        benefit: "Frictionless Onboarding",
        description: "Let prospects use interactive tools without forced login barriers, or persist across teams via DB.",
      },
      {
        feature: "Webhook Idempotency",
        benefit: "Reliable Payment State",
        description: "Guards against duplicate events, partial upgrades, or out-of-order Stripe delivery retries.",
      },
      {
        feature: "Accessible Keyboard & Form States",
        benefit: "Higher Task Completion",
        description: "Inline validation, error states, and focus management built properly across complex multi-step flows.",
      },
      {
        feature: "Modular API Endpoints",
        benefit: "Ready for Mobile Apps Later",
        description: "Clean JSON boundaries make adding future iOS/Android or Zapier integrations straightforward.",
      },
    ],
    industries: [
      {
        industry: "SaaS & Micro-Tool Startups",
        description: "Subscription utilities, industry compliance calculators, and niche workflow apps.",
        exampleProject: "PPDS Label Web App",
        demoUrl: "/tools/ppds-label-generator",
      },
      {
        industry: "B2B Client & Project Portals",
        description: "Branded login areas for clients to approve files, pay invoices, or track dispatch status.",
        exampleProject: "Studio Portal Concept",
        demoUrl: "/demos/studio-dbrickell/index.html",
      },
      {
        industry: "Hospitality Margin & Compliance Tools",
        description: "Costing, allergen matrices, and batch scaling tools built cleanly for UK kitchens.",
        exampleProject: "Recipe Batch Calculator",
        demoUrl: "/tools/recipe-batch-calculator",
      },
      {
        industry: "Custom Product Configurators",
        description: "Interactive SKU builders calculating size, leather trim, customisation add-ons, and instant checkout.",
        exampleProject: "Custom Jacket Builder",
        demoUrl: "/hq-leathercon/products/custom-leather-jacket-builder/index.html",
      },
      {
        industry: "Service Booking & Quoting Engines",
        description: "Dynamic postcode/room/unit calculators routing clean pre-qualified leads to your team.",
        exampleProject: "Takeaway Savings Estimator",
        demoUrl: "/services/takeaway-web-design-london",
      },
      {
        industry: "Compliance & Template Marketplaces",
        description: "Searchable high-volume interactive libraries with printable downloads and category filtering.",
        exampleProject: "160+ Template Library",
        demoUrl: "/tools",
      },
    ],
    process: [
      {
        step: "Step 01",
        title: "Data Model & User Flows Spec",
        description: "Define user roles, database tables, edge states, API integrations, and fixed MVP scope boundaries.",
        duration: "Day 1–3",
      },
      {
        step: "Step 02",
        title: "Interactive UI Prototype & Auth Shell",
        description: "Assemble dashboards, primary forms, validation states, and database migrations cleanly on staging.",
        duration: "Day 4–8",
      },
      {
        step: "Step 03",
        title: "Core Logic, Stripe & Export APIs",
        description: "Wire payments, permissions, calculations, PDF/CSV outputs, and transactional email alerts.",
        duration: "Day 9–16",
      },
      {
        step: "Step 04",
        title: "End-to-End Test Pass & Ownership Transfer",
        description: "Security/RLS check, edge case testing, production deployment under your accounts, and full code walkthrough.",
        duration: "Day 17–21",
      },
    ],
    techStack: [
      { name: "Next.js 16 App Router", role: "Full-Stack Server Actions" },
      { name: "TypeScript + Zod", role: "Strict Runtime Validation" },
      { name: "Supabase / PostgreSQL", role: "Auth, Storage & Row Security" },
      { name: "Stripe API & Webhooks", role: "Subscriptions & Checkout" },
      { name: "React 19", role: "Reactive Portal Interfaces" },
      { name: "Tailwind CSS", role: "Accessible App UI Components" },
    ],
    caseStudies: [
      {
        title: "Natasha's Law PPDS Label & Allergen Suite",
        category: "Live Production Web App",
        description: "Working client-side browser application generating compliant UK food labels with all 14 allergens bolded live.",
        tech: ["React 19", "LocalState", "Print Engine"],
        metrics: "Live on Site",
        demoUrl: "/tools/ppds-label-generator",
      },
      {
        title: "Recipe Batch & Commercial Food Costing Engine",
        category: "Interactive Calculation App",
        description: "Real-time unit conversion, VAT stripping, yield waste calculation, and target GP% pricing calculator.",
        tech: ["TypeScript", "Local Persistence", "Mobile UX"],
        metrics: "Live on Site",
        demoUrl: "/tools/recipe-batch-calculator",
      },
      {
        title: "Bespoke Leather Jacket Product Configurator",
        category: "Interactive Customizer",
        description: "Multi-step interactive customisation concept handling measurements, styles, and purchase state.",
        tech: ["React UI", "State Management", "eCommerce Flow"],
        metrics: "Interactive Demo",
        demoUrl: "/hq-leathercon/products/custom-leather-jacket-builder/index.html",
      },
    ],
    competitorComparison: {
      overline: "ARCHITECTURE SELECTION",
      title: "Owned Next.js Web App vs",
      titleMuted: "No-Code Bubble / SaaS Builders",
      subtitle:
        "See why serious operators prefer portable Postgres and TypeScript over closed no-code ecosystems.",
      columns: ["Software Criterion", "Saim Dev Custom Web App", "No-Code / Proprietary App Builders"],
      rows: [
        {
          criteria: "Database & Backend Portability",
          saim: "Standard SQL / PostgreSQL you can export or self-host anytime",
          alternative: "Closed proprietary data schemas requiring complete rebuild to leave",
        },
        {
          criteria: "Calculation & UI Responsiveness",
          saim: "Native TypeScript execution in browser; instant slider/calculator updates",
          alternative: "Noticeable server round-trip spinners on complex state logic",
        },
        {
          criteria: "Per-User / Workload Costs",
          saim: "Direct predictable cloud usage; zero extra tax per team seat",
          alternative: "Monthly tiers scaling steeply with workflow units and seats",
        },
        {
          criteria: "Investor & Due-Diligence Value",
          saim: "Clean GitHub repo with clear licensing transfers company valuation",
          alternative: "Non-transferable no-code rental platform reduces asset defensibility",
        },
      ],
    },
    engineeringChecklist: {
      title: "Production Web Application Security & Quality Baseline",
      subtitle:
        "Built into our custom app sprints so you never launch fragile prototype code to real users:",
      items: [
        "All third-party API secrets isolated strictly in server-only environment handlers",
        "Zod request validation & clean HTTP 4xx status handling across every API endpoint",
        "Zero sensitive personal data stored unauthenticated in client URLs or public logs",
        "Deterministic responsive layouts checked at 360px mobile and 1440px desktop dashboards",
        "Clear loading, empty-state, and optimistic rollback UI for every asynchronous action",
        "Full .env.example specification and architectural README committed to your repository",
      ],
    },
    pricing: [
      {
        name: "Interactive Tool / Calc",
        price: "£950",
        description: "Custom interactive calculator, configurator, or embeddable lead/quote web utility.",
        features: [
          "Complex state logic, PDF/print, or CSV output",
          "Embeds cleanly into existing site or standalone",
          "Lead summary routing to WhatsApp / email",
          "Strict mobile usability & instant calculations",
          "3 rounds of UX tuning & test cases",
          "14 days post-launch technical support",
        ],
      },
      {
        name: "SaaS MVP / Client Portal",
        price: "£1,850",
        description: "Authenticated full-stack web application with PostgreSQL database, role dashboard, and billing.",
        popular: true,
        features: [
          "Supabase / PostgreSQL schema & RLS auth",
          "Admin + user dashboards & CRUD workflows",
          "Stripe Checkout & subscription webhook setup",
          "Transactional emails + CSV/PDF export",
          "Staging QA + full GitHub repo transfer",
          "30 days post-launch stabilisation support",
        ],
      },
      {
        name: "Multi-Tenant Platform",
        price: "£3,200",
        description: "Advanced B2B portals, multi-vendor dashboards, API integrations, or bespoke workflow platforms.",
        features: [
          "Organisation teams & multi-role RBAC",
          "Third-party webhook / ERP / Calendar sync",
          "Audit logging, automated tests & CI checks",
          "Custom reporting dashboards & exports",
          "Dedicated launch walkthrough & docs",
          "30 days priority engineering support",
        ],
      },
    ],
    whyChooseUs: [
      {
        title: "Verify Our Software Skill Live",
        desc: "Test our interactive Allergen Matrix, Food Cost Calculator, and PPDS Label Engine right here on saimdev.site.",
      },
      {
        title: "Strict MVP Focus",
        desc: "We help trim unnecessary bloat from v1 specs so your core revenue workflow ships in weeks, not quarters.",
      },
      {
        title: "Full Repository & Account Control",
        desc: "Your database, Stripe account, and GitHub codebase live under your credentials — never held hostage.",
      },
      {
        title: "Clean UX Micro-Details",
        desc: "Keyboard shortcuts, inline error hints, crisp print stylesheets, and fast state updates built naturally.",
      },
      {
        title: "Transparent Milestone Billing",
        desc: "Agreed written scope broken into clear deliverables with staged milestone sign-off.",
      },
      {
        title: "Seamless Marketing Integration",
        desc: "Your custom web app can share clean SEO landing pages under the exact same high-speed domain.",
      },
    ],
    testimonials: [
      {
        quote: "Illustrative target scenario: A UK trade firm moving off manual spreadsheets into a custom customer portal tracking survey photos, fixed quotes, and Stripe deposits.",
        client: "Regional Trade Operator",
        role: "Portal Scenario",
        company: "Reference Specification",
      },
      {
        quote: "Illustrative target scenario: A solo domain specialist turning industry expertise into a recurring subscription SaaS utility with member PDF generation.",
        client: "B2B SaaS Founder",
        role: "MVP Scenario",
        company: "Reference Specification",
      },
      {
        quote: "Illustrative target scenario: A supplier embedding an interactive pricing & specification configurator to cut tedious manual sales quoting calls.",
        client: "Custom Product Manufacturer",
        role: "Configurator Scenario",
        company: "Reference Specification",
      },
    ],
    faqs: [
      {
        question: "Who owns the source code and intellectual property once finished?",
        answer:
          "You own 100% of the custom codebase, database schemas, and UI assets cleanly transferred to your private GitHub repository on final milestone completion.",
      },
      {
        question: "Do we set up databases and Stripe under our own company logins?",
        answer:
          "Yes — Stripe, Supabase/Neon PostgreSQL, Resend, and Vercel/Cloudflare sit directly under your own accounts from day one so billing, keys, and customer data never pass through an agency middleman.",
      },
      {
        question: "Can an existing interactive demo or tool on saimdev.site be customised for our brand?",
        answer:
          "Yes. For example, hospitality suppliers, wholesalers, and compliance consultants often commission tailored versions of our costing, batch, or allergen calculators styled to their brand.",
      },
      {
        question: "How long does a typical MVP or client portal build take?",
        answer:
          "Interactive calculators ship in 5–10 days; full authenticated portals with database & Stripe billing typically run 2–4 weeks depending on API integrations.",
      },
      {
        question: "Can you add features in Phase 2 after our users start onboarding?",
        answer:
          "Yes. Because the repo uses clean TypeScript and modular folders, you can book fixed Phase-2 sprints with us or hand the repository straight to any in-house developer.",
      },
    ],
    finalCta: {
      headline: "Turn Your Process or SaaS Concept Into Fast, Ownable Software",
      description:
        "Send a short summary of user roles, inputs, and key outputs. We return a clean architectural recommendation and fixed milestone quote.",
      primaryButtonText: "Request Web App Proposal",
      whatsappText: "Custom Web App / SaaS MVP Build",
    },
    relatedServices: [
      {
        name: "Live Interactive UK Tools",
        href: "/tools",
        desc: "Test working React 19 calculation and label apps we built natively.",
      },
      {
        name: "Next.js eCommerce Stores",
        href: "/services/ecommerce-development",
        desc: "Custom storefronts with Stripe Checkout and product customisers.",
      },
      {
        name: "Next.js Website Development",
        href: "/services/website-development",
        desc: "High-speed marketing websites paired seamlessly with your app.",
      },
    ],
  },
};
