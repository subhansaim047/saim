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
            key: 'X-XSS-Protection',
            value: '1; mode=block',
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
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.clarity.ms https://*.clarity.ms https://framerusercontent.com https://*.framerusercontent.com https://framer.com https://*.framer.com https://app.framerstatic.com https://*.framerstatic.com https://events.framer.com https://cdn.prod.website-files.com https://assets-global.website-files.com https://d3e54v103j8qbb.cloudfront.net https://ajax.googleapis.com https://cdnjs.cloudflare.com https://unpkg.com https://cdn.jsdelivr.net https://use.fontawesome.com https://lottie.host https://*.lottie.host https://cdn.trustindex.io https://dilicious-demo.pbminfotech.com https://*.pbminfotech.com; style-src 'self' 'unsafe-inline' https:; font-src 'self' data: https:; img-src 'self' data: blob: https:; media-src 'self' data: blob: https:; connect-src 'self' https:; frame-src 'self' https://framer.com https://*.framer.com https://www.google.com https://maps.google.com https://player.vimeo.com https://www.youtube.com https://www.openstreetmap.org; worker-src 'self' blob:; object-src 'none'; base-uri 'self';",
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
      // Demo Showcase Routes
      {
        source: '/thejacketmaker',
        destination: '/hq-leathercon/index.html',
        permanent: true,
      },
      {
        source: '/thejacketmaker/:path*',
        destination: '/hq-leathercon/:path*',
        permanent: true,
      },
      {
        source: '/hq-leathercon',
        destination: '/hq-leathercon/index.html',
        permanent: true,
      },
      {
        source: '/hqleathercon',
        destination: '/hq-leathercon/index.html',
        permanent: true,
      },
      {
        source: '/hqleathercon/:path*',
        destination: '/hq-leathercon/:path*',
        permanent: true,
      },
      // 1. Hub Canonicalization
      {
        source: '/food-safety-templates',
        destination: '/tools',
        permanent: true,
      },
      {
        source: '/services/custom-web-apps',
        destination: '/services/website-clone',
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
