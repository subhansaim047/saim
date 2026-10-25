const https = require('https');
const fs = require('fs');

async function fetchUrl(url) {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      let data = '';
      res.on('data', (c) => (data += c));
      res.on('end', () => resolve({ status: res.statusCode, data }));
    }).on('error', (err) => resolve({ status: 500, error: err }));
  });
}

async function run() {
  const sampleUrls = [
    'https://www.fooddocs.com/food-safety-templates/freezer-temperature-chart',
    'https://www.fooddocs.com/food-safety-templates/hand-washing-poster',
    'https://www.fooddocs.com/food-safety-templates/food-temperatures-poster',
    'https://www.fooddocs.com/food-safety-templates/food-cooling-poster'
  ];

  for (const url of sampleUrls) {
    console.log(`\nFetching ${url}...`);
    const res = await fetchUrl(url);
    console.log(`Status: ${res.status}, Length: ${res.data.length}`);
    if (res.status === 200) {
      // Find all img tags
      const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
      let match;
      const images = [];
      while ((match = imgRegex.exec(res.data)) !== null) {
        images.push(match[1]);
      }
      console.log('Images found:');
      images.forEach((img) => {
        if (img.includes('hubfs') || img.includes('template') || img.includes('poster') || img.includes('Freezer') || img.includes('Cooling') || img.includes('Handwashing') || img.includes('Temperature')) {
          console.log('  -', img);
        }
      });

      // Also check for pdf or preview links or iframe or object
      const pdfMatches = res.data.match(/https:\/\/[^"'\s]+\.pdf/gi) || [];
      console.log('PDFs found:', [...new Set(pdfMatches)]);

      // Check for any canvas or preview div
      const previewBlocks = res.data.match(/class="[^"]*(preview|poster|template-view|document)[^"]*"/gi) || [];
      console.log('Preview classes:', previewBlocks.slice(0, 5));
    }
  }
}

run();
