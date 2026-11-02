import re

path = "app/services/takeaway-web-design/page.tsx"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Add CommissionSavingsCalculator import if not present
if 'import { CommissionSavingsCalculator }' not in content:
    content = content.replace(
        'import { SiteFooter } from "@/components/SiteFooter";',
        'import { SiteFooter } from "@/components/SiteFooter";\nimport { CommissionSavingsCalculator } from "@/components/CommissionSavingsCalculator";'
    )
    print("Added CommissionSavingsCalculator import")

# 2. Replace static math section with <CommissionSavingsCalculator /> and add Cuisines section + Kitchen Tools Suite
static_math_start = '{/* ── THE MATH: JUST EAT VS DIRECT SYSTEM ── */}'
features_start = '{/* ── CORE SYSTEM FEATURES ── */}'

new_block = '''{/* ── THE MATH: JUST EAT VS DIRECT SYSTEM ── */}
        <CommissionSavingsCalculator />

        {/* ── CUISINE SPECIALISMS ACROSS THE UK ── */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase text-amber-400 font-bold tracking-widest">
              Specialized UK Menu Engineering
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Tailored For Every UK Takeaway Cuisine
            </h2>
            <p className="text-xs sm:text-sm text-white/70 font-light">
              Each food category has unique ordering workflows, modifier choices, and allergen profiles. We build custom menu logic tailored to your food.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2.5">
              <div className="text-amber-400 font-mono font-bold text-sm">01 · Fish &amp; Chip Shops</div>
              <h3 className="font-semibold text-white text-base">Chippy Orders &amp; Batter Profiles</h3>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                Haddock, cod, mushy peas, and curry sauce options with salt &amp; vinegar toggles and clear gluten labelling for designated fryer days.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2.5">
              <div className="text-amber-400 font-mono font-bold text-sm">02 · Indian &amp; Tandoori Houses</div>
              <h3 className="font-semibold text-white text-base">Curry Spice Tiers &amp; Sundries</h3>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                Madras, Korma, and Biryani spice customisation, rice selections, tandoori marinades, and explicit dairy/nut highlighting on every dish.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2.5">
              <div className="text-amber-400 font-mono font-bold text-sm">03 · Chinese &amp; Noodle Bars</div>
              <h3 className="font-semibold text-white text-base">Combos, Chow Mein &amp; Sauces</h3>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                Set banquet menus, crispy shredded chilli beef, chow mein choices, sweet &amp; sour modifiers, and soy/sesame/mollusc allergen indicators.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2.5">
              <div className="text-amber-400 font-mono font-bold text-sm">04 · Pizza &amp; Kebab Houses</div>
              <h3 className="font-semibold text-white text-base">Crust Modifiers &amp; Kebab Trays</h3>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                Thin crust, deep pan, stuffed crust, create-your-own toppings, doner/shish kebab salad &amp; chilli/garlic sauce selectors with zero friction.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2.5">
              <div className="text-amber-400 font-mono font-bold text-sm">05 · Burger &amp; Peri Peri Grills</div>
              <h3 className="font-semibold text-white text-base">Smash Patties &amp; Heat Levels</h3>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                Double smash burgers, brioche buns, lemon &amp; herb to extra hot bastes, loaded skin-on fries, and drink meal deals with real-time totals.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2.5">
              <div className="text-amber-400 font-mono font-bold text-sm">06 · Dessert &amp; Waffle Lounges</div>
              <h3 className="font-semibold text-white text-base">Gelato, Crepes &amp; Shakes</h3>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                Belgian waffles, cookie dough, gelato scoops, milkshakes, and precise nut/dairy/egg cross-contact alerts for peace of mind.
              </p>
            </div>
          </div>
        </div>

        {/* ── FREE KITCHEN TOOLS & DUE DILIGENCE SUITE ── */}
        <div className="p-8 sm:p-10 rounded-3xl bg-neutral-900/50 border border-white/10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase text-amber-400 font-bold tracking-widest block mb-1">
                Zero-Cost Operational Utilities
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Free Kitchen Tools &amp; Compliance Hub
              </h2>
              <p className="text-xs text-white/70 mt-1 font-light">
                Use our suite of free catering calculators and compliance tools to streamline kitchen operations.
              </p>
            </div>
            <Link
              href="/tools"
              className="self-start sm:self-auto text-xs font-mono text-amber-400 hover:text-amber-300 underline underline-offset-4"
            >
              Browse All Tools &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/tools/allergen-matrix-generator"
              className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/40 transition-all group"
            >
              <div className="text-xs font-mono text-orange-400 font-bold mb-1">Interactive Tool</div>
              <div className="text-sm font-semibold text-white group-hover:text-amber-300">14 Allergen Matrix</div>
              <div className="text-[11px] text-white/60 mt-1">Generate dish allergen charts with CSV and PDF export.</div>
            </Link>

            <Link
              href="/tools/ppds-label-generator"
              className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/40 transition-all group"
            >
              <div className="text-xs font-mono text-amber-400 font-bold mb-1">Interactive Tool</div>
              <div className="text-sm font-semibold text-white group-hover:text-amber-300">PPDS Label Maker</div>
              <div className="text-[11px] text-white/60 mt-1">Natasha&apos;s Law compliant packaging labels with auto-bolding.</div>
            </Link>

            <Link
              href="/tools/food-cost-calculator"
              className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/40 transition-all group"
            >
              <div className="text-xs font-mono text-emerald-400 font-bold mb-1">Interactive Tool</div>
              <div className="text-sm font-semibold text-white group-hover:text-amber-300">Food Cost Calculator</div>
              <div className="text-[11px] text-white/60 mt-1">Calculate gross margins, food cost % and target prices.</div>
            </Link>

            <Link
              href="/tools/recipe-batch-calculator"
              className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/40 transition-all group"
            >
              <div className="text-xs font-mono text-blue-400 font-bold mb-1">Interactive Tool</div>
              <div className="text-sm font-semibold text-white group-hover:text-amber-300">Recipe Batch Scaling</div>
              <div className="text-[11px] text-white/60 mt-1">Scale commercial recipes from 10 to 500 portions instantly.</div>
            </Link>
          </div>
        </div>

        '''

if static_math_start in content and features_start in content:
    idx1 = content.find(static_math_start)
    idx2 = content.find(features_start)
    content = content[:idx1] + new_block + content[idx2:]
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print("Replaced static math section with CommissionSavingsCalculator & added Cuisines + Kitchen Tools!")
else:
    print("Could not find markers for replacement")
