import os

pages = [
    {
        "dir": "app/services/custom-web-apps",
        "title": "Custom Web Application & SaaS Development | Saim Dev",
        "description": "Bespoke full-stack web applications and SaaS MVPs built with Next.js, Node.js, and PostgreSQL. Fast, scalable architecture with 100% code ownership.",
        "canonical": "https://www.saimdev.site/services/custom-web-apps",
        "h1": "Custom Web Application & SaaS MVP Development",
        "badge": "Full-Stack Software Engineering",
        "subtitle": "Bespoke client portals, dynamic dashboards, and full-stack SaaS MVPs built on Next.js 14+ App Router, Node.js, and scalable cloud databases.",
        "timeline": "Launch in 10–14 business days",
        "price": "From £1,250",
        "problems": [
            ("The Off-the-Shelf Trap", "Generic SaaS tools rarely fit unique business workflows, forcing teams to juggle disconnected spreadsheets and pay expensive per-seat subscriptions forever."),
            ("The Slow Agency Nightmare", "Enterprise consultancies charge £25,000 to £50,000+ and take 4 to 8 months to build an MVP, burning through your budget before real users ever see the product."),
            ("Proprietary Lock-in", "Many agencies build on proprietary frameworks that hold your business hostage, requiring expensive monthly retainers just to keep the software running.")
        ],
        "deliverables": [
            ("Role-Based Authentication & Sessions", "Secure JWT / session-based authentication with role permissions (Admin, Member, Client, Billing) and passwordless email login."),
            ("Dynamic Interactive Dashboards", "Responsive data tables with real-time filtering, search, pagination, and visual performance charts (Recharts / SVG)."),
            ("Stripe Subscriptions & Automated Billing", "Seamless Stripe Customer Portal integration for recurring subscriptions, tiered pricing, webhooks, and PDF invoicing."),
            ("Serverless Database Architecture", "Clean PostgreSQL or Supabase data modeling with row-level security (RLS), ACID compliance, and instant edge query speeds."),
            ("REST & GraphQL APIs with Webhooks", "Production-grade endpoints for external integrations, third-party CRM syncing, and automated data processing."),
            ("100% Clean Code & Git Repository Handover", "Complete ownership of the TypeScript codebase, CI/CD pipeline, and hosting accounts with zero ongoing licensing fees.")
        ],
        "faqs": [
            ("How much does a custom web application or SaaS MVP cost?", "At Saim Dev, bespoke web applications and SaaS MVPs start from £1,250 to £2,500 depending on feature scope, user roles, database complexity, and API integrations. We work on a transparent fixed milestone basis: 50% deposit and 50% upon final production deployment approval."),
            ("How long does it take to build and launch an MVP?", "Most custom web app MVPs are architected, developed, and deployed within 10 to 14 business days. We prioritize core high-value features so you can launch to real users and generate revenue rapidly."),
            ("Who owns the code and intellectual property?", "You own 100% of the source code, assets, and database architecture from day one. Upon project completion, we hand over full Git repository access with zero proprietary licensing or hostage retainers."),
            ("What tech stack do you build web applications with?", "We engineer web applications using modern, enterprise-proven stacks: Next.js 14/15 App Router, React 19, TypeScript, Node.js, Tailwind CSS, PostgreSQL, Supabase, and Stripe, deployed on edge infrastructure like Vercel or AWS.")
        ],
        "relatedTools": [
            ("/tools/ppds-label-generator", "PPDS Label Generator", "Production React compliance software"),
            ("/tools/food-cost-calculator", "Commercial Food Cost Calculator", "Interactive formula calculation engine")
        ],
        "relatedBlogs": [
            ("/blog/why-small-business-needs-website", "Why Businesses Need Custom Digital Infrastructure")
        ]
    },
    {
        "dir": "app/services/ecommerce-shopify",
        "title": "Shopify & E-Commerce Web Development UK | Saim Dev",
        "description": "High-converting Shopify and custom e-commerce web development in the UK. Sub-second product filtering, friction-free checkout, and zero lock-in.",
        "canonical": "https://www.saimdev.site/services/ecommerce-shopify",
        "h1": "Shopify & Custom E-Commerce Web Development",
        "badge": "E-Commerce & Retail Engineering",
        "subtitle": "High-converting, bespoke online stores engineered for speed, high average order value (AOV), and frictionless checkout on mobile devices.",
        "timeline": "Launch in 7–12 business days",
        "price": "From £850",
        "problems": [
            ("Sluggish Checkout & Abandoned Carts", "Slow loading themes and clunky checkouts cause up to 70% of shoppers to abandon carts before completing payment."),
            ("Bloated App Store Chaos", "Installing dozens of Shopify apps slows your storefront down, inflates monthly software bills, and creates code conflicts."),
            ("Generic Cookie-Cutter Look", "Standard pre-made templates look identical to competitors, failing to establish the premium brand trust needed for high conversions.")
        ],
        "deliverables": [
            ("Custom Shopify Theme / Headless Commerce", "Bespoke Liquid code or headless Next.js Commerce storefront designed without bloated third-party page builders."),
            ("Instant Faceted Product Search & Filtering", "Sub-second product catalog filtering by size, color, price, and category that works seamlessly on mobile."),
            ("High-Converting Mobile Cart & Upsell Flow", "Slide-out drawer cart with free shipping progress bars, cross-sell recommendation chips, and 1-click checkout."),
            ("Seamless Payment Gateways Integration", "Native Apple Pay, Google Pay, Shop Pay, PayPal, and Stripe integration for friction-free transactions."),
            ("Automated Shipping, Inventory & ERP Sync", "Integration with UK carriers (Royal Mail, DPD) and automated stock tracking across online and physical channels."),
            ("Technical SEO & Schema Product Markup", "Valid Product, Offer, and BreadcrumbList structured data for rich Google Shopping snippets.")
        ],
        "faqs": [
            ("Do you build on Shopify or custom headless commerce?", "We build both! For standard retail brands, we build custom, lightweight Shopify themes using clean Liquid and Tailwind CSS. For high-volume brands requiring extreme performance, we build headless Next.js Commerce storefronts."),
            ("How much does a custom Shopify or e-commerce website cost?", "Our custom e-commerce storefronts start from £850 for boutique online shops up to £1,800+ for multi-category enterprise stores with complex shipping logic. All pricing is fixed and transparent."),
            ("Can you migrate my store from WooCommerce or Magento to Shopify?", "Yes. We handle complete catalog migrations — transferring product data, customer accounts, order history, and 301 SEO redirects to preserve your Google rankings."),
            ("Will my e-commerce site load fast on mobile devices?", "Yes. We strictly optimize assets, eliminate unneeded tracking scripts, and target mobile LCP under 2.5s and zero layout shifts.")
        ],
        "relatedTools": [
            ("/tools/food-cost-calculator", "Food Cost Calculator", "E-commerce margin and pricing protection"),
            ("/tools/recipe-batch-calculator", "Recipe Batch Scaler", "Wholesale inventory and production scaling")
        ],
        "relatedBlogs": [
            ("/blog/mastering-food-cost-percentage-commercial-kitchen-calculator", "Protecting Product Margins in Commercial Retail")
        ]
    },
    {
        "dir": "app/services/business-websites",
        "title": "Bespoke Business Website Design & Development | Saim Dev",
        "description": "Custom business websites for UK and European companies. High-converting design, sub-second Next.js speed, and built-in local SEO to win client enquiries.",
        "canonical": "https://www.saimdev.site/services/business-websites",
        "h1": "Bespoke Business Website Design & Development",
        "badge": "Corporate & B2B Flagships",
        "subtitle": "Authoritative, lead-generating digital flagships for professional services, consultancies, healthcare, and ambitious commercial businesses.",
        "timeline": "Launch in 5–10 business days",
        "price": "From £550",
        "problems": [
            ("Outdated Websites That Repel Clients", "A slow, dated website immediately damages credibility when prospective B2B clients research your services."),
            ("Zero Organic Google Visibility", "Websites built on amateur visual builders lack semantic HTML, schema markup, and speed, leaving them buried on page 4 of Google."),
            ("No Clear Lead Generation Funnel", "Websites that act as passive online brochures fail to capture contact details or convert traffic into qualified sales calls.")
        ],
        "deliverables": [
            ("Bespoke Brand & UI/UX Architecture", "Tailored visual identity designed to reflect your authority, professionalism, and industry leadership."),
            ("Conversion-Focused Lead Funnels", "Strategic placement of contact forms, booking flows, case studies, and WhatsApp direct consultation triggers."),
            ("Complete Technical SEO & Local Schema", "Comprehensive JSON-LD structured data (ProfessionalService, Organization, FAQPage) for UK search visibility."),
            ("Sub-Second Next.js Performance", "Lightning-fast static site generation (SSG) with optimized media delivery ensuring green Core Web Vitals."),
            ("Dynamic Content Management System", "Effortless content updating for team members to edit services, case studies, and articles without touching code."),
            ("100% Code Ownership & Hosting Setup", "Full Git repository transfer with free SSL, custom domain DNS routing, and zero mandatory agency retainers.")
        ],
        "faqs": [
            ("How much does a bespoke business website cost?", "Our professional business website packages range from £550 for standard 5-to-10 page company websites to £950 for multi-service corporate platforms. Every package has a fixed price and transparent deliverables."),
            ("How long does it take to build a business website?", "Typically 5 to 10 business days from initial discovery to final deployment on your domain."),
            ("Can I edit text and add new blog posts myself?", "Yes! We build with clean CMS integrations (such as custom WordPress or Sanity) allowing you to easily edit text, update case studies, and publish news without needing a developer."),
            ("Do you provide hosting and email setup?", "Yes. We guide you through ultra-fast, affordable cloud hosting setup (often £0–£10/month on platforms like Vercel or Cloudflare) and configure custom domain email with zero agency markups.")
        ],
        "relatedTools": [
            ("/tools/allergen-matrix-generator", "Allergen Matrix Builder", "Demonstration of client-side operational tooling"),
            ("/tools/ppds-label-generator", "PPDS Label Maker", "Compliance tool demonstrating clean UI/UX")
        ],
        "relatedBlogs": [
            ("/blog/why-small-business-needs-website", "How Modern Web Architecture Drives Commercial Growth")
        ]
    },
    {
        "dir": "app/services/wordpress-headless-cms",
        "title": "Custom WordPress & Headless CMS Development | Saim Dev",
        "description": "Clean custom WordPress and headless CMS development (Sanity, Strapi). Effortless visual content editing for your team with zero theme or plugin bloat.",
        "canonical": "https://www.saimdev.site/services/wordpress-headless-cms",
        "h1": "Custom WordPress & Headless CMS Engineering",
        "badge": "Editorial CMS Architecture",
        "subtitle": "Empower your marketing team with effortless visual editing while keeping your frontend blisteringly fast, secure, and bloat-free.",
        "timeline": "Launch in 7–10 business days",
        "price": "From £650",
        "problems": [
            ("The 'Plugin Soup' Crisis", "Standard WordPress sites accumulate 40+ plugins that slow down mobile load times, break during updates, and expose security vulnerabilities."),
            ("Clunky Visual Page Builders", "Builders like Elementor and Divi inject thousands of lines of bloated DOM elements that tank Google Core Web Vitals scores."),
            ("Hacked WordPress Websites", "Outdated themes and unmaintained plugins make traditional WordPress sites the #1 target for automated bot attacks.")
        ],
        "deliverables": [
            ("Bespoke WordPress Themes / Gutenberg Blocks", "Hand-crafted lightweight theme built from scratch with custom modular Gutenberg blocks tailored to your design."),
            ("Modern Headless CMS Architectures", "Decoupled Sanity.io or Strapi CMS with a blazing-fast Next.js frontend, separating content editing from frontend rendering."),
            ("Zero Unneeded Third-Party Plugins", "Core functionality engineered natively into theme code to eliminate security risks and update headaches."),
            ("Automated Image Optimization & CDN", "Next-gen WebP/AVIF media delivery via global Cloudflare or Vercel edge caching."),
            ("Rigorous Security Hardening", "Disabled XML-RPC, custom admin paths, strict Content Security Policy (CSP), and automated off-site backups."),
            ("Staff CMS Training & Documentation", "Short video walkthroughs and clean documentation showing your team how to publish and edit content effortlessly.")
        ],
        "faqs": [
            ("What is the difference between custom WordPress and Headless CMS?", "Custom WordPress builds a lightweight, tailored theme on the WordPress backend. Headless CMS completely separates the editor (e.g. Sanity or WordPress) from the frontend (Next.js), giving maximum speed and security while retaining visual editing."),
            ("Can you clean up and speed up our existing WordPress site?", "Yes! We frequently rebuild bloated WordPress websites into clean, modern architectures, removing unused plugins while preserving all existing URLs and Google rankings."),
            ("How much does custom WordPress or Headless CMS development cost?", "Custom WordPress and Headless CMS projects start from £650 for clean editorial sites up to £1,400 for complex multi-author corporate publications."),
            ("Who owns the CMS and database?", "You do. You retain 100% administrative access to your CMS, hosting accounts, and Git repositories with zero monthly agency lock-in.")
        ],
        "relatedTools": [
            ("/tools/allergen-matrix-generator", "Allergen Matrix Generator", "Custom data management application"),
            ("/tools/food-cost-calculator", "Food Cost Calculator", "Complex pricing calculation tool")
        ],
        "relatedBlogs": [
            ("/blog/free-website-for-local-business", "Avoiding Hidden Costs and Retainer Traps in Web Design")
        ]
    },
    {
        "dir": "app/services/landing-pages-cro",
        "title": "High-Converting Landing Page Design & CRO | Saim Dev",
        "description": "High-converting landing page development for Google Ads, Meta campaigns, and product launches. Persuasion-led copywriting and sub-second loading speed.",
        "canonical": "https://www.saimdev.site/services/landing-pages-cro",
        "h1": "High-Converting Landing Pages & CRO Funnels",
        "badge": "Paid Traffic & CRO Engineering",
        "subtitle": "Laser-targeted single-page conversion funnels engineered to maximize your return on ad spend (ROAS) and slash customer acquisition costs (CAC).",
        "timeline": "Launch in 3–5 business days",
        "price": "From £250",
        "problems": [
            ("Wasted Ad Spend on Leaky Pages", "Sending paid Google Ads or Meta traffic to generic homepages wastes up to 80% of ad budgets because visitors don't see a targeted offer."),
            ("Slow Mobile Load = Immediate Bounce", "Every additional second a landing page takes to load increases bounce rate by over 30%, destroying your Quality Score."),
            ("Weak Copywriting & Missing Proof", "Pages that talk about company features rather than solving customer pain points fail to convert visitors into paying leads.")
        ],
        "deliverables": [
            ("Direct-Response Copywriting Structure", "Headlines, value propositions, and objection-handling copy crafted around proven persuasion frameworks."),
            ("Sub-Second Mobile Load Times", "Lightweight Next.js SSR architecture designed to pass Core Web Vitals and maximize Google Ads Quality Score."),
            ("Frictionless Lead Capture Forms", "Optimized 2-step lead forms, calendar booking embeds, and 1-click WhatsApp consultation triggers."),
            ("Comprehensive Event Tracking & Analytics", "Configured Google Analytics 4 (GA4), Meta Pixel, Google Tag Manager, and conversion goals to track every lead."),
            ("Mobile-First Fluid Layout", "Pixel-perfect mobile responsiveness designed for on-the-go paid ad traffic."),
            ("A/B Split-Testing Ready", "Modular architecture structured to easily test alternative headlines, offers, and call-to-action buttons.")
        ],
        "faqs": [
            ("How much does a high-converting landing page cost?", "Our landing page development starts at £250 for a high-converting single offer page, and £390 for multi-step campaign funnels with advanced analytics integrations."),
            ("How fast can you launch our landing page?", "Landing pages are typically delivered, reviewed, and deployed within 3 to 5 business days."),
            ("Can you integrate our CRM and email marketing tool?", "Yes. We integrate lead forms directly with HubSpot, ActiveCampaign, Mailchimp, Zapier, or WhatsApp webhooks."),
            ("Will this landing page improve our Google Ads Quality Score?", "Yes. Google Ads rewards landing pages with fast load times, mobile friendliness, and high message relevance with lower cost-per-click (CPC) and higher ad rankings.")
        ],
        "relatedTools": [
            ("/tools/food-cost-calculator", "Food Cost Calculator", "High-intent lead generation interactive tool"),
            ("/tools/ppds-label-generator", "PPDS Label Generator", "Interactive conversion tool showcase")
        ],
        "relatedBlogs": [
            ("/blog/50-percent-off-agency-launch", "Conversion Strategies for High-Impact Campaign Launches")
        ]
    },
    {
        "dir": "app/services/website-speed-optimization",
        "title": "Website Speed Optimization & Core Web Vitals | Saim Dev",
        "description": "Professional website speed optimization in the UK. Eliminate render-blocking bloat, achieve LCP under 2.5s, and pass Google Core Web Vitals on mobile.",
        "canonical": "https://www.saimdev.site/services/website-speed-optimization",
        "h1": "Website Speed Optimization & Core Web Vitals",
        "badge": "Performance Engineering",
        "subtitle": "Eliminate render-blocking assets, slash mobile loading times, pass Google Core Web Vitals, and eliminate speed-related SEO ranking penalties.",
        "timeline": "Delivered in 2–4 business days",
        "price": "From £350",
        "problems": [
            ("Google Core Web Vitals Penalties", "Google penalizes slow websites in search rankings when mobile pages fail Largest Contentful Paint (LCP) and Interaction to Next Paint (INP)."),
            ("High Mobile Bounce Rates", "Over 53% of mobile visits are abandoned if a page takes more than 3 seconds to load."),
            ("Unoptimized Media & Third-Party Bloat", "Bloated uncompressed PNGs, tracking scripts, and redundant CSS/JS block the main browser thread.")
        ],
        "deliverables": [
            ("LCP & INP Remediation", "Targeting LCP under 2.5s and INP under 200ms through critical CSS inlining and script deferral."),
            ("Next-Gen Media Conversion (WebP / AVIF)", "Full image compression, automated responsive srcset generation, and lazy-loading implementation."),
            ("Code Splitting & Render-Blocking Script Elimination", "Auditing and removing unused JavaScript/CSS and moving non-essential third-party tags off the critical path."),
            ("Edge Caching & Cloudflare CDN Setup", "Configuring browser caching, Brotli compression, and global edge cache rules for sub-second TTFB."),
            ("Cumulative Layout Shift (CLS 0.00) Fixes", "Adding explicit image aspect ratios and font-display swap rules to eliminate visual layout jank."),
            ("Before vs After Verified Speed Audit Report", "Detailed measured report showing real improvements in Google Lighthouse, PageSpeed Insights, and Core Web Vitals.")
        ],
        "faqs": [
            ("How much does website speed optimization cost?", "Our speed optimization packages range from £350 for standard brochure websites to £750 for large e-commerce catalogs or complex WordPress installations."),
            ("How long does the optimization take?", "Most speed overhauls are completed within 2 to 4 business days on a staging environment before pushing live."),
            ("Do you offer guarantees on Core Web Vitals?", "We guarantee measurable improvements on mobile and desktop metrics, targeting green Google Core Web Vitals (LCP under 2.5s, CLS under 0.1, INP under 200ms)."),
            ("Will the speed optimization break any existing features?", "No. All optimization work is performed on a secure branch or staging clone, tested across devices, and verified for full functionality before going live.")
        ],
        "relatedTools": [
            ("/tools/recipe-batch-calculator", "Recipe Batch Scaler", "Demonstration of zero-latency client calculation"),
            ("/tools/allergen-matrix-generator", "Allergen Matrix Builder", "High-performance instant filtering tool")
        ],
        "relatedBlogs": [
            ("/blog/free-website-for-local-business", "Why Performance Is Critical for Organic Search Rankings")
        ]
    }
]

