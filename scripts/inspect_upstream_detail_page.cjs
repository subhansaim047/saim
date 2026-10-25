const https = require('https');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, data }));
    }).on('error', reject);
  });
}

async function run() {
  const res = await fetchUrl('https://www.fooddocs.com/food-safety-templates/freezer-temperature-chart');
  console.log('Status:', res.status, 'Length:', res.data.length);
  // find H1, H2, form, main elements
  const h1Match = res.data.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  console.log('H1:', h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim() : 'None');
  
  // check sections
  const sections = res.data.match(/<h2[^>]*>([\s\S]*?)<\/h2>/gi) || [];
  console.log('H2s:', sections.slice(0, 6).map(s => s.replace(/<[^>]+>/g, '').trim()));
}

run();
