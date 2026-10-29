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
    poster_url: '/videos/blog-featured-poster.webp',
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
    poster_url: '/videos/blog-standard-1-poster.webp',
    url: '/blog/natashas-law-ppds-food-labelling-guide',
    display_order: 2,
  },
  {
    id: 'standard-2',
    type: 'standard',
    badge: null,
    title: 'Commercial Kitchen Food Cooling Guide: The UK 90-Minute Rule & Temperature Limits',
    description:
      'Essential guidelines for rapidly cooling cooked food below 8°C in 90 minutes and preventing bacterial growth.',
    author: 'By Saim Dev',
    category: 'Temperature Control',
    category_color: '#3B82F6',
    video_url:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4',
    poster_url: '/videos/blog-standard-2-poster.webp',
    url: '/blog/commercial-kitchen-food-cooling-temperature-guide',
    display_order: 3,
  },
  {
    id: 'standard-3',
    type: 'standard',
    badge: null,
    title: 'How to Create a Compliant 14-Allergen Matrix for UK Restaurants & Takeaways',
    description:
      'Step-by-step masterclass on auditing recipes, preventing cross-contamination, and building a compliant 14-allergen matrix.',
    author: 'By Saim Dev',
    category: 'Allergen Compliance',
    category_color: '#7D1A4A',
    video_url:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_154232_f8809bd2-a6c3-4a38-908d-2005e5b3cb3e.mp4',
    poster_url: '/videos/blog-standard-3-poster.webp',
    url: '/blog/how-to-create-compliant-14-allergen-matrix-uk-restaurants',
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
