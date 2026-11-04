const fs = require('fs');
const path = require('path');

function getHtmlFiles(dir) {
  let files = [];
  if (!fs.existsSync(dir)) return files;
  const list = fs.readdirSync(dir);
  for (const item of list) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      files = files.concat(getHtmlFiles(full));
    } else if (item.endsWith('.html')) {
      files.push(full);
    }
  }
  return files;
}

const targetDirs = [
  'public/thejacketmaker/collections',
  'public/thejacketmaker/pages',
  'public/thejacketmaker/policies'
];

let allFiles = [];
targetDirs.forEach(d => {
  allFiles = allFiles.concat(getHtmlFiles(d));
});

console.log(`Processing ${allFiles.length} files...`);

const headerLogoReplacement = `<a class="logo__link" href="/thejacketmaker/index.html" title="HQ Leathercon" style="display: inline-flex; align-items: center; gap: 16px; text-decoration: none;">
    <img alt="HQ Leathercon" class="logo__image" height="62" src="/thejacketmaker/images/hq-crest-logo.png" style="height: 62px; width: auto; max-height: 65px; object-fit: contain; vertical-align: middle;"/>
    <span class="logo__brand-title" style="font-family: 'Montserrat', 'Helvetica Neue', Arial, sans-serif; font-size: 24px; font-weight: 800; letter-spacing: 0.08em; color: #111111; text-transform: uppercase; white-space: nowrap; line-height: 1;">HQ LEATHERCON</span>
  </a>`;

const footerLogoReplacement = `<a href="/thejacketmaker/index.html" style="display: inline-flex; align-items: center; gap: 16px; text-decoration: none;">
    <img alt="HQ Leathercon" src="/thejacketmaker/images/hq-crest-logo.png" style="height: 60px; width: auto; max-height: 62px; object-fit: contain;"/>
    <span style="font-family: 'Montserrat', 'Helvetica Neue', Arial, sans-serif; font-size: 24px; font-weight: 800; letter-spacing: 0.08em; color: #111111; text-transform: uppercase; line-height: 1;">HQ LEATHERCON</span>
  </a>`;

let modifiedCount = 0;

