import type { Metadata } from 'next';
import { ServicesPage } from '@/components/ServicesPage';

export const metadata: Metadata = {
  title: 'Web Development Services UK | Fixed Price Next.js',
  description: 'Fixed-price Next.js web development for UK businesses from £250. Includes bespoke ordering systems, landing pages, local SEO setup, and fast delivery.',
  alternates: {
    canonical: 'https://www.saimdev.site/services'
  },
  openGraph: {
    type: 'website',
    title: 'Web Development Services UK | Fixed Price Next.js',
    description: 'Fixed-price Next.js web development for UK businesses from £250. Includes bespoke ordering systems, landing pages, local SEO setup, and fast delivery.',
    url: 'https://www.saimdev.site/services',
    siteName: 'Saim Dev',
    locale: 'en_GB',
    images: [
      {
        url: 'https://www.saimdev.site/og-services.png',
        width: 1200,
        height: 630,
        alt: 'Fixed-Price Next.js Web Development Services UK - Saim Dev',
        type: 'image/png'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development Services UK | Fixed Price Next.js',
    description: 'Fixed-price Next.js web development for UK businesses from £250. Includes bespoke ordering systems, landing pages, local SEO setup, and fast delivery.',
    images: ['https://www.saimdev.site/og-services.png']
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
        "name": "Web Development Services",
        "item": "https://www.saimdev.site/services"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServicesPage />
    </>
  );
}
