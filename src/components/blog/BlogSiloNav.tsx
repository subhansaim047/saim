import React from "react";
import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";
import { TopicSiloNavigator } from "@/components/ui/EditorialVisualPack";

export interface BlogSiloNavProps {
  currentSlug: string;
  category: "growth" | "compliance";
}

const GROWTH_POSTS = [
  {
    slug: "nextjs-website-development-cost-uk-us",
    href: "/blog/nextjs-website-development-cost-uk-us",
    title: "Next.js Website Development Cost UK & US (2026 Breakdown)",
    summary: "Real fixed-fee vs agency retainer TCO numbers across UK GBP and US USD builds."
  },
  {
    slug: "nextjs-app-router-vs-wordpress-uk-seo",
    href: "/blog/nextjs-app-router-vs-wordpress-uk-seo",
    title: "Next.js App Router vs WordPress for UK & US SEO",
    summary: "Compare Server Components, mobile Core Web Vitals, schema @graphs, and plugin risk."
  },
  {
    slug: "migrate-wordpress-webflow-to-nextjs-seo-guide",
    href: "/blog/migrate-wordpress-webflow-to-nextjs-seo-guide",
    title: "Migrating WordPress or Webflow to Next.js Without SEO Loss",
    summary: "Strict 301 redirect mapping, canonical parity, and automated prebuild guardrails."
  },
  {
    slug: "nextjs-website-development-guide-uk-us-startups",
    href: "/blog/nextjs-website-development-guide-uk-us-startups",
    title: "Next.js Website Development Guide for UK & US Startups",
    summary: "Select SSG, ISR, Headless CMS, and London/US edge deployment cleanly before launch."
  },
  {
    slug: "why-small-business-needs-website",
    href: "/blog/why-small-business-needs-website",
    title: "Why Small Businesses Need a Custom Website",
    summary: "Turn local searchers into customers with fast mobile performance and zero monthly platform lock-ins."
  },
  {
    slug: "free-website-for-local-business",
    href: "/blog/free-website-for-local-business",
    title: "Why 'Free' Website Builders Cost More in the Long Run",
    summary: "True cost breakdown of Wix, Squarespace, and Shopify recurring fees vs bespoke code ownership."
  },
  {
    slug: "small-business-website-packages-guide",
    href: "/blog/small-business-website-packages-guide",
    title: "Small Business Website Packages: UK Buyer Guide",
    summary: "Compare bespoke Next.js build deliverables, milestone protections, and full code ownership."
  }
];

