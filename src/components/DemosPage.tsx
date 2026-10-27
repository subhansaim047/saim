"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import React, { useState } from "react";
import { ExternalLink, Eye, Monitor, Tablet, Smartphone, CheckCircle2, ArrowLeft, ArrowRight, X } from "lucide-react";
import { FooterSection } from "./FooterSection";

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
    id: "hotbite",
    title: "Hotbite – Street Food That Hits",
    category: "Fast Food & Street Food",
    description: "An energetic, high-converting modern street food brand website featuring interactive food sliders, dynamic menus, bold typography, and smooth micro-interactions.",
    demoUrl: "/hotbite/index.html",
    previewImage: "/demos/previews/hotbite-street-food-takeaway.webp",
    tags: ["Fast Food", "Street Food", "Framer", "Interactive Slider"],
    features: [
      "Interactive Pizza & Food Slider",
      "Categorized Street Food Menu & Combos",
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
    description: "A minimalist, editorial interior design and architecture studio showcase featuring high-end residential case studies, filterable project portfolios, and architectural project inquiry flows.",
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
    description: "An ultra-luxurious, editorial aesthetic beauty salon platform featuring animated hero marquees, comprehensive multi-page service menus, curated lookbook gallery, and interactive booking inquiry.",
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

export const DemosPage: React.FC<DemosPageProps> = ({ onBack }) => {
  const router = useRouter();
  const [selectedDemo, setSelectedDemo] = useState<DemoItem | null>(null);
  const [viewportMode, setViewportMode] = useState<"desktop" | "tablet" | "mobile">("desktop");

  const handleBack = () => { if (onBack) { onBack(); } else { router.push("/"); } };

  return (
    <main className="min-h-screen bg-black text-[#E1E0CC] selection:bg-primary selection:text-black flex flex-col justify-between">
      
      {/* Background Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-primary/10 via-primary/5 to-transparent blur-[120px] pointer-events-none z-0" />

      {/* Header Navigation Bar */}
      <nav className="sticky top-0 z-40 backdrop-blur-md bg-black/80 border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20 group-hover:border-primary transition-colors">
              <img src="/saim-dev-logo.png" alt="Saim Dev Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-semibold text-lg text-white tracking-tight">Saim Dev</span>
          </Link>

          <div className="flex items-center gap-6">
            <Link href="/" className="text-sm text-[#E1E0CC]/70 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer font-medium"><ArrowLeft className="w-4 h-4" /> Back to Home</Link>
            <a
              href="https://wa.me/923196526604?text=Hi%20Saim,%20I%27m%20interested%20in%20discussing%20a%20website%20project"
              target="_blank"
              rel="noreferrer"
              className="bg-primary hover:bg-white text-black font-semibold text-sm px-5 py-2 rounded-full transition-all shadow-lg"
            >
              Get Custom Site
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 py-16 px-4 sm:px-8 max-w-7xl mx-auto flex-1 w-full">
        <div className="text-center mb-14">
          
          {/* Visible Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6 flex justify-center">
            <ol className="flex items-center gap-1.5 text-xs text-white/60 font-medium flex-wrap">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li aria-hidden="true" className="text-white/30">/</li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              </li>
              <li aria-hidden="true" className="text-white/30">/</li>
              <li className="text-primary font-semibold" aria-current="page">
                Live Demos
              </li>
            </ol>
          </nav>

          <h1 className="text-3xl sm:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto">
            Experience Live Client Websites & Demos
          </h1>
          <p className="mt-4 text-sm sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Browse through live interactive website demos built with high-performance web architecture, ultra-smooth 60fps animations, and responsive UI engineering.
          </p>
        </div>

        {/* Demos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demos.map((demo) => (
            <div
              key={demo.id}
              className="group bg-[#0E0E0E] rounded-2xl border border-white/15 overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-2xl flex flex-col"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden bg-black/60 border-b border-white/10">
                <img
                  src={demo.previewImage}
                  alt={`${demo.title} - Modern bespoke web design & engineering showcase`}
                  width={1200}
                  height={675}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                {demo.badge && (
                  <span className={`absolute top-3 left-3 font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-lg ${
                    demo.badge.includes('In Working') 
                      ? 'bg-orange-500 text-white' 
                      : 'bg-primary text-black'
                  }`}>
                    {demo.badge}
                  </span>
                )}

                <div className="absolute bottom-3 right-3 flex items-center gap-2">
                  <button
                    onClick={() => setSelectedDemo(demo)}
                    className="bg-black/80 backdrop-blur-md hover:bg-white hover:text-black text-white p-2.5 rounded-xl border border-white/20 transition-all shadow-lg cursor-pointer"
                    title="Interactive Modal Preview"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <a
                    href={demo.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-primary hover:bg-white text-black p-2.5 rounded-xl transition-all shadow-lg cursor-pointer"
                    title="Open Fullscreen Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-white/50 text-xs font-mono uppercase tracking-wider">
                    {demo.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1 group-hover:text-primary transition-colors">
                    {demo.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 mt-2 leading-relaxed">
                    {demo.description}
                  </p>

                  <div className="mt-4 space-y-2">
                    {demo.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-white/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {demo.tags.map((t) => (
                      <span key={t} className="bg-white/5 border border-white/10 text-[10px] text-white/60 px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setSelectedDemo(demo)}
                      className="w-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold py-2.5 px-3 rounded-xl border border-white/10 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" /> Interactive
                    </button>
                    <a
                      href={demo.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full bg-primary hover:bg-white text-black text-xs font-bold py-2.5 px-3 rounded-xl transition-all shadow-md flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedDemo && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-3 sm:p-6">
          <div className="flex items-center justify-between pb-3 border-b border-white/15">
            <div className="flex items-center gap-3">
              <span className="text-white font-bold text-sm sm:text-base">{selectedDemo.title}</span>
              <span className="hidden sm:inline bg-primary/20 border border-primary/40 text-primary text-xs px-2.5 py-0.5 rounded-full font-mono">
                Live Interactive Preview
              </span>
            </div>

            <div className="flex items-center gap-2 bg-white/10 p-1 rounded-xl border border-white/15">
              <button
                onClick={() => setViewportMode("desktop")}
                className={'p-1.5 rounded-lg text-xs flex items-center gap-1 transition-colors ' + (viewportMode === "desktop" ? "bg-primary text-black font-bold" : "text-white/70 hover:text-white")}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Desktop</span>
              </button>
              <button
                onClick={() => setViewportMode("tablet")}
                className={'p-1.5 rounded-lg text-xs flex items-center gap-1 transition-colors ' + (viewportMode === "tablet" ? "bg-primary text-black font-bold" : "text-white/70 hover:text-white")}
              >
                <Tablet className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Tablet</span>
              </button>
              <button
                onClick={() => setViewportMode("mobile")}
                className={'p-1.5 rounded-lg text-xs flex items-center gap-1 transition-colors ' + (viewportMode === "mobile" ? "bg-primary text-black font-bold" : "text-white/70 hover:text-white")}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Mobile</span>
              </button>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={selectedDemo.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:flex items-center gap-1 text-xs text-primary hover:underline font-semibold"
              >
                Fullscreen <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button onClick={() => setSelectedDemo(null)} className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-xl transition-colors cursor-pointer"><X className="w-5 h-5" /></button>
            </div>
          </div>

          <div className="flex-1 my-3 flex items-center justify-center overflow-hidden">
            <div
              className={'transition-all duration-300 bg-white rounded-xl overflow-hidden shadow-2xl border border-white/20 h-full ' + (viewportMode === "desktop" ? "w-full" : viewportMode === "tablet" ? "w-[768px] max-w-full" : "w-[390px] max-w-full")}
            >
              <iframe
                src={selectedDemo.demoUrl}
                title={selectedDemo.title}
                className="w-full h-full border-none"
              />
            </div>
          </div>
        </div>
      )}

      {/* CONTEXTUAL CLUSTER NAVIGATION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/10 text-center">
          <h2 className="text-2xl sm:text-3xl font-light text-white mb-3">
            Ready for a Custom Website or Ordering System?
          </h2>
          <p className="text-white/60 text-xs sm:text-sm max-w-2xl mx-auto mb-8 font-light leading-relaxed">
            These interactive demos showcase real Next.js performance. We build bespoke digital ordering platforms and high-converting websites from £250.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            <Link
              href="/services"
              className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all group"
            >
              <span className="text-xs font-mono text-primary uppercase block mb-1">Fixed-Price Plans</span>
              <span className="text-sm font-medium text-white group-hover:text-primary transition-colors flex items-center justify-between">
                <span>Explore our web development services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link
              href="/services/takeaway-web-design"
              className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all group"
            >
              <span className="text-xs font-mono text-primary uppercase block mb-1">0% Commission System</span>
              <span className="text-sm font-medium text-white group-hover:text-primary transition-colors flex items-center justify-between">
                <span>Takeaway website design &amp; ordering</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link
              href="/case-studies"
              className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all group"
            >
              <span className="text-xs font-mono text-primary uppercase block mb-1">Speed Benchmarks</span>
              <span className="text-sm font-medium text-white group-hover:text-primary transition-colors flex items-center justify-between">
                <span>View our website case studies</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link
              href="/contact"
              className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all group"
            >
              <span className="text-xs font-mono text-primary uppercase block mb-1">Direct Consultation</span>
              <span className="text-sm font-medium text-white group-hover:text-primary transition-colors flex items-center justify-between">
                <span>Discuss your website project with Saim</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </div>

      <FooterSection />
    </main>
  );
};















