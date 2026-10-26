"use client";

import Link from "next/link";
import { SiteFooter } from "./SiteFooter";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Tag, ArrowRight } from "lucide-react";

interface BlogItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tag: string;
  category: "hygiene" | "allergens" | "economics" | "web";
  tagColor: string;
  url: string;
}

const blogs: BlogItem[] = [
  {
    id: 12,
    title: "How to Get a 5-Star Food Hygiene Rating in the UK: Complete EHO Inspection Checklist",
    excerpt: "Comprehensive guide for independent UK restaurants, takeaways, and caterers on passing council Environmental Health inspections across food handling, facilities, and HACCP records.",
    date: "Oct 25, 2026",
    readTime: "8 min read",
    tag: "5-Star Rating",
    category: "hygiene",
    tagColor: "#10B981",
    url: "/blog/uk-food-hygiene-rating-scheme-5-star-checklist",
  },
  {
    id: 11,
    title: "Natasha's Law PPDS Food Labelling Guide for UK Takeaways, Cafes & Delis",
    excerpt: "Learn what qualifies as Pre-Packed for Direct Sale (PPDS) food and master mandatory rules for ingredient lists and allergen highlighting under UK law.",
    date: "Oct 25, 2026",
    readTime: "7 min read",
    tag: "Natasha's Law",
    category: "allergens",
    tagColor: "#EF4444",
    url: "/blog/natashas-law-ppds-food-labelling-guide",
  },
  {
    id: 10,
    title: "Commercial Kitchen Food Cooling Guide: The UK 90-Minute Rule & Temperature Limits",
    excerpt: "Everything UK restaurant and takeaway managers need to know about rapidly cooling cooked food below 8°C in 90 minutes and avoiding the Danger Zone.",
    date: "Oct 25, 2026",
    readTime: "7 min read",
    tag: "Temperature Control",
    category: "hygiene",
    tagColor: "#3B82F6",
    url: "/blog/commercial-kitchen-food-cooling-temperature-guide",
  },
  {
    id: 9,
    title: "How to Create a Compliant 14-Allergen Matrix for UK Restaurants & Takeaways",
    excerpt: "Step-by-step masterclass on auditing recipes, preventing cross-contamination, and building a compliant 14-allergen matrix aligned with FSA guidance under Natasha's Law. Free digital generator included.",
    date: "Oct 23, 2026",
    readTime: "8 min read",
    tag: "Allergen Compliance",
    category: "allergens",
    tagColor: "#EF4444",
    url: "/blog/how-to-create-compliant-14-allergen-matrix-uk-restaurants",
  },
  {
    id: 8,
    title: "How to Calculate Food Cost Percentage & Protect 70%+ Gross Margins in Your Commercial Kitchen",
    excerpt: "Learn the exact formula top restaurants use to calculate food cost percentage and lock in 70%+ margins. Use our free interactive commercial food cost calculator.",
    date: "Oct 23, 2026",
    readTime: "9 min read",
    tag: "Kitchen Economics",
    category: "economics",
    tagColor: "#10B981",
    url: "/blog/mastering-food-cost-percentage-commercial-kitchen-calculator",
  },
  {
    id: 7,
    title: "The Commercial Kitchen Guide to Recipe Scaling: How to Scale from 10 to 500 Portions Without Taste Breakdown",
    excerpt: "Why linear math destroys bulk catering recipes, how to handle non-linear spices and liquids, and how to generate standardized chef prep cards with our free batch scaler.",
    date: "Oct 23, 2026",
    readTime: "8 min read",
    tag: "Batch Catering",
    category: "economics",
    tagColor: "#F59E0B",
    url: "/blog/how-to-scale-recipes-commercial-catering-batch-calculator",
  },
  {
    id: 6,
    title: "SFBB Opening & Closing Checklists: The Daily Kitchen Routine That Helps You Prepare for a 5-Star Food Hygiene Rating",
    excerpt: "Discover the essential SFBB opening and closing hygiene checks every UK kitchen must log daily. Prevent cross-contamination and pass EHO audits with our free digital checklist.",
    date: "Oct 23, 2026",
    readTime: "8 min read",
    tag: "Food Hygiene",
    category: "hygiene",
    tagColor: "#3B82F6",
    url: "/blog/sfbb-daily-kitchen-opening-closing-checklist-guide",
  },
  {
    id: 5,
    title: "How to Write a HACCP Plan for Your UK Food Business (7 Principles + Free Plan Builder)",
    excerpt: "A practical, plain-English guide to creating a HACCP plan aligned with FSA standards for catering and takeaway businesses. Build your hazard analysis and CCP tables with our free tool.",
    date: "Oct 23, 2026",
    readTime: "10 min read",
    tag: "HACCP Law",
    category: "hygiene",
    tagColor: "#6366F1",
    url: "/blog/how-to-write-haccp-plan-uk-food-business-step-by-step",
  },
  {
    id: 4,
    title: "Level 2 Food Hygiene Practice Test: 10 Critical Questions Every Kitchen Worker & Chef Must Pass",
    excerpt: "Test your kitchen team with our Level 2 Food Hygiene practice test. Review temperature danger zones, cross-contamination rules, and UK food safety laws with our free interactive quiz.",
    date: "Oct 23, 2026",
    readTime: "7 min read",
    tag: "Staff Training",
    category: "hygiene",
    tagColor: "#A855F7",
    url: "/blog/level-2-food-hygiene-practice-test-kitchen-staff-guide",
  },
  {
    id: 3,
    title: "I Just Launched My Web Agency — And I'm Offering 50% Off to My First Clients",
    excerpt: "Premium web development at half the price. Find out why I am offering this massive discount and how it can act as the ultimate growth engine for your business.",
    date: "Sep 20, 2026",
    readTime: "5 min read",
    tag: "Launch Special",
    category: "web",
    tagColor: "#F59E0B",
    url: "/blog/50-percent-off-agency-launch",
  },
  {
    id: 2,
    title: "I'm Building 5 Free Websites for Local Businesses — Here's Why",
    excerpt: "I'm offering FREE websites to 5 local businesses that want to grow. No strings attached — just honest feedback in return. Find out if you qualify.",
    date: "Sep 20, 2026",
    readTime: "7 min read",
    tag: "Special Offer",
    category: "web",
    tagColor: "#DEDBC8",
    url: "/blog/free-website-for-local-business",
  },
  {
    id: 1,
    title: "Why Every Small Business Needs a Professional Website in 2026",
    excerpt: "97% of consumers search online before making a purchase. If your business isn't showing up professionally, you're handing customers straight to your competitors — every single day.",
    date: "Aug 11, 2026",
    readTime: "8 min read",
    tag: "Business Growth",
    category: "web",
    tagColor: "#DEDBC8",
    url: "/blog/why-small-business-needs-website-2026",
  },
];