def generate_service_page(p):
    os.makedirs(p["dir"], exist_ok=True)
    file_path = os.path.join(p["dir"], "page.tsx")

    faq_schema_items = []
    for q, a in p["faqs"]:
        faq_schema_items.append({
            "@type": "Question",
            "name": q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": a
            }
        })

    import json
    service_schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": p["h1"],
        "description": p["description"],
        "provider": {
            "@type": "Organization",
            "name": "Saim Dev",
            "url": "https://www.saimdev.site"
        },
        "areaServed": [
            {"@type": "Country", "name": "United Kingdom"},
            {"@type": "Country", "name": "United States"},
            {"@type": "AdministrativeArea", "name": "European Union"}
        ],
        "offers": {
            "@type": "Offer",
            "price": p["price"].replace("From £", "").replace("Fixed £", ""),
            "priceCurrency": "GBP"
        }
    }

    faq_schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faq_schema_items
    }

    breadcrumb_schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.saimdev.site"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://www.saimdev.site/services"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": p["h1"],
                "item": p["canonical"]
            }
        ]
    }

    code = f'''import type {{ Metadata }} from "next";
import Link from "next/link";
import {{ ArrowRight, CheckCircle2, AlertCircle, Clock, ShieldCheck, ChevronRight, HelpCircle }} from "lucide-react";
import {{ SiteFooter }} from "@/components/SiteFooter";

export const metadata: Metadata = {{
  title: "{p["title"]}",
  description: "{p["description"]}",
  alternates: {{
    canonical: "{p["canonical"]}",
  }},
  openGraph: {{
    title: "{p["title"]}",
    description: "{p["description"]}",
    url: "{p["canonical"]}",
    siteName: "Saim Dev",
    locale: "en_GB",
    type: "website",
  }},
  twitter: {{
    card: "summary_large_image",
    title: "{p["title"]}",
    description: "{p["description"]}",
    creator: "@saimwebdev",
  }},
}};

const serviceSchema = {json.dumps(service_schema, indent=2)};
const faqSchema = {json.dumps(faq_schema, indent=2)};
const breadcrumbSchema = {json.dumps(breadcrumb_schema, indent=2)};

export default function ServicePage() {{
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#FF4A1C] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{{{ __html: JSON.stringify(serviceSchema) }}}}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{{{ __html: JSON.stringify(faqSchema) }}}}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{{{ __html: JSON.stringify(breadcrumbSchema) }}}}
      />

      {{/* HEADER / NAVIGATION */}}
      <header className="border-b border-white/10 bg-black/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF4A1C] group-hover:scale-125 transition-transform" />
            <span className="font-bold text-white tracking-tight text-lg">Saim Dev</span>
          </Link>

          <nav className="flex items-center gap-4 text-xs font-mono uppercase tracking-wider">
            <Link href="/" className="text-white/70 hover:text-white transition-colors">Home</Link>
            <span className="text-white/20">/</span>
            <Link href="/services" className="text-white/70 hover:text-white transition-colors">All Services</Link>
            <span className="text-white/20">/</span>
            <Link href="/pricing" className="text-white/70 hover:text-white transition-colors">Pricing</Link>
            <span className="text-white/20">/</span>
            <Link href="/tools" className="text-white/70 hover:text-white transition-colors">160 Tools</Link>
          </nav>
        </div>
      </header>

      {{/* BREADCRUMBS */}}
      <div className="border-b border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-xs text-white/70 font-mono">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/30" />
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/30" />
          <span className="text-white font-medium truncate">{p["badge"]}</span>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {{/* HERO SECTION */}}
        <section className="max-w-4xl mx-auto text-center mb-20 sm:mb-28">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#FF4A1C] animate-pulse" />
            <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-white/80">
              {p["badge"]}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white mb-6 leading-[1.08]" style={{{{ letterSpacing: "-0.04em" }}}}>
            {p["h1"]}
          </h1>

          <p className="text-base sm:text-xl text-white/70 leading-relaxed font-light mb-8 max-w-3xl mx-auto">
            {p["subtitle"]}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-white/75 mb-10">
            <span className="px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#FF4A1C]" />
              <span>{p["timeline"]}</span>
            </span>
            <span className="px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% Code Ownership</span>
            </span>
            <span className="px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-white font-medium">
              <span>{p["price"]}</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/923196526604?text=Hi%20Saim,%20I'm%20interested%20in%20discussing%20{p["badge"]}"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#FF4A1C] hover:bg-[#FF4A1C]/90 text-white font-semibold text-sm tracking-tight shadow-[0_4px_24px_rgba(255,74,28,0.3)] transition-all active:scale-95"
            >
              <span>Discuss Project on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/#estimator"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.06] hover:bg-white/15 border border-white/15 text-white font-medium text-sm tracking-tight transition-colors"
            >
              <span>Instant Scope Estimator</span>
            </Link>
          </div>
        </section>

        {{/* PROBLEMS SOLVED */}}
        <section className="mb-20 sm:mb-28">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF4A1C] block mb-2">Market Reality</span>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">Why standard agency approaches fall short</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            ''' + "".join([f'''
            <div className="p-6 sm:p-8 rounded-3xl bg-[#121212] border border-white/10 shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-5">
                <AlertCircle className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-lg font-medium text-white tracking-tight mb-2.5">{prob[0]}</h3>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">{prob[1]}</p>
            </div>
            ''' for prob in p["problems"]]) + f'''
          </div>
        </section>

        {{/* DETAILED DELIVERABLES */}}
        <section className="mb-20 sm:mb-28">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF4A1C] block mb-2">What We Deliver</span>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">Engineering deliverables &amp; specifications</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            ''' + "".join([f'''
            <div className="p-6 sm:p-8 rounded-3xl bg-[#121212] border border-white/10 shadow-xl flex items-start gap-4">
              <CheckCircle2 className="w-5 h-5 text-[#FF4A1C] shrink-0 mt-1" />
              <div>
                <h3 className="text-base sm:text-lg font-medium text-white tracking-tight mb-1.5">{deliv[0]}</h3>
                <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">{deliv[1]}</p>
              </div>
            </div>
            ''' for deliv in p["deliverables"]]) + f'''
          </div>
        </section>

        {{/* REAL PEOPLE ALSO ASK FAQS */}}
        <section className="mb-20 sm:mb-28">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF4A1C] block mb-2">Direct Answers</span>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            ''' + "".join([f'''
            <details className="p-6 rounded-2xl bg-[#121212] border border-white/10 cursor-pointer group" open>
              <summary className="font-medium text-base sm:text-lg text-white list-none flex items-center justify-between gap-4">
                <span>{faq[0]}</span>
                <HelpCircle className="w-4 h-4 text-white/40 group-hover:text-[#FF4A1C] transition-colors shrink-0" />
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-white/70 font-light leading-relaxed pt-3 border-t border-white/5">
                {faq[1]}
              </p>
            </details>
            ''' for faq in p["faqs"]]) + f'''
          </div>
        </section>

        {{/* TWO-WAY INTERNAL LINKS (Tools & Blogs) */}}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 text-center mb-16">
          <h2 className="text-xl sm:text-2xl font-medium text-white mb-3">Explore Related Tools &amp; Case Studies</h2>
          <p className="text-xs sm:text-sm text-white/70 mb-8 max-w-xl mx-auto font-light">
            Review live interactive compliance software, open calculation engines, and engineering guides built by our studio.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left">
            ''' + "".join([f'''
            <Link href="{tool[0]}" className="p-4 rounded-2xl bg-black/60 border border-white/10 hover:border-[#FF4A1C]/50 transition-all group">
              <span className="text-[10px] font-mono text-[#FF4A1C] uppercase block mb-1">Interactive Software</span>
              <span className="text-sm font-medium text-white group-hover:text-[#FF4A1C] transition-colors block">{tool[1]}</span>
              <span className="text-xs text-white/60 font-light block mt-1">{tool[2]}</span>
            </Link>
            ''' for tool in p["relatedTools"]]) + "".join([f'''
            <Link href="{blog[0]}" className="p-4 rounded-2xl bg-black/60 border border-white/10 hover:border-[#FF4A1C]/50 transition-all group">
              <span className="text-[10px] font-mono text-emerald-400 uppercase block mb-1">Technical Guide</span>
              <span className="text-sm font-medium text-white group-hover:text-emerald-400 transition-colors block">{blog[1]}</span>
              <span className="text-xs text-white/60 font-light block mt-1">Read technical architecture analysis</span>
            </Link>
            ''' for blog in p["relatedBlogs"]]) + f'''
          </div>
        </section>

        {{/* BOTTOM CTA */}}
        <section className="text-center py-12 border-t border-white/10">
          <h2 className="text-2xl sm:text-3xl font-medium text-white mb-4">Ready to engineer your platform?</h2>
          <p className="text-xs sm:text-sm text-white/70 mb-8 max-w-lg mx-auto font-light">
            Contact our senior software engineer directly for a transparent scope review and fixed milestone quote.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20get%20started%20with%20{p["badge"]}"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-neutral-100 text-black font-semibold text-sm tracking-tight transition-all active:scale-95"
            >
              <span>Start on WhatsApp (+92 319 6526604)</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.06] hover:bg-white/15 border border-white/15 text-white font-medium text-sm tracking-tight transition-colors"
            >
              <span>Submit Web Inquiry</span>
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter theme="dark" />
    </div>
  );
}}
'''
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(code)
    print(f"Created: {file_path}")

for p in pages:
    generate_service_page(p)

print("All 6 supporting service pages generated successfully.")
