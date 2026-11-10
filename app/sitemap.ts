import { MetadataRoute } from 'next';
import { FOOD_SAFETY_TEMPLATES } from '@/data/saim_templates';
import pagePlanData from '@/data/page_plan.json';

const BASE_URL = 'https://www.saimdev.site';
const LAST_MOD = '2026-11-05';

type PagePlan = Record<string, { bucket: 'KEEP' | 'IMPROVE' | 'MERGE' | 'NOINDEX'; target_canonical_slug: string }>;
const pagePlan: PagePlan = pagePlanData as PagePlan;

export default function sitemap(): MetadataRoute.Sitemap {
  // ─── Static core pages, tools, services, legal, and showcase demos ─────────
  const corePages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`,                 lastModified: LAST_MOD, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE_URL}/tools`,            lastModified: LAST_MOD, changeFrequency: 'weekly',  priority: 0.95 },
    { url: `${BASE_URL}/tools/ppds-label-generator`, lastModified: LAST_MOD, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${BASE_URL}/tools/food-cost-calculator`, lastModified: LAST_MOD, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${BASE_URL}/tools/allergen-matrix-generator`, lastModified: LAST_MOD, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${BASE_URL}/tools/recipe-batch-calculator`, lastModified: LAST_MOD, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${BASE_URL}/services/takeaway-web-design`, lastModified: LAST_MOD, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${BASE_URL}/services/takeaway-web-design-london`, lastModified: LAST_MOD, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/services/takeaway-web-design-manchester`, lastModified: LAST_MOD, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/services/takeaway-web-design-birmingham`, lastModified: LAST_MOD, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/nextjs-developer-uk`, lastModified: LAST_MOD, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${BASE_URL}/services`,         lastModified: LAST_MOD, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE_URL}/services/website-clone`, lastModified: LAST_MOD, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${BASE_URL}/services/ecommerce-shopify`, lastModified: LAST_MOD, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/services/business-websites`, lastModified: LAST_MOD, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/services/wordpress-headless-cms`, lastModified: LAST_MOD, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/services/landing-pages-cro`, lastModified: LAST_MOD, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/services/website-speed-optimization`, lastModified: LAST_MOD, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/process`,          lastModified: LAST_MOD, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/pricing`,          lastModified: LAST_MOD, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/technologies`,     lastModified: LAST_MOD, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/case-studies`,     lastModified: LAST_MOD, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/demos`,            lastModified: LAST_MOD, changeFrequency: 'weekly',  priority: 0.85 },
    { url: `${BASE_URL}/about`,            lastModified: LAST_MOD, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/contact`,          lastModified: LAST_MOD, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/blogs`,            lastModified: LAST_MOD, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE_URL}/terms`,            lastModified: LAST_MOD, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/privacy`,          lastModified: LAST_MOD, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/cookie-policy`,    lastModified: LAST_MOD, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/disclaimer`,       lastModified: LAST_MOD, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/burger-garage`,    lastModified: LAST_MOD, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/frenchyse`,        lastModified: LAST_MOD, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/anzaar`,           lastModified: LAST_MOD, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/hotbite`,          lastModified: LAST_MOD, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/hq-leathercon/index.html`, lastModified: LAST_MOD, changeFrequency: 'monthly', priority: 0.8 },
  ];

  // ─── Blog posts ────────────────────────────────────────────────────────────
  const blogSlugs = [
    'why-small-business-needs-website',
    'free-website-for-local-business',
    '50-percent-off-agency-launch',
    'how-to-create-compliant-14-allergen-matrix-uk-restaurants',
    'mastering-food-cost-percentage-commercial-kitchen-calculator',
    'how-to-scale-recipes-commercial-catering-batch-calculator',
    'sfbb-daily-kitchen-opening-closing-checklist-guide',
    'how-to-write-haccp-plan-uk-food-business-step-by-step',
    'level-2-food-hygiene-practice-test-kitchen-staff-guide',
    'uk-food-hygiene-rating-scheme-5-star-checklist',
    'natashas-law-ppds-food-labelling-guide',
    'commercial-kitchen-food-cooling-temperature-guide',
  ];
  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: LAST_MOD,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  // ─── All 160 Food safety template detail pages ─────────────────────────────
  const templatePages: MetadataRoute.Sitemap = FOOD_SAFETY_TEMPLATES
    .map((t) => ({
      url: `${BASE_URL}/food-safety-templates/${t.slug}`,
      lastModified: LAST_MOD,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));

  return [...corePages, ...blogPages, ...templatePages];
}
