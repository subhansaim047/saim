"use client";

import Link from "next/link";
import { SiteFooter } from "./SiteFooter";
import { RhHeader } from "./rh/RhHeader";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Tag, ArrowRight } from "lucide-react";
import { BehindTheLensBlog } from "./BehindTheLensBlog";

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
    id: 16,
    title: "Next.js Website Development Cost in the UK & US (2026 Breakdown)",
    excerpt: "Compare real UK GBP (£250–£1,450) and US USD ($300–$1,850) fixed-milestone Next.js build quotes vs traditional agency retainers and 24-month CMS TCO.",
    date: "Nov 16, 2026",
    readTime: "10 min read",
    tag: "Next.js Pricing",
    category: "web",
    tagColor: "#BAFF00",
    url: "/blog/nextjs-website-development-cost-uk-us",
  },
  {
    id: 15,
    title: "Next.js App Router vs WordPress for UK & US Google SEO",
    excerpt: "Deep technical breakdown comparing React Server Components, mobile Core Web Vitals, JSON-LD @graph schemas, and plugin security vs WordPress.",
    date: "Nov 16, 2026",
    readTime: "11 min read",
    tag: "Next.js SEO",
    category: "web",
    tagColor: "#5C8DFF",
    url: "/blog/nextjs-app-router-vs-wordpress-uk-seo",
  },
  {
    id: 14,
    title: "How to Migrate WordPress or Webflow to Next.js Without Losing Google Rankings",
    excerpt: "Step-by-step zero-traffic-loss blueprint covering permanent 301 redirect matrices, canonical parity, sitemap cleanup, and pre-cutover verification.",
    date: "Nov 16, 2026",
    readTime: "12 min read",
    tag: "SEO Migration",
    category: "web",
    tagColor: "#38BDF8",
    url: "/blog/migrate-wordpress-webflow-to-nextjs-seo-guide",
  },
  {
    id: 13,
    title: "Next.js Website Development Blueprint for UK & US Startups (2026)",
    excerpt: "Select cleanly between Static SSG, ISR, Headless CMS, dual GBP/USD signals, and London/US Edge PoPs before launching your marketing flagship.",
    date: "Nov 16, 2026",
    readTime: "10 min read",
    tag: "Architecture",
    category: "web",
    tagColor: "#BAFF00",
    url: "/blog/nextjs-website-development-guide-uk-us-startups",
  },
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
    category: "hygiene",
    tagColor: "#EF4444",
    url: "/blog/natashas-law-ppds-food-labelling-guide",
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
    title: "Why Every Small Business Needs a Professional Website",
    excerpt: "97% of consumers search online before making a purchase. If your business isn't showing up professionally, you're handing customers straight to your competitors — every single day.",
    date: "Aug 11, 2026",
    readTime: "8 min read",
    tag: "Business Growth",
    category: "web",
    tagColor: "#DEDBC8",
    url: "/blog/why-small-business-needs-website",
  },
];

const CATEGORIES = [
  { id: "all", label: "All Guides", count: blogs.length },
  { id: "hygiene", label: "Food Hygiene & Natasha's Law", count: blogs.filter((b) => b.category === "hygiene").length },
  { id: "web", label: "Web Strategy & Growth", count: blogs.filter((b) => b.category === "web").length },
];

export const BlogsPage = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredBlogs =
    selectedCategory === "all" ? blogs : blogs.filter((b) => b.category === selectedCategory);

  const scrollToAllGuides = () => {
    const el = document.getElementById("all-posts");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="rh-page min-h-screen bg-[#F5F5F7] text-[#0D0D0D] selection:bg-[#BAFF00] selection:text-[#0D0D0D]">
      <RhHeader theme="light" />
      <main>
      <div className="pt-[88px]">
        {/* ── Behind the Lens Photography Blog Section ── */}
        <BehindTheLensBlog onViewAllClick={scrollToAllGuides} />
      </div>

      {/* ── Additional Web & Operational Guides Directory ── */}
      <section id="all-posts" className="bg-[#fcfcfc] border-t border-[#f0f0f0] px-4 sm:px-8 py-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-[#ececec]">
            <div>
              <span className="inline-block bg-[#f4f4f4] text-[#555] text-xs font-semibold px-2.5 py-1 rounded-md mb-2">
                Knowledge Library
              </span>
              <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#0a0a0a]" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Restaurant Tech &amp; Web Development Guides
              </h1>
              <p className="text-sm text-gray-500 mt-1 max-w-lg">
                Practical operational guides and engineering playbooks on Next.js website development, technical SEO migrations, Natasha&apos;s Law 14-allergen compliance, and commercial profitability for UK &amp; US business owners.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? "bg-black text-white font-semibold shadow-sm"
                      : "bg-[#f0f0f0] text-gray-600 hover:text-black hover:bg-[#e4e4e4]"
                  }`}
                >
                  {cat.label} ({cat.count})
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogs.map((blog, i) => (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="group relative flex flex-col rounded-2xl border border-[#ececec] bg-white p-6 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <Link href={blog.url} prefetch={false} className="absolute inset-0 z-10" aria-label={blog.title}>
                  <span className="sr-only">{blog.title}</span>
                </Link>

                {/* Tag */}
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase text-gray-500 mb-3">
                  <Tag className="w-3 h-3 text-gray-400" />
                  {blog.tag}
                </span>

                {/* Title */}
                <h4 className="text-[17px] font-semibold text-[#0a0a0a] leading-snug mb-2.5 group-hover:text-black transition-colors duration-200 flex-1" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {blog.title}
                </h4>

                {/* Excerpt */}
                <p className="text-xs text-gray-500 leading-relaxed mb-5 line-clamp-3">
                  {blog.excerpt}
                </p>

                {/* Footer row */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#f4f4f4]">
                  <div className="flex items-center gap-3 text-[11px] text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {blog.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {blog.readTime}
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-black flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read Guide
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      </main>

      {/* ── Clean Light Footer ── */}
      <SiteFooter theme="light" />
    </div>
  );
};

export default BlogsPage;
