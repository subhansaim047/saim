import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Code2, Zap, Search, Bot, Cpu, ArrowRight } from "lucide-react";

export const TechnologiesPage = () => {
  const navigate = useNavigate();
  return (
    <div
      className="min-h-screen bg-black text-white px-4 sm:px-6 md:px-12 py-12 select-none"
      style={{
        fontFamily: '"Helvetica Now Var", Helvetica, Arial, sans-serif',
      }}
    >
      <Helmet>
        <title>Tech Stack | Next.js, React, Node.js, Vite | Saim Dev</title>
        <meta name="description" content="Every website I build uses a modern, proven tech stack — Next.js, React, Node.js, Vite, and Tailwind CSS — for maximum performance, SEO, and reliability." />
        <link rel="canonical" href="https://www.saimdev.site/technologies" />
        <meta property="og:title" content="Tech Stack | Next.js, React, Node.js, Vite | Saim Dev" />
        <meta property="og:description" content="Every website I build uses a modern, proven tech stack — Next.js, React, Node.js, Vite, and Tailwind CSS — for maximum performance, SEO, and reliability." />
        <meta property="og:url" content="https://www.saimdev.site/technologies" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="max-w-6xl mx-auto">
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
            ENGINEERING STACK
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-4">
            Technologies & Expertise
          </h1>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed font-light">
            Modern, sub-second web architecture powered by cutting-edge frontend frameworks, performance engineering, structured SEO, and AI workflows.
          </p>
        </div>

        {/* 2. FRONTEND */}
        <div className="mb-16">
          <div className="flex items-center gap-2.5 mb-6 text-primary">
            <Code2 className="w-6 h-6" />
            <h2 className="text-2xl font-light text-white">Frontend Frameworks</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="liquid-glass rounded-2xl p-6 border border-white/10">
              <span className="text-2xl mb-3 block">⚛️</span>
              <h3 className="text-white font-medium text-lg mb-1">React 18</h3>
              <p className="text-white/60 text-xs font-light leading-relaxed">
                Component-driven web UI with concurrent rendering and instant state updates.
              </p>
            </div>
            <div className="liquid-glass rounded-2xl p-6 border border-white/10">
              <span className="text-2xl mb-3 block">▲</span>
              <h3 className="text-white font-medium text-lg mb-1">Next.js</h3>
              <p className="text-white/60 text-xs font-light leading-relaxed">
                Server-side rendering, static site generation, and optimal edge routing.
              </p>
            </div>
            <div className="liquid-glass rounded-2xl p-6 border border-white/10">
              <span className="text-2xl mb-3 block">📘</span>
              <h3 className="text-white font-medium text-lg mb-1">TypeScript</h3>
              <p className="text-white/60 text-xs font-light leading-relaxed">
                Strict type safety ensuring zero runtime exceptions and bulletproof code quality.
              </p>
            </div>
            <div className="liquid-glass rounded-2xl p-6 border border-white/10">
              <span className="text-2xl mb-3 block">🎨</span>
              <h3 className="text-white font-medium text-lg mb-1">Tailwind CSS</h3>
              <p className="text-white/60 text-xs font-light leading-relaxed">
                Utility-first, responsive design tokens with zero unused CSS footprint.
              </p>
            </div>
          </div>
        </div>

        {/* 3. PERFORMANCE */}
        <div className="mb-16">
          <div className="flex items-center gap-2.5 mb-6 text-primary">
            <Zap className="w-6 h-6" />
            <h2 className="text-2xl font-light text-white">Performance Engineering</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="liquid-glass rounded-2xl p-7 border border-white/10">
              <h3 className="text-white font-medium text-lg mb-2">Core Web Vitals Optimization</h3>
              <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed mb-4">
                Sub-second LCP (Largest Contentful Paint &lt; 2.5s), minimal CLS (&lt; 0.1), and rapid INP (&lt; 200ms) for high Google search rankings.
              </p>
              <div className="flex items-center gap-3 text-xs font-mono text-emerald-400">
                <span className="bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">LCP &lt; 2.5s</span>
                <span className="bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">CLS &lt; 0.1</span>
                <span className="bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">INP &lt; 200ms</span>
              </div>
            </div>
            <div className="liquid-glass rounded-2xl p-7 border border-white/10">
              <h3 className="text-white font-medium text-lg mb-2">Lighthouse Score Guarantee</h3>
              <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed mb-4">
                Guaranteed 90+ Lighthouse benchmark scores across Performance, Accessibility, Best Practices, and 100 SEO score.
              </p>
              <div className="flex items-center gap-3 text-xs font-mono text-emerald-400">
                <span className="bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">Perf 90+</span>
                <span className="bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">SEO 100</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4. SEO & GEO */}
        <div className="mb-16">
          <div className="flex items-center gap-2.5 mb-6 text-primary">
            <Search className="w-6 h-6" />
            <h2 className="text-2xl font-light text-white">SEO, GEO & Search Indexing</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="liquid-glass rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-medium mb-1">Technical SEO</h3>
              <p className="text-white/60 text-xs font-light">Meta tags, canonicals, and clean semantic HTML hierarchy.</p>
            </div>
            <div className="liquid-glass rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-medium mb-1">Structured Data</h3>
              <p className="text-white/60 text-xs font-light">JSON-LD Organization, Person, Service, and FAQ schemas.</p>
            </div>
            <div className="liquid-glass rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-medium mb-1">Sitemap & Robots</h3>
              <p className="text-white/60 text-xs font-light">Automated XML sitemap and search engine crawler instructions.</p>
            </div>
            <div className="liquid-glass rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-medium mb-1">AI Search (LLMO)</h3>
              <p className="text-white/60 text-xs font-light">Optimized text blocks for ChatGPT, Claude, and Perplexity indexing.</p>
            </div>
          </div>
        </div>

        {/* 5. AI INTEGRATIONS */}
        <div className="mb-16">
          <div className="flex items-center gap-2.5 mb-6 text-primary">
            <Bot className="w-6 h-6" />
            <h2 className="text-2xl font-light text-white">AI & Automation Integrations</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="liquid-glass rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-medium text-lg mb-2">Smart Chatbots</h3>
              <p className="text-white/60 text-xs font-light leading-relaxed">
                24/7 client support AI assistants that answer inquiries and qualify leads automatically.
              </p>
            </div>
            <div className="liquid-glass rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-medium text-lg mb-2">Lead Workflows</h3>
              <p className="text-white/60 text-xs font-light leading-relaxed">
                Automated CRM syncing, instant email notifications, and WhatsApp lead routing.
              </p>
            </div>
            <div className="liquid-glass rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-medium text-lg mb-2">AI Search Readiness</h3>
              <p className="text-white/60 text-xs font-light leading-relaxed">
                Structured content layers formatted for AI recommendation engines.
              </p>
            </div>
          </div>
        </div>

        {/* 6. DEVELOPMENT PROCESS */}
        <div className="mb-20 liquid-glass rounded-3xl p-8 sm:p-10 border border-white/15">
          <div className="flex items-center gap-2.5 mb-6 text-primary">
            <Cpu className="w-6 h-6" />
            <h2 className="text-2xl font-light text-white">Development Process & Standards</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-white/70 font-light">
            <div>
              <span className="text-primary font-mono text-sm block mb-1">01. Clean Codebase</span>
              Reusable TypeScript components with zero bloat and strict linting.
            </div>
            <div>
              <span className="text-primary font-mono text-sm block mb-1">02. Automated Builds</span>
              Instant CI/CD production pipelines via Vite & Vercel deployment.
            </div>
            <div>
              <span className="text-primary font-mono text-sm block mb-1">03. Security Hardening</span>
              SSL certificates, headers protection, and safe form handling.
            </div>
          </div>
        </div>

        {/* 7. CTA */}
        <div className="text-center bg-white/5 rounded-3xl p-10 border border-white/10">
          <h3 className="text-2xl font-light text-white mb-3">
            Want Modern Tech Architecture for Your Business?
          </h3>
          <p className="text-white/60 text-xs sm:text-sm max-w-xl mx-auto mb-8 font-light leading-relaxed">
            Let's build a fast, secure, and AI-ready platform that sets you apart from competitors.
          </p>
          <a
            href="https://wa.me/34711244392"
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
