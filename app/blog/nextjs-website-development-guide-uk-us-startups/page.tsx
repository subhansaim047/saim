import { NextjsGuideArticle } from "@/components/blog/NextjsGuideArticle";
import { NEXTJS_STARTUP_GUIDE } from "@/content/blog/nextjsStartupGuide";
import { buildBlogArticleSchemaGraph, buildNextjsGuideMetadata } from "@/lib/blogArticleSchema";

const TITLE = "Next.js Guide for UK & US Founders (2026) | Saim Dev";
const DESCRIPTION =
  "Choose cleanly between SSG, ISR, Headless CMS, and multi-region UK/US Vercel edge deployment before scoping your next production web build.";

export const metadata = buildNextjsGuideMetadata({
  slug: NEXTJS_STARTUP_GUIDE.slug,
  title: TITLE,
  description: DESCRIPTION,
  datePublished: "2026-11-16",
  dateModified: "2026-11-16",
  ogAlt: "Next.js Website Architecture Blueprint for UK & US Startups - Saim Dev",
});

export default function NextjsStartupGuidePage() {
  const schemaGraph = buildBlogArticleSchemaGraph({
    slug: NEXTJS_STARTUP_GUIDE.slug,
    headline: NEXTJS_STARTUP_GUIDE.h1,
    description: DESCRIPTION,
    datePublished: "2026-11-16",
    dateModified: "2026-11-16",
    breadcrumbTitle: NEXTJS_STARTUP_GUIDE.breadcrumbTitle,
    keywords: [
      "Next.js startup architecture UK US",
      "Multi-region Next.js website",
      "Vercel London US edge deployment",
    ],
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      <NextjsGuideArticle data={NEXTJS_STARTUP_GUIDE} />
    </>
  );
}
