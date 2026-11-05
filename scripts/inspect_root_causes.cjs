const fs = require('fs');
const path = require('path');

const AUDIT_DIR = path.join(__dirname, '../audit');
const BASE_DIR = path.join(__dirname, '../public/hq-leathercon');

// 1. Check what is inside audit/raw_tjm
const rawTjmDir = path.join(AUDIT_DIR, 'raw_tjm');
if (fs.existsSync(rawTjmDir)) {
  console.log('raw_tjm subdirs:', fs.readdirSync(rawTjmDir));
  for (const sub of ['collections', 'pages', 'policies', 'products']) {
    const p = path.join(rawTjmDir, sub);
    if (fs.existsSync(p)) {
      const files = fs.readdirSync(p);
      console.log(`  raw_tjm/${sub}: ${files.length} items -> sample:`, files.slice(0, 10));
    }
  }
}

// 2. Check collections_data.json and all_store_collections.json and all_store_products_complete.json
for (const fname of ['all_store_collections.json', 'collections_data.json', 'all_store_products_complete.json', 'all_products_detailed.json']) {
  const fp = path.join(AUDIT_DIR, fname);
  if (fs.existsSync(fp)) {
    const data = JSON.parse(fs.readFileSync(fp, 'utf8'));
    if (Array.isArray(data)) {
      console.log(`${fname}: Array of ${data.length} items. Keys of [0]:`, data[0] ? Object.keys(data[0]) : 'empty');
    } else if (typeof data === 'object' && data !== null) {
      const keys = Object.keys(data);
      console.log(`${fname}: Object with ${keys.length} keys. Sample keys:`, keys.slice(0, 15));
    }
  }
}

// 3. Check which files have the 3,681 suspicious ionic-black-leather-jacket links
const fullAuditLog = fs.readFileSync(path.join(__dirname, '../scripts/full_mismatch_audit.cjs'), 'utf8');
// Let's count per-file suspicious ionic links
const cheerio = require('cheerio');
function countSuspiciousInDir(dirName) {
  const fullDir = path.join(BASE_DIR, dirName);
  const byFile = {};
  if (!fs.existsSync(fullDir)) return byFile;
  for (const d of fs.readdirSync(fullDir, { withFileTypes: true })) {
    if (!d.isDirectory()) continue;
    const fp = path.join(fullDir, d.name, 'index.html');
    if (!fs.existsSync(fp)) continue;
    const html = fs.readFileSync(fp, 'utf8');
    const matches = html.match(/ionic-black-leather-jacket/g);
    if (matches && matches.length > 0) {
      byFile[d.name] = matches.length;
    }
  }
  return byFile;
}

console.log('\nOccurrences of "ionic-black-leather-jacket" in collections:');
console.log(countSuspiciousInDir('collections'));
console.log('\nOccurrences of "ionic-black-leather-jacket" in pages:');
console.log(countSuspiciousInDir('pages'));

// 4. Inspect a sample non-ionic product page to see where ionic-black-leather-jacket appears in it
const sampleProdHtml = fs.readFileSync(path.join(BASE_DIR, 'products/aaron-black-leather-bomber-jacket/index.html'), 'utf8');
const lines = sampleProdHtml.split('\n');
console.log('\nLines with "ionic-black-leather-jacket" in aaron-black-leather-bomber-jacket:');
lines.forEach((line, idx) => {
  if (line.includes('ionic-black-leather-jacket')) {
    console.log(`  Line ${idx + 1}: ${line.trim().slice(0, 140)}`);
  }
});
