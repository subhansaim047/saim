import type { Metadata } from 'next';
import { TechnologiesPage } from '@/components/TechnologiesPage';

export const metadata: Metadata = {
  title: "Technologies | Saim Dev",
  description: "Tech stack used for modern web dev.",
  alternates: {
    canonical: 'https://www.saimdev.site/technologies'
  }
};

export default function Page() {
  return <TechnologiesPage />;
}
