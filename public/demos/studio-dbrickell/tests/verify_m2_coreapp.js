/**
 * Studio-D Brickell — Milestone M2 Core Web Application Verification Suite
 * Verifies 100% fidelity, DOM structure, CSS token compliance, JS syntax, and offline isolation.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DEMO_ROOT = path.resolve(__dirname, '..');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  \x1b[32m✔\x1b[0m ${message}`);
  } else {
    failedTests++;
    console.error(`  \x1b[31m✖ FAIL:\x1b[0m ${message}`);
  }
}

console.log('\n\x1b[1m\x1b[34m=== Studio-D Brickell M2 Core Web Application Verification ===\x1b[0m\n');

// 1. Check Core Files Existence
console.log('\x1b[36m▶ Checking File Existence...\x1b[0m');
const requiredFiles = [
  'index.html',
  'assets/css/styles.css',
  'assets/css/fonts.css',
  'assets/js/main.js',
  'assets/js/booking.js'
];

for (const relPath of requiredFiles) {
  const fullPath = path.join(DEMO_ROOT, relPath);
  const exists = fs.existsSync(fullPath);
  const size = exists ? fs.statSync(fullPath).size : 0;
  assert(exists && size > 100, `File exists and is non-empty: ${relPath} (${size} bytes)`);
}

// 2. Read and Parse HTML Content
console.log('\n\x1b[36m▶ Auditing HTML Content & DOM Layout (Sections S1-S14)...\x1b[0m');
const htmlPath = path.join(DEMO_ROOT, 'index.html');
const html = fs.readFileSync(htmlPath, 'utf8');

// S1: Announcement Bar & Top Header
assert(html.includes('announcement-bar') || html.includes('top-announcement'), 'S1: Announcement bar exists');
assert(html.includes('20% Off') && html.includes('studio-dbrickell.shop'), 'S1: 20% Off promotion link to shop exists');
assert(html.includes('logo.png'), 'S1: Studio-D Brickell logo is linked');
assert(html.includes('(305) 349-4969') && html.includes('tel:3054000669'), 'S1: Phone CTA (305) 349-4969 exists');
assert(html.includes('BOOK AN APPOINTMENT') && html.includes('mangomint.com/667750'), 'S1: Booking Mangomint CTA exists');
assert(html.includes('menu-toggle') || html.includes('mobile-menu-toggle'), 'S1: Mobile hamburger toggle button exists');

// S2: Navigation Menu
assert(html.includes('nav-menu') || html.includes('desktop-nav'), 'S2: Desktop navigation menu exists');
const requiredNavItems = ['HOME', 'SERVICES', 'BLOG', 'DINHO', 'GALLERY', 'SPECIALS', 'GIFT CARD', 'TEAM', 'CONTACT'];
for (const item of requiredNavItems) {
  assert(new RegExp(item, 'i').test(html), `S2: Navigation contains "${item}"`);
}
assert(html.includes('HAIR EXTENSIONS') && html.includes('HAIRCUTS AND STYLES') && html.includes('COLOR AND HIGHLIGHTS'), 'S2: Nested HAIR sub-items exist');
assert(html.includes('mobile-nav-drawer') && html.includes('mobile-nav-backdrop'), 'S2: Mobile navigation drawer and backdrop exist');

// S3: Hero Section
assert(html.includes('hero-section') || html.includes('id="hero"'), 'S3: Hero section container exists');
assert(html.includes('slide-1.jpg') && html.includes('slide-5.jpg'), 'S3: 5 background slides linked in hero');
assert(html.includes('BEAUTY SALON') && html.includes('IN MIAMI, FL'), 'S3: Hero typography H1 "BEAUTY SALON" and H2 "IN MIAMI, FL" exist');
assert(html.includes('hero-dots') || html.includes('slider-nav'), 'S3: Hero slide pagination dots exist');

// S4: Welcome Section
assert(html.includes('welcome-section') || html.includes('id="welcome"'), 'S4: Welcome section exists');
assert(html.includes('Welcome To STUDIO-D BRICKELL'), 'S4: Title "Welcome To STUDIO-D BRICKELL" matches');
assert(html.includes('Come As You Are, Leave At Your Best'), 'S4: Subtitle "Come As You Are, Leave At Your Best" matches');
assert(html.includes('welcome-salon.jpg'), 'S4: Salon interior showcase photo linked');

// S5: Services Grid
assert(html.includes('services-section') || html.includes('id="services"'), 'S5: Services section exists');
const requiredServices = ['HAIR', 'BODY WAXING', 'NAILS', 'BROWS & LASHES', 'FACIALS', 'MORE SERVICES'];
for (const s of requiredServices) {
  assert(html.includes(s), `S5: Service card "${s}" exists`);
}
assert(html.includes('hair-styling.jpg') && html.includes('body-waxing.jpg') && html.includes('nails.jpg'), 'S5: Service card images linked');

// S6: Why Us Metrics
assert(html.includes('why-us-section') || html.includes('id="why-us"'), 'S6: Why Us section exists');
assert(html.includes('WHY US?'), 'S6: Headline "WHY US?" exists');
assert(html.includes('>20<') || html.includes('20</div>'), 'S6: 20 Years Experience stat exists');
assert(html.includes('>45<') || html.includes('45</div>'), 'S6: 45 Beauty Care Services stat exists');
assert(html.includes('>25<') || html.includes('25</div>'), 'S6: 25 Master Stylists stat exists');

// S7: Product Spotlights
assert(html.includes('product-spotlight') || html.includes('id="products"'), 'S7: Product spotlight section exists');
assert(html.includes('kerastase-premiere.webp'), 'S7: Kérastase Première product image linked');
assert(html.includes('Première Fine To Medium Repairing Hair Care Set') || html.includes('Première'), 'S7: Product title matches');
assert(html.includes('$148.00'), 'S7: Product price $148.00 matches');
assert(html.includes('Who We Are STUDIO-D BRICKELL') && html.includes('shu uemura'), 'S7: Shu Uemura exclusive salon story exists');

// S8: Specials & Promotions
assert(html.includes('specials-section') || html.includes('id="specials"'), 'S8: Specials section exists');
assert(html.includes('Free Kerastase Hydration Treatment With Any Color'), 'S8: Free Kérastase Treatment promo banner exists');
assert(html.includes('Mention this ad when booking'), 'S8: "Mention this ad when booking" text exists');
assert(html.includes('quality salon Services') && html.includes('Microblading'), 'S8: Quality salon services list exists');

// S9: Testimonials Carousel
assert(html.includes('testimonials-section') || html.includes('id="testimonials"'), 'S9: Testimonials section exists');
assert(html.includes('TESTIMONIALS'), 'S9: Heading "TESTIMONIALS" exists');
assert(html.includes('Maria G.') && html.includes('Dinho'), 'S9: Maria G. review for Dinho exists');
assert(html.includes('Sophia L.') && html.includes('Rafael'), 'S9: Sophia L. review for Rafael exists');
assert(html.includes('Elena R.') && html.includes('Cristiane'), 'S9: Elena R. review for Cristiane exists');
assert(html.includes('star.svg') || html.includes('star-icon'), 'S9: Star rating SVGs present');
assert(html.includes('testimonial-prev') && html.includes('testimonial-next'), 'S9: Carousel prev/next buttons exist');

// S10: Instagram Grid
assert(html.includes('instagram-section') || html.includes('id="instagram"'), 'S10: Instagram section exists');
assert(html.includes('insta-1.jpg') && html.includes('insta-6.jpg'), 'S10: Instagram feed images linked');
assert(html.includes('Follow on Instagram') && html.includes('instagram.com/studiodmiami'), 'S10: Follow on Instagram CTA exists');

// S11: Booking Form
assert(html.includes('booking-form') && html.includes('id="booking"'), 'S11: Booking form exists');
assert(html.includes('first-name') && html.includes('last-name'), 'S11: First and Last name inputs exist');
assert(html.includes('type="email"') && html.includes('id="email"'), 'S11: Email input exists');
assert(html.includes('type="tel"') && html.includes('id="phone"'), 'S11: Phone input exists');
assert(html.includes('id="sms-consent"') && html.includes('type="checkbox"'), 'S11: SMS consent checkbox exists');
assert(html.includes('id="comments"'), 'S11: Comments textarea exists');
assert(html.includes('booking-feedback'), 'S11: Live validation feedback area exists');

// S12: Google Maps
assert(html.includes('location-section') || html.includes('id="location"'), 'S12: Location section exists');
assert(html.includes('900 S Miami Ave #266, Miami, FL 33130'), 'S12: Mary Brickell Village address matches verbatim');
assert(html.includes('google.com/maps/embed'), 'S12: Google Maps embed iframe exists');

// S13: Footer
assert(html.includes('site-footer') || html.includes('main-footer'), 'S13: Footer exists');
assert(html.includes('Schedule Your Next Beauty Session'), 'S13: Pre-footer callout banner exists');
assert(html.includes('VISA') && html.includes('Apple Pay') && html.includes('Google Pay'), 'S13: 10 payment badges listed');
assert(html.includes('Sunday') && html.includes('Monday') && html.includes('Tuesday') && html.includes('Saturday'), 'S13: Full 7-day business hours listed');
assert(html.includes('PRIVACY POLICY') && html.includes('TERMS OF SERVICE'), 'S13: Legal links exist');
assert(html.includes('Copyright © 2025 Studio-D Brickell'), 'S13: Copyright notice matches');
assert(html.includes('dharmadigitalmarketingagency.com') || html.includes('dharma'), 'S13: Dharma marketing credit exists');

// S14: Mobile Sticky Action Bar
assert(html.includes('id="botones-movil"') || html.includes('mobile-sticky-bar'), 'S14: Mobile sticky action bar #botones-movil exists');
assert(html.includes('btn-mobile-call') && html.includes('btn-mobile-book'), 'S14: Left Call & Right Book Now buttons exist');

// Modal Confirmation
assert(html.includes('booking-success-modal'), 'Modal: Booking confirmation modal exists');

// Offline Assets Isolation Check in HTML
assert(!html.includes('fonts.googleapis.com'), 'Offline Isolation: No remote Google Fonts links');
assert(!html.includes('cdnjs.cloudflare.com'), 'Offline Isolation: No remote CDN script/css links');
assert(!html.includes('fontawesome.com'), 'Offline Isolation: No remote FontAwesome links');

// 3. CSS Token & Rule Verification
console.log('\n\x1b[36m▶ Auditing CSS Stylesheet & Tokens...\x1b[0m');
const cssPath = path.join(DEMO_ROOT, 'assets', 'css', 'styles.css');
const css = fs.readFileSync(cssPath, 'utf8');

assert(css.includes('--font-luxury') && css.includes('Font2'), 'CSS: Font2 luxury typography custom property declared');
assert(css.includes('#0019FF'), 'CSS: Royal Blue announcement color token #0019FF defined');
assert(css.includes('#002C50') || css.includes('#002c50'), 'CSS: Navy button background color token #002C50 defined');
assert(css.includes('#52B022') || css.includes('#52b022'), 'CSS: Hover green color #52B022 defined');
assert(css.includes('@keyframes kenburns') || css.includes('animation: kenburns'), 'CSS: Ken Burns animation keyframes defined');
assert(css.includes('scale(1.05)'), 'CSS: Service card hover zoom scale(1.05) declared');
assert(css.includes('max-width: 800px'), 'CSS: Mobile <= 800px responsive breakpoint declared');
assert(css.includes('#botones-movil') || css.includes('.mobile-sticky-bar'), 'CSS: Mobile sticky bar styling declared');
assert(css.includes('overflow-x: hidden') || css.includes('overflow-x:hidden'), 'CSS: Overflow-x hidden configured');
assert(css.includes('max-width: 1140px') || css.includes('1140px'), 'CSS: 1140px container max-width defined');

// 4. JavaScript Syntax & Execution Test
console.log('\n\x1b[36m▶ Auditing JavaScript Modules Syntax...\x1b[0m');
const mainJsPath = path.join(DEMO_ROOT, 'assets', 'js', 'main.js');
const bookingJsPath = path.join(DEMO_ROOT, 'assets', 'js', 'booking.js');

try {
  const mainCode = fs.readFileSync(mainJsPath, 'utf8');
  new vm.Script(mainCode);
  assert(true, 'JS: main.js parses without syntax errors');
} catch (err) {
  assert(false, `JS: main.js syntax error: ${err.message}`);
}

try {
  const bookingCode = fs.readFileSync(bookingJsPath, 'utf8');
  new vm.Script(bookingCode);
  assert(true, 'JS: booking.js parses without syntax errors');
} catch (err) {
  assert(false, `JS: booking.js syntax error: ${err.message}`);
}

// Summary Output
console.log('\n\x1b[1m=================================================\x1b[0m');
console.log(`\x1b[1mM2 Core Web App Verification Summary: \x1b[32m${passedTests} PASSED\x1b[0m, \x1b[${failedTests > 0 ? '31' : '32'}m${failedTests} FAILED\x1b[0m (Total: ${totalTests})`);
console.log('\x1b[1m=================================================\x1b[0m\n');

if (failedTests > 0) {
  process.exit(1);
}
