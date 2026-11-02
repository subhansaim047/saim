import os, sys

path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\FoodSafetyTemplatesPage.tsx"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

navigator_section = """      {/* ── TOPICAL CATEGORY NAVIGATOR (6 CLUSTERS) ── */}
      <section className="bg-[#F8F9FA] border-b border-[#E5E5EA] px-4 sm:px-8 py-8 no-print">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 font-bold block mb-1">
              Topical Safety Architecture
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#1D1D1F]">
              Browse by Regulatory Food Safety Category
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Navigate structured tool suites and practical operational guides designed for UK food hygiene compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Cluster 1 */}
            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-2xs flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-100 px-2 py-0.5 rounded-md inline-block mb-2">
                  Cluster 1
                </span>
                <h3 className="font-bold text-sm text-gray-900 mb-1.5">Allergens &amp; Natasha&apos;s Law</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                  Regulatory tools for declaring 14 statutory allergens and generating Prepacked for Direct Sale (PPDS) adhesive labels.
                </p>
              </div>
              <div className="space-y-1.5 pt-2 border-t border-gray-100 text-xs">
                <Link href="/food-safety-templates/allergy-matrix" className="text-blue-600 hover:underline font-medium block truncate">
                  &rarr; 14 Allergen Matrix Template
                </Link>
                <Link href="/tools/ppds-label-generator" className="text-blue-600 hover:underline font-medium block truncate">
                  &rarr; PPDS Label Generator
                </Link>
                <Link href="/blog/how-to-create-compliant-14-allergen-matrix-uk-restaurants" className="text-slate-600 hover:text-black font-medium block truncate">
                  &#128214; Guide: Creating a 14-Allergen Matrix
                </Link>
              </div>
            </div>

            {/* Cluster 2 */}
            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-2xs flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded-md inline-block mb-2">
                  Cluster 2
                </span>
                <h3 className="font-bold text-sm text-gray-900 mb-1.5">HACCP &amp; Due Diligence</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                  Systematic hazard analysis templates and Critical Control Point records supporting statutory due diligence defense.
                </p>
              </div>
              <div className="space-y-1.5 pt-2 border-t border-gray-100 text-xs">
                <Link href="/food-safety-templates/haccp-plan-builder" className="text-blue-600 hover:underline font-medium block truncate">
                  &rarr; HACCP Plan Builder
                </Link>
                <Link href="/food-safety-templates/delivery-intake-log" className="text-blue-600 hover:underline font-medium block truncate">
                  &rarr; Delivery Intake Log
                </Link>
                <Link href="/blog/how-to-write-haccp-plan-uk-food-business-step-by-step" className="text-slate-600 hover:text-black font-medium block truncate">
                  &#128214; Guide: Writing a UK HACCP Plan
                </Link>
              </div>
            </div>

            {/* Cluster 3 */}
            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-2xs flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-md inline-block mb-2">
                  Cluster 3
                </span>
                <h3 className="font-bold text-sm text-gray-900 mb-1.5">Temperature &amp; SFBB</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                  Daily fridge, freezer, and cooking temperature logs formatted for FSA Safer Food, Better Business diary packs.
                </p>
              </div>
              <div className="space-y-1.5 pt-2 border-t border-gray-100 text-xs">
                <Link href="/food-safety-templates/fridge-temperature-log" className="text-blue-600 hover:underline font-medium block truncate">
                  &rarr; Fridge Temperature Sheet
                </Link>
                <Link href="/food-safety-templates/freezer-temperature-log" className="text-blue-600 hover:underline font-medium block truncate">
                  &rarr; Freezer Temperature Chart
                </Link>
                <Link href="/blog/commercial-kitchen-food-cooling-temperature-guide" className="text-slate-600 hover:text-black font-medium block truncate">
                  &#128214; Guide: 90-Minute Rapid Food Cooling
                </Link>
              </div>
            </div>

            {/* Cluster 4 */}
            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-2xs flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-md inline-block mb-2">
                  Cluster 4
                </span>
                <h3 className="font-bold text-sm text-gray-900 mb-1.5">Kitchen Cleaning &amp; Hygiene</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                  Daily, weekly, and deep-clean sanitisation schedules to pass local council Environmental Health Officer audits.
                </p>
              </div>
              <div className="space-y-1.5 pt-2 border-t border-gray-100 text-xs">
                <Link href="/food-safety-templates/cleaning-schedule" className="text-blue-600 hover:underline font-medium block truncate">
                  &rarr; Daily Cleaning Schedule
                </Link>
                <Link href="/food-safety-templates/opening-closing-checklist" className="text-blue-600 hover:underline font-medium block truncate">
                  &rarr; Opening &amp; Closing Checklist
                </Link>
                <Link href="/blog/sfbb-daily-kitchen-opening-closing-checklist-guide" className="text-slate-600 hover:text-black font-medium block truncate">
                  &#128214; Guide: SFBB Daily Shift Routines
                </Link>
              </div>
            </div>

            {/* Cluster 5 */}
            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-2xs flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 bg-amber-50 border border-amber-100 px-2 py-0.5 rounded-md inline-block mb-2">
                  Cluster 5
                </span>
                <h3 className="font-bold text-sm text-gray-900 mb-1.5">Food Cost &amp; Recipe Management</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                  Interactive culinary calculators to protect 70%+ gross profit margins and scale commercial batch catering recipes.
                </p>
              </div>
              <div className="space-y-1.5 pt-2 border-t border-gray-100 text-xs">
                <Link href="/food-safety-templates/food-cost-calculator" className="text-blue-600 hover:underline font-medium block truncate">
                  &rarr; Food Cost Percentage Calculator
                </Link>
                <Link href="/food-safety-templates/recipe-calculator" className="text-blue-600 hover:underline font-medium block truncate">
                  &rarr; Recipe Portion Scaler
                </Link>
                <Link href="/blog/mastering-food-cost-percentage-commercial-kitchen-calculator" className="text-slate-600 hover:text-black font-medium block truncate">
                  &#128214; Guide: Mastering Food Cost Margins
                </Link>
              </div>
            </div>

            {/* Cluster 6 */}
            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-2xs flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600 bg-purple-50 border border-purple-100 px-2 py-0.5 rounded-md inline-block mb-2">
                  Cluster 6
                </span>
                <h3 className="font-bold text-sm text-gray-900 mb-1.5">Essential Safety Posters &amp; Guides</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                  Printable kitchen wall standard operating procedures for colour-coded cutting boards, hand hygiene, and food hygiene test prep.
                </p>
              </div>
              <div className="space-y-1.5 pt-2 border-t border-gray-100 text-xs">
                <Link href="/food-safety-templates/chopping-board-guide" className="text-blue-600 hover:underline font-medium block truncate">
                  &rarr; Chopping Board Colour Guide
                </Link>
                <Link href="/food-safety-templates/handwashing-poster" className="text-blue-600 hover:underline font-medium block truncate">
                  &rarr; Hand Washing SOP Poster
                </Link>
                <Link href="/blog/level-2-food-hygiene-practice-test-kitchen-staff-guide" className="text-slate-600 hover:text-black font-medium block truncate">
                  &#128214; Guide: Level 2 Food Hygiene Practice Test
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>"""

marker = "{/* ── MAIN 2-COLUMN HUB LAYOUT"
idx = content.find(marker)
if idx != -1:
    content = content[:idx] + navigator_section + "\n\n      " + content[idx:]
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print("Inserted navigator_section before main 2-column layout")
else:
    print("Could not find marker")
