import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Calendar, Clock, Share2, CheckCircle, XCircle, ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "Do small businesses still need a website in 2026?",
    a: "Yes — more than ever. According to BrightLocal's 2024 Local Consumer Review Survey, 98% of consumers used the internet to find information about local businesses in the past year. A website is no longer optional; it's the minimum standard customers expect before they trust a business.",
  },
  {
    q: "Is a Facebook or Instagram page enough for my business?",
    a: "No. Social media is useful for engagement, but it doesn't replace a website. Social platforms control your reach through algorithms, restrict your branding, and don't rank well in Google search results. A website gives you full ownership, search visibility, and the ability to capture leads directly.",
  },
  {
    q: "How much does a professional small business website cost?",
    a: "A professionally built, custom website typically starts from $300–$600 for small businesses. That's a one-time investment. Compare that to the revenue you lose each month without one — most businesses recover the cost within weeks through a single new customer.",
  },
  {
    q: "How long does it take to build a small business website?",
    a: "A well-structured small business website takes 5–10 business days when built by an experienced developer. Platforms like WordPress can be faster but sacrifice performance. Custom-built sites using modern frameworks like Next.js or Vite deliver better speed and SEO from day one.",
  },
  {
    q: "Can I build my own website using Wix or Squarespace?",
    a: "You can, but there are real trade-offs. Page builders limit your performance, SEO, and customization. They also charge monthly fees that add up over time. A professionally built website is faster, ranked more effectively by Google, and tailored to how your specific customers behave.",
  },
  {
    q: "What's the most important thing a small business website needs?",
    a: "A clear, single call-to-action on every key page. Most small business websites fail because they confuse visitors. Your site must immediately answer: what do you offer, who is it for, and what should I do next? Everything else supports those three answers.",
  },
];

const objections = [
  {
    objection: '"I already get customers through referrals."',
    answer:
      "Referrals still Google you before they call. When someone recommends your business, the first thing the referred customer does is search for you online. If they land on a weak website — or find nothing — a referral that should have converted walks away. Your website either reinforces or destroys the trust a referral created.",
  },
  {
    objection: '"I only use Facebook and it works fine."',
    answer:
      "Facebook reach has declined significantly. Organic posts now reach less than 5% of your followers on average, according to HubSpot's 2024 marketing report. And Facebook doesn't appear in Google search results the way a website does. You're depending on a platform that controls who sees your content — and that number keeps shrinking.",
  },
  {
    objection: '"Websites are too expensive for a small business."',
    answer:
      "The math works the other way. If your average customer is worth $200 and you lose just one inquiry per week because you're not visible online, that's $10,400 per year in missed revenue. A professional website costs a fraction of that — once. After that, it works for you every single day at no additional cost.",
  },
  {
    objection: `"I don't really need more customers right now."`,
    answer:
      "A website isn't only about generating new customers. It builds brand credibility, supports your existing customers with information, reduces time spent answering repetitive questions, and positions your business professionally for when you do want to grow. It's an asset that appreciates over time, not just a lead machine.",
  },
];

const checklist = [
  { item: "Loads in under 2 seconds on mobile", detail: "53% of mobile users abandon sites that take longer than 3 seconds (Google, 2024)" },
  { item: "Mobile-first responsive design", detail: "63% of Google searches now come from mobile devices" },
  { item: "Clear call-to-action above the fold", detail: "Visitors decide to stay or leave in under 8 seconds" },
  { item: "Contact form with email notification", detail: "Reduces friction — most people won't call but will fill a form" },
  { item: "Google Maps integration", detail: "76% of people who search nearby visit within 24 hours (Google)" },
  { item: "SSL certificate (HTTPS)", detail: "Google flags non-HTTPS sites as 'Not Secure' — instantly kills trust" },
  { item: "Local SEO optimisation", detail: "46% of all Google searches have local intent (GoGulf)" },
  { item: "Customer reviews / testimonials", detail: "93% of consumers say reviews impact their buying decisions (BrightLocal)" },
  { item: "Dedicated service/product pages", detail: "Each service page is an additional ranking opportunity in Google" },
  { item: "Google Analytics tracking", detail: "You cannot improve what you don't measure" },
  { item: "Fast hosting with CDN", detail: "Hosting quality directly impacts page speed and uptime" },
  { item: "Schema markup (structured data)", detail: "Enables rich results in Google — star ratings, FAQs, business hours" },
];

