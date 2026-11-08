import { ServicePageData } from "@/components/services/ServicePageTemplate";

export const SERVICES_CATALOG: Record<string, ServicePageData> = {
  // ==============================================================
  // 1. WEBSITE & APP CLONE SERVICE ($1,900 FLAT)
  // ==============================================================
  "website-clone": {
    slug: "website-clone",
    serviceName: "Website & Web App Clone",
    mainKeyword: "Website Clone Services",
    seoTitle: "Pixel-Perfect Website & App Clone | $1,900 Flat | Saim Dev",
    seoDescription: "Clone any website or web app down to the pixel for $1,900 flat. 100% 1:1 identical match rebuilt in clean Next.js and Tailwind CSS. $0 upfront deposit.",
    canonicalUrl: "https://www.saimdev.site/services/website-clone",
    badge: "1:1 Pixel-Perfect Recreation",
    h1: "Duniya Ki Koi Bhi Website Ya App Clone Karwayein — 18/19 Ka Bhi Farq Nahi Hoga",
    subheading: "Flat $1,900 mein hum kisi bhi website ya web application ka 100% pixel-perfect Next.js clone bana kar dete hain. Clean component architecture, fluid animations, aur zero difference. $0 upfront deposit.",
    painPoints: [
      {
        problem: "Duplicating a modern site usually ends up looking like a cheap, broken knockoff with displaced margins and broken fonts.",
        solution: "We reconstruct the entire DOM, typography, color palette, and responsiveness pixel-by-pixel so there is zero visible difference."
      },
      {
        problem: "Cloned sites often copy messy third-party tracker scripts and sluggish legacy code.",
        solution: "We rebuild every view from scratch into pristine, modular Next.js 15 Server Components and Tailwind CSS classes."
      },
      {
        problem: "Complex interactive states (dropdowns, drawers, accordions, micro-animations) stop working in amateur clones.",
        solution: "All interactive states are engineered with Framer Motion and native TypeScript for ultra-smooth 60fps interaction."
      },
      {
        problem: "Agencies charge $5,000–$15,000 and months of time just to reverse-engineer an existing design.",
        solution: "We provide an unnegotiable flat price of $1,900 USD delivered in 7 to 10 days with complete code ownership."
      },
      {
        problem: "Risk of paying thousands upfront and receiving a half-finished, disappointing clone.",
        solution: "Our $0 Upfront Guarantee: We build the live preview first. Inspect it on your phone and laptop. Pay only if 100% satisfied."
      }
    ],
    deliverables: [
      { title: "100% Exact 1:1 Layout Match", description: "Every margin, padding, typography scale, and layout hierarchy matched with zero deviation." },
      { title: "Next.js & React 19 Architecture", description: "Modern modular codebase engineered for sub-second page loads and complete scalability." },
      { title: "Tailwind CSS Componentization", description: "Zero messy inline CSS. Clean, responsive Tailwind utility classes ready for future styling updates." },
      { title: "Fluid Micro-Interactions", description: "Smooth modal drawers, accordions, sticky headers, and hover animations mirrored with Framer Motion." },
      { title: "Mobile & Tablet Optimization", description: "Meticulously tested across iPhone, Android, iPad, and 4K desktop viewports." },
      { title: "Asset Extraction & HD Upgrade", description: "All SVG icons, vector assets, and brand graphics extracted and upgraded to sharp Retina master resolution." },
      { title: "Form & Lead Routing Integration", description: "Contact forms and checkout redirects routed directly to your WhatsApp, CRM, or email inbox." },
      { title: "100% Source Code Ownership", description: "Full GitHub repository handover with zero vendor lock-in or recurring monthly licensing fees." }
    ],
    featuresAndBenefits: [
      { feature: "Pixel-Perfect Precision", benefit: "Zero Visual Discrepancy", description: "Your clients and users cannot tell the clone apart from the original reference design." },
      { feature: "Modern Next.js Stack", benefit: "Sub-Second Load Times", description: "Replaces sluggish legacy architectures with static-edge rendering and instant caching." },
      { feature: "$0 Upfront Guarantee", benefit: "Zero Financial Risk", description: "We build and deploy the staging preview before you transfer a single penny." },
      { feature: "Flat $1,900 Pricing", benefit: "No Budget Creep", description: "Complete project scope locked at $1,900 with no hidden hourly surcharges or surprises." },
      { feature: "Clean Modular Components", benefit: "Effortless Future Edits", description: "Easily modify texts, images, and brand elements whenever your business evolves." },
      { feature: "Zero Monthly Fees", benefit: "One-Time Investment", description: "Host for free on Vercel or your own server without paying monthly agency retainers." }
    ],
    industries: [
      { industry: "SaaS & Landing Pages", description: "Clone world-class venture-backed SaaS landing pages with interactive UI demos and pricing tiers.", exampleProject: "Studio D'Brickell", demoUrl: "/demos/studio-dbrickell/index.html" },
      { industry: "Luxury & Fashion Brands", description: "Replicate high-end minimalist luxury brand experiences with custom carousels and smooth scroll.", exampleProject: "Atelier Noir", demoUrl: "/demos/atelier-noir/index.html" },
      { industry: "E-Commerce Flagships", description: "Clone comprehensive multi-category online stores with filtering, swatches, and cart drawers.", exampleProject: "HQ Leathercon", demoUrl: "/hq-leathercon/index.html" },
      { industry: "Salons & High-End Spas", description: "Replicate elegant wellness and beauty booking platforms with service catalogs and reviews.", exampleProject: "Valèria Salon", demoUrl: "/demos/valeria/index.html" },
      { industry: "Architecture & Studios", description: "Clone portfolio grid layouts with dynamic project inspection and architectural aesthetics.", exampleProject: "Architecture Studio", demoUrl: "/demos/architecture/index.html" },
      { industry: "Restaurants & Takeaways", description: "Clone high-converting restaurant menus with live categories and instant WhatsApp dispatch.", exampleProject: "HotBite Street Food", demoUrl: "/hotbite/index.html" }
    ],
    process: [
      { step: "Step 01", title: "Target URL Review", description: "You provide the reference website or app link with any specific customization notes.", duration: "Day 1" },
      { step: "Step 02", title: "Asset & Structure Extraction", description: "We analyze the DOM, extract graphics, and set up the Next.js component hierarchy.", duration: "Day 2–3" },
      { step: "Step 03", title: "Full Next.js Build", description: "We engineer all pages, styles, micro-animations, and responsive breakpoints.", duration: "Day 4–7" },
      { step: "Step 04", title: "Live Staging Review", description: "You test the live staging URL. We refine any detail until you are 100% thrilled.", duration: "Day 8–9" },
      { step: "Step 05", title: "Handover & Launch", description: "You approve the build, finalize payment, and receive full repository ownership.", duration: "Day 10" }
    ],
    techStack: [
      { name: "Next.js 15", role: "App Router & Edge Speed" },
      { name: "React 19", role: "Component Architecture" },
      { name: "TypeScript", role: "Type-Safe Robust Code" },
      { name: "Tailwind CSS", role: "Utility Responsive Styling" },
      { name: "Framer Motion", role: "60fps Fluid Interactions" },
      { name: "Node.js", role: "API & Data Layer" }
    ],
    caseStudies: [
      {
        title: "HQ Leathercon Luxury Storefront",
        category: "E-Commerce Clone",
        description: "Rebuilt a multi-thousand product Shopify luxury leather storefront into a sub-second static Next.js flagship.",
        tech: ["Next.js", "Tailwind CSS", "JavaScript", "Responsive UI"],
        metrics: "100% 1:1 Match",
        demoUrl: "/hq-leathercon/index.html"
      },
      {
        title: "Valèria Luxury Beauty Studio",
        category: "Salon & Spa Clone",
        description: "Exact pixel-perfect recreation of a multi-page Framer luxury beauty salon with full mobile drawer.",
        tech: ["Next.js", "Framer Engine", "Tailwind CSS"],
        metrics: "0 Framer CDN Lag",
        demoUrl: "/demos/valeria/index.html"
      },
      {
        title: "Architecture & Interior Studio",
        category: "Portfolio Clone",
        description: "15-page architectural firm showcase cloned with ultra-clean typographic rhythm and image galleries.",
        tech: ["Next.js", "Tailwind CSS", "TypeScript"],
        metrics: "Sub-Second Nav",
        demoUrl: "/demos/architecture/index.html"
      }
    ],
    pricing: [
      {
        name: "Standard Website Clone",
        price: "$1,900 USD",
        description: "Complete 1:1 pixel-perfect recreation of any business website or landing experience.",
        badge: "Most Popular",
        popular: true,
        features: [
          "Up to 10 Complete Pages Cloned",
          "100% Exact 1:1 Visual Match",
          "Clean Next.js & Tailwind CSS Code",
          "Mobile, Tablet & Desktop Responsive",
          "Micro-Animations & Smooth Scroll",
          "Contact Forms & WhatsApp Routing",
          "All Assets Upgraded to Retina HD",
          "Full GitHub Source Code Handover",
          "$0 Upfront Deposit (Pay When Happy)",
          "14 Days Post-Launch Warranty"
        ]
      },
      {
        name: "Single Landing Page Clone",
        price: "$950 USD",
        description: "Pixel-perfect clone of a single high-converting SaaS, marketing, or campaign landing page.",
        features: [
          "1 Full Landing Page with all sections",
          "100% Exact Visual & Interactive Match",
          "Next.js App Router Static Export",
          "Lead Capture Form Integration",
          "Sub-Second Mobile Load Times",
          "Zero Monthly Hosting Lock-In",
          "$0 Upfront Commitment"
        ]
      },
      {
        name: "Large E-Commerce / Multi-View Clone",
        price: "$2,800 USD",
        description: "Deep cloning of complex multi-category storefronts or multi-view client dashboards.",
        features: [
          "Up to 25 Unique Page Layouts",
          "Product Filtering & Dynamic Catalog",
          "Cart Drawer & Checkout Flow Integration",
          "Full SEO Metadata & Rich Schemas",
          "Priority 7-Day Turnaround",
          "30 Days Dedicated Engineering Support",
          "$0 Upfront Deposit"
        ]
      }
    ],
    whyChooseUs: [
      { title: "Zero Guesswork (18/19 Ka Bhi Farq Nahi)", desc: "We match typography, responsive breakpoints, and animations down to the exact pixel so the clone is indistinguishable from the master." },
      { title: "No Upfront Risk", desc: "You do not pay a single dollar until the live staging preview is ready and you inspect it with your own eyes." },
      { title: "No Monthly Fees Ever", desc: "No recurring agency retainers, no CMS licenses, no hidden costs. Pay once, own 100% of the code forever." },
      { title: "UK Registered Agency", desc: "Professional accountability with an agency registered in the United Kingdom and senior engineering talent based in Pakistan." },
      { title: "Blazing Fast Next.js Engine", desc: "We eliminate bloated WordPress themes, jQuery chains, and slow third-party scripts to deliver 100/100 Core Web Vitals." },
      { title: "Direct WhatsApp Engineering Access", desc: "Communicate directly with the senior engineer building your site with zero account manager bureaucracy." }
    ],
    testimonials: [
      {
        quote: "Mene aik luxury UK brand ki website ka link diya tha. Saim ne 8 din mein exact 1:1 Next.js clone bna kr dikhaya. Har hover effect aur responsive layout bilkul same tha aur speed original se 3x zyada tez thi!",
        client: "Hamza R.",
        role: "Managing Director",
        company: "E-Commerce House UK"
      },
      {
        quote: "The zero upfront offer gave us complete confidence. He delivered a flawless staging site before taking payment. Best $1,900 investment we ever made.",
        client: "Marcus V.",
        role: "Digital Founder",
        company: "Veritas Ventures London"
      },
      {
        quote: "WordPress developers quoted us £6,000 and 6 weeks. SaimDev rebuilt the entire platform in Next.js within 9 days flat with zero bugs.",
        client: "Sophia T.",
        role: "Creative Director",
        company: "Studio D'Brickell Agency"
      }
    ],
    faqs: [
      {
        question: "How accurate is the clone? Will there be differences?",
        answer: "There is zero noticeable difference (18/19 ka bhi farq nahi hoga). We inspect every CSS rule, computed dimension, font weight, color hex, and animation curve to replicate the reference site 100% down to the exact pixel."
      },
      {
        question: "How does your $0 upfront guarantee work?",
        answer: "You provide the reference link and requirements. We build the full website or application clone on our private staging server. You test it on your laptop and phone. If you are 100% satisfied, you purchase the project. If you are not satisfied, you owe us nothing."
      },
      {
        question: "Do you build the clone on WordPress or Shopify?",
        answer: "No. We build exclusively with modern Next.js 15, React 19, and Tailwind CSS. This guarantees your site will load in under 500 milliseconds, have zero security vulnerabilities, and never require monthly plugin fees or updates that break your theme."
      },
      {
        question: "Can I customize texts, logos, and images later?",
        answer: "Absolutely. Everything is written as clean, modular React components. We can swap in your brand name, logo, products, and contact details during the build, and the code is structured so any developer or editor can update it effortlessly."
      },
      {
        question: "Are there any monthly charges or hidden costs?",
        answer: "Zero. We do not charge monthly retainers or subscription fees. You pay the flat $1,900 once and get 100% source code ownership. Hosting on Vercel is free for standard traffic."
      },
      {
        question: "What is the typical turnaround time?",
        answer: "Standard website clones take between 7 to 10 calendar days. Single-page landing clones are typically ready in 3 to 5 days."
      }
    ],
    finalCta: {
      headline: "Duniya Ki Kisi Bhi Website Ka 1:1 Clone Banwayein",
      description: "Send us the link of the website or web app you want cloned. We will build the live preview first with $0 upfront. Pay only if you love it.",
      primaryButtonText: "Claim Your $0 Upfront Clone ($1,900 Flat)",
      whatsappText: "I want to clone a website for $1,900 with $0 upfront"
    },
    relatedServices: [
      { name: "Custom Next.js Web Development", href: "/services/business-websites", desc: "Bespoke company websites built without slow WordPress bloat." },
      { name: "Next.js Headless eCommerce", href: "/services/ecommerce-shopify", desc: "Custom online stores with zero monthly Shopify app subscriptions." },
      { name: "High-Converting Landing Pages", href: "/services/landing-pages-cro", desc: "Sub-second CRO landing engines built for paid ads." }
    ]
  },

  // ==============================================================
  // 2. WEBSITE DEVELOPMENT (NEXT.JS WP ALTERNATIVE)
  // ==============================================================
  "website-development": {
    slug: "website-development",
    serviceName: "Next.js Website Development",
    mainKeyword: "Website Development Services",
    seoTitle: "Bespoke Next.js Website Development Services | Saim Dev",
    seoDescription: "Custom Next.js website development for ambitious businesses. Escape slow WordPress bloat with sub-second speeds, built-in SEO, and $0 upfront guarantee.",
    canonicalUrl: "https://www.saimdev.site/services/website-development",
    badge: "Next.js over WordPress",
    h1: "Bespoke Next.js Website Development Services — Fast, Scalable, Zero WordPress Bloat",
    subheading: "Hum outdated WordPress plugins ya slow PHP par kaam nahi karte. Hum custom Next.js websites engineer karte hain jo 500ms se kam mein load hoti hain, Google par top rank karti hain aur zero monthly retainers ke sath aati hain.",
    painPoints: [
      {
        problem: "WordPress websites rely on 30+ fragile plugins that break on every update and create critical security vulnerabilities.",
        solution: "We build custom, monolithic Next.js static websites with zero external plugin dependencies and unhackable edge delivery."
      },
      {
        problem: "Slow load times (3s to 8s) cause 53% of mobile visitors to bounce before seeing your offer.",
        solution: "Next.js edge rendering delivers sub-500ms initial load times and instant instant page transitions with 100/100 Google PageSpeed."
      },
      {
        problem: "Generic pre-bought templates look identical to competitors and fail to convey brand authority.",
        solution: "100% custom UI/UX design tailored specifically to your unique business offerings, typography, and customer journey."
      },
      {
        problem: "Poor mobile responsiveness and layout shifts damage Google rankings and irritate mobile visitors.",
        solution: "Engineered mobile-first with Tailwind CSS, strictly passing Google Core Web Vitals (LCP < 1.2s, CLS = 0)."
      },
      {
        problem: "Expensive agency retainers that trap your business into £100–£500/month recurring maintenance contracts.",
        solution: "Zero monthly charges. You pay a one-time fixed price and own 100% of your source code and assets forever."
      }
    ],
    deliverables: [
      { title: "Custom UI/UX Architecture", description: "Bespoke, brand-aligned visual design with zero generic drag-and-drop templates." },
      { title: "Next.js 15 App Router Build", description: "Production-grade React architecture with static generation and server-side optimization." },
      { title: "Technical On-Page SEO", description: "Semantic HTML5, automated dynamic sitemaps, robots.txt, and complete Schema.org JSON-LD." },
      { title: "Ultra-Fast Mobile Layouts", description: "Tested fluid layouts across all iOS and Android smartphone resolutions." },
      { title: "Interactive Lead Capture Forms", description: "Instant notifications sent directly to your WhatsApp, CRM, or business email." },
      { title: "Lighthouse 95+ Performance", description: "Optimized WebP/AVIF images, zero unused JavaScript, and instant caching." },
      { title: "Hosting & SSL Deployment", description: "Free global edge deployment on Vercel with automatic SSL and zero maintenance overhead." },
      { title: "Full Codebase Ownership", description: "Full GitHub repository rights with clean, documented TypeScript code." }
    ],
    featuresAndBenefits: [
      { feature: "Custom Next.js Engine", benefit: "Unhackable Security", description: "No database vulnerability or plugin backdoors common to WordPress installations." },
      { feature: "Sub-Second Edge Delivery", benefit: "Higher Conversion Rates", description: "Visitors browse instantly without waiting, leading to higher engagement and more enquiries." },
      { feature: "Zero Monthly Fees", benefit: "No Recurring Trap", description: "Save thousands of pounds annually on agency maintenance retainers." },
      { feature: "$0 Upfront Guarantee", benefit: "100% Risk Free", description: "Review your live staging website before making any payment commitment." },
      { feature: "Structured JSON-LD Schema", benefit: "Rich Google Search Results", description: "Helps Google understand your business entity, services, FAQs, and local geography." },
      { feature: "Direct Engineer Access", benefit: "Rapid Execution", description: "Work directly with the builder without layers of account managers." }
    ],
    industries: [
      { industry: "Professional Services & Law", description: "Authoritative corporate platforms that establish trust and win high-ticket corporate clients.", exampleProject: "Architecture Studio", demoUrl: "/demos/architecture/index.html" },
      { industry: "Healthcare & Private Clinics", description: "Clean, calming websites with appointment scheduling and comprehensive treatment guides.", exampleProject: "MedSpa Clinic", demoUrl: "/demos/medspa/index.html" },
      { industry: "Luxury Salons & Wellness", description: "Visual flagships showcasing treatments, team members, and client reviews with elegance.", exampleProject: "Valèria Salon", demoUrl: "/demos/valeria/index.html" },
      { industry: "Automotive & Detailers", description: "Dynamic service packages, before/after galleries, and instant booking forms.", exampleProject: "AK Detailing", demoUrl: "/demos/akdetailing/index.html" },
      { industry: "Hospitality & Dining", description: "Interactive menus, table reservations, and high-conversion food photography galleries.", exampleProject: "Frenchyse Dining", demoUrl: "/frenchyse/index.html" },
      { industry: "Property & Construction", description: "High-resolution portfolio showcases highlighting completed commercial developments.", exampleProject: "Architecture", demoUrl: "/demos/architecture/index.html" }
    ],
    process: [
      { step: "Step 01", title: "Discovery & Structure", description: "We outline your target audience, core services, and conversion architecture.", duration: "Day 1" },
      { step: "Step 02", title: "UI/UX Design Concept", description: "We craft the visual aesthetic, typography, and interactive prototype.", duration: "Day 2–3" },
      { step: "Step 03", title: "Next.js Development", description: "We build all pages in clean Next.js, optimizing speed and Core Web Vitals.", duration: "Day 4–7" },
      { step: "Step 04", title: "Testing & Staging Review", description: "You test the live site on mobile and desktop. 0 upfront commitment required.", duration: "Day 8–9" },
      { step: "Step 05", title: "Domain & Search Launch", description: "We connect your domain, submit to Google Search Console, and hand over the code.", duration: "Day 10" }
    ],
    techStack: [
      { name: "Next.js 15", role: "Static Generation & Edge Hosting" },
      { name: "React 19", role: "Modular UI Components" },
      { name: "TypeScript", role: "Robust Error-Free Code" },
      { name: "Tailwind CSS", role: "Mobile-First Design" },
      { name: "Framer Motion", role: "Silky 60fps Micro-Transitions" },
      { name: "Vercel", role: "Zero-Cost Global Edge CDN" }
    ],
    caseStudies: [
      {
        title: "Architecture & Interior Studio",
        category: "Corporate Website",
        description: "15-page architectural firm showcase built with custom Next.js layout, zero WordPress bloat.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS"],
        metrics: "99/100 Performance",
        demoUrl: "/demos/architecture/index.html"
      },
      {
        title: "MedSpa Aesthetic Wellness",
        category: "Healthcare & Clinic",
        description: "28-page medical spa platform with treatment breakdowns, membership guides, and zero 404s.",
        tech: ["Next.js", "Tailwind CSS", "Dynamic Router"],
        metrics: "28 Pages Clean",
        demoUrl: "/demos/medspa/index.html"
      },
      {
        title: "AK Detailing Studio",
        category: "Automotive Services",
        description: "High-contrast dark-mode automotive detailing site with packages and instant enquiry triggers.",
        tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
        metrics: "Sub-Second Speed",
        demoUrl: "/demos/akdetailing/index.html"
      }
    ],
    pricing: [
      {
        name: "Starter Business Site",
        price: "£450 / $550",
        description: "High-performance digital presence for local businesses and independent professionals.",
        features: [
          "Up to 5 Bespoke Next.js Pages",
          "Custom Responsive Design",
          "Contact & WhatsApp Lead Funnels",
          "Google Maps & Local SEO Setup",
          "Sub-Second Page Load Speed",
          "Free SSL & Edge CDN Hosting Setup",
          "$0 Upfront Deposit",
          "Zero Monthly Retainers"
        ]
      },
      {
        name: "Growth Commercial Site",
        price: "£850 / $1,050",
        description: "Comprehensive multi-service platform engineered to capture qualified organic enquiries.",
        badge: "Most Popular",
        popular: true,
        features: [
          "Up to 12 Custom Pages",
          "Full Structured Schema Markup",
          "Service Catalog & Case Studies",
          "Dynamic Blog / News Capability",
          "Google Analytics 4 & Search Console",
          "100/100 Core Web Vitals Guarantee",
          "$0 Upfront Guarantee",
          "100% Code Ownership"
        ]
      },
      {
        name: "Custom Enterprise Portal",
        price: "£1,450 / $1,800",
        description: "Large corporate presence with multi-location pages, custom calculators, and advanced flows.",
        features: [
          "Unlimited Pages & Sections",
          "Bespoke Interactive Cost Estimator",
          "Multi-City Landing Page Architecture",
          "Advanced Lead Scoring & CRM Webhooks",
          "Priority Turnaround & 30-Day Support",
          "$0 Upfront Commitment"
        ]
      }
    ],
    whyChooseUs: [
      { title: "100% Custom Next.js (No WP Bloat)", desc: "We never touch heavy WordPress themes or insecure plugins. Every site is custom coded for maximum performance." },
      { title: "Zero Upfront Financial Risk", desc: "We build your live staging site first. You inspect it, love it, and pay only when completely satisfied." },
      { title: "No Monthly Maintenance Fees", desc: "Unlike agencies that charge £150/mo to click plugin update buttons, our static sites require zero maintenance." },
      { title: "UK Registered Agency", desc: "Contract with a UK registered entity backed by expert engineering execution based in Pakistan." },
      { title: "Top-Tier Core Web Vitals", desc: "Every page is optimized to pass Google Core Web Vitals with green scores, boosting your organic search visibility." },
      { title: "Full Code Ownership", desc: "You receive full GitHub repository access and can host anywhere without agency dependencies." }
    ],
    testimonials: [
      {
        quote: "Our previous WordPress website was hacked twice and took 6 seconds to open on 4G. SaimDev rebuilt everything in Next.js. It now loads instantly and our enquiries doubled in month one.",
        client: "David C.",
        role: "Managing Director",
        company: "Apex Legal Partners London"
      },
      {
        quote: "The fact that he didn't ask for a single pound upfront was mind-blowing. The site was ready in 8 days, perfect on mobile, and zero monthly fees.",
        client: "Rebecca H.",
        role: "Founder",
        company: "Glow & Co Aesthetics"
      },
      {
        quote: "Cleanest code I've seen. Our Google PageSpeed went from 42 to 98 immediately. Outstanding agency to work with.",
        client: "Tariq M.",
        role: "Operations Head",
        company: "Bespoke Joinery Midlands"
      }
    ],
    faqs: [
      {
        question: "Why should I choose Next.js over WordPress for my website?",
        answer: "WordPress relies on PHP and heavy SQL databases that slow down over time and require constant plugin updates to avoid hacks. Next.js compiles your pages into lightning-fast static HTML/JS files served from global edge servers. It loads in under 500ms, cannot be hacked via traditional database exploits, and requires zero monthly plugin maintenance."
      },
      {
        question: "How does the $0 upfront payment work?",
        answer: "We take your project brief, understand your branding, and build the functional staging website first. We send you the live staging link to test on your phone and laptop. If you love it, you pay and we push to your live domain. If not, you walk away with zero financial obligation."
      },
      {
        question: "Are there any recurring monthly charges?",
        answer: "None. We charge a one-time fixed project fee. We set up your hosting on Vercel or your preferred provider where standard traffic is 100% free. You own the code forever without paying us any monthly retainers."
      },
      {
        question: "Will my website rank on Google?",
        answer: "Yes. Every site we build includes semantic HTML5 tags, fast Core Web Vitals, dynamic XML sitemaps, robots.txt, and complete JSON-LD structured schema markup (LocalBusiness, Organization, Service, and BreadcrumbList) for maximum search visibility."
      },
      {
        question: "Can I update the content myself?",
        answer: "Yes. We can connect a modern headless CMS or provide simple markdown/content files so you or your team can update texts, images, and blog posts without touching any code."
      }
    ],
    finalCta: {
      headline: "Apna Business Website Next.js Mein Banwayein",
      description: "Purane slow WordPress ko alvida kahein. Hum aapki website Next.js mein $0 upfront par bana kar dikhayenge. Pasand aaye to khareedna.",
      primaryButtonText: "Claim Your $0 Upfront Project",
      whatsappText: "I want a custom Next.js website with $0 upfront"
    },
    relatedServices: [
      { name: "Website & App Clone ($1,900)", href: "/services/website-clone", desc: "1:1 pixel-perfect recreation of any reference site." },
      { name: "Next.js Headless eCommerce", href: "/services/ecommerce-shopify", desc: "Custom online storefronts with zero monthly app fees." },
      { name: "Website Redesign & Speed", href: "/services/website-redesign", desc: "Revamp outdated websites into modern Next.js flagships." }
    ]
  },

  // ==============================================================
  // 3. ECOMMERCE DEVELOPMENT (NEXT.JS SHOPIFY ALTERNATIVE)
  // ==============================================================
  "ecommerce-development": {
    slug: "ecommerce-development",
    serviceName: "Next.js Headless eCommerce",
    mainKeyword: "Next.js eCommerce Development",
    seoTitle: "Custom Next.js eCommerce Stores | No Shopify App Fees | Saim Dev",
    seoDescription: "Custom Next.js eCommerce stores engineered for sub-second checkout, zero Shopify monthly app fees, and 100% design freedom. $0 upfront deposit.",
    canonicalUrl: "https://www.saimdev.site/services/ecommerce-shopify",
    badge: "Headless Next.js eCommerce",
    h1: "Next.js Headless eCommerce Stores — Blazing Fast Speed, Zero Shopify App Fees",
    subheading: "Hum Shopify ke slow templates ya monthly app fees ($30–$300/mo) mein aapko lock nahi karte. Hum custom Next.js eCommerce storefronts banate hain jo instant product search, frictionless checkout aur 100% custom styling ke sath aati hain.",
    painPoints: [
      {
        problem: "Shopify store owners pay $100 to $400 every single month just for basic apps (filter, upsell, reviews, currency).",
        solution: "We build all filtering, swatches, multi-currency, and upsell features directly into the Next.js codebase with zero monthly app charges."
      },
      {
        problem: "Slow Liquid templates and bulky tracking apps cause slow mobile load times (4s to 9s) killing mobile checkout conversion.",
        solution: "Next.js headless frontend renders product catalogs in milliseconds with instant client-side transitions and zero lag."
      },
      {
        problem: "Shopify theme limitations prevent creative brand experiences, forcing you to look like thousands of identical dropshippers.",
        solution: "100% bespoke UI/UX architecture designed to match luxury brand standards with bespoke animations and storytelling."
      },
      {
        problem: "Aggregator and platform lock-in makes migrating or scaling your customer database complicated and expensive.",
        solution: "Complete data and code ownership. Connect with Stripe, PayPal, or headless Shopify backend with full autonomy."
      },
      {
        problem: "Paying large upfront agency fees before seeing if your custom storefront handles real product variants smoothly.",
        solution: "Our $0 Upfront Guarantee: We build the working catalog and product staging first. You test and approve before payment."
      }
    ],
    deliverables: [
      { title: "Bespoke Next.js Storefront", description: "Modern, component-driven e-commerce architecture built with Next.js 15 and Tailwind CSS." },
      { title: "Instant Faceted Filtering", description: "Sub-second filtering by size, color, price, material, and collection without page reloads." },
      { title: "Frictionless Checkout Funnels", description: "Optimized 1-page checkout integrated with Stripe, Apple Pay, Google Pay, and PayPal." },
      { title: "Multi-Currency & Regional Rates", description: "Built-in dynamic currency conversion without slow third-party Shopify apps." },
      { title: "Rich Media & Variant Swatches", description: "Full HD product galleries, video integration, interactive color swatches, and zoom." },
      { title: "Automated Stock & Order Sync", description: "Orders and inventory synced directly with your backend database or WhatsApp dispatch." },
      { title: "Product Schema (JSON-LD)", description: "Rich product price, availability, and rating snippet markup for Google Shopping organic results." },
      { title: "Zero Monthly App Fees", description: "All features native to your codebase. Eliminate hundreds of dollars in recurring SaaS fees." }
    ],
    featuresAndBenefits: [
      { feature: "Next.js Edge Architecture", benefit: "Higher Mobile Conversion", description: "Instant product transitions keep shoppers engaged and dramatically reduce checkout abandonment." },
      { feature: "Zero Shopify App Subscriptions", benefit: "Save $1,200–$4,000/yr", description: "All filters, swatches, and currency features are built in with no third-party monthly subscriptions." },
      { feature: "$0 Upfront Commitment", benefit: "Completely Risk Free", description: "Inspect your working storefront on your phone before transferring any funds." },
      { feature: "Bespoke Luxury Visuals", benefit: "Command Premium Pricing", description: "Elevate your brand perception with agency-grade interactive product presentations." },
      { feature: "Complete Code Ownership", benefit: "No Platform Lock-In", description: "You own the entire repository and database architecture with complete freedom." },
      { feature: "Sub-Second Search", benefit: "Instant Product Discovery", description: "Customers find what they want instantly without frustrating loading spinners." }
    ],
    industries: [
      { industry: "Luxury Leather & Apparel", description: "High-ticket custom apparel storefronts with detailed specification accordions and size guides.", exampleProject: "HQ Leathercon", demoUrl: "/hq-leathercon/index.html" },
      { industry: "Jewelry & Luxury Watches", description: "High-resolution macro zoom, certification badges, and secure bespoke order funnels.", exampleProject: "Valèria Luxury", demoUrl: "/demos/valeria/index.html" },
      { industry: "Beauty & Skincare Cosmetics", description: "Ingredient breakdowns, skin type filtering, bundle builders, and subscription options.", exampleProject: "Serenia Wellness", demoUrl: "/demos/serenia/index.html" },
      { industry: "Specialty Streetwear & Shoes", description: "Fast-drop launch architecture engineered to handle sudden traffic spikes without crashing.", exampleProject: "Burger Garage", demoUrl: "/burger-garage/index.html" },
      { industry: "B2B Wholesale & Custom Goods", description: "Tiered volume pricing, custom quotation builders, and direct WhatsApp order dispatch.", exampleProject: "HQ Leathercon Builder", demoUrl: "/hq-leathercon/products/custom-leather-jacket-builder/index.html" },
      { industry: "Food, Bakery & Confectionery", description: "Local delivery date pickers, allergen alerts, and gift basket customization.", exampleProject: "Frenchyse Luxury", demoUrl: "/frenchyse/index.html" }
    ],
    process: [
      { step: "Step 01", title: "Catalog & Structure", description: "We analyze your SKU count, variant matrix, payment gateways, and shipping rules.", duration: "Day 1–2" },
      { step: "Step 02", title: "Storefront UI/UX Design", description: "We craft custom product detail pages, collection grids, and cart drawer layouts.", duration: "Day 3–4" },
      { step: "Step 03", title: "Next.js Build & Gateways", description: "We engineer the frontend, connect Stripe/PayPal, and configure variant swatches.", duration: "Day 5–9" },
      { step: "Step 04", title: "Live Staging Testing", description: "You test live transactions and mobile checkout on staging. $0 upfront paid.", duration: "Day 10–11" },
      { step: "Step 05", title: "Launch & Domain Setup", description: "We connect your live domain, configure Google Shopping feeds, and handover code.", duration: "Day 12" }
    ],
    techStack: [
      { name: "Next.js 15", role: "Headless E-Commerce Frontend" },
      { name: "Tailwind CSS", role: "Bespoke Mobile Commerce Styling" },
      { name: "TypeScript", role: "Rock-Solid Checkout Logic" },
      { name: "Stripe API", role: "Frictionless Card & Wallet Payments" },
      { name: "Framer Motion", role: "Smooth Cart Drawers & Swatches" },
      { name: "Vercel Edge", role: "Global Sub-Second Product Caching" }
    ],
    caseStudies: [
      {
        title: "HQ Leathercon Luxury Storefront",
        category: "Apparel & Leathercraft",
        description: "1,350+ products, multi-currency switcher, custom size guide modal, and full HD image master galleries.",
        tech: ["Next.js", "Tailwind CSS", "Static Edge", "Multi-Currency"],
        metrics: "Sub-Second Navigation",
        demoUrl: "/hq-leathercon/index.html"
      },
      {
        title: "Custom Leather Jacket 3D Builder",
        category: "Interactive Customizer",
        description: "Interactive real-time custom product builder with leather, hardware, collar, and lining selectors.",
        tech: ["JavaScript", "HTML5 Canvas", "Tailwind CSS"],
        metrics: "Instant Quote Generation",
        demoUrl: "/hq-leathercon/products/custom-leather-jacket-builder/index.html"
      },
      {
        title: "Frenchyse Confectionery Store",
        category: "Gourmet Bakery",
        description: "Elegant luxury bakery catalog with collection tabs, ingredient breakdown, and quick WhatsApp order routing.",
        tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
        metrics: "100/100 Mobile UX",
        demoUrl: "/frenchyse/index.html"
      }
    ],
    pricing: [
      {
        name: "Standard Next.js Store",
        price: "£750 / $950",
        description: "Bespoke headless storefront for direct-to-consumer brands with up to 50 SKUs.",
        features: [
          "Bespoke Next.js Storefront Design",
          "Up to 50 Products Configured",
          "Stripe & PayPal One-Click Checkout",
          "Faceted Filter & Variant Swatches",
          "Zero Monthly Shopify App Subscriptions",
          "Mobile-First Cart Drawer & Search",
          "$0 Upfront Deposit",
          "Full Code Ownership"
        ]
      },
      {
        name: "Growth Catalog Flagship",
        price: "£1,250 / $1,550",
        description: "High-volume storefront engineered for expanding multi-category fashion or retail brands.",
        badge: "Best Value",
        popular: true,
        features: [
          "Up to 500 Products & Collections",
          "Multi-Currency Dynamic Conversion",
          "Custom Size Chart & Specification Accordions",
          "Automated Inventory & WhatsApp Alerts",
          "Product Schema (JSON-LD) for Google Shopping",
          "100/100 Core Web Vitals Guarantee",
          "$0 Upfront Guarantee",
          "30 Days Dedicated Support"
        ]
      },
      {
        name: "Custom Enterprise Storefront",
        price: "£2,200 / $2,800",
        description: "Custom interactive 3D product builders, B2B wholesale portals, and bespoke integrations.",
        features: [
          "Unlimited Products & Global Edge CDN",
          "Bespoke Interactive Product Customizer",
          "Tiered B2B Wholesale Pricing & Invoicing",
          "Custom ERP/Warehouse Webhook Integrations",
          "Priority 14-Day Delivery",
          "$0 Upfront Commitment"
        ]
      }
    ],
    whyChooseUs: [
      { title: "No Monthly App Fee Lock-In", desc: "Standard Shopify stores spend £1,000–£3,000 yearly just on apps for basic features. We build everything into your Next.js code with zero recurring fees." },
      { title: "$0 Upfront Guarantee", desc: "We build your live staging store first. You test product variants, filters, and mobile flow. Pay only if you are 100% satisfied." },
      { title: "Sub-Second Mobile Checkout", desc: "By eliminating bloated liquid scripts, your mobile shoppers enjoy instant transitions that turn browsers into buyers." },
      { title: "UK Registered Agency", desc: "Corporate accountability registered in the UK with expert engineering execution based in Pakistan." },
      { title: "100% Design Freedom", desc: "Never be constrained by pre-made theme templates again. We can build any visual concept down to the pixel." },
      { title: "Full Code Ownership", desc: "You own all code, assets, and database connections. No one can ever lock you out of your storefront." }
    ],
    testimonials: [
      {
        quote: "We were paying $240/month in Shopify apps for filters, currency switcher, and product swatches. Saim rebuilt our storefront in Next.js. We saved thousands of dollars and our mobile conversion rate went up 34% in 6 weeks.",
        client: "Julian B.",
        role: "Co-Founder",
        company: "Veloce Streetwear UK"
      },
      {
        quote: "The speed difference between Shopify Liquid and Saim's Next.js build is like night and day. Everything is instant. Plus the zero upfront promise made it completely risk-free.",
        client: "Zubair K.",
        role: "Brand Owner",
        company: "Heritage Leather Goods"
      },
      {
        quote: "Our luxury products needed a bespoke aesthetic that off-the-shelf templates could never match. SaimDev delivered perfection in 10 days.",
        client: "Elena R.",
        role: "Creative Director",
        company: "Aura Fine Jewelry"
      }
    ],
    faqs: [
      {
        question: "Can I still manage products and orders easily without Shopify admin?",
        answer: "Yes. We can either connect your Next.js storefront to a lightweight headless CMS (like Sanity, Supabase, or even Shopify's headless Storefront API) where you manage products, prices, and orders in a clean dashboard, while keeping the lightning-fast custom Next.js frontend."
      },
      {
        question: "How do I save money on Shopify apps?",
        answer: "Standard Shopify themes require paid third-party apps for product filters ($20/mo), variant image swatches ($15/mo), multi-currency ($30/mo), and size charts ($10/mo). With our Next.js architecture, all these features are built directly into your codebase natively with zero monthly subscriptions."
      },
      {
        question: "How does the $0 upfront guarantee work for online stores?",
        answer: "We set up your catalog layout, product detail view, and filtering on our private staging server. You browse, test, and approve the user experience. You only pay when you are completely satisfied with the live demo."
      },
      {
        question: "Which payment gateways can be integrated?",
        answer: "We support Stripe, PayPal, Apple Pay, Google Pay, Klarna, Clearpay, and direct WhatsApp cash-on-delivery order dispatch."
      },
      {
        question: "Are there any recurring monthly charges?",
        answer: "Zero from our side. You pay once for development and own 100% of the code forever."
      }
    ],
    finalCta: {
      headline: "Apna eCommerce Store Next.js Mein Banwayein",
      description: "Shopify ke monthly app bills aur slow loading se nijaat payein. Hum aapka online store Next.js mein $0 upfront bana kar dikhayenge.",
      primaryButtonText: "Claim Your $0 Upfront Store",
      whatsappText: "I want a Next.js eCommerce store with zero monthly fees"
    },
    relatedServices: [
      { name: "Website & App Clone ($1,900)", href: "/services/website-clone", desc: "Clone any top competitor eCommerce store 1:1." },
      { name: "Takeaway & Restaurant Ordering", href: "/services/takeaway-web-design", desc: "0% commission food ordering with Natasha's Law compliance." },
      { name: "Website Speed & Core Web Vitals", href: "/services/website-speed-optimization", desc: "Optimize your existing site to sub-second load times." }
    ]
  },

  // ==============================================================
  // 4. RESTAURANT & TAKEAWAY ORDERING
  // ==============================================================
  "takeaway-web-design": {
    slug: "takeaway-web-design",
    serviceName: "Takeaway & Restaurant Web System",
    mainKeyword: "Restaurant Online Ordering Website",
    seoTitle: "Takeaway Web Design UK | 0% Commission & Allergen Matrix | Saim Dev",
    seoDescription: "Bespoke Next.js online ordering websites for UK takeaways & restaurants. Escape 30%+ Just Eat & Uber Eats commissions with Natasha's Law allergen filters. £250 fixed.",
    canonicalUrl: "https://www.saimdev.site/services/takeaway-web-design",
    badge: "0% Commission Direct Ordering",
    h1: "Direct-Ordering Takeaway & Restaurant Websites — Escape 30% Just Eat Commissions",
    subheading: "Bespoke Next.js direct-ordering website designed for UK takeaways, chip shops, and restaurants. Stop bleeding 30%+ of your revenue to Just Eat, Deliveroo, and Uber Eats. Built-in Natasha's Law 14-allergen filter and instant WhatsApp kitchen dispatch. £250 fixed price with $0 upfront deposit.",
    painPoints: [
      {
        problem: "Aggregator platforms (Just Eat, Uber Eats, Deliveroo) charge 20% to 35% commission on every single order, eating your restaurant margins.",
        solution: "Your own direct-ordering platform: 0% commission. You keep 100% of every order revenue directly in your bank account."
      },
      {
        problem: "UK Food Hygiene inspectors strictly enforce Natasha's Law (FIR 2014) requiring clear allergen disclosure for all 14 major food allergens.",
        solution: "Interactive 14-allergen filter built right into the digital menu so diners filter out gluten, nuts, dairy, celery, and mustard in real time."
      },
      {
        problem: "Printed takeaway menus are expensive to reprint every time prices change or ingredients are updated.",
        solution: "Instant digital updates: change prices, mark items sold out, or add daily specials in 30 seconds."
      },
      {
        problem: "Complicated tablet apps that crash during busy Friday and Saturday night kitchen rushes.",
        solution: "Friction-free WhatsApp, kitchen tablet, and SMS order routing that delivers clear, formatted orders instantly."
      },
      {
        problem: "Paying hundreds of pounds upfront to unreliable web designers who deliver slow, generic templates.",
        solution: "$0 Upfront Guarantee: We build your full takeaway menu website on staging first. You test ordering. Pay only if 100% satisfied."
      }
    ],
    deliverables: [
      { title: "Bespoke Next.js Ordering Site", description: "Mobile-first ordering platform engineered for sub-second speeds on 4G/5G phones." },
      { title: "Interactive 14-Allergen Filter", description: "Natasha's Law compliant digital matrix allowing customers to filter allergens with one tap." },
      { title: "Direct WhatsApp Order Dispatch", description: "Cleanly formatted order summaries sent instantly to kitchen WhatsApp or tablet." },
      { title: "Local UK SEO & 'Near Me' Setup", description: "Google Business Profile optimization and LocalBusiness schema for local search dominance." },
      { title: "Printable QR Code Menus", description: "High-resolution QR code graphics for table tents, window stickers, and flyers." },
      { title: "Zero Monthly Commission Fees", description: "No per-order cuts, no monthly subscription lock-ins. 100% of customer money is yours." },
      { title: "Collection & Delivery Options", description: "Custom delivery radii, minimum order limits, and scheduled collection time slots." },
      { title: "Full Code & Domain Ownership", description: "100% ownership with free SSL and edge hosting setup included." }
    ],
    featuresAndBenefits: [
      { feature: "0% Commission Architecture", benefit: "Save £500–£2,500 Every Month", description: "Stop paying aggregator commissions and keep all profits from your loyal repeat customers." },
      { feature: "Natasha's Law Allergen Matrix", benefit: "Full 5-Star Hygiene Compliance", description: "Protects your customers from allergic reactions and satisfies UK Food Safety officers." },
      { feature: "$0 Upfront Guarantee", benefit: "Zero Financial Risk", description: "We build your menu site first on staging. Pay only when you see your actual food online." },
      { feature: "Direct WhatsApp Kitchen Alerts", benefit: "Zero Missed Orders", description: "Orders land directly on the phone or tablet next to your kitchen fryer." },
      { feature: "Sub-Second Mobile Speed", benefit: "Frictionless Ordering", description: "Hungry customers order in under 60 seconds without buggy apps or registrations." },
      { feature: "Fixed £250 Investment", benefit: "Pays for Itself in Days", description: "Recover the entire cost of the website within the first 15–20 direct orders." }
    ],
    industries: [
      { industry: "Kebab & Pizza Takeaways", description: "High-volume evening ordering with combo deals, pizza crust options, and delivery fees.", exampleProject: "HotBite Street Food", demoUrl: "/hotbite/index.html" },
      { industry: "Burger Bars & Grills", description: "Visual burger customizers, meal deal upsells, and instant mobile dispatch.", exampleProject: "Burger Garage", demoUrl: "/burger-garage/index.html" },
      { industry: "Fish & Chip Shops", description: "Traditional fish & chip ordering with salt/vinegar preferences and collection times.", exampleProject: "HotBite Street Food", demoUrl: "/hotbite/index.html" },
      { industry: "Artisan Bakeries & Cafes", description: "Daily pastry menus, cake pre-orders, and artisan coffee collection slots.", exampleProject: "Frenchyse Bakery", demoUrl: "/frenchyse/index.html" },
      { industry: "Indian & Asian Dining", description: "Curry spice level selections, allergy warnings, and banquet party orders.", exampleProject: "Anzaar Rooftop Dining", demoUrl: "/anzaar/index.html" },
      { industry: "Dessert Parlors & Waffles", description: "Topping selectors, ice cream scoops, and late-night delivery routing.", exampleProject: "Frenchyse Luxury", demoUrl: "/frenchyse/index.html" }
    ],
    process: [
      { step: "Step 01", title: "Menu & Details Collection", description: "Send us a photo of your printed menu, your logo, and your kitchen WhatsApp number.", duration: "Day 1" },
      { step: "Step 02", title: "Digital Menu & Allergen Tagging", description: "We digitize all items and tag the 14 food allergens according to Natasha's Law.", duration: "Day 2" },
      { step: "Step 03", title: "Next.js Build & WhatsApp Link", description: "We engineer the ordering interface and connect your WhatsApp order receiver.", duration: "Day 3" },
      { step: "Step 04", title: "Live Kitchen Test", description: "You test placing real test orders from your phone to your kitchen. $0 upfront paid.", duration: "Day 4" },
      { step: "Step 05", title: "Live Launch & Table QR Codes", description: "We point your domain, generate your printable QR codes, and you start saving.", duration: "Day 5" }
    ],
    techStack: [
      { name: "Next.js 15", role: "Lightning Fast Mobile Ordering" },
      { name: "Tailwind CSS", role: "Touch-Optimized Menu Layouts" },
      { name: "TypeScript", role: "Allergen Filtering Logic" },
      { name: "WhatsApp API", role: "Instant Kitchen Order Dispatch" },
      { name: "Local SEO Schema", role: "Restaurant Google Search Boost" },
      { name: "Vercel Edge", role: "100% Free Hosting for Restaurants" }
    ],
    caseStudies: [
      {
        title: "HotBite Street Food & Kebab",
        category: "Takeaway Ordering",
        description: "Full digital menu with allergen filters, instant category switching, and direct WhatsApp order dispatch.",
        tech: ["Next.js", "Tailwind CSS", "WhatsApp Dispatch", "Allergen Matrix"],
        metrics: "0% Commission Direct",
        demoUrl: "/hotbite/index.html"
      },
      {
        title: "Burger Garage Gourmet Diner",
        category: "Burger & Wings",
        description: "High-contrast dark-mode diner menu with sauce selections, sides upsells, and instant mobile ordering.",
        tech: ["Next.js", "Tailwind CSS", "Mobile UX"],
        metrics: "Sub-Second Ordering",
        demoUrl: "/burger-garage/index.html"
      },
      {
        title: "Anzaar Rooftop Dining",
        category: "Restaurant & Lounge",
        description: "Elegant restaurant menu with table reservations, allergen disclosures, and photo galleries.",
        tech: ["Next.js", "Tailwind CSS", "Table Booking"],
        metrics: "5-Star Food Hygiene Ready",
        demoUrl: "/anzaar/index.html"
      }
    ],
    pricing: [
      {
        name: "Complete Takeaway System",
        price: "Fixed £250",
        description: "Everything a UK takeaway needs to start taking direct commission-free orders immediately.",
        badge: "Fixed Price",
        popular: true,
        features: [
          "Complete Next.js Ordering Website",
          "Full Digital Menu with All Food Items",
          "Interactive 14-Allergen Filter (Natasha's Law)",
          "Direct WhatsApp Kitchen Order Routing",
          "Zero Monthly Commission (Save 30%+)",
          "Printable High-Res Table QR Codes",
          "Google Maps & Local UK SEO Setup",
          "$0 Upfront Deposit (Pay When Happy)",
          "Full Code Ownership"
        ]
      },
      {
        name: "Multi-Branch Takeaway Engine",
        price: "Fixed £450",
        description: "For takeaway businesses operating 2 to 3 branches with separate kitchen dispatch numbers.",
        features: [
          "Branch Selector with Postcode Lookup",
          "Independent WhatsApp Routing per Kitchen",
          "Centralized Menu & Category Management",
          "Individual Branch Google SEO Setup",
          "Priority 5-Day Delivery",
          "$0 Upfront Commitment"
        ]
      },
      {
        name: "Takeaway + Online Card Terminal",
        price: "Fixed £390",
        description: "Takeaway ordering website with both WhatsApp cash-on-delivery and online Stripe card payments.",
        features: [
          "All features of the £250 Takeaway Package",
          "Stripe Card, Apple Pay & Google Pay Integration",
          "Automatic Payouts to Your Business Bank Account",
          "Refund Management & Digital Receipts",
          "$0 Upfront Deposit"
        ]
      }
    ],
    whyChooseUs: [
      { title: "Stop Paying 30% to Just Eat", desc: "Keep 100% of your earnings. Why give away £1,000 every month when you can own your system for £250 once?" },
      { title: "Natasha's Law Compliance", desc: "Our 14-allergen interactive matrix keeps you fully compliant with UK Food Information Regulations." },
      { title: "$0 Upfront Guarantee", desc: "Send us your menu photo. We build the live website first. If you don't like it, you don't pay a single penny." },
      { title: "No Monthly Fees Ever", desc: "Unlike aggregator software that charges £49/month plus transaction fees, our system has zero monthly subscriptions." },
      { title: "UK Registered Agency", desc: "UK registered digital agency with direct engineering support based in Pakistan." },
      { title: "Takes 5 Days From Start to Launch", desc: "No weeks of waiting. We build fast so your kitchen can start saving money this weekend." }
    ],
    testimonials: [
      {
        quote: "We were paying Just Eat over £1,400 every single month in commissions. Saim set up our HotBite ordering site in 4 days. Our regular customers now order directly through WhatsApp and we pocket the 30% difference.",
        client: "Arshad M.",
        role: "Owner",
        company: "HotBite Grill Birmingham"
      },
      {
        quote: "The allergen filter alone saved us during our last EHO inspection. The inspector was amazed by the Natasha's law matrix. Best £250 we ever spent.",
        client: "Kenan S.",
        role: "Head Chef",
        company: "Istanbul Kebab Manchester"
      },
      {
        quote: "No upfront deposit was what made me trust him. Saim built the site, sent me the link, I tested an order on my phone and it was instant. Paid him happily.",
        client: "Gary D.",
        role: "Manager",
        company: "Golden Fish & Chips Leeds"
      }
    ],
    faqs: [
      {
        question: "How do customers place orders?",
        answer: "Customers open your website on their phone, choose their food items, select any required options (e.g. sauce, drink), tap 'Checkout on WhatsApp', and a formatted order message is instantly sent to your kitchen phone or tablet. You reply with estimated delivery time."
      },
      {
        question: "How does the Natasha's Law allergen filter work?",
        answer: "Customers can tap any of the 14 UK statutory food allergens (Nuts, Gluten, Dairy, Eggs, Celery, Mustard, etc.) to immediately filter out offending dishes from the menu, preventing dangerous allergic reactions and ensuring compliance with UK Food Safety regulations."
      },
      {
        question: "Are there really no monthly fees or commissions?",
        answer: "Zero. You pay a one-time fixed price of £250. You never pay us a commission, subscription, or monthly fee. All customer payments go 100% to your takeaway."
      },
      {
        question: "How long does it take to get my site live?",
        answer: "Usually 3 to 5 calendar days after you send us a clear photo or copy of your current menu."
      },
      {
        question: "What is your $0 upfront guarantee?",
        answer: "You send us your menu. We build the staging site with your actual food items and photos. You test placing orders. Only if you are 100% thrilled do you pay the £250 fee."
      }
    ],
    finalCta: {
      headline: "Just Eat Ko 30% Dena Band Karein — Apna Ordering System Banwayein",
      description: "Send us your menu photo today. We will build your direct-ordering website with allergen filter and WhatsApp dispatch for £250 fixed with $0 upfront.",
      primaryButtonText: "Claim Your £250 Takeaway Site ($0 Upfront)",
      whatsappText: "I want a £250 takeaway ordering site with $0 upfront"
    },
    relatedServices: [
      { name: "Website & App Clone ($1,900)", href: "/services/website-clone", desc: "Pixel-perfect clone of any competitor website." },
      { name: "Next.js Website Development", href: "/services/business-websites", desc: "Bespoke company websites built for speed." },
      { name: "Website Speed & Core Web Vitals", href: "/services/website-speed-optimization", desc: "Instant mobile loading for high-traffic sites." }
    ]
  },

  // ==============================================================
  // 5. HIGH-CONVERTING LANDING PAGES (CRO)
  // ==============================================================
  "landing-pages-cro": {
    slug: "landing-pages-cro",
    serviceName: "High-Converting Landing Pages",
    mainKeyword: "High Converting Landing Page Design",
    seoTitle: "High-Converting Next.js Landing Pages | 3x Higher CRO | Saim Dev",
    seoDescription: "High-converting 1-page Next.js landing pages built for paid ads and lead generation. Sub-second speed, 3x higher conversion rate, $0 upfront deposit.",
    canonicalUrl: "https://www.saimdev.site/services/landing-pages-cro",
    badge: "Conversion Rate Optimization (CRO)",
    h1: "High-Converting Next.js Landing Pages — Built to Convert Paid Ad Clicks into Customers",
    subheading: "Google Ads, Meta Ads ya TikTok traffic ke liye sub-second speed aur psychological conversion copywriting ke sath tayyar landing pages. Zero distraction, instant WhatsApp lead funnels aur $0 upfront guarantee.",
    painPoints: [
      {
        problem: "Sending paid traffic to a generic homepage with 20 navigation links distracts visitors, resulting in 90%+ bounce rates.",
        solution: "Hyper-focused 1-page conversion funnel with zero navigation leaks, guiding every visitor directly toward your primary CTA."
      },
      {
        problem: "Slow landing pages built on Elementor or ClickFunnels take 4 to 8 seconds to load, burning ad spend on abandoned clicks.",
        solution: "Static Next.js edge landing pages load in under 400 milliseconds, boosting Google Ads Quality Score and cutting CPC."
      },
      {
        problem: "Weak, generic copy that fails to address the customer's emotional pain points or establish urgent credibility.",
        solution: "Conversion-engineered copywriting with proven hook-problem-solution frameworks, trust badges, and risk-reversals."
      },
      {
        problem: "Forms that fail silently or get lost in spam folders without reaching your sales team.",
        solution: "Direct WhatsApp one-tap triggers and multi-endpoint email alerts that notify your sales team in under 5 seconds."
      },
      {
        problem: "Paying £50–£150/month in landing page builder subscriptions (ClickFunnels, Unbounce, Leadpages).",
        solution: "Zero monthly builder fees. Own your custom Next.js landing page code with 100% free global hosting on Vercel."
      }
    ],
    deliverables: [
      { title: "1-Page Conversion Architecture", description: "Engineered specifically for single offers, product launches, or high-intent lead capture." },
      { title: "Direct WhatsApp Lead Funnels", description: "One-tap WhatsApp launch button pre-filled with the campaign source and customer intent." },
      { title: "Sub-400ms Next.js Edge Speed", description: "Static page generation for instant loading on 4G/5G mobile ad traffic." },
      { title: "Psychological Copywriting Framework", description: "Attention-grabbing headlines, objection handling, social proof, and compelling CTAs." },
      { title: "Ad Pixel & Conversion Tracking", description: "Pre-configured Meta Pixel, Google Tag Manager, Google Analytics 4, and TikTok pixel events." },
      { title: "Mobile-First UX Layout", description: "Large thumb-friendly tap targets and zero horizontal scroll on all smartphone viewports." },
      { title: "Interactive FAQ Accordion", description: "Eliminates last-minute customer hesitation and addresses common objections." },
      { title: "Zero Monthly Software Fees", description: "Save £600–£1,800/yr by replacing third-party monthly SaaS landing page builders." }
    ],
    featuresAndBenefits: [
      { feature: "Sub-400ms Load Times", benefit: "Higher Ad Quality Score", description: "Faster landing pages lower your cost-per-click (CPC) on Google Ads and Meta Ads." },
      { feature: "Zero Navigation Distractions", benefit: "3x Higher Conversion Rate", description: "Visitors have only two choices: convert on your offer or leave. No lost browsing." },
      { feature: "$0 Upfront Guarantee", benefit: "Risk-Free Execution", description: "Inspect your fully built landing page on staging before paying a single pound." },
      { feature: "Direct WhatsApp Lead Routing", benefit: "Instant Sales Conversations", description: "Close warm leads immediately while they are actively searching on their mobile." },
      { feature: "Zero Monthly Retainers", benefit: "One-Time £250 Investment", description: "No subscription fees. Host for free on Vercel with complete source code ownership." },
      { feature: "A/B Testing Ready", benefit: "Scalable Growth", description: "Easily duplicate or tweak headlines to test variations against different ad audiences." }
    ],
    industries: [
      { industry: "Emergency Local Trades", description: "Roofers, plumbers, boiler repairs, and emergency electricians capturing instant phone calls.", exampleProject: "AK Detailing", demoUrl: "/demos/akdetailing/index.html" },
      { industry: "Aesthetics & Cosmetic Clinics", description: "Targeted Botox, filler, laser hair removal, and dental implant lead generation funnels.", exampleProject: "MedSpa Clinic", demoUrl: "/demos/medspa/index.html" },
      { industry: "Legal & Compensation Claims", description: "High-intent landing funnels for personal injury, tenancy claims, and dispute consultations.", exampleProject: "Architecture", demoUrl: "/demos/architecture/index.html" },
      { industry: "Direct-to-Consumer Product Drops", description: "Single-product crowdfunding, pre-order launches, and limited edition drops.", exampleProject: "HQ Leathercon", demoUrl: "/hq-leathercon/index.html" },
      { industry: "High-Ticket Real Estate", description: "Single development launch pages with virtual tour booking and brochure downloads.", exampleProject: "Studio D'Brickell", demoUrl: "/demos/studio-dbrickell/index.html" },
      { industry: "Fitness Coaches & Gyms", description: "6-week transformation programs and gym membership trial registration funnels.", exampleProject: "Serenia Wellness", demoUrl: "/demos/serenia/index.html" }
    ],
    process: [
      { step: "Step 01", title: "Offer & Audience Brief", description: "You share your target customer, campaign offer, and ad platform.", duration: "Day 1" },
      { step: "Step 02", title: "Conversion Copy & Wireframe", description: "We draft the high-converting copy hierarchy, headlines, and call to actions.", duration: "Day 2" },
      { step: "Step 03", title: "Next.js Build & Pixels", description: "We build the mobile-first page and integrate Meta/Google tracking pixels.", duration: "Day 3" },
      { step: "Step 04", title: "Live Staging Review", description: "You review the responsive staging link on mobile. $0 upfront paid.", duration: "Day 4" },
      { step: "Step 05", title: "Domain Connect & Ad Launch", description: "We connect your domain and your ad campaign goes live with instant speed.", duration: "Day 5" }
    ],
    techStack: [
      { name: "Next.js 15", role: "Static Generation & Instant Caching" },
      { name: "Tailwind CSS", role: "Lightweight Zero-Bloat Styling" },
      { name: "TypeScript", role: "Lead Capture Validation" },
      { name: "Meta & Google Pixels", role: "Accurate Conversion Tracking" },
      { name: "WhatsApp API", role: "One-Click Mobile Lead Initiation" },
      { name: "Vercel Edge", role: "Sub-400ms Global CDN Delivery" }
    ],
    caseStudies: [
      {
        title: "Studio D'Brickell Campaign Page",
        category: "High-Ticket Service",
        description: "Minimalist luxury campaign page with single-intent enquiry trigger and zero navigation leaks.",
        tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
        metrics: "Sub-400ms Load Time",
        demoUrl: "/demos/studio-dbrickell/index.html"
      },
      {
        title: "AK Detailing Ceramic Funnel",
        category: "Automotive Service",
        description: "Dark-mode ceramic coating landing page with before/after gallery and WhatsApp quotation funnel.",
        tech: ["Next.js", "Tailwind CSS", "Lead Funnel"],
        metrics: "100/100 Mobile Speed",
        demoUrl: "/demos/akdetailing/index.html"
      },
      {
        title: "Beauticians On The Go Lead Page",
        category: "Mobile Beauty Services",
        description: "Single-page mobile beauty booking funnel with instant WhatsApp dispatch for London clients.",
        tech: ["Next.js", "Tailwind CSS", "Mobile UX"],
        metrics: "3x Higher Conversion",
        demoUrl: "/demos/beauticiansonthego/index.html"
      }
    ],
    pricing: [
      {
        name: "Standard Conversion Landing Page",
        price: "Fixed £250 / $300",
        description: "High-impact 1-page conversion engine for Google Ads or Meta campaign traffic.",
        badge: "Best for Ads",
        popular: true,
        features: [
          "1 Complete High-Converting Landing Page",
          "Mobile-First Sub-400ms Next.js Speed",
          "Conversion Copywriting Framework",
          "Direct WhatsApp & Lead Form Integration",
          "Meta Pixel & Google Analytics 4 Setup",
          "Interactive FAQ Objection Handling",
          "Zero Monthly Builder Fees (Save £1,000/yr)",
          "$0 Upfront Deposit (Pay When Happy)",
          "100% Code Ownership"
        ]
      },
      {
        name: "Landing Page + A/B Variant",
        price: "Fixed £380 / $480",
        description: "Two conversion-optimized landing pages with different headlines to split-test ad spend.",
        features: [
          "2 Distinct Landing Page Variations",
          "A/B Split-Testing Setup via Edge Routing",
          "Dedicated Tracking Events per Variation",
          "Priority 4-Day Turnaround",
          "$0 Upfront Commitment"
        ]
      },
      {
        name: "Multi-Offer Lead Funnel",
        price: "Fixed £550 / $700",
        description: "3-step lead qualification funnel with dynamic question branching and instant quotation.",
        features: [
          "Multi-Step Interactive Form Builder",
          "Conditional Logic Lead Qualification",
          "Automated Email & WhatsApp Notifications",
          "CRM Webhook Integration (HubSpot/Zapier)",
          "$0 Upfront Deposit"
        ]
      }
    ],
    whyChooseUs: [
      { title: "Built for Ads ROI", desc: "We don't build generic brochure pages. Every headline, button, and image is engineered to turn ad clicks into paying customers." },
      { title: "$0 Upfront Guarantee", desc: "We build your complete landing page on staging first. Test the forms on your phone. Pay only when you are 100% happy." },
      { title: "No Monthly Builder Subscriptions", desc: "Stop paying £99/month for ClickFunnels or Unbounce. You own the Next.js code forever with 100% free hosting." },
      { title: "UK Registered Agency", desc: "Direct legal accountability with a UK registered entity and top engineering talent based in Pakistan." },
      { title: "Sub-400ms Mobile Speed", desc: "Mobile ad traffic hates slow pages. Our static Next.js pages load instantly, protecting your ad budget." },
      { title: "Ready in 3 to 5 Days", desc: "Rapid deployment so you can launch your ad campaign and start generating enquiries this week." }
    ],
    testimonials: [
      {
        quote: "We were spending £2,000/month on Google Ads sending clicks to our old WordPress site. Saim built a dedicated Next.js landing page for £250. Our cost per lead dropped from £48 to £19 within 10 days.",
        client: "Oliver P.",
        role: "Managing Director",
        company: "Direct Solar UK"
      },
      {
        quote: "Instant loading on mobile. The WhatsApp button alone generates 6 to 8 qualified enquiries every single day. Incredible value.",
        client: "Khurram A.",
        role: "Clinic Director",
        company: "Apex Dental Studio"
      },
      {
        quote: "Zero upfront deposit made this an absolute no-brainer. He sent the staging link in 3 days, it looked ten times better than our old page, and we paid happily.",
        client: "Liam B.",
        role: "Marketing Manager",
        company: "ProFit Performance London"
      }
    ],
    faqs: [
      {
        question: "Why should I use a dedicated landing page instead of my homepage for ads?",
        answer: "A standard homepage has navigation menus, social links, blog posts, and multiple offers. When a paid visitor lands on your homepage, they get distracted and 85%+ leave without converting. A dedicated landing page removes all exit points and focuses 100% on one offer, tripling your conversion rate."
      },
      {
        question: "How does the $0 upfront guarantee work?",
        answer: "We review your campaign and build the full landing page on our private staging server. You test it on your smartphone and inspect the design. If you love it, you pay the £250 fixed fee. If not, you pay nothing."
      },
      {
        question: "Will tracking pixels (Meta, Google, TikTok) be set up properly?",
        answer: "Yes. We configure your Meta Pixel, Google Tag Manager, Google Analytics 4, and conversion events (e.g. Lead, Contact, WhatsAppClick) so your ad algorithms can optimize for real conversions."
      },
      {
        question: "Are there any monthly charges?",
        answer: "Zero. We do not charge monthly fees. You own 100% of the code and we host it on Vercel where standard traffic is completely free."
      },
      {
        question: "How quickly can this be live?",
        answer: "Standard turnaround is 3 to 5 calendar days from the moment you provide your offer details."
      }
    ],
    finalCta: {
      headline: "Apna High-Converting Landing Page Banwayein",
      description: "Ad budget zaya karna band karein. Hum aapka Next.js landing page $0 upfront par bana kar dikhayenge. Pasand aaye to khareedna.",
      primaryButtonText: "Claim Your £250 Landing Page ($0 Upfront)",
      whatsappText: "I want a high-converting Next.js landing page for £250"
    },
    relatedServices: [
      { name: "Website & App Clone ($1,900)", href: "/services/website-clone", desc: "Clone any world-class competitor landing page." },
      { name: "Custom Next.js Web Development", href: "/services/business-websites", desc: "Multi-page corporate website development." },
      { name: "Core Web Vitals & Speed", href: "/services/website-speed-optimization", desc: "Sub-second optimization for existing pages." }
    ]
  },

  // ==============================================================
  // 6. WEBSITE REDESIGN & MODERNIZATION
  // ==============================================================
  "website-redesign": {
    slug: "website-redesign",
    serviceName: "Website Redesign & Modernization",
    mainKeyword: "Website Redesign Services",
    seoTitle: "Professional Website Redesign Services UK | Next.js Upgrade | Saim Dev",
    seoDescription: "Transform your outdated website into a modern Next.js flagship. Sub-second speed, premium agency aesthetic, 100% SEO preservation, and $0 upfront deposit.",
    canonicalUrl: "https://www.saimdev.site/services/website-redesign",
    badge: "Legacy to Next.js Upgrade",
    h1: "Website Redesign & Modernization Services — Transform Your Outdated Web Presence",
    subheading: "Purani, slow aur outdated websites ko ultra-fast modern Next.js flagships mein convert karein. Existing SEO rankings aur backlinks 100% mehfooz rkhte hue luxury modern aesthetic aur sub-second speed payein. $0 upfront deposit.",
    painPoints: [
      {
        problem: "Your existing website looks 7 years old, embarrassing your brand when potential clients check your credibility.",
        solution: "High-end bespoke UI/UX redesign that commands premium pricing and positions your brand at the top of your market."
      },
      {
        problem: "Fear that redesigning your website will destroy your existing Google organic rankings and backlinks.",
        solution: "Strict 1-to-1 301 redirect mapping, metadata preservation, and enhanced schema architecture to preserve and elevate SEO."
      },
      {
        problem: "Legacy WordPress or Wix site has accumulated technical debt, broken plugins, and slow load times.",
        solution: "Clean slate rebuild in Next.js 15: eliminates all plugin bloat, reduces server costs to £0, and speeds up loading by 500%."
      },
      {
        problem: "Desktop site looks okay, but the mobile version is clumsy, hard to read, and difficult to navigate.",
        solution: "Engineered mobile-first from the ground up with fluid touch controls, sticky CTAs, and instant response."
      },
      {
        problem: "Agencies charging thousands upfront and dragging redesign projects out for 4 to 6 months.",
        solution: "$0 Upfront Guarantee: We build the full redesign on a private staging link in 7 to 10 days before you pay a single penny."
      }
    ],
    deliverables: [
      { title: "Complete Visual & UX Modernization", description: "Bespoke modern design system reflecting contemporary agency aesthetic and typography." },
      { title: "100% SEO & Backlink Preservation", description: "Comprehensive 301 URL redirect map ensuring zero lost traffic or broken Google links." },
      { title: "Next.js 15 Static Architecture", description: "Migrate away from fragile PHP/WordPress to an unhackable, sub-second static React platform." },
      { title: "Mobile Touch-First Navigation", description: "Smooth drawer menus, sticky contact bars, and optimized mobile reading experiences." },
      { title: "Enhanced Structured Data (JSON-LD)", description: "Upgrade old HTML markup to Google-recommended rich schema for higher click-through rates." },
      { title: "Zero Data or Content Loss", description: "All your existing blog articles, customer reviews, and service descriptions safely migrated." },
      { title: "Sub-Second PageSpeed Guarantee", description: "100/100 Core Web Vitals score delivering instantaneous page loads." },
      { title: "Full Code Ownership", description: "Zero monthly agency lock-in. Full repository handover with free edge hosting setup." }
    ],
    featuresAndBenefits: [
      { feature: "Bespoke Modern Redesign", benefit: "Immediate Brand Authority", description: "Win higher-ticket clients by presenting a polished digital flagship that inspires trust." },
      { feature: "Zero Ranking Loss Guarantee", benefit: "Preserve Existing Revenue", description: "All existing URLs, meta titles, and canonical links are protected with precision." },
      { feature: "$0 Upfront Commitment", benefit: "Zero Financial Risk", description: "You don't pay anything until you compare your old site side-by-side with our redesign." },
      { feature: "Sub-500ms Next.js Speed", benefit: "Double Your Enquiries", description: "Fast websites convert 2x to 3x more visitors than clunky legacy platforms." },
      { feature: "Zero Monthly Maintenance", benefit: "Eliminate Retainers", description: "No more paying £150/month to an agency for WordPress plugin maintenance." },
      { feature: "7 to 10 Day Turnaround", benefit: "Fast Market Execution", description: "Get your new modern website live within days, not months." }
    ],
    industries: [
      { industry: "Established Corporate & Legal", description: "Modernize dated corporate firm websites into sharp, high-credibility digital flagships.", exampleProject: "Architecture Studio", demoUrl: "/demos/architecture/index.html" },
      { industry: "Medical & Aesthetic Practices", description: "Upgrade clumsy clinical sites into serene, luxury patient booking experiences.", exampleProject: "MedSpa Clinic", demoUrl: "/demos/medspa/index.html" },
      { industry: "Automotive & Fleet Services", description: "Replace outdated yellow-pages style websites with modern dark-mode service catalogs.", exampleProject: "AK Detailing", demoUrl: "/demos/akdetailing/index.html" },
      { industry: "Established Retail & E-Commerce", description: "Migrate legacy slow Shopify or WooCommerce stores into sub-second Next.js flagships.", exampleProject: "HQ Leathercon", demoUrl: "/hq-leathercon/index.html" },
      { industry: "Hospitality & Traditional Dining", description: "Replace PDF food menus with interactive allergen-compliant digital ordering.", exampleProject: "HotBite Street Food", demoUrl: "/hotbite/index.html" },
      { industry: "Creative Agencies & Architects", description: "Upgrade flash-era portfolios into responsive full-bleed architectural showcases.", exampleProject: "Atelier Noir", demoUrl: "/demos/atelier-noir/index.html" }
    ],
    process: [
      { step: "Step 01", title: "Site Audit & Crawl", description: "We crawl your existing website, map all URLs, backlinks, and core content.", duration: "Day 1" },
      { step: "Step 02", title: "Modern Design Concept", description: "We present a completely refreshed visual design system and component layout.", duration: "Day 2–3" },
      { step: "Step 03", title: "Next.js Rebuild & Migration", description: "We migrate your content into clean Next.js code with sub-second performance.", duration: "Day 4–7" },
      { step: "Step 04", title: "Side-by-Side Review", description: "You inspect the new staging site side-by-side with your old site. $0 upfront paid.", duration: "Day 8–9" },
      { step: "Step 05", title: "Seamless Switchover", description: "We switch DNS, activate 301 redirects, and launch with zero downtime.", duration: "Day 10" }
    ],
    techStack: [
      { name: "Next.js 15", role: "Static Edge Generation" },
      { name: "React 19", role: "Interactive Modern UI" },
      { name: "TypeScript", role: "Bug-Free Clean Code" },
      { name: "Tailwind CSS", role: "Modern Responsive Typography" },
      { name: "Framer Motion", role: "Subtle Luxury Transitions" },
      { name: "Vercel Edge", role: "Zero-Cost Global Hosting" }
    ],
    caseStudies: [
      {
        title: "Woshico Dry Cleaning Platform",
        category: "Complete Redesign",
        description: "Rebuilt an outdated booking site into a 17-page clean service platform with pricing calculators.",
        tech: ["Next.js", "Tailwind CSS", "TypeScript"],
        metrics: "100% SEO Retained",
        demoUrl: "/demos/woshico/index.html"
      },
      {
        title: "Serenia Luxury Spa Redesign",
        category: "Wellness & Spa",
        description: "Transformed a cluttered 2017 WordPress theme into a 27-page serene luxury wellness experience.",
        tech: ["Next.js", "Framer Engine", "Tailwind CSS"],
        metrics: "Sub-Second Transitions",
        demoUrl: "/demos/serenia/index.html"
      },
      {
        title: "Burger Garage Brand Revamp",
        category: "Dining Brand",
        description: "Complete visual modernization of a local takeaway brand into an urban high-energy digital flagship.",
        tech: ["Next.js", "Tailwind CSS", "Mobile UX"],
        metrics: "4x Engagement",
        demoUrl: "/burger-garage/index.html"
      }
    ],
    pricing: [
      {
        name: "Standard Website Redesign",
        price: "£550 / $700",
        description: "Complete modern redesign of an outdated 5-to-8 page business website.",
        features: [
          "Complete UI/UX Visual Modernization",
          "Up to 8 Pages Rebuilt in Next.js",
          "100% SEO & Backlink Preservation",
          "301 URL Redirect Mapping",
          "Mobile-First Touch Architecture",
          "Sub-Second Load Speed Guarantee",
          "$0 Upfront Deposit (Pay When Happy)",
          "Zero Monthly Retainers"
        ]
      },
      {
        name: "Full Growth Platform Redesign",
        price: "£950 / $1,200",
        description: "Comprehensive overhaul of a 15-page company website with blogs and case studies.",
        badge: "Most Popular",
        popular: true,
        features: [
          "Up to 15 Pages Completely Rebuilt",
          "Blog & Article Content Migration",
          "Enhanced JSON-LD Structured Data",
          "Google Analytics 4 & Search Console Verification",
          "100/100 Core Web Vitals Guarantee",
          "Full GitHub Code Handover",
          "$0 Upfront Guarantee",
          "30 Days Dedicated Support"
        ]
      },
      {
        name: "Large E-Commerce Redesign",
        price: "£1,650 / $2,100",
        description: "Complete migration from bloated Shopify/WooCommerce into custom Next.js eCommerce.",
        features: [
          "Catalog & Product Migration",
          "Faceted Filter & Swatch Architecture",
          "Stripe/PayPal One-Click Checkout",
          "Zero Monthly Shopify App Fees",
          "Priority Turnaround & Staging Guarantee",
          "$0 Upfront Commitment"
        ]
      }
    ],
    whyChooseUs: [
      { title: "Zero Ranking Drop Guarantee", desc: "We map every single URL and meta tag to ensure your hard-earned Google traffic is completely protected." },
      { title: "$0 Upfront Guarantee", desc: "We build your new redesigned website on a private staging link first. Pay only if you love the new look." },
      { title: "Escape WordPress & Plugin Bloat", desc: "We rebuild in clean Next.js, eliminating server crashes, security exploits, and monthly maintenance fees." },
      { title: "UK Registered Agency", desc: "Professional UK agency accountability with world-class engineering execution based in Pakistan." },
      { title: "Sub-Second Loading Guaranteed", desc: "We guarantee your new redesigned site will pass Google Core Web Vitals with flying colors." },
      { title: "Ready in 7 to 10 Days", desc: "Fast execution with zero agency bureaucracy or months of endless meetings." }
    ],
    testimonials: [
      {
        quote: "Our website had not been updated since 2018. It was slow and embarrassing. SaimDev redesigned everything in Next.js within 8 days. Not only did we retain all our Google rankings, but our organic traffic increased by 40% because of the speed boost.",
        client: "Simon K.",
        role: "Partner",
        company: "St. James Advisory London"
      },
      {
        quote: "Being able to see the live redesign side-by-side with our old site before paying a single dollar made this the easiest decision we ever made.",
        client: "Chloe M.",
        role: "Founder",
        company: "The Natural Health Clinic"
      },
      {
        quote: "Top-tier execution. The mobile version is stunning and we no longer have to pay £120/month for WordPress updates.",
        client: "Arif N.",
        role: "Operations Director",
        company: "Apex Transport Solutions"
      }
    ],
    faqs: [
      {
        question: "Will I lose my current Google rankings if I redesign my website?",
        answer: "No. We perform a full URL audit of your existing site before touching any code. We preserve all URL slugs, or set up strict 301 redirects from old URLs to new URLs. We also preserve your existing H1s, meta titles, and descriptions while adding enhanced Schema.org markup. Because the new site is 5x faster, Google typically rewards the redesign with higher rankings."
      },
      {
        question: "How does the $0 upfront guarantee work for a redesign?",
        answer: "You send us your current website URL. We build the complete redesigned version on our private staging server without touching your live website. You compare them side-by-side on your laptop and phone. Only when you are 100% thrilled do you pay."
      },
      {
        question: "Will my current website stay online while you build the new one?",
        answer: "Yes, 100%. Your current website stays fully active without a single second of downtime. When you approve the redesign, we switch the DNS records seamlessly in under 5 minutes."
      },
      {
        question: "Do you build the redesign on WordPress?",
        answer: "No. We rebuild on modern Next.js 15 and Tailwind CSS. This frees your business from WordPress plugin updates, database vulnerabilities, and sluggish page speed forever."
      },
      {
        question: "How long does a full redesign take?",
        answer: "Standard redesigns take between 7 to 10 calendar days."
      }
    ],
    finalCta: {
      headline: "Apni Purani Website Ko Modern Next.js Mein Upgrade Karein",
      description: "Send us your current website link. We will build a modern, high-speed Next.js redesign on staging first with $0 upfront. Pay only if you love it.",
      primaryButtonText: "Claim Your $0 Upfront Redesign",
      whatsappText: "I want to redesign my website with $0 upfront"
    },
    relatedServices: [
      { name: "Website & App Clone ($1,900)", href: "/services/website-clone", desc: "Clone any top competitor website 1:1." },
      { name: "Next.js Website Development", href: "/services/business-websites", desc: "Bespoke company websites built for speed." },
      { name: "Website Speed & Core Web Vitals", href: "/services/website-speed-optimization", desc: "Sub-second optimization for existing pages." }
    ]
  },

  // ==============================================================
  // 7. WEBSITE SPEED & CORE WEB VITALS
  // ==============================================================
  "website-speed-optimization": {
    slug: "website-speed-optimization",
    serviceName: "Website Speed & Core Web Vitals",
    mainKeyword: "Core Web Vitals Optimization UK",
    seoTitle: "Core Web Vitals & Website Speed Optimization | Saim Dev",
    seoDescription: "Sub-second load times & 95+ PageSpeed guaranteed. We fix slow LCP, INP, and CLS for UK businesses. Pay only after verified speed boost. From £199.",
    canonicalUrl: "https://www.saimdev.site/services/website-speed-optimization",
    badge: "Sub-Second Performance",
    h1: "Website Speed Optimization & Core Web Vitals — Sub-Second Speeds Guaranteed",
    subheading: "Slow loading websites kill your Google rankings and drain your ad budget. Hum LCP, INP aur CLS issues ko permanently solve karte hain. 95+ Google PageSpeed score guaranteed — pay only after verified speed boost. From £199.",
    painPoints: [
      {
        problem: "Slow Largest Contentful Paint (LCP > 2.5s) causes Google to demote your rankings on mobile search results.",
        solution: "We optimize font rendering, inline critical CSS, and serve AVIF/WebP images from edge CDN to achieve LCP < 0.9s."
      },
      {
        problem: "Interaction to Next Paint (INP) lag makes buttons and menus feel unresponsive on smartphones.",
        solution: "We strip layout-thrashing JavaScript, eliminate render-blocking scripts, and split code chunks for instant touch response."
      },
      {
        problem: "Cumulative Layout Shift (CLS > 0.1) causes text and buttons to jump around as banners and images load.",
        solution: "We enforce explicit aspect ratios, reserve DOM space for dynamic modules, and lock CLS strictly at 0.00."
      },
      {
        problem: "Heavy WordPress plugins and external analytics trackers bloat page weight to 8MB+ on 4G connections.",
        solution: "We remove unneeded dependencies, defer third-party scripts, and compress assets to under 500KB."
      },
      {
        problem: "Paying speed optimization services who run a generic caching plugin and leave your site broken.",
        solution: "Pay After Verification: We optimize on staging and prove 95+ PageSpeed on Google's live tool before you pay."
      }
    ],
    deliverables: [
      { title: "Full Core Web Vitals Audit", description: "In-depth diagnostic using Chrome DevTools, Lighthouse, and Web Vitals field data." },
      { title: "LCP Sub-Second Optimization", description: "Optimize hero graphics, pre-load critical assets, and eliminate render-blocking CSS." },
      { title: "INP & JavaScript Chunking", description: "Break up long tasks, defer non-essential scripts, and ensure instant touch interactions." },
      { title: "Zero Layout Shift (CLS = 0)", description: "Explicit dimensions on all images, embeds, and dynamic widgets to eliminate jumping." },
      { title: "Next-Gen Image Compression", description: "Convert all PNG/JPEG images into modern AVIF/WebP formats with lossless clarity." },
      { title: "Font & Typography Tuning", description: "Self-host Google fonts with font-display: swap to eliminate FOIT (invisible text)." },
      { title: "Edge Caching & Compression", description: "Configure Brotli compression, stale-while-revalidate headers, and edge delivery." },
      { title: "Before & After Audit Report", description: "Documented proof of Google PageSpeed improvements across mobile and desktop." }
    ],
    featuresAndBenefits: [
      { feature: "Sub-Second Load Times", benefit: "Boost Organic Google Rankings", description: "Google explicitly prioritizes websites that pass Core Web Vitals in mobile search rankings." },
      { feature: "Reduced Mobile Bounce Rate", benefit: "More Leads & Orders", description: "Every 100ms improvement in load time increases conversion rates by up to 8%." },
      { feature: "Pay Only After Verified Boost", benefit: "100% Risk Free", description: "We run the official Google PageSpeed test. If the score doesn't hit the agreed target, you pay nothing." },
      { feature: "Lower Ad Spend (CPC)", benefit: "Save Thousands on Ads", description: "Faster landing pages earn higher Google Ads Quality Scores, reducing your cost per click." },
      { feature: "Zero Code Breakage", benefit: "Zero Collateral Damage", description: "All forms, carousels, payment gateways, and trackers remain 100% functional." },
      { feature: "No Monthly Fees", benefit: "Permanent Fix", description: "We fix the underlying code architecture rather than putting a temporary caching band-aid." }
    ],
    industries: [
      { industry: "E-Commerce & Retail", description: "Eliminate cart abandonment and speed up product category browsing on mobile devices.", exampleProject: "HQ Leathercon", demoUrl: "/hq-leathercon/index.html" },
      { industry: "Paid Ads Landing Pages", description: "Lower Google Ads CPC and increase conversion rates on paid campaign traffic.", exampleProject: "Studio D'Brickell", demoUrl: "/demos/studio-dbrickell/index.html" },
      { industry: "Takeaway & Fast Food", description: "Enable hungry customers to open menus in 300ms on 4G without bouncing.", exampleProject: "HotBite Street Food", demoUrl: "/hotbite/index.html" },
      { industry: "Healthcare & Clinics", description: "Provide smooth, reassuring appointment booking flows with zero page delay.", exampleProject: "MedSpa Clinic", demoUrl: "/demos/medspa/index.html" },
      { industry: "High-Traffic Blogs & Publishers", description: "Pass Core Web Vitals to qualify for Google Discover and Google News carousels.", exampleProject: "Behind the Lens", demoUrl: "/blogs" },
      { industry: "Corporate & Law Firms", description: "Deliver an instantaneous, executive-grade browsing experience to high-net-worth clients.", exampleProject: "Architecture", demoUrl: "/demos/architecture/index.html" }
    ],
    process: [
      { step: "Step 01", title: "Diagnostic Benchmark", description: "We record baseline Lighthouse, LCP, INP, and CLS scores across key pages.", duration: "Day 1" },
      { step: "Step 02", title: "Asset & Script Audit", description: "We identify render-blocking scripts, oversized images, and layout-thrashing code.", duration: "Day 1" },
      { step: "Step 03", title: "Deep Code Optimization", description: "We inline critical CSS, optimize images, chunk JS, and tune server cache headers.", duration: "Day 2–3" },
      { step: "Step 04", title: "Functional Verification", description: "We test all forms, checkout flows, and animations to ensure zero collateral damage.", duration: "Day 3" },
      { step: "Step 05", title: "Live PageSpeed Proof", description: "We run live Google PageSpeed tests, deliver the report, and collect payment only after success.", duration: "Day 4" }
    ],
    techStack: [
      { name: "Next.js Turbopack", role: "Ultra-Fast Serverless Bundling" },
      { name: "Chrome DevTools", role: "Frame-by-Frame Performance Profiling" },
      { name: "WebP / AVIF", role: "Lossless Next-Gen Image Compression" },
      { name: "Brotli Compression", role: "Maximized Text & Code Minification" },
      { name: "Vercel Edge Network", role: "Sub-50ms Global Edge Routing" },
      { name: "Font Optimization", role: "Zero Layout Shift Typography" }
    ],
    caseStudies: [
      {
        title: "HQ Leathercon Store Speed Overhaul",
        category: "E-Commerce Optimization",
        description: "Stripped heavy layout thrashing scroll handlers, replaced 163 low-res images with master HD, eliminated 3s scroll trap.",
        tech: ["Next.js", "Chrome DevTools", "Image Pipeline"],
        metrics: "Sub-Second Navigation",
        demoUrl: "/hq-leathercon/index.html"
      },
      {
        title: "MedSpa 28-Page Platform Speed",
        category: "Healthcare Platform",
        description: "Injected lightweight prototype interceptors, eliminated remote font lag, verified 0 console errors across all 28 subpages.",
        tech: ["Next.js", "Edge Caching", "Tailwind CSS"],
        metrics: "100% Green Vitals",
        demoUrl: "/demos/medspa/index.html"
      },
      {
        title: "HotBite Mobile Menu Optimization",
        category: "Takeaway Platform",
        description: "Optimized mobile category switching to under 200ms on 4G connections with zero layout shifts.",
        tech: ["Next.js", "Tailwind CSS", "Mobile UX"],
        metrics: "LCP < 0.8s",
        demoUrl: "/hotbite/index.html"
      }
    ],
    pricing: [
      {
        name: "Single Landing Speed Fix",
        price: "Fixed £199 / $250",
        description: "Full speed and Core Web Vitals optimization for a single high-priority landing page or homepage.",
        features: [
          "Guaranteed 90+ Mobile PageSpeed",
          "LCP Sub-Second Optimization",
          "Zero Cumulative Layout Shift (CLS = 0)",
          "Image Conversion to AVIF/WebP",
          "Font Optimization & Self-Hosting",
          "Zero Broken Functionality",
          "Pay Only After Verified Results"
        ]
      },
      {
        name: "Full Website Speed Overhaul",
        price: "Fixed £350 / $450",
        description: "Complete speed overhaul across all templates (Home, About, Services, Contact, Blog).",
        badge: "Most Popular",
        popular: true,
        features: [
          "Up to 10 Key Page Templates Optimized",
          "Guaranteed 95+ Mobile PageSpeed",
          "Full Core Web Vitals Passing Status",
          "Third-Party Script Deferral & Cleanup",
          "Brotli & Edge Cache Configuration",
          "Detailed Before & After Audit Report",
          "Pay Only After Verified Results",
          "30 Days Speed Warranty"
        ]
      },
      {
        name: "E-Commerce Catalog Speed",
        price: "Fixed £550 / $700",
        description: "Deep speed optimization for multi-thousand product e-commerce stores with heavy catalogs.",
        features: [
          "Catalog & Product Detail Page Optimization",
          "Dynamic Variant Swatch & Filter Acceleration",
          "Cart Drawer & Checkout Flow Tuning",
          "Database Query & API Caching",
          "Pay Only After Verified Results"
        ]
      }
    ],
    whyChooseUs: [
      { title: "Pay Only After Verified Proof", desc: "We run the official Google PageSpeed test on your live site. You pay only after you see the 95+ score with your own eyes." },
      { title: "Zero Collateral Damage", desc: "We never break forms, sliders, tracking pixels, or payment gateways. Every feature remains 100% functional." },
      { title: "Permanent Architectural Fix", desc: "We fix the code at the root level rather than installing heavy caching plugins that cause ghost bugs." },
      { title: "UK Registered Agency", desc: "Direct legal accountability with a UK registered entity and top performance engineers based in Pakistan." },
      { title: "No Monthly Subscription", desc: "One-time fix. No recurring monthly speed fees or ongoing plugin subscriptions." },
      { title: "Results Delivered in 3 to 4 Days", desc: "Rapid execution with instant performance improvements." }
    ],
    testimonials: [
      {
        quote: "Our mobile PageSpeed score was 34 and Google was failing our Core Web Vitals. Saim optimized the site in 3 days. Our mobile score jumped to 97 and our Google Ads Quality Score improved within a week.",
        client: "Nathan B.",
        role: "Founder",
        company: "Vanguard Tech UK"
      },
      {
        quote: "The best part was not paying until he showed us the green 98 score on Google's own tool. Completely honest and master-level technical skill.",
        client: "Zoya H.",
        role: "E-Commerce Manager",
        company: "Luxe Decor London"
      },
      {
        quote: "He solved an image lag issue that two previous agencies had failed to fix. Outstanding work.",
        client: "Dean W.",
        role: "Managing Director",
        company: "Apex Precision Tools"
      }
    ],
    faqs: [
      {
        question: "How do you guarantee a 95+ Google PageSpeed score?",
        answer: "We perform deep code-level optimizations: converting images to next-gen formats (AVIF/WebP), removing unused JavaScript and CSS, self-hosting fonts, inlining critical path styling, and configuring edge caching headers. We test continuously against Google's Lighthouse engine until the score passes 95+."
      },
      {
        question: "How does the 'pay after verification' guarantee work?",
        answer: "We optimize your pages on a staging copy or live backup. Once completed, we run the official Google PageSpeed Insights test and send you the live link. You verify the 95+ score yourself. Only then do you pay our fixed fee."
      },
      {
        question: "Will the speed optimization break any forms or tracking pixels?",
        answer: "No. Our strict Zero Collateral Damage protocol ensures that every form, checkout button, animation, and tracking script (Google Analytics, Meta Pixel) is tested and remains 100% functional."
      },
      {
        question: "Are there any monthly fees?",
        answer: "Zero. This is a one-time permanent code optimization. We do not charge monthly maintenance fees."
      },
      {
        question: "How long does the optimization take?",
        answer: "Standard turnaround is 3 to 4 business days."
      }
    ],
    finalCta: {
      headline: "Apni Website Ki Speed 95+ PageSpeed Par Le Jayein",
      description: "Send us your website URL today. We will run a free performance audit and guarantee sub-second speeds. Pay only after verified results.",
      primaryButtonText: "Claim Your Speed Boost (Pay After Verification)",
      whatsappText: "I want to optimize my website speed to 95+ PageSpeed"
    },
    relatedServices: [
      { name: "Website & App Clone ($1,900)", href: "/services/website-clone", desc: "1:1 pixel-perfect recreation of any reference site." },
      { name: "Next.js Website Development", href: "/services/business-websites", desc: "Bespoke company websites built for speed." },
      { name: "Website Redesign & Modernization", href: "/services/website-redesign", desc: "Revamp outdated websites into modern flagships." }
    ]
  },

  // ==============================================================
  // 8. TECHNICAL & LOCAL SEO SERVICES
  // ==============================================================
  "seo-services": {
    slug: "seo-services",
    serviceName: "Technical & Local SEO Services",
    mainKeyword: "SEO Services",
    seoTitle: "Technical & Local SEO Services UK | Rich Schema & Rankings | Saim Dev",
    seoDescription: "Technical and Local SEO services for UK businesses. Comprehensive JSON-LD structured schema, Core Web Vitals, and keyword architecture. $0 upfront deposit.",
    canonicalUrl: "https://www.saimdev.site/services/seo-services",
    badge: "Organic Search Visibility",
    h1: "Technical & Local SEO Services — Dominate Organic Search in the UK",
    subheading: "Google par organic search dominance ke liye semantic HTML5, comprehensive JSON-LD structured schema, sub-second speed aur local search architecture. No black-hat spam, zero monthly retainers, $0 upfront deposit.",
    painPoints: [
      {
        problem: "Your website is invisible on Google for high-intent commercial keywords, while competitors capture all the leads.",
        solution: "Comprehensive keyword mapping, semantic HTML5 structure, and content architecture designed to rank at the top of Google."
      },
      {
        problem: "Missing or malformed structured data (Schema.org) means your search results lack star ratings, FAQs, and price snippets.",
        solution: "We inject rich JSON-LD schema (LocalBusiness, Service, FAQPage, Organization) for eye-catching rich snippets."
      },
      {
        problem: "Local businesses losing customers to nearby competitors on Google Maps and 'near me' local pack searches.",
        solution: "Local SEO optimization connecting Google Business Profile, local citations, and geo-targeted service pages."
      },
      {
        problem: "Crawl errors, broken 404 links, and missing canonical tags confusing Google and hurting site authority.",
        solution: "Full technical crawl audit fixing all 404s, canonical issues, XML sitemaps, and indexing blockers."
      },
      {
        problem: "Monthly SEO agencies charging £500–£1,500/month for automated PDF reports with zero real technical improvements.",
        solution: "One-time technical & local SEO overhaul. No monthly retainer lock-ins, 100% transparent deliverables."
      }
    ],
    deliverables: [
      { title: "Comprehensive Technical SEO Audit", description: "Deep crawl identifying indexing errors, duplicate content, crawl budget waste, and 404s." },
      { title: "Rich JSON-LD Structured Data", description: "Bespoke schema markup for Organization, LocalBusiness, Service, FAQPage, and BreadcrumbList." },
      { title: "Local SEO & Google Maps Setup", description: "Optimize Google Business Profile, geo-targeted landing pages, and local citation consistency." },
      { title: "Semantic On-Page Architecture", description: "Single H1 structure, keyword-rich H2/H3 tags, and semantic HTML5 hierarchy." },
      { title: "Dynamic XML Sitemap & Robots.txt", description: "Automated sitemap generation and optimal robots.txt crawl directives." },
      { title: "Canonical & International hreflang", description: "Prevent duplicate content penalties and target UK/EU search regions accurately." },
      { title: "Google Search Console Optimization", description: "Fix indexation issues, submit sitemaps, and monitor keyword impressions." },
      { title: "Internal Linking Network", description: "Strategic silo architecture channeling page authority to your primary commercial service pages." }
    ],
    featuresAndBenefits: [
      { feature: "Rich Google Snippets (JSON-LD)", benefit: "Higher Click-Through Rates", description: "Rich search snippets with FAQs and ratings stand out from competitors on Google results." },
      { feature: "Local SEO Architecture", benefit: "Dominate 'Near Me' Searches", description: "Capture local customers actively looking to hire your services in your city or region." },
      { feature: "$0 Upfront Guarantee", benefit: "Zero Financial Risk", description: "We audit and configure your technical SEO foundation before taking payment." },
      { feature: "Sub-Second Next.js Speed", benefit: "Core Web Vitals Ranking Boost", description: "Google rewards fast sites with higher search visibility in competitive niches." },
      { feature: "Zero Monthly Retainers", benefit: "Save Thousands Yearly", description: "No recurring agency contracts. One-time technical perfection with permanent value." },
      { feature: "Transparent Proof", benefit: "Google Search Console Verified", description: "Track your actual impressions, clicks, and indexing status directly in Google tools." }
    ],
    industries: [
      { industry: "Local Service Trades & Contractors", description: "Dominate local UK towns for plumbers, electricians, roofers, and builders.", exampleProject: "AK Detailing", demoUrl: "/demos/akdetailing/index.html" },
      { industry: "Medical, Dental & Aesthetics", description: "Rank for high-intent local healthcare, Botox, dental implants, and private clinic searches.", exampleProject: "MedSpa Clinic", demoUrl: "/demos/medspa/index.html" },
      { industry: "Legal & Financial Consultancies", description: "Capture corporate decision-makers searching for commercial solicitors and tax advisors.", exampleProject: "Architecture", demoUrl: "/demos/architecture/index.html" },
      { industry: "Restaurants & Takeaways", description: "Rank top for 'best takeaway near me', 'pizza delivery', and halal dining searches.", exampleProject: "HotBite Street Food", demoUrl: "/hotbite/index.html" },
      { industry: "Boutique Salons & Spas", description: "Win local luxury hair styling, facial, and spa booking enquiries.", exampleProject: "Valèria Salon", demoUrl: "/demos/valeria/index.html" },
      { industry: "E-Commerce & Online Stores", description: "Rank product categories organically on Google Shopping and general web search.", exampleProject: "HQ Leathercon", demoUrl: "/hq-leathercon/index.html" }
    ],
    process: [
      { step: "Step 01", title: "Technical Crawl & Audit", description: "We run a complete site crawl to uncover all indexation, speed, and schema errors.", duration: "Day 1" },
      { step: "Step 02", title: "Keyword & Entity Mapping", description: "We identify the most lucrative commercial search terms for your specific services.", duration: "Day 2" },
      { step: "Step 03", title: "Schema & On-Page Execution", description: "We inject rich JSON-LD schema, optimize meta tags, H1s, and internal links.", duration: "Day 3–4" },
      { step: "Step 04", title: "Local SEO & Verification", description: "We optimize Google Business Profile, maps embeds, and submit to Google Search Console.", duration: "Day 5" },
      { step: "Step 05", title: "Final Audit & Delivery", description: "You review the Rich Results Test and Search Console status. $0 upfront paid.", duration: "Day 6" }
    ],
    techStack: [
      { name: "Schema.org (JSON-LD)", role: "Structured Rich Snippet Markup" },
      { name: "Google Search Console", role: "Direct Indexing & Ranking Verification" },
      { name: "Next.js Metadata API", role: "Dynamic OpenGraph & Canonical Tags" },
      { name: "Google Rich Results Tool", role: "100% Validated Rich Data" },
      { name: "Semantic HTML5", role: "Search Engine Accessible Layouts" },
      { name: "XML Sitemaps", role: "Automated Crawl Route Updates" }
    ],
    caseStudies: [
      {
        title: "MedSpa 28-Page Structured Architecture",
        category: "Healthcare SEO",
        description: "Implemented comprehensive FAQPage and Service schemas across all 28 treatment subpages with 0 schema warnings.",
        tech: ["JSON-LD Schema", "Next.js", "FAQPage"],
        metrics: "100% Valid Rich Results",
        demoUrl: "/demos/medspa/index.html"
      },
      {
        title: "HotBite Local Restaurant Schema",
        category: "Local Food SEO",
        description: "Configured Restaurant schema, 14-allergen menu data, and local UK geo-coordinates for top local search ranking.",
        tech: ["Restaurant Schema", "Local SEO", "Next.js"],
        metrics: "Local Pack Ready",
        demoUrl: "/hotbite/index.html"
      },
      {
        title: "Architecture Studio Portfolio SEO",
        category: "Corporate Portfolio",
        description: "Full semantic image alt optimization and architectural firm schema markup.",
        tech: ["Next.js", "Semantic HTML5", "OpenGraph"],
        metrics: "Sub-Second Indexing",
        demoUrl: "/demos/architecture/index.html"
      }
    ],
    pricing: [
      {
        name: "Technical SEO Foundation",
        price: "Fixed £299 / $380",
        description: "Complete technical and structured data overhaul for up to 8 core website pages.",
        features: [
          "Complete Technical Crawl Audit & Fixes",
          "Rich JSON-LD Structured Schema (LocalBusiness, Service)",
          "FAQPage Rich Snippet Integration",
          "Dynamic XML Sitemap & Robots.txt Setup",
          "Canonical URL & Trailing Slash Normalization",
          "OpenGraph & Social Card Optimization",
          "$0 Upfront Deposit (Pay When Happy)",
          "Zero Monthly Retainers"
        ]
      },
      {
        name: "Local SEO Domination Package",
        price: "Fixed £499 / $650",
        description: "Designed for UK local businesses wanting to dominate their city and surrounding areas on Google.",
        badge: "Most Popular",
        popular: true,
        features: [
          "Everything in Technical SEO Foundation",
          "Google Business Profile Audit & Optimization",
          "Up to 3 Geo-Targeted Local Service Landing Pages",
          "Google Maps & Local Schema Integration",
          "Google Search Console Verification & Sitemap Submission",
          "Internal Linking Silo Architecture",
          "$0 Upfront Guarantee",
          "30 Days SEO Support"
        ]
      },
      {
        name: "Enterprise Multi-Location SEO",
        price: "Fixed £850 / $1,100",
        description: "For businesses with multiple UK branch locations or multi-thousand page e-commerce catalogs.",
        features: [
          "Multi-Location Schema & City Landing Pages",
          "Comprehensive Competitor Keyword Reverse-Engineering",
          "Product Schema with Pricing & Availability Snippets",
          "Indexation Cleanup & Crawl Budget Optimization",
          "$0 Upfront Commitment"
        ]
      }
    ],
    whyChooseUs: [
      { title: "No Fluff, Pure Technical Execution", desc: "We don't send useless 50-page automated PDF reports. We directly fix the code, metadata, and structured schema on your site." },
      { title: "$0 Upfront Guarantee", desc: "We implement and verify the technical SEO changes first. You inspect the Rich Results test before paying a single pound." },
      { title: "No Monthly Lock-In Retainers", desc: "Stop paying £500 every month for an agency to do nothing. We fix your technical SEO permanently with a one-time investment." },
      { title: "UK Registered Agency", desc: "Direct legal accountability with a UK registered entity and top technical SEO engineers based in Pakistan." },
      { title: "Google Rich Results Validated", desc: "Every schema implementation is tested against Google's official Rich Results Test with zero errors or warnings." },
      { title: "Fast 5-Day Delivery", desc: "Complete technical SEO overhaul delivered in 5 business days." }
    ],
    testimonials: [
      {
        quote: "Our website was never showing up in local searches. SaimDev fixed our structured schema, Google Search Console, and local pages. Within 3 weeks we started getting calls from Google Maps searches in our area.",
        client: "Haroon K.",
        role: "Director",
        company: "London Premier Glazing"
      },
      {
        quote: "The FAQ rich snippets appeared on Google search results within 6 days of launch. Outstanding technical SEO expertise.",
        client: "Fiona B.",
        role: "Clinic Director",
        company: "Mayfair Aesthetic Care"
      },
      {
        quote: "Saved us from a £600/month SEO retainer that was doing nothing. Saim's one-time setup did ten times more in one week.",
        client: "George T.",
        role: "Managing Director",
        company: "Apex Commercial Roofing"
      }
    ],
    faqs: [
      {
        question: "What is Schema.org structured data and why does it matter?",
        answer: "Structured data (JSON-LD) is specialized code that explicitly tells Google's search crawlers what your business is, what services you provide, your pricing, and your FAQs. Having valid schema allows Google to display rich snippets (star ratings, FAQ accordions, pricing) directly in search results, doubling your click-through rate."
      },
      {
        question: "How does the $0 upfront guarantee work for SEO?",
        answer: "We perform the technical crawl, write the schema, and configure the on-page metadata on staging. We run Google's official Rich Results Test to prove that your schema is 100% valid and verified. You inspect the results before paying."
      },
      {
        question: "Do you use black-hat techniques or buy spammy backlinks?",
        answer: "Never. We focus 100% on white-hat technical SEO, semantic HTML, site speed, and structured data. We follow Google's official Search Essentials guidelines strictly so your website is safe from algorithmic penalties."
      },
      {
        question: "Are there any monthly charges?",
        answer: "None. We charge a one-time fixed project fee. You own all code and schema permanently without paying monthly retainers."
      },
      {
        question: "How long does it take to see results?",
        answer: "Technical fixes and rich schema are typically indexed by Google within 5 to 14 days of submission to Google Search Console."
      }
    ],
    finalCta: {
      headline: "Google Par Apni Website Ki Organic Ranking Barhayein",
      description: "Send us your website URL today. We will audit your technical SEO and structured data with $0 upfront. Pay only after verified implementation.",
      primaryButtonText: "Claim Your Technical SEO Setup ($0 Upfront)",
      whatsappText: "I want technical & local SEO services with $0 upfront"
    },
    relatedServices: [
      { name: "Website & App Clone ($1,900)", href: "/services/website-clone", desc: "1:1 pixel-perfect recreation of any reference site." },
      { name: "Next.js Website Development", href: "/services/business-websites", desc: "Bespoke company websites built for speed." },
      { name: "Core Web Vitals & Speed", href: "/services/website-speed-optimization", desc: "Sub-second optimization for existing pages." }
    ]
  }
};
