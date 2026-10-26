import type { Metadata } from 'next';
import { BlogsPage } from '@/components/BlogsPage';

export const metadata: Metadata = {
  title: 'Web Development & Food Safety Blog | Saim Dev',
  description: 'Practical guides on Next.js web development for small businesses and food hygiene compliance, SFBB logs, and Natasha\'s Law for UK restaurants.',
  alternates: {
    canonical: 'https://www.saimdev.site/blogs',
  },
  openGraph: {
    title: 'Web Development & Food Safety Blog | Saim Dev',
    description: 'Practical guides on Next.js web development for small businesses and food hygiene compliance, SFBB logs, and Natasha\'s Law for UK restaurants.',
    url: 'https://www.saimdev.site/blogs',
    siteName: 'Saim Dev',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: 'https://www.saimdev.site/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Saim Dev Blog - Web Development & Food Safety Tech',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development & Food Safety Blog | Saim Dev',
    description: 'Practical guides on Next.js web development for small businesses and food hygiene compliance, SFBB logs, and Natasha\'s Law for UK restaurants.',
    creator: '@saimwebdev',
    images: ['https://www.saimdev.site/og-image.png'],
  },
};

export default function Page() {
  return <BlogsPage />;
}
