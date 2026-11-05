/**
 * Fix script v2:
 * 1. Remove AS FEATURED IN section from homepage
 * 2. Convert Star Spotlight to CSS infinite left-to-right marquee carousel
 * 3. Center logo in header (CSS patch)
 * 4. Mobile responsiveness CSS patch
 */

const fs = require('fs');
const path = require('path');

const BASE = path.join(__dirname, '..', 'public', 'thejacketmaker');
const INDEX = path.join(BASE, 'index.html');
const CSS = path.join(BASE, 'css', 'styles.css');

// ---- READ INDEX ----
let html = fs.readFileSync(INDEX, 'utf8');
const origLen = html.length;

// ============================================================
// FIX 1: Remove AS FEATURED IN section
// Section starts at: <div class="shopify-section section-quote-slider" id="shopify-section-...68a2cf05..."
// Section ends at the </div> right before the next shopify-section at line 8854
// We'll match from the opening of that shopify-section div to just before the next shopify-section div
// ============================================================

const featuredInStart = '<div class="shopify-section section-quote-slider" id="shopify-section-template--26828817039647__68a2cf05-7425-4aaf-97b1-a0c611b9edc4">';
const featuredInEnd = '</div><div class="shopify-section section-featured-blocks"';

const startIdx = html.indexOf(featuredInStart);
const endIdx = html.indexOf(featuredInEnd);

if (startIdx === -1) {
  console.error('❌ AS FEATURED IN section START not found!');
} else if (endIdx === -1) {
  console.error('❌ AS FEATURED IN section END not found!');
} else {
  // Remove from startIdx to endIdx (keep the </div> and the next section opening)
  // endIdx points to "</div><div class=..." — we keep from "</div><div..." 
  // but we need to strip the closing </div> that belongs to the removed section
  // The pattern at endIdx is: "</div><div class=..." where the first </div> closes the removed section
  // So we cut html[startIdx..endIdx+6] (endIdx+6 = skip "</div>") 
  html = html.slice(0, startIdx) + '</div>' + html.slice(endIdx + 6);
  console.log('✅ Removed AS FEATURED IN section');
}

// ============================================================
// FIX 2: Convert Star Spotlight slick carousel -> CSS infinite marquee
// Strategy:
// - Find the shopify-section div containing new_instagram_main
// - Extract only the ORIGINAL slides (not the slick-cloned ones)
// - Rebuild the section with a CSS marquee wrapper (no slick dependency)
// - Add keyframe animation via inline <style>
// ============================================================

// Extract all original slide image+handle data from the section
// Original slides have data-slick-index="0" to N (non-negative, not cloned)
// We use regex to pull just the src and handle info

// Actually, let's take a simpler approach:
// Just restyle the existing section - hide slick controls, override slick-track
// with CSS animation instead. We replace the entire inner JS+slick HTML.

// Find the star spotlight shopify-section
const starSectionStart = '<div class="shopify-section" id="shopify-section-template--26828817039647__new_instagram_pPBDpM">';
const starSectionEnd = '</div><div class="shopify-section section-apps"';

const starStart = html.indexOf(starSectionStart);
const starEnd = html.indexOf(starSectionEnd);

