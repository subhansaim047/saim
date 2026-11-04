const fs = require('fs');
const glob = require('glob');

// 1. Check all navigation items in header of index.html with "keychain" or "Keychains"
const indexHtml = fs.readFileSync('public/thejacketmaker/index.html', 'utf8');
const kcLinksInIndex = indexHtml.match(/<a[^>]+href="[^"]*"[^>]*>[\s\S]*?keychain[\s\S]*?<\/a>/gi);
console.log('Keychain links in index.html:', kcLinksInIndex);

// 2. Check collections/leather-keychains/index.html
console.log('\n--- Checking collections/leather-keychains/index.html ---');
const kcCollPath = 'public/thejacketmaker/collections/leather-keychains/index.html';
if (fs.existsSync(kcCollPath)) {
  const collHtml = fs.readFileSync(kcCollPath, 'utf8');
  // Find all product links inside the main collection container
  const prodRegex = /<a[^>]+href="(\/thejacketmaker\/products\/[^"]+)"[^>]*>([\s\S]*?)<\/a>/gi;
  let match;
  const products = [];
  while ((match = prodRegex.exec(collHtml)) !== null) {
    if (!match[1].includes('gift-cards') && !products.some(p => p.url === match[1])) {
      products.push({ url: match[1], text: match[2].replace(/<[^>]+>/g, '').trim() });
    }
  }
  console.log(`Found ${products.length} products in leather-keychains:`);
  products.slice(0, 10).forEach(p => console.log('  ', p.url, '->', p.text));
}

// 3. Check audit/all_store_products_complete.json for actual keychain products!
const allProds = JSON.parse(fs.readFileSync('audit/all_store_products_complete.json', 'utf8'));
const kcProds = allProds.filter(p => p.handle.includes('keychain') || p.title.toLowerCase().includes('keychain'));
console.log(`\nActual keychain products in catalog: ${kcProds.length}`);
kcProds.forEach(p => console.log('  Handle:', p.handle, '| Title:', p.title));
