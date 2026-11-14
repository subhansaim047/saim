"use client";
import { SiteFooter } from "./SiteFooter";
import { RhHeader } from "./rh/RhHeader";

export const TermsOfService = () => {
  return (
    <div className="rh-page min-h-screen bg-[#0D0D0D] text-white selection:bg-[#BAFF00] selection:text-[#0D0D0D]">
      <RhHeader theme="dark" />

      {/* rh.design/privacy Dark Hero */}
      <section className="bg-[#0D0D0D] text-white pt-16 pb-16 sm:pt-20 sm:pb-20 px-4 sm:px-8 border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-[#BAFF00] bg-white/[0.05] px-3.5 py-1.5 rounded-full border border-white/10 mb-6">
            <span>Commercial Terms &amp; Code Ownership</span>
          </div>
          <p className="text-white/50 text-xs sm:text-sm font-mono uppercase tracking-wider mb-3">
            Effective Date: July 25, 2026 · Saim Dev Web Architecture
          </p>
          <h1 className="text-4xl sm:text-6xl font-medium tracking-[-0.03em] text-white leading-[1.06]">
            Terms of Service
          </h1>
        </div>
      </section>

      {/* rh.design/privacy Light Structured Legal Content */}
      <section className="bg-[#F5F5F7] text-[#0D0D0D] py-16 sm:py-24 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-[24px] p-6 sm:p-12 border border-black/[0.08] space-y-8 text-[#0D0D0D]/80 text-sm sm:text-base leading-relaxed shadow-xs">
          <section>
            <h2 className="text-[#0D0D0D] text-xl sm:text-2xl font-medium tracking-[-0.02em] mb-3">1. Scope of Services</h2>
            <p>
              Saim Dev provides custom web architecture, e-commerce solutions, mobile responsive development, speed optimisation, and SEO setup. Services are provided under three primary tiers: Landing Page (from £250, 3–5 days delivery), Starter Plan (from £390, 5–7 days delivery), and Business Plan (from £790, 7–10 days delivery), as well as bespoke web architecture solutions.
            </p>
          </section>

          <section>
            <h2 className="text-[#0D0D0D] text-xl sm:text-2xl font-medium tracking-[-0.02em] mb-3">2. Client Responsibilities</h2>
            <p>
              Clients agree to provide required text content, logos, branding assets, and feedback in a timely manner. Delays in asset provision may adjust final project delivery schedules.
            </p>
          </section>

          <section>
            <h2 className="text-[#0D0D0D] text-xl sm:text-2xl font-medium tracking-[-0.02em] mb-3">3. Revisions &amp; Technical Support</h2>
            <p>
              Revisions included on staging until the agreed scope is delivered. Starter Plan includes 2 rounds of design revisions and 14 days of dedicated post-launch support. Business Plan includes 5 rounds of revisions and 30 days of post-launch technical support. Additional feature requests outside the agreed project brief will be quoted separately. (DRAFT for owner review)
            </p>
          </section>

          <section>
            <h2 className="text-[#0D0D0D] text-xl sm:text-2xl font-medium tracking-[-0.02em] mb-3">4. Intellectual Property &amp; Code Ownership</h2>
            <p>
              Upon 100% full payment completion, full ownership of the website design, codebase, and assets is transferred to the client. Saim Dev retains the right to display the completed project in portfolio showcases.
            </p>
          </section>

          <section>
            <h2 className="text-[#0D0D0D] text-xl sm:text-2xl font-medium tracking-[-0.02em] mb-3">5. Payment Terms &amp; Refunds</h2>
            <p>
              Projects require a 50% deposit before work commences, with the remaining 50% due upon final project approval prior to live deployment. Deposits are non-refundable once design and development work has started.
            </p>
          </section>

          <section className="pt-6 border-t border-black/10">
            <h2 className="text-[#0D0D0D] text-xl sm:text-2xl font-medium tracking-[-0.02em] mb-3">6. Contact &amp; Questions</h2>
            <p>
              If you have any questions regarding these Terms of Service, please reach out directly:
            </p>
            <p className="mt-2 text-[#0D0D0D] font-mono text-xs sm:text-sm">
              WhatsApp: +92 319 6526604 · Instagram: @saim_agency · Web: saimdev.site
            </p>
          </section>
        </div>
      </section>

      <SiteFooter theme="dark" />
    </div>
  );
};
