import type { Metadata } from 'next';
import { PrivacyPolicy } from '@/components/PrivacyPolicy';

export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
  },
  title: "Privacy Policy | Saim Dev",
  description: "Read how Saim Dev collects, uses, and protects personal data from enquiries and free tools in compliance with UK GDPR and the Data Protection Act 2018.",
  alternates: {
    canonical: 'https://www.saimdev.site/privacy',
    languages: {
      'en-GB': 'https://www.saimdev.site/privacy',
    },
  },
  openGraph: {
    title: "Privacy Policy | Saim Dev",
    description: "Read how Saim Dev collects, uses, and protects personal data from enquiries and free tools in compliance with UK GDPR and the Data Protection Act 2018.",
    url: 'https://www.saimdev.site/privacy',
    siteName: 'Saim Dev',
    locale: 'en_GB',
    type: 'website'
  ,
    images: [
      {
        url: "https://www.saimdev.site/og-image.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy - Saim Dev",
        type: "image/png",
      },
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Privacy Policy | Saim Dev",
    description: "Read how Saim Dev collects, uses, and protects personal data from enquiries and free tools in compliance with UK GDPR and the Data Protection Act 2018."
  ,
    creator: "@saimwebdev",
    images: ["https://www.saimdev.site/og-image.png"]
  }
};

export default function Page() {
  return <PrivacyPolicy />;
}
