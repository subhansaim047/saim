const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const RAW_DIR = path.join(__dirname, '../audit/raw_tjm');
const BASE_DIR = path.join(__dirname, '../public/hq-leathercon');

// 1. Compare Header, Mega Menu, and Footer links between raw_tjm/home.html and public/hq-leathercon/index.html
const rawHome = fs.readFileSync(path.join(RAW_DIR, 'home.html'), 'utf8');
const localHome = fs.readFileSync(path.join(BASE_DIR, 'index.html'), 'utf8');

const $raw = cheerio.load(rawHome);
const $loc = cheerio.load(localHome);

console.log('=== 1. HEADER & MEGA MENU LINKS COMPARISON (RAW vs LOCAL) ===');
const rawNavLinks = [];
$raw('header a[href], .navigation a[href], #shopify-section-header a[href]').each((_, el) => {
  const text = $raw(el).text().replace(/\s+/g, ' ').trim();
  const href = $raw(el).attr('href');
  if (text && href) rawNavLinks.push({ text, href });
});

const locNavLinks = [];
$loc('header a[href], .navigation a[href], #shopify-section-header a[href]').each((_, el) => {
  const text = $loc(el).text().replace(/\s+/g, ' ').trim();
  const href = $loc(el).attr('href');
  if (text && href) locNavLinks.push({ text, href });
});

console.log(`Raw header links: ${rawNavLinks.length}, Local header links: ${locNavLinks.length}`);
for (let i = 0; i < Math.max(rawNavLinks.length, locNavLinks.length); i++) {
  const r = rawNavLinks[i] || {};
  const l = locNavLinks[i] || {};
  // normalize raw href to see if local href matches slug
  const rSlug = (r.href || '').replace(/^https?:\/\/[^/]+/, '').replace(/\/$/, '');
  const lSlug = (l.href || '').replace(/^\/hq-leathercon/, '').replace(/\/index\.html$/, '').replace(/\/$/, '');
  if (rSlug !== lSlug || r.text !== l.text) {
    console.log(`  [${i}] RAW: "${r.text}" -> ${r.href}  |  LOCAL: "${l.text}" -> ${l.href}`);
  }
}

console.log('\n=== 2. FOOTER LINKS COMPARISON (RAW vs LOCAL) ===');
const rawFooterLinks = [];
$raw('footer a[href], #shopify-section-footer a[href]').each((_, el) => {
  const text = $raw(el).text().replace(/\s+/g, ' ').trim() || $raw(el).attr('aria-label') || 'icon';
  const href = $raw(el).attr('href');
  if (href) rawFooterLinks.push({ text, href });
});

const locFooterLinks = [];
$loc('footer a[href], #shopify-section-footer a[href]').each((_, el) => {
  const text = $loc(el).text().replace(/\s+/g, ' ').trim() || $loc(el).attr('aria-label') || 'icon';
  const href = $loc(el).attr('href');
  if (href) locFooterLinks.push({ text, href });
});

for (let i = 0; i < Math.max(rawFooterLinks.length, locFooterLinks.length); i++) {
  const r = rawFooterLinks[i] || {};
  const l = locFooterLinks[i] || {};
  const rSlug = (r.href || '').replace(/^https?:\/\/[^/]+/, '').replace(/\/$/, '');
  const lSlug = (l.href || '').replace(/^\/hq-leathercon/, '').replace(/\/index\.html$/, '').replace(/\/$/, '');
  if (rSlug !== lSlug) {
    console.log(`  [${i}] RAW: "${r.text}" -> ${r.href}  |  LOCAL: "${l.text}" -> ${l.href}`);
  }
}

console.log('\n=== 3. HOMEPAGE BODY LINKS COMPARISON (RAW vs LOCAL) ===');
const rawMainLinks = [];
$raw('main a[href], .main-content a[href]').each((_, el) => {
  const text = $raw(el).text().replace(/\s+/g, ' ').trim() || $raw(el).find('img').attr('alt') || '';
  const href = $raw(el).attr('href');
  if (href) rawMainLinks.push({ text: text.slice(0, 50), href });
});

const locMainLinks = [];
$loc('main a[href], .main-content a[href]').each((_, el) => {
  const text = $loc(el).text().replace(/\s+/g, ' ').trim() || $loc(el).find('img').attr('alt') || '';
  const href = $loc(el).attr('href');
  if (href) locMainLinks.push({ text: text.slice(0, 50), href });
});

console.log(`Raw main links: ${rawMainLinks.length}, Local main links: ${locMainLinks.length}`);
let mainDiffs = 0;
for (let i = 0; i < Math.max(rawMainLinks.length, locMainLinks.length); i++) {
  const r = rawMainLinks[i] || {};
  const l = locMainLinks[i] || {};
  const rSlug = (r.href || '').replace(/^https?:\/\/[^/]+/, '').replace(/\/$/, '');
  const lSlug = (l.href || '').replace(/^\/hq-leathercon/, '').replace(/\/index\.html$/, '').replace(/\/$/, '');
  if (rSlug !== lSlug) {
    mainDiffs++;
    if (mainDiffs <= 40) {
      console.log(`  [${i}] RAW: "${r.text}" -> ${rSlug}  |  LOCAL: "${l.text}" -> ${lSlug}`);
    }
  }
}
console.log(`Total homepage main link diffs: ${mainDiffs}`);
