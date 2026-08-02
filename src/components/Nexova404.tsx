import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

interface ServiceItem {
  id: string;
  icon: string;
  category: "core" | "growth" | "integrations";
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
}

const servicesData: ServiceItem[] = [
  {
    id: "custom-web",
    icon: "🌐",
    category: "core",
    title: "Custom Website Development",
    subtitle: "Built for Credibility & Conversions",
    description:
      "Bespoke web architecture engineered to position your business as a market leader, engage visitors, and drive predictable sales.",
    highlights: ["Custom Architecture", "High Conversion UI", "Fast Performance"],
  },
  {
    id: "ecommerce",
    icon: "🛒",
    category: "core",
    title: "E-Commerce Solutions",
    subtitle: "Seamless Checkout & Payments",
    description:
      "Modern online stores equipped with secure checkout, inventory sync, and intuitive user experiences for maximum revenue.",
    highlights: ["Secure Gateways", "Smooth Checkout", "Mobile Optimized"],
  },
  {
    id: "responsive",
    icon: "📱",
    category: "core",
    title: "Mobile Responsive Design",
    subtitle: "Flawless Across All Devices",
    description:
      "Fluid, pixel-perfect experiences optimized for mobile, tablet, and desktop viewports to capture clients everywhere.",
    highlights: ["Mobile First", "Touch Friendly", "Instant Adaptability"],
  },
  {
    id: "redesign",
    icon: "🎨",
    category: "core",
    title: "Website Redesign & Overhaul",
    subtitle: "Modernize Your Brand",
    description:
      "Transform outdated websites into sleek, state-of-the-art platforms that elevate your brand image and boost user engagement.",
    highlights: ["Modern Aesthetics", "Improved UX", "Brand Elevation"],
  },
  {
    id: "speed",
    icon: "⚡",
    category: "growth",
    title: "Speed & Performance Optimization",
    subtitle: "Sub-Second Page Loads",
    description:
      "Eliminate slow loading times with deep code optimization, asset compression, and caching to improve bounce rates and Core Web Vitals.",
    highlights: ["Core Web Vitals 90+", "Asset Caching", "Zero Lag"],
  },
  {
    id: "seo",
    icon: "🔍",
    category: "growth",
    title: "SEO & Google Indexing",
    subtitle: "Rank & Attract Organic Traffic",
    description:
      "Structured data, meta optimization, and Google indexing setup designed to increase search visibility and bring consistent leads.",
    highlights: ["Google Indexing", "On-Page SEO", "Schema Markup"],
  },
  {
    id: "whatsapp",
    icon: "💬",
    category: "integrations",
    title: "WhatsApp & Live Chat Integration",
    subtitle: "Instant Client Communication",
    description:
      "Connect your website directly to WhatsApp so potential clients can initiate inquiries and book services with a single click.",
    highlights: ["Direct Chat Widget", "Click-to-Call", "Lead Retention"],
  },
  {
    id: "maps",
    icon: "📍",
    category: "integrations",
    title: "Google Maps & Local Setup",
    subtitle: "Geo-Targeted Visibility",
    description:
      "Interactive embedded maps and Google Business profile alignment so local customers can locate and trust your business instantly.",
    highlights: ["Interactive Maps", "Local Business SEO", "Directions Ready"],
  },
  {
    id: "maintenance",
    icon: "🔧",
    category: "growth",
    title: "Maintenance & Technical Support",
    subtitle: "24/7 Security & Uptime",
    description:
      "Proactive maintenance, automated daily backups, security monitoring, and regular updates so your website runs without interruption.",
    highlights: ["Automated Backups", "SSL & Security", "Uptime Guarantee"],
  },
  {
    id: "ai-automation",
    icon: "🤖",
    category: "integrations",
    title: "AI Workflows & Chatbot Integrations",
    subtitle: "Automate Support & Lead Capture",
    description:
      "Deploy intelligent AI assistants and automated lead capture workflows that engage prospects 24/7 even while you sleep.",
    highlights: ["AI Chatbots", "Lead Capture Automation", "Smart CRM Sync"],
  },
];

const categories = [
  { id: "all", label: "All Capabilities" },
  { id: "core", label: "Core Web" },
  { id: "growth", label: "Growth & SEO" },
  { id: "integrations", label: "Integrations & AI" },
];

