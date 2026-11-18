"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Eye, Monitor, Tablet, Smartphone, CheckCircle2, ArrowLeft, ArrowRight, X } from "lucide-react";
import { FooterSection } from "./FooterSection";
import { RhHeader } from "./rh/RhHeader";
import {
  RhHeroPinned,
  RhProcessCarousel,
  RhSystemRows,
} from "./rh/RhModernSections";

interface DemoItem {
  id: string;
  title: string;
  category: string;
  description: string;
  demoUrl: string;
  previewImage: string;
  tags: string[];
  features: string[];
  badge?: string;
}

const demos: DemoItem[] = [
  {
    id: "hq-leathercon",
    title: "HQ Leathercon – E-Commerce Storefront",
    category: "E-Commerce / Shopify",
    description: "A bespoke luxury leather e-commerce storefront featuring 1,500+ interactive pages, multi-collection lookbooks, flagship product detail pages, custom jacket builders, and responsive mobile architecture.",
    demoUrl: "/hq-leathercon/index.html",
    previewImage: "/demos/previews/hq-leathercon-ecommerce-storefront.webp",
    tags: ["E-Commerce", "Shopify", "Interactive Storefront", "Full Catalog"],
    features: [
      "Complete Enterprise Storefront Architecture",
      "Full Multi-Collection Navigation (Men, Women, Custom)",
      "Flagship Product Pages with Swatches & Specs",
      "Custom Leather Goods & Bespoke Workflows",
      "Responsive Desktop & Mobile Viewports"
    ],
    badge: "Flagship E-Commerce"
  },
  {
    id: "hotbite",
    title: "Hotbite – Street Food That Hits",
    category: "Fast Food & Street Food",
    description: "An energetic, high-converting modern street food brand website featuring interactive food sliders, dynamic menus, bold typography, and smooth micro-interactions.",
    demoUrl: "/hotbite/index.html",
    previewImage: "/demos/previews/hotbite-street-food-takeaway.webp",
    tags: ["Fast Food", "Street Food", "Framer", "Interactive Slider"],
    features: [
      "Interactive Pizza & Food Slider",
      "Categorised Street Food Menu & Combos",
      "Social Proof & Testimonials Showcase",
      "Responsive Layout & Smooth Scroll"
    ],
    badge: "Production Architecture"
  },
  {
    id: "burger-garage",
    title: "Burger Garage",
    category: "Restaurant & Fast Food",
    description: "Bespoke high-performance digital menu & fast-casual restaurant architecture.",
    demoUrl: "/burger-garage/index.html",
    previewImage: "/demos/previews/burger-garage-restaurant-branding.webp",
    tags: ["Restaurant", "Burger", "HTML5"],
    features: [
      "Pixel-Perfect Responsive Engineering",
      "Interactive Food Menus",
      "Fully Responsive Design"
    ],
    badge: "New Release"
  },
  
  
  
  
  {
    id: "frenchyse",
    title: "Frenchyse Restaurant",
    category: "Restaurant & Luxury Dining",
    description: "Bespoke fine-dining & luxury hospitality web experience tailored for reservations.",
    demoUrl: "/frenchyse/index.html",
    previewImage: "/demos/previews/frenchyse-takeaway-restaurant-banner.webp",
    tags: ["Restaurant", "Luxury", "GSAP Scroll", "HTML5"],
    features: [
      "Scroll-Triggered Burger Animation",
      "Interactive Food Menus",
      "Parallax & Animations",
      "Fully Responsive Design"
    ],
    badge: "Bespoke Architecture"
  },
  {
    id: "anzaar-rooftop",
    title: "ANZAAR Rooftop",
    category: "Restaurant & Luxury Dining",
    description: "A bespoke culinary web platform showcasing dynamic scroll animations, luxury styling, and fully animated food visualizers.",
    demoUrl: "/anzaar/index.html",
    previewImage: "/demos/previews/anzaar-rooftop-restaurant-banner.webp",
    tags: ["Restaurant", "Luxury", "GSAP Scroll", "HTML5"],
    features: [
      "Scroll-Triggered Burger Animation",
      "Interactive Food Menus",
      "Parallax & Animations",
      "Fully Responsive Design"
    ],
    badge: "New Release"
  },
  {
    id: "architecture",
    title: "Architecture & Interior",
    category: "Corporate / Agency",
    description: "Premium architecture and interior design agency website with minimalist layouts and smooth scrolling.",
    demoUrl: "/demos/architecture/index.html",
    previewImage: "/demos/previews/architecture-interior-studio-design.webp",
    tags: ["Webflow", "HTML5", "CSS3"],
    features: ["Project Showcase", "Minimalist UI", "Dark Mode Ready", "CMS Ready"],
  },

  {
    id: "woshico",
    title: "Woshico Cleaning (Next.js)",
    description: "A pixel-perfect Webflow to Next.js 14 port. Built with React Server Components, pure CSS Modules (no Tailwind), and strict performance optimizations.",
    category: "Business Landing",
    features: [
      "Next.js 14 App Router",
      "CSS Modules & TypeScript",
      "Zero-Tailwind Architecture",
      "Hardware-Accelerated Smooth Scroll"
    ],
    tags: ["Next.js 14", "CSS Modules", "TypeScript", "Port"],
    demoUrl: "/demos/woshico/index.html",
    previewImage: "/demos/previews/woshico-cleaning-services-preview.webp",
    badge: "Next.js App"
  }
,
  {
    id: "akdetailing",
    title: "DetailX - Car Detailing, Auto Shop & Repair",
    category: "Car Detailing & Automotive Repair",
    description: "An ultra-modern, high-performance automotive detailing and car repair website featuring full-motion video hero, interactive service showcases, multi-step quote booking, pricing tiers, and client reviews.",
    demoUrl: "/demos/akdetailing/index.html",
    previewImage: "/demos/previews/detailx-car-detailing-auto-repair.webp",
    tags: ["Car Detailing", "Auto Repair", "Video Hero", "Quote Booking"],
    features: [
      "Full 6-Page Multi-Page Ecosystem (Home, Services, Pricing, Quote, Blog, About)",
      "High-Impact Dark Aesthetic & 100% Native Video Background",
      "Comprehensive Detailing Packages & Service Estimator",
      "100% Offline Asset Bundling & Responsive Perfection"
    ],
    badge: "New Client Release"
  },
  {
    id: "beauticiansonthego",
    title: "Beauticians On The Go - Mobile Day Spa & Beauty Salon",
    category: "Mobile Day Spa & Beauty Salon",
    description: "An upscale on-demand mobile day spa and beauty salon website with full service pricing catalogs, Revolution Slider hero, founder story, interactive FAQs, and quote request booking flow.",
    demoUrl: "/demos/beauticiansonthego/index.html",
    previewImage: "/demos/previews/beauticians-on-the-go-mobile-day-spa.webp",
    tags: ["Mobile Spa", "Beauty Salon", "Full Catalog", "Quote Booking"],
    features: [
      "Full 5-Page Multi-Page Ecosystem (Home, About, Services, FAQ, Contact)",
      "Comprehensive 65-Service Pricing Catalog & Specials",
      "Interactive Get-a-Quote & Service Request System",
      "100% Offline Asset & Revolution Slider Architecture"
    ],
    badge: "New Client Release"
  },
      {
    id: "atelier-noir",
    title: "ATELIER NOIR - Luxury Interior Architecture & Design",
    category: "Interior Architecture & Luxury Living",
    description: "A minimalist, editorial interior design and architecture studio showcase featuring high-end residential case studies, filterable project portfolios, and architectural project enquiry flows.",
    demoUrl: "/demos/atelier-noir/index.html",
    previewImage: "/demos/previews/atelier-noir-luxury-interior-design.webp",
    tags: ["Interior Design", "Architecture", "Minimalist Luxury", "Editorial Layout"],
    features: [
      "Editorial Minimalist Aesthetic & Geist Typography",
      "Comprehensive 5-Project Deep-Dive Case Studies",
      "Curated Residential & Penthouse Visual Portfolio",
      "Interactive Architecture Project Consultation System"
    ],
    badge: "Featured Production"
  },
  {
    id: "serenia",
    title: "SERENIA - Luxury Wellness & Beauty Spa",
    category: "Wellness Sanctuary & Day Spa",
    description: "A tranquil, nature-inspired luxury wellness and day spa website featuring full appointment booking, 8 signature therapy showcases, organic cosmetics shop, treatment pricing, and sanctuary lookbook.",
    demoUrl: "/demos/serenia/index.html",
    previewImage: "/demos/previews/serenia-luxury-wellness-spa.webp",
    tags: ["Wellness & Spa", "Appointment Booking", "Cosmetics Shop", "Complete Platform"],
    features: [
      "Tranquil Earth-Toned Aesthetic & Belleza Typography",
      "Comprehensive 8-Therapy Service Catalog & Day Passes",
      "Organic Beauty & Skincare E-Commerce Showcase",
      "Interactive Appointment Reservation & 100% Offline Assets"
    ],
    badge: "Featured Production"
  },
  {
    id: "valeria",
    title: "VALERIA - Luxury Beauty Salon & Cosmetics",
    category: "Beauty Salon & High-End Aesthetics",
    description: "An ultra-luxurious, editorial aesthetic beauty salon platform featuring animated hero marquees, comprehensive multi-page service menus, curated lookbook gallery, and interactive booking enquiry.",
    demoUrl: "/demos/valeria/index.html",
    previewImage: "/demos/previews/valeria-luxury-beauty-salon.webp",
    tags: ["Luxury Design", "Beauty & Cosmetics", "Editorial Aesthetic", "Full Template"],
    features: [
      "High-Fashion Editorial Aesthetic & Italiana Typography",
      "Full 18-Page Ecosystem (Services, Lookbook, Team, Blog, Pricing)",
      "Interactive Consult & Shine Appointment System",
      "100% Offline Asset Bundling & Smooth Animations"
    ],
    badge: "Latest Release"
  },
  {
    id: "studio-dbrickell",
    title: "Studio-D Brickell - Luxury Beauty Salon & Spa",
    category: "Beauty Salon & Miami Luxury Services",
    description: "A high-performance custom digital flagship engineered for premier salons and luxury studios. Features top announcement discounts, luxury service showcases, K-rastase & Shu Uemura highlights, online booking, and a mobile quick-action bar.",
    demoUrl: "/demos/studio-dbrickell/index.html",
    previewImage: "/demos/previews/studio-dbrickell-luxury-beauty-spa.webp",
    tags: ["Pixel-Perfect UI", "Beauty Salon", "Luxury Spa", "Mobile First"],
    features: [
      "100% Pixel-Perfect Visual Fidelity",
      "K-rastase & Shu Uemura Luxury Spotlight",
      "Interactive Online Booking & Mangomint Integration",
      "Mobile Sticky Bar & Responsive Fluid Grids"
    ],
    badge: "New Release"
  },
  {
    id: "liana",
    title: "LIANA - Luxury Hair & Beauty Salon Experience",
    category: "Beauty Salon & Online Booking",
    description: "A pixel-perfect, ultra-fast custom web architecture engineered for luxury hair & beauty brands. Features online booking, signature treatments menu, master stylists showcase, and responsive mobile-first design.",
    demoUrl: "/demos/liana/index.html",
    previewImage: "/demos/previews/liana-luxury-hair-beauty-salon.webp",
    tags: ["Clean Code", "Beauty Salon", "Booking System", "Fast Loading"],
    features: [
      "Pixel-Perfect Luxury Design & Typography",
      "Interactive Online Booking Form",
      "Full Subpages (Services, About & Team, Contact)",
      "Mobile-First Responsive Layout & Fast Loading"
    ],
    badge: "Featured Live Demo"
  }
];