for (const file of allFiles) {
  let html = fs.readFileSync(file, 'utf8');
  let changed = false;

  // 1. Header logo replacement
  if (html.includes('logo__link')) {
    const oldHeaderLogoRegex = /<a[^>]*class="[^"]*logo__link[^"]*"[^>]*>[\s\S]*?<\/a>/i;
    if (oldHeaderLogoRegex.test(html)) {
      html = html.replace(oldHeaderLogoRegex, headerLogoReplacement);
      changed = true;
    }
  }

  // 2. Footer logo replacement
  if (html.includes('footer__brand-block')) {
    const oldFooterLogoRegex = /<div class="footer__brand-block"[\s\S]*?<\/div>/i;
    const newFooterBlock = `<div class="footer__brand-block" style="padding: 24px 0 16px; display: flex; align-items: center; gap: 16px;">
  ${footerLogoReplacement}
</div>`;
    html = html.replace(oldFooterLogoRegex, newFooterBlock);
    changed = true;
  }

  // 3. Dangling link fixes
  if (html.includes('href="/collections"')) {
    html = html.replace(/href="\/collections"/g, 'href="/thejacketmaker/collections/mens-leather-jackets/index.html"');
    changed = true;
  }
  if (html.includes('/thejacketmaker/pages/refund-policy/index.html')) {
    html = html.replace(/\/thejacketmaker\/pages\/refund-policy\/index\.html/g, '/thejacketmaker/policies/refund-policy/index.html');
    changed = true;
  }
  if (html.includes('/thejacketmaker/pages/shipping-policy/index.html')) {
    html = html.replace(/\/thejacketmaker\/pages\/shipping-policy\/index\.html/g, '/thejacketmaker/policies/shipping-policy/index.html');
    changed = true;
  }

  // 4. Men subcategory links
  if (html.includes('Summer Jackets') && html.includes('/mens-winter-jackets/index.html">Summer Jackets')) {
    html = html.replace(/\/thejacketmaker\/collections\/mens-winter-jackets\/index\.html">Summer Jackets/g, '/thejacketmaker/collections/mens-summer-jackets/index.html">Summer Jackets');
    changed = true;
  }
  if (html.includes('Denim Jackets') && html.includes('/mens-winter-jackets/index.html">Denim Jackets')) {
    html = html.replace(/\/thejacketmaker\/collections\/mens-winter-jackets\/index\.html">Denim Jackets/g, '/thejacketmaker/collections/mens-denim-jackets/index.html">Denim Jackets');
    changed = true;
  }
  if (html.includes('Waxed Canvas Jackets') && html.includes('/mens-winter-jackets/index.html">Waxed Canvas Jackets')) {
    html = html.replace(/\/thejacketmaker\/collections\/mens-winter-jackets\/index\.html">Waxed Canvas Jackets/g, '/thejacketmaker/collections/mens-waxed-canvas-jackets/index.html">Waxed Canvas Jackets');
    changed = true;
  }
  if (html.includes('Puffer Vests') && html.includes('/mens-puffer-jackets/index.html">Puffer Vests')) {
    html = html.replace(/\/thejacketmaker\/collections\/mens-puffer-jackets\/index\.html">Puffer Vests/g, '/thejacketmaker/collections/mens-puffer-vests/index.html">Puffer Vests');
    changed = true;
  }
  if (html.includes('Windbreaker &amp; Puffers') && html.includes('/mens-puffer-jackets/index.html">Windbreaker &amp; Puffers')) {
    html = html.replace(/\/thejacketmaker\/collections\/mens-puffer-jackets\/index\.html">Windbreaker &amp; Puffers/g, '/thejacketmaker/collections/mens-windbreaker-jackets/index.html">Windbreaker &amp; Puffers');
    changed = true;
  }
  if (html.includes('Lightweight Jackets') && html.includes('/mens-winter-jackets/index.html">Lightweight Jackets')) {
    html = html.replace(/\/thejacketmaker\/collections\/mens-winter-jackets\/index\.html">Lightweight Jackets/g, '/thejacketmaker/collections/mens-lightweight-jackets/index.html">Lightweight Jackets');
    changed = true;
  }
  if (html.includes('Soft Shell Jackets') && html.includes('/mens-winter-jackets/index.html">Soft Shell Jackets')) {
    html = html.replace(/\/thejacketmaker\/collections\/mens-winter-jackets\/index\.html">Soft Shell Jackets/g, '/thejacketmaker/collections/mens-soft-shell-jackets/index.html">Soft Shell Jackets');
    changed = true;
  }
  if (html.includes('Down Jacket') && html.includes('/mens-puffer-jackets/index.html">Down Jacket')) {
    html = html.replace(/\/thejacketmaker\/collections\/mens-puffer-jackets\/index\.html">Down Jacket/g, '/thejacketmaker/collections/mens-down-jackets/index.html">Down Jacket');
    changed = true;
  }
  if (html.includes('Trench &amp; Winter Coats') && html.includes('/mens-winter-jackets/index.html">Trench &amp; Winter Coats')) {
    html = html.replace(/\/thejacketmaker\/collections\/mens-winter-jackets\/index\.html">Trench &amp; Winter Coats/g, '/thejacketmaker/collections/mens-winter-coats/index.html">Trench &amp; Winter Coats');
    changed = true;
  }
  if (html.includes('Fur &amp; Shearling Coats') && html.includes('/mens-fur-shearling-jackets/index.html">Fur &amp; Shearling Coats')) {
    html = html.replace(/\/thejacketmaker\/collections\/mens-fur-shearling-jackets\/index\.html">Fur &amp; Shearling Coats/g, '/thejacketmaker/collections/mens-fur-shearling-coats/index.html">Fur &amp; Shearling Coats');
    changed = true;
  }
  if (html.includes('Leather Dusters') && html.includes('/mens-leather-coats/index.html">Leather Dusters')) {
    html = html.replace(/\/thejacketmaker\/collections\/mens-leather-coats\/index\.html">Leather Dusters/g, '/thejacketmaker/collections/mens-leather-dusters/index.html">Leather Dusters');
    changed = true;
  }
  if (html.includes('Leather Loafers') && html.includes('/full-grain-leather-shoes-men/index.html">Leather Loafers')) {
    html = html.replace(/\/thejacketmaker\/collections\/full-grain-leather-shoes-men\/index\.html">Leather Loafers/g, '/thejacketmaker/collections/mens-leather-loafers/index.html">Leather Loafers');
    changed = true;
  }
  if (html.includes('Dress Shoes') && html.includes('/full-grain-leather-shoes-men/index.html">Dress Shoes')) {
    html = html.replace(/\/thejacketmaker\/collections\/full-grain-leather-shoes-men\/index\.html">Dress Shoes/g, '/thejacketmaker/collections/mens-dress-shoes/index.html">Dress Shoes');
    changed = true;
  }
  if (html.includes('Casual Shoes') && html.includes('/full-grain-leather-shoes-men/index.html">Casual Shoes')) {
    html = html.replace(/\/thejacketmaker\/collections\/full-grain-leather-shoes-men\/index\.html">Casual Shoes/g, '/thejacketmaker/collections/mens-casual-shoes/index.html">Casual Shoes');
    changed = true;
  }
  if (html.includes('Leather Boots') && html.includes('/full-grain-leather-shoes-men/index.html">Leather Boots')) {
    html = html.replace(/\/thejacketmaker\/collections\/full-grain-leather-shoes-men\/index\.html">Leather Boots/g, '/thejacketmaker/collections/mens-leather-boots/index.html">Leather Boots');
    changed = true;
  }
  if (html.includes('Leather Sneakers') && html.includes('/full-grain-leather-shoes-men/index.html">Leather Sneakers')) {
    html = html.replace(/\/thejacketmaker\/collections\/full-grain-leather-shoes-men\/index\.html">Leather Sneakers/g, '/thejacketmaker/collections/mens-leather-sneakers/index.html">Leather Sneakers');
    changed = true;
  }
  if (html.includes('Vintage Leather Bags') && html.includes('/full-grain-leather-bags/index.html">Vintage Leather Bags')) {
    html = html.replace(/\/thejacketmaker\/collections\/full-grain-leather-bags\/index\.html">Vintage Leather Bags/g, '/thejacketmaker/collections/vintage-leather-bags/index.html">Vintage Leather Bags');
    changed = true;
  }
  if (html.includes('Laptop Bags') && html.includes('/full-grain-leather-bags/index.html">Laptop Bags')) {
    html = html.replace(/\/thejacketmaker\/collections\/full-grain-leather-bags\/index\.html">Laptop Bags/g, '/thejacketmaker/collections/laptop-leather-bags/index.html">Laptop Bags');
    changed = true;
  }
  if (html.includes('Travel Bags') && html.includes('/full-grain-leather-bags/index.html">Travel Bags')) {
    html = html.replace(/\/thejacketmaker\/collections\/full-grain-leather-bags\/index\.html">Travel Bags/g, '/thejacketmaker/collections/leather-travel-bags/index.html">Travel Bags');
    changed = true;
  }
  if (html.includes('Business Bags') && html.includes('/full-grain-leather-bags/index.html">Business Bags')) {
    html = html.replace(/\/thejacketmaker\/collections\/full-grain-leather-bags\/index\.html">Business Bags/g, '/thejacketmaker/collections/leather-business-bags/index.html">Business Bags');
    changed = true;
  }

  // 5. Customize links
  if (html.includes('/custom-leather-jackets/index.html">Custom Bags')) {
    html = html.replace(/\/thejacketmaker\/pages\/custom-leather-jackets\/index\.html">Custom Bags/g, '/thejacketmaker/pages/custom-leather-bags/index.html">Custom Bags');
    changed = true;
  }
  if (html.includes('/full-grain-leather-shoes-men/index.html">Custom Shoes')) {
    html = html.replace(/\/thejacketmaker\/collections\/full-grain-leather-shoes-men\/index\.html">Custom Shoes/g, '/thejacketmaker/pages/custom-made-shoes/index.html">Custom Shoes');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, html, 'utf8');
    modifiedCount++;
  }
}

console.log(`Updated ${modifiedCount} files out of ${allFiles.length}.`);