const stats = [
  { value: "98%", label: "of consumers search online for local businesses", source: "BrightLocal, 2024" },
  { value: "75%", label: "judge a company's credibility by its website design", source: "Stanford Web Credibility Research" },
  { value: "76%", label: "of nearby searchers visit a business within 24 hours", source: "Google Consumer Insights" },
  { value: "53%", label: "of mobile users leave if a page takes over 3 seconds", source: "Google, 2024" },
];

const websiteVsSocial = [
  { feature: "You fully own it", website: true, social: false },
  { feature: "Appears in Google search results", website: true, social: false },
  { feature: "Full branding and design control", website: true, social: false },
  { feature: "Lead forms and booking integration", website: true, social: false },
  { feature: "Long-term SEO asset", website: true, social: false },
  { feature: "Works without algorithm changes", website: true, social: false },
  { feature: "Collects your own customer data", website: true, social: false },
  { feature: "Platform can restrict or ban you", website: false, social: true },
  { feature: "Organic reach declining yearly", website: false, social: true },
  { feature: "Monthly fees or ad spend required for visibility", website: false, social: true },
];

export const BlogPost1Page = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const sections = [
    "The Numbers Behind the Shift",
    "First Impressions Happen Online",
    "Website vs Social Media",
    "Your Competitors Are Already There",
    "A Website Works While You Sleep",
    "You Own It — Nobody Can Take It Away",
    "Addressing Common Objections",
    "What a Professional Website Must Have",
    "Real Business Examples",
    "The Real Cost of Not Having One",
    "Frequently Asked Questions",
    "How to Get Started",
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-black text-[#E1E0CC]">
      <Helmet>
        <title>Why Every Small Business Needs a Professional Website in 2026 | Saim Dev</title>
        <meta name="description" content="98% of consumers search online for local businesses. Discover why a professional website is essential for small business growth in 2026, backed by real statistics and case studies." />
        <link rel="canonical" href="https://www.saimdev.site/blog/why-small-business-needs-website-2026" />
        <meta property="og:title" content="Why Every Small Business Needs a Professional Website in 2026" />
        <meta property="og:description" content="98% of consumers search online for local businesses. Real statistics, case studies, and practical steps for small business owners." />
        <meta property="og:url" content="https://www.saimdev.site/blog/why-small-business-needs-website-2026" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"Why Every Small Business Needs a Professional Website in 2026","description":"98% of consumers search online for local businesses. Learn why a professional website is essential for small business growth in 2026.","url":"https://www.saimdev.site/blog/why-small-business-needs-website-2026","datePublished":"2026-08-11","dateModified":"2026-08-11","author":{"@type":"Person","name":"Saim Dev","url":"https://www.saimdev.site"},"publisher":{"@type":"Organization","name":"Saim Dev","logo":{"@type":"ImageObject","url":"https://www.saimdev.site/saim-dev-logo.jpg"}},"mainEntityOfPage":{"@type":"WebPage","@id":"https://www.saimdev.site/blog/why-small-business-needs-website-2026"},"keywords":["small business website","professional website 2026","website for small business","local business website","website vs social media","website ROI","web development","local SEO"]})}</script>
      </Helmet>
      {/* ── Sticky Header ── */}
      <header className="sticky top-0 z-50 bg-black/85 backdrop-blur-xl border-b border-white/10 px-4 sm:px-8 py-4 flex items-center justify-between">
        <button
          onClick={() => navigate('/blogs')}
          className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          All Blogs
        </button>
        <div className="flex items-center gap-2.5">
          <img src="/saim-dev-logo.jpg" alt="Saim Dev" className="w-7 h-7 rounded-full object-cover border border-white/15" />
          <span className="text-sm font-semibold text-white hidden sm:block">Saim Dev</span>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">

        {/* ── Article Header ── */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-widest uppercase text-primary/80 mb-5">
            Business Growth
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
            Why Every Small Business Needs a Professional Website in 2026
          </h1>
          <p className="text-white/55 text-base sm:text-lg leading-relaxed mb-7">
            Most small business owners know they should have a website. Very few understand how much they're losing without one. This article covers the research, the real examples, and the practical steps — so you can make an informed decision rather than a guess.
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
        </motion.div>

        {/* ── Table of Contents ── */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.1 }} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 mb-12">
          <p className="text-xs font-bold tracking-widest uppercase text-white/40 mb-4">In this article</p>
          <ol className="space-y-2">
            {sections.map((s, i) => (
              <li key={i}>
                <button onClick={() => scrollTo(`section-${i + 1}`)} className="text-sm text-white/60 hover:text-primary transition-colors text-left cursor-pointer flex items-center gap-2.5">
                  <span className="text-primary/40 font-mono text-[10px] flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  {s}
                </button>
              </li>
            ))}
          </ol>
        </motion.div>

        {/* ── Article Body ── */}
        <motion.article initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.15 }} style={{ lineHeight: 1.85 }}>

          {/* Section 1 — Stats */}
          <section id="section-1" className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">The Numbers Behind the Shift</h2>
            <p className="text-white/65 text-base mb-6">
              Before we get into strategy, look at what the research actually says. These aren't projections or opinions — they're findings from independent consumer studies conducted in the last two years.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-7">
              {stats.map((s, i) => (
                <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-3xl sm:text-4xl font-bold text-primary mb-1">{s.value}</p>
                  <p className="text-white/70 text-sm mb-2 leading-snug">{s.label}</p>
                  <p className="text-white/30 text-[10px] font-medium tracking-wide">Source: {s.source}</p>
                </div>
              ))}
            </div>

            <p className="text-white/65 text-base mb-4">
              The pattern across all of this data is consistent: consumers research online before they act. It doesn't matter whether you run a restaurant, a plumbing company, a hair salon, or a legal practice — your potential customers are looking for you online before they ever pick up the phone.
            </p>
            <p className="text-white/65 text-base">
              And when they search for you — or businesses like yours — what they find either builds or destroys confidence. That's the moment your website earns or loses the customer.
            </p>
          </section>

          {/* Section 2 */}
          <section id="section-2" className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">First Impressions Happen Online</h2>
            <p className="text-white/65 text-base mb-4">
              Stanford University's Web Credibility Research project found that 75% of people admit to judging a company's credibility based entirely on its website design. That means three out of every four visitors form a trust judgment before they read a single word of your content.
            </p>
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5 my-6">
              <p className="text-white/80 text-sm font-medium italic leading-relaxed">
                "Visitors form an opinion about your website in 0.05 seconds — 50 milliseconds. That judgment is largely subconscious, driven by visual design. You don't get a second chance at a first impression."
              </p>
              <p className="text-white/30 text-xs mt-2">— Stanford Web Credibility Research</p>
            </div>
            <p className="text-white/65 text-base mb-4">
              You've probably spent real money on a clean shopfront, professional signage, or a branded vehicle. All of that matters — but none of it reaches the customer before your website does. The website is the first handshake. Everything else comes after.
            </p>
            <p className="text-white/65 text-base">
              A professional website communicates: this business is organised, established, and trustworthy. A poor one — or no website at all — communicates the opposite, whether you intend it to or not.
            </p>
          </section>

          {/* Section 3 — Website vs Social */}
          <section id="section-3" className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">Website vs Social Media</h2>
            <p className="text-white/65 text-base mb-6">
              Many small business owners believe their Facebook page or Instagram account is a substitute for a website. It isn't. Social media and websites serve different purposes — and only one of them is an asset you actually own.
            </p>

            {/* Comparison Table */}
            <div className="rounded-2xl border border-white/10 overflow-hidden mb-6">
              <div className="grid grid-cols-3 bg-white/5 px-4 py-3 border-b border-white/10">
                <p className="text-xs font-bold text-white/50 tracking-wider uppercase">Feature</p>
                <p className="text-xs font-bold text-primary tracking-wider uppercase text-center">Professional Website</p>
                <p className="text-xs font-bold text-white/40 tracking-wider uppercase text-center">Social Media Page</p>
              </div>
              {websiteVsSocial.map((row, i) => (
                <div key={i} className={`grid grid-cols-3 px-4 py-3 items-center ${i % 2 === 0 ? "bg-white/[0.02]" : ""} border-b border-white/[0.05] last:border-0`}>
                  <p className="text-xs text-white/60 pr-2">{row.feature}</p>
                  <div className="flex justify-center">
                    {row.website ? <CheckCircle className="w-4 h-4 text-primary" /> : <XCircle className="w-4 h-4 text-white/20" />}
                  </div>
                  <div className="flex justify-center">
                    {row.social ? <CheckCircle className="w-4 h-4 text-white/40" /> : <XCircle className="w-4 h-4 text-red-400/50" />}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-white/65 text-base">
              Social media is a useful marketing channel. It's not a business foundation. HubSpot's 2024 State of Marketing report confirmed that organic Facebook reach has fallen below 5% for most business pages. The audience you built on someone else's platform can be cut off at any time — through an algorithm change, a policy update, or an account restriction you never saw coming.
            </p>
          </section>

          {/* Section 4 */}
          <section id="section-4" className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">Your Competitors Are Already There</h2>
            <p className="text-white/65 text-base mb-4">
              While you're reading this, your competitors are appearing in search results for the exact customers you want to reach. Every day without a professional website, you redirect those customers to someone else — often a business that offers no better service, just a better online presence.
            </p>
            <p className="text-white/65 text-base mb-4">
              According to a 2023 survey by Clutch, 64% of small businesses already have a website. In competitive local markets, that number is significantly higher. The businesses without one are competing at a structural disadvantage — they're invisible in the channel where most purchase decisions begin.
            </p>
            <p className="text-white/65 text-base">
              Local search is particularly stark. Google reports that 46% of all searches have local intent — people looking for businesses, products, or services near them. Without a website, you don't appear in those results. With one that's properly optimised, you can rank on the first page for your town or city without any paid advertising.
            </p>
          </section>

          {/* Section 5 */}
          <section id="section-5" className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">A Website Works While You Sleep</h2>
            <p className="text-white/65 text-base mb-4">
              Your shop closes. Your phone goes to voicemail. Your staff clocks out. Your website doesn't.
            </p>
            <p className="text-white/65 text-base mb-4">
              A well-built website answers questions, showcases your services, displays pricing, and captures inquiries at 2am just as effectively as it does at 2pm. It's a sales tool that operates 24 hours a day, 365 days a year, without sick days, overtime, or inconsistency.
            </p>
            <p className="text-white/65 text-base mb-6">
              Research from Blue Corona found that 88% of consumers who search for a local business on mobile visit or call that business within 24 hours. Your website is often the difference between capturing that person and losing them to a competitor who was easier to find at that moment.
            </p>

            {/* Mini case study */}
            <div className="rounded-2xl border border-primary/15 bg-primary/5 p-6 mb-2">
              <p className="text-[10px] font-bold tracking-widest uppercase text-primary/60 mb-3">Real Example</p>
              <p className="text-white/75 text-sm leading-relaxed">
                A plumbing company in a mid-sized city relied entirely on word-of-mouth and a basic Facebook page for three years. After launching a professionally built website with a service area page, a contact form, and basic local SEO, the owner reported receiving seven to ten new inquiries per month directly from Google — without running a single paid ad. Most came in during evenings and weekends when the office was closed.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section id="section-6" className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">You Own It — Nobody Can Take It Away</h2>
            <p className="text-white/65 text-base mb-4">
              When you build your business presence on a social platform, you're building on rented land. The platform sets the rules. They change the algorithm. They can restrict your account, reduce your reach, or shut down your access entirely — and they don't need your permission.
            </p>
            <p className="text-white/65 text-base mb-4">
              TikTok faced government bans in multiple countries. Instagram removed features small businesses relied on for discovery. Facebook changed its algorithm and cut organic business reach by over 60% between 2012 and 2024. Every time these platforms made a change, small businesses that depended on them had no recourse.
            </p>
            <p className="text-white/65 text-base">
              Your website belongs to you. Your domain, your content, your Google rankings, your customer data — all of it is yours. A Google algorithm update might shift your ranking position, but it cannot remove you from the internet the way a platform policy change can remove you from their ecosystem.
            </p>
          </section>

          {/* Section 7 — Objections */}
          <section id="section-7" className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">Addressing Common Objections</h2>
            <p className="text-white/65 text-base mb-7">
              These are the four objections I hear most often from small business owners who don't yet have a website — and the honest responses to each.
            </p>
            <div className="space-y-4">
              {objections.map((obj, i) => (
                <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <p className="text-white font-semibold text-base mb-3 italic">{obj.objection}</p>
                  <p className="text-white/60 text-sm leading-relaxed">{obj.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 8 — Checklist */}
          <section id="section-8" className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">What a Professional Website Must Have</h2>
            <p className="text-white/65 text-base mb-7">
              The word "professional" is vague unless you define it precisely. Here's what a genuinely effective small business website includes — and why each item matters.
            </p>
            <div className="space-y-3">
              {checklist.map((item, i) => (
                <div key={i} className="flex items-start gap-4 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white text-sm font-semibold mb-0.5">{item.item}</p>
                    <p className="text-white/45 text-xs leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-white/55 text-sm mt-5 leading-relaxed">
              Most small business websites are missing four or more of these. Each gap is a direct cost — either in lost customers, lower search rankings, or reduced credibility.
            </p>
          </section>

          {/* Section 9 — Real Examples */}
          <section id="section-9" className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">Real Business Examples</h2>
            <p className="text-white/65 text-base mb-7">
              Research is convincing. Real examples are more convincing. Here are three businesses that made the shift — and what happened when they did.
            </p>
            <div className="space-y-5">
              {[
                {
                  type: "Local Roofing Company",
                  story: "A family-run roofing company in a suburban area relied entirely on Facebook and referrals for five years. After launching a professional website with dedicated service pages, a local SEO setup, and a Google Business Profile, they began receiving eight to twelve qualified inquiries per month directly from Google Search and Maps. Within four months, online leads exceeded referral leads for the first time in the company's history.",
                },
                {
                  type: "Independent Hair Salon",
                  story: "A hair salon with 12 years of loyal clients had no website and managed bookings through phone calls only. After building a site with an integrated booking system and a page optimised for local search terms, 34% of their new client bookings in the first quarter came directly through the website — many from people who had never heard of the salon before finding it on Google.",
                },
                {
                  type: "Home Cleaning Service",
                  story: "A solo cleaning service operator added a simple five-page professional website with a pricing guide, a contact form, and testimonials from existing clients. Within six weeks, she received enough new inquiries to hire her first part-time employee. She noted that the majority of new clients mentioned finding her through Google when they couldn't get through to a competitor by phone.",
                },
              ].map((ex, i) => (
                <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <p className="text-primary text-xs font-bold tracking-widest uppercase mb-3">{ex.type}</p>
                  <p className="text-white/65 text-sm leading-relaxed">{ex.story}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 10 — Cost */}
          <section id="section-10" className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">The Real Cost of Not Having One</h2>
            <p className="text-white/65 text-base mb-6">
              The conversation around websites almost always focuses on what a website costs. The more relevant question is what the absence of one costs.
            </p>
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 mb-6">
              <p className="text-primary text-sm font-bold mb-4">Revenue Loss Calculator — Conservative Estimate</p>
              <div className="space-y-2 text-sm">
                {[
                  ["Lost inquiries per week (conservative)", "2"],
                  ["Average customer value", "$200"],
                  ["Lost revenue per week", "$400"],
                  ["Lost revenue per month", "$1,600"],
                  ["Lost revenue per year", "$19,200"],
                  ["Cost of a professional website", "$300–$600 (once)"],
                ].map(([label, value], i) => (
                  <div key={i} className={`flex justify-between items-center py-1.5 ${i === 4 ? "border-t border-primary/20 pt-3 mt-1" : ""}`}>
                    <span className={`text-white/60 ${i === 4 ? "font-semibold text-white" : ""}`}>{label}</span>
                    <span className={`font-bold ${i === 4 ? "text-primary text-base" : "text-white/80"}`}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-white/65 text-base">
              This is a conservative model. In high-value service industries — legal, medical, contracting, real estate — a single missed customer can represent thousands of dollars. The calculation makes the decision straightforward: the website pays for itself with the first or second customer it converts.
            </p>
          </section>

          {/* Section 11 — FAQ */}
          <section id="section-11" className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-xl border border-white/10 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer hover:bg-white/[0.03] transition-colors"
                  >
                    <span className="text-white font-medium text-sm">{faq.q}</span>
                    {openFaq === i ? <ChevronUp className="w-4 h-4 text-primary flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-white/40 flex-shrink-0" />}
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 pt-1 border-t border-white/[0.06]">
                      <p className="text-white/60 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Section 12 — How to Get Started */}
          <section id="section-12" className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">How to Get Started</h2>
            <p className="text-white/65 text-base mb-6">
              Getting a professional website doesn't need to be complicated. It needs to be intentional. Before you brief any developer, get clear on three things:
            </p>
            <div className="space-y-4 mb-7">
              {[
                { n: "01", t: "Define the goal", d: "What do you want the website to do — generate inquiries, take bookings, sell products, or build credibility? Every design decision flows from this answer. Without it, you'll get a website that looks good but doesn't perform." },
                { n: "02", t: "Know your customer", d: "A website built for a 24-year-old professional looks and communicates differently from one built for a 55-year-old homeowner. Your site must speak directly to the person making the purchase decision, in the language they use and at the pace they prefer." },
                { n: "03", t: "Clarify your difference", d: "What makes your business the right choice over a competitor? Your website has approximately five seconds to communicate that. If visitors can't identify your unique value in that window, the site is not working hard enough." },
              ].map((item) => (
                <div key={item.n} className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-5">
                  <span className="text-primary font-mono font-bold text-sm flex-shrink-0 mt-0.5">{item.n}</span>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">{item.t}</p>
                    <p className="text-white/50 text-sm leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-white/65 text-base">
              Once those three questions are answered clearly, a good developer can build something that converts — not just something that exists. There's a significant difference between the two, and that difference shows up directly in your results.
            </p>
          </section>

          {/* Conclusion */}
          <section className="mb-14 rounded-2xl border border-white/10 bg-white/[0.03] p-7">
            <h2 className="text-xl font-bold text-white mb-4">The Bottom Line</h2>
            <p className="text-white/65 text-base mb-4">
              In 2026, a professional website isn't optional for a small business — it's the baseline expectation every customer brings to their first interaction with you. It's the difference between being found and being invisible. Between being trusted and being questioned. Between growing and staying stuck.
            </p>
            <p className="text-white/65 text-base">
              The data is clear. The examples are real. The math works in your favour. The businesses that invest in a quality website this year will look back in three years and recognise it as one of the most straightforward decisions they made. The ones that don't will wonder why they keep losing customers to competitors who offer no better service — just a better first impression.
            </p>
          </section>

        </motion.article>

        {/* ── Author Card ── */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.3 }} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 mb-6">
          <img src="/saim-dev-logo.jpg" alt="Saim Dev" className="w-14 h-14 rounded-full object-cover border border-white/15 flex-shrink-0" />
          <div>
            <p className="text-white font-semibold text-sm mb-0.5">Saim Dev</p>
            <p className="text-white/40 text-xs mb-3">Full Stack Web Developer · Building business websites since 2020</p>
            <p className="text-white/55 text-sm leading-relaxed">
              I build high-performance, conversion-focused websites for small businesses. Every site I deliver is fast, mobile-optimised, and built to generate real leads — not just look good.
            </p>
          </div>
        </motion.div>

        {/* ── Lead Gen CTA — Free Audit ── */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.35 }} className="rounded-2xl border border-primary/20 bg-primary/5 p-7 mb-10">
          <p className="text-white font-bold text-xl mb-2">Is your business losing customers online?</p>
          <p className="text-white/55 text-sm leading-relaxed mb-6">
            I offer a free website audit for small businesses. You'll get a clear, honest review of your current online presence — covering your website performance, Google visibility, mobile experience, and the specific steps that would generate more leads. No sales pitch. Just a straight assessment.
          </p>
          <div className="flex flex-wrap gap-3">
            <button onClick={() => navigate('/')} className="inline-flex items-center gap-2 bg-primary text-black font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors text-sm cursor-pointer">
              Request a Free Audit
            </button>
            <button onClick={() => navigate('/')} className="inline-flex items-center gap-2 border border-white/20 text-white/80 hover:text-white hover:border-white/40 font-medium px-6 py-3 rounded-xl transition-colors text-sm cursor-pointer">
              View Pricing
            </button>
          </div>
        </motion.div>

        {/* ── Internal Links ── */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 mb-10">
          <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-4">Related articles coming soon</p>
          <div className="space-y-2 text-sm text-white/40">
            {["Local SEO Guide for Small Businesses", "Why Page Speed Directly Affects Your Revenue", "Google Business Profile: Complete Setup Guide", "How Much Should a Small Business Website Cost?", "Why Mobile Optimisation Is Non-Negotiable in 2026"].map((t, i) => (
              <p key={i} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-primary/40 flex-shrink-0" />
                {t}
              </p>
            ))}
          </div>
        </div>

        {/* ── Back ── */}
        <div className="text-center">
          <button onClick={() => navigate('/blogs')} className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors mx-auto cursor-pointer">
            <ArrowLeft className="w-4 h-4" />Back to all blogs
          </button>
        </div>
      </div>
    </div>
  );
};
