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
  display_order: number;
}

export const DEFAULT_BLOG_POSTS: BlogPost[] = [
  {
    id: 'featured-1',
    type: 'featured',
    badge: 'Must Read',
    title: 'Full-Frame vs. Crop Sensor: Which for Photography?',
    description:
      "An honest look at the real-world differences between these camera systems to help you choose what's actually right for your photography needs.",
    author: 'By August Renner (c)',
    category: 'Gear',
    category_color: '#7d1a4a',
    video_url:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_155500_808e6fdd-761f-4acd-b3be-cb7e6e700def.mp4',
    display_order: 1,
  },
  {
    id: 'standard-1',
    type: 'standard',
    badge: null,
    title: 'Finding Natural Light in Unexpected Places',
    category: 'Lighting',
    category_color: '#2c4c34',
    video_url:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260506_030111_a9e15665-d379-4a7f-8116-695bbe452ad1.mp4',
    display_order: 2,
  },
  {
    id: 'standard-2',
    type: 'standard',
    badge: null,
    title: 'My Approach to Editing: Creating a Consistent Photography Style',
    category: 'Editing',
    category_color: '#a63e2d',
    video_url:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4',
    display_order: 3,
  },
  {
    id: 'standard-3',
    type: 'standard',
    badge: null,
    title: 'Pricing Your Photography: Strategies That Work',
    category: 'Business',
    category_color: '#1a2b8c',
    video_url:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_154232_f8809bd2-a6c3-4a38-908d-2005e5b3cb3e.mp4',
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
