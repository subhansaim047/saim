import type { Metadata } from 'next';
import { BlogPostNatashasLaw } from '@/components/blog/BlogPostNatashasLaw';

export const metadata: Metadata = {
  title: "Natasha's Law PPDS Food Labelling Guide for UK Takeaways | Saim Dev",
  description: "Comprehensive guide to Natasha's Law and Pre-Packed for Direct Sale (PPDS) food labelling in the UK. Learn mandatory rules for ingredients and allergen emphasis.",
  alternates: {
    canonical: 'https://www.saimdev.site/blog/natashas-law-ppds-food-labelling-guide'
  },
  openGraph: {
    title: "Natasha's Law PPDS Food Labelling Guide for UK Takeaways & Cafes",
    description: "Practical compliance walkthrough on PPDS food labelling requirements, ingredient lists, and allergen emphasis under Natasha's Law.",
    url: "https://www.saimdev.site/blog/natashas-law-ppds-food-labelling-guide",
    type: "article",
    publishedTime: "2026-10-25T00:00:00.000Z",
    authors: ["https://www.saimdev.site"],
    images: [{ url: "https://www.saimdev.site/og-image.png", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Natasha's Law PPDS Food Labelling Guide (UK Food Businesses)",
    description: "Learn what qualifies as PPDS food and how to create compliant labels with emphasized allergens.",
    images: ["https://www.saimdev.site/og-image.png"]
  }
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Natasha's Law PPDS Food Labelling Guide for UK Takeaways, Cafes & Delis",
    "description": "Practical compliance walkthrough on PPDS food labelling requirements, ingredient lists, and allergen emphasis under Natasha's Law.",
    "url": "https://www.saimdev.site/blog/natashas-law-ppds-food-labelling-guide",
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
      "@id": "https://www.saimdev.site/blog/natashas-law-ppds-food-labelling-guide"
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
        "name": "Natasha's Law PPDS Guide",
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
