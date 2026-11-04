const fs = require('fs');
const cheerio = require('cheerio'); // if available or regex

const html = fs.readFileSync('C:/Users/subhan/.gemini/antigravity/scratch/saim/public/thejacketmaker/collections/gifts-for-him/index.html', 'utf8');

// Look for product-card or similar
const cardRegex = /<div[^>]*class="[^"]*(?:product-card|grid-product|product-item)[^"]*"[^>]*>/gi;
const cards = html.match(cardRegex);
console.log('Cards matching common patterns:', cards ? cards.length : 0);
if (cards) {
  console.log('Sample card classes:', cards.slice(0, 5));
}

// Check collection title
const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
console.log('H1:', h1Match ? h1Match[1].trim() : 'NONE');

// Let's see all <a> tags that link to /products/ in the main content area (after </header>)
const headerEnd = html.indexOf('</header>');
const mainHtml = headerEnd !== -1 ? html.slice(headerEnd) : html;

const prodHrefRegex = /href="\/thejacketmaker\/products\/([^"/]+)\/index\.html"/g;
const uniqueProducts = new Set();
let match;
while ((match = prodHrefRegex.exec(mainHtml)) !== null) {
  uniqueProducts.add(match[1]);
}
console.log('Unique products in main area:', uniqueProducts.size);
console.log('Sample products:', Array.from(uniqueProducts).slice(0, 10));
