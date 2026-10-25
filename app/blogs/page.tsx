import type { Metadata } from 'next';
import { BlogsPage } from '@/components/BlogsPage';

export const metadata: Metadata = {
  title: "Web Development & Kitchen Tech Blog | Saim Dev",
  description: "Explore expert web development articles, UK commercial kitchen hygiene guides, SFBB compliance tips, and digital operational strategies by Saim Dev.",
  alternates: {
    canonical: 'https://www.saimdev.site/blogs',
  },
  openGraph: {
    title: "Web Development & Kitchen Tech Blog | Saim Dev",
    description: "Explore expert web development articles, UK commercial kitchen hygiene guides, SFBB compliance tips, and digital operational strategies by Saim Dev.",
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
    title: "Web Development & Kitchen Tech Blog | Saim Dev",
    description: "Explore expert web development articles, UK commercial kitchen hygiene guides, SFBB compliance tips, and digital operational strategies by Saim Dev.",
    creator: '@saimwebdev',
    images: ['https://www.saimdev.site/og-image.png'],
  },
};

export default function Page() {
  return <BlogsPage />;
}
