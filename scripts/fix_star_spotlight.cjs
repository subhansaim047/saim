/**
 * Fix script v3 - correct star spotlight section detection
 */

const fs = require('fs');
const path = require('path');

const BASE = path.join(__dirname, '..', 'public', 'thejacketmaker');
const INDEX = path.join(BASE, 'index.html');

let html = fs.readFileSync(INDEX, 'utf8');

// ============================================================
// Star Spotlight: find the section by its unique ID
// ============================================================

const STAR_ID = 'shopify-section-template--26828817039647__new_instagram_pPBDpM';
const starSectionOpenTag = `<div class="shopify-section" id="${STAR_ID}">`;

const starStart = html.indexOf(starSectionOpenTag);
if (starStart === -1) {
  console.error('❌ Star Spotlight section not found!');
  process.exit(1);
}

// Find the closing of this section — look for the NEXT shopify-section div
// AFTER starStart
const nextSectionMarker = '<div class="shopify-section';
let searchFrom = starStart + starSectionOpenTag.length;
const starEnd = html.indexOf(nextSectionMarker, searchFrom);

if (starEnd === -1) {
  console.error('❌ Could not find end of Star Spotlight section!');
  process.exit(1);
}

console.log(`Star Spotlight: lines ~${html.slice(0, starStart).split('\n').length} to ~${html.slice(0, starEnd).split('\n').length}`);

const starSection = html.slice(starStart, starEnd);
console.log('Section length:', starSection.length);
console.log('Has img src:', starSection.includes('/thejacketmaker/images/'));

// Extract all original slides (non-cloned) using a step-by-step approach
// Find all occurrences of img src within this section
const imgSrcRegex = /src="(\/thejacketmaker\/images\/[^"]+\.jpg)"/g;
const handleHrefRegex = /class="handle" href="([^"]*)"[^>]*>\s*(.*?)\s*<\/a>/gs;
const shopHrefRegex = /class="btn_insta" href="([^"]*)"[^>]*>\s*(.*?)\s*<\/a>/gs;

// Better: parse slide by slide
// Each slide: <div ...class="new_instagram_col slick-slide..."> ... </div>
// We need to get only original slides (data-slick-index >= 0, NOT cloned)

// Use cheerio-style string splitting
// Find all slide divs that have data-slick-index but are NOT slick-cloned
const slides = [];

// Scan through the section finding slide blocks
let pos = 0;
while (true) {
  // Find next slick-slide div that is NOT slick-cloned
  const slideStart = starSection.indexOf('new_instagram_col slick-slide', pos);
  if (slideStart === -1) break;
  
  // Check if it's a cloned slide
  const lineStart = starSection.lastIndexOf('<div', slideStart);
  const lineEnd = starSection.indexOf('>', slideStart);
  const divTag = starSection.slice(lineStart, lineEnd + 1);
  
  if (divTag.includes('slick-cloned')) {
    pos = slideStart + 10;
    continue;
  }
  
  // Get data-slick-index
  const idxMatch = divTag.match(/data-slick-index="(-?\d+)"/);
  if (!idxMatch || parseInt(idxMatch[1]) < 0) {
    pos = slideStart + 10;
    continue;
  }
  
  // Find end of this slide (next slide or end of section)
  const nextSlide = starSection.indexOf('<div', lineEnd + 1);
  // Actually find the closing </div> of the outer div
  // The slide structure is: <div class="new_instagram_col..."><div class="img_wrapper">...</div><div class="new_insta_handle_btn">...</div></div>
  // Count nested divs to find the matching </div>
  let depth = 1;
  let scanPos = lineEnd + 1;
  let slideEnd = -1;
  while (depth > 0 && scanPos < starSection.length) {
    const nextOpen = starSection.indexOf('<div', scanPos);
    const nextClose = starSection.indexOf('</div>', scanPos);
    if (nextClose === -1) break;
    if (nextOpen !== -1 && nextOpen < nextClose) {
      depth++;
      scanPos = nextOpen + 4;
    } else {
      depth--;
      if (depth === 0) {
        slideEnd = nextClose + 6; // include </div>
      }
      scanPos = nextClose + 6;
    }
  }
  
  if (slideEnd === -1) {
    pos = slideStart + 10;
    continue;
  }
  
  const slideHTML = starSection.slice(lineStart, slideEnd);
  
  // Extract img src
  const imgMatch = slideHTML.match(/src="([^"]+\.jpg)"/);
  const handleMatch = slideHTML.match(/class="handle" href="([^"]*)"[^>]*>\s*([\s\S]*?)\s*<\/a>/);
  const shopMatch = slideHTML.match(/class="btn_insta" href="([^"]*)"[^>]*>\s*([\s\S]*?)\s*<\/a>/);
  
  if (imgMatch && handleMatch && shopMatch) {
    slides.push({
      img: imgMatch[1],
      handleHref: handleMatch[1],
      handle: handleMatch[2].trim(),
      shopHref: shopMatch[1],
      shopText: shopMatch[2].trim()
    });
  }
  
  pos = slideStart + 10;
}

