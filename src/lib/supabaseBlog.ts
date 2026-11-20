import { createClient } from '@supabase/supabase-js';

export interface BlogPost {
  id?: string | number;
  type: 'featured' | 'standard';
  badge?: string | null;
  title: string;
  description?: string | null;
  author?: string | null;
  category: string;
  category_color: string;
  video_url: string;
  poster_url?: string;
  image_url?: string;
  tool_badge?: string;
  url: string;
  display_order: number;
}

export const DEFAULT_BLOG_POSTS: BlogPost[] = [
  {
    id: 'featured-1',
    type: 'featured',
    badge: 'Flagship Pricing Guide',
    title: 'Next.js Website Development Cost in the UK & US (2026 Breakdown)',
    description:
      'Compare real UK GBP (£250–£1,490) and US USD ($300–$1,850) fixed-milestone Next.js build quotes against traditional agency retainers and 24-month CMS TCO.',
    author: 'By Saim Dev',
    category: 'Next.js Pricing',
    category_color: '#10B981',
    video_url:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_155500_808e6fdd-761f-4acd-b3be-cb7e6e700def.mp4',
    poster_url: '/images/blog-tools/tool-1-fhrs-hygiene.webp',
    image_url: '/images/blog-tools/tool-1-fhrs-hygiene.webp',
    tool_badge: '2026 GBP & USD Cost Matrix',
    url: '/blog/nextjs-website-development-cost-uk-us',
    display_order: 1,
  },
  {
    id: 'standard-1',
    type: 'standard',
    badge: null,
    title: 'Next.js App Router vs WordPress for UK & US Google SEO',
    description:
      'Technical comparison of React Server Components, mobile Core Web Vitals, and unified JSON-LD entity graphs against WordPress plugins.',
    author: 'By Saim Dev',
    category: 'Next.js SEO',
    category_color: '#3B82F6',
    video_url:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260506_030111_a9e15665-d379-4a7f-8116-695bbe452ad1.mp4',
    poster_url: '/images/blog-tools/tool-2-ppds-generator.webp',
    image_url: '/images/blog-tools/tool-2-ppds-generator.webp',
    tool_badge: 'Core Web Vitals & Schema Graph',
    url: '/blog/nextjs-app-router-vs-wordpress-uk-seo',
    display_order: 2,
  },
  {
    id: 'standard-2',
    type: 'standard',
    badge: null,
    title: 'How to Migrate WordPress or Webflow to Next.js Without Losing Google Rankings',
    description:
      'Step-by-step zero-traffic-loss blueprint covering permanent 301 redirect matrices, canonical parity, and pre-cutover verification.',
    author: 'By Saim Dev',
    category: 'SEO Migration',
    category_color: '#6366F1',
    video_url:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4',
    poster_url: '/images/blog-tools/tool-3-cooling-guide.webp',
    image_url: '/images/blog-tools/tool-3-cooling-guide.webp',
    tool_badge: 'Zero-Loss 301 Migration Blueprint',
    url: '/blog/migrate-wordpress-webflow-to-nextjs-seo-guide',
    display_order: 3,
  },
  {
    id: 'standard-3',
    type: 'standard',
    badge: null,
    title: 'Zero Commission Takeaway Ordering System UK: Complete Direct Ordering Blueprint',
    description:
      'How UK takeaways transition repeat customers off 30% delivery app fees onto an owned £250 direct Apple Pay ordering website.',
    author: 'By Saim Dev',
    category: '0% Commission Ordering',
    category_color: '#7D1A4A',
    video_url:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_154232_f8809bd2-a6c3-4a38-908d-2005e5b3cb3e.mp4',
    poster_url: '/images/blog-tools/tool-4-allergen-matrix.webp',
    image_url: '/images/blog-tools/tool-4-allergen-matrix.webp',
    tool_badge: 'Direct Takeaway ROI Blueprint',
    url: '/blog/zero-commission-takeaway-online-ordering-system-uk-guide',
    display_order: 4,
  },
];

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

/**
 * Fetches blog posts from Supabase `blog_posts` table ordered by `display_order` ascending.
 * Falls back safely to DEFAULT_BLOG_POSTS if Supabase is unconfigured or encounters a network error.
 */
export async function fetchBlogPosts(): Promise<BlogPost[]> {
  if (!supabase) {
    return DEFAULT_BLOG_POSTS;
  }

  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('display_order', { ascending: true });

    if (error || !data || data.length === 0) {
      return DEFAULT_BLOG_POSTS;
    }

    return data as BlogPost[];
  } catch (err) {
    console.warn('Supabase fetch failed, using fallback data:', err);
    return DEFAULT_BLOG_POSTS;
  }
}
