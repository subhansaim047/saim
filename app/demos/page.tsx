import type { Metadata } from 'next';
import { DemosPage } from '@/components/DemosPage';

export const metadata: Metadata = {
  title: 'Interactive Takeaway & Business Web Demos | Saim Dev',
  description: 'Test live interactive Next.js website demos, online ordering menus, allergen filters, and digital food-safety tools built for UK businesses.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.saimdev.site/demos',
    languages: {
      'en': 'https://www.saimdev.site/demos',
      'en-GB': 'https://www.saimdev.site/demos',
      'en-US': 'https://www.saimdev.site/demos',
      'x-default': 'https://www.saimdev.site/demos',
    },
  },
  openGraph: {
    type: 'website',
    title: 'Interactive Takeaway & Business Web Demos | Saim Dev',
    description: 'Test live interactive Next.js website demos, online ordering menus, allergen filters, and digital food-safety tools built for UK businesses.',
    url: 'https://www.saimdev.site/demos',
    siteName: 'Saim Dev',
    locale: 'en_GB',
    alternateLocale: ['en_US'],
    images: [
      {
        url: 'https://www.saimdev.site/og-demos.png',
        width: 1200,
        height: 630,
        alt: 'Interactive Takeaway and Business Website Demos - Saim Dev',
        type: 'image/png'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@saimwebdev',
    title: 'Interactive Takeaway & Business Web Demos | Saim Dev',
    description: 'Test live interactive Next.js website demos, online ordering menus, allergen filters, and digital food-safety tools built for UK businesses.',
    images: ['https://www.saimdev.site/og-demos.png']
  }
};

export default function Page() {
  const demosGraphSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://www.saimdev.site/demos#webpage",
        "url": "https://www.saimdev.site/demos",
        "name": "Interactive Takeaway & Business Web Demos | Saim Dev",
        "description": "Test live interactive Next.js website demos, online ordering menus, allergen filters, and digital food-safety tools built for UK businesses.",
        "inLanguage": "en-GB",
        "isPartOf": { "@id": "https://www.saimdev.site/#website" },
        "about": { "@id": "https://www.saimdev.site/#organization" },
        "breadcrumb": { "@id": "https://www.saimdev.site/demos#breadcrumb" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.saimdev.site/demos#breadcrumb",
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
            "name": "Live Demos",
            "item": "https://www.saimdev.site/demos"
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(demosGraphSchema) }}
      />
      <DemosPage />
    </>
  );
}
