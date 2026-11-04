const fs = require('fs');

const html = fs.readFileSync('public/thejacketmaker/collections/mens-leather-jackets/index.html', 'utf8');

const matches = (html.match(/ionic-black-leather-jacket/g) || []).length;
console.log('Occurrences of ionic in mens-leather-jackets:', matches);

// Check if products have distinct URLs
const prodLinks = [...html.matchAll(/href="(\/thejacketmaker\/products\/[^"]+)"/g)].map(m => m[1]);
console.log('Total product links in mens-leather-jackets:', prodLinks.length);
const unique = new Set(prodLinks);
console.log('Unique product URLs:', unique.size);
console.log('First 10 unique product URLs:', [...unique].slice(0, 10));
