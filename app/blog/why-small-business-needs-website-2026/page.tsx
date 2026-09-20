import type { Metadata } from 'next';
import { BlogPost1Page } from '@/components/BlogPost1Page';

export const metadata: Metadata = {
  title: "Why Every Small Business Needs a Professional Website in 2026 | Saim Dev",
  description: "98% of consumers search online for local businesses...",
  alternates: {
    canonical: 'https://www.saimdev.site/blog/why-small-business-needs-website-2026'
  }
};

export default function Page() {
  return <BlogPost1Page />;
}
