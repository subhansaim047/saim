"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ViewportMount } from "./reactdrops/ViewportMount";

const LazyFanGallery = dynamic(
  () => import("./reactdrops/fan-gallery/fan-gallery").then((m) => m.FanGallery),
  { ssr: false }
);
import { ArrowRight, ExternalLink } from "lucide-react";

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
      className="relative w-full bg-white py-10 sm:py-14 md:py-16 border-t border-black/[0.06] overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/[0.03] border border-black/[0.08] mb-3">
              <span className="section-dot animate-pulse" />
              <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-black/75">
                Interactive Work Showcase
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#111115] mb-3"
              style={{ letterSpacing: "-0.04em" }}
            >
              Test our live websites. <br />
              <span className="text-black/45">Built for every industry.</span>
            </h2>

            <p className="text-sm sm:text-base text-black/65 leading-relaxed font-light">
              Don&apos;t just look at static screenshots. Click into our live, interactive production demos across e-commerce, hospitality, automotive, architecture, and wellness.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/demos"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#FAFAFA] hover:bg-black/[0.06] border border-black/[0.10] text-[#111115] text-xs sm:text-sm font-medium tracking-tight transition-all group"
            >
              <span>Explore All 14+ Live Demos</span>
              <ArrowRight className="w-4 h-4 text-[#FF4A1C] transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Interactive Spring Portfolio Deck + Compact Quick-Launch Bar */}
        <div className="saim-fan-deck rounded-3xl bg-[#FAFAFA] border border-black/[0.08] pt-5 pb-5 px-3 sm:px-6 overflow-hidden relative shadow-[0_18px_50px_-24px_rgba(17,17,21,0.12)]">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-1 px-2">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-black/70">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4A1C]" />
              <span>Interactive Portfolio Deck • Hover or Click Any Card</span>
            </div>
            <span className="text-[11px] font-mono text-black/45 hidden sm:inline">
              6 Live Production Builds
            </span>
          </div>
          <ViewportMount
            rootMargin="300px 0px"
            className="min-h-[215px] sm:min-h-[275px]"
          >
            <LazyFanGallery
              items={fanItems}
              entrance="stack"
              trigger="auto"
              once={true}
              cardWidth={210}
              aspectRatio={1.22}
              spacing={0.82}
              curve={0.12}
              tilt={11}
              lift={32}
              spread={0.28}
              radius={16}
              ariaLabel="Interactive portfolio preview cards linking to live industry demos"
            />
          </ViewportMount>

          <div className="mt-2 pt-4 border-t border-black/[0.06] flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 px-1">
            {FEATURED_DEMOS.map((demo) => {
              const [brand, niche] = demo.title.split(" – ");
              return (
                <a
                  key={demo.id}
                  href={demo.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/pill inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white hover:bg-[#FF4A1C] border border-black/[0.08] hover:border-transparent text-xs font-medium text-[#111115] hover:text-white transition-all duration-200 shadow-xs"
                >
                  {demo.featured && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF4A1C] group-hover/pill:bg-white shrink-0" />
                  )}
                  <span className="font-semibold tracking-tight">{brand}</span>
                  {niche && (
                    <span className="text-[11px] font-normal text-black/55 group-hover/pill:text-white/85 hidden sm:inline">
                      · {niche}
                    </span>
                  )}
                  <ExternalLink className="w-3 h-3 text-black/45 group-hover/pill:text-white shrink-0 transition-transform duration-200 group-hover/pill:translate-x-0.5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
