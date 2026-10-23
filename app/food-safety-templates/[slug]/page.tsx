import { Metadata } from "next";
import { notFound } from "next/navigation";
import { FOOD_SAFETY_TEMPLATES, getTemplateBySlug } from "@/data/saim_templates";
import { TemplateDetailPage } from "@/components/TemplateDetailPage";
import { CORE_PAGES_METADATA } from "@/data/core_metadata";
import pagePlanData from "@/data/page_plan.json";

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

  const isIndexable = plan.bucket === "KEEP" || plan.bucket === "IMPROVE";
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
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDesc,
    },
  };
}

export default async function TemplateDetailRoute({ params }: PageProps) {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);

  if (!template) {
    notFound();
  }

  return <TemplateDetailPage template={template} />;
}
