import os
import re

BANNER_HTML = '''<!-- Saim Dev Live Demo Top Showcase Banner -->
<div id="saimdev-demo-banner" style="position:relative; z-index:999999; background:#0f172a; color:#f8fafc; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif; font-size:12px; line-height:1.4; padding:8px 16px; border-bottom:2px solid #f59e0b; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:8px;">
  <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
    <span style="background:#f59e0b; color:#0f172a; font-weight:800; font-size:10px; padding:2px 7px; border-radius:4px; text-transform:uppercase; letter-spacing:0.5px; font-family:monospace;">Portfolio Showcase Demo</span>
    <span style="color:#e2e8f0;">Engineered by <strong style="color:#ffffff;">Saim Dev</strong> &bull; Custom Next.js takeaway websites with 0% commission &amp; live online ordering.</span>
  </div>
  <div style="display:flex; align-items:center; gap:10px;">
    <a href="https://www.saimdev.site/services/takeaway-web-design" style="background:#f59e0b; color:#0f172a; text-decoration:none; font-weight:700; padding:4px 12px; border-radius:6px; font-size:11px; white-space:nowrap; display:inline-block;">Get Your Site &pound;250 &rarr;</a>
    <a href="https://www.saimdev.site/demos" style="color:#94a3b8; text-decoration:none; font-size:11px; white-space:nowrap;">&larr; All Demos</a>
  </div>
</div>'''

DEMO_CONFIGS = [
    # burger-garage
    ("public/burger-garage/index.html", "Burger Garage | Live Takeaway Web Design Demo | Saim Dev", "Live takeaway web design demo of Burger Garage built by Saim Dev. High-performance online ordering, interactive menu, and zero aggregator commissions for UK takeaways.", "burger-garage/index.html"),
    ("public/burger-garage/about.html", "About Burger Garage | Takeaway Showcase Demo | Saim Dev", "About page demonstration for Burger Garage takeaway demo. Built by Saim Dev showcasing story-driven restaurant branding and mobile-first speed.", "burger-garage/about.html"),
    ("public/burger-garage/menu.html", "Burger Garage Menu | Online Ordering Showcase | Saim Dev", "Digital takeaway menu demonstration with categories, burgers, and sides. Engineered by Saim Dev with fast load speeds and clean customer UI.", "burger-garage/menu.html"),
    ("public/burger-garage/contact-us.html", "Contact Burger Garage | Restaurant Demo Page | Saim Dev", "Restaurant contact and location demonstration page built by Saim Dev featuring interactive maps, opening hours, and fast contact forms.", "burger-garage/contact-us.html"),
    ("public/burger-garage/contact.html", "Contact Burger Garage | Takeaway Showcase | Saim Dev", "Customer contact showcase page for Burger Garage demo website, designed by Saim Dev for UK fast casual takeaway businesses.", "burger-garage/contact.html"),
    ("public/burger-garage/blog.html", "Burger Garage Culinary Journal | Demo Blog | Saim Dev", "Food culture and culinary blog demonstration page built by Saim Dev for restaurant and takeaway content marketing.", "burger-garage/blog.html"),
    ("public/burger-garage/blog-grid.html", "Burger Garage Articles & News | Demo Grid | Saim Dev", "Responsive blog grid showcase for takeaway and restaurant websites, developed with modern HTML5 and CSS by Saim Dev.", "burger-garage/blog-grid.html"),
    ("public/burger-garage/blog-detail.html", "Burger Garage Article Detail | Demo Post | Saim Dev", "Editorial restaurant blog post demonstration page crafted by Saim Dev with readable typography and social engagement layout.", "burger-garage/blog-detail.html"),
    ("public/burger-garage/blog-details.html", "Burger Garage Recipe Stories | Demo Post | Saim Dev", "Culinary storytelling and recipe blog post showcase, demonstrating editorial restaurant content architecture by Saim Dev.", "burger-garage/blog-details.html"),
    
    # frenchyse
    ("public/frenchyse/index.html", "Frenchyse Fine Dining | Luxury Restaurant Website Demo | Saim Dev", "Live luxury restaurant web design demo of Frenchyse by Saim Dev. Elegant dining layouts, table reservation UI, and bespoke visual architecture.", "frenchyse/index.html"),
    ("public/frenchyse/about-us.html", "About Frenchyse | Haute Cuisine Restaurant Showcase | Saim Dev", "Heritage and culinary philosophy showcase page for Frenchyse luxury restaurant demo, designed and engineered by Saim Dev.", "frenchyse/about-us.html"),
    ("public/frenchyse/menu.html", "Frenchyse À La Carte Menu | Fine Dining Showcase | Saim Dev", "Interactive luxury restaurant menu demonstration featuring chef specials, wine pairings, and elegant culinary formatting by Saim Dev.", "frenchyse/menu.html"),
    ("public/frenchyse/contact-us.html", "Contact & Reservations | Frenchyse Showcase | Saim Dev", "Table booking and VIP dining contact demonstration page for luxury restaurants, built with premium aesthetics by Saim Dev.", "frenchyse/contact-us.html"),
    ("public/frenchyse/our-services.html", "Private Dining & Events | Frenchyse Demo | Saim Dev", "Private catering and luxury event hosting showcase page, demonstrating premium hospitality website design by Saim Dev.", "frenchyse/our-services.html"),
    ("public/frenchyse/transparent.html", "Frenchyse Experience | Restaurant Showcase | Saim Dev", "Interactive dining visual showcase for Frenchyse fine dining website demonstration, crafted by Saim Dev.", "frenchyse/transparent.html"),

    # anzaar
    ("public/anzaar/index.html", "Anzaar Rooftop Dining | Restaurant Web Design Demo | Saim Dev", "Live rooftop restaurant web design demo of ANZAAR by Saim Dev. Panoramic culinary layouts, evening ambiance UI, and table reservations.", "anzaar/index.html"),
    ("public/anzaar/about-us.html", "About Anzaar Rooftop | Restaurant Showcase Demo | Saim Dev", "Rooftop dining experience and story showcase page for ANZAAR demo, engineered by Saim Dev for premium hospitality brands.", "anzaar/about-us.html"),
    ("public/anzaar/menu.html", "Anzaar Dining Menu | Gourmet Cuisine Showcase | Saim Dev", "Interactive gourmet rooftop menu demonstration featuring signature cocktails, charcoal grill dishes, and modern typography by Saim Dev.", "anzaar/menu.html"),
    ("public/anzaar/contact-us.html", "Reservations & Contact | Anzaar Rooftop Demo | Saim Dev", "Rooftop dining reservations and venue contact page demonstration, built with seamless mobile UX by Saim Dev.", "anzaar/contact-us.html"),
    ("public/anzaar/our-services.html", "Private Events & Lounges | Anzaar Showcase | Saim Dev", "Exclusive events, celebrations, and corporate dining showcase page for rooftop restaurants, designed by Saim Dev.", "anzaar/our-services.html"),
    ("public/anzaar/transparent.html", "Anzaar Rooftop Experience | Hospitality Showcase | Saim Dev", "Atmospheric visual demonstration page for ANZAAR rooftop restaurant, engineered by Saim Dev.", "anzaar/transparent.html"),

    # hotbite
    ("public/hotbite/index.html", "O'Resto Pizza & Street Food | Takeaway Ordering Demo | Saim Dev", "Live high-energy street food and pizza takeaway website demo. Interactive pizza sliders, dynamic combos, and 0% commission direct ordering by Saim Dev.", "hotbite/index.html"),
    ("public/hotbite/privacy-policy.html", "Privacy Policy Demo | O'Resto Takeaway Showcase | Saim Dev", "Standard customer privacy policy demonstration page for food takeaway ordering websites, structured by Saim Dev.", "hotbite/privacy-policy.html"),
    ("public/hotbite/privacy-policy/index.html", "Privacy Policy Demo | O'Resto Pizza Showcase | Saim Dev", "Compliance and customer privacy showcase page for modern takeaway ordering platforms by Saim Dev.", "hotbite/privacy-policy/index.html")
]

