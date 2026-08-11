import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const PrivacyPolicy = ({ onBack }: { onBack: () => void }) => {
  return (
    <div
      className="min-h-screen bg-black text-white px-4 sm:px-6 md:px-12 py-12 select-none"
      style={{
        fontFamily: '"Helvetica Now Var", Helvetica, Arial, sans-serif',
      }}
    >
      <Helmet>
        <title>Privacy Policy | Saim Dev</title>
        <meta name="description" content="Read the Saim Dev privacy policy. Learn how your data is collected, used, and protected when you use our website or engage our web development services." />
        <link rel="canonical" href="https://www.saimdev.site/privacy" />
        <meta property="og:title" content="Privacy Policy | Saim Dev" />
        <meta property="og:description" content="Read the Saim Dev privacy policy. Learn how your data is collected, used, and protected when you use our website or engage our web development services." />
        <meta property="og:url" content="https://www.saimdev.site/privacy" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
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
            Privacy Policy
          </h1>
          <p className="text-white/50 text-xs font-mono">
            Effective Date: July 25, 2026 · Saim Dev Web Architecture
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-8 text-white/80 text-sm sm:text-base font-light leading-relaxed">
          <section>
            <h2 className="text-white text-xl font-medium mb-3">1. Information We Collect</h2>
            <p>
              When you contact Saim Dev or initiate a web architecture project, we may collect personal details including your name, email address, phone/WhatsApp number, business details, and project specifications.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-medium mb-3">2. How We Use Your Information</h2>
            <p>
              Your information is strictly used to deliver custom website development services, communicate project milestones, provide technical support, and configure hosting and domain services. We never sell or share your information with third parties.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-medium mb-3">3. Data Protection & Security</h2>
            <p>
              We implement industry-standard SSL encryption and secure cloud protocols to protect your business assets and project data. All code repositories and server access details remain strictly confidential.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-medium mb-3">4. Cookies & Analytics</h2>
            <p>
              Our website uses basic performance cookies and privacy-focused analytics (such as Google Analytics) to analyze site traffic and improve user experience. You can disable cookies in your browser settings at any time.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-medium mb-3">5. Your Rights</h2>
            <p>
              You have the right to access, update, or request the complete deletion of your personal data from our records. To exercise your rights, please contact us directly via WhatsApp at +1 (249) 898-4111.
            </p>
          </section>

          <section className="pt-6 border-t border-white/10">
            <h2 className="text-white text-xl font-medium mb-3">6. Contact Us</h2>
            <p>
              For any questions regarding this Privacy Policy, please contact Saim Dev:
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
