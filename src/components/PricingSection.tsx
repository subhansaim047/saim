import { useState } from "react";
import { Check, X, ChevronUp, ChevronDown } from "lucide-react";
import { FadeUp } from "./FadeUp";
import { PrimaryButton } from "./PrimaryButton";
import { SecondaryButton } from "./SecondaryButton";
import { SpotlightBorder } from "./SpotlightBorder";
import { cn } from "../lib/utils";

type Feature = { text: string; included: boolean };
type Plan = {
  name: string;
  price: string;
  originalPrice?: string;
  description: string;
  features: Feature[];
  featured?: boolean;
  badge?: string;
  bg: string;
};

const plans: Plan[] = [
  {
    name: "Starter Plan",
    price: "$500 – $1,000",
    
    description: "Delivery: 5–7 Days. Essential business presence.",
    bg: "#161616",
    features: [
      { text: "Up to 5 Pages", included: true },
      { text: "Custom Website Design", included: true },
      { text: "Mobile Responsive Design", included: true },
      { text: "Contact Form", included: true },
      { text: "WhatsApp Integration", included: true },
      { text: "Google Maps Integration", included: true },
      { text: "Basic SEO Setup", included: true },
      { text: "Fast Loading Website", included: true },
      { text: "Social Media Links", included: true },
      { text: "SSL Setup Assistance", included: true },
      { text: "2 Revisions", included: true },
      { text: "14 Days Support", included: true },
    ],
  },
  {
    name: "Business Plan",
    price: "$1,000 – $5,000",
    
    description: "Delivery: 7–10 Days. Full growth engine.",
    bg: "#252525",
    features: [
      { text: "Up to 15 Pages", included: true },
      { text: "Premium Custom UI/UX Design", included: true },
      { text: "Advanced Animations & Interactions", included: true },
      { text: "Conversion-Focused Layout", included: true },
      { text: "Complete On-Page SEO", included: true },
      { text: "Blog System Setup", included: true },
      { text: "Google Analytics Integration", included: true },
      { text: "Google Search Console Setup", included: true },
      { text: "Lead Generation Forms", included: true },
      { text: "Custom Contact Forms", included: true },
      { text: "Advanced Speed Optimization", included: true },
      { text: "AI Chatbot Integration", included: true },
      { text: "Portfolio / Gallery System", included: true },
      { text: "FAQ Section", included: true },
      { text: "Testimonials Section", included: true },
      { text: "Newsletter Signup Integration", included: true },
      { text: "Social Media Integration", included: true },
      { text: "Priority Support", included: true },
      { text: "5 Revisions", included: true },
      { text: "30 Days Support", included: true },
    ],
    featured: true,
    badge: "Best Value",
  },
];

const PricingCard = ({ plan }: { plan: Plan }) => {
  const [expanded, setExpanded] = useState(false);

  const INITIAL_COUNT = 5;
  const visibleFeatures = expanded
    ? plan.features
    : plan.features.slice(0, INITIAL_COUNT);
  const remainingCount = plan.features.length - INITIAL_COUNT;

  return (
    <SpotlightBorder
      radius="2xl"
      size={460}
      intensity={0.5}
      className="relative h-full p-2 sm:p-3"
    >
      <div
        className="relative flex h-full flex-col rounded-2xl border border-white/10 p-7 sm:p-8"
        style={{ backgroundColor: plan.bg }}
      >
        {plan.badge && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-white/15 bg-white px-3 py-1 text-xs font-medium text-black shadow-lg">
            {plan.badge}
          </div>
        )}

        <FadeUp delay={0}>
          <div className="text-[11px] uppercase tracking-[0.2em] text-foreground/60">
            {plan.name}
          </div>
        </FadeUp>
        <div className="mt-3 border-t border-white/10" />

        <FadeUp delay={0.1}>
          <div className="mt-8 flex items-baseline gap-2">
            <span className="text-3xl sm:text-[2.25rem] leading-none font-normal tracking-tight text-foreground">
              {plan.price}
            </span>
            {plan.originalPrice && (
              <span className="text-lg text-foreground/40 line-through">
                ${plan.originalPrice}
              </span>
            )}
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="mt-3 text-sm leading-relaxed text-foreground/60">
            {plan.description}
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="mt-6">
            {plan.featured ? (
              <PrimaryButton
                href="https://wa.me/12498984111"
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                className="w-full"
              >
                Get Started
              </PrimaryButton>
            ) : (
              <SecondaryButton
                href="https://wa.me/12498984111"
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                className="w-full"
              >
                Get Started
              </SecondaryButton>
            )}
          </div>
        </FadeUp>

        <FadeUp delay={0.4}>
          <ul className="mt-6 flex flex-1 flex-col gap-1">
            {visibleFeatures.map((f, i) => (
              <li
                key={f.text}
                className={cn(
                  "flex items-center gap-3 py-3 text-sm transition-all duration-300",
                  i !== 0 && "border-t border-white/10",
                  f.included ? "text-foreground/85" : "text-foreground/40"
                )}
              >
                <span
                  className={cn(
                    "flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border",
                    f.included
                      ? "border-white/20 bg-white/[0.06]"
                      : "border-white/10 bg-transparent"
                  )}
                >
                  {f.included ? (
                    <Check className="w-3 h-3 text-foreground" />
                  ) : (
                    <X className="w-3 h-3 text-foreground/50" />
                  )}
                </span>
                {f.text}
              </li>
            ))}
          </ul>

          {remainingCount > 0 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-4 flex items-center justify-center gap-1.5 text-xs text-foreground/70 hover:text-white font-medium transition-colors cursor-pointer py-2.5 w-full border-t border-white/10"
            >
              <span>
                {expanded ? "Show Less" : `View More (+${remainingCount} features)`}
              </span>
              {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          )}
        </FadeUp>
      </div>
    </SpotlightBorder>
  );
};

export const PricingSection = () => {
  return (
    <section id="pricing" className="relative w-full bg-background py-12 sm:py-16">
      <div className="mx-auto max-w-[1080px] px-4 sm:px-6">
        {/* HEADER */}
        <div className="mb-14 flex flex-col items-start gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <FadeUp>
              <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-landing-surface border border-white/10 px-3 py-1 text-xs text-foreground/80 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-white/90" />
                Pricing
              </span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-normal tracking-[-0.02em] leading-[1.05] text-foreground">
                Clear pricing plans
                <br className="hidden sm:block" /> that scale with you.
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <p className="max-w-sm text-sm sm:text-base text-foreground/60">
              Transparent, high-value web architecture. Pick the plan that fits how far
              you want to take your business online.
            </p>
          </FadeUp>
        </div>

        {/* CARDS */}
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-2 items-start">
          {plans.map((p) => (
            <PricingCard key={p.name} plan={p} />
          ))}
        </div>
      </div>
    </section>
  );
};
