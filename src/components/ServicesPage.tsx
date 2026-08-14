import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, ArrowRight, HelpCircle, ChevronDown, CheckCircle2, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  deliverables: string[];
  timeline: string;
}

const detailedServices: ServiceDetail[] = [
  {
    id: "custom-web",
    title: "Custom Website Development",
    description:
      "Bespoke full-stack web architecture designed to establish brand authority, engage visitors, and turn traffic into predictable sales.",
    benefits: [
      "Custom codebase built from scratch",
      "High conversion UI layout",
      "Sub-second loading times",
      "Full ownership of code and assets",
    ],
    deliverables: [
      "Responsive React/Tailwind codebase",
      "Content Architecture & Copy Structure",
      "Contact & Lead Forms",
      "14–30 Days Support",
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
      "Direct WhatsApp & CRM integration",
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
      "Instant WhatsApp lead notification",
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
      "If you need a fast, essential business presence with up to 5 pages, the Starter Plan ($500 – $1,000) is ideal. For comprehensive multi-page websites with advanced animations, AI chatbot, and full SEO, choose the Business Plan ($1,000 – $5,000).",
  },
  {
    question: "Do I get full ownership of the website?",
    answer:
      "Yes! Upon project completion and 100% full payment, you receive full ownership of the code, assets, and design with zero recurring agency locks.",
  },
];

export const ServicesPage = () => {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <div
      className="min-h-screen bg-black text-white px-4 sm:px-6 md:px-12 py-12 select-none"
      style={{
        fontFamily: '"Helvetica Now Var", Helvetica, Arial, sans-serif',
      }}
    >
      <Helmet>
        <title>Web Development Services | Saim Dev</title>
        <meta name="description" content="Professional web design and development services for small businesses. Custom websites, landing pages, e-commerce, and full-stack solutions built with React, Next.js, and Node.js." />
        <link rel="canonical" href="https://www.saimdev.site/services" />
        <meta property="og:title" content="Web Development Services | Saim Dev" />
        <meta property="og:description" content="Professional web design and development services for small businesses. Custom websites, landing pages, e-commerce, and full-stack solutions built with React, Next.js, and Node.js." />
        <meta property="og:url" content="https://www.saimdev.site/services" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="max-w-5xl mx-auto">
        {/* Top Back Navigation */}
        <button
          onClick={() => navigate('/')}
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
                  <h2 className="text-2xl sm:text-3xl font-light text-white mb-2">
                    {service.title}
                  </h2>
                  <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed max-w-2xl">
                    {service.description}
                  </p>
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
            href="https://wa.me/12498984111"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-black font-semibold px-8 py-3.5 rounded-full hover:bg-white transition-all text-xs cursor-pointer shadow-xl"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
