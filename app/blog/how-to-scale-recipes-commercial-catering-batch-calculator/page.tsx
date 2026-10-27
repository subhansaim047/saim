import type { Metadata } from 'next';
import { BlogPostRecipeScaler } from '@/components/blog/BlogPostRecipeScaler';

export const metadata: Metadata = {
  title: 'How to Scale Catering Recipes Without Quality Loss',
  description: 'Guide to scaling commercial catering recipes from 10 to 500 portions. Avoid common conversion errors, calculate yields, and manage ingredient costs.',
  robots: {

    index: true,

    follow: true,

  },

  alternates: {
    canonical: 'https://www.saimdev.site/blog/how-to-scale-recipes-commercial-catering-batch-calculator',
    languages: {
      'en-GB': 'https://www.saimdev.site/blog/how-to-scale-recipes-commercial-catering-batch-calculator',
    },
  },
  openGraph: {
    title: 'How to Scale Catering Recipes Without Quality Loss',
    description: 'Guide to scaling commercial catering recipes from 10 to 500 portions. Avoid common conversion errors, calculate yields, and manage ingredient costs.',
    url: 'https://www.saimdev.site/blog/how-to-scale-recipes-commercial-catering-batch-calculator',
    siteName: 'Saim Dev',
    locale: 'en_GB',
    type: 'article',
    publishedTime: '2026-10-23T00:00:00.000Z',
    modifiedTime: '2026-10-25T00:00:00.000Z',
    authors: ['https://www.saimdev.site/about'],
    images: [{ url: 'https://www.saimdev.site/og-image.png', width: 1200, height: 630, alt: "Commercial Recipe Scaling Guide: Scale 10 to 500 Portions" }]
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@saimwebdev',
    title: 'How to Scale Catering Recipes Without Quality Loss',
    description: 'Guide to scaling commercial catering recipes from 10 to 500 portions. Avoid common conversion errors, calculate yields, and manage ingredient costs.',
    images: ['https://www.saimdev.site/og-image.png']
  }
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Commercial Recipe Scaling Guide: Scale 10 to 500 Portions | Saim Dev",
    "description": "Master recipe scaling for catering kitchens. Avoid seasoning errors and calculate precise portion costs with our free interactive tool online.",
    "url": "https://www.saimdev.site/blog/how-to-scale-recipes-commercial-catering-batch-calculator",
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
      "@id": "https://www.saimdev.site/blog/how-to-scale-recipes-commercial-catering-batch-calculator"
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
        "name": "Commercial Recipe Scaling Guide: Scale 10 to 500 Portions",
        "item": "https://www.saimdev.site/blog/how-to-scale-recipes-commercial-catering-batch-calculator"
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
      <BlogPostRecipeScaler />
    </>
  );
}
