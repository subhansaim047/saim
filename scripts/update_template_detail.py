import re

with open('src/components/TemplateDetailPage.tsx', 'r', encoding='utf-8') as f:
    c = f.read()

# 1. Update Byline & Trust Bar
old_trust_bar = '''          <div className="flex flex-wrap items-center gap-3 text-gray-600">
            <div className="inline-flex items-center gap-1.5 font-medium">
              <FileText className="w-3.5 h-3.5 text-gray-700" />
              <span>Byline: <strong className="text-gray-900 font-semibold">Saim Dev Kitchen Compliance Team</strong></span>
            </div>
            <span className="text-gray-300 hidden sm:inline" aria-hidden="true">•</span>
            <div className="inline-flex items-center gap-1.5 font-medium">
              <Clock className="w-3.5 h-3.5 text-amber-700" />
              <span>Last Updated: <strong className="text-gray-900 font-semibold">October 2026</strong></span>
            </div>
            <span className="text-gray-300 hidden sm:inline" aria-hidden="true">•</span>
            <div className="inline-flex items-center gap-1.5 font-medium">
              <Calendar className="w-3.5 h-3.5 text-blue-700" />
              <span>Review: <strong className="text-gray-900 font-semibold">Monthly Due Diligence Audit</strong></span>
            </div>
          </div>'''

new_trust_bar = '''          <div className="flex flex-wrap items-center gap-3 text-gray-600">
            <div className="inline-flex items-center gap-1.5 font-medium">
              <FileText className="w-3.5 h-3.5 text-gray-700" />
              <span>Byline: <strong className="text-gray-900 font-semibold">Saim Dev</strong></span>
            </div>
            <span className="text-gray-300 hidden sm:inline" aria-hidden="true">•</span>
            <div className="inline-flex items-center gap-1.5 font-medium">
              <Clock className="w-3.5 h-3.5 text-amber-700" />
              <span>Last Updated: <strong className="text-gray-900 font-semibold">October 2026</strong></span>
            </div>
          </div>'''

c = c.replace(old_trust_bar, new_trust_bar)

# 2. Update EHO Audit Expectations & Pitfalls section
old_eho_section = '''            <div className="bg-gray-50/80 rounded-2xl p-5 border border-gray-200/80 space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-gray-900">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <h3>EHO Audit Expectations &amp; Common Pitfalls</h3>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                During an unannounced inspection, Environmental Health Officers verify whether records represent real-time measurements rather than retrospective guessing.
              </p>
              <ul className="text-xs text-gray-600 space-y-1.5 list-disc list-inside">
                <li><strong>Ink uniformity check:</strong> EHOs verify that different pen strokes, handwriting styles, and timestamps appear across daily logs.</li>
                <li><strong>Realistic variations:</strong> Thermometers naturally fluctuate between 1.5°C and 4.5°C during active kitchen shifts; identical numbers trigger scrutiny.</li>
                <li><strong>Calibration records:</strong> Probes must be calibrated monthly in crushed ice (0°C ±1°C) and boiling water (100°C ±1°C).</li>
              </ul>
            </div>'''

new_eho_section = '''            <div className="bg-gray-50/80 rounded-2xl p-5 border border-gray-200/80 space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-gray-900">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <h3>Official FSA Record-Keeping Guidance &amp; Due Diligence</h3>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Under UK Food Standards Agency (FSA) <em>Safer Food, Better Business (SFBB)</em> standards and Article 5 of Regulation (EC) No 852/2004, food business operators are required to maintain contemporaneous, accurate operational records.
              </p>
              <ul className="text-xs text-gray-600 space-y-1.5 list-disc list-inside">
                <li><strong>Contemporaneous logging:</strong> Kitchen logs must reflect actual checks performed during opening, active service, and closing rather than retrospective estimates.</li>
                <li><strong>Corrective action logs:</strong> Whenever a critical limit is breached, document the specific corrective measure taken (e.g. food discarded, chilled, or reheated) with staff initials.</li>
                <li><strong>Statutory due diligence defense:</strong> Retaining completed daily sheets for a minimum of 6 to 12 months supports the statutory defense under Section 21 of the Food Safety Act 1990. Official guidance is available at <a href="https://www.food.gov.uk" target="_blank" rel="noopener noreferrer" className="underline font-semibold text-emerald-700 hover:text-black">food.gov.uk</a>.</li>
              </ul>
            </div>'''

c = c.replace(old_eho_section, new_eho_section)

# 3. Dynamic Step-by-Step SOP from deepContent.howTo
old_sop = '''          {/* Step-by-Step SOP */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Step-by-Step Operational Routine</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-2xs space-y-2">
                <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-900 font-bold text-xs flex items-center justify-center font-mono">
                  01
                </div>
                <h4 className="text-xs font-bold text-gray-900">Pre-Shift Calibration</h4>
                <p className="text-[11px] text-gray-600 leading-relaxed">
                  Sanitize digital probe needles using antibacterial probe wipes before and after every reading. Verify display readout.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-2xs space-y-2">
                <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-900 font-bold text-xs flex items-center justify-center font-mono">
                  02
                </div>
                <h4 className="text-xs font-bold text-gray-900">Live Shift Logging</h4>
                <p className="text-[11px] text-gray-600 leading-relaxed">
                  Take actual core temperatures and complete checklist items during prep and service. Record exact time and staff initials.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-2xs space-y-2">
                <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-900 font-bold text-xs flex items-center justify-center font-mono">
                  03
                </div>
                <h4 className="text-xs font-bold text-gray-900">Corrective Actions</h4>
                <p className="text-[11px] text-gray-600 leading-relaxed">
                  If limits deviate (e.g. fridge &gt;8°C), immediately quarantine, re-chill, reheat &ge;75°C, or discard, and write down the action.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-2xs space-y-2">
                <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-900 font-bold text-xs flex items-center justify-center font-mono">
                  04
                </div>
                <h4 className="text-xs font-bold text-gray-900">Manager Sign-Off</h4>
                <p className="text-[11px] text-gray-600 leading-relaxed">
                  Head Chef or supervisor reviews the day\'s record, signs the sign-off box, and files it in the HACCP due diligence binder.
                </p>
              </div>
            </div>
          </div>'''

new_sop = '''          {/* Step-by-Step SOP */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Step-by-Step Operational Routine</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {(deepContent?.howTo || []).map((step, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white border border-gray-200 shadow-2xs space-y-2">
                  <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-900 font-bold text-xs flex items-center justify-center font-mono">
                    0{idx + 1}
                  </div>
                  <h4 className="text-xs font-bold text-gray-900">Operational Step {idx + 1}</h4>
                  <p className="text-[11px] text-gray-600 leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>'''

c = c.replace(old_sop, new_sop)

# 4. Server-rendered FAQ answers
old_faq_render = '''                  {isOpen && (
                    <div className="px-5 pb-4 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3 bg-gray-50/50">
                      {faq.a}
                    </div>
                  )}'''

new_faq_render = '''                  <div
                    className={`px-5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/50 ${
                      isOpen ? "block py-3.5" : "hidden print:block"
                    }`}
                  >
                    {faq.a}
                  </div>'''

c = c.replace(old_faq_render, new_faq_render)

with open('src/components/TemplateDetailPage.tsx', 'w', encoding='utf-8') as f:
    f.write(c)

print("Updated TemplateDetailPage.tsx successfully")
