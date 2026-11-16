import { NextjsGuideArticle } from "@/components/blog/NextjsGuideArticle";
import { NEXTJS_MIGRATION_GUIDE } from "@/content/blog/nextjsMigrationGuide";
import { buildBlogArticleSchemaGraph, buildNextjsGuideMetadata } from "@/lib/blogArticleSchema";

const TITLE = "Migrate WordPress or Webflow to Next.js Safely | Saim Dev";
const DESCRIPTION =
  "Step-by-step zero-traffic-loss blueprint to move WordPress or Webflow sites to Next.js App Router with 301 maps, schema parity, and CI guards.";

export const metadata = buildNextjsGuideMetadata({
  slug: NEXTJS_MIGRATION_GUIDE.slug,
  title: TITLE,
  description: DESCRIPTION,
  datePublished: "2026-11-16",
  dateModified: "2026-11-16",
  ogAlt: "WordPress and Webflow to Next.js SEO Migration Guide - Saim Dev",
});

export default function NextjsMigrationGuidePage() {
  const schemaGraph = buildBlogArticleSchemaGraph({
    slug: NEXTJS_MIGRATION_GUIDE.slug,
    headline: NEXTJS_MIGRATION_GUIDE.h1,
    description: DESCRIPTION,
    datePublished: "2026-11-16",
    dateModified: "2026-11-16",
    breadcrumbTitle: NEXTJS_MIGRATION_GUIDE.breadcrumbTitle,
    keywords: [
      "Migrate WordPress to Next.js",
      "Webflow to Next.js migration SEO",
      "301 redirect Next.js guide",
    ],
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      <NextjsGuideArticle data={NEXTJS_MIGRATION_GUIDE} />
    </>
  );
}