def upgrade_demo_html(filepath, title, desc, canonical_path):
    if not os.path.exists(filepath):
        print(f"Skipping missing: {filepath}")
        return

    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        html = f.read()

    # Clean existing robots meta tag
    html = re.sub(r'<meta[^>]*name=["\']robots["\'][^>]*>\s*', '', html, flags=re.IGNORECASE)
    html = re.sub(r'<meta[^>]*name=["\']googlebot["\'][^>]*>\s*', '', html, flags=re.IGNORECASE)
    
    # Clean existing title and description
    html = re.sub(r'<title>.*?</title>\s*', '', html, flags=re.DOTALL | re.IGNORECASE)
    html = re.sub(r'<meta[^>]*name=["\']description["\'][^>]*>\s*', '', html, flags=re.IGNORECASE)
    html = re.sub(r'<link[^>]*rel=["\']canonical["\'][^>]*>\s*', '', html, flags=re.IGNORECASE)
    html = re.sub(r'<meta[^>]*property=["\']og:[^"\']+["\'][^>]*>\s*', '', html, flags=re.IGNORECASE)
    html = re.sub(r'<meta[^>]*name=["\']twitter:[^"\']+["\'][^>]*>\s*', '', html, flags=re.IGNORECASE)

    # Clean existing JSON-LD
    html = re.sub(r'<script\s+type=["\']application/ld\+json["\'][^>]*>[\s\S]*?</script>\s*', '', html, flags=re.IGNORECASE)

    clean_url = f"https://www.saimdev.site/{canonical_path.lstrip('/')}"

    seo_block = f'''
    <title>{title}</title>
    <meta name="description" content="{desc}">
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
    <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
    <link rel="canonical" href="{clean_url}">

    <!-- OpenGraph Metadata -->
    <meta property="og:type" content="website">
    <meta property="og:title" content="{title}">
    <meta property="og:description" content="{desc}">
    <meta property="og:url" content="{clean_url}">
    <meta property="og:site_name" content="Saim Dev">
    <meta property="og:image" content="https://www.saimdev.site/og-image.png">

    <!-- Twitter Card Metadata -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="{title}">
    <meta name="twitter:description" content="{desc}">
    <meta name="twitter:image" content="https://www.saimdev.site/og-image.png">
    <meta name="twitter:creator" content="@saimwebdev">

    <!-- GEO / AEO / LLMO Schema Markup -->
    <script type="application/ld+json">
    {{
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": "{title}",
      "headline": "{title}",
      "description": "{desc}",
      "author": {{
        "@type": "Person",
        "name": "Saim",
        "url": "https://www.saimdev.site"
      }},
      "creator": {{
        "@type": "Organization",
        "name": "Saim Dev",
        "url": "https://www.saimdev.site"
      }},
      "publisher": {{
        "@type": "Organization",
        "name": "Saim Dev",
        "url": "https://www.saimdev.site",
        "logo": {{
          "@type": "ImageObject",
          "url": "https://www.saimdev.site/saim-dev-logo.jpg"
        }}
      }},
      "mainEntityOfPage": "{clean_url}"
    }}
    </script>
'''

    # Inject into <head>
    if '<head>' in html:
        html = html.replace('<head>', '<head>' + seo_block, 1)
    elif '<HEAD>' in html:
        html = html.replace('<HEAD>', '<HEAD>' + seo_block, 1)

    # Inject Banner right after <body ...>
    if 'id="saimdev-demo-banner"' not in html:
        body_match = re.search(r'(<body[^>]*>)', html, re.IGNORECASE)
        if body_match:
            full_body_tag = body_match.group(1)
            html = html.replace(full_body_tag, full_body_tag + '\n' + BANNER_HTML + '\n', 1)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"Upgraded: {filepath}")

