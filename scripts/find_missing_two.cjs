const https = require('https');

async function fetchPage(url) {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', (c) => (data += c));
      res.on('end', () => resolve(data));
    }).on('error', () => resolve(''));
  });
}

async function run() {
  const urls = [
    { name: 'allergen-poster', url: 'https://www.fooddocs.com/food-safety-templates/allergen-poster' },
    { name: 'restaurant-food-safety-procedures', url: 'https://www.fooddocs.com/food-safety-templates/restaurant-food-safety-procedures' }
  ];

  for (const item of urls) {
    console.log(`\nFetching ${item.url}...`);
    const html = await fetchPage(item.url);
    const m = html.match(/id="posterPreview"[^>]*src="([^"]+)"/i) || html.match(/src="([^"]+)"[^>]*id="posterPreview"/i);
    if (m) {
      console.log(`Found posterPreview for ${item.name}:`, m[1]);
    } else {
      console.log(`No posterPreview found for ${item.name}. Searching relevant images:`);
      const all = [...html.matchAll(/https:\/\/[^"'\s]+(?:png|webp|jpg)/gi)]
        .map((x) => x[0])
        .filter((x) => x.includes('hubfs') && !x.includes('logo') && !x.includes('Linnuke') && !x.includes('capterra'));
      console.log([...new Set(all)]);
    }
  }
}

run();
