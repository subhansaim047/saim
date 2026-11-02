"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Building2, 
  FileCode2, 
  Rocket, 
  Gauge, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles 
} from "lucide-react";

interface ServiceCard {
  id: string;
  badge: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  deliverables: string[];
  techStack: string[];
  timeline: string;
  ctaText: string;
  ctaHref: string;
  featured?: boolean;
}

const SERVICES_DATA: ServiceCard[] = [
  {
    id: "web-apps-saas",
    badge: "Full-Stack Software",
    title: "Custom Web Applications & SaaS MVPs",
    tagline: "Scalable full-stack web software built for high volume, secure auth, and real-time data.",
    description: "We engineer bespoke web applications, authenticated client portals, dynamic multi-tenant dashboards, and internal business tools. Built with Next.js App Router, TypeScript, Node.js, and serverless databases for maximum agility and zero vendor lock-in.",
    icon: LayoutDashboard,
    deliverables: [
      "Role-based authentication & session security",
      "Interactive data visualizations & dashboards",
      "Stripe subscriptions & automated billing",
      "REST & GraphQL API design with webhooks",
    ],
    techStack: ["Next.js 14+", "React", "TypeScript", "Node.js", "PostgreSQL", "Supabase"],
    timeline: "Launch in 10–14 days",
    ctaText: "Discuss App Scope",
    ctaHref: "#contact",
    featured: true,
  },
  {
    id: "ecommerce-shopify",
    badge: "E-Commerce",
    title: "E-Commerce & High-Converting Storefronts",
    tagline: "Ultra-fast online stores engineered to increase checkout conversion and eliminate cart drop-off.",
    description: "From custom Shopify theme builds and Shopify Plus migrations to bespoke WooCommerce or headless commerce storefronts. We build friction-free shopping experiences with instant faceted product search, one-click Apple Pay / Google Pay, and seamless ERP/inventory syncing.",
    icon: ShoppingBag,
    deliverables: [
      "Sub-second faceted product filtering & search",
      "Frictionless checkout (Stripe, Apple Pay, PayPal)",
      "Automated inventory, shipping & tax sync",
      "Mobile-optimized cart & upsell funnels",
    ],
    techStack: ["Shopify", "Shopify Plus", "WooCommerce", "Stripe", "Next.js Commerce", "Tailwind CSS"],
    timeline: "Launch in 7–12 days",
    ctaText: "Build E-Commerce Store",
    ctaHref: "#contact",
  },
  {
    id: "business-websites",
    badge: "Corporate & B2B",
    title: "Bespoke Business Websites & Redesigns",
    tagline: "Authoritative digital flagships engineered to turn cold commercial traffic into qualified enquiries.",
    description: "Designed specifically for professional services, consultancies, healthcare clinics, and ambitious SME brands. We replace dated, slow websites with custom-crafted, conversion-led digital storefronts that command premium pricing and rank at the top of Google.",
    icon: Building2,
    deliverables: [
      "Custom UI/UX aligned with your brand identity",
      "High-intent lead capture forms & booking flows",
      "Full on-page SEO, rich schema & Google indexing",
      "100% mobile-responsive fluid layouts",
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion"],
    timeline: "Launch in 5–10 days",
    ctaText: "Plan Business Website",
    ctaHref: "#contact",
  },
  {
    id: "wordpress-headless-cms",
    badge: "CMS & Editorial",
    title: "WordPress & Headless CMS Engineering",
    tagline: "Effortless visual content editing for your team, backed by clean code and zero theme bloat.",
    description: "Tired of bloated WordPress themes that break with every plugin update? We build lightweight, bespoke WordPress themes and modern Headless CMS architectures (Sanity, Strapi, Contentful) that give marketing teams visual freedom while keeping page speed lightning-fast.",
    icon: FileCode2,
    deliverables: [
      "Custom Gutenberg blocks or headless Sanity studio",
      "Zero unneeded third-party plugins or vulnerabilities",
      "Automated scheduled publishing & media CDN",
      "Clean semantic markup passing all Core Web Vitals",
    ],
    techStack: ["WordPress (Custom)", "Sanity.io", "Strapi", "Next.js", "GraphQL"],
    timeline: "Launch in 7–10 days",
    ctaText: "Upgrade Your CMS",
    ctaHref: "#contact",
  },
  {
    id: "landing-pages-cro",
    badge: "Growth & CRO",
    title: "High-Converting Landing Pages & Funnels",
    tagline: "Laser-targeted single-page conversion funnels engineered for maximum return on ad spend (ROAS).",
    description: "Built for active Google Ads, LinkedIn, Meta, and marketing campaign traffic. Every section, headline, and call-to-action is structured around proven conversion copywriting principles and rapid loading speeds to slash cost-per-acquisition (CPA).",
    icon: Rocket,
    deliverables: [
      "Direct-response persuasion & benefit hierarchy",
      "Integrated conversion tracking (GA4, Meta Pixel)",
      "Instant WhatsApp & multi-step lead capture",
      "A/B testing architecture & micro-copy tuning",
    ],
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "GA4", "PostHog"],
    timeline: "Launch in 3–5 days",
    ctaText: "Launch Landing Page",
    ctaHref: "#contact",
  },
  {
    id: "speed-maintenance",
    badge: "Speed & Care",
    title: "Website Speed Optimization & Ongoing Care",
    tagline: "Sub-second loading times, 90+ Core Web Vitals, and proactive technical security protection.",
    description: "Transform existing slow, failing websites into high-speed search contenders. We audit and eliminate render-blocking assets, optimize image compression (AVIF/WebP), configure edge caching, and provide ongoing code updates without mandatory agency lock-in.",
    icon: Gauge,
    deliverables: [
      "LCP < 1.2s, INP < 100ms, CLS 0.00 remediation",
      "Automated daily off-site cloud backups",
      "SSL, firewall & DDoS hardening",
      "Priority same-day developer technical support",
    ],
    techStack: ["Cloudflare", "Edge Caching", "Lighthouse", "Core Web Vitals", "Next.js SSR"],
    timeline: "Delivered in 2–4 days",
    ctaText: "Fix Website Speed",
    ctaHref: "#contact",
  },
];

