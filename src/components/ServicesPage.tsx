"use client";
import { SiteFooter } from "./SiteFooter";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowLeft, ArrowRight, HelpCircle, ChevronDown, CheckCircle2, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ServiceDetail {
  id: string;
  title: string;
  price?: string;
  featured?: boolean;
  dedicatedLink?: string;
  description: string;
  benefits: string[];
  deliverables: string[];
  timeline: string;
}

const detailedServices: ServiceDetail[] = [
  {
    id: "takeaway-web",
    title: "Takeaway & Restaurant Web System (Commission-Free)",
    price: "Fixed £250",
    featured: true,
    dedicatedLink: "/services/takeaway-web-design",
    description:
      "Bespoke, lightning-fast Next.js direct-ordering website designed for UK takeaways, chip shops, and restaurants. Escape 30%+ Just Eat, Deliveroo, and Uber Eats commissions with an interactive Natasha's Law allergen-filtered menu and instant WhatsApp order routing.",
    benefits: [
      "Zero monthly commission fees (keep 100% of order revenue)",
      "Interactive 14-allergen filter compliant with Natasha's Law",
      "Direct WhatsApp and SMS checkout routing with zero friction",
      "Sub-second load times on 4G/5G mobile devices (100/100 Core Web Vitals)",
      "Google Maps & Local UK SEO setup for 'takeaway near me' searches",
    ],
    deliverables: [
      "Custom Next.js 16 Responsive Ordering Website",
      "Full Digital Menu with Live Allergen Filtering",
      "Direct WhatsApp / Call / Table Order Dispatch",
      "Printable Table QR Codes & Allergen Matrix Export",
      "Domain, SSL, Hosting & Google Business Profile Setup",
      "Full Code Ownership with Zero Monthly Agency Lock-In",
    ],
    timeline: "3 – 5 Days",
  },
  {
    id: "custom-web",
    title: "Custom Small Business Website",
    price: "From £350",
    description:
      "Bespoke full-stack web architecture designed for UK & European service businesses to establish brand authority, engage local visitors, and convert organic traffic into predictable enquiries.",
    benefits: [
      "Custom Next.js codebase built from scratch",
      "High-conversion layout structured for local UK search",
      "Sub-second loading times (100/100 Core Web Vitals)",
      "Full ownership of code, assets, and hosting",
    ],
    deliverables: [
      "Responsive React/Tailwind codebase (up to 5 pages)",
      "Content Architecture & Local SEO Copywriting",
      "Contact & Lead Capture Forms with Instant Alerts",
      "14–30 Days Dedicated Launch Support",
    ],
    timeline: "5 – 10 Days",
  },
  {
    id: "landing-page",
    title: "Landing Page Development",
    description:
      "High-impact 1-page conversion engines designed specifically for ad campaigns, product launches, or service lead capture.",
    benefits: [
      "Optimized for 3x higher click-through rate",
      "Direct Instagram & CRM integration",
      "Zero distraction, hyper-focused UX",
    ],
    deliverables: [
      "1-Page High Converting Layout",
      "Mobile-First Responsive Build",
      "Analytics & Pixel Setup",
    ],
    timeline: "3 – 5 Days",
  },
  {
    id: "ui-ux",
    title: "UI/UX Design & Wireframing",
    description:
      "Modern, minimalist user interface design tailored to align with your brand identity and guide visitors effortlessly to take action.",
    benefits: [
      "Clean, luxury aesthetic",
      "Intuitive navigation paths",
      "Pixel-perfect responsive design tokens",
    ],
    deliverables: [
      "Figma / Wireframe Mockups",
      "Custom Color Palette & Typography",
      "Interactive Components Prototype",
    ],
    timeline: "3 – 5 Days",
  },
  {
    id: "seo-opt",
    title: "SEO & Search Optimization",
    description:
      "Complete technical and on-page SEO setup ensuring your website ranks on Google and attracts organic local traffic.",
    benefits: [
      "Higher Google search rankings",
      "Structured Schema rich snippets",
      "Instant indexing on Google Search Console",
    ],
    deliverables: [
      "On-page meta tags & canonicals",
      "JSON-LD Schema Markup",
      "XML Sitemap & Robots.txt",
    ],
    timeline: "2 – 4 Days",
  },
  {
    id: "redesign",
    title: "Website Redesign & Overhaul",
    description:
      "Modernize outdated websites into sleek, high-performing digital assets that rebuild client trust and boost conversions.",
    benefits: [
      "Eliminate slow loading times",
      "Modernize outdated visual brand image",
      "Fix mobile layout bugs",
    ],
    deliverables: [
      "Complete UI/UX Refresh",
      "Code Optimization & Migration",
      "Preserved Existing SEO Rankings",
    ],
    timeline: "5 – 7 Days",
  },
  {
    id: "ai-integrations",
    title: "AI & Automation Integrations",
    description:
      "Integrate intelligent AI assistants, automated chat widgets, and lead routing workflows that operate 24/7.",
    benefits: [
      "Automated 24/7 lead capture",
      "Instant Instagram lead notification",
      "Reduced manual support burden",
    ],
    deliverables: [
      "AI Assistant Chatbot Integration",
      "Automated Email & CRM Sync",
      "AI Search Readiness (LLMO)",
    ],
    timeline: "3 – 5 Days",
  },
  {
    id: "perf-opt",
    title: "Performance & Speed Optimization",
    description:
      "Deep code optimization and caching setup to achieve 90+ Lighthouse scores and sub-second page loads.",
    benefits: [
      "Lower bounce rates",
      "Pass Core Web Vitals (LCP < 2.5s)",
      "Instant asset caching & CDN delivery",
    ],
    deliverables: [
      "Image & Video Compression",
      "Unused Code Elimination",
      "Lighthouse 90+ Audit Report",
    ],
    timeline: "2 – 3 Days",
  },
];

