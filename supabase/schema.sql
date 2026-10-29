-- ==============================================================================
-- Behind the Lens Photography Blog - Supabase Table Schema & Seed Data
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

-- 4. Seed initial records matching exact specification
INSERT INTO public.blog_posts (type, badge, title, description, author, category, category_color, video_url, display_order)
VALUES
  (
    'featured',
    'Must Read',
    'Full-Frame vs. Crop Sensor: Which for Photography?',
    'An honest look at the real-world differences between these camera systems to help you choose what''s actually right for your photography needs.',
    'By August Renner (c)',
    'Gear',
    '#7d1a4a',
    'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_155500_808e6fdd-761f-4acd-b3be-cb7e6e700def.mp4',
    1
  ),
  (
    'standard',
    NULL,
    'Finding Natural Light in Unexpected Places',
    NULL,
    NULL,
    'Lighting',
    '#2c4c34',
    'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260506_030111_a9e15665-d379-4a7f-8116-695bbe452ad1.mp4',
    2
  ),
  (
    'standard',
    NULL,
    'My Approach to Editing: Creating a Consistent Photography Style',
    NULL,
    NULL,
    'Editing',
    '#a63e2d',
    'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4',
    3
  ),
  (
    'standard',
    NULL,
    'Pricing Your Photography: Strategies That Work',
    NULL,
    NULL,
    'Business',
    '#1a2b8c',
    'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_154232_f8809bd2-a6c3-4a38-908d-2005e5b3cb3e.mp4',
    4
  )
ON CONFLICT DO NOTHING;
