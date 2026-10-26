import type { Metadata } from 'next';
import { BlogPost2Page } from '@/components/BlogPost2Page';

export const metadata: Metadata = {
  title: 'Why Saim Dev Builds Free Starter Sites for Local Shops',
  description: 'Case study on our local business starter initiative. How bespoke Next.js websites outperform heavy CMS templates in real-world local Google search.',
  alternates: {
    canonical: 'https://www.saimdev.site/blog/free-website-for-local-business'
  },
  openGraph: {
    title: 'Why Saim Dev Builds Free Starter Sites for Local Shops',
    description: 'Case study on our local business starter initiative. How bespoke Next.js websites outperform heavy CMS templates in real-world local Google search.',
    url: 'https://www.saimdev.site/blog/free-website-for-local-business',
    siteName: 'Saim Dev',
    locale: 'en_GB',
    type: 'article',
    publishedTime: '2026-09-20T00:00:00.000Z',
    modifiedTime: '2026-10-25T00:00:00.000Z',
    authors: ['https://www.saimdev.site/about'],
    images: [{ url: 'https://www.saimdev.site/og-image.png', width: 1200, height: 630, alt: "I'm Building 5 Free Websites for Local Businesses \u2014 Here's Why" }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Saim Dev Builds Free Starter Sites for Local Shops',
    description: 'Case study on our local business starter initiative. How bespoke Next.js websites outperform heavy CMS templates in real-world local Google search.',
    images: ['https://www.saimdev.site/og-image.png']
  }
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "I'm Building 5 Free Websites for Local Businesses \u2014 Here's Why | Saim Dev",
    "description": "Saim Dev is building 5 free Next.js websites for independent UK local businesses to expand our portfolio. Learn how to claim your slot today.",
    "url": "https://www.saimdev.site/blog/free-website-for-local-business",
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
      "@id": "https://www.saimdev.site/blog/free-website-for-local-business"
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
        "name": "I'm Building 5 Free Websites for Local Businesses \u2014 Here's Why",
        "item": "https://www.saimdev.site/blog/free-website-for-local-business"
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
      <BlogPost2Page />
    </>
  );
}
