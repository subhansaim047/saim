import type { Metadata } from 'next';
import { BlogPostFhrsChecklist } from '@/components/blog/BlogPostFhrsChecklist';

export const metadata: Metadata = {
  title: "How to Get a 5-Star Food Hygiene Rating: UK EHO Checklist | Saim Dev",
  description: "Complete inspection guide for UK restaurants and takeaways to achieve a 5-star Food Hygiene Rating. Covers food safety, cleanliness, and HACCP records.",
  alternates: {
    canonical: 'https://www.saimdev.site/blog/uk-food-hygiene-rating-scheme-5-star-checklist'
  },
  openGraph: {
    title: "How to Get a 5-Star Food Hygiene Rating: UK EHO Inspection Checklist",
    description: "Complete inspection guide for UK restaurants and takeaways to achieve a 5-star Food Hygiene Rating under Food Standards Agency rules.",
    url: "https://www.saimdev.site/blog/uk-food-hygiene-rating-scheme-5-star-checklist",
    type: "article",
    publishedTime: "2026-10-25T00:00:00.000Z",
    authors: ["https://www.saimdev.site"],
    images: [{ url: "https://www.saimdev.site/og-image.png", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Get a 5-Star Food Hygiene Rating (UK EHO Checklist)",
    description: "Pass your council hygiene inspection with top marks. Step-by-step checklist across food handling, facilities, and HACCP paperwork.",
    images: ["https://www.saimdev.site/og-image.png"]
  }
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Get a 5-Star Food Hygiene Rating in the UK: Complete EHO Inspection Checklist",
    "description": "Complete inspection guide for UK restaurants and takeaways to achieve a 5-star Food Hygiene Rating under Food Standards Agency rules.",
    "url": "https://www.saimdev.site/blog/uk-food-hygiene-rating-scheme-5-star-checklist",
    "datePublished": "2026-10-25",
    "dateModified": "2026-10-25",
    "author": {
      "@type": "Organization",
      "name": "Saim Dev",
      "url": "https://www.saimdev.site"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Saim Dev",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.saimdev.site/saim-dev-logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.saimdev.site/blog/uk-food-hygiene-rating-scheme-5-star-checklist"
    }
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
        "name": "5-Star Food Hygiene Checklist",
        "item": "https://www.saimdev.site/blog/uk-food-hygiene-rating-scheme-5-star-checklist"
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
      <BlogPostFhrsChecklist />
    </>
  );
}
