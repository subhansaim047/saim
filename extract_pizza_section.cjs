const fs = require('fs');
const html = fs.readFileSync('public/anzaar/index.html', 'utf8');

const idx = html.indexOf('highest quality');
const topSecStart = html.lastIndexOf('<section class="elementor-section elementor-top-section', idx);
console.log('Top section start:', topSecStart);
console.log('Top section tag:', html.substring(topSecStart, html.indexOf('>', topSecStart) + 1));

// Find next top section start
const nextTopSec = html.indexOf('<section class="elementor-section elementor-top-section', topSecStart + 10);
console.log('Next top section start:', nextTopSec);

const secContent = html.substring(topSecStart, nextTopSec);
fs.writeFileSync('pizza_section_dump.html', secContent, 'utf8');
console.log('Dumped length:', secContent.length);

// Let's analyze what classes, IDs, images, SVGs, and data attributes exist in secContent
const imgMatches = [...secContent.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi)];
console.log('\nImages used in this section:');
imgMatches.forEach(m => console.log('  ', m[1]));

const dataIdMatches = [...secContent.matchAll(/data-id=["']([^"']+)["']/gi)];
console.log('\nData IDs in this section:', dataIdMatches.map(m => m[1]));

// Check for GSAP or animation classes
const classMatches = [...secContent.matchAll(/class=["']([^"']+)["']/gi)];
const uniqueClasses = new Set();
classMatches.forEach(m => m[1].split(/\s+/).forEach(c => uniqueClasses.add(c)));
const animClasses = [...uniqueClasses].filter(c => c.includes('anim') || c.includes('tween') || c.includes('split') || c.includes('pin') || c.includes('circle'));
console.log('\nAnimation-related classes:', animClasses);