export const ServicesBentoSection = () => {
  return (
    <section id="services" className="relative w-full bg-transparent py-20 sm:py-28 md:py-36 border-t border-white/[0.06] overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#FF4A1C]/[0.03] rounded-full blur-[180px] pointer-events-none z-0" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-4 backdrop-blur-md">
            <span className="section-dot" />
            <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-white/80">
              Full-Stack Digital Engineering
            </span>
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6"
            style={{ letterSpacing: "-0.04em" }}
          >
            Web development services <br />
            <span className="text-white/70">engineered for commercial growth.</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-white/65 leading-relaxed font-light">
            From bespoke corporate websites and high-volume e-commerce stores to custom SaaS web applications and performance overhauls. We build fast, modern, and reliable digital systems with 100% code ownership.
          </p>
        </div>

        {/* 6-Card Responsive Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex flex-col justify-between rounded-3xl bg-[#121212] border p-6 sm:p-8 transition-all duration-300 group shadow-2xl hover:-translate-y-1 ${
                  service.featured
                    ? "border-[#FF4A1C]/50 hover:border-[#FF4A1C] shadow-[0_12px_48px_rgba(255,74,28,0.12)]"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                {/* Ambient Subtle Accent Glow */}
                <div
                  className={`absolute -top-20 -right-20 w-44 h-44 rounded-full blur-3xl pointer-events-none transition-transform duration-500 group-hover:scale-125 ${
                    service.featured ? "bg-[#FF4A1C]/15" : "bg-white/[0.03]"
                  }`}
                />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    {/* Top Header: Badge + Timeline */}
                    <div className="flex items-center justify-between gap-2 mb-6">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-white/80 text-[11px] font-mono uppercase tracking-wider">
                        {service.featured && <Sparkles className="w-3 h-3 text-[#FF4A1C]" />}
                        <span>{service.badge}</span>
                      </div>
                      <span className="text-[11px] font-mono text-white/70 tracking-wide">
                        {service.timeline}
                      </span>
                    </div>

                    {/* Icon + Title */}
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-[#FF4A1C]/10 group-hover:border-[#FF4A1C]/30 transition-all duration-300 mb-5">
                      <Icon className="w-6 h-6 text-[#FF4A1C]" />
                    </div>

                    <h3
                      className="text-white text-xl sm:text-2xl font-medium tracking-tight mb-3 leading-snug group-hover:text-white transition-colors"
                      style={{ letterSpacing: "-0.03em" }}
                    >
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-white/65 font-light leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Key Deliverables */}
                    <div className="space-y-2 mb-6 pt-4 border-t border-white/5">
                      <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/70 block mb-2">
                        Key Deliverables
                      </span>
                      {service.deliverables.map((item) => (
                        <div key={item} className="flex items-start gap-2.5 text-xs text-white/75 font-light">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#FF4A1C] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom: Tech Stack Chips & Action Link */}
                  <div className="pt-6 border-t border-white/10 mt-auto">
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {service.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono text-white/75 bg-white/[0.03] border border-white/5 px-2.5 py-0.5 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={service.ctaHref}
                      className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-[#FF4A1C] hover:text-white text-white/90 text-xs font-medium tracking-tight border border-white/10 hover:border-transparent transition-all duration-300 group/btn"
                    >
                      <span>{service.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-14 sm:mt-20 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-white/[0.03] via-white/[0.05] to-white/[0.03] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <span className="text-white text-base sm:text-lg font-medium tracking-tight">
              Need a custom architecture or technical consultation?
            </span>
            <span className="text-white/60 text-xs sm:text-sm font-light">
              Speak directly with our senior full-stack architect — zero sales pitches, zero account manager markups.
            </span>
          </div>

          <a
            href="https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20discuss%20a%20custom%20web%20project%20architecture"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-neutral-100 text-black font-semibold text-xs sm:text-sm tracking-tight shadow-[0_4px_24px_rgba(255,255,255,0.15)] transition-all shrink-0 active:scale-95"
          >
            <span>Direct WhatsApp Consultation</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </a>
        </div>
      </div>
    </section>
  );
};
