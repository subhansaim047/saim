const fs = require('fs');

const html = fs.readFileSync('public/thejacketmaker/index.html', 'utf8');
const heroStart = html.indexOf('data-section-type="slideshow"');
console.log('Hero start:', heroStart);

if (heroStart !== -1) {
  const heroHtml = html.slice(heroStart, heroStart + 8000);
  console.log('--- FIRST 2000 CHARS OF HERO HTML ---');
  console.log(heroHtml.slice(0, 2000));

  // Find all slide divs inside heroHtml
  const matches = heroHtml.match(/<div[^>]*class="[^"]*slide [^"]*"[^>]*>/gi);
  console.log('\nSlide open tags:', matches);
}

// Check how gallery-controller.js handles hero slider
const js = fs.readFileSync('public/thejacketmaker/js/gallery-controller.js', 'utf8');
const heroJsStart = js.indexOf('initHeroSlider');
console.log('\n--- initHeroSlider in gallery-controller.js ---');
console.log(js.slice(heroJsStart, heroJsStart + 1500));
