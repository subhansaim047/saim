const https = require('https');

function fetchPage(url) {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', () => resolve(''));
  });
}

(async () => {
  const urls = [
    'https://www.fooddocs.com/food-safety-templates/food-allergen-chart',
    'https://www.fooddocs.com/food-safety-templates/walk-in-cooler-food-storage-chart'
  ];

  for (const u of urls) {
    console.log(`\nFetching ${u}...`);
    const html = await fetchPage(u);
    const imgMatches = [...html.matchAll(/https:\/\/www\.fooddocs\.com\/hubfs\/[^"' >]+\.(?:png|jpg|jpeg|webp|pdf|svg)/gi)].map(m => m[0]);
    const unique = [...new Set(imgMatches)];
    console.log(`Found ${unique.length} assets:`);
    unique.forEach(a => console.log('  -', a));
  }
})();