interface DemosPageProps {
  onBack?: () => void;
}

export const DemosPage: React.FC<DemosPageProps> = ({ onBack: _onBack }) => {
  const [selectedDemo, setSelectedDemo] = useState<DemoItem | null>(null);
  const [viewportMode, setViewportMode] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  useEffect(() => {
    if (!selectedDemo) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedDemo(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedDemo]);

  const categories = ["All", "E-Commerce", "Restaurant", "Corporate", "Portfolio"];
  const filteredDemos =
    activeCategory === "All"
      ? demos
      : demos.filter(
          (d) =>
            d.category.toLowerCase().includes(activeCategory.toLowerCase()) ||
            d.tags.some((t) => t.toLowerCase().includes(activeCategory.toLowerCase()))
        );

  return (
    <div className="rh-page min-h-screen bg-[#0D0D0D] text-white selection:bg-[#BAFF00] selection:text-[#0D0D0D] flex flex-col justify-between">
      <RhHeader theme="dark" />

      <main className="flex-1">
      {/* 1. EXACT rh.design PAGE-OPEN HERO (3D Mobile WebM + Laser-Draw Strip) */}
      <RhHeroPinned
        badge="9 Reference Production Builds"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Live Demos" },
        ]}
        title={
          <>
            Takeaway, Restaurant{" "}
            <span className="text-[#939393]">&amp; Business Website Demos</span>
          </>
        }
        subtitle="Explore interactive restaurant website demos, bespoke e-commerce storefronts, and production Next.js applications built by Saim Dev. Test live ordering flows, GSAP scroll choreography, sub-second mobile speed, and Natasha's Law allergen filters."
        primaryCta={{ label: "Request Custom Concept", href: "/contact" }}
        secondaryCta={{ label: "Browse Interactive Grid", href: "#live-demos-grid" }}
        videoType="mobile"
        stripLabel="Shipped architectures · Tap to inspect"
        stripItems={[
          {
            label: "01. Takeaway Demos",
            tag: "0% Commission",
            tagValue: "Allergen Menu",
            summary: "Direct UK ordering builds with live Natasha's Law 14-allergen filtering and WhatsApp dispatch.",
            href: "/services/takeaway-web-design",
          },
          {
            label: "02. Headless Storefronts",
            tag: "E-Commerce",
            tagValue: "App Router",
            summary: "Custom catalogue, variant selection, and Stripe/Shopify headless checkout prototypes.",
            href: "/services/ecommerce-development",
          },
          {
            label: "03. Luxury Service Sites",
            tag: "Motion UI",
            tagValue: "Target 95+ CWV",
            summary: "High-contrast automotive, wellness, and studio sites engineered with GSAP choreography.",
            href: "/services/website-development",
          },
          {
            label: "04. 1:1 Code Rebuilds",
            tag: "Custom Build",
            tagValue: "Full Git Repo",
            summary: "Pixel-accurate Next.js 16 & Tailwind reconstructions with complete GitHub ownership.",
            href: "/services/website-clone",
          },
        ]}
      />

      {/* 2. INTERACTIVE PORTFOLIO SHOWCASE */}
      <div
        id="live-demos-grid"
        className="relative z-10 py-16 sm:py-24 px-5 max-w-[1168px] mx-auto flex-1 w-full bg-[#0D0D0D]"
      >
        {/* Filter Header Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 mb-12 border-b border-[#202020]">
          <div>
            <span className="text-[11px] font-mono-tech uppercase tracking-[0.25em] text-[#BAFF00] block mb-2.5">
              FILTER LIVE ARCHITECTURES
            </span>
            <h2 className="text-[clamp(28px,3.6vw,44px)] font-medium tracking-[-0.03em] leading-[1.1]">
              Interactive Showcase{" "}
              <span className="text-[#939393]">({filteredDemos.length})</span>
            </h2>
          </div>

          <div className="inline-flex flex-wrap items-center gap-1.5 p-1.5 rounded-full bg-[#141414] border border-[#242424]">
            {categories.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-4 py-2 rounded-full text-[13px] font-medium transition-colors cursor-pointer ${
                    active ? "text-[#0D0D0D]" : "text-[#939393] hover:text-white"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="demosCategoryPill"
                      transition={{ type: "spring", stiffness: 420, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-[#BAFF00]"
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Demos Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredDemos.map((demo, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: Math.min(idx * 0.04, 0.2), ease: [0.22, 1, 0.36, 1] }}
              key={demo.id}
              className="rh-bezel-shell group"
            >
              <div className="rh-bezel-core rh-edge-orbit-card is-lime overflow-hidden hover:border-[#BAFF00]/70 transition-colors duration-300 flex flex-col h-full">
                {/* Browser Chrome Header */}
                <div className="px-4 py-2.5 bg-[#101012] border-b border-white/[0.07] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="w-2 h-2 rounded-full bg-white/15" />
                    <span className="w-2 h-2 rounded-full bg-white/15" />
                    <span className="w-2 h-2 rounded-full bg-[#BAFF00]/80" />
                  </div>
                  <div className="flex-1 min-w-0 text-center">
                    <span className="inline-block max-w-full truncate text-[10.5px] font-mono-tech text-[#8E8E93] bg-white/[0.04] border border-white/[0.06] px-2.5 py-0.5 rounded-full">
                      saimdev.site{demo.demoUrl.replace("/index.html", "")}
                    </span>
                  </div>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BAFF00] shrink-0" title="Live interactive demo" />
                </div>

                {/* Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0A0A0A] border-b border-white/[0.07]">
                  <img
                    src={demo.previewImage}
                    alt={`${demo.title} — ${demo.category} Next.js 16 interactive website demo & bespoke web design UK & US`}
                    width={1200}
                    height={675}
                    loading={idx < 6 ? "eager" : "lazy"}
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                  {demo.badge && (
                    <span
                      className={`absolute top-3.5 left-3.5 font-medium text-[10.5px] uppercase tracking-wider px-3 py-1 rounded-full shadow-md ${
                        demo.badge.includes("In Working")
                          ? "bg-white text-[#0D0D0D]"
                          : "bg-[#BAFF00] text-[#0D0D0D]"
                      }`}
                    >
                      {demo.badge}
                    </span>
                  )}

                  <div className="absolute bottom-3.5 right-3.5 flex items-center gap-2">
                    <button
                      onClick={() => setSelectedDemo(demo)}
                      className="bg-[#0D0D0D]/85 backdrop-blur-md hover:bg-white hover:text-[#0D0D0D] text-white p-2.5 rounded-full border border-white/20 transition-all cursor-pointer"
                      title="Interactive Modal Preview"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <a
                      href={demo.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${demo.title} interactive demo`}
                      className="bg-[#BAFF00] hover:bg-white text-[#0D0D0D] p-2.5 rounded-full transition-all cursor-pointer"
                      title={`Open ${demo.title} Demo`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[#939393] text-[11px] font-mono-tech uppercase tracking-[0.14em]">
                      {demo.category}
                    </span>
                    <h3 className="text-[20px] sm:text-[21px] font-medium text-white mt-1.5 tracking-[-0.02em] group-hover:text-[#BAFF00] transition-colors">
                      {demo.title}
                    </h3>
                    <p className="text-[14px] text-[#939393] mt-2 leading-[1.6]">
                      {demo.description}
                    </p>

                    <div className="mt-4 space-y-2">
                      {demo.features.map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-center gap-2 text-[13px] text-[#CBCBCB]"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#BAFF00] flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-white/[0.08]">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {demo.tags.map((t) => (
                        <span
                          key={t}
                          className="bg-[#0D0D0D] border border-white/[0.08] text-[11px] font-mono-tech text-[#939393] px-2.5 py-0.5 rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      <button
                        onClick={() => setSelectedDemo(demo)}
                        className="w-full bg-white/[0.06] hover:bg-white/[0.12] text-white text-[13px] font-medium py-2.5 px-3 rounded-full border border-white/10 transition-colors flex items-center justify-center gap-1.5 cursor-pointer active:scale-[0.98]"
                      >
                        <Eye className="w-3.5 h-3.5" /> Interactive
                      </button>
                      <a
                        href={demo.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View live site for ${demo.title}`}
                        className="w-full bg-[#BAFF00] hover:bg-white text-[#0D0D0D] text-[13px] font-medium py-2.5 px-3 rounded-full transition-colors flex items-center justify-center gap-1.5 cursor-pointer active:scale-[0.98]"
                      >
                        <span>Live Site</span>
                        <span className="sr-only"> ({demo.id})</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contextual Cluster Navigation */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-[#141414] border border-[#222222]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <span className="text-[12px] uppercase tracking-[0.88px] text-[#BAFF00] block mb-2">
                Free Concept Preview Available
              </span>
              <h2 className="text-[clamp(26px,3.4vw,40px)] font-medium text-white tracking-[-0.025em]">
                Ready for a Custom Website or Ordering System?
              </h2>
            </div>
            <Link
              href="/overview"
              className="text-[14px] text-[#BAFF00] hover:underline"
            >
              Calculate your exact project cost →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                label: "Fixed-Price Plans",
                title: "Web Development Services",
                href: "/services",
              },
              {
                label: "0% Commission System",
                title: "Takeaway Website Design",
                href: "/services/takeaway-web-design",
              },
              {
                label: "Speed Benchmarks",
                title: "Website Case Studies",
                href: "/case-studies",
              },
              {
                label: "Direct Consultation",
                title: "Discuss Your Project",
                href: "/contact",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="p-5 rounded-2xl bg-[#1A1A1A] border border-[#282828] hover:border-[#BAFF00] transition-colors group block"
              >
                <span className="text-[11px] uppercase tracking-[0.88px] text-[#939393] block mb-1.5">
                  {item.label}
                </span>
                <span className="text-[15px] font-medium text-white group-hover:text-[#BAFF00] flex items-center justify-between">
                  <span>{item.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 3. INTERACTIVE SVG LINE-DRAW ARCHITECTURE STANDARDS */}
      <RhSystemRows
        overline="HOW WE ENGINEER DEMOS"
        title="Built for production speed,"
        titleMuted="not static mockups"
        subtitle="Every demo runs on clean, modular Next.js, Tailwind CSS, and GSAP choreography you own 100%."
        rows={[
          {
            num: "01",
            title: "Sub-0.8s Next.js Page Delivery",
            description:
              "Every interactive layout loads instantaneously on 4G mobile networks with 99+ Core Web Vitals.",
            tags: ["Next.js 16", "AVIF / WebP", "Zero Bloat"],
            href: "/case-studies",
          },
          {
            num: "02",
            title: "0% Commission Ordering Flows",
            description:
              "Restaurant and takeaway builds connect directly to WhatsApp & table ordering with Natasha's Law 14-allergen filtering.",
            tags: ["Takeaway UK", "Natasha's Law", "Direct Checkout"],
            href: "/services/takeaway-web-design",
          },
          {
            num: "03",
            title: "1:1 Custom Architecture Cloning",
            description:
              "Point us to any flagship SaaS, luxury retail, or hospitality site—we rebuild it pixel-for-pixel in clean React code.",
            tags: ["Flat $1,900", "7–10 Days", "50/50 Milestones"],
            href: "/services/website-clone",
          },
        ]}
      />

      {/* 4. DARK HORIZONTAL DRAG PROCESS CAROUSEL */}
      <RhProcessCarousel
        title="From reference demo to live business,"
        titleMuted="with zero upfront risk"
        stages={[
          {
            stage: "STAGE 01",
            duration: "Day 1",
            title: "Select Reference & Custom Brief",
            description:
              "Pick any live demo style above or send your own inspiration URLs along with your brand assets.",
            deliverables: [
              "Confirmed Fixed Price (From £250)",
              "Custom Copy & Menu Mapping",
            ],
          },
          {
            stage: "STAGE 02",
            duration: "Days 2 – 4",
            title: "Live Branded Staging Build",
            description:
              "We build your customized version live on our preview link so you test it on mobile & desktop before paying.",
            deliverables: [
              "Interactive Private Preview URL",
              "Real-Time WhatsApp & Lead Testing",
            ],
          },
          {
            stage: "STAGE 03",
            duration: "Days 5 – 6",
            title: "SEO, Schema & Core Web Vitals",
            description:
              "We configure LocalBusiness schema, metadata, OpenGraph assets, and verify 95+ Lighthouse scores.",
            deliverables: ["Structured JSON-LD", "Sub-Second Edge Cache"],
          },
          {
            stage: "STAGE 04",
            duration: "Launch",
            title: "Domain Cutover & GitHub Handover",
            description:
              "Pay only upon satisfaction and receive full GitHub repo ownership with zero monthly retainers.",
            deliverables: ["100% Source Code", "Zero Monthly Fees"],
          },
        ]}
      />

      {/* Modal */}
      <AnimatePresence>
        {selectedDemo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[250] bg-[#0D0D0D]/95 backdrop-blur-xl flex flex-col justify-between p-3 sm:p-6"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#242424]">
              <div className="flex items-center gap-3 min-w-0">
                <span className="text-white font-medium text-sm sm:text-base truncate">
                  {selectedDemo.title}
                </span>
                <span className="hidden sm:inline shrink-0 bg-[#BAFF00] text-[#0D0D0D] text-[11px] font-medium px-2.5 py-0.5 rounded-full">
                  Live Interactive Preview
                </span>
              </div>

              <div className="flex items-center gap-1.5 bg-[#181818] p-1 rounded-full border border-[#282828]">
                {(
                  [
                    { id: "desktop", label: "Desktop", Icon: Monitor },
                    { id: "tablet", label: "Tablet", Icon: Tablet },
                    { id: "mobile", label: "Mobile", Icon: Smartphone },
                  ] as const
                ).map(({ id, label, Icon }) => {
                  const active = viewportMode === id;
                  return (
                    <button
                      key={id}
                      onClick={() => setViewportMode(id)}
                      className={
                        "relative px-3 py-1.5 rounded-full text-xs flex items-center gap-1 transition-colors cursor-pointer " +
                        (active ? "text-[#0D0D0D] font-medium" : "text-[#939393] hover:text-white")
                      }
                    >
                      {active && (
                        <motion.span
                          layoutId="demoModalViewport"
                          transition={{ type: "spring", stiffness: 450, damping: 32 }}
                          className="absolute inset-0 rounded-full bg-[#BAFF00]"
                        />
                      )}
                      <Icon className="w-3.5 h-3.5 relative z-10" />
                      <span className="hidden sm:inline relative z-10">{label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={selectedDemo.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center gap-1 text-xs text-[#BAFF00] hover:underline font-medium"
                >
                  Fullscreen <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => setSelectedDemo(null)}
                  aria-label="Close modal (Esc)"
                  className="bg-[#181818] hover:bg-[#242424] text-white p-2 rounded-full border border-white/10 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex-1 my-3 flex items-center justify-center overflow-hidden">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className={
                  "transition-[width] duration-300 bg-white rounded-2xl overflow-hidden shadow-2xl border border-white/20 h-full " +
                  (viewportMode === "desktop"
                    ? "w-full"
                    : viewportMode === "tablet"
                    ? "w-[768px] max-w-full"
                    : "w-[390px] max-w-full")
                }
              >
                <iframe
                  src={selectedDemo.demoUrl}
                  title={selectedDemo.title}
                  className="w-full h-full border-none"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      </main>
      <FooterSection />
    </div>
  );
};















