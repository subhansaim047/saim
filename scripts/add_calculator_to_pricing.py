import re

path = "src/components/PricingSection.tsx"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Add import
if 'import { CommissionSavingsCalculator }' not in content:
    content = content.replace(
        'import { PLANS, type Currency, type Plan } from "../../content/plans";',
        'import { PLANS, type Currency, type Plan } from "../../content/plans";\nimport { CommissionSavingsCalculator } from "./CommissionSavingsCalculator";'
    )
    print("Added CommissionSavingsCalculator import")

# 2. Add calculator block after 3 plan cards grid
target = '''        {/* 3 PLAN CARDS GRID */}
        <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {PLANS.map((p) => (
            <PricingCard key={p.name} plan={p} currency={currency} />
          ))}
        </div>'''

replacement = '''        {/* 3 PLAN CARDS GRID */}
        <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {PLANS.map((p) => (
            <PricingCard key={p.name} plan={p} currency={currency} />
          ))}
        </div>

        {/* TAKEAWAY & RESTAURANT COMMISSION CALCULATOR */}
        <div className="mt-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-mono uppercase text-[#FF4A1C] font-bold tracking-widest block mb-1">
              Food Businesses &amp; Takeaways
            </span>
            <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight">
              Losing 30% to Just Eat or Deliveroo?
            </h3>
            <p className="text-xs sm:text-sm text-white/60 font-light mt-1.5">
              Calculate your exact monthly commission loss and see how quickly a £250 direct ordering website pays for itself.
            </p>
          </div>
          <CommissionSavingsCalculator />
        </div>'''

if target in content and 'TAKEAWAY & RESTAURANT COMMISSION CALCULATOR' not in content:
    content = content.replace(target, replacement, 1)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print("Added calculator section to PricingSection.tsx")
else:
    print("PricingSection already has calculator or target not found")
