const fs = require('fs');

const html = fs.readFileSync('public/thejacketmaker/index.html', 'utf8');

// Find all occurrences of ionic-black-leather-jacket
let idx = 0;
let occurrences = [];
while ((idx = html.indexOf('ionic-black-leather-jacket', idx)) !== -1) {
  // Find the containing card or anchor
  const aStart = html.lastIndexOf('<a', idx);
  const aEnd = html.indexOf('</a>', idx);
  // Find surrounding context (title, img alt)
  const context = html.slice(Math.max(0, idx - 300), Math.min(html.length, idx + 300));
  const altMatch = context.match(/alt="([^"]+)"/i);
  const titleMatch = context.match(/<h2[^>]*class="[^"]*product-block__title[^"]*"[^>]*>([\s\S]*?)<\/h2>/i) ||
                     context.match(/class="[^"]*title[^"]*"[^>]*>([\s\S]*?)<\//i);
  
  occurrences.push({
    index: idx,
    alt: altMatch ? altMatch[1] : null,
    title: titleMatch ? titleMatch[1].trim() : null
  });
  idx += 30;
}

console.log(`Found ${occurrences.length} occurrences in index.html:`);
occurrences.forEach((o, i) => {
  console.log(`[${i + 1}] at ${o.index} | title: "${o.title}" | alt: "${o.alt}"`);
});
