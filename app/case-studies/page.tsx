import type { Metadata } from 'next';
import { CaseStudiesPage } from '@/components/CaseStudiesPage';

export const metadata: Metadata = {
  title: 'Next.js Architecture Case Studies | Saim Dev',
  description: 'Explore Next.js website architecture case studies and performance benchmarks from Saim Dev. Compare sub-second mobile load targets and conversion flows.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.saimdev.site/case-studies',
    languages: {
      'en-GB': 'https://www.saimdev.site/case-studies',
    },
  },
  openGraph: {
    title: 'Next.js Architecture Case Studies | Saim Dev',
    description: 'Explore Next.js website architecture case studies and performance benchmarks from Saim Dev. Compare sub-second mobile load targets and conversion flows.',
    url: 'https://www.saimdev.site/case-studies',
    siteName: 'Saim Dev',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: 'https://www.saimdev.site/og-demos.png', width: 1200, height: 630, alt: 'Next.js Architecture Case Studies - Saim Dev', type: 'image/png' }]
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@saimwebdev',
    title: 'Next.js Architecture Case Studies | Saim Dev',
    description: 'Explore Next.js website architecture case studies and performance benchmarks from Saim Dev. Compare sub-second mobile load targets and conversion flows.',
    images: ['https://www.saimdev.site/og-demos.png']
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
        "name": "Case Studies",
        "item": "https://www.saimdev.site/case-studies"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CaseStudiesPage />
    </>
  );
}
