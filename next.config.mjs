/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    const immutableStatic = [
      { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
    ];
    return [
      { source: '/rh-exact/assets/:path*', headers: immutableStatic },
      { source: '/rh-exact/vendor/:path*', headers: immutableStatic },
      { source: '/rh-exact/nav/:path*', headers: immutableStatic },
      { source: '/rh-exact/footer/:path*', headers: immutableStatic },
      { source: '/rh-exact/pd/:path*', headers: immutableStatic },
      { source: '/rh-exact/case-studies/:path*', headers: immutableStatic },
      { source: '/rh-exact/_astro/:path*', headers: immutableStatic },
      { source: '/demos/previews/:path*', headers: immutableStatic },
      { source: '/templates/:path*', headers: immutableStatic },
      { source: '/images/:path*', headers: immutableStatic },
      { source: '/hero-shots/:path*', headers: immutableStatic },
      { source: '/saim-dev-logo.png', headers: immutableStatic },
      { source: '/saim-dev-logo.jpg', headers: immutableStatic },
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
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin-allow-popups',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.clarity.ms https://*.clarity.ms https://framerusercontent.com https://*.framerusercontent.com https://framer.com https://*.framer.com https://app.framerstatic.com https://*.framerstatic.com https://events.framer.com https://cdn.prod.website-files.com https://assets-global.website-files.com https://d3e54v103j8qbb.cloudfront.net https://ajax.googleapis.com https://cdnjs.cloudflare.com https://unpkg.com https://cdn.jsdelivr.net https://use.fontawesome.com https://lottie.host https://*.lottie.host https://cdn.trustindex.io https://dilicious-demo.pbminfotech.com https://*.pbminfotech.com; style-src 'self' 'unsafe-inline' https:; font-src 'self' data: https:; img-src 'self' data: blob: https:; media-src 'self' data: blob: https:; connect-src 'self' https:; frame-src 'self' https://framer.com https://*.framer.com https://www.google.com https://maps.google.com https://player.vimeo.com https://www.youtube.com https://www.openstreetmap.org; worker-src 'self' blob:; object-src 'none'; base-uri 'self';",
          },
        ],
      },
      {
        source: '/preview-rh',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, follow' }],
      },
      {
        source: '/rh-clone/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
      {
        source: '/hq-leathercon/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
      {
        source: '/burger-garage/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
      {
        source: '/frenchyse/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
      {
        source: '/anzaar/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
      {
        source: '/hotbite/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
      {
        source: '/demos/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
      {
        source: '/test-images.html',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
    ];
  },
  async redirects() {
    return [
      // Host Canonicalization (apex saimdev.site -> www.saimdev.site)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'saimdev.site' }],
        destination: 'https://www.saimdev.site/:path*',
        permanent: true,
      },
      // Evergreen Blog Migration
      {
        source: '/blog/why-small-business-needs-website-2026',
        destination: '/blog/why-small-business-needs-website',
        permanent: true,
      },
      {
        source: '/blog/50-percent-off-agency-launch',
        destination: '/blog/small-business-website-packages-guide',
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
      // Consolidated Redirects: Removed 160 Templates, Food-Safety Calculators & Legacy Posts -> Kept Guides / ROI Calculator
      {
        source: '/tools',
        destination: '/tools/commission-savings-calculator',
        permanent: true,
      },
      {
        source: '/tools/food-cost-calculator',
        destination: '/tools/commission-savings-calculator',
        permanent: true,
      },
      {
        source: '/tools/recipe-batch-calculator',
        destination: '/blog/uk-food-hygiene-rating-scheme-5-star-checklist',
        permanent: true,
      },
      {
        source: '/tools/ppds-label-generator',
        destination: '/blog/natashas-law-ppds-food-labelling-guide',
        permanent: true,
      },
      {
        source: '/tools/allergen-matrix-generator',
        destination: '/blog/natashas-law-ppds-food-labelling-guide',
        permanent: true,
      },
      {
        source: '/tools/food-allergen-chart',
        destination: '/blog/natashas-law-ppds-food-labelling-guide',
        permanent: true,
      },
      {
        source: '/blog/how-to-create-compliant-14-allergen-matrix-uk-restaurants',
        destination: '/blog/natashas-law-ppds-food-labelling-guide',
        permanent: true,
      },
      {
        source: '/blog/commercial-kitchen-food-cooling-temperature-guide',
        destination: '/blog/uk-food-hygiene-rating-scheme-5-star-checklist',
        permanent: true,
      },
      {
        source: '/blog/mastering-food-cost-percentage-commercial-kitchen-calculator',
        destination: '/blog/uk-food-hygiene-rating-scheme-5-star-checklist',
        permanent: true,
      },
      {
        source: '/blog/how-to-scale-recipes-commercial-catering-batch-calculator',
        destination: '/blog/uk-food-hygiene-rating-scheme-5-star-checklist',
        permanent: true,
      },
      {
        source: '/blog/sfbb-daily-kitchen-opening-closing-checklist-guide',
        destination: '/blog/uk-food-hygiene-rating-scheme-5-star-checklist',
        permanent: true,
      },
      {
        source: '/blog/how-to-write-haccp-plan-uk-food-business-step-by-step',
        destination: '/blog/uk-food-hygiene-rating-scheme-5-star-checklist',
        permanent: true,
      },
      {
        source: '/blog/level-2-food-hygiene-practice-test-kitchen-staff-guide',
        destination: '/blog/uk-food-hygiene-rating-scheme-5-star-checklist',
        permanent: true,
      },
      {
        source: '/blog/fhrs-food-hygiene-rating-guide-uk',
        destination: '/blog/uk-food-hygiene-rating-scheme-5-star-checklist',
        permanent: true,
      },
      // Allergen & Natasha template slugs -> Kept Natasha's Law PPDS Guide (before catch-all)
      {
        source: '/food-safety-templates/natashas-law',
        destination: '/blog/natashas-law-ppds-food-labelling-guide',
        permanent: true,
      },
      {
        source: '/food-safety-templates/food-allergen-chart',
        destination: '/blog/natashas-law-ppds-food-labelling-guide',
        permanent: true,
      },
      {
        source: '/food-safety-templates/allergy-matrix',
        destination: '/blog/natashas-law-ppds-food-labelling-guide',
        permanent: true,
      },
      {
        source: '/food-safety-templates/allergen-poster',
        destination: '/blog/natashas-law-ppds-food-labelling-guide',
        permanent: true,
      },
      {
        source: '/food-safety-templates/allergen-control-sop',
        destination: '/blog/natashas-law-ppds-food-labelling-guide',
        permanent: true,
      },
      {
        source: '/food-safety-templates/food-allergy-warning',
        destination: '/blog/natashas-law-ppds-food-labelling-guide',
        permanent: true,
      },
      {
        source: '/food-safety-templates',
        destination: '/blog/uk-food-hygiene-rating-scheme-5-star-checklist',
        permanent: true,
      },
      {
        source: '/food-safety-templates/:path*',
        destination: '/blog/uk-food-hygiene-rating-scheme-5-star-checklist',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [
        { source: '/', destination: '/rh-exact/index.html' },
        { source: '/preview-rh', destination: '/rh-exact/index.html' },
        { source: '/preview-rh/', destination: '/rh-exact/index.html' },
      ],
    };
  },
};

export default nextConfig;
