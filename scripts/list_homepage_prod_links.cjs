const fs = require('fs');

const html = fs.readFileSync('public/thejacketmaker/index.html', 'utf8');

// Find all product links
const prodLinkRegex = /<a[^>]+class="[^"]*product-link[^"]*"[^>]+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi;
let m;
let links = [];
while ((m = prodLinkRegex.exec(html)) !== null) {
  const text = m[2].replace(/<[^>]+>/g, '').trim();
  links.push({ url: m[1], text });
}

console.log(`Found ${links.length} product-link anchors in index.html:`);
links.forEach((l, i) => {
  if (l.text) {
    console.log(`[${i + 1}] "${l.text}" -> ${l.url}`);
  }
});
