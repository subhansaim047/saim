import type { Metadata } from 'next';
import { BlogPost1Page } from '@/components/BlogPost1Page';

export const metadata: Metadata = {
  title: 'Why UK Small Businesses Need a Custom Website | Saim Dev',
  description: 'Discover why modern UK small businesses require ultra-fast, mobile-friendly websites to capture local search demand and avoid agency subscription traps.',
  robots: {

    index: true,

    follow: true,

  },

  alternates: {
    canonical: 'https://www.saimdev.site/blog/why-small-business-needs-website-2026',
    languages: {
      'en-GB': 'https://www.saimdev.site/blog/why-small-business-needs-website-2026',
    },
  },
  openGraph: {
    title: 'Why UK Small Businesses Need a Custom Website | Saim Dev',
    description: 'Discover why modern UK small businesses require ultra-fast, mobile-friendly websites to capture local search demand and avoid agency subscription traps.',
    url: 'https://www.saimdev.site/blog/why-small-business-needs-website-2026',
    siteName: 'Saim Dev',
    locale: 'en_GB',
    type: 'article',
    publishedTime: '2026-08-11T00:00:00.000Z',
    modifiedTime: '2026-10-25T00:00:00.000Z',
    authors: ['https://www.saimdev.site/about'],
    images: [{ url: 'https://www.saimdev.site/og-image.png', width: 1200, height: 630, alt: "Why Every Small Business Needs a Professional Website in 2026" }]
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@saimwebdev',
    title: 'Why UK Small Businesses Need a Custom Website | Saim Dev',
    description: 'Discover why modern UK small businesses require ultra-fast, mobile-friendly websites to capture local search demand and avoid agency subscription traps.',
    images: ['https://www.saimdev.site/og-image.png']
  }
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Why Every Small Business Needs a Professional Website in 2026 | Saim Dev",
    "description": "Why UK small businesses need a fast Next.js website in 2026. Turn local searches into paying customers with modern mobile performance and local SEO.",
    "url": "https://www.saimdev.site/blog/why-small-business-needs-website-2026",
    "datePublished": "2026-08-11",
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
      "@id": "https://www.saimdev.site/blog/why-small-business-needs-website-2026"
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
        "name": "Why Every Small Business Needs a Professional Website in 2026",
        "item": "https://www.saimdev.site/blog/why-small-business-needs-website-2026"
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
      <BlogPost1Page />
    </>
  );
}
