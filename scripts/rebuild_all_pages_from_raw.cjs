const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const RAW_PAGES_DIR = path.join(__dirname, '../audit/raw_tjm/pages');
const BASE_DIR = path.join(__dirname, '../public/hq-leathercon');
const LOCAL_PAGES_DIR = path.join(BASE_DIR, 'pages');
const IMAGES_DIR = path.join(BASE_DIR, 'images');

const localImagesSet = new Set(fs.existsSync(IMAGES_DIR) ? fs.readdirSync(IMAGES_DIR) : []);
const existingProds = new Set(fs.readdirSync(path.join(BASE_DIR, 'products')));
const existingCols = new Set(fs.readdirSync(path.join(BASE_DIR, 'collections')));
const existingPolicies = new Set(fs.readdirSync(path.join(BASE_DIR, 'policies')));

const colAliasMap = {
  'mens-satin-bomber-jackets': 'mens-bomber-jackets',
  'g1-bomber-jackets': 'mens-aviator-jackets',
  'ma1-bomber-jackets': 'mens-bomber-jackets',
  'a2-leather-jackets': 'mens-aviator-jackets',
  'mens-satin-jackets': 'mens-bomber-jackets',
  'mens-double-rider-jackets': 'mens-biker-leather-jackets',
  'mens-trench-coats': 'mens-winter-coats',
  'leather-folio': 'leather-business-bags',
  'leather-duffle-bags': 'leather-travel-bags',
  'mens-leather-briefcase': 'leather-business-bags',
  'leather-messenger-bags': 'laptop-leather-bags',
  'leather-laptop-sleeves': 'laptop-leather-bags',
  'mens-oxford-shoes': 'mens-dress-shoes',
  'leather-passport-holders': 'leather-gifts'
};

function resolveAssetUrl(url) {
  if (!url) return url;
  let u = url.trim();
  if (u.startsWith('//')) u = 'https:' + u;
  const cleanPath = u.split('?')[0];
  const base = path.basename(cleanPath);
  if (localImagesSet.has(base)) {
    return `/hq-leathercon/images/${base}`;
  }
  return u;
}

function replaceBrandInTextNodes($, rootEl) {
  rootEl.find('*').contents().each((_, node) => {
    if (node.type === 'text' && node.data) {
      const parentTag = node.parent && node.parent.name ? node.parent.name.toLowerCase() : '';
      if (parentTag !== 'script' && parentTag !== 'style') {
        node.data = node.data
          .replace(/The Jacket Maker/gi, 'HQ Leathercon')
          .replace(/TheJacketMaker/gi, 'HQLeathercon');
      }
    }
  });
}

// Load clean shell from pages/bespoke/index.html
const shellHtml = fs.readFileSync(path.join(LOCAL_PAGES_DIR, 'bespoke/index.html'), 'utf8');

const rawFiles = fs.readdirSync(RAW_PAGES_DIR).filter(f => f.endsWith('.html'));
// Add custom-apparel mapped from custom-jerseys.html
const pageEntries = rawFiles.map(f => ({
  slug: f.replace(/\.html$/, ''),
  rawFile: path.join(RAW_PAGES_DIR, f)
}));
if (!pageEntries.some(e => e.slug === 'custom-apparel') && fs.existsSync(path.join(RAW_PAGES_DIR, 'custom-jerseys.html'))) {
  pageEntries.push({
    slug: 'custom-apparel',
    rawFile: path.join(RAW_PAGES_DIR, 'custom-jerseys.html'),
    overrideTitle: 'Custom Apparel'
  });
}

console.log(`Rebuilding ${pageEntries.length} pages from genuine raw HTML...`);
let builtCount = 0;

