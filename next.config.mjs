/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },

          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com; frame-src 'none'; object-src 'none'; base-uri 'self';",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Evergreen Blog Migration
      {
        source: '/blog/why-small-business-needs-website-2026',
        destination: '/blog/why-small-business-needs-website',
        permanent: true,
      },
      // 1. Hub Canonicalization
      {
        source: '/food-safety-templates',
        destination: '/tools',
        permanent: true,
      },
      // 2. Cooling historical aliases consolidation
      {
        source: '/food-safety-templates/two-stage-cooling-method',
        destination: '/food-safety-templates/food-cooling-poster',
        permanent: true,
      },
      {
        source: '/food-safety-templates/cooling-food-methods-poster',
        destination: '/food-safety-templates/food-cooling-poster',
        permanent: true,
      },
      {
        source: '/food-safety-templates/cooling-food-methods',
        destination: '/food-safety-templates/food-cooling-poster',
        permanent: true,
      },
      {
        source: '/food-safety-templates/two-stage-cooling',
        destination: '/food-safety-templates/food-cooling-poster',
        permanent: true,
      },
      // 3. MERGE near-duplicate pages consolidation
      // 4. Hub Cluster link alias fallbacks & missing variants
      {
        source: '/food-safety-templates/fridge-temperature-log',
        destination: '/food-safety-templates/fridge-temperature-record-sheet-pdf',
        permanent: true,
      },
      {
        source: '/food-safety-templates/freezer-temperature-log',
        destination: '/food-safety-templates/freezer-temperature-chart',
        permanent: true,
      },
      {
        source: '/food-safety-templates/opening-closing-checklist',
        destination: '/food-safety-templates/opening-and-closing-checklist-template',
        permanent: true,
      },
      {
        source: '/food-safety-templates/chopping-board-guide',
        destination: '/food-safety-templates/chopping-board-colour-chart',
        permanent: true,
      },
      {
        source: '/food-safety-templates/handwashing-poster',
        destination: '/food-safety-templates/hand-washing-poster',
        permanent: true,
      },
      {
        source: '/blog/fhrs-food-hygiene-rating-guide-uk',
        destination: '/blog/uk-food-hygiene-rating-scheme-5-star-checklist',
        permanent: true,
      },
      {
        source: '/tools/food-allergen-chart',
        destination: '/food-safety-templates/food-allergen-chart',
        permanent: true,
      },
      {
        source: '/food-safety-templates/delivery-intake-log',
        destination: '/food-safety-templates/delivery-log',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
