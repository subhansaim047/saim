import type { Metadata } from 'next';
import { BlogPostNatashasLaw } from '@/components/blog/BlogPostNatashasLaw';

export const metadata: Metadata = {
  title: 'Natasha\'s Law PPDS Food Labelling Guide for UK Food',
  description: 'Complete UK guide to Natasha\'s Law and PPDS food labelling. Learn packaging rules, compound ingredient declarations, and mandatory allergen bolding.',
  alternates: {
    canonical: 'https://www.saimdev.site/blog/natashas-law-ppds-food-labelling-guide'
  },
  openGraph: {
    title: 'Natasha\'s Law PPDS Food Labelling Guide for UK Food',
    description: 'Complete UK guide to Natasha\'s Law and PPDS food labelling. Learn packaging rules, compound ingredient declarations, and mandatory allergen bolding.',
    url: 'https://www.saimdev.site/blog/natashas-law-ppds-food-labelling-guide',
    siteName: 'Saim Dev',
    locale: 'en_GB',
    type: 'article',
    publishedTime: '2026-10-25T00:00:00.000Z',
    modifiedTime: '2026-10-25T00:00:00.000Z',
    authors: ['https://www.saimdev.site/about'],
    images: [{ url: 'https://www.saimdev.site/og-image.png', width: 1200, height: 630, alt: "Natasha's Law PPDS Food Labelling Guide for UK Takeaways" }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Natasha\'s Law PPDS Food Labelling Guide for UK Food',
    description: 'Complete UK guide to Natasha\'s Law and PPDS food labelling. Learn packaging rules, compound ingredient declarations, and mandatory allergen bolding.',
    images: ['https://www.saimdev.site/og-image.png']
  }
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Natasha's Law PPDS Food Labelling Guide for UK Takeaways | Saim Dev",
    "description": "Complete guide to Natasha's Law and PPDS food labelling in the UK. Learn mandatory rules for ingredient lists and allergen emphasis on packaging.",
    "url": "https://www.saimdev.site/blog/natashas-law-ppds-food-labelling-guide",
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
      "@id": "https://www.saimdev.site/blog/natashas-law-ppds-food-labelling-guide"
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
        "name": "Natasha's Law PPDS Food Labelling Guide for UK Takeaways",
        "item": "https://www.saimdev.site/blog/natashas-law-ppds-food-labelling-guide"
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
      <BlogPostNatashasLaw />
    </>
  );
}
