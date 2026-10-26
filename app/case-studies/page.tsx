import type { Metadata } from 'next';
import { CaseStudiesPage } from '@/components/CaseStudiesPage';

export const metadata: Metadata = {
  title: 'Client Web Development Case Studies | Saim Dev',
  description: 'Review real Next.js website case studies for UK and European clients. Proven sub-second loading speeds, mobile conversion gains, and clean delivery.',
  alternates: {
    canonical: 'https://www.saimdev.site/case-studies'
  },
  openGraph: {
    title: 'Client Web Development Case Studies | Saim Dev',
    description: 'Review real Next.js website case studies for UK and European clients. Proven sub-second loading speeds, mobile conversion gains, and clean delivery.',
    url: 'https://www.saimdev.site/case-studies',
    siteName: 'Saim Dev',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: 'https://www.saimdev.site/og-image.png', width: 1200, height: 630, alt: 'Saim Dev Case Studies' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Client Web Development Case Studies | Saim Dev',
    description: 'Review real Next.js website case studies for UK and European clients. Proven sub-second loading speeds, mobile conversion gains, and clean delivery.',
    images: ['https://www.saimdev.site/og-image.png']
  }
};

export default function Page() {
  return <CaseStudiesPage />;
}
