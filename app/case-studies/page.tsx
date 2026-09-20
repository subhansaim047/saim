import type { Metadata } from 'next';
import { CaseStudiesPage } from '@/components/CaseStudiesPage';

export const metadata: Metadata = {
  title: "Case Studies | Saim Dev",
  description: "Real results, fast performance, and increased conversions for our clients.",
  alternates: {
    canonical: 'https://www.saimdev.site/case-studies'
  }
};

export default function Page() {
  return <CaseStudiesPage />;
}