const serviceFaqs = [
  {
    question: "Which plan or service is right for my business?",
    answer:
      "If you operate a UK takeaway, cafe, or restaurant, our £250 Fixed Price Takeaway Package is specifically tailored to eliminate 30%+ Just Eat, Deliveroo, and Uber Eats commissions with an interactive Natasha's Law allergen-filtered menu. For general UK and European small businesses, our Starter Plan begins at £250, and comprehensive multi-page custom builds range from £350 to £850.",
  },
  {
    question: "Does the takeaway website include Natasha's Law allergen filtering?",
    answer:
      "Yes. Every restaurant and takeaway site we deliver includes an interactive 14-allergen filter matrix on the digital menu. Diners can filter out nuts, gluten, dairy, celery, mustard, etc. in real time, helping you maintain compliance with the Food Information Regulations 2014 and Natasha's Law.",
  },
  {
    question: "Are there any recurring commission fees or monthly subscriptions?",
    answer:
      "None. Unlike aggregator platforms (Just Eat, Deliveroo) that take 20% to 35% of every single order, you pay a one-time fixed price from £250. Orders go directly to your WhatsApp or kitchen tablet, and you keep 100% of your customer revenue.",
  },
  {
    question: "Do I get full ownership of the website?",
    answer:
      "Yes! Upon project completion and full payment, you receive full ownership of the Next.js code, assets, and design with zero recurring agency locks or platform dependency.",
  },
];

export const ServicesPage = () => {
  const router = useRouter();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <div
      className="min-h-screen bg-black text-white px-4 sm:px-6 md:px-12 py-12 select-none"
      style={{
        fontFamily: '"Helvetica Now Var", Helvetica, Arial, sans-serif',
      }}
    >
      
      <div className="max-w-5xl mx-auto">
        {/* Top Back Navigation */}
        <button
          onClick={() => router.push('/')}
          className="inline-flex items-center gap-2 text-primary hover:text-white text-sm font-medium transition-colors mb-10 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Main Page</span>
        </button>

        {/* 1. HERO */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-primary text-xs font-mono font-medium uppercase mb-4">
            PREMIUM SERVICES
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-4">
            Conversion-Focused Web Solutions
          </h1>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed font-light">
            Modern, minimal, and high-performing web architecture tailored to turn visitors into loyal, paying clients.
          </p>
        </div>

        {/* 2. SERVICES LIST */}
        <div className="space-y-10 mb-20">
          {detailedServices.map((service) => (
            <div
              key={service.id}
              className="liquid-glass rounded-3xl p-8 sm:p-10 border border-white/15 hover:border-white/25 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-3 flex-wrap mb-2">
                    <h2 className="text-2xl sm:text-3xl font-light text-white">
                      {service.title}
                    </h2>
                    {service.price && (
                      <span className="px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 font-mono text-xs font-bold">
                        {service.price}
                      </span>
                    )}
                    {service.featured && (
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-mono uppercase font-bold tracking-wider">
                        Most Popular for UK Food Businesses
                      </span>
                    )}
                  </div>
                  <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed max-w-2xl">
                    {service.description}
                  </p>
                  {service.dedicatedLink && (
                    <div className="mt-3">
                      <a
                        href={service.dedicatedLink}
                        className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-4 transition-colors"
                      >
                        <span>View Takeaway System Features & Live Demo Breakdown</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-primary bg-white/5 border border-white/10 px-3.5 py-2 rounded-full shrink-0 self-start md:self-auto">
                  <Clock className="w-4 h-4" />
                  <span>Timeline: {service.timeline}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm leading-relaxed font-light">
                {/* Benefits */}
                <div>
                  <h3 className="text-white font-medium text-base mb-3 text-primary">Key Benefits</h3>
                  <ul className="space-y-2">
                    {service.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-white/80">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables */}
                <div>
                  <h3 className="text-white font-medium text-base mb-3 text-primary">Deliverables</h3>
                  <ul className="space-y-2">
                    {service.deliverables.map((d, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-white/80">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3. FAQ SNIPPET */}
        <div className="mb-20 liquid-glass rounded-3xl p-8 border border-white/15">
          <div className="flex items-center gap-2 mb-6 text-primary">
            <HelpCircle className="w-5 h-5" />
            <h3 className="text-white font-medium text-lg">Services FAQ</h3>
          </div>
          <div className="space-y-4">
            {serviceFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="bg-white/5 rounded-2xl border border-white/10 p-5 cursor-pointer"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="text-white text-sm font-medium">{faq.question}</h4>
                    <ChevronDown className={`w-4 h-4 text-white/60 transition-transform ${isOpen ? "rotate-180 text-primary" : ""}`} />
                  </div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="text-white/60 text-xs mt-3 font-light leading-relaxed border-t border-white/5 pt-3"
                      >
                        {faq.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. CTA */}
        <div className="text-center bg-white/5 rounded-3xl p-10 border border-white/10">
          <h3 className="text-2xl sm:text-3xl font-light text-white mb-3">
            Ready to Select Your Custom Web Service?
          </h3>
          <p className="text-white/60 text-xs sm:text-sm max-w-xl mx-auto mb-8 font-light leading-relaxed">
            Message Saim Dev on WhatsApp to receive a detailed proposal and get started immediately.
          </p>
          <a
            href="https://wa.me/923196526604?text=Hi%20Saim,%20I%27m%20interested%20in%20discussing%20a%20website%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-black font-semibold px-8 py-3.5 rounded-full hover:bg-white transition-all text-xs cursor-pointer shadow-xl"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
      <SiteFooter theme="dark" />
    </div>
  );
};
