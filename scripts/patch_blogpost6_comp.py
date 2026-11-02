path = 'src/components/blog/BlogPostRecipeScaler.tsx'
with open(path, 'r', encoding='utf-8') as f:
    c = f.read()

# 1. Update H1
c = c.replace(
    '<h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.12]">\n            The Commercial Kitchen Guide to Recipe Scaling: How to Scale from 10 to 500 Portions Without Taste Breakdown\n          </h1>',
    '<h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.12]">\n            How to Scale Recipes for Commercial Catering (10 to 500 Portions)\n          </h1>'
)

# 2. Direct answer intro + author byline + key takeaways
old_header_end = '''          <p className="text-base sm:text-xl text-white/70 leading-relaxed max-w-3xl">
          Discover how to scale recipes without flavor breakdown or texture collapse. Learn why linear multiplication fails in bulk catering, how to calculate non-linear spices and liquids, and how to generate standardised chef prep cards.
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
            <strong>Direct Answer:</strong> To scale recipes for commercial catering, calculate the Recipe Conversion Factor (Desired Yield divided by Current Yield), convert all volume measurements to metric weights (grams and kilograms), and apply non-linear adjustments to salt, pungent spices, liquids, and leaveners to maintain balanced flavour profiles in large batch quantities.
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
              Key Takeaways for Commercial Caterers &amp; Chefs
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/80">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Use the RCF Formula:</strong> Recipe Conversion Factor = Desired Portions ÷ Original Yield. Multiply base ingredient weights by RCF.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Metric Weights Only:</strong> Avoid cups and spoons; weighing ingredients in grams eliminates bulk scaling discrepancies up to 800g.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>The 80% Salt Rule:</strong> Never scale pungent spices, alcohol, or salt by full RCF. Scale seasonings to 70%–80% and season to taste.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Batch Scaler &amp; Prep Sheets:</strong> Instantly convert ingredient ratios and print kitchen prep sheets with our <Link href="/tools/recipe-batch-calculator" className="text-primary underline font-medium">Free Recipe Batch Scaler</Link>.</span>
              </li>
            </ul>
          </div>
        </header>'''

c = c.replace(old_header_end, new_header_end)

# Fix spelling
c = c.replace('flavor', 'flavour')

with open(path, 'w', encoding='utf-8') as f:
    f.write(c)

print("Updated src/components/blog/BlogPostRecipeScaler.tsx")
