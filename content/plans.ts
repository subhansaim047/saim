export type Currency = "GBP" | "EUR" | "USD";

export interface PlanFeature {
  text: string;
  included: boolean;
}

export interface Plan {
  id: string;
  name: string;
  prices: Record<Currency, string>;
  description: string;
  bg: string;
  features: PlanFeature[];
  featured?: boolean;
  badge?: string;
}

export const PLANS: Plan[] = [
  {
    id: "landing",
    name: "Landing Page",
    prices: {
      GBP: "£250",
      EUR: "€290",
      USD: "$300",
    },
    description: "High-converting 1-page online presence for single offers & local service campaigns.",
    bg: "#0f0f0f",
    features: [
      { text: "1 High-Converting Page", included: true },
      { text: "Mobile-First Fast Design", included: true },
      { text: "Lead Capture & Contact Form", included: true },
      { text: "Direct WhatsApp & Call Integration", included: true },
      { text: "Google Maps Embed", included: true },
      { text: "Core SEO & Social Graph Setup", included: true },
      { text: "Fast Loading Architecture", included: true },
      { text: "1 Round of Refinements", included: true },
      { text: "7 Days Post-Launch Support", included: true },
    ],
  },
  {
    id: "starter",
    name: "Starter Plan",
    prices: {
      GBP: "£390",
      EUR: "€460",
      USD: "$500",
    },
    description: "No monthly lock-in. Essential high-performance digital presence for local businesses.",
    bg: "#161616",
    features: [
      { text: "Up to 5 Custom Pages", included: true },
      { text: "Next.js 16 Static Performance", included: true },
      { text: "Mobile Responsive & Accessible", included: true },
      { text: "Lead Generation & Contact Forms", included: true },
      { text: "Direct WhatsApp & Call Buttons", included: true },
      { text: "Google Maps & Local Schema", included: true },
      { text: "Complete On-Page SEO Setup", included: true },
      { text: "Optimised Google PageSpeed Score", included: true },
      { text: "SSL & Cloud Hosting Setup", included: true },
      { text: "Privacy-Conscious Web Architecture", included: true },
      { text: "2 Rounds of Revisions", included: true },
      { text: "14 Days Dedicated Support", included: true },
    ],
  },
  {
    id: "business",
    name: "Business Plan",
    prices: {
      GBP: "£790",
      EUR: "€920",
      USD: "$999",
    },
    description: "No monthly retainers. Complete growth engine engineered to rank effectively in local search.",
    bg: "#252525",
    features: [
      { text: "Up to 15 Pages & Landing Sections", included: true },
      { text: "Bespoke Custom UI/UX & Brand Identity", included: true },
      { text: "Next.js Turbopack Performance", included: true },
      { text: "Conversion-Focused Architecture", included: true },
      { text: "Comprehensive Structured Schema (JSON-LD)", included: true },
      { text: "Dynamic Blog / Editorial CMS System", included: true },
      { text: "Google Analytics 4 & Search Console Setup", included: true },
      { text: "Advanced Speed & Core Web Vitals Optimization", included: true },
      { text: "AI Chatbot / WhatsApp Lead Funnel", included: true },
      { text: "Interactive Case Studies / Gallery System", included: true },
      { text: "FAQ Rich Snippet Section", included: true },
      { text: "PECR Cookie Banner & Privacy Ready", included: true },
      { text: "Priority Fast-Track Turnaround", included: true },
      { text: "5 Revisions Included", included: true },
      { text: "30 Days Dedicated Support", included: true },
    ],
    featured: true,
    badge: "Most Popular in UK/EU",
  },
];

export const BUDGET_OPTIONS = [
  "Landing page (from £250)",
  "Starter (from £390)",
  "Business (from £790)",
  "Custom or web app (quote)",
  "Not sure yet",
] as const;

export function getBudgetOptions(currency: Currency = "GBP"): string[] {
  const landing = PLANS.find((p) => p.id === "landing")?.prices[currency] || "£250";
  const starter = PLANS.find((p) => p.id === "starter")?.prices[currency] || "£390";
  const business = PLANS.find((p) => p.id === "business")?.prices[currency] || "£790";

  return [
    `Landing page (from ${landing})`,
    `Starter (from ${starter})`,
    `Business (from ${business})`,
    "Custom or web app (quote)",
    "Not sure yet",
  ];
}
