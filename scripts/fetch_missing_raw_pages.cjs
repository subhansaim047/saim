const fs = require('fs');
const path = require('path');

const RAW_PAGES_DIR = path.join(__dirname, '../audit/raw_tjm/pages');
const LOCAL_PAGES_DIR = path.join(__dirname, '../public/hq-leathercon/pages');

if (!fs.existsSync(RAW_PAGES_DIR)) fs.mkdirSync(RAW_PAGES_DIR, { recursive: true });

const localSlugs = fs.readdirSync(LOCAL_PAGES_DIR, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name);

// Also add any pages referenced in raw_tjm/home.html header/footer
const extraPageSlugs = [
  'reviews',
  'press',
  'celebrity-style',
  'custom-leather-keychains',
  'black-friday-jacket-deals',
  'track-order'
];

const allPageSlugs = Array.from(new Set([...localSlugs, ...extraPageSlugs]));

async function run() {
  console.log(`Checking ${allPageSlugs.length} page slugs against raw_tjm/pages...`);
  let fetched = 0;
  let existing = 0;
  let failed = [];

  for (const slug of allPageSlugs) {
    const rawFile = path.join(RAW_PAGES_DIR, `${slug}.html`);
    if (fs.existsSync(rawFile) && fs.statSync(rawFile).size > 15000) {
      existing++;
      continue;
    }
    try {
      const url = `https://www.thejacketmaker.pk/pages/${slug}`;
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
        }
      });
      if (res.ok) {
        const html = await res.text();
        fs.writeFileSync(rawFile, html, 'utf8');
        fetched++;
        const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
        const h1 = h1Match ? h1Match[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim() : 'no-h1';
        console.log(`  [FETCHED] ${slug} (${html.length} bytes, H1: "${h1.slice(0, 50)}")`);
      } else {
        console.log(`  [HTTP ${res.status}] ${slug}`);
        failed.push({ slug, status: res.status });
      }
    } catch (e) {
      console.log(`  [ERR] ${slug}: ${e.message}`);
      failed.push({ slug, error: e.message });
    }
  }
  console.log(`\nDone! Existing: ${existing}, Fetched: ${fetched}, Failed/404: ${failed.length}`);
  if (failed.length > 0) console.log('Failed slugs:', failed);
}

run();