# Process all files
for fp, t, d, c in DEMO_CONFIGS:
    upgrade_demo_html(fp, t, d, c)

print("\n--- Upgrading public/robots.txt and app/robots.ts ---")
# Keep only Disallow: /api/
new_robots_txt = """# Saim Dev - robots.txt
# https://www.saimdev.site

User-agent: *
Allow: /
Disallow: /api/

# Search Engine Crawlers
User-agent: Googlebot
Allow: /
Disallow: /api/

User-agent: Bingbot
Allow: /
Disallow: /api/

# AI Search & LLM Engine Crawlers (Explicitly Allowed for GEO/AEO Citations)
User-agent: OAI-SearchBot
Allow: /
Disallow: /api/

User-agent: ChatGPT-User
Allow: /
Disallow: /api/

User-agent: GPTBot
Allow: /
Disallow: /api/

User-agent: ClaudeBot
Allow: /
Disallow: /api/

User-agent: Claude-SearchBot
Allow: /
Disallow: /api/

User-agent: Claude-User
Allow: /
Disallow: /api/

User-agent: PerplexityBot
Allow: /
Disallow: /api/

User-agent: Perplexity-User
Allow: /
Disallow: /api/

User-agent: Applebot
Allow: /
Disallow: /api/

User-agent: Applebot-Extended
Allow: /
Disallow: /api/

User-agent: Google-Extended
Allow: /
Disallow: /api/

User-agent: GoogleOther
Allow: /
Disallow: /api/

User-agent: Meta-ExternalAgent
Allow: /
Disallow: /api/

User-agent: Meta-ExternalFetcher
Allow: /
Disallow: /api/

User-agent: DeepSeekBot
Allow: /
Disallow: /api/

User-agent: Amazonbot
Allow: /
Disallow: /api/

User-agent: Bytespider
Allow: /
Disallow: /api/

User-agent: CCBot
Allow: /
Disallow: /api/

User-agent: cohere-ai
Allow: /
Disallow: /api/

# Sitemaps
Sitemap: https://www.saimdev.site/sitemap.xml
"""

with open('public/robots.txt', 'w', encoding='utf-8') as f:
    f.write(new_robots_txt)
print("Updated public/robots.txt (Zero demo disallows)")

new_app_robots = """import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const disallowPaths = ['/api/'];

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: disallowPaths,
      },
      {
        userAgent: [
          'Googlebot',
          'Bingbot',
          'OAI-SearchBot',
          'ChatGPT-User',
          'GPTBot',
          'ClaudeBot',
          'Claude-SearchBot',
          'Claude-User',
          'PerplexityBot',
          'Perplexity-User',
          'Applebot',
          'Applebot-Extended',
          'Google-Extended',
          'GoogleOther',
          'Meta-ExternalAgent',
          'Meta-ExternalFetcher',
          'DeepSeekBot',
          'Amazonbot',
          'Bytespider',
          'CCBot',
          'cohere-ai',
        ],
        allow: '/',
        disallow: disallowPaths,
      },
    ],
    sitemap: 'https://www.saimdev.site/sitemap.xml',
  };
}
"""

with open('app/robots.ts', 'w', encoding='utf-8') as f:
    f.write(new_app_robots)
print("Updated app/robots.ts (Zero demo disallows)")
