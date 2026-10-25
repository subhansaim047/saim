# -*- coding: utf-8 -*-
import re

file_path = "src/components/TemplateDetailPage.tsx"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update the Trust bar to include author byline
old_bar = '''        {/* Editorial Trust & Verification Meta Bar */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-xs flex flex-wrap items-center justify-between gap-3 text-xs no-print">
          <div className="flex flex-wrap items-center gap-3 text-gray-600">
            <div className="inline-flex items-center gap-1.5 font-medium">
              <Clock className="w-3.5 h-3.5 text-amber-700" />
              <span>Last Updated: <strong className="text-gray-900 font-semibold">October 2026</strong></span>
            </div>
            <span className="text-gray-300 hidden sm:inline" aria-hidden="true">•</span>
            <div className="inline-flex items-center gap-1.5 font-medium">
              <Calendar className="w-3.5 h-3.5 text-blue-700" />
              <span>Review Cycle: <strong className="text-gray-900 font-semibold">Monthly Due Diligence Review</strong></span>
            </div>
          </div>
          <div className="inline-flex items-center gap-1.5 text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-3 py-1 rounded-full text-[11px] font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Aligned with UK Food Standards Agency (FSA) Guidance</span>
          </div>
        </div>'''

new_bar = '''        {/* Editorial Trust & Verification Meta Bar */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-xs flex flex-wrap items-center justify-between gap-3 text-xs no-print">
          <div className="flex flex-wrap items-center gap-3 text-gray-600">
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
          </div>
          <div className="inline-flex items-center gap-1.5 text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-3 py-1 rounded-full text-[11px] font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Aligned with UK Food Standards Agency (FSA) Guidance</span>
          </div>
        </div>'''

if old_bar in content:
    content = content.replace(old_bar, new_bar, 1)
    print("Trust bar updated.")

# 2. Insert Direct Answer Box right above or below Hero Intro
hero_end = '            <div className="pt-2 flex flex-wrap items-center gap-3">\n              <button\n                onClick={() => window.print()}\n                className="bg-gray-900 hover:bg-black text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl flex items-center gap-2 transition-all shadow cursor-pointer hover:scale-[1.01]"\n              >\n                <Printer className="w-4 h-4 text-amber-400" />\n                <span>Print / Save as PDF</span>\n              </button>\n            </div>\n          </div>\n        </div>'

direct_answer_box = '''            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => window.print()}
                className="bg-gray-900 hover:bg-black text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl flex items-center gap-2 transition-all shadow cursor-pointer hover:scale-[1.01]"
              >
                <Printer className="w-4 h-4 text-amber-400" />
                <span>Print / Save as PDF</span>
              </button>
            </div>
          </div>
        </div>

        {/* 40-60 Word Direct Answer Box (GEO / LLMO Grounding) */}
        {deepContent?.directAnswer && (
          <div className="bg-amber-50/70 border border-amber-200/90 rounded-2xl p-5 sm:p-6 shadow-2xs space-y-2 no-print">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-900 uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-amber-700" />
              <span>Direct Operational Answer &amp; UK Legal Context</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-800 leading-relaxed font-medium">
              {deepContent.directAnswer}
            </p>
          </div>
        )}'''

if hero_end in content and 'directAnswer &&' not in content:
    content = content.replace(hero_end, direct_answer_box, 1)
    print("Direct answer box added.")

# 3. Update activeFAQs to use deepContent.faqs if available
faq_logic_target = 'const faqs = ['
faq_logic_replacement = '''const activeFaqs = deepContent?.faqs || [
    {
      q: `Is the ${template.title} suitable for UK Environmental Health Officer (EHO) inspections?`,
      a: `Yes. This template and digital logging workflow are developed in line with UK Food Standards Agency (FSA) Safer Food, Better Business (SFBB) standards and HACCP Article 5 of Regulation (EC) No 852/2004. When maintained with genuine operating data and supervisor sign-offs, it fulfills statutory record-keeping and due diligence requirements under the Food Safety Act 1990.`
    },
    {
      q: "How frequently should kitchen staff complete and sign off this record?",
      a: "Critical checks (such as fridge, chiller, and hot-holding temperatures) must be completed at least twice daily—once during morning prep before opening, and once during evening service. Daily opening, closing, and hygiene checklists must be completed throughout each shift, with a designated supervisor or Head Chef signing off the log before premises shutdown."
    },
    {
      q: "What is the recommended corrective action if a critical limit is breached?",
      a: "Immediate containment is mandatory. For cold storage exceeding 8°C, probe the internal core temperature: if food has remained between 8°C and 63°C for under 4 hours, rapidly chill or cook it immediately; otherwise, safely discard it. For hot holding dropping below 63°C, reheat above 75°C (allowed once only) or serve within 2 hours, or condemn. Always record the issue, affected batch, and corrective action taken directly on the log."
    },
    {
      q: "How long must commercial kitchens retain completed safety records?",
      a: "Under UK due diligence legal defense (Section 21 of the Food Safety Act 1990), completed temperature sheets, cleaning logs, and monitoring records should be archived for a minimum of 6 to 12 months, or at least 3 months after the shelf-life of products served. Having organized monthly binders or digital PDF exports ready is vital for unannounced council audits."
    },
    {
      q: "Can I customize, edit, and print this sheet without watermarks?",
      a: "Yes. You can enter your establishment name, manager sign-off, and inspection date directly into the input fields above. Then click 'Print / Save as PDF' to generate an optimized, clean A4 layout. All web buttons, navigation links, and screen-only elements are automatically excluded from the printed output."
    }
  ];
  const faqs = activeFaqs;'''

