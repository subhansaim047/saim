import type { Metadata } from 'next';
import { BlogPostAllergenMatrix } from '@/components/blog/BlogPostAllergenMatrix';

export const metadata: Metadata = {
  title: 'How to Build a 14-Allergen Matrix for UK Kitchens',
  description: 'Step-by-step guide to auditing recipes and creating a 14-allergen chart for UK restaurants, takeaways, and pubs under Food Information Regulations.',
  robots: {

    index: true,

    follow: true,

  },

  alternates: {
    canonical: 'https://www.saimdev.site/blog/how-to-create-compliant-14-allergen-matrix-uk-restaurants',
    languages: {
      'en-GB': 'https://www.saimdev.site/blog/how-to-create-compliant-14-allergen-matrix-uk-restaurants',
    },
  },
  openGraph: {
    title: 'How to Build a 14-Allergen Matrix for UK Kitchens',
    description: 'Step-by-step guide to auditing recipes and creating a 14-allergen chart for UK restaurants, takeaways, and pubs under Food Information Regulations.',
    url: 'https://www.saimdev.site/blog/how-to-create-compliant-14-allergen-matrix-uk-restaurants',
    siteName: 'Saim Dev',
    locale: 'en_GB',
    type: 'article',
    publishedTime: '2026-10-23T00:00:00.000Z',
    modifiedTime: '2026-10-25T00:00:00.000Z',
    authors: ['https://www.saimdev.site/about'],
    images: [{ url: 'https://www.saimdev.site/og-image.png', width: 1200, height: 630, alt: "How to Create a Compliant 14-Allergen Matrix for UK Restaurants" }]
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@saimwebdev',
    title: 'How to Build a 14-Allergen Matrix for UK Kitchens',
    description: 'Step-by-step guide to auditing recipes and creating a 14-allergen chart for UK restaurants, takeaways, and pubs under Food Information Regulations.',
    images: ['https://www.saimdev.site/og-image.png']
  }
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Create a Compliant 14-Allergen Matrix for UK Restaurants | Saim Dev",
    "description": "Auditing recipes and building an allergen matrix aligned with FSA guidance under Natasha's Law. Free interactive digital generator included.",
    "url": "https://www.saimdev.site/blog/how-to-create-compliant-14-allergen-matrix-uk-restaurants",
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
      "@id": "https://www.saimdev.site/blog/how-to-create-compliant-14-allergen-matrix-uk-restaurants"
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
        "name": "How to Create a Compliant 14-Allergen Matrix for UK Restaurants",
        "item": "https://www.saimdev.site/blog/how-to-create-compliant-14-allergen-matrix-uk-restaurants"
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
      <BlogPostAllergenMatrix />
    </>
  );
}