const COMPLIANCE_POSTS = [
  {
    slug: "zero-commission-takeaway-online-ordering-system-uk-guide",
    href: "/blog/zero-commission-takeaway-online-ordering-system-uk-guide",
    title: "Zero Commission Takeaway Ordering System UK Blueprint",
    summary: "How UK takeaways replace 30% Just Eat fees with direct Apple Pay ordering and QR bag flyers."
  },
  {
    slug: "uk-food-hygiene-rating-scheme-5-star-checklist",
    href: "/blog/uk-food-hygiene-rating-scheme-5-star-checklist",
    title: "UK Food Hygiene Rating Scheme: 5-Star Checklist",
    summary: "The 3 inspection pillars assessed by Environmental Health Officers (EHO) and how to score top marks."
  },
  {
    slug: "natashas-law-ppds-food-labelling-guide",
    href: "/blog/natashas-law-ppds-food-labelling-guide",
    title: "Natasha's Law PPDS Food Labelling Complete Guide",
    summary: "Statutory rules for prepacked food for direct sale, 1.2mm x-height typography, and allergen bolding."
  },
  {
    slug: "how-to-create-compliant-14-allergen-matrix-uk-restaurants",
    href: "/blog/how-to-create-compliant-14-allergen-matrix-uk-restaurants",
    title: "How to Create a 14-Allergen Matrix for UK Restaurants",
    summary: "Step-by-step recipe audit workflow, cross-contamination protocols, and printable A4 matrix setup."
  },
  {
    slug: "level-2-food-hygiene-practice-test-kitchen-staff-guide",
    href: "/blog/level-2-food-hygiene-practice-test-kitchen-staff-guide",
    title: "Level 2 Food Hygiene Practice Test & Revision Guide",
    summary: "10 essential UK food hygiene exam questions and answers for chefs and kitchen handlers."
  },
  {
    slug: "how-to-write-haccp-plan-uk-food-business-step-by-step",
    href: "/blog/how-to-write-haccp-plan-uk-food-business-step-by-step",
    title: "How to Write a HACCP Plan for a UK Food Business",
    summary: "All 7 codex HACCP principles explained in plain English with Critical Control Point (CCP) examples."
  },
  {
    slug: "sfbb-daily-kitchen-opening-closing-checklist-guide",
    href: "/blog/sfbb-daily-kitchen-opening-closing-checklist-guide",
    title: "SFBB Daily Kitchen Opening & Closing Checklists",
    summary: "Master the 4 Cs and daily kitchen verification logs expected during unannounced council inspections."
  },
  {
    slug: "commercial-kitchen-food-cooling-temperature-guide",
    href: "/blog/commercial-kitchen-food-cooling-temperature-guide",
    title: "Commercial Kitchen Food Cooling & 90-Minute Rule",
    summary: "Safe chilling limits, danger-zone thresholds, and rapid cooling methods for UK commercial kitchens."
  },
  {
    slug: "mastering-food-cost-percentage-commercial-kitchen-calculator",
    href: "/blog/mastering-food-cost-percentage-commercial-kitchen-calculator",
    title: "How to Calculate Food Cost Percentage & Protect 70% GP",
    summary: "CoGS math, shrinkage allowance, menu engineering quadrants, and interactive GP% margin tools."
  },
  {
    slug: "how-to-scale-recipes-commercial-catering-batch-calculator",
    href: "/blog/how-to-scale-recipes-commercial-catering-batch-calculator",
    title: "How to Scale Commercial Recipes from 10 to 500 Portions",
    summary: "Recipe Conversion Factor (RCF) formulas, metric weight scaling, and non-linear seasoning rules."
  }
];

export const BlogSiloNav: React.FC<BlogSiloNavProps> = ({ currentSlug, category }) => {
  const isGrowth = category === "growth";
  const postsPool = isGrowth
    ? GROWTH_POSTS
    : [...COMPLIANCE_POSTS, GROWTH_POSTS[0], GROWTH_POSTS[1]];
  const siblingPosts = postsPool.filter((p) => p.slug !== currentSlug).slice(0, 6);

  return (
    <section className="my-10 p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2.5">
          <BookOpen className="w-5 h-5 text-primary" />
          <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            Related {isGrowth ? "Small Business Growth" : "Commercial Kitchen & Agency"} Guides
          </h2>
        </div>
        <Link
          href="/blogs"
          className="text-xs text-primary hover:underline font-semibold inline-flex items-center gap-1.5 transition-colors self-start sm:self-auto"
        >
          <span>All Articles in Saim Dev Knowledge Hub</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {siblingPosts.map((post) => (
          <Link
            key={post.slug}
            href={post.href}
            className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-primary/50 hover:bg-white/[0.07] transition-all flex flex-col justify-between group"
          >
            <div>
              <span className="text-[10px] font-mono uppercase text-primary/80 font-bold block mb-1">
                {isGrowth ? "Business Web Strategy" : "Food Safety Compliance"}
              </span>
              <h3 className="text-sm font-bold text-white group-hover:text-primary transition-colors mb-2 leading-snug">
                {post.title}
              </h3>
              <p className="text-xs text-white/60 leading-relaxed font-light">{post.summary}</p>
            </div>
            <div className="mt-4 pt-2.5 border-t border-white/5 flex items-center justify-between text-[11px] font-semibold text-primary">
              <span>Read Guide</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>
        ))}
      </div>

      <TopicSiloNavigator
        currentPath={`/blog/${currentSlug}`}
        theme="dark"
      />
    </section>
  );
};
