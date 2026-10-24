import type { Metadata } from 'next';
import { DemosPage } from '@/components/DemosPage';

export const metadata: Metadata = {
  title: "Interactive Takeaway & Web Demos | Saim Dev",
  description: "Explore interactive web demos and digital menus built for UK restaurants and takeaways. Experience sub-second speed and mobile-first design.",
  alternates: {
    canonical: 'https://www.saimdev.site/demos'
  },
  openGraph: {
    title: "Interactive Takeaway & Web Demos | Saim Dev",
    description: "Explore interactive web demos and digital menus built for UK restaurants and takeaways. Experience sub-second speed and mobile-first design.",
    url: 'https://www.saimdev.site/demos',
    siteName: 'Saim Dev',
    locale: 'en_GB',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: "Interactive Takeaway & Web Demos | Saim Dev",
    description: "Explore interactive web demos and digital menus built for UK restaurants and takeaways. Experience sub-second speed and mobile-first design."
  }
};

export default function Page() {
  return <DemosPage />;
}
