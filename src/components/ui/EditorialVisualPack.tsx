import React from "react";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, XCircle, ArrowRight, Layers, GitBranch } from "lucide-react";

export interface EngineeringMediaFigureProps {
  src: string;
  alt: string;
  caption: string;
  tag?: string;
  theme?: "dark" | "light";
  priority?: boolean;
}

export const EngineeringMediaFigure: React.FC<EngineeringMediaFigureProps> = ({
  src,
  alt,
  caption,
  tag,
  theme = "dark",
  priority = false,
}) => {
  const isLight = theme === "light";
  return (
    <figure
      className={`my-8 rounded-2xl overflow-hidden border ${
        isLight ? "bg-white border-black/10" : "bg-[#111113] border-white/15"
      }`}
    >
      <div className="relative w-full aspect-video bg-[#0D0D0D] overflow-hidden">
        <img
          src={src}
          alt={alt}
          width={1200}
          height={675}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="w-full h-full object-cover block"
        />
        {tag && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/80 border border-white/15 text-[10px] font-mono-tech uppercase tracking-wider text-[#BAFF00] backdrop-blur-sm">
            {tag}
          </span>
        )}
      </div>
      <figcaption
        className={`px-4 py-3 text-xs leading-relaxed border-t ${
          isLight
            ? "text-[#404040] border-black/[0.06] bg-[#FAFAFB]"
            : "text-white/75 border-white/10 bg-[#0D0D0D]"
        }`}
      >
        {caption}
      </figcaption>
    </figure>
  );
};

export type ArchitecturalDiagramKind = "rendering" | "tco" | "migration" | "sprint";

