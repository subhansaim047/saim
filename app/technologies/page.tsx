import type { Metadata } from 'next';
import { TechnologiesPage } from '@/components/TechnologiesPage';

export const metadata: Metadata = {
  title: "Modern Tech Stack: Next.js, React & Tailwind CSS | Saim Dev",
  description: "Explore the modern technology stack behind our high-performance websites: Next.js App Router, React, Tailwind CSS, TypeScript, and edge cloud infrastructure.",
  alternates: {
    canonical: 'https://www.saimdev.site/technologies'
  },
  openGraph: {
    title: "Modern Tech Stack: Next.js, React & Tailwind CSS | Saim Dev",
    description: "Explore the modern technology stack behind our high-performance websites: Next.js App Router, React, Tailwind CSS, TypeScript, and edge cloud infrastructure.",
    url: 'https://www.saimdev.site/technologies',
    siteName: 'Saim Dev',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: 'https://www.saimdev.site/og-image.png', width: 1200, height: 630, alt: 'Saim Dev Tech Stack' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Modern Tech Stack: Next.js, React & Tailwind CSS | Saim Dev",
    description: "Explore the modern technology stack behind our high-performance websites: Next.js App Router, React, Tailwind CSS, TypeScript, and edge cloud infrastructure.",
    images: ['https://www.saimdev.site/og-image.png']
  }
};

export default function Page() {
  return <TechnologiesPage />;
}
