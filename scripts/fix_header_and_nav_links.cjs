const fs = require('fs');
const path = require('path');

console.log('--- 1. FIXING STYLES.CSS ---');
const cssPath = 'public/thejacketmaker/css/styles.css';
let css = fs.readFileSync(cssPath, 'utf8');

// Remove .site-header from overflow-x: hidden list
css = css.replace(
  /\.site-header,\s*\n\s*\.site-footer,/g,
  '.site-footer,'
);

// Append strict header overflow: visible and mega-menu hover rules
const headerFixCss = `
/* ============================================================
   CRITICAL HEADER & MEGA-MENU RESTORATION (ZERO HEADER SCROLLBAR)
   ============================================================ */
html body .site-header,
html body .header,
html body #shopify-section-header,
html body .pageheader,
html body #main-nav,
html body .navigation,
html body .navigation--main,
html body .navigation__tier-1-container,
html body .navigation__tier-1 {
  overflow: visible !important;
  overflow-x: visible !important;
  overflow-y: visible !important;
  max-height: none !important;
}

/* DESKTOP MEGA-MENU HOVER DROPDOWN (RESTORES 1:1 LIVE BEHAVIOR) */
@media screen and (min-width: 769px) {
  .navigation .navigation__item--with-children {
    position: static !important;
  }

  .navigation .navigation__item--with-children:hover > .navigation__tier-2-container,
  .navigation .navigation__item--with-children.is-hovered > .navigation__tier-2-container,
  .navigation .navigation__item--with-children.navigation__item--show-children > .navigation__tier-2-container {
    opacity: 1 !important;
    visibility: visible !important;
    pointer-events: auto !important;
    display: block !important;
    z-index: 99999 !important;
  }

  .navigation__tier-2-container {
    position: absolute !important;
    top: 100% !important;
    left: 0 !important;
    right: 0 !important;
    width: 100% !important;
    background: #ffffff !important;
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15) !important;
    border-top: 1px solid #ebebeb !important;
    border-bottom: 2px solid #111111 !important;
    transition: opacity 0.18s ease-in-out, visibility 0.18s ease-in-out !important;
  }

  .navigation .navigation__tier-1 > .navigation__item > .navigation__link {
    cursor: pointer !important;
  }

  .navigation .navigation__tier-1 > .navigation__item:hover > .navigation__link {
    color: #000000 !important;
    font-weight: 700 !important;
  }
}
`;

css += '\n' + headerFixCss + '\n';
fs.writeFileSync(cssPath, css, 'utf8');
console.log('Successfully updated styles.css with zero header scrollbar and mega-menu hover rules!');

console.log('\n--- 2. FIXING GALLERY-CONTROLLER.JS (DESKTOP HOVER ENGINE) ---');
const jsPath = 'public/thejacketmaker/js/gallery-controller.js';
let js = fs.readFileSync(jsPath, 'utf8');

const desktopNavJs = `
  function initDesktopMegaMenu() {
    if (window.innerWidth < 769) return;
    const items = document.querySelectorAll('.navigation--main .navigation__item--with-children');
    items.forEach(item => {
      const tier2 = item.querySelector('.navigation__tier-2-container');
      if (!tier2) return;

      item.addEventListener('mouseenter', () => {
        items.forEach(other => {
          if (other !== item) {
            other.classList.remove('navigation__item--show-children', 'is-hovered');
            const otherTier = other.querySelector('.navigation__tier-2-container');
            if (otherTier) {
              otherTier.style.opacity = '0';
              otherTier.style.visibility = 'hidden';
              otherTier.style.display = 'none';
            }
          }
        });

        item.classList.add('navigation__item--show-children', 'is-hovered');
        tier2.style.opacity = '1';
        tier2.style.visibility = 'visible';
        tier2.style.display = 'block';
        tier2.style.pointerEvents = 'auto';
      });

      item.addEventListener('mouseleave', () => {
        item.classList.remove('navigation__item--show-children', 'is-hovered');
        tier2.style.opacity = '0';
        tier2.style.visibility = 'hidden';
        tier2.style.display = 'none';
        tier2.style.pointerEvents = 'none';
      });
    });
  }
`;

