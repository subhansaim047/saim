const fs = require('fs');

const html = fs.readFileSync('public/thejacketmaker/index.html', 'utf8');

// Find all occurrences of href="/collections"
console.log('--- Occurrences of href="/collections" ---');
const collMatches = [...html.matchAll(/<a[^>]*href=["']\/collections["'][^>]*>([\s\S]*?)<\/a>/gi)];
collMatches.forEach(m => console.log(m[0]));

// Find refund-policy and shipping-policy
console.log('\n--- Occurrences of refund-policy ---');
const refundMatches = [...html.matchAll(/<a[^>]*href=["'][^"']*refund-policy[^"']*["'][^>]*>([\s\S]*?)<\/a>/gi)];
refundMatches.forEach(m => console.log(m[0]));

console.log('\n--- Occurrences of shipping-policy ---');
const shipMatches = [...html.matchAll(/<a[^>]*href=["'][^"']*shipping-policy[^"']*["'][^>]*>([\s\S]*?)<\/a>/gi)];
shipMatches.forEach(m => console.log(m[0]));

// Search for "AS FEATURED IN"
console.log('\n--- AS FEATURED IN section ---');
const asFeaturedIdx = html.indexOf('AS FEATURED IN');
if (asFeaturedIdx !== -1) {
  console.log(html.slice(asFeaturedIdx - 200, asFeaturedIdx + 2000));
} else {
  console.log('Not found by AS FEATURED IN, searching for featured');
}
