import type { Metadata } from 'next';
import { CaseStudiesPage } from '@/components/CaseStudiesPage';

export const metadata: Metadata = {
  title: "Next.js Case Studies & Web Performance Results | Saim Dev",
  description: "Explore verified Next.js website case studies for UK and European businesses. Discover real sub-second speed metrics, SEO growth, and client revenue gains.",
  alternates: {
    canonical: 'https://www.saimdev.site/case-studies'
  },
  openGraph: {
    title: "Next.js Case Studies & Web Performance Results | Saim Dev",
    description: "Explore verified Next.js website case studies for UK and European businesses. Discover real sub-second speed metrics, SEO growth, and client revenue gains.",
    url: 'https://www.saimdev.site/case-studies',
    siteName: 'Saim Dev',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: 'https://www.saimdev.site/og-image.png', width: 1200, height: 630, alt: 'Saim Dev Case Studies' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Next.js Case Studies & Web Performance Results | Saim Dev",
    description: "Explore verified Next.js website case studies for UK and European businesses. Discover real sub-second speed metrics, SEO growth, and client revenue gains.",
    images: ['https://www.saimdev.site/og-image.png']
  }
};

export default function Page() {
  return <CaseStudiesPage />;
}