const footerColumns = [
  {
    title: "CAPABILITIES",
    links: [
      "Custom Web Architecture",
      "E-Commerce Stores",
      "Mobile First Design",
      "Website Overhauls",
    ],
  },
  {
    title: "GROWTH & SPEED",
    links: [
      "Sub-Second Load Times",
      "Google Indexing & SEO",
      "Core Web Vitals Optimization",
      "Conversion Rate Boost",
    ],
  },
  {
    title: "INTEGRATIONS",
    links: [
      "WhatsApp Direct Chat",
      "Google Maps Location",
      "AI Assistants & Bots",
      "CRM & Booking Sync",
    ],
  },
  {
    title: "MAINTENANCE",
    links: [
      "24/7 Security Monitoring",
      "Automated Cloud Backups",
      "SSL Certificate Setup",
      "Dedicated Support",
    ],
  },
];

export const Nexova404 = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredServices =
    activeCategory === "all"
      ? servicesData
      : servicesData.filter((item) => item.category === activeCategory);

  return (
    <section
      id="services"
      className="relative min-h-screen flex flex-col bg-black text-white overflow-hidden select-none py-16 px-4 sm:px-6 md:px-12 lg:px-16"
      style={{
        fontFamily: '"Helvetica Now Var", Helvetica, Arial, sans-serif',
      }}
    >
      {/* Cinematic Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260613_180732_a54afbf6-b30d-470e-861f-669871f09f67.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Ambient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 pointer-events-none z-0" />

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col min-h-screen max-w-7xl mx-auto w-full">
        {/* Top Header Badge & Title */}
        <div className="text-center pt-6 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-primary text-xs font-semibold tracking-widest uppercase mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>STUDIO SERVICES & CAPABILITIES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-4"
          >
            Engineered for <span className="font-normal italic font-serif text-[#E1E0CC]">Measurable Growth.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed"
          >
            Comprehensive digital solutions crafted to elevate your business credibility, attract high-value leads, and deliver sub-second performance.
          </motion.p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-primary text-black shadow-lg scale-105"
                    : "bg-white/5 hover:bg-white/15 text-white/70 border border-white/10"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Services Glass Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="liquid-glass rounded-2xl p-6 sm:p-7 flex flex-col justify-between group hover:border-primary/40 transition-all duration-300 border border-white/10 shadow-2xl relative overflow-hidden"
              >
                {/* Subtle Hover Gradient Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/15 transition-all duration-500 pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 border border-white/10 shadow-inner">
                      {service.icon}
                    </div>
                    <span className="text-[10px] tracking-widest text-primary/80 uppercase font-mono bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                      {service.subtitle}
                    </span>
                  </div>

                  <h3 className="text-white text-lg sm:text-xl font-medium mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-light mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Feature Highlights Badges */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2 mt-auto">
                  {service.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 text-[11px] text-white/60 bg-white/5 px-2.5 py-1 rounded-full border border-white/5"
                    >
                      <CheckCircle2 className="w-3 h-3 text-primary" />
                      <span>{h}</span>
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom CTA Banner inside Section */}
        <div className="liquid-glass rounded-3xl p-8 sm:p-12 mb-16 text-center border border-white/15 relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-3">
            Ready to Build Your Growth Engine?
          </h3>
          <p className="text-white/70 text-xs sm:text-sm md:text-base max-w-xl mx-auto mb-8 font-light leading-relaxed">
            Let's create a fast, high-converting digital platform tailored specifically for your business.
          </p>
          <a
            href="https://wa.me/12498984111"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-black font-semibold px-8 py-3.5 rounded-full hover:bg-white transition-all duration-300 shadow-xl group cursor-pointer text-sm"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Sleek Modern Footer */}
        <footer className="relative z-10 pt-10 pb-8 border-t border-white/10 mt-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h4 className="text-primary text-[10px] sm:text-xs font-bold tracking-[0.15em] mb-3 sm:mb-4">
                  {col.title}
                </h4>
                <ul className="space-y-2 sm:space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <span className="text-white/60 text-[10px] sm:text-xs font-light">
                        {link}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center text-white/40 text-[11px] font-light mt-12 pt-6 border-t border-white/5">
            © {new Date().getFullYear()} Saim Dev — Full-Stack Web Architecture & Digital Solutions.
          </div>
        </footer>
      </div>
    </section>
  );
};
