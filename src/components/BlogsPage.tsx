"use client";

import Link from "next/link";
import { SiteFooter } from "./SiteFooter";
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
  { id: "hygiene", label: "Food Hygiene & SFBB", count: blogs.filter((b) => b.category === "hygiene").length },
  { id: "allergens", label: "Allergens & Natasha's Law", count: blogs.filter((b) => b.category === "allergens").length },
  { id: "economics", label: "Kitchen Economics & Batching", count: blogs.filter((b) => b.category === "economics").length },
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
    <div className="min-h-screen bg-white text-[#0a0a0a]">
      {/* ── Top Navigation Bar ── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#f0f0f0] px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2.5 hover:opacity-80 transition-opacity cursor-pointer text-left"
          title="Go to Homepage"
        >
          <img
            src="/saim-dev-logo.jpg"
            alt="Saim Dev - Full Stack Web Developer & Restaurant Tech Specialist"
            width={28}
            height={28}
            loading="lazy"
            decoding="async"
            className="w-7 h-7 rounded-full object-cover border border-gray-200"
          />
          <span className="text-sm font-semibold text-black">Saim Dev</span>
        </button>
      </header>

      {/* ── Behind the Lens Photography Blog Section ── */}
      <BehindTheLensBlog onViewAllClick={scrollToAllGuides} />

      {/* ── Additional Web & Operational Guides Directory ── */}
      <section id="all-posts" className="bg-[#fcfcfc] border-t border-[#f0f0f0] px-4 sm:px-8 py-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-[#ececec]">
            <div>
              <span className="inline-block bg-[#f4f4f4] text-[#555] text-xs font-semibold px-2.5 py-1 rounded-md mb-2">
                Knowledge Library
              </span>
              <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#0a0a0a]" style={{ fontFamily: 'Outfit, sans-serif' }}>
                All Published Guides &amp; Insights
              </h1>
              <p className="text-sm text-gray-500 mt-1 max-w-lg">
                Practical, in-depth playbooks on web development, small business growth, food safety compliance, and commercial kitchen systems.
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
                <Link href={blog.url} className="absolute inset-0 z-10" aria-label={blog.title}>
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

      {/* ── Clean Light Footer ── */}
      <SiteFooter theme="light" />
    </div>
  );
};

export default BlogsPage;
