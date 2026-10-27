import type { Metadata } from 'next';
import { TermsOfService } from '@/components/TermsOfService';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
  title: "Terms of Service | Saim Dev",
  description: "Terms of Service for Saim Dev web architecture and digital resources. Review service delivery, client terms, intellectual property, and usage.",
  alternates: {
    canonical: 'https://www.saimdev.site/terms',
    languages: {
      'en-GB': 'https://www.saimdev.site/terms',
    },
  },
  openGraph: {
    title: "Terms of Service | Saim Dev",
    description: "Terms of Service for Saim Dev web architecture and digital resources. Review service delivery, client terms, intellectual property, and usage.",
    url: 'https://www.saimdev.site/terms',
    siteName: 'Saim Dev',
    locale: 'en_GB',
    type: 'website'
  ,
    images: [
      {
        url: "https://www.saimdev.site/og-image.png",
        width: 1200,
        height: 630,
        alt: "Terms of Service - Saim Dev",
        type: "image/png",
      },
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Terms of Service | Saim Dev",
    description: "Terms of Service for Saim Dev web architecture and digital resources. Review service delivery, client terms, intellectual property, and usage."
  ,
    creator: "@saimwebdev",
    images: ["https://www.saimdev.site/og-image.png"]
  }
};

export default function Page() {
  return <TermsOfService />;
}
