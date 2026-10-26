import type { Metadata } from 'next';
import { ServicesPage } from '@/components/ServicesPage';

export const metadata: Metadata = {
  title: 'Web Development Services UK | Fixed Price Next.js',
  description: 'Fixed-price Next.js web development for UK businesses from £250. Includes bespoke ordering systems, landing pages, local SEO setup, and fast delivery.',
  alternates: {
    canonical: 'https://www.saimdev.site/services'
  },
  openGraph: {
    title: 'Web Development Services UK | Fixed Price Next.js',
    description: 'Fixed-price Next.js web development for UK businesses from £250. Includes bespoke ordering systems, landing pages, local SEO setup, and fast delivery.',
    url: 'https://www.saimdev.site/services',
    siteName: 'Saim Dev',
    locale: 'en_GB',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development Services UK | Fixed Price Next.js',
    description: "High-speed Next.js websites, bespoke takeaway ordering systems, and web architecture tailored for UK and European businesses. Fixed pricing."
  }
};

export default function Page() {
  return <ServicesPage />;
}
