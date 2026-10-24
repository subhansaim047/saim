import type { Metadata } from 'next';
import { ServicesPage } from '@/components/ServicesPage';

export const metadata: Metadata = {
  title: "Web Development Services | Saim Dev",
  description: "High-speed Next.js websites, bespoke takeaway ordering systems, and web architecture tailored for UK and European businesses. Fixed pricing.",
  alternates: {
    canonical: 'https://www.saimdev.site/services'
  },
  openGraph: {
    title: "Web Development Services | Saim Dev",
    description: "High-speed Next.js websites, bespoke takeaway ordering systems, and web architecture tailored for UK and European businesses. Fixed pricing.",
    url: 'https://www.saimdev.site/services',
    siteName: 'Saim Dev',
    locale: 'en_GB',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: "Web Development Services | Saim Dev",
    description: "High-speed Next.js websites, bespoke takeaway ordering systems, and web architecture tailored for UK and European businesses. Fixed pricing."
  }
};

export default function Page() {
  return <ServicesPage />;
}
