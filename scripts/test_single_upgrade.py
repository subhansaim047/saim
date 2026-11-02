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

def upgrade_demo_html(filepath, title, desc, canonical_path):
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        html = f.read()

    # 1. Clean existing robots meta tag
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

    # 2. Inject Banner right after <body ...>
    if 'id="saimdev-demo-banner"' not in html:
        # Find body tag
        body_match = re.search(r'(<body[^>]*>)', html, re.IGNORECASE)
        if body_match:
            full_body_tag = body_match.group(1)
            html = html.replace(full_body_tag, full_body_tag + '\n' + BANNER_HTML + '\n', 1)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"Successfully upgraded: {filepath}")

# Test on single file first
upgrade_demo_html(
    "public/burger-garage/about.html",
    "About Burger Garage | Takeaway Showcase Demo | Saim Dev",
    "About page demonstration for Burger Garage takeaway demo. Built by Saim Dev showcasing story-driven restaurant branding and mobile-first speed.",
    "burger-garage/about.html"
)
