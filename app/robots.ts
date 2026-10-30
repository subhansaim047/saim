import { MetadataRoute } from 'next';

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
        userAgent: 'Googlebot-Image',
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
    sitemap: [
      'https://www.saimdev.site/sitemap.xml',
      'https://www.saimdev.site/image-sitemap.xml',
    ],
  };
}
