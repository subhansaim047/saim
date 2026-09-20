import type { Metadata } from 'next';
import { BlogsPage } from '@/components/BlogsPage';

export const metadata: Metadata = {
  title: "Blogs | Saim Dev",
  description: "Read the latest blogs.",
  alternates: {
    canonical: 'https://www.saimdev.site/blogs'
  }
};

export default function Page() {
  return <BlogsPage />;
}
