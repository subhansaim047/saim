import { MetadataRoute } from 'next';
import { FOOD_SAFETY_TEMPLATES } from '@/data/saim_templates';
import pagePlanData from '@/data/page_plan.json';

const BASE_URL = 'https://www.saimdev.site';
const NOW = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

type PagePlan = Record<string, { bucket: 'KEEP' | 'IMPROVE' | 'MERGE' | 'NOINDEX'; target_canonical_slug: string }>;
const pagePlan: PagePlan = pagePlanData as PagePlan;

export default function sitemap(): MetadataRoute.Sitemap {
  // ─── Static core pages ─────────────────────────────────────────────────────
  const corePages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`,                 lastModified: NOW, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE_URL}/tools`,            lastModified: NOW, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE_URL}/food-safety-templates`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/nextjs-developer-uk`, lastModified: NOW, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${BASE_URL}/services`,         lastModified: NOW, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE_URL}/technologies`,     lastModified: NOW, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/case-studies`,     lastModified: NOW, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/demos`,            lastModified: NOW, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE_URL}/about`,            lastModified: NOW, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/contact`,          lastModified: NOW, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/blogs`,            lastModified: NOW, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE_URL}/privacy`,          lastModified: NOW, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/cookie-policy`,    lastModified: NOW, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/disclaimer`,       lastModified: NOW, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/terms`,            lastModified: NOW, changeFrequency: 'monthly', priority: 0.5 },
  ];

  // ─── Blog posts (including new high-intent guides) ─────────────────────────
  const blogSlugs = [
    'why-small-business-needs-website-2026',
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
    lastModified: NOW,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  // ─── Food safety template detail pages (only KEEP & IMPROVE) ───────────────
  const templatePages: MetadataRoute.Sitemap = FOOD_SAFETY_TEMPLATES
    .filter((t) => {
      const plan = pagePlan[t.slug];
      return plan && (plan.bucket === 'KEEP' || plan.bucket === 'IMPROVE');
    })
    .map((t) => ({
      url: `${BASE_URL}/food-safety-templates/${t.slug}`,
      lastModified: NOW,
      changeFrequency: 'weekly' as const,
      priority: t.slug === 'food-allergen-chart' || t.slug === 'allergy-matrix' ? 0.9 : 0.8,
    }));

  return [...corePages, ...blogPages, ...templatePages];
}
