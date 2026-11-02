import re

disallow_lines = """Disallow: /api/
Disallow: /hotbite/
Disallow: /anzaar/
Disallow: /frenchyse/
Disallow: /demos/*/
Disallow: /test-images.html"""

with open('public/robots.txt', 'r', encoding='utf-8') as f:
    robots_txt = f.read()

# Replace "Disallow: /api/" with full disallows
updated_txt = re.sub(r'Disallow:\s*/api/', disallow_lines, robots_txt)

with open('public/robots.txt', 'w', encoding='utf-8') as f:
    f.write(updated_txt)

print("Updated public/robots.txt successfully")

app_robots_content = '''import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const disallowPaths = [
    '/api/',
    '/hotbite/',
    '/anzaar/',
    '/frenchyse/',
    '/demos/*/',
    '/test-images.html',
  ];

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
          'PerplexityBot',
          'ClaudeBot',
          'GPTBot',
          'CCBot',
        ],
        allow: '/',
        disallow: disallowPaths,
      },
    ],
    sitemap: 'https://www.saimdev.site/sitemap.xml',
  };
}
'''

with open('app/robots.ts', 'w', encoding='utf-8') as f:
    f.write(app_robots_content)

print("Updated app/robots.ts successfully")
