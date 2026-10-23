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
