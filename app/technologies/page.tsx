import type { Metadata } from 'next';
import { TechnologiesPage } from '@/components/TechnologiesPage';

export const metadata: Metadata = {
  title: 'Modern Next.js & React Tech Stack | Saim Dev',
  description: 'Explore our high-performance web development stack: Next.js 16 App Router, React, Tailwind CSS, TypeScript, and edge cloud hosting for speed.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.saimdev.site/technologies',
    languages: {
      'en-GB': 'https://www.saimdev.site/technologies',
    },
  },
  openGraph: {
    title: 'Modern Next.js & React Tech Stack | Saim Dev',
    description: 'Explore our high-performance web development stack: Next.js 16 App Router, React, Tailwind CSS, TypeScript, and edge cloud hosting for speed.',
    url: 'https://www.saimdev.site/technologies',
    siteName: 'Saim Dev',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: 'https://www.saimdev.site/og-image.png', width: 1200, height: 630, alt: 'Saim Dev Tech Stack' }]
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@saimwebdev',
    title: 'Modern Next.js & React Tech Stack | Saim Dev',
    description: 'Explore our high-performance web development stack: Next.js 16 App Router, React, Tailwind CSS, TypeScript, and edge cloud hosting for speed.',
    images: ['https://www.saimdev.site/og-image.png']
  }
};

export default function Page() {
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
        "name": "Services",
        "item": "https://www.saimdev.site/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Technologies & Expertise",
        "item": "https://www.saimdev.site/technologies"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <TechnologiesPage />
    </>
  );
}