// Insert initDesktopMegaMenu into init function
if (!js.includes('initDesktopMegaMenu')) {
  js = js.replace('function init() {', desktopNavJs + '\n  function init() {\n    initDesktopMegaMenu();');
  fs.writeFileSync(jsPath, js, 'utf8');
  console.log('Successfully injected initDesktopMegaMenu into gallery-controller.js!');
}

console.log('\n--- 3. FIXING NAVIGATION LINKS ACROSS HTML PAGES ---');
const navMapping = [
  // DESIGN YOUR OWN -> /pages/custom-leather-jackets/index.html
  { match: /href="\/thejacketmaker\/products\/[a-z0-9\-]+\/index\.html"([^>]*>DESIGN YOUR OWN<\/a>)/gi, replacement: 'href="/thejacketmaker/pages/custom-leather-jackets/index.html"$1' },
  { match: /href="[^"]*"([^>]*>DESIGN YOUR OWN<\/a>)/gi, replacement: 'href="/thejacketmaker/pages/custom-leather-jackets/index.html"$1' },

  // Shoes sub-links
  { match: /href="[^"]*"([^>]*>Custom Boots<\/a>)/gi, replacement: 'href="/thejacketmaker/pages/custom-boots/index.html"$1' },
  { match: /href="[^"]*"([^>]*>Custom Dress Shoes<\/a>)/gi, replacement: 'href="/thejacketmaker/pages/custom-dress-shoes/index.html"$1' },
  { match: /href="[^"]*"([^>]*>Custom Leather Shoes<\/a>)/gi, replacement: 'href="/thejacketmaker/pages/custom-leather-shoes/index.html"$1' },
  { match: /href="[^"]*"([^>]*>Custom Loafers<\/a>)/gi, replacement: 'href="/thejacketmaker/pages/custom-loafers/index.html"$1' },
  { match: /href="[^"]*"([^>]*>Custom Moccasins<\/a>)/gi, replacement: 'href="/thejacketmaker/pages/custom-moccasins/index.html"$1' },
  { match: /href="[^"]*"([^>]*>Custom Oxford Shoes<\/a>)/gi, replacement: 'href="/thejacketmaker/pages/custom-oxford-shoes/index.html"$1' },

  // Bags sub-links
  { match: /href="[^"]*"([^>]*>Custom Handbags<\/a>)/gi, replacement: 'href="/thejacketmaker/pages/custom-handbags/index.html"$1' },
  { match: /href="[^"]*"([^>]*>Custom Briefcases<\/a>)/gi, replacement: 'href="/thejacketmaker/pages/custom-briefcases/index.html"$1' },
  { match: /href="[^"]*"([^>]*>Custom Tote Bags<\/a>)/gi, replacement: 'href="/thejacketmaker/pages/custom-tote-bags/index.html"$1' },
  { match: /href="[^"]*"([^>]*>Custom Backpacks<\/a>)/gi, replacement: 'href="/thejacketmaker/pages/custom-backpacks/index.html"$1' },
  { match: /href="[^"]*"([^>]*>Custom Messenger &amp; Laptop Bags<\/a>)/gi, replacement: 'href="/thejacketmaker/pages/custom-messenger-laptop-bags/index.html"$1' },
  { match: /href="[^"]*"([^>]*>Custom Duffel &amp; Weekender Bags<\/a>)/gi, replacement: 'href="/thejacketmaker/pages/custom-duffel-weekender-bags/index.html"$1' },
  { match: /href="[^"]*"([^>]*>Custom Portfolio Bags<\/a>)/gi, replacement: 'href="/thejacketmaker/pages/custom-portfolio-bags/index.html"$1' },
  { match: /href="[^"]*"([^>]*>Custom Clutch Purses<\/a>)/gi, replacement: 'href="/thejacketmaker/pages/custom-clutch-purses/index.html"$1' },

  // Leather Goods sub-links
  { match: /href="[^"]*"([^>]*>Custom Leather Wallets<\/a>)/gi, replacement: 'href="/thejacketmaker/pages/custom-leather-wallets/index.html"$1' },
  { match: /href="[^"]*"([^>]*>Custom Leather Keychains<\/a>)/gi, replacement: 'href="/thejacketmaker/collections/leather-keychains/index.html"$1' },
  { match: /href="[^"]*"([^>]*>Custom Passport Holders<\/a>)/gi, replacement: 'href="/thejacketmaker/pages/custom-passport-holders/index.html"$1' },
  { match: /href="[^"]*"([^>]*>Personalized Luggage Tags<\/a>)/gi, replacement: 'href="/thejacketmaker/pages/personalized-luggage-tags/index.html"$1' },
  { match: /href="[^"]*"([^>]*>Custom Leather Belts<\/a>)/gi, replacement: 'href="/thejacketmaker/pages/custom-leather-belts/index.html"$1' },

  // Brand / Reviews sub-links
  { match: /href="[^"]*"([^>]*>Customer Reviews<\/a>)/gi, replacement: 'href="/thejacketmaker/pages/happy-customers/index.html"$1' },
  { match: /href="[^"]*"([^>]*>Customers' Gallery<\/a>)/gi, replacement: 'href="/thejacketmaker/pages/happy-customers/index.html"$1' },
  { match: /href="[^"]*"([^>]*>Press &amp; Mentions<\/a>)/gi, replacement: 'href="/thejacketmaker/pages/happy-customers/index.html"$1' },
  { match: /href="[^"]*"([^>]*>Celebrity Style<\/a>)/gi, replacement: 'href="/thejacketmaker/pages/happy-customers/index.html"$1' },

  // Sale items
  { match: /href="[^"]*"([^>]*>Factory Seconds - 40% OFF<\/a>)/gi, replacement: 'href="/thejacketmaker/collections/clearance-sale/index.html"$1' },
  { match: /href="[^"]*"([^>]*>Leather Bags - 50% OFF<\/a>)/gi, replacement: 'href="/thejacketmaker/collections/full-grain-leather-bags/index.html"$1' },

  // Gifting
  { match: /href="[^"]*"([^>]*>Gift Set<\/a>)/gi, replacement: 'href="/thejacketmaker/collections/gift-set/index.html"$1' },
  { match: /href="[^"]*"([^>]*>Leather Gifts<\/a>)/gi, replacement: 'href="/thejacketmaker/collections/leather-gifts/index.html"$1' }
];

// Apply to public/thejacketmaker/index.html
let indexHtml = fs.readFileSync('public/thejacketmaker/index.html', 'utf8');
let beforeLen = indexHtml.length;
for (const rule of navMapping) {
  indexHtml = indexHtml.replace(rule.match, rule.replacement);
}
fs.writeFileSync('public/thejacketmaker/index.html', indexHtml, 'utf8');
console.log('Successfully updated navigation links in public/thejacketmaker/index.html!');

// Also apply to all collections and pages index.html
const subFiles = [
  ...fs.readdirSync('public/thejacketmaker/collections').map(d => `public/thejacketmaker/collections/${d}/index.html`),
  ...fs.readdirSync('public/thejacketmaker/pages').map(d => `public/thejacketmaker/pages/${d}/index.html`)
];

let updatedCount = 0;
for (const file of subFiles) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    let mod = false;
    for (const rule of navMapping) {
      if (rule.match.test(content)) {
        content = content.replace(rule.match, rule.replacement);
        mod = true;
      }
    }
    if (mod) {
      fs.writeFileSync(file, content, 'utf8');
      updatedCount++;
    }
  }
}

console.log(`Updated navigation links in ${updatedCount} collection & page templates!`);
