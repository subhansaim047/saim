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
    badge: 'Must Read',
    title: 'How to Get a 5-Star Food Hygiene Rating in the UK: Complete EHO Inspection Checklist',
    description:
      'Comprehensive guide for independent UK restaurants, takeaways, and caterers on passing council Environmental Health inspections across food handling, facilities, and HACCP records.',
    author: 'By Saim Dev',
    category: '5-Star Rating',
    category_color: '#10B981',
    video_url:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_155500_808e6fdd-761f-4acd-b3be-cb7e6e700def.mp4',
    poster_url: '/images/blog-tools/tool-1-fhrs-hygiene.webp',
    image_url: '/images/blog-tools/tool-1-fhrs-hygiene.webp',
    tool_badge: 'EHO 5-Star Inspection Checklist',
    url: '/blog/uk-food-hygiene-rating-scheme-5-star-checklist',
    display_order: 1,
  },
  {
    id: 'standard-1',
    type: 'standard',
    badge: null,
    title: "Natasha's Law PPDS Food Labelling Guide for UK Takeaways, Cafes & Delis",
    description:
      'Master mandatory rules for ingredient lists, allergen highlighting, and legal compliance under UK food law.',
    author: 'By Saim Dev',
    category: "Natasha's Law",
    category_color: '#EF4444',
    video_url:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260506_030111_a9e15665-d379-4a7f-8116-695bbe452ad1.mp4',
    poster_url: '/images/blog-tools/tool-2-ppds-generator.webp',
    image_url: '/images/blog-tools/tool-2-ppds-generator.webp',
    tool_badge: 'PPDS Label Generator',
    url: '/blog/natashas-law-ppds-food-labelling-guide',
    display_order: 2,
  },
  {
    id: 'standard-2',
    type: 'standard',
    badge: null,
    title: 'Takeaway Commission Savings Calculator: Escape 30% Delivery App Cuts',
    description:
      'Calculate how much annual profit your restaurant retains by shifting repeat orders onto a 0% commission direct site.',
    author: 'By Saim Dev',
    category: 'Margin ROI',
    category_color: '#3B82F6',
    video_url:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4',
    poster_url: '/images/blog-tools/tool-3-cooling-guide.webp',
    image_url: '/images/blog-tools/tool-3-cooling-guide.webp',
    tool_badge: 'Commission Savings Calculator',
    url: '/tools/commission-savings-calculator',
    display_order: 3,
  },
  {
    id: 'standard-3',
    type: 'standard',
    badge: null,
    title: 'Why Every Small Business Needs a High-Speed Custom Website',
    description:
      'Turn local searches into direct paying customers and avoid recurring monthly builder lock-ins.',
    author: 'By Saim Dev',
    category: 'Web Growth',
    category_color: '#7D1A4A',
    video_url:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_154232_f8809bd2-a6c3-4a38-908d-2005e5b3cb3e.mp4',
    poster_url: '/images/blog-tools/tool-4-allergen-matrix.webp',
    image_url: '/images/blog-tools/tool-4-allergen-matrix.webp',
    tool_badge: 'Small Business Web Strategy',
    url: '/blog/why-small-business-needs-website',
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
