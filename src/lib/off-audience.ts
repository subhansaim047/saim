/**
 * src/lib/off-audience.ts
 *
 * Centralized registry of off-audience, out-of-jurisdiction, or industrial manufacturing
 * food safety pages. These pages are kept live for direct downloads but strictly marked
 * as `noindex, follow`, excluded from `sitemap.xml`, and demoted to the bottom "More resources"
 * drawer on /tools to protect domain authority and UK commercial kitchen relevance.
 */

export const OFF_AUDIENCE_SLUGS: string[] = [
  // Industrial food manufacturing & certification standards (non-hospitality)
  "brc-audit",
  "kosher-certification",
  "non-gmo",
  "amazon-seller-and-product-requirements",
  "ecosure-inspection-checklist",
  "sqf-audit-checklist",
  "gfsi-audit-checklist",
  "get-iso-22000-certified",
  "iso-22000-internal-audit-checklist",
  "fssc-certification-checklist",
  "freeze-drying-time-chart",

  // US-specific regulations / FDA terminology (not applicable to UK FSA/SFBB)
  "fat-tom-poster",
  "three-sink-method",
  "big-6-foodborne-illnesses",

  // Industrial dairy & beverage pasteurization charts
  "turkey-pasteurization-chart",
  "milk-pasteurization-temperature-time-chart",
  "juice-pasteurization-temperature-time-chart",
  "meat-pasteurization-chart",
  "poultry-pasteurization-chart",
  "chicken-pasteurization-chart",

  // Thin single-query temperature doorway pages
  "what-is-the-minimum-hot-holding-temperature-for-fried-chicken",
  "what-is-the-minimum-hot-holding-temperature-requirement-for-pizza",
  "what-is-the-minimum-hot-holding-temperature-for-hot-dog"
];

const OFF_AUDIENCE_SET = new Set(OFF_AUDIENCE_SLUGS);

export function isOffAudience(slug: string): boolean {
  return OFF_AUDIENCE_SET.has(slug);
}
