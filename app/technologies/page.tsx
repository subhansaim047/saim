import type { Metadata } from 'next';
import { TechnologiesPage } from '@/components/TechnologiesPage';

export const metadata: Metadata = {
  title: 'Modern Next.js & React Tech Stack | Saim Dev',
  description: 'Explore our high-performance web development stack: Next.js 16 App Router, React, Tailwind CSS, TypeScript, and edge cloud hosting for speed.',
  alternates: {
    canonical: 'https://www.saimdev.site/technologies'
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
    title: 'Modern Next.js & React Tech Stack | Saim Dev',
    description: 'Explore our high-performance web development stack: Next.js 16 App Router, React, Tailwind CSS, TypeScript, and edge cloud hosting for speed.',
    images: ['https://www.saimdev.site/og-image.png']
  }
};

export default function Page() {
  return <TechnologiesPage />;
}
