import type { Metadata } from 'next';
import { BlogsPage } from '@/components/BlogsPage';

export const metadata: Metadata = {
  title: 'Web Development & Food Safety Blog | Saim Dev',
  description: "Practical guides on Next.js web development for small businesses and food hygiene compliance, SFBB logs, and Natasha's Law for UK restaurants.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.saimdev.site/blogs',
    languages: {
      'en': 'https://www.saimdev.site/blogs',
      'en-GB': 'https://www.saimdev.site/blogs',
      'en-US': 'https://www.saimdev.site/blogs',
      'x-default': 'https://www.saimdev.site/blogs',
    },
  },
  openGraph: {
    title: 'Web Development & Food Safety Blog | Saim Dev',
    description: "Practical guides on Next.js web development for small businesses and food hygiene compliance, SFBB logs, and Natasha's Law for UK restaurants.",
    url: 'https://www.saimdev.site/blogs',
    siteName: 'Saim Dev',
    locale: 'en_GB',
    alternateLocale: ['en_US'],
    type: 'website',
    images: [
      {
        url: 'https://www.saimdev.site/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Saim Dev Blog - Web Development & Food Safety Tech',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development & Food Safety Blog | Saim Dev',
    description: "Practical guides on Next.js web development for small businesses and food hygiene compliance, SFBB logs, and Natasha's Law for UK restaurants.",
    creator: '@saimwebdev',
    images: ['https://www.saimdev.site/og-image.png'],
  },
};

export default function Page() {
  const blogsGraphSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["CollectionPage", "Blog"],
        "@id": "https://www.saimdev.site/blogs#webpage",
        "url": "https://www.saimdev.site/blogs",
        "name": "Web Development & Hospitality Engineering Guides | Saim Dev",
        "description": "Practical guides on Next.js web development for small businesses, pricing packages, WordPress migration, and UK hospitality compliance.",
        "inLanguage": "en-GB",
        "isPartOf": { "@id": "https://www.saimdev.site/#website" },
        "publisher": { "@id": "https://www.saimdev.site/#organization" },
        "breadcrumb": { "@id": "https://www.saimdev.site/blogs#breadcrumb" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.saimdev.site/blogs#breadcrumb",
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
            "name": "Blog & Insights",
            "item": "https://www.saimdev.site/blogs"
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogsGraphSchema) }}
      />
      <BlogsPage />
    </>
  );
}
