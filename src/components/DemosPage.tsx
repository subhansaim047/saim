import { Helmet } from "react-helmet-async";
import { useNavigate, Link } from "react-router-dom";
import React, { useState } from "react";
import { ExternalLink, Eye, Monitor, Tablet, Smartphone, CheckCircle2, ArrowLeft } from "lucide-react";
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
    id: "atelier-noir",
    title: "ATELIER NOIR â€” Luxury Interior Architecture & Design",
    category: "Interior Architecture & Luxury Living",
    description: "A minimalist, editorial interior design and architecture studio showcase featuring high-end residential case studies, filterable project portfolios, and architectural project inquiry flows.",
    demoUrl: "/demos/atelier-noir/index.html",
    previewImage: "/demos/atelier-noir/preview.png",
    tags: ["Interior Design", "Architecture", "Minimalist Luxury", "Editorial Layout"],
    features: [
      "Editorial Minimalist Aesthetic & Geist Typography",
      "Comprehensive 5-Project Deep-Dive Case Studies",
      "Curated Residential & Penthouse Visual Portfolio",
      "Interactive Architecture Project Consultation System"
    ],
    badge: "Featured Template"
  },
  {
    id: "serenia",
    title: "SERENIA â€” Luxury Wellness & Beauty Spa",
    category: "Wellness Sanctuary & Day Spa",
    description: "A tranquil, nature-inspired luxury wellness and day spa website featuring full appointment booking, 8 signature therapy showcases, organic cosmetics shop, treatment pricing, and sanctuary lookbook.",
    demoUrl: "/demos/serenia/index.html",
    previewImage: "/demos/serenia/preview.png",
    tags: ["Wellness & Spa", "Appointment Booking", "Cosmetics Shop", "Full Template"],
    features: [
      "Tranquil Earth-Toned Aesthetic & Belleza Typography",
      "Comprehensive 8-Therapy Service Catalog & Day Passes",
      "Organic Beauty & Skincare E-Commerce Showcase",
      "Interactive Appointment Reservation & 100% Offline Assets"
    ],
    badge: "Featured Template"
  },
  {
    id: "valeria",
    title: "VALÃˆRIA â€” Luxury Beauty Salon & Cosmetics",
    category: "Beauty Salon & High-End Aesthetics",
    description: "An ultra-luxurious, editorial aesthetic beauty salon template featuring animated hero marquees, comprehensive multi-page service menus, curated lookbook gallery, and interactive booking inquiry.",
    demoUrl: "/demos/valeria/index.html",
    previewImage: "/demos/valeria/preview.png",
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
    title: "Studio-D Brickell â€” Luxury Beauty Salon & Spa",
    category: "Beauty Salon & Miami Luxury Services",
    description: "A 100% pixel-perfect 1:1 clone of the premier Studio-D Brickell salon in Miami, FL. Features top announcement discounts, luxury service showcases, KÃ©rastase & Shu Uemura highlights, online booking, and a mobile quick-action bar.",
    demoUrl: "/demos/studio-dbrickell/index.html",
    previewImage: "/demos/studio-dbrickell/assets/images/branding/og-image.jpg",
    tags: ["1:1 Pixel Clone", "Beauty Salon", "Luxury Spa", "Mobile First"],
    features: [
      "100% 1:1 Pixel-Perfect Visual Fidelity",
      "KÃ©rastase & Shu Uemura Luxury Spotlight",
      "Interactive Online Booking & Mangomint Integration",
      "Mobile Sticky Bar & Responsive Fluid Grids"
    ],
    badge: "New 1:1 Clone"
  },
  {
    id: "liana",
    title: "LIANA â€” Hair & Beauty Salon Native Template",
    category: "Beauty Salon & Online Booking",
    description: "A pixel-perfect, ultra-fast native recreation of the luxury LIANA Hair & Beauty Salon template. Features online booking, signature treatments menu, master stylists showcase, and responsive mobile-first design.",
    demoUrl: "/demos/liana/index.html",
    previewImage: "/demos/liana/preview.png",
    tags: ["Clean Code", "Beauty Salon", "Booking System", "Fast Loading"],
    features: [
      "Pixel-Perfect Luxury Design & Typography",
      "Interactive Online Booking Form",
      "Full Subpages (Services, About & Team, Contact)",
      "Mobile-First Responsive Layout & Fast Loading"
    ],
    badge: "Featured Live Demo"
  },
  {
    id: "woshico",
    title: "Woshico â€” Auto Detailing & Car Wash Premium Template",
    category: "Auto Services & E-Commerce",
    description: "A 100% pixel-perfect, high-performance interactive website featuring smooth 60fps micro-animations, hero video transcode, and responsive pricing grids.",
    demoUrl: "/demos/woshico/index.html",
    previewImage: "/demos/woshico/images/6902f78e0d6aea37b1fc8910_graph.webp",
    tags: ["Interactive UI", "HTML5/CSS3", "Responsive", "Auto Services"],
    features: [
      "Smooth 60fps Micro-animations",
      "Interactive Hero Video & Slider Transcode",
      "100% Offline Asset & Local Font Bundling",
      "Fully Responsive Mobile & Tablet Layouts"
    ]
  }
];

interface DemosPageProps {
  onBack?: () => void;
}

export const DemosPage: React.FC<DemosPageProps> = ({ onBack }) => {
  const navigate = useNavigate();
  const [selectedDemo, setSelectedDemo] = useState<DemoItem | null>(null);
  const [viewportMode, setViewportMode] = useState<"desktop" | "tablet" | "mobile">("desktop");

  const handleBack = () => { if (onBack) { onBack(); } else { navigate("/"); } };

  return (
    <main className="min-h-screen bg-black text-[#E1E0CC] selection:bg-primary selection:text-black flex flex-col justify-between">
      <Helmet>
        <title>Live Website Templates & Demos | Saim Dev</title>
        <meta name="description" content="Browse live interactive website demos built by Saim Dev. See real examples of fast, professional websites for restaurants, agencies, and local businesses." />
        <link rel="canonical" href="https://www.saimdev.site/demos" />
        <meta property="og:title" content="Live Website Templates & Demos | Saim Dev" />
        <meta property="og:description" content="Browse live interactive website demos built by Saim Dev. See real examples of fast, professional websites for restaurants, agencies, and local businesses." />
        <meta property="og:url" content="https://www.saimdev.site/demos" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      {/* Background Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-primary/10 via-primary/5 to-transparent blur-[120px] pointer-events-none z-0" />

      {/* Header Navigation Bar */}
      <nav className="sticky top-0 z-40 backdrop-blur-md bg-black/80 border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20 group-hover:border-primary transition-colors">
              <img src="/saim-dev-logo.png" alt="Saim Dev Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-semibold text-lg text-white tracking-tight">Saim Dev</span>
          </Link>

          <div className="flex items-center gap-6">
            <Link to="/" className="text-sm text-[#E1E0CC]/70 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer font-medium"><ArrowLeft className="w-4 h-4" /> Back to Home</Link>
            <a
              href="https://wa.me/12498984111"
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
                  alt={demo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                {demo.badge && (
                  <span className="absolute top-3 left-3 bg-primary text-black font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
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
              <button
                onClick={() => setSelectedDemo(null)}
                className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-xl transition-colors cursor-pointer"
              >
                âœ•
              </button>
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

      <FooterSection />
    </main>
  );
};

