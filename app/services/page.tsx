import type { Metadata } from 'next';
import { ServicesPage } from '@/components/ServicesPage';

export const metadata: Metadata = {
  title: "Services | Saim Dev",
  description: "Custom web development services.",
  alternates: {
    canonical: 'https://www.saimdev.site/services'
  }
};

export default function Page() {
  return <ServicesPage />;
}
