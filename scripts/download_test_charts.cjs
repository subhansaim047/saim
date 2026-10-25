const fs = require('fs');
const https = require('https');

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed ${res.statusCode} for ${url}`));
      }
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', reject);
  });
}

(async () => {
  await download('https://www.fooddocs.com/hubfs/Food_allergen_chart_1200x630-2.png', 'scripts/test_allergen_chart.png');
  await download('https://www.fooddocs.com/hubfs/Walk-in_cooler_chart_1200x630.png', 'scripts/test_walkin_chart.png');
  await download('https://www.fooddocs.com/hubfs/HACCP_templates/PDF/QR/Pest_management_plan.png', 'scripts/test_pest_chart.png');
  console.log('Downloaded 3 test charts successfully!');
})();
