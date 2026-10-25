import type { Metadata } from 'next';
import { BlogPostHaccpPlan } from '@/components/blog/BlogPostHaccpPlan';

export const metadata: Metadata = {
  title: "How to Write a HACCP Plan for UK Food Businesses | Saim Dev",
  description: "Plain-English guide to creating a HACCP plan for UK takeaways aligned with FSA rules. Build hazard tables with our free digital tool online.",
  alternates: {
    canonical: 'https://www.saimdev.site/blog/how-to-write-haccp-plan-uk-food-business-step-by-step'
  },
  openGraph: {
    title: "How to Write a HACCP Plan for UK Food Businesses | Saim Dev",
    description: "Plain-English guide to creating a HACCP plan for UK takeaways aligned with FSA rules. Build hazard tables with our free digital tool online.",
    url: 'https://www.saimdev.site/blog/how-to-write-haccp-plan-uk-food-business-step-by-step',
    siteName: 'Saim Dev',
    locale: 'en_GB',
    type: 'article',
    publishedTime: '2026-10-23T00:00:00.000Z',
    modifiedTime: '2026-10-25T00:00:00.000Z',
    authors: ['https://www.saimdev.site/about'],
    images: [{ url: 'https://www.saimdev.site/og-image.png', width: 1200, height: 630, alt: "How to Write a HACCP Plan for UK Food Businesses" }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "How to Write a HACCP Plan for UK Food Businesses | Saim Dev",
    description: "Plain-English guide to creating a HACCP plan for UK takeaways aligned with FSA rules. Build hazard tables with our free digital tool online.",
    images: ['https://www.saimdev.site/og-image.png']
  }
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Write a HACCP Plan for UK Food Businesses | Saim Dev",
    "description": "Plain-English guide to creating a HACCP plan for UK takeaways aligned with FSA rules. Build hazard tables with our free digital tool online.",
    "url": "https://www.saimdev.site/blog/how-to-write-haccp-plan-uk-food-business-step-by-step",
    "datePublished": "2026-10-23",
    "dateModified": "2026-10-25",
    "author": {
      "@type": "Person",
      "name": "Saim Dev",
      "jobTitle": "Founder & Lead Next.js Architect",
      "url": "https://www.saimdev.site/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Saim Dev",
      "url": "https://www.saimdev.site",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.saimdev.site/saim-dev-logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.saimdev.site/blog/how-to-write-haccp-plan-uk-food-business-step-by-step"
    },
    "image": "https://www.saimdev.site/og-image.png"
  };

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
        "name": "Blog",
        "item": "https://www.saimdev.site/blogs"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "How to Write a HACCP Plan for UK Food Businesses",
        "item": "https://www.saimdev.site/blog/how-to-write-haccp-plan-uk-food-business-step-by-step"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BlogPostHaccpPlan />
    </>
  );
}
