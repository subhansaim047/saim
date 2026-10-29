-- ==============================================================================
-- Behind the Lens & Build Blog - Supabase Table Schema & Seed Data
-- ==============================================================================

-- 1. Create table for blog posts
CREATE TABLE IF NOT EXISTS public.blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  type VARCHAR(20) NOT NULL DEFAULT 'standard', -- 'featured' | 'standard'
  badge VARCHAR(50),
  title TEXT NOT NULL,
  description TEXT,
  author VARCHAR(100),
  category VARCHAR(50) NOT NULL,
  category_color VARCHAR(20) NOT NULL,
  video_url TEXT NOT NULL,
  poster_url TEXT,
  url TEXT NOT NULL,
  display_order INT NOT NULL DEFAULT 1,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- 3. Policy: Allow public read access for anon and authenticated users
CREATE POLICY "Allow public read access to blog_posts"
  ON public.blog_posts
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- 4. Seed initial records matching our real blog posts
INSERT INTO public.blog_posts (type, badge, title, description, author, category, category_color, video_url, poster_url, url, display_order)
VALUES
  (
    'featured',
    'Must Read',
    'How to Get a 5-Star Food Hygiene Rating in the UK: Complete EHO Inspection Checklist',
    'Comprehensive guide for independent UK restaurants, takeaways, and caterers on passing council Environmental Health inspections across food handling, facilities, and HACCP records.',
    'By Saim Dev',
    '5-Star Rating',
    '#10B981',
    'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_155500_808e6fdd-761f-4acd-b3be-cb7e6e700def.mp4',
    '/videos/blog-featured-poster.webp',
    '/blog/uk-food-hygiene-rating-scheme-5-star-checklist',
    1
  ),
  (
    'standard',
    NULL,
    'Natasha''s Law PPDS Food Labelling Guide for UK Takeaways, Cafes & Delis',
    'Master mandatory rules for ingredient lists, allergen highlighting, and legal compliance under UK food law.',
    'By Saim Dev',
    'Natasha''s Law',
    '#EF4444',
    'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260506_030111_a9e15665-d379-4a7f-8116-695bbe452ad1.mp4',
    '/videos/blog-standard-1-poster.webp',
    '/blog/natashas-law-ppds-food-labelling-guide',
    2
  ),
  (
    'standard',
    NULL,
    'Commercial Kitchen Food Cooling Guide: The UK 90-Minute Rule & Temperature Limits',
    'Essential guidelines for rapidly cooling cooked food below 8°C in 90 minutes and preventing bacterial growth.',
    'By Saim Dev',
    'Temperature Control',
    '#3B82F6',
    'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4',
    '/videos/blog-standard-2-poster.webp',
    '/blog/commercial-kitchen-food-cooling-temperature-guide',
    3
  ),
  (
    'standard',
    NULL,
    'How to Create a Compliant 14-Allergen Matrix for UK Restaurants & Takeaways',
    'Step-by-step masterclass on auditing recipes, preventing cross-contamination, and building a compliant 14-allergen matrix.',
    'By Saim Dev',
    'Allergen Compliance',
    '#7D1A4A',
    'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_154232_f8809bd2-a6c3-4a38-908d-2005e5b3cb3e.mp4',
    '/videos/blog-standard-3-poster.webp',
    '/blog/how-to-create-compliant-14-allergen-matrix-uk-restaurants',
    4
  )
ON CONFLICT DO NOTHING;
