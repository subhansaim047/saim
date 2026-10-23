import { Metadata } from "next";
import { notFound } from "next/navigation";
import { FOOD_SAFETY_TEMPLATES, getTemplateBySlug } from "@/data/saim_templates";
import { TemplateDetailPage } from "@/components/TemplateDetailPage";

interface PageProps {
  params: Promise<{ slug: string }>;
}

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
    };
  }

  if (slug === "food-allergen-chart") {
    const pageTitle = "Free UK Takeaway Allergen Chart Generator (14 Allergens)";
    const pageDesc =
      "Build and print a UK allergen chart for your takeaway in minutes. Covers all 14 allergens, a customer filter and PDF print. Free, no sign-up.";
    const pageUrl = "https://www.saimdev.site/food-safety-templates/food-allergen-chart";

    return {
      title: pageTitle,
      description: pageDesc,
      alternates: {
        canonical: pageUrl,
      },
      openGraph: {
        title: pageTitle,
        description: pageDesc,
        url: pageUrl,
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

  return {
    title: `${template.title} | Free Food Safety Download | Saim Dev`,
    description: template.desc,
    alternates: {
      canonical: `https://www.saimdev.site/food-safety-templates/${template.slug}`,
    },
    openGraph: {
      title: `${template.title} | Saim Dev Free Food Safety Suite`,
      description: template.desc,
      url: `https://www.saimdev.site/food-safety-templates/${template.slug}`,
      siteName: "Saim Dev",
      type: "website",
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
