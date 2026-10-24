import type { Metadata } from 'next';
import { TermsOfService } from '@/components/TermsOfService';

export const metadata: Metadata = {
  title: "Terms of Service | Saim Dev",
  description: "Terms of Service for Saim Dev web architecture and digital resources. Review service delivery, client terms, intellectual property, and usage.",
  alternates: {
    canonical: 'https://www.saimdev.site/terms'
  },
  openGraph: {
    title: "Terms of Service | Saim Dev",
    description: "Terms of Service for Saim Dev web architecture and digital resources. Review service delivery, client terms, intellectual property, and usage.",
    url: 'https://www.saimdev.site/terms',
    siteName: 'Saim Dev',
    locale: 'en_GB',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: "Terms of Service | Saim Dev",
    description: "Terms of Service for Saim Dev web architecture and digital resources. Review service delivery, client terms, intellectual property, and usage."
  }
};

export default function Page() {
  return <TermsOfService />;
}
