const fs = require('fs');

let html = fs.readFileSync('public/thejacketmaker/index.html', 'utf8');

// 1. Update Header Logo to larger prominent size
const oldHeaderLogo = /<a class="logo__link" href="\/thejacketmaker\/index\.html" title="HQ Leathercon"[\s\S]*?<\/a>/i;
const newHeaderLogo = `<a class="logo__link" href="/thejacketmaker/index.html" title="HQ Leathercon" style="display: inline-flex; align-items: center; gap: 16px; text-decoration: none;">
    <img alt="HQ Leathercon" class="logo__image" height="62" src="/thejacketmaker/images/hq-crest-logo.png" style="height: 62px; width: auto; max-height: 65px; object-fit: contain; vertical-align: middle;"/>
    <span class="logo__brand-title" style="font-family: 'Montserrat', 'Helvetica Neue', Arial, sans-serif; font-size: 24px; font-weight: 800; letter-spacing: 0.08em; color: #111111; text-transform: uppercase; white-space: nowrap; line-height: 1;">HQ LEATHERCON</span>
  </a>`;

if (oldHeaderLogo.test(html)) {
  html = html.replace(oldHeaderLogo, newHeaderLogo);
  console.log('Updated header logo to larger size.');
} else {
  console.log('Old header logo pattern not found, checking alternatives...');
}

// 2. Update Footer Logo to larger prominent size
const footerLogoRegex = /<a href="\/thejacketmaker\/index\.html" style="display: inline-flex; align-items: center; gap: 14px; text-decoration: none;">[\s\S]*?<\/a>/i;
const newFooterLogo = `<a href="/thejacketmaker/index.html" style="display: inline-flex; align-items: center; gap: 16px; text-decoration: none;">
    <img alt="HQ Leathercon" src="/thejacketmaker/images/hq-crest-logo.png" style="height: 60px; width: auto; max-height: 62px; object-fit: contain;"/>
    <span style="font-family: 'Montserrat', 'Helvetica Neue', Arial, sans-serif; font-size: 24px; font-weight: 800; letter-spacing: 0.08em; color: #111111; text-transform: uppercase; line-height: 1;">HQ LEATHERCON</span>
  </a>`;

if (footerLogoRegex.test(html)) {
  html = html.replace(footerLogoRegex, newFooterLogo);
  console.log('Updated footer logo to larger size.');
}

// 3. Update Quotes carousel buttons to use crisp inline SVG chevrons
const prevBtnOld = /<button aria-label="[^"]*" class="slick-prev-custom slick-arrow"[^>]*>[\s\S]*?<\/button>/i;
const nextBtnOld = /<button aria-label="[^"]*" class="slick-next-custom slick-arrow"[^>]*>[\s\S]*?<\/button>/i;

const prevBtnNew = `<button aria-label="Previous" class="slick-prev-custom slick-arrow" data-role="none" role="button" type="button"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg></button>`;
const nextBtnNew = `<button aria-label="Next" class="slick-next-custom slick-arrow" data-role="none" role="button" type="button"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></button>`;

if (prevBtnOld.test(html)) {
  html = html.replace(prevBtnOld, prevBtnNew);
  console.log('Updated quotes prev button.');
}
if (nextBtnOld.test(html)) {
  html = html.replace(nextBtnOld, nextBtnNew);
  console.log('Updated quotes next button.');
}

// 4. Expand GIFTING menu in Desktop and Mobile drawers
const fullGiftingList = `
<li class="navigation__item">
  <a class="navigation__link" href="/thejacketmaker/collections/gifts-for-him/index.html">Gifts For Him</a>
</li>
<li class="navigation__item">
  <a class="navigation__link" href="/thejacketmaker/collections/gifts-for-her/index.html">Gifts For Her</a>
</li>
<li class="navigation__item">
  <a class="navigation__link" href="/thejacketmaker/collections/gift-set/index.html">Leather Gift Sets</a>
</li>
<li class="navigation__item">
  <a class="navigation__link" href="/thejacketmaker/collections/leather-gifts/index.html">Luxury Leather Gifts</a>
</li>
<li class="navigation__item">
  <a class="navigation__link" href="/thejacketmaker/collections/leather-keychains/index.html">Leather Keychains</a>
</li>
<li class="navigation__item">
  <a class="navigation__link" href="/thejacketmaker/collections/leather-wallets/index.html">Leather Wallets</a>
</li>
<li class="navigation__item">
  <a class="navigation__link" href="/thejacketmaker/collections/mens-leather-belts/index.html">Leather Belts</a>
</li>
<li class="navigation__item">
  <a class="navigation__link" href="/thejacketmaker/products/gift-cards/index.html">Gift Cards</a>
</li>`;

// Replace desktop NavigationTier2-6
html = html.replace(
  /<div class="navigation__tier-2-container navigation__child-tier" id="NavigationTier2-6"><div class="container">\s*<ul class="navigation__tier-2">[\s\S]*?<\/ul>\s*<\/div><\/div>/i,
  `<div class="navigation__tier-2-container navigation__child-tier" id="NavigationTier2-6"><div class="container"><ul class="navigation__tier-2">${fullGiftingList}</ul></div></div>`
);

// Replace mobile NavigationTier2-7-mob
html = html.replace(
  /<div id="NavigationTier2-7-mob" class="navigation__tier-2-container navigation__child-tier"><div class="container">\s*<ul class="navigation__tier-2">[\s\S]*?<\/ul>\s*<\/div><\/div>/i,
  `<div id="NavigationTier2-7-mob" class="navigation__tier-2-container navigation__child-tier"><div class="container"><ul class="navigation__tier-2">${fullGiftingList}</ul></div></div>`
);

// Replace mobile NavigationTier2-7-mobMobileNav
html = html.replace(
  /<div class="navigation__tier-2-container navigation__child-tier" id="NavigationTier2-7-mobMobileNav"><div class="container">\s*<ul class="navigation__tier-2">[\s\S]*?<\/ul>\s*<\/div><\/div>/i,
  `<div class="navigation__tier-2-container navigation__child-tier" id="NavigationTier2-7-mobMobileNav"><div class="container"><ul class="navigation__tier-2">${fullGiftingList}</ul></div></div>`
);

fs.writeFileSync('public/thejacketmaker/index.html', html, 'utf8');
console.log('Saved public/thejacketmaker/index.html successfully!');
