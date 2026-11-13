"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ViewportMount } from "./reactdrops/ViewportMount";

const LazyFanGallery = dynamic(
  () => import("./reactdrops/fan-gallery/fan-gallery").then((m) => m.FanGallery),
  { ssr: false }
);
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, CheckCircle2 } from "lucide-react";

interface FeaturedDemo {
  id: string;
  title: string;
  category: string;
  badge: string;
  description: string;
  demoUrl: string;
  previewImage: string;
  highlights: string[];
  featured?: boolean;
}

const FEATURED_DEMOS: FeaturedDemo[] = [
  {
    id: "hq-leathercon",
    title: "HQ Leathercon – E-Commerce Storefront",
    category: "E-Commerce & Retail",
    badge: "Flagship Storefront",
    description:
      "Bespoke luxury leather e-commerce storefront featuring 1,500+ interactive pages, multi-collection filtering, instant search, and WhatsApp order checkout.",
    demoUrl: "/hq-leathercon/index.html",
    previewImage: "/demos/previews/hq-leathercon-ecommerce-storefront.png",
    highlights: ["1,500+ Product Pages", "Live Search & Filtering", "Mobile-First UX"],
    featured: true,
  },
  {
    id: "hotbite",
    title: "HotBite – Street Food & Ordering",
    category: "Hospitality & Takeaway",
    badge: "Zero-Commission Menu",
    description:
      "High-converting modern street food brand website featuring interactive food sliders, categorised menus, combo builders, and smooth micro-interactions.",
    demoUrl: "/hotbite/index.html",
    previewImage: "/demos/previews/hotbite-street-food-takeaway.webp",
    highlights: ["Interactive Menu Slider", "Direct Order Funnel", "Sub-Second Load"],
  },
  {
    id: "akdetailing",
    title: "DetailX – Car Detailing & Auto Shop",
    category: "Automotive & Local Trades",
    badge: "Multi-Page Ecosystem",
    description:
      "Ultra-modern automotive detailing and repair platform featuring native video hero, interactive service packages, pricing tiers, and multi-step quote booking.",
    demoUrl: "/demos/akdetailing/index.html",
    previewImage: "/demos/previews/detailx-car-detailing-auto-repair.webp",
    highlights: ["6-Page Full Website", "Quote Booking Flow", "Video Hero Architecture"],
  },
  {
    id: "atelier-noir",
    title: "ATELIER NOIR – Interior Architecture",
    category: "Corporate & Architecture",
    badge: "Editorial Luxury",
    description:
      "Minimalist, editorial interior design and architecture studio showcase featuring residential case studies, filterable project portfolios, and consultation flows.",
    demoUrl: "/demos/atelier-noir/index.html",
    previewImage: "/demos/previews/atelier-noir-luxury-interior-design.webp",
    highlights: ["5 Deep-Dive Case Studies", "Filterable Portfolio", "Editorial Typography"],
  },
  {
    id: "serenia",
    title: "SERENIA – Luxury Wellness & Spa",
    category: "Healthcare, Clinics & Salons",
    badge: "Booking & E-Commerce",
    description:
      "Tranquil luxury wellness and day spa platform featuring appointment booking, 8 signature therapy showcases, organic cosmetics shop, and treatment pricing.",
    demoUrl: "/demos/serenia/index.html",
    previewImage: "/demos/previews/serenia-luxury-wellness-spa.webp",
    highlights: ["Online Appointment Flow", "8-Therapy Catalog", "Skincare Shop UI"],
  },
  {
    id: "woshico",
    title: "Woshico – Commercial Cleaning",
    category: "B2B & Service Business",
    badge: "Next.js App Router",
    description:
      "Pixel-perfect commercial service platform engineered on Next.js with React Server Components, hardware-accelerated smooth scroll, and instant lead capture.",
    demoUrl: "/demos/woshico/index.html",
    previewImage: "/demos/previews/woshico-cleaning-services-preview.webp",
    highlights: ["Next.js Server Components", "95+ Core Web Vitals", "Instant Quote CTA"],
  },
];

