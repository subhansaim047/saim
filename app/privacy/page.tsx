import type { Metadata } from 'next';
import { PrivacyPolicy } from '@/components/PrivacyPolicy';

export const metadata: Metadata = {
  title: "Privacy Policy | Saim Dev",
  description: "How Saim Dev collects, uses, and protects personal data from enquiries and free tools under UK GDPR and the Data Protection Act 2018.",
  alternates: {
    canonical: 'https://www.saimdev.site/privacy'
  },
  openGraph: {
    title: "Privacy Policy | Saim Dev",
    description: "How Saim Dev collects, uses, and protects personal data from enquiries and free tools under UK GDPR and the Data Protection Act 2018.",
    url: 'https://www.saimdev.site/privacy',
    siteName: 'Saim Dev',
    locale: 'en_GB',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: "Privacy Policy | Saim Dev",
    description: "How Saim Dev collects, uses, and protects personal data from enquiries and free tools under UK GDPR and the Data Protection Act 2018."
  }
};

export default function Page() {
  return <PrivacyPolicy />;
}
