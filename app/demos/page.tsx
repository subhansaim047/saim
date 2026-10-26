import type { Metadata } from 'next';
import { DemosPage } from '@/components/DemosPage';

export const metadata: Metadata = {
  title: 'Interactive Takeaway & Business Web Demos | Saim Dev',
  description: 'Test live interactive Next.js website demos, online ordering menus, allergen filters, and digital food-safety tools built for UK businesses.',
  alternates: {
    canonical: 'https://www.saimdev.site/demos'
  },
  openGraph: {
    type: 'website',
    title: 'Interactive Takeaway & Business Web Demos | Saim Dev',
    description: 'Test live interactive Next.js website demos, online ordering menus, allergen filters, and digital food-safety tools built for UK businesses.',
    url: 'https://www.saimdev.site/demos',
    siteName: 'Saim Dev',
    locale: 'en_GB',
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
    title: 'Interactive Takeaway & Business Web Demos | Saim Dev',
    description: 'Test live interactive Next.js website demos, online ordering menus, allergen filters, and digital food-safety tools built for UK businesses.',
    images: ['https://www.saimdev.site/og-demos.png']
  }
};

export default function Page() {
  return <DemosPage />;
}
