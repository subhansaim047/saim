const fs = require('fs');

let html = fs.readFileSync('public/thejacketmaker/index.html', 'utf8');

// 1. Update Header Logo: Text UNDER the logo
const newHeaderLogo = `<a class="logo__link" href="/thejacketmaker/index.html" title="HQ Leathercon" style="display: inline-flex; flex-direction: column; align-items: center; justify-content: center; text-decoration: none; text-align: center;">
    <img alt="HQ Leathercon" class="logo__image" height="48" src="/thejacketmaker/images/hq-crest-logo.png" style="height: 48px; width: auto; max-height: 52px; object-fit: contain; margin-bottom: 4px; display: block; margin-left: auto; margin-right: auto;"/>
    <span class="logo__brand-title" style="font-family: 'Montserrat', 'Helvetica Neue', Arial, sans-serif; font-size: 15px; font-weight: 800; letter-spacing: 0.12em; color: #111111; text-transform: uppercase; white-space: nowrap; line-height: 1; display: block; text-align: center;">HQ LEATHERCON</span>
  </a>`;

// Find existing logo__link
const oldLogoMatch = html.match(/<a[^>]*class="[^"]*logo__link[^"]*"[^>]*>[\s\S]*?<\/a>/i);
if (oldLogoMatch) {
  html = html.replace(oldLogoMatch[0], newHeaderLogo);
  console.log('Replaced header logo with vertical layout (text under logo).');
}

// 2. Update Footer Logo: clean prominent layout
const newFooterLogo = `<a href="/thejacketmaker/index.html" style="display: inline-flex; flex-direction: column; align-items: flex-start; text-decoration: none;">
    <img alt="HQ Leathercon" src="/thejacketmaker/images/hq-crest-logo.png" style="height: 54px; width: auto; max-height: 56px; object-fit: contain; margin-bottom: 6px;"/>
    <span style="font-family: 'Montserrat', 'Helvetica Neue', Arial, sans-serif; font-size: 16px; font-weight: 800; letter-spacing: 0.12em; color: #111111; text-transform: uppercase; line-height: 1;">HQ LEATHERCON</span>
  </a>`;

const oldFooterMatch = html.match(/<a href="\/thejacketmaker\/index\.html" style="display: inline-flex;[^"]*"[^>]*>[\s\S]*?<\/a>/i);
if (oldFooterMatch) {
  html = html.replace(oldFooterMatch[0], newFooterLogo);
  console.log('Replaced footer logo with clean brand layout.');
}

// 3. Fix Section 10 cards that all linked to ionic-black-leather-jacket
const sec10Replacements = [
  {
    find: 'alt="Exton Black Hooded Down Puffer Jacket"',
    linkOld: '/thejacketmaker/products/ionic-black-leather-jacket/index.html',
    linkNew: '/thejacketmaker/products/exton-black-hooded-down-puffer-jacket/index.html'
  },
  {
    find: 'alt="Furcliff Black Leather Coat"',
    linkOld: '/thejacketmaker/products/ionic-black-leather-jacket/index.html',
    linkNew: '/thejacketmaker/products/furcliff-black-leather-coat/index.html'
  },
  {
    find: 'alt="Evan Hart Fur Brown Leather Jacket"',
    linkOld: '/thejacketmaker/products/ionic-black-leather-jacket/index.html',
    linkNew: '/thejacketmaker/products/evan-hart-fur-brown-leather-jacket/index.html'
  },
  {
    find: 'alt="Sven Black Leather Bomber Jacket"',
    linkOld: '/thejacketmaker/products/ionic-black-leather-jacket/index.html',
    linkNew: '/thejacketmaker/products/sven-black-leather-bomber-jacket/index.html'
  },
  {
    find: 'alt="The Poet Midnight Blue Leather Tote Bag"',
    linkOld: '/thejacketmaker/products/ionic-black-leather-jacket/index.html',
    linkNew: '/thejacketmaker/products/the-poet-midnight-blue-leather-tote-bag/index.html'
  },
  {
    find: 'alt="The Darrio Black Leather Duffle Bag"',
    linkOld: '/thejacketmaker/products/ionic-black-leather-jacket/index.html',
    linkNew: '/thejacketmaker/products/the-darrio-black-leather-duffle-bag/index.html'
  }
];

