'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';
import { SiteFooter } from '@/components/SiteFooter';
import ownerFacts from '../../content/owner-facts.json';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-primary selection:text-black">
      {/* Navigation Header */}
      <nav className="border-b border-white/10 bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
            <Shield className="w-3.5 h-3.5" />
            <span>UK GDPR &amp; PECR Compliant</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16 sm:py-20">
        {/* Header */}
        <div className="mb-12 border-b border-white/10 pb-8">
          <h1 className="text-3xl sm:text-4xl font-light tracking-tight text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-white/60 text-sm">
            Effective Date: October 24, 2026 · Last Updated: October 24, 2026
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-8 text-white/80 text-sm sm:text-base font-light leading-relaxed">
          <section>
            <h2 className="text-white text-xl font-medium mb-3">1. Data Controller Information</h2>
            <p>
              The data controller responsible for personal data processed through this website is{" "}
              <strong>{ownerFacts.displayName || "Saim Dev"}</strong> ({ownerFacts.location || "UK & Europe"}).
            </p>
            <p className="mt-2 text-white/70 text-xs">
              For privacy enquiries, contact us via WhatsApp at +92 319 6526604, through Instagram @saim_agency
              {ownerFacts.contactEmail ? `, or by email at ${ownerFacts.contactEmail}` : ""}.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-medium mb-3">2. Data We Collect &amp; How It Is Obtained</h2>
            <p>We process personal data only when strictly necessary:</p>
            <ul className="list-disc list-inside space-y-2 mt-2 text-white/70 text-sm">
              <li>
                <strong>Project Enquiries:</strong> Name, business name, email address, website URL, budget range, and project specifications submitted via our contact forms or brief submission.
              </li>
              <li>
                <strong>Direct Communications:</strong> Message contents and contact details provided when you communicate directly via WhatsApp (+92 319 6526604) or Instagram (@saim_agency).
              </li>
              <li>
                <strong>Interactive Tools:</strong> Data entered into our free kitchen tools (such as the Allergen Matrix, Food Cost Calculator, and Recipe Calculator) is stored entirely in your local browser storage (<code className="text-primary font-mono text-xs">localStorage</code>) and is <strong>never transmitted to our servers</strong>.
              </li>
              <li>
                <strong>Technical Access Logs:</strong> IP address, device type, and timestamp metadata automatically recorded by our cloud hosting infrastructure (Vercel) to protect service availability and prevent security attacks.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-xl font-medium mb-3">3. Cookies &amp; Local Browser Storage</h2>
            <p className="text-white/70 text-sm">
              We do not use third-party tracking or advertising cookies. Our free client-side kitchen tools and compliance notice use local browser storage strictly to preserve your work and preferences locally on your device:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2 text-white/70 text-xs font-mono">
              <li>saim_cookie_consent: Remembers your cookie notice preference so the notice is not repeatedly shown.</li>
              <li>saim_allergen_matrix_v1: Saves dish and allergen data in your browser for the Allergen Matrix Generator.</li>
              <li>saim_food_cost_v1: Saves recipe pricing and margin calculations locally on your device.</li>
              <li>saim_recipe_calc_v1: Saves scaled commercial batch catering measurements locally.</li>
            </ul>
            <p className="mt-2 text-white/70 text-sm">
              For our complete technical storage inventory and details on managing browser storage, view our{" "}
              <Link href="/cookie-policy" className="underline text-primary">
                Cookie Policy
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-medium mb-3">4. Purposes and Lawful Bases for Processing</h2>
            <div className="overflow-x-auto mt-3 border border-white/10 rounded-xl">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5 text-white">
                    <th className="p-3">Purpose</th>
                    <th className="p-3">Data Categories</th>
                    <th className="p-3">UK GDPR Lawful Basis</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-white/70">
                  <tr>
                    <td className="p-3 font-medium text-white">Responding to client proposals &amp; enquiries</td>
                    <td className="p-3">Name, email, project brief, budget</td>
                    <td className="p-3">Article 6(1)(b) - Contractual &amp; Pre-contractual steps</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-white">Delivering bespoke website architecture</td>
                    <td className="p-3">Client project assets, credentials, code</td>
                    <td className="p-3">Article 6(1)(b) - Performance of contract</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-white">Infrastructure security &amp; attack prevention</td>
                    <td className="p-3">Hosting logs, IP addresses</td>
                    <td className="p-3">Article 6(1)(f) - Legitimate interests</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-white text-xl font-medium mb-3">5. Data Sharing &amp; Processors</h2>
            <p>
              <strong>We do not sell personal data. We share it only with the service providers listed above.</strong>
            </p>
            <p className="mt-2 text-white/70 text-sm">
              We utilise trusted technical infrastructure providers strictly to execute our services:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2 text-white/70 text-sm">
              <li><strong>Hosting &amp; Edge Delivery:</strong> Vercel Inc. (cloud infrastructure and edge deployment).</li>
              <li><strong>Direct Communications:</strong> Meta Platforms Ireland Ltd / WhatsApp LLC (when you message our WhatsApp channel).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white text-xl font-medium mb-3">6. Data Retention</h2>
            <p className="text-white/70 text-sm">
              Prospective client enquiry data is retained for up to 6 months if a project does not proceed. For active clients, commercial project records, contracts, and invoices are retained for 6 years in accordance with UK statutory accounting obligations.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-medium mb-3">7. Your Rights Under UK &amp; EU GDPR</h2>
            <p className="text-white/70 text-sm">You have statutory rights regarding your personal data:</p>
            <ul className="list-disc list-inside space-y-1.5 mt-2 text-white/70 text-sm">
              <li><strong>Right of Access:</strong> Request a copy of the data we hold about you.</li>
              <li><strong>Right to Rectification:</strong> Request correction of inaccurate information.</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your personal data where no legal retention requirement applies.</li>
              <li><strong>Right to Restrict or Object:</strong> Object to processing carried out under legitimate interests.</li>
              <li><strong>Right to Portability:</strong> Request machine-readable transfer of your provided data.</li>
            </ul>
            <p className="mt-3 text-white/70 text-sm">
              To exercise any of these rights, contact us directly via WhatsApp (+92 319 6526604) or through our{" "}
              <Link href="/contact" className="underline text-primary">
                Contact Page
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-medium mb-3">8. Right to Complain to the Supervisory Authority</h2>
            <p className="text-white/70 text-sm">
              If you have unresolved concerns regarding our data processing, you have the right to lodge a complaint with the UK supervisory authority:
            </p>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 mt-3 text-xs space-y-1 text-white/80">
              <p className="font-semibold text-white">Information Commissioner&apos;s Office (ICO)</p>
              <p>Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF</p>
              <p>Website: <a href="https://ico.org.uk" target="_blank" rel="noreferrer" className="underline text-primary">ico.org.uk</a> · Telephone: 0303 123 1113</p>
            </div>
          </section>

          <section className="pt-6 border-t border-white/10">
            <h2 className="text-white text-xl font-medium mb-3">9. Contact Us</h2>
            <p className="text-white/70 text-sm">
              For any questions regarding this policy or our privacy practices:
            </p>
            <p className="mt-2 text-primary font-mono text-xs sm:text-sm">
              WhatsApp: +92 319 6526604 · Instagram: @saim_agency · Web: saimdev.site
            </p>
          </section>
        </div>
      </div>
      <SiteFooter theme="dark" />
    </div>
  );
};
