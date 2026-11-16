import { NextjsGuideArticle } from "@/components/blog/NextjsGuideArticle";
import { NEXTJS_COST_GUIDE } from "@/content/blog/nextjsCostGuide";
import { buildBlogArticleSchemaGraph, buildNextjsGuideMetadata } from "@/lib/blogArticleSchema";

const TITLE = "Next.js Website Development Cost UK & US 2026 | Saim Dev";
const DESCRIPTION =
  "Compare real UK GBP and US USD Next.js website development prices, hosting TCO, and agency retainers vs fixed-scope engineering sprints.";

export const metadata = buildNextjsGuideMetadata({
  slug: NEXTJS_COST_GUIDE.slug,
  title: TITLE,
  description: DESCRIPTION,
  datePublished: "2026-11-16",
  dateModified: "2026-11-16",
  ogAlt: "Next.js Website Development Cost UK & US Guide - Saim Dev",
});

export default function NextjsCostGuidePage() {
  const schemaGraph = buildBlogArticleSchemaGraph({
    slug: NEXTJS_COST_GUIDE.slug,
    headline: NEXTJS_COST_GUIDE.h1,
    description: DESCRIPTION,
    datePublished: "2026-11-16",
    dateModified: "2026-11-16",
    breadcrumbTitle: NEXTJS_COST_GUIDE.breadcrumbTitle,
    keywords: [
      "Next.js website development cost UK",
      "Next.js agency pricing US",
      "Next.js build cost GBP USD",
    ],
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      <NextjsGuideArticle data={NEXTJS_COST_GUIDE} />
    </>
  );
}
