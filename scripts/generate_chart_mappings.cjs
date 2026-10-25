const fs = require('fs');

const chartMatches = JSON.parse(fs.readFileSync('scripts/chart_matches.json', 'utf8'));
const urlStatuses = JSON.parse(fs.readFileSync('scripts/chart_url_status.json', 'utf8'));

const mappings = [];

chartMatches.forEach(c => {
  const status = urlStatuses.find(s => s.id === c.id);
  let downloadUrl = status && status.pngStatus === 200 ? status.pngUrl : null;
  let method = 'direct';

  // Special cases
  if (c.id === 'template-5') {
    downloadUrl = 'https://www.fooddocs.com/hubfs/HACCP_templates/PDF/QR/14_allergens_poster.png';
  } else if (c.id === 'template-31') {
    downloadUrl = 'https://www.fooddocs.com/hubfs/HACCP_templates/PDF/QR/Pest_management_plan.png';
  } else if (c.id === 'template-22') {
    downloadUrl = 'https://www.fooddocs.com/hubfs/HACCP_templates/PDF/Walk-in_cooler_food_storage_chart.pdf';
    method = 'pdf_playwright';
  }

  mappings.push({
    id: c.id,
    title: c.title,
    slug: c.slug,
    method,
    downloadUrl,
    destPath: `public/templates/charts/${c.id}.png`,
    siteImgUrl: `/templates/charts/${c.id}.png`
  });
});

fs.writeFileSync('scripts/chart_mappings.json', JSON.stringify(mappings, null, 2));
console.log(`Created mappings for all ${mappings.length} charts.`);
const validUrls = mappings.filter(m => m.downloadUrl);
console.log(`Valid URLs: ${validUrls.length}/${mappings.length}`);
mappings.forEach(m => {
  console.log(`[${m.id}] ${m.title} -> ${m.method}: ${m.downloadUrl}`);
});
