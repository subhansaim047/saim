const fs = require('fs');

const html = fs.readFileSync('public/thejacketmaker/index.html', 'utf8');

// Find CUSTOMIZE menu block
const custIdx = html.indexOf('>CUSTOMIZE<');
console.log('CUSTOMIZE index:', custIdx);
if (custIdx !== -1) {
  // Find the menu container around it
  const slice = html.slice(custIdx - 100, custIdx + 6000);
  const links = [...slice.matchAll(/<a[^>]+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi)];
  console.log(`\nFound ${links.length} links in CUSTOMIZE section:`);
  links.forEach(l => {
    const text = l[2].replace(/<[^>]+>/g, '').trim();
    if (text) console.log(`  "${text}" -> ${l[1]}`);
  });
}

// Find GIFTS / GIFTING menu block
const giftIdx = html.indexOf('>GIFTING<');
console.log('\nGIFTING index:', giftIdx);
if (giftIdx !== -1) {
  const slice = html.slice(giftIdx - 100, giftIdx + 6000);
  const links = [...slice.matchAll(/<a[^>]+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi)];
  console.log(`\nFound ${links.length} links in GIFTING section:`);
  links.forEach(l => {
    const text = l[2].replace(/<[^>]+>/g, '').trim();
    if (text) console.log(`  "${text}" -> ${l[1]}`);
  });
}
