const https = require('https');
const fs = require('fs');
const path = require('path');

const mappings = JSON.parse(fs.readFileSync(path.join(__dirname, 'poster_mappings.json'), 'utf8'));

async function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, { method: 'HEAD', headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      resolve(res.statusCode);
    }).on('error', (err) => {
      resolve(500);
    });
  });
}

async function run() {
  console.log(`Checking ${mappings.length} poster URLs...`);
  const results = [];
  for (let i = 0; i < mappings.length; i++) {
    const item = mappings[i];
    const status = await checkUrl(item.posterPngUrl);
    console.log(`[${i + 1}/${mappings.length}] ${status} => ${item.title} (${item.posterPngUrl})`);
    results.push({ ...item, status });
  }

  const okCount = results.filter((r) => r.status === 200).length;
  const non200 = results.filter((r) => r.status !== 200);

  console.log(`\nResults: ${okCount}/${mappings.length} returned 200 OK.`);
  if (non200.length > 0) {
    console.log('Non-200 items:', non200);
  }
}

run();