export const LiveDemosSection = () => {
  const fanItems = FEATURED_DEMOS.map((demo) => ({
    src: demo.previewImage,
    alt: `${demo.title} – Interactive Web Design Demo by Saim Dev`,
    href: demo.demoUrl,
  }));
  return (
    <section
      id="demos"
      className="relative w-full bg-transparent py-20 sm:py-28 md:py-36 border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#FF4A1C]/[0.03] rounded-full blur-[180px] pointer-events-none z-0" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-4 backdrop-blur-md">
              <span className="section-dot animate-pulse" />
              <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-white/80">
                Interactive Work Showcase
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-4"
              style={{ letterSpacing: "-0.04em" }}
            >
              Test our live websites. <br />
              <span className="text-white/60">Built for every industry.</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-white/65 leading-relaxed font-light">
              Don&apos;t just look at static screenshots. Click into our live, interactive production demos across e-commerce, hospitality, automotive, architecture, and wellness.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/demos"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-white/[0.06] hover:bg-white/15 border border-white/15 text-white text-xs sm:text-sm font-medium tracking-tight transition-all group"
            >
              <span>Explore All 14+ Live Demos</span>
              <ArrowRight className="w-4 h-4 text-[#FF4A1C] transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Interactive Spring Portfolio Deck */}
        <div className="saim-fan-deck mb-12 sm:mb-16 rounded-3xl bg-[#101012]/90 border border-white/10 pt-5 pb-3 px-3 sm:px-6 overflow-hidden relative shadow-[0_24px_80px_rgba(0,0,0,0.65)]">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-1 px-2">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-white/70">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4A1C]" />
              <span>Interactive Portfolio Deck • Hover or Click Any Card</span>
            </div>
            <span className="text-[11px] font-mono text-white/45 hidden sm:inline">
              6 Live Production Builds
            </span>
          </div>
          <ViewportMount
            rootMargin="0px 0px"
            className="min-h-[210px] sm:min-h-[285px]"
          >
            <LazyFanGallery
              items={fanItems}
              entrance="stack"
              trigger="scroll"
              viewportStart={85}
              once={true}
              cardWidth={210}
              aspectRatio={1.2}
              spacing={0.62}
              curve={0.13}
              tilt={12}
              lift={38}
              spread={0.22}
              radius={16}
              ariaLabel="Interactive portfolio preview cards linking to live industry demos"
            />
          </ViewportMount>
        </div>

        {/* 6-Card Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FEATURED_DEMOS.map((demo, index) => (
            <motion.article
              key={demo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative flex flex-col justify-between rounded-3xl bg-[#121212] border overflow-hidden transition-all duration-300 shadow-2xl hover:-translate-y-1.5 ${
                demo.featured
                  ? "border-[#FF4A1C]/50 hover:border-[#FF4A1C] shadow-[0_12px_48px_rgba(255,74,28,0.12)]"
                  : "border-white/10 hover:border-white/25"
              }`}
            >
              {/* Preview Image Header */}
              <a
                href={demo.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-[16/10] w-full overflow-hidden bg-black block border-b border-white/10"
              >
                <img
                  src={demo.previewImage}
                  alt={`${demo.title} – Interactive Web Design Demo by Saim Dev`}
                  width={800}
                  height={500}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Top Floating Badge */}
                <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-mono uppercase tracking-wider text-white">
                  {demo.featured && <span className="w-1.5 h-1.5 rounded-full bg-[#FF4A1C] animate-pulse" />}
                  <span>{demo.badge}</span>
                </div>

                {/* Live Launch Pill on Hover */}
                <div className="absolute bottom-3.5 right-3.5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FF4A1C] text-white text-xs font-semibold shadow-lg transition-transform duration-300 group-hover:scale-105">
                  <span>Live Preview</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </a>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#FF4A1C] block mb-1.5">
                    {demo.category}
                  </span>
                  <h3
                    className="text-white text-xl font-medium tracking-tight mb-2.5 group-hover:text-[#FF4A1C] transition-colors"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    <a href={demo.demoUrl} target="_blank" rel="noopener noreferrer">
                      {demo.title}
                    </a>
                  </h3>
                  <p className="text-xs sm:text-sm text-white/65 font-light leading-relaxed mb-5">
                    {demo.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {demo.highlights.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1 text-[10px] font-mono text-white/75 bg-white/[0.03] border border-white/10 px-2.5 py-1 rounded-full"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#FF4A1C] shrink-0" />
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>

                  <a
                    href={demo.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-[#FF4A1C] text-white text-xs font-medium tracking-tight border border-white/10 hover:border-transparent transition-all duration-300 group/btn"
                  >
                    <span>Launch Interactive Site</span>
                    <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-12 sm:mt-16 text-center">
          <Link
            href="/demos"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white hover:bg-neutral-100 text-black text-sm font-semibold transition-all group shadow-[0_4px_24px_rgba(255,255,255,0.15)]"
          >
            <span>Browse All 14+ Live Industry Website Demos</span>
            <ArrowRight className="w-4 h-4 text-black transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};
