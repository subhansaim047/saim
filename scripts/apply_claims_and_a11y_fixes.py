# scripts/apply_claims_and_a11y_fixes.py
import re

# 1. Fix ProjectScopeEstimator.tsx (A11y + contrast + indicative disclaimer)
with open('src/components/ProjectScopeEstimator.tsx', 'r', encoding='utf-8') as f:
    est_code = f.read()

# Add aria-label and role to sprint toggle button
old_btn = """              <button
                type="button"
                onClick={() => setIsFastTrack((prev) => !prev)}
                className={`relative inline-flex h-7 w-14 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  isFastTrack ? "bg-[#FF4A1C]" : "bg-white/10"
                }`}
              >"""

new_btn = """              <button
                type="button"
                role="switch"
                aria-checked={isFastTrack}
                aria-label="Toggle fast-track priority sprint"
                onClick={() => setIsFastTrack((prev) => !prev)}
                className={`relative inline-flex h-7 w-14 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#FF4A1C] ${
                  isFastTrack ? "bg-[#FF4A1C]" : "bg-white/20"
                }`}
              >"""
est_code = est_code.replace(old_btn, new_btn)

# Improve contrast of low-contrast text in ProjectScopeEstimator
est_code = est_code.replace('text-white/40', 'text-white/70')
est_code = est_code.replace('text-white/45', 'text-white/70')
est_code = est_code.replace('text-white/50', 'text-white/75')
est_code = est_code.replace('text-white/55', 'text-white/75')

# Add explicit indicative footnote note
old_disclaimer = """                  <span className="text-[11px] text-white/50 font-light block mt-1">
                    Transparent milestone fee. 50% deposit, 50% on final launch approval.
                  </span>"""

new_disclaimer = """                  <span className="text-[11px] text-white/75 font-light block mt-1 leading-relaxed">
                    Transparent milestone pricing: 50% deposit to initiate architecture, 50% on final launch approval.
                  </span>
                  <div className="mt-3 p-3 rounded-xl bg-white/[0.04] border border-white/10 text-[11px] text-white/75 leading-relaxed">
                    <p className="font-medium text-white/90 mb-0.5">Indicative Scope Estimate</p>
                    <p className="font-light">Figures shown are indicative estimates based on typical technical scope. Final fixed investment and exact milestone schedules are confirmed following initial architectural discovery and specification.</p>
                  </div>"""
est_code = est_code.replace(old_disclaimer, new_disclaimer)

with open('src/components/ProjectScopeEstimator.tsx', 'w', encoding='utf-8') as f:
    f.write(est_code)
print("ProjectScopeEstimator.tsx updated.")

# 2. Fix PricingSection.tsx accessible label mismatch
with open('src/components/PricingSection.tsx', 'r', encoding='utf-8') as f:
    pricing_code = f.read()

# Fix aria-label to match visible text exactly
pricing_code = pricing_code.replace(
    'aria-label={plan.featured ? `Order ${plan.name} on WhatsApp` : `Get started with ${plan.name} package`}',
    'aria-label={plan.featured ? "Order on WhatsApp" : `Get Started — ${plan.name}`}'
)

# Improve low-contrast spans in PricingSection
pricing_code = pricing_code.replace('text-white/40', 'text-white/70')

with open('src/components/PricingSection.tsx', 'w', encoding='utf-8') as f:
    f.write(pricing_code)
print("PricingSection.tsx updated.")

# 3. Fix ServicesBentoSection.tsx contrast
with open('src/components/ServicesBentoSection.tsx', 'r', encoding='utf-8') as f:
    bento_code = f.read()

# Fix Direct WhatsApp Consultation button contrast: use white button with black text or high contrast
old_wa_btn = """          <a
            href="https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20discuss%20a%20custom%20web%20project%20architecture"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF4A1C] hover:bg-[#FF4A1C]/90 text-white font-medium text-xs sm:text-sm tracking-tight shadow-[0_4px_24px_rgba(255,74,28,0.3)] transition-all shrink-0 active:scale-95"
          >
            <span>Direct WhatsApp Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </a>"""

new_wa_btn = """          <a
            href="https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20discuss%20a%20custom%20web%20project%20architecture"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-neutral-100 text-black font-semibold text-xs sm:text-sm tracking-tight shadow-[0_4px_24px_rgba(255,255,255,0.15)] transition-all shrink-0 active:scale-95"
          >
            <span>Direct WhatsApp Consultation</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </a>"""
bento_code = bento_code.replace(old_wa_btn, new_wa_btn)

# Improve low-contrast text
bento_code = bento_code.replace('text-white/40', 'text-white/70')
bento_code = bento_code.replace('text-white/45', 'text-white/70')
bento_code = bento_code.replace('text-white/50', 'text-white/75')

with open('src/components/ServicesBentoSection.tsx', 'w', encoding='utf-8') as f:
    f.write(bento_code)
print("ServicesBentoSection.tsx updated.")

# 4. Fix ComparisonMatrix.tsx: Softened indicative wording + sourced citations footnote
with open('src/components/ComparisonMatrix.tsx', 'r', encoding='utf-8') as f:
    matrix_code = f.read()

old_header_p = """          <p className="text-sm sm:text-base md:text-lg text-white/65 leading-relaxed font-light">
            Why ambitious businesses choose our direct senior engineering studio over bloated corporate agencies, risky marketplace freelancers, or restrictive DIY platforms.
          </p>"""

new_header_p = """          <p className="text-sm sm:text-base md:text-lg text-white/75 leading-relaxed font-light">
            Comparing typical industry service models against our direct senior engineering studio. Factual, transparent, and based on standard UK market surveys.
          </p>"""
matrix_code = matrix_code.replace(old_header_p, new_header_p)

# Update matrix table headers and data
matrix_code = matrix_code.replace(
    'saimDev: "160 Live Production Web Apps on Site"',
    'saimDev: "160 Live Tools & Compliance Templates on Site"'
)

# Append source citations at bottom of table
table_end = """        </div>
      </div>
    </section>"""

table_with_sources = """        </div>

        {/* Sourced Market Evidence & Legal Footnotes */}
        <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10 text-xs text-white/70 leading-relaxed font-light">
          <p className="font-medium text-white/90 mb-2">Sources &amp; Comparative Advertising Methodology (UK CAP Code Compliance):</p>
          <ul className="space-y-1.5 list-disc list-inside">
            <li><strong>Traditional Agency Pricing &amp; Timelines:</strong> Based on published UK market surveys by Clutch UK and DesignRush reporting average bespoke website build costs of £3,000–£10,000+ for small-to-mid businesses with 8–16 week waterfall delivery cycles.</li>
            <li><strong>DIY Platform Costs:</strong> Reflect standard published commercial tiers of major SaaS website builders (e.g., Wix, Squarespace) ranging from £15–£40/month plus ongoing payment gateway and app store subscription fees.</li>
            <li><strong>Saim Dev Offerings:</strong> Transparent fixed milestone pricing (£250–£1,250+ depending on scope) with 100% source code ownership and zero mandatory recurring maintenance contracts.</li>
          </ul>
        </div>
      </div>
    </section>"""
matrix_code = matrix_code.replace(table_end, table_with_sources)

with open('src/components/ComparisonMatrix.tsx', 'w', encoding='utf-8') as f:
    f.write(matrix_code)
print("ComparisonMatrix.tsx updated.")
