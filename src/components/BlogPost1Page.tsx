import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Share2, CheckCircle } from "lucide-react";

interface BlogPost1Props {
  onBack: () => void;
  onBackToBlogs: () => void;
}

export const BlogPost1Page = ({ onBack, onBackToBlogs }: BlogPost1Props) => {
  const sections = [
    "The Digital Shift Is Already Here",
    "First Impressions Happen Online",
    "Your Competitors Are Already There",
    "A Website Works While You Sleep",
    "It Builds Credibility — Instantly",
    "You Own It, Nobody Can Take It Away",
    "What a Professional Website Actually Looks Like",
    "The Real Cost of Not Having One",
    "How to Get Started",
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-black text-[#E1E0CC]">
      {/* ── Sticky Header ── */}
      <header className="sticky top-0 z-50 bg-black/85 backdrop-blur-xl border-b border-white/10 px-4 sm:px-8 py-4 flex items-center justify-between">
        <button
          onClick={onBackToBlogs}
          className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          All Blogs
        </button>
        <div className="flex items-center gap-2.5">
          <img
            src="/saim-dev-logo.jpg"
            alt="Saim Dev"
            className="w-7 h-7 rounded-full object-cover border border-white/15"
          />
          <span className="text-sm font-semibold text-white hidden sm:block">Saim Dev</span>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* ── Article Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-widest uppercase text-primary/80 mb-5">
            Business Growth
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
            Why Every Small Business Needs a Professional Website in 2026
          </h1>

          <p className="text-white/55 text-base sm:text-lg leading-relaxed mb-7">
            If you run a small business and you still don't have a professional website, you're not just behind the curve — you're actively losing customers to competitors who do. This isn't an opinion. This is what the data shows, and what real business owners experience every single week.
          </p>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-5 text-sm text-white/40 pb-7 border-b border-white/10">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              Aug 11, 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              8 min read
            </span>
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: document.title, url: window.location.href });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                }
              }}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer ml-auto"
            >
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>
        </motion.div>

        {/* ── Table of Contents ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 mb-10"
        >
          <p className="text-xs font-bold tracking-widest uppercase text-white/40 mb-4">In this article</p>
          <ol className="space-y-2">
            {sections.map((s, i) => (
              <li key={i}>
                <button
                  onClick={() => scrollTo(`section-${i + 1}`)}
                  className="text-sm text-white/60 hover:text-primary transition-colors text-left cursor-pointer flex items-center gap-2"
                >
                  <span className="text-primary/40 font-mono text-[10px]">{String(i + 1).padStart(2, "0")}</span>
                  {s}
                </button>
              </li>
            ))}
          </ol>
        </motion.div>

        {/* ── Article Body ── */}
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="prose-blog"
          style={{ lineHeight: 1.85 }}
        >

          {/* Section 1 */}
          <section id="section-1" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              The Digital Shift Is Already Here
            </h2>
            <p className="text-white/65 text-base mb-4">
              In 2026, 97% of consumers search online before they visit a store, call a business, or make any purchase decision. That number isn't a projection — it's been climbing steadily for the past decade and it's now the default behaviour of every customer you're trying to reach.
            </p>
            <p className="text-white/65 text-base mb-4">
              When someone hears about your business through a friend or passes by your shop, the first thing they do is search for you online. They want to see your hours, your prices, what you offer, what other people say about you, and whether you look like a business worth trusting. If they find nothing — or worse, a badly made site — most of them move on.
            </p>
            <p className="text-white/65 text-base">
              The digital shift isn't coming. It happened. The question now is whether your business shows up properly or disappears from the conversation entirely.
            </p>
          </section>

          {/* Section 2 */}
          <section id="section-2" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              First Impressions Happen Online
            </h2>
            <p className="text-white/65 text-base mb-4">
              You've probably spent real money on signage, business cards, or a clean shopfront. All of that matters — but none of it reaches the customer before your website does.
            </p>
            <p className="text-white/65 text-base mb-4">
              Research from Stanford University found that 75% of people judge a company's credibility based entirely on its website design. That's three out of every four potential customers forming an opinion about your business before they ever speak to you, visit your location, or experience your service.
            </p>
            <p className="text-white/65 text-base mb-4">
              A professional website sends a clear message: this business is serious, organised, and trustworthy. A poorly designed one — or no website at all — sends the opposite message, whether you intend it to or not.
            </p>
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5 my-6">
              <p className="text-white/80 text-sm font-medium italic leading-relaxed">
                "Visitors form an opinion about your website in 0.05 seconds. That's 50 milliseconds — far faster than conscious thought. You don't get a second chance at a first impression."
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section id="section-3" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Your Competitors Are Already There
            </h2>
            <p className="text-white/65 text-base mb-4">
              Here's the uncomfortable truth: while you're reading this, your competitors are appearing in search results for the exact customers you want. Every day you don't have a professional website, you hand those customers to someone else.
            </p>
            <p className="text-white/65 text-base mb-4">
              It doesn't matter if your product is better or your service is more personalised. Online, the business that looks more professional and is easier to find wins the customer first. And the first business to earn trust almost always earns the sale.
            </p>
            <p className="text-white/65 text-base">
              A professional website isn't just a presence — it's a competitive advantage. It puts you in the room where the customer is making their decision, instead of leaving you out of it.
            </p>
          </section>

          {/* Section 4 */}
          <section id="section-4" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              A Website Works While You Sleep
            </h2>
            <p className="text-white/65 text-base mb-4">
              Your shop closes. Your phone goes to voicemail. Your staff clocks out. Your website doesn't.
            </p>
            <p className="text-white/65 text-base mb-4">
              A well-built website generates inquiries, answers questions, and guides customers through a buying decision at 2am just as effectively as it does at 2pm. It's a sales tool that works 24 hours a day, 365 days a year, without holidays, sick days, or overtime pay.
            </p>
            <p className="text-white/65 text-base mb-4">
              Small businesses that use their website actively — with clear pricing, a contact form, and a simple booking process — report receiving inquiries outside of business hours every single week. That's revenue that previously went uncaptured.
            </p>
            <p className="text-white/65 text-base">
              Think of your website not as a brochure, but as your best salesperson — one who never has a bad day and never misses an opportunity.
            </p>
          </section>

          {/* Section 5 */}
          <section id="section-5" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              It Builds Credibility — Instantly
            </h2>
            <p className="text-white/65 text-base mb-4">
              Trust is the foundation of every business transaction, and in 2026, a professional website is one of the fastest ways to establish it.
            </p>
            <p className="text-white/65 text-base mb-4">
              When a potential customer lands on a clean, fast, well-structured website, they feel secure. They see that you've invested in your business. They can find the information they need without confusion. They read testimonials, see your work, and understand exactly what you offer. All of that happens before they send you a single message.
            </p>
            <p className="text-white/65 text-base">
              Contrast that with a business that only operates through Facebook or Instagram. Social media is useful, but it doesn't carry the same weight. A dedicated website signals permanence — that you're not just a side project, but a real, established business.
            </p>
          </section>

          {/* Section 6 */}
          <section id="section-6" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              You Own It, Nobody Can Take It Away
            </h2>
            <p className="text-white/65 text-base mb-4">
              Social media platforms change their algorithms constantly. Instagram reaches that can drop your visibility overnight. Facebook can restrict your page. TikTok has faced bans in multiple markets. You don't own any of that audience — you're renting space on someone else's platform.
            </p>
            <p className="text-white/65 text-base mb-4">
              Your website is yours. Your domain, your content, your customer data, your search rankings — all of it belongs to you. No algorithm update can wipe out the work you've put into it. No platform policy change can cut off your customers.
            </p>
            <p className="text-white/65 text-base">
              For small businesses, this ownership matters enormously. It means the brand you build online is an asset, not a liability tied to a third-party platform.
            </p>
          </section>

          {/* Section 7 */}
          <section id="section-7" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              What a Professional Website Actually Looks Like
            </h2>
            <p className="text-white/65 text-base mb-4">
              The word "professional" gets thrown around loosely, so let's be specific. A professional website in 2026 does these things:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Loads in under two seconds on mobile and desktop",
                "Clearly explains what the business does above the fold — no scrolling required",
                "Has a single, obvious call to action on every key page",
                "Works perfectly on every screen size, from phone to monitor",
                "Shows up in Google search results for relevant local terms",
                "Includes real testimonials, photos, and contact information",
                "Uses HTTPS — meaning it's secure and trusted by browsers",
                "Has a contact form or booking system that actually works",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/65 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-white/65 text-base">
              Most small business websites fail on at least three or four of these points. That's not a small problem — each failure point costs you customers directly.
            </p>
          </section>

          {/* Section 8 */}
          <section id="section-8" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              The Real Cost of Not Having One
            </h2>
            <p className="text-white/65 text-base mb-4">
              Small business owners often hesitate on a website because of the upfront cost. That thinking gets the math backwards.
            </p>
            <p className="text-white/65 text-base mb-4">
              Consider this: if your average customer is worth $200 in revenue and you lose just one customer per week because they couldn't find you or didn't trust what they saw, that's $10,400 in lost revenue per year. A professional website that costs $400–$600 doesn't look expensive when you put it next to that number.
            </p>
            <p className="text-white/65 text-base mb-4">
              The real cost isn't building a website. The real cost is the customers you lose every month without one.
            </p>
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-5 my-6">
              <p className="text-primary text-sm font-semibold mb-1">A simple calculation:</p>
              <p className="text-white/70 text-sm leading-relaxed">
                1 missed customer/week × $200 average value × 52 weeks = <strong className="text-white">$10,400/year in lost revenue</strong>. A quality website costs a fraction of that — once.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section id="section-9" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              How to Get Started
            </h2>
            <p className="text-white/65 text-base mb-4">
              Getting a professional website doesn't have to be complicated or time-consuming. The key is working with someone who understands both design and business — someone who builds websites that look good and actually convert visitors into customers.
            </p>
            <p className="text-white/65 text-base mb-4">
              Before you start, get clear on three things:
            </p>
            <ol className="space-y-4 mb-6">
              {[
                { n: "1", t: "What do you want the website to do?", d: "Generate inquiries? Sell products? Book appointments? Define the goal before you design anything." },
                { n: "2", t: "Who is your customer?", d: "A website built for a 22-year-old looks and feels very different from one built for a 55-year-old business owner. Know your audience." },
                { n: "3", t: "What makes you different?", d: "Your website should communicate your unique value clearly and quickly. If visitors can't tell why they should choose you in five seconds, the site isn't working." },
              ].map((item) => (
                <li key={item.n} className="flex gap-4">
                  <span className="w-7 h-7 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-xs font-bold text-primary flex-shrink-0 mt-0.5">
                    {item.n}
                  </span>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">{item.t}</p>
                    <p className="text-white/55 text-sm">{item.d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="text-white/65 text-base">
              Once those questions are answered, a good developer can build something that works — not just something that exists. There's a meaningful difference between the two, and that difference shows up directly in your results.
            </p>
          </section>

          {/* Conclusion */}
          <section className="mb-12 rounded-2xl border border-white/10 bg-white/[0.03] p-7">
            <h2 className="text-xl font-bold text-white mb-4">The Bottom Line</h2>
            <p className="text-white/65 text-base mb-4">
              In 2026, a professional website isn't optional for a small business — it's the baseline. It's the difference between being found and being invisible, between being trusted and being ignored, between growing and staying stuck.
            </p>
            <p className="text-white/65 text-base">
              The businesses that invest in a quality website this year will look back in three years and see it as one of the best decisions they made. The ones that don't will wonder why they keep losing customers to competitors who offer no better service — just a better online presence.
            </p>
          </section>

        </motion.article>

        {/* ── Author Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.3 }}
          className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 mb-10"
        >
          <img
            src="/saim-dev-logo.jpg"
            alt="Saim Dev"
            className="w-14 h-14 rounded-full object-cover border border-white/15 flex-shrink-0"
          />
          <div>
            <p className="text-white font-semibold text-sm mb-0.5">Saim Dev</p>
            <p className="text-white/40 text-xs mb-3">Full Stack Web Developer · Helping businesses grow online since 2020</p>
            <p className="text-white/55 text-sm leading-relaxed">
              I build high-performance, conversion-focused websites for small businesses worldwide. If you want a website that actually works for your business, let's talk.
            </p>
          </div>
        </motion.div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.35 }}
          className="rounded-2xl border border-primary/20 bg-primary/5 p-7 text-center mb-10"
        >
          <p className="text-white font-bold text-xl mb-2">Ready to get your business online?</p>
          <p className="text-white/50 text-sm mb-6">I build professional websites in 5–10 days. Starting from $300.</p>
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 bg-primary text-black font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors text-sm cursor-pointer"
          >
            View Pricing & Get Started
          </button>
        </motion.div>

        {/* ── Back to blogs ── */}
        <div className="text-center">
          <button
            onClick={onBackToBlogs}
            className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors mx-auto cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all blogs
          </button>
        </div>
      </div>
    </div>
  );
};
