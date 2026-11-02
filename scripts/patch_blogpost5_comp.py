path = 'src/components/blog/BlogPostFoodCost.tsx'
with open(path, 'r', encoding='utf-8') as f:
    c = f.read()

# 1. Update H1
c = c.replace(
    '<h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.12]">\n            How to Calculate Food Cost Percentage &amp; Protect 70%+ Gross Margins in Your Commercial Kitchen\n          </h1>',
    '<h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.12]">\n            How to Calculate Food Cost Percentage in a Commercial Kitchen\n          </h1>'
)

# 2. Direct answer intro + author byline + key takeaways
old_header_end = '''          <p className="text-base sm:text-xl text-white/70 leading-relaxed max-w-3xl">
          Learn how to calculate your true food cost percentage and protect healthy 70%+ gross profit margins. A practical guide to mastering recipe unit economics, factoring in trim shrinkage, and pricing your takeaway menu for long-term profitability.
        </p>

          <div className="mt-8 flex items-center gap-4 pt-6 border-t border-white/10">
            <img src="/saim-dev-logo.jpg" alt="Saim Dev - Full Stack Web Developer & Restaurant Tech Specialist" width={48} height={48} loading="lazy" decoding="async" className="w-12 h-12 rounded-full border border-primary/30 object-cover" />
            <div>
              <div className="text-sm font-bold text-white">Saim Dev Hospitality Systems</div>
              <div className="text-xs text-white/50">Lead Commercial Kitchen Systems &amp; Web Architect</div>
            </div>
          </div>
        </header>'''

new_header_end = '''          <div className="p-4 rounded-xl border border-primary/20 bg-primary/5 text-white/90 text-sm sm:text-base leading-relaxed mb-6">
            <strong>Direct Answer:</strong> To calculate food cost percentage for a commercial kitchen dish, divide the total cost of ingredients by the net selling price (excluding VAT) and multiply by 100. Most successful UK restaurants aim for a food cost between 28% and 32%, ensuring a 68% to 72% gross profit margin to absorb labour, rent, and third-party delivery commissions.
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 py-4 px-5 rounded-xl border border-white/10 bg-white/[0.02] mb-6 text-xs text-white/70">
            <div className="flex items-center gap-3">
              <img src="/saim-dev-logo.jpg" alt="Saim Dev" className="w-9 h-9 rounded-full border border-white/20 object-cover" width={36} height={36} />
              <div>
                <Link href="/about" className="font-semibold text-white hover:text-primary transition-colors">
                  Saim Dev
                </Link>
                <span className="block text-white/50 text-[11px]">Lead Commercial Kitchen Systems &amp; Web Architect</span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white/50">
              <span>Published: Oct 23, 2026</span>
              <span>•</span>
              <span>Updated: Oct 31, 2026</span>
            </div>
          </div>

          {/* Key Takeaways Box */}
          <div className="rounded-2xl border border-primary/25 bg-primary/5 p-6 mb-8">
            <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              Key Takeaways for Commercial Kitchen Operators
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/80">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>The 28%–32% Rule:</strong> Keeping food costs within this range secures 68%–72% Gross Profit (GP) to cover rising UK energy and wage overheads.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Exclude VAT from Sales:</strong> Always calculate margins using net revenue (Menu Price ÷ 1.20) rather than gross prices to prevent artificial GP inflation.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Factor Cooking Shrinkage:</strong> High-protein items shrink 20%–25% when cooked. Cost recipes on cooked plate yield, not raw wholesale weight.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Automated Calculation:</strong> Calculate your exact recipe portions, delivery commission buffers, and profit margins using our <Link href="/tools/food-cost-calculator" className="text-primary underline font-medium">Free Food Cost Calculator</Link>.</span>
              </li>
            </ul>
          </div>
        </header>'''

c = c.replace(old_header_end, new_header_end)

# Fix spelling
c = c.replace('subsidizing', 'subsidising')

with open(path, 'w', encoding='utf-8') as f:
    f.write(c)

print("Updated src/components/blog/BlogPostFoodCost.tsx")