sec10Replacements.forEach(r => {
  const altIdx = html.indexOf(r.find);
  if (altIdx !== -1) {
    const aStart = html.lastIndexOf('<a', altIdx);
    if (aStart !== -1 && aStart > altIdx - 300) {
      const aSlice = html.slice(aStart, altIdx);
      if (aSlice.includes(r.linkOld)) {
        const replaced = aSlice.replace(r.linkOld, r.linkNew);
        html = html.slice(0, aStart) + replaced + html.slice(altIdx);
        console.log(`Updated Section 10 product link for: ${r.find}`);
      }
    }
  }
});

// 4. Fix Instagram Feed Shop Now links so they don't all point to ionic
const instaProducts = [
  '/thejacketmaker/products/dean-brown-leather-biker-jacket/index.html',
  '/thejacketmaker/products/sheriff-brown-suede-jacket/index.html',
  '/thejacketmaker/products/allaric-alley-black-leather-biker-jacket/index.html',
  '/thejacketmaker/products/lavendard-brown-leather-biker-jacket/index.html',
  '/thejacketmaker/products/sven-black-leather-bomber-jacket/index.html',
  '/thejacketmaker/products/nintenzo-black-hooded-leather-jacket/index.html',
  '/thejacketmaker/products/mystical-black-leather-jacket/index.html',
  '/thejacketmaker/products/legacy-black-leather-biker-jacket/index.html',
  '/thejacketmaker/products/inferno-black-leather-jacket/index.html',
  '/thejacketmaker/products/furcliff-black-leather-coat/index.html',
  '/thejacketmaker/products/blain-dark-brown-suede-bomber-jacket/index.html',
  '/thejacketmaker/products/exton-black-hooded-down-puffer-jacket/index.html',
  '/thejacketmaker/products/the-poet-midnight-blue-leather-tote-bag/index.html',
  '/thejacketmaker/products/the-darrio-black-leather-duffle-bag/index.html'
];

let instaIdx = 0;
let replacedInsta = 0;
while ((instaIdx = html.indexOf('class="btn_insta"', instaIdx)) !== -1) {
  const hrefStart = html.indexOf('href="', instaIdx);
  if (hrefStart !== -1 && hrefStart < instaIdx + 100) {
    const hrefEnd = html.indexOf('"', hrefStart + 6);
    const chosenProduct = instaProducts[replacedInsta % instaProducts.length];
    html = html.slice(0, hrefStart + 6) + chosenProduct + html.slice(hrefEnd);
    replacedInsta++;
  }
  instaIdx += 20;
}
console.log(`Updated ${replacedInsta} Instagram Shop Now buttons with diverse products!`);

// 5. Fix Testimonial links
const testimonialProducts = [
  '/thejacketmaker/products/sheriff-brown-suede-jacket/index.html',
  '/thejacketmaker/products/dean-brown-leather-biker-jacket/index.html',
  '/thejacketmaker/products/sven-black-leather-bomber-jacket/index.html',
  '/thejacketmaker/products/lavendard-brown-leather-biker-jacket/index.html',
  '/thejacketmaker/products/nintenzo-black-hooded-leather-jacket/index.html'
];

let testIdx = 0;
let replacedTest = 0;
while ((testIdx = html.indexOf('class="testimonial__image-with-caption__link"', testIdx)) !== -1) {
  const hrefStart = html.indexOf('href="', testIdx);
  if (hrefStart !== -1 && hrefStart < testIdx + 120) {
    const hrefEnd = html.indexOf('"', hrefStart + 6);
    const chosen = testimonialProducts[replacedTest % testimonialProducts.length];
    html = html.slice(0, hrefStart + 6) + chosen + html.slice(hrefEnd);
    replacedTest++;
  }
  testIdx += 50;
}
console.log(`Updated ${replacedTest} Testimonial links with diverse products!`);

fs.writeFileSync('public/thejacketmaker/index.html', html, 'utf8');
console.log('Saved public/thejacketmaker/index.html successfully!');
