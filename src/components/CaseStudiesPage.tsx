import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  Zap,
  Star,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CaseStudy {
  id: string;
  category: "healthcare" | "automotive" | "beauty";
  clientName: string;
  industryTag: string;
  headline: string;
  metricBadge: string;
  metricHighlight: string;
  problemText: string;
  solutionText: string;
  designText: string;
  beforeStats: { loadTime: string; score: number; bounceRate: string };
  afterStats: { loadTime: string; score: number; bounceRate: string };
  testimonial: { quote: string; author: string; role: string };
  previewImage: string;
}

const caseStudiesData: CaseStudy[] = [
  {
    id: "apex-dental",
    category: "healthcare",
    clientName: "Apex Dental Care",
    industryTag: "Healthcare · Dental Practice",
    headline: "Transforming a 4.8-Second Legacy Site into a Sub-Second Patient Lead Engine",
    metricBadge: "+185% Patient Bookings",
    metricHighlight: "+185% Online Appointments in 30 Days",
    problemText:
      "Apex Dental was losing over 60% of mobile visitors due to a slow WordPress template that loaded in 4.8 seconds and lacked instant online booking options.",
    solutionText:
      "Engineered a bespoke React + Tailwind web platform featuring click-to-book WhatsApp integration, MedicalBusiness JSON-LD schema, and local SEO maps optimization.",
    designText:
      "Clean, medical-grade dark luxury aesthetic with high-contrast typography, trust badges, and frictionless appointment CTA buttons.",
    beforeStats: { loadTime: "4.8s", score: 38, bounceRate: "68%" },
    afterStats: { loadTime: "0.6s", score: 99, bounceRate: "18%" },
    testimonial: {
      quote:
        "Saim Dev rebuilt our entire web presence in less than 7 days. Our new patient bookings nearly tripled within the first month!",
      author: "Dr. Marcus Vance",
      role: "Lead Dentist & Practice Director",
    },
    previewImage:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "speedtech-auto",
    category: "automotive",
    clientName: "SpeedTech Automotive",
    industryTag: "Automotive · Repair & Performance",
    headline: "Mobile-First Emergency Service Platform Driving 2.2x Revenue Growth",
    metricBadge: "+220% Emergency Calls",
    metricHighlight: "2.2x Increase in Weekly Towing & Repair Requests",
    problemText:
      "Drivers stuck on the road needed immediate click-to-call service, but SpeedTech's previous website was unreadable on mobile phones and failed to rank locally.",
    solutionText:
      "Crafted a high-contrast mobile-first platform featuring instant emergency call triggers, WhatsApp direct location sharing, and Google Local Pack SEO.",
    designText:
      "Bold automotive visual design with high-visibility CTA buttons, dynamic service cards, and real-time repair status tracking.",
    beforeStats: { loadTime: "5.2s", score: 31, bounceRate: "74%" },
    afterStats: { loadTime: "0.5s", score: 100, bounceRate: "14%" },
    testimonial: {
      quote:
        "Our phone hasn't stopped ringing since the new site went live. The instant WhatsApp location sharing alone saved us hours of back-and-forth.",
      author: "James Miller",
      role: "Operations Manager, SpeedTech Auto",
    },
    previewImage:
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "velvet-salon",
    category: "beauty",
    clientName: "Velvet Hair Studio & Spa",
    industryTag: "Beauty & Wellness · Luxury Salon",
    headline: "Editorial Brand Elevation & Direct WhatsApp Appointment Engine",
    metricBadge: "Fully Booked 3 Weeks Ahead",
    metricHighlight: "Fully Booked Out 3 Weeks in Advance",
    problemText:
      "An outdated site failed to convey the salon's premium luxury pricing, resulting in low inquiry conversion and price pushback from prospective clients.",
    solutionText:
      "Designed a minimalist editorial web experience with smooth Framer Motion interactions, high-definition portfolio galleries, and frictionless appointment flows.",
    designText:
      "Monochrome high-fashion aesthetic featuring fluid typography, soft micro-animations, and instant service package selection.",
    beforeStats: { loadTime: "3.9s", score: 45, bounceRate: "59%" },
    afterStats: { loadTime: "0.4s", score: 100, bounceRate: "12%" },
    testimonial: {
      quote:
        "The website looks like a high-end fashion magazine. Clients regularly compliment our online booking experience before they even walk through the door.",
      author: "Sophia Laurent",
      role: "Creative Founder, Velvet Hair Studio",
    },
    previewImage:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
  },
];