if faq_logic_target in content and 'activeFaqs' not in content:
    content = content.replace(faq_logic_target, faq_logic_replacement, 1)
    print("FAQ logic updated to use deepContent.")

# 4. Add Related Blog Card
related_section_target = '{/* Related Templates */}'
related_section_with_blog = '''{/* Related Compliance Blog Guide */}
        {deepContent?.relatedBlog && (
          <div className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-md no-print">
            <div className="space-y-1 max-w-xl">
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300 font-bold block">
                Recommended UK Hospitality Inspection Guide
              </span>
              <h4 className="text-base sm:text-lg font-bold">
                {deepContent.relatedBlog.title}
              </h4>
              <p className="text-xs text-blue-200 leading-relaxed">
                Read our in-depth guidance on UK Food Standards Agency inspection procedures, staff training, and compliance routines.
              </p>
            </div>
            <Link
              href={`/blog/${deepContent.relatedBlog.slug}`}
              className="bg-white text-gray-950 hover:bg-gray-100 font-bold text-xs px-5 py-2.5 rounded-full inline-flex items-center gap-1.5 transition-all shadow shrink-0"
            >
              <span>Read Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}

        {/* Related Templates */}'''

if related_section_target in content and 'Related Compliance Blog Guide' not in content:
    content = content.replace(related_section_target, related_section_with_blog, 1)
    print("Related blog card added.")

# 5. Add How-To Steps if deepContent.howTo is present
sop_routine_old = '''          {/* Step-by-Step SOP */}
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
                  If limits deviate (e.g. fridge >8°C), immediately quarantine, re-chill, reheat >=75°C, or discard, and write down the action.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-2xs space-y-2">
                <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-900 font-bold text-xs flex items-center justify-center font-mono">
                  04
                </div>
                <h4 className="text-xs font-bold text-gray-900">Manager Sign-Off</h4>
                <p className="text-[11px] text-gray-600 leading-relaxed">
                  Head Chef or supervisor reviews the day's record, signs the sign-off box, and files it in the HACCP due diligence binder.
                </p>
              </div>
            </div>
          </div>'''

sop_routine_new = '''          {/* Step-by-Step SOP */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Step-by-Step Operational Routine</span>
            </h3>

            {deepContent?.howTo && deepContent.howTo.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {deepContent.howTo.map((step, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white border border-gray-200 shadow-2xs space-y-2">
                    <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-900 font-bold text-xs flex items-center justify-center font-mono">
                      0{idx + 1}
                    </div>
                    <p className="text-xs text-gray-700 leading-relaxed font-medium">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
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
                    If limits deviate (e.g. fridge >8°C), immediately quarantine, re-chill, reheat >=75°C, or discard, and write down the action.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-2xs space-y-2">
                  <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-900 font-bold text-xs flex items-center justify-center font-mono">
                    04
                  </div>
                  <h4 className="text-xs font-bold text-gray-900">Manager Sign-Off</h4>
                  <p className="text-[11px] text-gray-600 leading-relaxed">
                    Head Chef or supervisor reviews the day's record, signs the sign-off box, and files it in the HACCP due diligence binder.
                  </p>
                </div>
              </div>
            )}
          </div>'''

if sop_routine_old in content:
    content = content.replace(sop_routine_old, sop_routine_new, 1)
    print("SOP routine updated to use deepContent.howTo.")

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("TemplateDetailPage.tsx fully enhanced!")
