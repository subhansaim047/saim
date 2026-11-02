path = "src/components/PricingSection.tsx"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

target = '''        {/* TAKEAWAY & RESTAURANT COMMISSION CALCULATOR */}
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

replacement = '''        {/* TAKEAWAY & RESTAURANT COMMISSION CALCULATOR */}
        <div className="mt-20">
          <CommissionSavingsCalculator />
        </div>'''

if target in content:
    content = content.replace(target, replacement, 1)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print("Cleaned up PricingSection.tsx wrapper")
else:
    print("Target not found in PricingSection.tsx")
