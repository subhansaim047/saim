import type { Metadata } from 'next';
import { DemosPage } from '@/components/DemosPage';

export const metadata: Metadata = {
  title: "Demos | Saim Dev",
  description: "Interactive demos.",
  alternates: {
    canonical: 'https://www.saimdev.site/demos'
  }
};

export default function Page() {
  return <DemosPage />;
}
