path = 'src/components/BlogPost2Page.tsx'
with open(path, 'r', encoding='utf-8') as f:
    c = f.read()

# 1. Update Breadcrumb
c = c.replace(
    '<li className="text-white font-medium truncate" aria-current="page">Free Websites for Local Businesses</li>',
    '<li className="text-white font-medium truncate" aria-current="page">Free Website for Small Business: Pros, Cons & Starter Guide</li>'
)

# 2. Update H1
c = c.replace(
    '<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-6">\n            I\'m Building 5 Free Websites for Local Businesses — Here\'s Why (and How to Claim One)\n          </h1>',
    '<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-6">\n            Free Website for Small Business: Pros, Cons & What You Actually Get\n          </h1>'
)

# 3. Direct answer intro + author byline + key takeaways
old_intro = '''          <p className="text-white/55 text-base sm:text-lg leading-relaxed mb-7">
            Hello local business owners! I’m offering free websites to 5 selected local businesses that want to improve their online presence and attract more customers.<br/><br/>
            The website design and development are free. You may only need to pay for your own domain and hosting. In return, I’ll ask for honest feedback after the project. You will never be required to leave a positive review.
          </p>
          <div className="flex flex-wrap items-center gap-5 text-sm text-white/40 pb-7 border-b border-white/10">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />Sep 20, 2026</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />7 min read</span>
            <button
              onClick={() => { if (navigator.share) { navigator.share({ title: document.title, url: window.location.href }); } else { navigator.clipboard.writeText(window.location.href); } }}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer ml-auto"
            >
              <Share2 className="w-4 h-4" />Share
            </button>
          </div>
        </motion.div>'''

new_intro = '''          <div className="p-4 rounded-xl border border-primary/20 bg-primary/5 text-white/90 text-sm sm:text-base leading-relaxed mb-6">
            <strong>Direct Answer:</strong> Free website builders allow small businesses to launch online without upfront capital, but they frequently impose restrictive subdomains, unwanted third-party advertisements, slow load times, and expensive monthly feature gates. Understanding the true trade-offs between proprietary DIY builders and bespoke developer-built starter websites ensures you retain full ownership of your domain, code, and customer enquiries.
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
              <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />Sep 20, 2026 (Updated: Oct 31, 2026)</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />8 min read</span>
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
                <span><strong>Branding & Ads:</strong> Generic free builders place their own logos, cookie banners, and ads across your header and footer.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>The Subdomain Trap:</strong> Running on a subdomain (e.g. yourshop.wixsite.com) builds domain authority for the builder, not your business.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Hidden Escalating Costs:</strong> Connecting a custom domain or removing ads usually costs £15–£35 per month, totaling £180–£420/year.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>The Bespoke Starter Alternative:</strong> Saim Dev builds 5 free custom Next.js websites with zero labour fees, complete code ownership, and no monthly platform subscriptions.</span>
              </li>
            </ul>
          </div>
        </motion.div>'''

c = c.replace(old_intro, new_intro)

# 4. Insert Comparison Table before Section 2
table_html = '''
            {/* Comparison Matrix: Free Builders vs Bespoke Starter vs Agency */}
            <div className="my-8 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 overflow-x-auto">
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">Free Website Builder vs Bespoke Starter Comparison</h3>
              <p className="text-white/50 text-xs mb-5">How generic free builders compare against Saim Dev free starter builds and traditional digital agencies:</p>
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/15 text-white/70">
                    <th className="py-2.5 pr-4 font-semibold">Evaluation Criteria</th>
                    <th className="py-2.5 px-3 font-semibold text-rose-400">DIY Free Builder (Wix/Weebly)</th>
                    <th className="py-2.5 px-3 font-semibold text-primary">Saim Dev Starter Offer</th>
                    <th className="py-2.5 pl-3 font-semibold text-white/90">Traditional Agency</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-white/75">
                  <tr>
                    <td className="py-3 pr-4 font-medium text-white">Upfront Build Fee</td>
                    <td className="py-3 px-3">£0</td>
                    <td className="py-3 px-3 font-semibold text-primary">£0 (Labour Free)</td>
                    <td className="py-3 pl-3">£1,200 – £3,500+</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-white">Monthly Platform Subscriptions</td>
                    <td className="py-3 px-3 text-rose-400">£15 – £35 / month</td>
                    <td className="py-3 px-3 font-semibold text-primary">£0 (Zero Platform Fees)</td>
                    <td className="py-3 pl-3">£50 – £150 / month maintenance</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-white">Custom Domain & Branding</td>
                    <td className="py-3 px-3 text-rose-400">Locked / Forced Subdomain</td>
                    <td className="py-3 px-3 text-primary">100% Client Owned (.co.uk)</td>
                    <td className="py-3 pl-3">100% Client Owned</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-white">Third-Party Advertisements</td>
                    <td className="py-3 px-3 text-rose-400">Yes (Builder Watermark)</td>
                    <td className="py-3 px-3 font-semibold text-primary">None (Pure Business Identity)</td>
                    <td className="py-3 pl-3">None</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-white">Mobile Page Speed (CWV)</td>
                    <td className="py-3 px-3 text-amber-400">Slow (3.5s – 6.0s LCP)</td>
                    <td className="py-3 px-3 font-semibold text-primary">Ultra-Fast (< 1.2s LCP)</td>
                    <td className="py-3 pl-3">Varies (1.8s – 3.0s)</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-white">Code & Data Ownership</td>
                    <td className="py-3 px-3 text-rose-400">Proprietary (Cannot Export)</td>
                    <td className="py-3 px-3 font-semibold text-primary">Full Git Repository Access</td>
                    <td className="py-3 pl-3">Full Ownership</td>
                  </tr>
                </tbody>
              </table>
            </div>
'''

c = c.replace(
    'Most paid websites at this specification cost between £500 and £1,500. You\'re getting the same result at zero cost.\n            </p>\n          </section>',
    'Most paid websites at this specification cost between £500 and £1,500. You\'re getting the same result at zero cost.\n            </p>' + table_html + '\n          </section>'
)

with open(path, 'w', encoding='utf-8') as f:
    f.write(c)

print("Updated src/components/BlogPost2Page.tsx")