export const ArchitecturalDiagram: React.FC<{
  kind: ArchitecturalDiagramKind;
  theme?: "dark" | "light";
}> = ({ kind, theme = "dark" }) => {
  const isLight = theme === "light";
  const boxCls = isLight
    ? "rounded-2xl border border-black/10 bg-white p-5 sm:p-7 my-8 shadow-xs"
    : "rounded-2xl border border-white/15 bg-[#101012] p-5 sm:p-7 my-8";
  const titleCls = isLight ? "text-[#0D0D0D]" : "text-white";
  const subCls = isLight ? "text-[#595959]" : "text-white/65";

  if (kind === "rendering") {
    return (
      <figure className={boxCls} aria-labelledby="diag-rendering-title">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
          <div>
            <span className="text-[10px] font-mono-tech uppercase tracking-widest text-[#BAFF00] bg-[#0D0D0D] px-2.5 py-1 rounded-full inline-block mb-2">
              Visual Architecture Diagram
            </span>
            <h3 id="diag-rendering-title" className={`text-base sm:text-lg font-semibold ${titleCls}`}>
              Request Execution Path: Plugin-Heavy WordPress vs Edge Next.js 16
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border border-rose-500/25 bg-rose-500/[0.04] space-y-2.5">
            <p className="text-xs font-mono-tech uppercase tracking-wider text-rose-400 font-semibold">
              Legacy Runtime Chain (Uncached / Dynamic Miss)
            </p>
            <div className="space-y-1.5 text-xs">
              {[
                "1. Visitor taps mobile link on 4G UK/US network",
                "2. Origin server spawns PHP worker process",
                "3. Runs 25–45 MySQL post & meta table queries",
                "4. Loads page builder CSS/JS + jQuery scripts",
                "5. Conflicting SEO plugins inject overlapping meta",
              ].map((step) => (
                <div
                  key={step}
                  className={`px-3 py-2 rounded-lg border ${
                    isLight
                      ? "bg-white border-black/[0.06] text-[#333]"
                      : "bg-black/40 border-white/10 text-white/80"
                  }`}
                >
                  {step}
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl border border-[#BAFF00]/40 bg-[#BAFF00]/[0.06] space-y-2.5">
            <p className="text-xs font-mono-tech uppercase tracking-wider text-[#BAFF00] bg-[#0D0D0D] px-2 py-0.5 rounded inline-block font-semibold">
              Next.js 16 Edge App Router (Saim Dev Target)
            </p>
            <div className="space-y-1.5 text-xs">
              {[
                "1. Build step compiles Server Components + Schema @graph",
                "2. CDN caches static HTML at London (lhr1) & Virginia (iad1)",
                "3. Browser receives complete HTML & H1 in first round-trip",
                "4. Interactive calculators hydrate lazily off main thread",
                "5. Zero runtime DB attack surface or /wp-admin login risk",
              ].map((step) => (
                <div
                  key={step}
                  className={`px-3 py-2 rounded-lg border ${
                    isLight
                      ? "bg-white border-black/10 text-[#0D0D0D] font-medium"
                      : "bg-[#0D0D0D] border-[#BAFF00]/25 text-white font-medium"
                  }`}
                >
                  {step}
                </div>
              ))}
            </div>
          </div>
        </div>
        <figcaption className={`mt-4 text-xs ${subCls}`}>
          Pre-rendering pages into edge-cached HTML removes database latency per pageview while keeping interactive React tools responsive.
        </figcaption>
      </figure>
    );
  }

  if (kind === "tco") {
    const rows = [
      {
        label: "Saim Dev Next.js 16 Build (Fixed + GitHub Ownership)",
        cost: "£790 – £1,450 total over 24 mo ($999 – $1,850 USD)",
        width: "26%",
        highlight: true,
      },
      {
        label: "DIY / SaaS Page Builder (Subdomains Removed + Forms/CMS)",
        cost: "£1,600 – £3,600+ total over 24 mo (ongoing lock-in)",
        width: "54%",
        highlight: false,
      },
      {
        label: "WordPress + Agency Retainer + Plugin Renewals",
        cost: "£4,800 – £14,000+ total over 24 mo (recurring fees)",
        width: "96%",
        highlight: false,
      },
    ];
    return (
      <figure className={boxCls} aria-labelledby="diag-tco-title">
        <span className="text-[10px] font-mono-tech uppercase tracking-widest text-[#BAFF00] bg-[#0D0D0D] px-2.5 py-1 rounded-full inline-block mb-2">
          24-Month Cumulative Cost Model
        </span>
        <h3 id="diag-tco-title" className={`text-base sm:text-lg font-semibold mb-5 ${titleCls}`}>
          2-Year Total Cost of Ownership: Fixed Code Ownership vs Retainer Creep
        </h3>
        <div className="space-y-4">
          {rows.map((r) => (
            <div key={r.label} className="space-y-1.5">
              <div className="flex flex-wrap justify-between gap-2 text-xs">
                <span className={`font-medium ${titleCls}`}>{r.label}</span>
                <span className={r.highlight ? "text-[#BAFF00] font-mono-tech font-semibold bg-[#0D0D0D] px-2 py-0.5 rounded" : subCls}>
                  {r.cost}
                </span>
              </div>
              <div className={`w-full h-3 rounded-full overflow-hidden ${isLight ? "bg-black/[0.06]" : "bg-white/10"}`}>
                <div
                  className={`h-full rounded-full ${r.highlight ? "bg-[#BAFF00]" : "bg-neutral-500/60"}`}
                  style={{ width: r.width }}
                />
              </div>
            </div>
          ))}
        </div>
        <figcaption className={`mt-4 text-xs ${subCls}`}>
          Illustrative 24-month TCO benchmark factoring initial build, managed hosting, security/plugin licenses, and monthly retainer fees.
        </figcaption>
      </figure>
    );
  }

  if (kind === "migration") {
    const stages = [
      { n: "01", title: "Crawl & Export URLs", detail: "Pull Search Console + backlinks CSV" },
      { n: "02", title: "301 Redirect Matrix", detail: "Map 1-hop edge rules in next.config.mjs" },
      { n: "03", title: "Staging Parity QA", detail: "Verify H1, canonical, @graph & clean XML" },
      { n: "04", title: "DNS Cutover & Monitor", detail: "Zero-downtime Vercel DNS + GSC re-crawl" },
    ];
    return (
      <figure className={boxCls} aria-labelledby="diag-mig-title">
        <span className="text-[10px] font-mono-tech uppercase tracking-widest text-[#BAFF00] bg-[#0D0D0D] px-2.5 py-1 rounded-full inline-block mb-2">
          1-Hop Edge Migration Pipeline
        </span>
        <h3 id="diag-mig-title" className={`text-base sm:text-lg font-semibold mb-5 ${titleCls}`}>
          How Our 4-Stage Pipeline Protects Organic Equity During Platform Migration
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {stages.map((st, idx) => (
            <div
              key={st.n}
              className={`relative p-4 rounded-xl border ${
                isLight ? "bg-[#F8F8FA] border-black/10" : "bg-[#161618] border-white/10"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono-tech font-bold text-[#0D0D0D] bg-[#BAFF00] px-2 py-0.5 rounded">
                  STAGE {st.n}
                </span>
                {idx < stages.length - 1 && (
                  <ArrowRight className={`w-3.5 h-3.5 hidden lg:block ${subCls}`} />
                )}
              </div>
              <p className={`text-sm font-semibold mb-1 ${titleCls}`}>{st.title}</p>
              <p className={`text-xs leading-relaxed ${subCls}`}>{st.detail}</p>
            </div>
          ))}
        </div>
        <figcaption className={`mt-4 text-xs ${subCls}`}>
          Every migrated route maps directly in a single permanent HTTP hop without leaving stale redirects inside sitemap.xml.
        </figcaption>
      </figure>
    );
  }

  // sprint pipeline
  const sprint = [
    { d: "Day 1–2", t: "Written Spec", p: "Lock route list, schema graph & fixed quote." },
    { d: "Day 3–4", t: "Live Prototype", p: "Review visual rhythm & UX in browser first." },
    { d: "Day 5–8", t: "Full App Build", p: "React 19 components, forms, responsiveness." },
    { d: "Day 9–10", t: "QA & Handover", p: "Lighthouse audit, DNS live & GitHub admin transfer." },
  ];
  return (
    <figure className={boxCls} aria-labelledby="diag-sprint-title">
      <span className="text-[10px] font-mono-tech uppercase tracking-widest text-[#BAFF00] bg-[#0D0D0D] px-2.5 py-1 rounded-full inline-block mb-2">
        50/50 Milestone Protection Workflow
      </span>
      <h3 id="diag-sprint-title" className={`text-base sm:text-lg font-semibold mb-5 ${titleCls}`}>
        Fixed-Scope Next.js Engineering Sprint From Brief to Ownership
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {sprint.map((s) => (
          <div
            key={s.d}
            className={`p-4 rounded-xl border ${
              isLight ? "bg-[#F8F8FA] border-black/10" : "bg-[#161618] border-white/10"
            }`}
          >
            <span className="text-[10px] font-mono-tech uppercase tracking-wider text-[#BAFF00] bg-[#0D0D0D] px-2 py-0.5 rounded inline-block mb-2">
              {s.d}
            </span>
            <p className={`text-sm font-semibold mb-1 ${titleCls}`}>{s.t}</p>
            <p className={`text-xs leading-relaxed ${subCls}`}>{s.p}</p>
          </div>
        ))}
      </div>
      <figcaption className={`mt-4 text-xs ${subCls}`}>
        50% deposit starts production after scope sign-off; the final 50% becomes payable only after staging inspection.
      </figcaption>
    </figure>
  );
};

export interface ServiceFitMatrixProps {
  idealFor: string[];
  notFor: string[];
  theme?: "dark" | "light";
  title?: string;
}

export const ServiceFitMatrix: React.FC<ServiceFitMatrixProps> = ({
  idealFor,
  notFor,
  theme = "dark",
  title = "Should Your Business Choose This Architecture?",
}) => {
  const isLight = theme === "light";
  return (
    <div
      className={`my-10 rounded-3xl border p-6 sm:p-9 ${
        isLight ? "bg-white border-black/10 text-[#0D0D0D]" : "bg-[#121215] border-white/15 text-white"
      }`}
    >
      <div className="mb-6">
        <span className="text-[10px] font-mono-tech uppercase tracking-[0.2em] text-[#BAFF00] bg-[#0D0D0D] px-3 py-1 rounded-full inline-block mb-3">
          Transparent Fit Assessment
        </span>
        <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">{title}</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          className={`p-5 rounded-2xl border ${
            isLight ? "bg-[#F8FBF2] border-lime-500/40" : "bg-[#BAFF00]/[0.05] border-[#BAFF00]/30"
          }`}
        >
          <p className="text-xs font-mono-tech uppercase tracking-wider font-semibold mb-3.5 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#BAFF00] shrink-0" />
            <span className={isLight ? "text-[#0D0D0D]" : "text-[#BAFF00]"}>Best Fit If You Want:</span>
          </p>
          <ul className="space-y-2.5 text-sm leading-relaxed">
            {idealFor.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="text-[#BAFF00] bg-[#0D0D0D] rounded-full w-4 h-4 flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                  ✓
                </span>
                <span className={isLight ? "text-[#333]" : "text-white/85"}>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`p-5 rounded-2xl border ${
            isLight ? "bg-[#F8F8FA] border-black/10" : "bg-white/[0.03] border-white/10"
          }`}
        >
          <p className={`text-xs font-mono-tech uppercase tracking-wider font-semibold mb-3.5 flex items-center gap-2 ${isLight ? "text-[#595959]" : "text-white/70"}`}>
            <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
            <span>When to Choose Another Path:</span>
          </p>
          <ul className="space-y-2.5 text-sm leading-relaxed">
            {notFor.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="text-rose-400 font-bold shrink-0">×</span>
                <span className={isLight ? "text-[#595959]" : "text-white/70"}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export const EngineeringVerificationBadge: React.FC<{
  contextLabel?: string;
  theme?: "dark" | "light";
}> = ({
  contextLabel = "Verified against Next.js 16.3, React 19 & Google Search Central guidelines",
  theme = "dark",
}) => {
  const isLight = theme === "light";
  return (
    <aside
      aria-label="Engineering Verification Standards"
      className={`my-8 rounded-2xl border p-5 sm:p-6 ${
        isLight ? "bg-[#FAFAFB] border-black/10 text-[#0D0D0D]" : "bg-white/[0.03] border-white/15 text-white"
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-current/10">
        <div className="flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-full bg-[#0D0D0D] text-[#BAFF00] flex items-center justify-center shrink-0 border border-white/15">
            <ShieldCheck className="w-4 h-4" />
          </span>
          <div>
            <p className="text-sm font-semibold leading-tight">
              Saim Dev Engineering Verification Protocol
            </p>
            <p className={`text-xs ${isLight ? "text-[#595959]" : "text-white/60"}`}>
              {contextLabel}
            </p>
          </div>
        </div>
        <span className="text-[10px] font-mono-tech uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#BAFF00] text-[#0D0D0D] font-semibold self-start sm:self-center whitespace-nowrap shrink-0">
          E-E-A-T Reviewed · Nov 2026
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs leading-relaxed mb-4">
        <div className={`p-3 rounded-xl border ${isLight ? "bg-white border-black/[0.06]" : "bg-black/30 border-white/10"}`}>
          <p className="font-semibold mb-1 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-[#BAFF00]" /> Pre-Cutover CI &amp; Types
          </p>
          <p className={isLight ? "text-[#595959]" : "text-white/70"}>
            Strict TypeScript compilation, HTTP redirect parity checks, and clean XML sitemap generation run before launch.
          </p>
        </div>
        <div className={`p-3 rounded-xl border ${isLight ? "bg-white border-black/[0.06]" : "bg-black/30 border-white/10"}`}>
          <p className="font-semibold mb-1 flex items-center gap-1.5">
            <GitBranch className="w-3.5 h-3.5 text-[#BAFF00]" /> Transparent Demo Policy
          </p>
          <p className={isLight ? "text-[#595959]" : "text-white/70"}>
            All showcase previews link to real inspectable builds clearly labeled as interactive concepts, never disguised metrics.
          </p>
        </div>
        <div className={`p-3 rounded-xl border ${isLight ? "bg-white border-black/[0.06]" : "bg-black/30 border-white/10"}`}>
          <p className="font-semibold mb-1 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#BAFF00]" /> Full Client Repo Custody
          </p>
          <p className={isLight ? "text-[#595959]" : "text-white/70"}>
            Clients retain admin access to GitHub repositories, DNS registrars, and Vercel/Cloudflare accounts with zero lock-in.
          </p>
        </div>
      </div>

      <div className={`flex flex-wrap items-center gap-4 text-xs ${isLight ? "text-[#595959]" : "text-white/65"}`}>
        <Link href="/about" className="underline hover:text-[#BAFF00] transition-colors">
          Meet our engineering studio →
        </Link>
        <Link href="/process" className="underline hover:text-[#BAFF00] transition-colors">
          Inspect our 4-stage QA process →
        </Link>
      </div>
    </aside>
  );
};
