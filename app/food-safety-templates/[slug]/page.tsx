import { Metadata } from "next";
import { notFound } from "next/navigation";
import { FOOD_SAFETY_TEMPLATES, getTemplateBySlug } from "@/data/saim_templates";
import { TemplateDetailPage } from "@/components/TemplateDetailPage";
import { CORE_PAGES_METADATA } from "@/data/core_metadata";
import pagePlanData from "@/data/page_plan.json";
import { isRouteNeedsReplacement } from "@/lib/originality-guard";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const pagePlan: Record<
  string,
  {
    bucket: "KEEP" | "IMPROVE" | "MERGE" | "NOINDEX";
    target_canonical_slug: string;
    reason: string;
  }
> = pagePlanData as any;

export async function generateStaticParams() {
  return FOOD_SAFETY_TEMPLATES.map((t) => ({
    slug: t.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);

  if (!template) {
    return {
      title: "Template Not Found | Saim Dev",
      robots: { index: false, follow: false },
    };
  }

  const plan = pagePlan[slug] || {
    bucket: "NOINDEX",
    target_canonical_slug: slug,
    reason: "Default plan",
  };

  const needsReplacement = isRouteNeedsReplacement(`/food-safety-templates/${slug}`);
  const isIndexable = !needsReplacement && (plan.bucket === "KEEP" || plan.bucket === "IMPROVE");
  const canonicalSlug = plan.bucket === "MERGE" ? plan.target_canonical_slug : slug;
  const canonicalUrl = `https://www.saimdev.site/food-safety-templates/${canonicalSlug}`;

  // Check if hand-crafted core metadata exists
  const coreMeta = CORE_PAGES_METADATA[slug];

  const pageTitle = coreMeta ? coreMeta.title : `${template.title} | Free Food Safety Download | Saim Dev`;
  const pageDesc = coreMeta ? coreMeta.desc : template.desc;

  return {
    title: pageTitle,
    description: pageDesc,
    robots: {
      index: isIndexable,
      follow: true,
    },
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDesc,
      url: canonicalUrl,
      siteName: "Saim Dev",
      locale: "en_GB",
      type: "website",
      images: [
        {
          url: "https://www.saimdev.site/og-image.png",
          width: 1200,
          height: 630,
          alt: `${template.title} - Saim Dev`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDesc,
      images: ["https://www.saimdev.site/og-image.png"],
    },
  };
}

export default async function TemplateDetailRoute({ params }: PageProps) {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);

  if (!template) {
    notFound();
  }

  const coreMeta = CORE_PAGES_METADATA[slug];
  const pageTitle = coreMeta ? coreMeta.title : `${template.title} | Saim Dev`;
  const pageDesc = coreMeta ? coreMeta.desc : template.desc;
  const canonicalUrl = `https://www.saimdev.site/food-safety-templates/${slug}`;

  // 1. BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.saimdev.site/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Free Tools",
        "item": "https://www.saimdev.site/tools"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": template.title,
        "item": canonicalUrl
      }
    ]
  };

  // 2. WebApplication Schema (for interactive calculators / tools) or DigitalDocument Schema
  const isInteractive =
    slug.includes("allergen") ||
    slug.includes("calculator") ||
    slug.includes("cost") ||
    slug.includes("recipe") ||
    slug.includes("haccp") ||
    slug.includes("quiz");

  const structuredSchema = isInteractive
    ? {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": pageTitle,
        "description": pageDesc,
        "url": canonicalUrl,
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "All / Web Browser",
        "browserRequirements": "Requires JavaScript. Requires HTML5.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "GBP"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Saim Dev",
          "url": "https://www.saimdev.site"
        }
      }
    : {
        "@context": "https://schema.org",
        "@type": "DigitalDocument",
        "name": pageTitle,
        "description": pageDesc,
        "url": canonicalUrl,
        "fileFormat": "application/pdf",
        "isAccessibleForFree": true,
        "publisher": {
          "@type": "Organization",
          "name": "Saim Dev",
          "url": "https://www.saimdev.site"
        }
      };

  // 3. FAQPage Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Is the ${template.title} suitable for UK Environmental Health Officer (EHO) inspections?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. This template and digital logging workflow are developed in line with UK Food Standards Agency (FSA) Safer Food, Better Business (SFBB) standards and HACCP Article 5 of Regulation (EC) No 852/2004. When maintained with genuine operating data and supervisor sign-offs, it fulfills statutory record-keeping and due diligence requirements under the Food Safety Act 1990."
        }
      },
      {
        "@type": "Question",
        "name": "How frequently should kitchen staff complete and sign off this record?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Critical checks (such as fridge, chiller, and hot-holding temperatures) must be completed at least twice daily—once during morning prep before opening, and once during evening service. Daily opening, closing, and hygiene checklists must be completed throughout each shift, with a designated supervisor or Head Chef signing off the log before premises shutdown."
        }
      },
      {
        "@type": "Question",
        "name": "What is the recommended corrective action if a critical limit is breached?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Immediately quarantine the affected food or area. For cold storage exceeding 8°C, probe the internal core temperature: if food has remained between 8°C and 63°C for under 4 hours, rapidly chill or cook it immediately; otherwise, safely discard it. For hot holding dropping below 63°C, reheat above 75°C (allowed once only) or serve within 2 hours, or condemn. Always record the issue, affected batch, and corrective action taken directly on the log."
        }
      },
      {
        "@type": "Question",
        "name": "How long must commercial kitchens retain completed safety records?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Under UK due diligence legal defense (Section 21 of the Food Safety Act 1990), completed temperature sheets, cleaning logs, and monitoring records should be archived for a minimum of 6 to 12 months, or at least 3 months after the shelf-life of products served. Having organized monthly binders or digital PDF exports ready is vital for unannounced council audits."
        }
      },
      {
        "@type": "Question",
        "name": "Can I customize, edit, and print this sheet without watermarks?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. You can enter your establishment name, manager sign-off, and inspection date directly into the input fields, then click 'Print / Save as PDF' to generate an optimized, clean A4 layout without watermarks or website navigation elements."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <TemplateDetailPage template={template} />
    </>
  );
}
