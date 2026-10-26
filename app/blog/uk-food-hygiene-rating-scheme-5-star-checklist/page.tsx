import type { Metadata } from 'next';
import { BlogPostFhrsChecklist } from '@/components/blog/BlogPostFhrsChecklist';

export const metadata: Metadata = {
  title: 'How to Get a 5-Star Food Hygiene Rating: UK Checklist',
  description: 'Complete UK inspection checklist to secure a 5-star Food Hygiene Rating. Practical tips for structure, hygiene practices, and confidence in management.',
  alternates: {
    canonical: 'https://www.saimdev.site/blog/uk-food-hygiene-rating-scheme-5-star-checklist'
  },
  openGraph: {
    title: 'How to Get a 5-Star Food Hygiene Rating: UK Checklist',
    description: 'Complete UK inspection checklist to secure a 5-star Food Hygiene Rating. Practical tips for structure, hygiene practices, and confidence in management.',
    url: 'https://www.saimdev.site/blog/uk-food-hygiene-rating-scheme-5-star-checklist',
    siteName: 'Saim Dev',
    locale: 'en_GB',
    type: 'article',
    publishedTime: '2026-10-25T00:00:00.000Z',
    modifiedTime: '2026-10-25T00:00:00.000Z',
    authors: ['https://www.saimdev.site/about'],
    images: [{ url: 'https://www.saimdev.site/og-image.png', width: 1200, height: 630, alt: "How to Get a 5-Star Food Hygiene Rating: UK EHO Checklist" }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Get a 5-Star Food Hygiene Rating: UK Checklist',
    description: 'Complete UK inspection checklist to secure a 5-star Food Hygiene Rating. Practical tips for structure, hygiene practices, and confidence in management.',
    images: ['https://www.saimdev.site/og-image.png']
  }
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Get a 5-Star Food Hygiene Rating: UK EHO Checklist | Saim Dev",
    "description": "Complete inspection guide for UK restaurants and takeaways to achieve a 5-star Food Hygiene Rating. Covers food safety, cleanliness, and HACCP records.",
    "url": "https://www.saimdev.site/blog/uk-food-hygiene-rating-scheme-5-star-checklist",
    "datePublished": "2026-10-25",
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
      "@id": "https://www.saimdev.site/blog/uk-food-hygiene-rating-scheme-5-star-checklist"
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
        "name": "How to Get a 5-Star Food Hygiene Rating: UK EHO Checklist",
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
