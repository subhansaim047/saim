import { NextjsGuideArticle } from "@/components/blog/NextjsGuideArticle";
import { NEXTJS_VS_WORDPRESS_GUIDE } from "@/content/blog/nextjsVsWordpressGuide";
import { buildBlogArticleSchemaGraph, buildNextjsGuideMetadata } from "@/lib/blogArticleSchema";

const TITLE = "Next.js App Router vs WordPress for UK SEO | Saim Dev";
const DESCRIPTION =
  "Technical comparison of Next.js 16 Server Components vs WordPress for UK and US organic rankings, Core Web Vitals, crawl efficiency, and TCO.";

export const metadata = buildNextjsGuideMetadata({
  slug: NEXTJS_VS_WORDPRESS_GUIDE.slug,
  title: TITLE,
  description: DESCRIPTION,
  datePublished: "2026-11-16",
  dateModified: "2026-11-16",
  ogAlt: "Next.js App Router vs WordPress SEO Comparison - Saim Dev",
});

export default function NextjsVsWordpressGuidePage() {
  const schemaGraph = buildBlogArticleSchemaGraph({
    slug: NEXTJS_VS_WORDPRESS_GUIDE.slug,
    headline: NEXTJS_VS_WORDPRESS_GUIDE.h1,
    description: DESCRIPTION,
    datePublished: "2026-11-16",
    dateModified: "2026-11-16",
    breadcrumbTitle: NEXTJS_VS_WORDPRESS_GUIDE.breadcrumbTitle,
    keywords: [
      "Next.js vs WordPress SEO",
      "Next.js App Router SEO UK",
      "WordPress replacement Next.js",
    ],
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      <NextjsGuideArticle data={NEXTJS_VS_WORDPRESS_GUIDE} />
    </>
  );
}
