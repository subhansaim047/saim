const https = require('https');

const candidates = [
  // template-5
  'https://www.fooddocs.com/hubfs/HACCP_templates/PDF/QR/Food_allergen_chart.png',
  'https://www.fooddocs.com/hubfs/HACCP_templates/PDF/QR/Food_allergen_chart_C.png',
  'https://www.fooddocs.com/hubfs/HACCP_templates/PDF/QR/14_allergens_poster.png',
  'https://www.fooddocs.com/hubfs/HACCP_templates/PDF/QR/Allergen_matrix.png',
  'https://www.fooddocs.com/hubfs/HACCP_templates/Food_allergen_chart.png',

  // template-22
  'https://www.fooddocs.com/hubfs/HACCP_templates/PDF/QR/Walk-in_cooler_food_storage_chart.png',
  'https://www.fooddocs.com/hubfs/HACCP_templates/PDF/QR/Walk-in-cooler.png',
  'https://www.fooddocs.com/hubfs/HACCP_templates/PDF/QR/Walk_in_cooler_food_storage_chart.png',
  'https://www.fooddocs.com/hubfs/HACCP_templates/Walk-in-cooler.png',

  // template-31
  'https://www.fooddocs.com/hubfs/HACCP_templates/PDF/QR/Pest_control_plan.png',
  'https://www.fooddocs.com/hubfs/HACCP_templates/PDF/QR/Pest_management_plan.png',
  'https://www.fooddocs.com/hubfs/HACCP_templates/Pest_control_plan.png',
  'https://www.fooddocs.com/hubfs/HACCP_templates/Pest-management-plan.png'
];

function checkUrl(url) {
  return new Promise((resolve) => {
    const req = https.request(url, { method: 'HEAD', headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      resolve({ url, status: res.statusCode });
    });
    req.on('error', () => resolve({ url, status: 500 }));
    req.setTimeout(5000, () => { req.destroy(); resolve({ url, status: 408 }); });
    req.end();
  });
}

(async () => {
  for (const c of candidates) {
    const r = await checkUrl(c);
    console.log(`${r.status}: ${r.url}`);
  }
})();
