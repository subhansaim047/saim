const fs = require('fs');

// 1. Inspect Hero Slides
const html = fs.readFileSync('public/thejacketmaker/index.html', 'utf8');
const heroMatch = html.match(/<div[^>]*class="[^"]*slideshow[^"]*"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/i);
if (heroMatch) {
  console.log('--- HERO MATCH FOUND ---');
  // Find all slide elements
  const slideRegex = /<div[^>]*class="[^"]*slide [^"]*"[\s\S]*?(?=<div[^>]*class="[^"]*slide [^"]*"|<\/div>\s*<\/div>\s*<\/div>)/gi;
  const slides = html.match(slideRegex);
  console.log('Total slides found:', slides ? slides.length : 0);
  if (slides) {
    slides.forEach((s, i) => {
      console.log(`\n--- SLIDE ${i + 1} ---`);
      // Look for background-image, src, data-bgset, etc.
      const bgMatch = s.match(/background-image:[^;"]+/i);
      const bgset = s.match(/data-bgset="([^"]+)"/i);
      const src = s.match(/src="([^"]+)"/i);
      const title = s.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
      console.log('  Title:', title ? title[1].trim() : 'NONE');
      console.log('  style bg:', bgMatch ? bgMatch[0] : 'NONE');
      console.log('  data-bgset:', bgset ? bgset[1].slice(0, 100) : 'NONE');
      console.log('  src:', src ? src[1] : 'NONE');
    });
  }
} else {
  console.log('Hero slideshow not found with regex');
}

// 2. Inspect Keychain links
console.log('\n--- KEYCHAIN LINKS IN HOMEPAGE & COLLECTIONS ---');
const kcMatches = html.match(/href="[^"]*keychain[^"]*"/gi);
console.log('Keychain hrefs in index.html:', kcMatches);

// Check collections/leather-keychains/index.html
if (fs.existsSync('public/thejacketmaker/collections/leather-keychains/index.html')) {
  const kcHtml = fs.readFileSync('public/thejacketmaker/collections/leather-keychains/index.html', 'utf8');
  const prods = kcHtml.match(/href="\/thejacketmaker\/products\/[^"]+"/g);
  console.log('Products in leather-keychains collection:', prods ? prods.slice(0, 10) : 'NONE');
}

// Check what is inside public/thejacketmaker/products/adkins-black-keychain-add-on/index.html
const kcProdPath = 'public/thejacketmaker/products/adkins-black-keychain-add-on/index.html';
if (fs.existsSync(kcProdPath)) {
  const pText = fs.readFileSync(kcProdPath, 'utf8');
  const pTitle = pText.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  console.log('adkins-black-keychain H1:', pTitle ? pTitle[1].trim() : 'NONE');
  // Check main image
  const imgMatch = pText.match(/class="[^"]*main-image[^"]*"[\s\S]*?<img[^>]+src="([^"]+)"/i);
  console.log('adkins-black-keychain main img:', imgMatch ? imgMatch[1] : 'NONE');
}