for (const entry of pageEntries) {
  const { slug, rawFile, overrideTitle } = entry;
  const rawHtml = fs.readFileSync(rawFile, 'utf8');
  const $raw = cheerio.load(rawHtml);

  const rawMain = $raw('main#MainContent, main, .main-content').first();
  if (rawMain.length === 0) {
    console.log(`  [SKIP] No main content in ${slug}`);
    continue;
  }

  // Extract page-specific stylesheets and styles from raw <head>
  const extraStyles = [];
  $raw('head link[rel="stylesheet"]').each((_, el) => {
    let href = $raw(el).attr('href') || '';
    if (!href) return;
    if (href.includes('styles.css') || href.includes('vendor.css')) return;
    if (href.startsWith('//')) href = 'https:' + href;
    else if (href.startsWith('/')) href = 'https://www.thejacketmaker.pk' + href;
    extraStyles.push(`<link rel="stylesheet" href="${href}" media="all">`);
  });

  // Clean up rawMain images, backgrounds, links, and brand text
  rawMain.find('img').each((_, img) => {
    const $img = $raw(img);
    let src = $img.attr('src') || '';
    let dataSrc = $img.attr('data-src') || '';
    if (dataSrc) {
      dataSrc = resolveAssetUrl(dataSrc.replace('{width}', '720'));
      $img.attr('data-src', dataSrc);
    }
    if (!src || src.startsWith('data:') || src.includes('blank.gif')) {
      if (dataSrc) src = dataSrc;
    } else {
      src = resolveAssetUrl(src);
    }
    if (src) $img.attr('src', src);
    $img.removeAttr('data-widths');
    $img.removeClass('lazyload').addClass('lazyloaded');
  });

  rawMain.find('[style*="background"]').each((_, el) => {
    let st = $raw(el).attr('style') || '';
    st = st.replace(/url\((['"]?)\/\//g, 'url($1https://');
    $raw(el).attr('style', st);
  });

  // Remove any video tags inside product blocks if any
  rawMain.find('.product-block video').remove();

  // Rewrite internal links inside rawMain
  rawMain.find('a[href]').each((_, a) => {
    const $a = $raw(a);
    let href = ($a.attr('href') || '').trim();
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) return;

    const clean = href.replace(/^https?:\/\/(www\.)?thejacketmaker\.(pk|com|co\.uk|ca|com\.au|de|fr)/i, '').split('?')[0].split('#')[0].replace(/\/$/, '');

    if (clean === '' && /^https?:\/\/(www\.)?thejacketmaker/i.test(href)) {
      $a.attr('href', '/hq-leathercon/index.html');
      return;
    }

    if (clean.startsWith('/products/')) {
      const pSlug = clean.split('/products/')[1].split('/')[0];
      if (existingProds.has(pSlug)) {
        $a.attr('href', `/hq-leathercon/products/${pSlug}/index.html`);
      } else {
        $a.attr('href', '/hq-leathercon/products/custom-leather-jacket-builder/index.html');
      }
    } else if (clean.startsWith('/collections/')) {
      let cSlug = clean.split('/collections/')[1].split('/')[0];
      if (cSlug === 'hangontoit-0') {
        $a.attr('href', '/hq-leathercon/pages/hangontoit/index.html');
      } else {
        if (!existingCols.has(cSlug) && colAliasMap[cSlug]) {
          cSlug = colAliasMap[cSlug];
        }
        if (existingCols.has(cSlug)) {
          $a.attr('href', `/hq-leathercon/collections/${cSlug}/index.html`);
        } else {
          $a.attr('href', '/hq-leathercon/collections/all/index.html');
        }
      }
    } else if (clean.startsWith('/pages/')) {
      const pgSlug = clean.split('/pages/')[1].split('/')[0];
      if (existingPolicies.has(pgSlug)) {
        $a.attr('href', `/hq-leathercon/policies/${pgSlug}/index.html`);
      } else {
        $a.attr('href', `/hq-leathercon/pages/${pgSlug}/index.html`);
      }
    } else if (clean.startsWith('/policies/')) {
      const polSlug = clean.split('/policies/')[1].split('/')[0];
      if (existingPolicies.has(polSlug)) {
        $a.attr('href', `/hq-leathercon/policies/${polSlug}/index.html`);
      }
    }
  });

  replaceBrandInTextNodes($raw, rawMain);

  if (overrideTitle) {
    const h1 = rawMain.find('h1').first();
    if (h1.length > 0) h1.text(overrideTitle);
  }

  // Determine clean page title
  const rawTitleTag = $raw('head > title').first().text().split('|')[0].split('–')[0].trim();
  const h1Text = rawMain.find('h1').first().text().replace(/\s+/g, ' ').trim();
  const prettySlug = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const finalTitle = (overrideTitle || rawTitleTag || h1Text || prettySlug).replace(/The Jacket Maker/gi, 'HQ Leathercon');

  // Inject into local shell
  const $page = cheerio.load(shellHtml);
  $page('head > title').first().text(`${finalTitle} | HQ Leathercon`);
  if (extraStyles.length > 0) {
    $page('head').append('\n' + extraStyles.join('\n'));
  }
  $page('main#MainContent, main').first().html(rawMain.html());

  const outDir = path.join(LOCAL_PAGES_DIR, slug);
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), $page.html(), 'utf8');
  builtCount++;
}

console.log(`Successfully rebuilt ${builtCount} genuine pages in public/hq-leathercon/pages/!`);
