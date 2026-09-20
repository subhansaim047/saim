import type { Metadata } from 'next';
import { PrivacyPolicy } from '@/components/PrivacyPolicy';

export const metadata: Metadata = {
  title: "Privacy Policy | Saim Dev",
  description: "Privacy policy.",
  alternates: {
    canonical: 'https://www.saimdev.site/privacy'
  }
};

export default function Page() {
  return <PrivacyPolicy />;
}
