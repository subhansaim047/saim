import type { Metadata } from 'next';
import { BlogPost2Page } from '@/components/BlogPost2Page';

export const metadata: Metadata = {
  title: "I'm Building 5 Free Websites for Local Businesses — Here's Why | Saim Dev",
  description: "Free professional websites for 5 local businesses...",
  alternates: {
    canonical: 'https://www.saimdev.site/blog/free-website-for-local-business'
  }
};

export default function Page() {
  return <BlogPost2Page />;
}
