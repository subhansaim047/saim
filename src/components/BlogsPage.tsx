import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Tag, ArrowRight } from "lucide-react";

interface BlogsPageProps {
  onBack: () => void;
  onOpenPost?: (slug: string) => void;
}

const blogs = [
  {
    id: 1,
    title: "Why Every Small Business Needs a Professional Website in 2026",
    excerpt:
      "97% of consumers search online before making a purchase. If your business isn't showing up professionally, you're handing customers straight to your competitors — every single day.",
    date: "Aug 11, 2026",
    readTime: "8 min read",
    tag: "Business Growth",
    tagColor: "#DEDBC8",
    slug: "#blog-post-1",
  },
  {
    id: 2,
    title: "Next.js vs WordPress — Which is Better for Your Business?",
    excerpt:
      "WordPress is popular but slow. Next.js is fast but technical. Let's break down exactly which platform suits your business goals in 2026.",
    date: "Aug 5, 2026",
    readTime: "7 min read",
    tag: "Web Development",
    tagColor: "#DEDBC8",
    slug: "#blog-2",
  },
  {
    id: 3,
    title: "5 Signs Your Website is Killing Your Sales",
    excerpt:
      "A slow, outdated, or confusing website silently drives away customers every single day. Check if your site is making any of these critical mistakes.",
    date: "Jul 28, 2026",
    readTime: "4 min read",
    tag: "SEO & Performance",
    tagColor: "#DEDBC8",
    slug: "#blog-3",
  },
  {
    id: 4,
    title: "How to Rank #1 on Google in 2026 — Complete SEO Guide",
    excerpt:
      "SEO isn't dead — it's evolved. This complete guide covers everything from technical SEO, schema markup, page speed, and content strategy to help you dominate search rankings.",
    date: "Jul 20, 2026",
    readTime: "10 min read",
    tag: "SEO",
    tagColor: "#DEDBC8",
    slug: "#blog-4",
  },
  {
    id: 5,
    title: "The True Cost of a Cheap Website",
    excerpt:
      "Saving $50 on a website can cost you $5,000 in lost business. Here's the real mathematics of why investing in quality web architecture pays off.",
    date: "Jul 12, 2026",
    readTime: "6 min read",
    tag: "Business Growth",
    tagColor: "#DEDBC8",
    slug: "#blog-5",
  },
  {
    id: 6,
    title: "What Makes a Website Load in Under 1 Second?",
    excerpt:
      "Page speed is a Google ranking factor and directly impacts your conversion rate. Here's the exact tech stack and techniques I use to build sub-second websites.",
    date: "Jul 2, 2026",
    readTime: "8 min read",
    tag: "Web Development",
    tagColor: "#DEDBC8",
    slug: "#blog-6",
  },
];

export const BlogsPage = ({ onBack, onOpenPost }: BlogsPageProps) => {
  return (
    <div className="min-h-screen bg-black text-[#E1E0CC]">
      {/* ── Header Bar ── */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10 px-4 sm:px-8 py-4 flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>
        <div className="flex items-center gap-2.5">
          <img
            src="/saim-dev-logo.jpg"
            alt="Saim Dev"
            className="w-7 h-7 rounded-full object-cover border border-white/15"
          />
          <span className="text-sm font-semibold text-white">Saim Dev</span>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="px-4 sm:px-8 pt-16 pb-12 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/60 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Web Development & Business Growth Blog
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4 leading-tight">
            Insights &<br />
            <span className="text-primary">Growth Tips</span>
          </h1>
          <p className="text-white/50 text-base sm:text-lg max-w-xl leading-relaxed">
            Real strategies on web development, SEO, and turning your website
            into a business growth engine.
          </p>
        </motion.div>
      </section>

      {/* ── Blog Grid ── */}
      <section className="px-4 sm:px-8 pb-24 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogs.map((blog, i) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              onClick={() => onOpenPost && onOpenPost(blog.slug)}
              className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-white/25 hover:bg-white/[0.06] transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Glow on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all duration-500 pointer-events-none" />

              {/* Tag */}
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase text-primary/80 mb-4">
                <Tag className="w-2.5 h-2.5" />
                {blog.tag}
              </span>

              {/* Title */}
              <h2 className="text-base font-semibold text-white leading-snug mb-3 group-hover:text-primary transition-colors duration-200 flex-1">
                {blog.title}
              </h2>

              {/* Excerpt */}
              <p className="text-xs text-white/45 leading-relaxed mb-5 line-clamp-3">
                {blog.excerpt}
              </p>

              {/* Footer row */}
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/8">
                <div className="flex items-center gap-3 text-[10px] text-white/35">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {blog.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {blog.readTime}
                  </span>
                </div>
                <span className="flex items-center gap-1 text-[10px] font-semibold text-primary/70 group-hover:text-primary transition-colors">
                  Read <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Coming Soon notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-14 text-center"
        >
          <p className="text-white/25 text-sm">
            More articles coming soon — follow on{" "}
            <a
              href="https://wa.me/12498984111"
              target="_blank"
              rel="noreferrer"
              className="text-primary/60 hover:text-primary underline underline-offset-4 transition-colors"
            >
              WhatsApp
            </a>{" "}
            to stay updated.
          </p>
        </motion.div>
      </section>
    </div>
  );
};
