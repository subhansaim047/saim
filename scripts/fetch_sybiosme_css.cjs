const fs = require('fs');
const https = require('https');

const cssUrls = [
  'https://www.sybiosme.com/_app/immutable/assets/Button.Bp26Pauk.css',
  'https://www.sybiosme.com/_app/immutable/assets/CheckIcon.Bqr1wAuf.css',
  'https://www.sybiosme.com/_app/immutable/assets/DisclosureIcon.CSNehzIT.css',
  'https://www.sybiosme.com/_app/immutable/assets/0.Z8UYVNhy.css',
  'https://www.sybiosme.com/_app/immutable/assets/Card.Cd4CNt-8.css',
  'https://www.sybiosme.com/_app/immutable/assets/ContactAccordion.BL9iYlVt.css'
];

async function downloadCss(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ url, data }));
    }).on('error', reject);
  });
}

async function run() {
  const results = await Promise.all(cssUrls.map(downloadCss));
  let combined = '';
  for (const r of results) {
    const filename = r.url.split('/').pop();
    fs.writeFileSync(`scripts/${filename}`, r.data);
    combined += `/* === ${filename} === */\n` + r.data + '\n\n';
  }
  fs.writeFileSync('scripts/sybiosme_extracted.css', combined);
  console.log('Saved combined css, size:', combined.length);
}

run().catch(console.error);
