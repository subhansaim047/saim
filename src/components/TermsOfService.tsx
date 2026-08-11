import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const TermsOfService = ({ onBack }: { onBack: () => void }) => {
  return (
    <div
      className="min-h-screen bg-black text-white px-4 sm:px-6 md:px-12 py-12 select-none"
      style={{
        fontFamily: '"Helvetica Now Var", Helvetica, Arial, sans-serif',
      }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Top Back Navigation */}
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-primary hover:text-white text-sm font-medium transition-colors mb-10 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Main Page</span>
        </button>

        {/* Header */}
        <div className="border-b border-white/10 pb-8 mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white mb-3">
            Terms of Service
          </h1>
          <p className="text-white/50 text-xs font-mono">
            Effective Date: July 25, 2026 · Saim Dev Web Architecture
          </p>
        </div>

        {/* Terms Sections */}
        <div className="space-y-8 text-white/80 text-sm sm:text-base font-light leading-relaxed">
          <section>
            <h2 className="text-white text-xl font-medium mb-3">1. Scope of Services</h2>
            <p>
              Saim Dev provides custom web architecture, e-commerce solutions, mobile responsive development, speed optimization, and SEO setup. Services are provided under two main plans: Starter Plan ($300, 5–7 days delivery) and Business Plan ($600, 7–10 days delivery).
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-medium mb-3">2. Client Responsibilities</h2>
            <p>
              Clients agree to provide required text content, logos, branding assets, and feedback in a timely manner. Delays in asset provision may adjust final project delivery schedules.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-medium mb-3">3. Revisions & Technical Support</h2>
            <p>
              Starter Plan includes 2 rounds of design revisions and 14 days of dedicated post-launch support. Business Plan includes 5 rounds of revisions and 30 days of post-launch technical support. Additional feature requests outside the original scope will be quoted separately.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-medium mb-3">4. Intellectual Property & Code Ownership</h2>
            <p>
              Upon 100% full payment completion, full ownership of the website design, codebase, and assets is transferred to the client. Saim Dev retains the right to display the completed project in portfolio showcases.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-medium mb-3">5. Payment Terms & Refunds</h2>
            <p>
              Projects require a 50% deposit before work commences, with the remaining 50% due upon final project approval prior to live deployment. Deposits are non-refundable once design and development work has started.
            </p>
          </section>

          <section className="pt-6 border-t border-white/10">
            <h2 className="text-white text-xl font-medium mb-3">6. Contact & Questions</h2>
            <p>
              If you have any questions regarding these Terms of Service, please reach out directly:
            </p>
            <p className="mt-2 text-primary font-mono text-xs sm:text-sm">
              WhatsApp: +1 (249) 898-4111 · Web: saimdev.site
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
