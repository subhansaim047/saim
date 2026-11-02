import re

path = 'src/components/BlogPost1Page.tsx'
with open(path, 'r', encoding='utf-8') as f:
    c = f.read()

# 1. Update Breadcrumb text
c = c.replace(
    '<li className="text-white font-medium truncate" aria-current="page">Why UK Small Businesses Need a Custom Website in 2026</li>',
    '<li className="text-white font-medium truncate" aria-current="page">Why UK Small Businesses Need a Professional Website</li>'
)

# 2. Update H1
c = c.replace(
    '<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-6">\n            Why Every Small Business Needs a Professional Website\n          </h1>',
    '<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-6">\n            Why UK Small Businesses Need a Professional Website\n          </h1>'
)

# 3. Direct answer intro + author byline + key takeaways
old_intro_block = '''          <p className="text-white/55 text-base sm:text-lg leading-relaxed mb-7">
            Most small business owners know they need a professional website, but very few understand how much customer revenue they lose without one. This article covers the latest industry data, real examples, and practical steps so you can make an informed investment decision.
          </p>
          <div className="flex flex-wrap items-center gap-5 text-sm text-white/40 pb-7 border-b border-white/10">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />Aug 11, 2026</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />12 min read</span>
            <button
              onClick={() => { if (navigator.share) { navigator.share({ title: document.title, url: window.location.href }); } else { navigator.clipboard.writeText(window.location.href); } }}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer ml-auto"
            >
              <Share2 className="w-4 h-4" />Share
            </button>
          </div>
        </motion.div>'''

new_intro_block = '''          <div className="p-4 rounded-xl border border-primary/20 bg-primary/5 text-white/90 text-sm sm:text-base leading-relaxed mb-6">
            <strong>Direct Answer:</strong> A professional website is essential for any UK small business because 98% of consumers research local services online before buying. Without a dedicated website, your business misses out on Google local search traffic, loses referral customers who verify you online, and remains vulnerable to third-party social media algorithms.
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 py-4 px-5 rounded-xl border border-white/10 bg-white/[0.02] mb-6 text-xs text-white/70">
            <div className="flex items-center gap-3">
              <img src="/saim-dev-logo.jpg" alt="Saim Dev" className="w-9 h-9 rounded-full border border-white/20 object-cover" width={36} height={36} />
              <div>
                <Link href="/about" className="font-semibold text-white hover:text-primary transition-colors">
                  Saim Dev
                </Link>
                <span className="block text-white/50 text-[11px]">Lead Next.js Architect & Full-Stack Specialist</span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white/50">
              <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />Aug 11, 2026 (Updated: Oct 31, 2026)</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />12 min read</span>
            </div>
          </div>

          {/* Key Takeaways Box */}
          <div className="rounded-2xl border border-primary/25 bg-primary/5 p-6 mb-8">
            <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              Key Takeaways for UK Business Owners
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/80">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>98% of UK consumers</strong> use online search to research and verify local businesses before calling or visiting.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Permanent Search Equity:</strong> A custom domain accumulates ranking power on Google, unlike rented social media profiles subject to reach throttling.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Sub-2-Second Speed Matters:</strong> Over 53% of mobile visits are abandoned if loading takes more than 3 seconds. Fast Next.js architecture converts visitors immediately.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Zero Recurring Platform Fees:</strong> One-off bespoke builds eliminate ongoing builder subscriptions and 30% marketplace aggregator fees.</span>
              </li>
            </ul>
          </div>
        </motion.div>'''

c = c.replace(old_intro_block, new_intro_block)

# 4. Fix currency in FAQ
c = c.replace('$500–$1,000', '£500–£1,000')
c = c.replace('customization', 'customisation')

with open(path, 'w', encoding='utf-8') as f:
    f.write(c)

print("Updated src/components/BlogPost1Page.tsx")
