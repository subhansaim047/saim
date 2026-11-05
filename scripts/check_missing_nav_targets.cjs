const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const RAW_DIR = path.join(__dirname, '../audit/raw_tjm');
const BASE_DIR = path.join(__dirname, '../public/hq-leathercon');

const rawHome = fs.readFileSync(path.join(RAW_DIR, 'home.html'), 'utf8');
const $ = cheerio.load(rawHome);

const missingCols = new Set();
const missingPages = new Set();
const missingProds = new Set();

$('a[href]').each((_, el) => {
  const href = $(el).attr('href') || '';
  const clean = href.replace(/^https?:\/\/[^/]+/, '').split('?')[0].split('#')[0].replace(/\/$/, '');
  if (clean.startsWith('/collections/')) {
    const slug = clean.split('/collections/')[1].split('/')[0];
    if (slug && !fs.existsSync(path.join(BASE_DIR, 'collections', slug, 'index.html'))) {
      missingCols.add(slug);
    }
  } else if (clean.startsWith('/pages/')) {
    const slug = clean.split('/pages/')[1].split('/')[0];
    if (slug && !fs.existsSync(path.join(BASE_DIR, 'pages', slug, 'index.html')) && !fs.existsSync(path.join(BASE_DIR, 'policies', slug, 'index.html'))) {
      missingPages.add(slug);
    }
  } else if (clean.startsWith('/products/')) {
    const slug = clean.split('/products/')[1].split('/')[0];
    if (slug && !fs.existsSync(path.join(BASE_DIR, 'products', slug, 'index.html'))) {
      missingProds.add(slug);
    }
  }
});

console.log('Missing collections referenced on raw_tjm/home.html:', Array.from(missingCols));
console.log('Missing pages referenced on raw_tjm/home.html:', Array.from(missingPages));
console.log('Missing products referenced on raw_tjm/home.html:', Array.from(missingProds));
