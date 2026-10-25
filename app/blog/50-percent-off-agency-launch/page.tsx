import type { Metadata } from 'next';
import { BlogPost3Page } from '@/components/BlogPost3Page';

export const metadata: Metadata = {
  title: "I Just Launched My Web Agency \u2014 And I'm Offering 50% Off | Saim Dev",
  description: "Claim 50% off Next.js web development during our agency launch. Fast turnarounds, bespoke code, and high performance for UK small businesses.",
  alternates: {
    canonical: 'https://www.saimdev.site/blog/50-percent-off-agency-launch'
  },
  openGraph: {
    title: "I Just Launched My Web Agency \u2014 And I'm Offering 50% Off | Saim Dev",
    description: "Claim 50% off Next.js web development during our agency launch. Fast turnarounds, bespoke code, and high performance for UK small businesses.",
    url: 'https://www.saimdev.site/blog/50-percent-off-agency-launch',
    siteName: 'Saim Dev',
    locale: 'en_GB',
    type: 'article',
    publishedTime: '2026-09-20T00:00:00.000Z',
    modifiedTime: '2026-10-25T00:00:00.000Z',
    authors: ['https://www.saimdev.site/about'],
    images: [{ url: 'https://www.saimdev.site/og-image.png', width: 1200, height: 630, alt: "I Just Launched My Web Agency \u2014 And I'm Offering 50% Off" }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "I Just Launched My Web Agency \u2014 And I'm Offering 50% Off | Saim Dev",
    description: "Claim 50% off Next.js web development during our agency launch. Fast turnarounds, bespoke code, and high performance for UK small businesses.",
    images: ['https://www.saimdev.site/og-image.png']
  }
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "I Just Launched My Web Agency \u2014 And I'm Offering 50% Off | Saim Dev",
    "description": "Claim 50% off Next.js web development during our agency launch. Fast turnarounds, bespoke code, and high performance for UK small businesses.",
    "url": "https://www.saimdev.site/blog/50-percent-off-agency-launch",
    "datePublished": "2026-09-20",
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
      "@id": "https://www.saimdev.site/blog/50-percent-off-agency-launch"
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
        "name": "I Just Launched My Web Agency \u2014 And I'm Offering 50% Off",
        "item": "https://www.saimdev.site/blog/50-percent-off-agency-launch"
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
      <BlogPost3Page />
    </>
  );
}
