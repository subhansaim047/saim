import type { Metadata } from "next";

export interface ArticleSchemaInput {
  slug: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  breadcrumbTitle: string;
  keywords?: string[];
}

export function buildNextjsGuideMetadata(input: {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  ogAlt: string;
}): Metadata {
  const canonicalUrl = `https://www.saimdev.site/blog/${input.slug}`;

  return {
    title: input.title,
    description: input.description,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: canonicalUrl,
        "en-GB": canonicalUrl,
        "en-US": canonicalUrl,
        "x-default": canonicalUrl,
      },
    },
    openGraph: {
      title: input.title,
      description: input.description,
      url: canonicalUrl,
      siteName: "Saim Dev",
      locale: "en_GB",
      alternateLocale: ["en_US"],
      type: "article",
      publishedTime: `${input.datePublished}T00:00:00.000Z`,
      modifiedTime: `${input.dateModified}T00:00:00.000Z`,
      authors: ["https://www.saimdev.site/about"],
      images: [
        {
          url: "https://www.saimdev.site/og-image.png",
          width: 1200,
          height: 630,
          alt: input.ogAlt,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      creator: "@saimwebdev",
      title: input.title,
      description: input.description,
      images: ["https://www.saimdev.site/og-image.png"],
    },
  };
}

export function buildBlogArticleSchemaGraph(input: ArticleSchemaInput) {
  const url = `https://www.saimdev.site/blog/${input.slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        "url": url,
        "name": input.headline,
        "description": input.description,
        "isPartOf": { "@id": "https://www.saimdev.site/#website" },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.saimdev.site/og-image.png",
          "width": 1200,
          "height": 630,
        },
        "breadcrumb": { "@id": `${url}#breadcrumb` },
        "inLanguage": ["en-GB", "en-US"],
      },
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        "headline": input.headline,
        "description": input.description,
        "url": url,
        "datePublished": input.datePublished,
        "dateModified": input.dateModified,
        "mainEntityOfPage": { "@id": `${url}#webpage` },
        "author": { "@id": "https://www.saimdev.site/#person" },
        "publisher": { "@id": "https://www.saimdev.site/#organization" },
        "image": {
          "@type": "ImageObject",
          "url": "https://www.saimdev.site/og-image.png",
          "width": 1200,
          "height": 630,
        },
        "inLanguage": ["en-GB", "en-US"],
        ...(input.keywords?.length ? { "keywords": input.keywords.join(", ") } : {}),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.saimdev.site/",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://www.saimdev.site/blogs",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": input.breadcrumbTitle,
            "item": url,
          },
        ],
      },
    ],
  };
}