export const CaseStudiesPage = ({ onBack }: { onBack: () => void }) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredStudies =
    activeCategory === "all"
      ? caseStudiesData
      : caseStudiesData.filter((s) => s.category === activeCategory);

  return (
    <div
      className="min-h-screen bg-black text-white px-4 sm:px-6 md:px-12 py-12 select-none"
      style={{
        fontFamily: '"Helvetica Now Var", Helvetica, Arial, sans-serif',
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Top Back Navigation */}
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-primary hover:text-white text-sm font-medium transition-colors mb-10 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Main Page</span>
        </button>

        {/* HERO SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono font-medium uppercase mb-4 shadow-md">
            <TrendingUp className="w-3.5 h-3.5" />
            PROVEN CLIENT RESULTS
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white mb-5">
            Real Results. Real Websites.
          </h1>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed font-light">
            Explore how Saim Dev replaces slow, outdated websites with high-converting digital platforms engineered for sub-second speed, top search rankings, and predictable lead growth.
          </p>
        </div>

        {/* CATEGORY FILTER TABS */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-16">
          {[
            { id: "all", label: "All Projects" },
            { id: "healthcare", label: "Healthcare & Dental" },
            { id: "automotive", label: "Automotive & Towing" },
            { id: "beauty", label: "Beauty & Luxury Salon" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                activeCategory === tab.id
                  ? "bg-primary text-black font-semibold shadow-lg scale-105"
                  : "bg-white/5 text-white/70 hover:text-white border border-white/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* CASE STUDY CARDS LIST */}
        <div className="space-y-16 mb-24">
          <AnimatePresence mode="wait">
            {filteredStudies.map((study) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-[#0C0C0C] rounded-3xl p-6 sm:p-10 border border-white/10 hover:border-white/20 transition-all shadow-2xl relative overflow-hidden"
              >
                {/* Header Tag Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-primary bg-white/5 border border-white/10 px-3 py-1 rounded-full uppercase">
                      {study.industryTag}
                    </span>
                    <span className="text-xs text-white/50 font-mono">
                      {study.clientName}
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                    <Zap className="w-3.5 h-3.5" />
                    <span>{study.metricBadge}</span>
                  </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
                  {/* Left Column: Case Narrative & Stats */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <h2 className="text-2xl sm:text-3xl font-light text-white leading-tight mb-6">
                      {study.headline}
                    </h2>

                    {/* Problem / Solution / Design Cards */}
                    <div className="space-y-4 text-xs sm:text-sm font-light leading-relaxed mb-6">
                      <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                        <span className="text-primary font-mono text-xs block mb-1 uppercase tracking-wider">
                          01. The Problem
                        </span>
                        <p className="text-white/70">{study.problemText}</p>
                      </div>

                      <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                        <span className="text-emerald-400 font-mono text-xs block mb-1 uppercase tracking-wider">
                          02. Saim Dev Architecture Solution
                        </span>
                        <p className="text-white/70">{study.solutionText}</p>
                      </div>
                    </div>

                    {/* Speed Comparison Bar */}
                    <div className="bg-black/60 rounded-2xl p-5 border border-white/10">
                      <span className="text-xs font-mono text-white/50 uppercase tracking-widest block mb-3">
                        PERFORMANCE GAINS (BEFORE VS AFTER)
                      </span>
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl">
                          <span className="text-[10px] font-mono text-red-400 block uppercase">
                            Legacy Site
                          </span>
                          <div className="text-xl font-bold text-white mt-1">
                            {study.beforeStats.loadTime}
                          </div>
                          <span className="text-[10px] text-white/50">
                            Score: {study.beforeStats.score}/100
                          </span>
                        </div>

                        <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                          <span className="text-[10px] font-mono text-emerald-400 block uppercase">
                            Saim Dev Platform
                          </span>
                          <div className="text-xl font-bold text-emerald-300 mt-1">
                            {study.afterStats.loadTime}
                          </div>
                          <span className="text-[10px] text-emerald-400 font-mono">
                            Score: {study.afterStats.score}/100 ⚡
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Visual Mockup Canvas & Testimonial */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full">
                    {/* Simulated Browser Frame */}
                    <div className="bg-[#181818] rounded-2xl border border-white/15 overflow-hidden shadow-2xl mb-6">
                      <div className="bg-[#222] px-4 py-2 flex items-center gap-2 border-b border-white/10">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                        <span className="text-[10px] font-mono text-white/40 ml-2">
                          https://{study.id}.com
                        </span>
                      </div>
                      <div className="relative h-56 sm:h-64 overflow-hidden group">
                        <img
                          src={study.previewImage}
                          alt={study.clientName}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md p-3 rounded-xl border border-white/10">
                          <span className="text-xs text-white/80 font-medium block">
                            {study.metricHighlight}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Client Testimonial Quote */}
                    <div className="bg-white/5 rounded-2xl p-5 border border-white/10 relative">
                      <div className="flex items-center gap-1 text-amber-400 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                        ))}
                      </div>
                      <p className="text-white/80 text-xs sm:text-sm font-light italic mb-3">
                        "{study.testimonial.quote}"
                      </p>
                      <div className="text-xs">
                        <span className="text-white font-medium block">
                          {study.testimonial.author}
                        </span>
                        <span className="text-white/50 font-mono text-[10px]">
                          {study.testimonial.role}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4" />
                    Verified Project Results
                  </span>
                  <a
                    href="https://wa.me/12498984111"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:text-white transition-colors"
                  >
                    <span>Request Similar Case Study</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* AGENCY GUARANTEE BANNER */}
        <div className="bg-white/5 rounded-3xl p-8 sm:p-12 border border-white/10 text-center mb-20">
          <h2 className="text-2xl sm:text-3xl font-light text-white mb-4">
            Guaranteed Performance Contract
          </h2>
          <p className="text-white/70 text-xs sm:text-sm max-w-2xl mx-auto font-light leading-relaxed mb-8">
            Every website built by Saim Dev includes a guaranteed 95+ Lighthouse speed benchmark, mobile responsiveness, and 100% full code ownership upon completion.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-emerald-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> Sub-Second Load Time
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> 100% Mobile Usability
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> Google Schema Indexing
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-[#0F0F0F] rounded-3xl p-10 sm:p-14 border border-white/15">
          <h3 className="text-2xl sm:text-4xl font-light text-white mb-4">
            Ready to Build Your Case Study Success Story?
          </h3>
          <p className="text-white/60 text-xs sm:text-sm max-w-xl mx-auto mb-8 font-light leading-relaxed">
            Message Saim Dev on WhatsApp to discuss your project requirements and receive a customized quote within 2 hours.
          </p>
          <a
            href="https://wa.me/12498984111"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-black font-semibold px-8 py-4 rounded-full hover:bg-white transition-all text-xs sm:text-sm cursor-pointer shadow-xl"
          >
            <span>Start Your Project on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