if (starStart === -1 || starEnd === -1) {
  console.error('❌ Star Spotlight section not found!', {starStart, starEnd});
} else {
  // Extract existing section to pull image data
  const starSection = html.slice(starStart, starEnd);
  
  // Pull unique original slides (data-slick-index >= 0, not cloned)
  // Match: <div ...class="new_instagram_col slick-slide..." data-slick-index="N"... NOT cloned
  // Cloned slides have class "slick-cloned"
  // We want slides that DON'T have slick-cloned
  
  // Extract all img src and handle href+text pairs from non-cloned slides
  const slideRegex = /class="new_instagram_col slick-slide(?! slick-cloned)[^"]*"[^>]*>\s*<div class="img_wrapper">\s*<img[^>]+src="([^"]+)"[^>]*>\s*<\/div>\s*<div class="new_insta_handle_btn">\s*<a class="handle" href="([^"]*)"[^>]*>\s*(.*?)\s*<\/a>\s*<a class="btn_insta" href="([^"]*)"[^>]*>\s*(.*?)\s*<\/a>/gs;
  
  const slides = [];
  let m;
  while ((m = slideRegex.exec(starSection)) !== null) {
    slides.push({
      img: m[1],
      handleHref: m[2],
      handle: m[3].trim(),
      shopHref: m[4],
      shopText: m[5].trim()
    });
  }
  
  console.log(`📸 Found ${slides.length} Star Spotlight slides`);
  
  if (slides.length === 0) {
    console.error('❌ No slides extracted - keeping original');
  } else {
    // Build a CSS marquee carousel
    // Duplicate slides for seamless loop
    const allSlides = [...slides, ...slides]; // duplicate for seamless
    
    const slideHTML = allSlides.map(s => `
      <div class="hq-spotlight-slide">
        <div class="img_wrapper">
          <img src="${s.img}" alt="${s.handle}" loading="lazy">
        </div>
        <div class="new_insta_handle_btn">
          <a class="handle" href="${s.handleHref}">${s.handle}</a>
          <a class="btn_insta" href="${s.shopHref}">${s.shopText}</a>
        </div>
      </div>`).join('');
    
    const totalWidth = slides.length * 325; // 315px width + 10px gap
    const duration = slides.length * 3; // seconds - normal speed
    
    const newStarSection = `${starSectionStart}<div class="new_instagram_main">
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
    animation: hqMarqueeLeft linear infinite;
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
  }
  .hq-spotlight-slide .img_wrapper img {
    max-width: 100%;
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
  .hq-spotlight-slide .new_insta_handle_btn a.handle {
    font-size: 12px;
  }
  .hq-spotlight-slide .new_insta_handle_btn a.btn_insta {
    text-transform: uppercase;
    text-decoration: underline;
    font-size: 15px;
  }
  @media (max-width: 768px) {
    .hq-spotlight-slide {
      flex: 0 0 260px;
      width: 260px;
    }
    .hq-spotlight-slide .img_wrapper img {
      height: 300px;
    }
  }
  @media (max-width: 480px) {
    .hq-spotlight-slide {
      flex: 0 0 220px;
      width: 220px;
    }
    .hq-spotlight-slide .img_wrapper img {
      height: 260px;
    }
  }
</style>
</div>`;
    
    html = html.slice(0, starStart) + newStarSection + html.slice(starEnd);
    console.log('✅ Rebuilt Star Spotlight as CSS marquee carousel');
  }
}

// Write index.html
fs.writeFileSync(INDEX, html, 'utf8');
console.log(`✅ index.html written (${origLen} → ${html.length} bytes)`);

// ============================================================
// FIX 3 & 4: CSS patches - logo centering + mobile responsiveness
// ============================================================

let css = fs.readFileSync(CSS, 'utf8');

const cssPatches = `

/* ===== HQ LEATHERCON CUSTOM FIXES ===== */

/* FIX: Center logo in header - both desktop and mobile */
.logo-area__middle {
  flex: 1 !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
}
.logo-area__middle__inner {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  width: 100% !important;
}
.logo, .logo__h1 {
  margin: 0 !important;
  text-align: center !important;
}
.logo__link {
  display: inline-flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  text-align: center !important;
}

/* Mobile: also center and ensure logo-area is full width */
@media (max-width: 768px) {
  .logo-area {
    justify-content: space-between !important;
  }
  .logo-area__middle {
    position: absolute !important;
    left: 50% !important;
    transform: translateX(-50%) !important;
    flex: none !important;
  }
  .logo-area__left,
  .logo-area__right {
    position: relative !important;
    z-index: 2 !important;
  }
  /* FIX: Mobile responsiveness - prevent horizontal overflow */
  body, html {
    overflow-x: hidden !important;
  }
  .container, .container-fluid {
    max-width: 100% !important;
    overflow-x: hidden !important;
  }
  /* Mobile nav text size */
  .navigation__tier-1 > li > a {
    font-size: 15px !important;
  }
  /* Featured blocks responsive */
  .featured-block-container {
    flex-wrap: wrap !important;
  }
  .featured-block {
    min-width: 48% !important;
    max-width: 50% !important;
  }
  /* Quotes and hero sections */
  .slideshow, .rimage-outer-wrapper {
    max-width: 100vw !important;
  }
}

@media (max-width: 480px) {
  .featured-block {
    min-width: 100% !important;
    max-width: 100% !important;
  }
}

/* ===== END HQ CUSTOM FIXES ===== */
`;

// Only add if not already added
if (!css.includes('HQ LEATHERCON CUSTOM FIXES')) {
  css = css + cssPatches;
  fs.writeFileSync(CSS, css, 'utf8');
  console.log('✅ CSS patches applied (logo centering + mobile responsiveness)');
} else {
  console.log('ℹ️  CSS patches already present, skipping');
}

console.log('\n🎉 All fixes applied! Now run: npm run build');
