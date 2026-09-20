import type { Metadata } from 'next';
import { TermsOfService } from '@/components/TermsOfService';

export const metadata: Metadata = {
  title: "Terms of Service | Saim Dev",
  description: "Terms of service.",
  alternates: {
    canonical: 'https://www.saimdev.site/terms'
  }
};

export default function Page() {
  return <TermsOfService />;
}
