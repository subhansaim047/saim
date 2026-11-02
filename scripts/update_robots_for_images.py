with open('public/robots.txt', 'r', encoding='utf-8') as f:
    text = f.read()

# Add Googlebot-Image after Googlebot
if 'User-agent: Googlebot-Image' not in text:
    text = text.replace(
        'User-agent: Googlebot\nAllow: /\nDisallow: /api/',
        'User-agent: Googlebot\nAllow: /\nDisallow: /api/\n\nUser-agent: Googlebot-Image\nAllow: /\nDisallow: /api/'
    )
    # Also handle CRLF if needed
    if 'User-agent: Googlebot-Image' not in text:
        text = text.replace(
            'User-agent: Googlebot\r\nAllow: /\r\nDisallow: /api/',
            'User-agent: Googlebot\r\nAllow: /\r\nDisallow: /api/\r\n\r\nUser-agent: Googlebot-Image\r\nAllow: /\r\nDisallow: /api/'
        )

# Add image-sitemap.xml
if 'image-sitemap.xml' not in text:
    text = text.strip() + '\nSitemap: https://www.saimdev.site/image-sitemap.xml\n'

with open('public/robots.txt', 'w', encoding='utf-8') as f:
    f.write(text)

print("Updated public/robots.txt")

with open('app/robots.ts', 'r', encoding='utf-8') as f:
    rts = f.read()

if 'image-sitemap.xml' not in rts:
    rts = rts.replace(
        "sitemap: 'https://www.saimdev.site/sitemap.xml',",
        "sitemap: [\n      'https://www.saimdev.site/sitemap.xml',\n      'https://www.saimdev.site/image-sitemap.xml',\n    ],"
    )
    if 'Googlebot-Image' not in rts:
        rts = rts.replace(
            "rules: [\n      {\n        userAgent: '*',",
            "rules: [\n      {\n        userAgent: '*',\n        allow: '/',\n        disallow: disallowPaths,\n      },\n      {\n        userAgent: 'Googlebot-Image',"
        )
    with open('app/robots.ts', 'w', encoding='utf-8') as f:
        f.write(rts)
    print("Updated app/robots.ts")
