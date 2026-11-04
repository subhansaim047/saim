const fs = require('fs');
const path = require('path');

// 1. Inspect collection template classes
const collHtml = fs.readFileSync('C:/Users/subhan/.gemini/antigravity/scratch/saim/public/thejacketmaker/collections/gifts-for-him/index.html', 'utf8');

console.log('Collection file length:', collHtml.length);
// Find product links or titles
const productLinks = collHtml.match(/href="\/thejacketmaker\/products\/[^"]+"/g);
console.log('Total /products/ links:', productLinks ? productLinks.length : 0);
if (productLinks) {
  console.log('Sample product links:', productLinks.slice(0, 5));
}

// Find class names used near product links
const sampleSnippet = collHtml.slice(collHtml.indexOf('/thejacketmaker/products/'), collHtml.indexOf('/thejacketmaker/products/') + 500);
console.log('Sample snippet around product link:', sampleSnippet);

// Check overflow elements on index.html
const indexHtml = fs.readFileSync('C:/Users/subhan/.gemini/antigravity/scratch/saim/public/thejacketmaker/index.html', 'utf8');
const trackMatches = indexHtml.match(/slick-track[^>]+/g);
if (trackMatches) {
  console.log('Sample slick-track inline style:', trackMatches.slice(0, 3));
}
