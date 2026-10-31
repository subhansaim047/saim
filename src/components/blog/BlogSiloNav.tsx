import React from "react";
import Link from "next/link";
import { BookOpen, ArrowRight, ArrowLeft, ShieldCheck, Calculator, Tag, FileText } from "lucide-react";

export interface BlogSiloNavProps {
  currentSlug: string;
  category: "growth" | "compliance";
}

const GROWTH_POSTS = [
  {
    slug: "why-small-business-needs-website",
    href: "/blog/why-small-business-needs-website",
    title: "Why Small Businesses Need a Custom Website",
    summary: "Turn local searchers into customers with sub-second mobile performance and zero monthly platform lock-ins."
  },
  {
    slug: "free-website-for-local-business",
    href: "/blog/free-website-for-local-business",
    title: "Why 'Free' Website Builders Cost More in the Long Run",
    summary: "True cost breakdown of Wix, Squarespace, and Shopify recurring fees vs bespoke code ownership."
  },
  {
    slug: "50-percent-off-agency-launch",
    href: "/blog/50-percent-off-agency-launch",
    title: "Saim Dev Agency Launch: 50% Off Fixed-Price Websites",
    summary: "Transparent bespoke web architecture from £250 for UK small businesses and local operators."
  }
];

const COMPLIANCE_POSTS = [
  {
    slug: "how-to-create-compliant-14-allergen-matrix-uk-restaurants",
    href: "/blog/how-to-create-compliant-14-allergen-matrix-uk-restaurants",
    title: "How to Build a Compliant 14-Allergen Matrix",
    summary: "Step-by-step recipe audits, cross-contact prevention, and statutory FIR 2014 compliance."
  },
  {
    slug: "natashas-law-ppds-food-labelling-guide",
    href: "/blog/natashas-law-ppds-food-labelling-guide",
    title: "Natasha's Law PPDS Food Labelling Complete Guide",
    summary: "Statutory rules for prepacked food for direct sale, 1.2mm x-height typography, and allergen bolding."
  },
  {
    slug: "uk-food-hygiene-rating-scheme-5-star-checklist",
    href: "/blog/uk-food-hygiene-rating-scheme-5-star-checklist",
    title: "UK Food Hygiene Rating Scheme: 5-Star Checklist",
    summary: "The 3 inspection pillars assessed by Environmental Health Officers (EHO) and how to score top marks."
  },
  {
    slug: "how-to-write-haccp-plan-uk-food-business-step-by-step",
    href: "/blog/how-to-write-haccp-plan-uk-food-business-step-by-step",
    title: "How to Write a HACCP Plan: Step-by-Step UK Guide",
    summary: "The 7 Codex Alimentarius principles and Critical Control Points (CCP) simplified for takeaways."
  },
  {
    slug: "sfbb-daily-kitchen-opening-closing-checklist-guide",
    href: "/blog/sfbb-daily-kitchen-opening-closing-checklist-guide",
    title: "SFBB Daily Kitchen Opening & Closing Log Routine",
    summary: "Safer Food Better Business opening/closing checks, fridge logs, and hygiene management diaries."
  },
  {
    slug: "mastering-food-cost-percentage-commercial-kitchen-calculator",
    href: "/blog/mastering-food-cost-percentage-commercial-kitchen-calculator",
    title: "Mastering Commercial Food Cost % and Gross Profit Margins",
    summary: "Portion control math, butcher trimming shrinkage, and net-of-20%-VAT pricing formulas."
  },
  {
    slug: "commercial-kitchen-food-cooling-temperature-guide",
    href: "/blog/commercial-kitchen-food-cooling-temperature-guide",
    title: "Commercial Kitchen Safe Cooling Temperatures Guide",
    summary: "The UK 90-minute cooling rule, blast chiller protocols, and two-stage cooling records."
  },
  {
    slug: "how-to-scale-recipes-commercial-catering-batch-calculator",
    href: "/blog/how-to-scale-recipes-commercial-catering-batch-calculator",
    title: "How to Scale Catering Recipes: Batch Yield Science",
    summary: "Non-linear seasonings, liquid evaporation rates, and commercial baker's percentages."
  },
  {
    slug: "level-2-food-hygiene-practice-test-kitchen-staff-guide",
    href: "/blog/level-2-food-hygiene-practice-test-kitchen-staff-guide",
    title: "Level 2 Food Hygiene Practice Test & Kitchen Staff Guide",
    summary: "25 statutory examination practice questions covering food safety, cross-contamination, and bacteria."
  }
];

export const BlogSiloNav: React.FC<BlogSiloNavProps> = ({ currentSlug, category }) => {
  const isGrowth = category === "growth";
  const postsPool = isGrowth ? GROWTH_POSTS : COMPLIANCE_POSTS;
  const siblingPosts = postsPool.filter((p) => p.slug !== currentSlug).slice(0, 3);

  return (
    <section className="my-10 p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2.5">
          <BookOpen className="w-5 h-5 text-primary" />
          <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            Related {isGrowth ? "Small Business Growth" : "Commercial Kitchen Compliance"} Guides
          </h2>
        </div>
        <Link
          href="/blogs"
          className="text-xs text-primary hover:underline font-semibold inline-flex items-center gap-1.5 transition-colors self-start sm:self-auto"
        >
          <span>All 12 Articles in Saim Dev Knowledge Hub</span>
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
    </section>
  );
};
