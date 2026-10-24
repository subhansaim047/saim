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
      <TemplateDetailPage template={template} />
    </>
  );
}
