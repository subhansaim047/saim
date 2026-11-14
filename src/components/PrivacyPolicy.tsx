'use client';

import React from 'react';
import Link from 'next/link';
import { Shield } from 'lucide-react';
import { SiteFooter } from '@/components/SiteFooter';
import { RhHeader } from '@/components/rh/RhHeader';
import ownerFacts from '../../content/owner-facts.json';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="rh-page min-h-screen bg-[#0D0D0D] text-white selection:bg-[#BAFF00] selection:text-[#0D0D0D]">
      <RhHeader theme="dark" />

      {/* rh.design/privacy Dark Hero */}
      <section className="bg-[#0D0D0D] text-white pt-16 pb-16 sm:pt-20 sm:pb-20 px-4 sm:px-8 border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-[#BAFF00] bg-white/[0.05] px-3.5 py-1.5 rounded-full border border-white/10 mb-6">
            <Shield className="w-3.5 h-3.5" />
            <span>UK GDPR &amp; PECR Compliant</span>
          </div>
          <p className="text-white/50 text-xs sm:text-sm font-mono uppercase tracking-wider mb-3">
            Effective Date: October 24, 2026 · Last Updated: October 24, 2026
          </p>
          <h1 className="text-4xl sm:text-6xl font-medium tracking-[-0.03em] text-white leading-[1.06]">
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* rh.design/privacy Light Structured Legal Content */}
      <section className="bg-[#F5F5F7] text-[#0D0D0D] py-16 sm:py-24 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-[24px] p-6 sm:p-12 border border-black/[0.08] space-y-10 text-[#0D0D0D]/80 text-sm sm:text-base leading-relaxed shadow-xs">
          <section>
            <h2 className="text-[#0D0D0D] text-xl sm:text-2xl font-medium tracking-[-0.02em] mb-3">1. Data Controller Information</h2>
            <p>
              The data controller responsible for personal data processed through this website is{" "}
              <strong className="text-[#0D0D0D]">{ownerFacts.displayName || "Saim Dev"}</strong> ({ownerFacts.location || "UK & Europe"}).
            </p>
            <p className="mt-2 text-[#0D0D0D]/65 text-xs sm:text-sm">
              For privacy enquiries, contact us via WhatsApp at +92 319 6526604, through Instagram @saim_agency
              {ownerFacts.contactEmail ? `, or by email at ${ownerFacts.contactEmail}` : ""}.
            </p>
          </section>

          <section>
            <h2 className="text-[#0D0D0D] text-xl sm:text-2xl font-medium tracking-[-0.02em] mb-3">2. Data We Collect &amp; How It Is Obtained</h2>
            <p>We process personal data only when strictly necessary:</p>
            <ul className="list-disc list-inside space-y-2 mt-3 text-[#0D0D0D]/75 text-sm">
              <li>
                <strong className="text-[#0D0D0D]">Project Enquiries:</strong> Name, business name, email address, website URL, budget range, and project specifications submitted via our contact forms or brief submission.
              </li>
              <li>
                <strong className="text-[#0D0D0D]">Direct Communications:</strong> Message contents and contact details provided when you communicate directly via WhatsApp (+92 319 6526604) or Instagram (@saim_agency).
              </li>
              <li>
                <strong className="text-[#0D0D0D]">Interactive Tools:</strong> Data entered into our free kitchen tools (such as the Allergen Matrix, Food Cost Calculator, and Recipe Calculator) is stored entirely in your local browser storage (<code className="bg-[#F5F5F7] text-[#0D0D0D] px-1.5 py-0.5 rounded font-mono text-xs">localStorage</code>) and is <strong className="text-[#0D0D0D]">never transmitted to our servers</strong>.
              </li>
              <li>
                <strong className="text-[#0D0D0D]">Technical Access Logs:</strong> IP address, device type, and timestamp metadata automatically recorded by our cloud hosting infrastructure (Vercel) to protect service availability and prevent security attacks.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-[#0D0D0D] text-xl sm:text-2xl font-medium tracking-[-0.02em] mb-3">3. Cookies &amp; Local Browser Storage</h2>
            <p className="text-[#0D0D0D]/75 text-sm">
              We do not use third-party tracking or advertising cookies. Our free client-side kitchen tools and compliance notice use local browser storage strictly to preserve your work and preferences locally on your device:
            </p>
            <ul className="list-disc list-inside space-y-1.5 mt-3 text-[#0D0D0D]/80 text-xs font-mono bg-[#F5F5F7] p-4 rounded-2xl border border-black/[0.06]">
              <li>saim_cookie_consent: Remembers your cookie notice preference so the notice is not repeatedly shown.</li>
              <li>saim_allergen_matrix_v1: Saves dish and allergen data in your browser for the Allergen Matrix Generator.</li>
              <li>saim_food_cost_v1: Saves recipe pricing and margin calculations locally on your device.</li>
              <li>saim_recipe_calc_v1: Saves scaled commercial batch catering measurements locally.</li>
            </ul>
            <p className="mt-3 text-[#0D0D0D]/75 text-sm">
              For our complete technical storage inventory and details on managing browser storage, view our{" "}
              <Link href="/cookie-policy" className="underline font-medium text-[#0D0D0D]">
                Cookie Policy
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="text-[#0D0D0D] text-xl sm:text-2xl font-medium tracking-[-0.02em] mb-3">4. Purposes and Lawful Bases for Processing</h2>
            <div className="overflow-x-auto mt-3 border border-black/10 rounded-2xl">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-black/10 bg-[#F5F5F7] text-[#0D0D0D] font-semibold">
                    <th className="p-3.5">Purpose</th>
                    <th className="p-3.5">Data Categories</th>
                    <th className="p-3.5">UK GDPR Lawful Basis</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/[0.06] text-[#0D0D0D]/75">
                  <tr>
                    <td className="p-3.5 font-medium text-[#0D0D0D]">Responding to client proposals &amp; enquiries</td>
                    <td className="p-3.5">Name, email, project brief, budget</td>
                    <td className="p-3.5">Article 6(1)(b) - Contractual &amp; Pre-contractual steps</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-medium text-[#0D0D0D]">Delivering bespoke website architecture</td>
                    <td className="p-3.5">Client project assets, credentials, code</td>
                    <td className="p-3.5">Article 6(1)(b) - Performance of contract</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-medium text-[#0D0D0D]">Infrastructure security &amp; attack prevention</td>
                    <td className="p-3.5">Hosting logs, IP addresses</td>
                    <td className="p-3.5">Article 6(1)(f) - Legitimate interests</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-[#0D0D0D] text-xl sm:text-2xl font-medium tracking-[-0.02em] mb-3">5. Data Sharing &amp; Processors</h2>
            <p>
              <strong className="text-[#0D0D0D]">We do not sell personal data. We share it only with the service providers listed above.</strong>
            </p>
            <p className="mt-2 text-[#0D0D0D]/75 text-sm">
              We utilise trusted technical infrastructure providers strictly to execute our services:
            </p>
            <ul className="list-disc list-inside space-y-1.5 mt-2 text-[#0D0D0D]/75 text-sm">
              <li><strong className="text-[#0D0D0D]">Hosting &amp; Edge Delivery:</strong> Vercel Inc. (cloud infrastructure and edge deployment).</li>
              <li><strong className="text-[#0D0D0D]">Direct Communications:</strong> Meta Platforms Ireland Ltd / WhatsApp LLC (when you message our WhatsApp channel).</li>
              <li><strong className="text-[#0D0D0D]">Behavioral Analytics:</strong> Microsoft Corporation (Microsoft Clarity, providing aggregate anonymous heatmaps and session recordings with sensitive field masking).</li>
              <li><strong className="text-[#0D0D0D]">Advertising &amp; Analytics:</strong> Google LLC / Google Ireland Ltd (Google AdSense and Google Analytics, operating under Google Consent Mode v2 and IAB TCF frameworks where enabled). Third-party vendors, including Google, use cookies to serve ads based on prior visits to this website. Users may manage preferences via the Cookie Settings footer button or opt out of personalised advertising at <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="underline font-medium text-[#0D0D0D]">Google Ads Settings</a>.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[#0D0D0D] text-xl sm:text-2xl font-medium tracking-[-0.02em] mb-3">6. Data Retention</h2>
            <p className="text-[#0D0D0D]/75 text-sm">
              Prospective client enquiry data is retained for up to 6 months if a project does not proceed. For active clients, commercial project records, contracts, and invoices are retained for 6 years in accordance with UK statutory accounting obligations.
            </p>
          </section>

          <section>
            <h2 className="text-[#0D0D0D] text-xl sm:text-2xl font-medium tracking-[-0.02em] mb-3">7. Your Rights Under UK &amp; EU GDPR</h2>
            <p className="text-[#0D0D0D]/75 text-sm">You have statutory rights regarding your personal data:</p>
            <ul className="list-disc list-inside space-y-1.5 mt-2 text-[#0D0D0D]/75 text-sm">
              <li><strong className="text-[#0D0D0D]">Right of Access:</strong> Request a copy of the data we hold about you.</li>
              <li><strong className="text-[#0D0D0D]">Right to Rectification:</strong> Request correction of inaccurate information.</li>
              <li><strong className="text-[#0D0D0D]">Right to Erasure:</strong> Request deletion of your personal data where no legal retention requirement applies.</li>
              <li><strong className="text-[#0D0D0D]">Right to Restrict or Object:</strong> Object to processing carried out under legitimate interests.</li>
              <li><strong className="text-[#0D0D0D]">Right to Portability:</strong> Request machine-readable transfer of your provided data.</li>
            </ul>
            <p className="mt-3 text-[#0D0D0D]/75 text-sm">
              To exercise any of these rights, contact us directly via WhatsApp (+92 319 6526604) or through our{" "}
              <Link href="/contact" className="underline font-medium text-[#0D0D0D]">
                Contact Page
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="text-[#0D0D0D] text-xl sm:text-2xl font-medium tracking-[-0.02em] mb-3">8. Right to Complain to the Supervisory Authority</h2>
            <p className="text-[#0D0D0D]/75 text-sm">
              If you have unresolved concerns regarding our data processing, you have the right to lodge a complaint with the UK supervisory authority:
            </p>
            <div className="bg-[#F5F5F7] border border-black/10 rounded-2xl p-5 mt-3 text-xs sm:text-sm space-y-1 text-[#0D0D0D]/80">
              <p className="font-semibold text-[#0D0D0D]">Information Commissioner&apos;s Office (ICO)</p>
              <p>Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF</p>
              <p>Website: <a href="https://ico.org.uk" target="_blank" rel="noreferrer" className="underline font-medium text-[#0D0D0D]">ico.org.uk</a> · Telephone: 0303 123 1113</p>
            </div>
          </section>

          <section className="pt-6 border-t border-black/10">
            <h2 className="text-[#0D0D0D] text-xl sm:text-2xl font-medium tracking-[-0.02em] mb-3">9. Contact Us</h2>
            <p className="text-[#0D0D0D]/75 text-sm">
              For any questions regarding this policy or our privacy practices:
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
