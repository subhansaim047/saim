import { MetadataRoute } from 'next';

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
