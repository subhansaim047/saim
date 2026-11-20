import { MetadataRoute } from 'next';

const BASE_URL = 'https://www.saimdev.site';
const LAST_MOD = new Date().toISOString().split('T')[0];

export default function sitemap(): MetadataRoute.Sitemap {
  const corePages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: LAST_MOD, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/overview`, lastModified: LAST_MOD, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/tools`, lastModified: LAST_MOD, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${BASE_URL}/tools/commission-savings-calculator`, lastModified: LAST_MOD, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${BASE_URL}/tools/allergen-matrix-generator`, lastModified: LAST_MOD, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${BASE_URL}/tools/ppds-label-generator`, lastModified: LAST_MOD, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${BASE_URL}/tools/food-cost-calculator`, lastModified: LAST_MOD, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${BASE_URL}/tools/recipe-batch-calculator`, lastModified: LAST_MOD, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${BASE_URL}/services/takeaway-web-design`, lastModified: LAST_MOD, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${BASE_URL}/services/takeaway-web-design-london`, lastModified: LAST_MOD, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/services/takeaway-web-design-manchester`, lastModified: LAST_MOD, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/services/takeaway-web-design-birmingham`, lastModified: LAST_MOD, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/nextjs-developer-uk`, lastModified: LAST_MOD, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${BASE_URL}/services`, lastModified: LAST_MOD, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/services/website-clone`, lastModified: LAST_MOD, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${BASE_URL}/services/website-development`, lastModified: LAST_MOD, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${BASE_URL}/services/custom-web-apps`, lastModified: LAST_MOD, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${BASE_URL}/services/ecommerce-development`, lastModified: LAST_MOD, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/services/ecommerce-shopify`, lastModified: LAST_MOD, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/services/business-websites`, lastModified: LAST_MOD, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/services/wordpress-headless-cms`, lastModified: LAST_MOD, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/services/website-redesign`, lastModified: LAST_MOD, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/services/seo-services`, lastModified: LAST_MOD, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/services/landing-pages-cro`, lastModified: LAST_MOD, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/services/website-speed-optimization`, lastModified: LAST_MOD, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/process`, lastModified: LAST_MOD, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/pricing`, lastModified: LAST_MOD, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/technologies`, lastModified: LAST_MOD, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/case-studies`, lastModified: LAST_MOD, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/demos`, lastModified: LAST_MOD, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/about`, lastModified: LAST_MOD, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: LAST_MOD, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/blogs`, lastModified: LAST_MOD, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/terms`, lastModified: LAST_MOD, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/privacy`, lastModified: LAST_MOD, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/cookie-policy`, lastModified: LAST_MOD, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/disclaimer`, lastModified: LAST_MOD, changeFrequency: 'monthly', priority: 0.6 },
  ];

  const blogSlugs = [
    'nextjs-website-development-cost-uk-us',
    'nextjs-app-router-vs-wordpress-uk-seo',
    'migrate-wordpress-webflow-to-nextjs-seo-guide',
    'nextjs-website-development-guide-uk-us-startups',
    'why-small-business-needs-website',
    'free-website-for-local-business',
    'small-business-website-packages-guide',
    'uk-food-hygiene-rating-scheme-5-star-checklist',
    'natashas-law-ppds-food-labelling-guide',
    'how-to-create-compliant-14-allergen-matrix-uk-restaurants',
    'commercial-kitchen-food-cooling-temperature-guide',
    'mastering-food-cost-percentage-commercial-kitchen-calculator',
    'how-to-scale-recipes-commercial-catering-batch-calculator',
    'sfbb-daily-kitchen-opening-closing-checklist-guide',
    'how-to-write-haccp-plan-uk-food-business-step-by-step',
    'level-2-food-hygiene-practice-test-kitchen-staff-guide',
  ];

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: LAST_MOD,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  return [...corePages, ...blogPages];
}