const CATEGORIES = [
  { id: "all", label: "All Guides", count: blogs.length },
  { id: "hygiene", label: "Food Hygiene & SFBB", count: blogs.filter(b => b.category === "hygiene").length },
  { id: "allergens", label: "Allergens & Natasha's Law", count: blogs.filter(b => b.category === "allergens").length },
  { id: "economics", label: "Kitchen Economics & Batching", count: blogs.filter(b => b.category === "economics").length },
  { id: "web", label: "Web Strategy & Growth", count: blogs.filter(b => b.category === "web").length },
];

export const BlogsPage = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredBlogs = selectedCategory === "all"
    ? blogs
    : blogs.filter(b => b.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-[#E1E0CC]">
      {/* ── Header Bar ── */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10 px-4 sm:px-8 py-4 flex items-center justify-between">
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>
        <button onClick={() => router.push("/")} className="flex items-center gap-2.5 hover:opacity-80 transition-opacity cursor-pointer text-left" title="Go to Homepage">
          <img
            src="/saim-dev-logo.jpg"
            alt="Saim Dev"
            className="w-7 h-7 rounded-full object-cover border border-white/15"
          />
          <span className="text-sm font-semibold text-white">Saim Dev</span>
        </button>
      </header>

      {/* ── Hero ── */}
      <section className="px-4 sm:px-8 pt-16 pb-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Visible Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-1.5 text-xs text-white/50 flex-wrap">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li aria-hidden="true" className="text-white/30">/</li>
              <li className="text-white font-medium" aria-current="page">
                Blog
              </li>
            </ol>
          </nav>

          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/60 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Commercial Kitchen Systems &amp; Web Growth Blog
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4 leading-tight">
            Hospitality Insights &amp;<br />
            <span className="text-primary">Kitchen Growth Systems</span>
          </h1>
          <p className="text-white/50 text-base sm:text-lg max-w-xl leading-relaxed">
            Practical operational playbooks on food safety law, EHO compliance audits, 
            recipe portion economics, and web ordering systems.
          </p>
        </motion.div>
      </section>

      {/* ── Topical Silo Banners ── */}
      <section className="px-4 sm:px-8 pb-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold block mb-1">
                Topical Silo A &bull; Web Engineering
              </span>
              <h2 className="text-base font-semibold text-white mb-1.5">
                Web Development &amp; Small Business Growth
              </h2>
              <p className="text-xs text-white/60 leading-relaxed mb-3">
                Insights on Next.js performance, local SEO, mobile conversions, and commission-free ordering systems.
              </p>
            </div>
            <Link
              href="/services"
              className="text-xs font-medium text-amber-400 hover:text-amber-300 inline-flex items-center gap-1.5 transition-colors"
            >
              <span>Explore Fixed-Price Web Services from £250</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold block mb-1">
                Topical Silo B &bull; Hospitality Compliance
              </span>
              <h2 className="text-base font-semibold text-white mb-1.5">
                Food Safety, SFBB &amp; Kitchen Operations
              </h2>
              <p className="text-xs text-white/60 leading-relaxed mb-3">
                Practical playbooks on FSA standards, 14 statutory allergens, Natasha&apos;s Law, and 5-star EHO audits.
              </p>
            </div>
            <Link
              href="/tools"
              className="text-xs font-medium text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1.5 transition-colors"
            >
              <span>Access 160+ Free Food Safety Tools &amp; Logs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Category Filter Links ── */}
      <section className="px-4 sm:px-8 pb-10 max-w-5xl mx-auto">
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-primary text-black font-semibold shadow-md shadow-primary/20"
                  : "bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20"
              }`}
            >
              {cat.label} ({cat.count})
            </button>
          ))}
        </div>
      </section>

      {/* ── Blog Grid ── */}
      <section className="px-4 sm:px-8 pb-24 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredBlogs.map((blog, i) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-white/25 hover:bg-white/[0.06] transition-all duration-300 overflow-hidden shadow-lg"
            >
              <Link href={blog.url} className="absolute inset-0 z-10" aria-label={blog.title}>
                <span className="sr-only">{blog.title}</span>
              </Link>
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
                <span className="text-[10px] font-bold text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Guide
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <SiteFooter theme="dark" />
    </div>
  );
};