console.log(`📸 Found ${slides.length} original Star Spotlight slides`);

if (slides.length === 0) {
  console.error('❌ No slides found - aborting');
  process.exit(1);
}

// Build CSS marquee
const allSlides = [...slides, ...slides]; // duplicate for seamless loop
const SLIDE_WIDTH = 325; // 315 + 10 gap
const totalWidth = slides.length * SLIDE_WIDTH;
const duration = slides.length * 3; // 3 seconds per slide = normal speed

const slideHTML = allSlides.map(s => `
  <div class="hq-spotlight-slide">
    <div class="img_wrapper">
      <img src="${s.img}" alt="${s.handle.replace(/"/g, '')}" loading="lazy">
    </div>
    <div class="new_insta_handle_btn">
      <a class="handle" href="${s.handleHref}">${s.handle}</a>
      <a class="btn_insta" href="${s.shopHref}">${s.shopText}</a>
    </div>
  </div>`).join('');

const newStarSection = `${starSectionOpenTag}<div class="new_instagram_main">
<div class="new_container_inner">
<h2 class="new_instagram_heading">Star Spotlight</h2>
<div class="new_insta_content">
<p>From premieres to off-duty moments, our leather shows up on names that define culture. Browse looks, see how icons style each piece, and adapt the inspiration to elevate your everyday.</p>
</div>
<div class="hq-spotlight-marquee-outer">
  <div class="hq-spotlight-track" style="animation-duration: ${duration}s;">
    ${slideHTML}
  </div>
</div>
</div>
<style>
  .hq-spotlight-marquee-outer {
    overflow: hidden;
    width: 100%;
    padding: 0;
  }
  .hq-spotlight-track {
    display: flex;
    width: max-content;
    animation: hqMarqueeLeft ${duration}s linear infinite;
    will-change: transform;
  }
  .hq-spotlight-track:hover {
    animation-play-state: paused;
  }
  @keyframes hqMarqueeLeft {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-${totalWidth}px); }
  }
  .hq-spotlight-slide {
    flex: 0 0 315px;
    width: 315px;
    margin-right: 10px;
    border-left: 1px solid #575A65;
    padding-bottom: 70px;
  }
  .hq-spotlight-slide .img_wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    overflow: hidden;
  }
  .hq-spotlight-slide .img_wrapper img {
    width: 100%;
    height: 370px;
    object-fit: cover;
    display: block;
  }
  .hq-spotlight-slide .new_insta_handle_btn {
    display: flex;
    justify-content: space-between;
    padding: 0 5px;
  }
  .hq-spotlight-slide .new_insta_handle_btn a {
    text-decoration: none;
    color: #fff;
  }
  .hq-spotlight-slide .new_insta_handle_btn a.handle { font-size: 12px; }
  .hq-spotlight-slide .new_insta_handle_btn a.btn_insta {
    text-transform: uppercase;
    text-decoration: underline;
    font-size: 15px;
  }
  @media (max-width: 768px) {
    .hq-spotlight-slide { flex: 0 0 260px; width: 260px; }
    .hq-spotlight-slide .img_wrapper img { height: 300px; }
  }
  @media (max-width: 480px) {
    .hq-spotlight-slide { flex: 0 0 220px; width: 220px; }
    .hq-spotlight-slide .img_wrapper img { height: 260px; }
  }
</style>
</div>`;

html = html.slice(0, starStart) + newStarSection + html.slice(starEnd);
fs.writeFileSync(INDEX, html, 'utf8');
console.log('✅ Star Spotlight rebuilt as CSS marquee carousel');
console.log('Done! Run: npm run build');
