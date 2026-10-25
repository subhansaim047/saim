/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
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
      {
        source: '/food-safety-templates/food-allergy-warning',
        destination: '/food-safety-templates/food-allergen-chart',
        permanent: true,
      },
      {
        source: '/food-safety-templates/cleaning-checklist-template',
        destination: '/food-safety-templates/cleaning-schedule',
        permanent: true,
      },
      {
        source: '/food-safety-templates/cleaning-restaurant',
        destination: '/food-safety-templates/restaurant-cleaning-checklist',
        permanent: true,
      },
      {
        source: '/food-safety-templates/pest-control-inspection-checklist',
        destination: '/food-safety-templates/pest-control-checklist',
        permanent: true,
      },
      {
        source: '/food-safety-templates/pest-management-plan',
        destination: '/food-safety-templates/pest-control-checklist',
        permanent: true,
      },
      {
        source: '/food-safety-templates/pest-control-template',
        destination: '/food-safety-templates/pest-control-checklist',
        permanent: true,
      },
      {
        source: '/food-safety-templates/pest-control-sop',
        destination: '/food-safety-templates/pest-control-checklist',
        permanent: true,
      },
      {
        source: '/food-safety-templates/bar-opening-closing-checklist',
        destination: '/food-safety-templates/opening-and-closing-checklist-template',
        permanent: true,
      },
      {
        source: '/food-safety-templates/bar-opening-checklist',
        destination: '/food-safety-templates/opening-and-closing-checklist-template',
        permanent: true,
      },
      {
        source: '/food-safety-templates/restaurant-opening-checklist',
        destination: '/food-safety-templates/opening-and-closing-checklist-template',
        permanent: true,
      },
      {
        source: '/food-safety-templates/restaurant-checklist',
        destination: '/food-safety-templates/opening-and-closing-checklist-template',
        permanent: true,
      },
      {
        source: '/food-safety-templates/kitchen-opening-and-closing-checklist',
        destination: '/food-safety-templates/opening-and-closing-checklist-template',
        permanent: true,
      },
      {
        source: '/food-safety-templates/allergen-poster',
        destination: '/food-safety-templates/food-allergen-chart',
        permanent: true,
      },
      {
        source: '/food-safety-templates/allergen-control-sop',
        destination: '/food-safety-templates/food-allergen-chart',
        permanent: true,
      },
      {
        source: '/food-safety-templates/natashas-law',
        destination: '/food-safety-templates/food-allergen-chart',
        permanent: true,
      },
      {
        source: '/food-safety-templates/deep-cleaning-checklist',
        destination: '/food-safety-templates/restaurant-cleaning-checklist',
        permanent: true,
      },
      {
        source: '/food-safety-templates/restaurant-deep-cleaning-checklist',
        destination: '/food-safety-templates/restaurant-cleaning-checklist',
        permanent: true,
      },
      {
        source: '/food-safety-templates/calculating-food-cost',
        destination: '/food-safety-templates/food-cost-calculator',
        permanent: true,
      },
      {
        source: '/food-safety-templates/cutting-board-color-chart',
        destination: '/food-safety-templates/chopping-board-colour-chart',
        permanent: true,
      },
      {
        source: '/food-safety-templates/fsma-food-traceability-list',
        destination: '/food-safety-templates/food-traceability',
        permanent: true,
      },
      {
        source: '/food-safety-templates/fsma-compliance-checklist',
        destination: '/food-safety-templates/opening-and-closing-checklist-template',
        permanent: true,
      },
      {
        source: '/food-safety-templates/ecosure-inspection-checklist',
        destination: '/food-safety-templates/restaurant-cleaning-checklist',
        permanent: true,
      },
      {
        source: '/food-safety-templates/amazon-seller-and-product-requirements',
        destination: '/food-safety-templates/food-traceability',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
