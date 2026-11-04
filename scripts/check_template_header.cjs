const fs = require('fs');

const collHtml = fs.readFileSync('public/thejacketmaker/collections/mens-leather-jackets/index.html', 'utf8');
const pageHtml = fs.readFileSync('public/thejacketmaker/pages/custom-leather-jackets/index.html', 'utf8');

console.log('Collection has hq-crest-logo.png:', collHtml.includes('hq-crest-logo.png'));
console.log('Collection logo snippet:');
const logoMatch = collHtml.match(/<a[^>]*class="logo__link"[^>]*>([\s\S]*?)<\/a>/i);
if (logoMatch) console.log(logoMatch[0]);

console.log('\nPage has hq-crest-logo.png:', pageHtml.includes('hq-crest-logo.png'));
const pageLogoMatch = pageHtml.match(/<a[^>]*class="logo__link"[^>]*>([\s\S]*?)<\/a>/i);
if (pageLogoMatch) console.log(pageLogoMatch[0]);
