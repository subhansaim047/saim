/**
 * Tier 4: Real-World Customer Journey Workload Scenarios
 * Studio-D Brickell Luxury Beauty Salon Web Application Clone
 *
 * 5 Comprehensive Real-World Customer Workload Scenarios (T4-01 to T4-05)
 */

import fs from 'node:fs';
import path from 'node:path';
import {
  describe, test, it, expect,
  createDOMContext, parseStyles, createSandbox,
  AssetAuditor, PortfolioAuditor,
  DEMO_ROOT, WEBSITE_ROOT
} from './harness.js';

function loadHTML() {
  const indexPath = path.join(DEMO_ROOT, 'index.html');
  if (!fs.existsSync(indexPath)) {
    throw new Error(`index.html not found at: ${indexPath}`);
  }
  return fs.readFileSync(indexPath, 'utf8');
}

function loadCSS() {
  const stylesPath = path.join(DEMO_ROOT, 'assets', 'css', 'styles.css');
  const fontsPath = path.join(DEMO_ROOT, 'assets', 'css', 'fonts.css');
  let css = '';
  if (fs.existsSync(stylesPath)) css += fs.readFileSync(stylesPath, 'utf8') + '\n';
  if (fs.existsSync(fontsPath)) css += fs.readFileSync(fontsPath, 'utf8') + '\n';
  return css;
}

const portfolioAuditor = new PortfolioAuditor();
const assetAuditor = new AssetAuditor(DEMO_ROOT);

describe('Tier 4: Real-World Workload Scenarios', () => {

  test('T4-01: Scenario 1 — First-Time Visitor Salon Discovery & Service Exploration (Desktop)', () => {
    const html = loadHTML();
    const { document } = createDOMContext(html);

    // 1. Top Announcement Bar
    const promo = document.querySelector('.announcement-bar, .top-announcement');
    expect(promo).not.toBeNull();
    expect(promo.textContent).toContain('20% Off');

    // 2. Hero Section
    const heroH1 = document.querySelector('.hero-section h1, #hero h1, h1');
    expect(heroH1).not.toBeNull();
    expect(heroH1.textContent.toUpperCase()).toContain('BEAUTY SALON');

    // 3. Welcome Story
    expect(html).toMatch(/Welcome To STUDIO-?D BRICKELL/i);
    expect(html).toMatch(/Come As You Are, Leave At Your Best/i);

    // 4. Services Grid (6 Cards)
    const serviceCards = document.querySelectorAll('.service-card, .services-grid .card, [data-service]');
    expect(serviceCards.length).toBeGreaterThanOrEqual(6);

    // 5. Why Us Metrics
    expect(html).toMatch(/20/);
    expect(html).toMatch(/45/);
    expect(html).toMatch(/25/);

    // 6. Footer Hours & Payment Methods
    expect(html).toMatch(/Tuesday/i);
    expect(html).toMatch(/VISA/i);
    expect(html).toMatch(/Master\s?Card/i);
  });

  test('T4-02: Scenario 2 — Client Books Luxury Kérastase Treatment & Submits Inquiry', () => {
    const html = loadHTML();
    const { document } = createDOMContext(html);

    // 1. Kérastase Première Spotlight
    expect(html).toMatch(/Première/i);
    expect(html).toMatch(/\$148\.00/);

    // 2. Specials Promo Banner
    expect(html).toMatch(/Free Kerastase Hydration Treatment/i);

    // 3. Specials CTA triggers booking
    const specialsCTA = document.querySelector('.specials-banner a, .specials-section a');
    expect(specialsCTA).not.toBeNull();

    // 4. Form inputs fill-in simulation
    const form = document.querySelector('form');
    expect(form).not.toBeNull();

    const firstNameInput = document.querySelector('input[name*="first"], input#first-name');
    const lastNameInput = document.querySelector('input[name*="last"], input#last-name');
    const emailInput = document.querySelector('input[type="email"], input#email');
    const phoneInput = document.querySelector('input[type="tel"], input#phone');
    const smsInput = document.querySelector('input[type="checkbox"][name*="sms"], input#sms-consent');

    expect(firstNameInput).not.toBeNull();
    expect(lastNameInput).not.toBeNull();
    expect(emailInput).not.toBeNull();
    expect(phoneInput).not.toBeNull();
    expect(smsInput).not.toBeNull();

    firstNameInput.value = 'Elena';
    lastNameInput.value = 'Rodriguez';
    emailInput.value = 'elena.rodriguez@example.com';
    phoneInput.value = '(305) 555-0199';
    smsInput.checked = true;

    expect(firstNameInput.value).toBe('Elena');
    expect(lastNameInput.value).toBe('Rodriguez');
    expect(emailInput.value).toBe('elena.rodriguez@example.com');
    expect(phoneInput.value).toBe('(305) 555-0199');
    expect(smsInput.checked).toBe(true);
  });

  test('T4-03: Scenario 3 — Mobile User Quick Action Call & Mary Brickell Directions', () => {
    const html = loadHTML();
    const { document } = createDOMContext(html);

    // 1. Mobile Quick Bar exists
    const mobileBar = document.querySelector('#botones-movil, .mobile-sticky-bar');
    expect(mobileBar).not.toBeNull();

    // 2. Left 50% Phone Action
    const callBtn = document.querySelector('#botones-movil a[href^="tel:"], .mobile-sticky-bar a[href^="tel:"]');
    expect(callBtn).not.toBeNull();
    expect(callBtn.getAttribute('href')).toMatch(/tel:305/);

    // 3. Right 50% Book Action
    const bookBtn = document.querySelector('#botones-movil a[href*="mangomint"], #botones-movil a[href*="booking"], .mobile-sticky-bar a.btn-mobile-book');
    expect(bookBtn).not.toBeNull();

    // 4. Location Address & Map
    expect(html).toMatch(/900 S Miami Ave/i);
    expect(html).toMatch(/Mary Brickell Village/i);

    // 5. Google Maps Link
    const mapLink = document.querySelector('a[href*="maps.google.com"], a[href*="goo.gl/maps"], .btn-directions');
    expect(mapLink).not.toBeNull();
  });

  test('T4-04: Scenario 4 — Client Reviews Stylist Reputations & Navigates Promotions', () => {
    const html = loadHTML();
    const { document } = createDOMContext(html);

    // 1. Testimonials Section
    expect(html).toMatch(/TESTIMONIALS/i);

    // 2. Reviews for master stylists
    expect(html).toMatch(/Dinho/i);
    expect(html).toMatch(/Rafael/i);
    expect(html).toMatch(/Cristiane/i);

    // 3. Ratings
    const hasStars = html.includes('★') || html.includes('star.svg') || document.querySelectorAll('.star-icon, .stars, img[src*="star"]').length > 0;
    expect(hasStars).toBeTruthy();

    // 4. Specials Navigation
    expect(html).toMatch(/SPECIALS|Free Kerastase/i);
  });

  test('T4-05: Scenario 5 — Developer / Recruiter Launches Demo in Portfolio Modal', () => {
    // 1. DemosPage registration
    const demo = portfolioAuditor.findDemoItem('studio-dbrickell');
    expect(demo).not.toBeNull();
    expect(demo.id).toBe('studio-dbrickell');
    expect(demo.category).toMatch(/Beauty Salon|Luxury Spa/i);

    // 2. Assets & Preview
    expect(demo.demoUrl).toBe('/demos/studio-dbrickell/index.html');
    expect(demo.previewImage).toBe('/demos/studio-dbrickell/preview.png');
    expect(assetAuditor.verifyAssetExists('preview.png')).toBeTruthy();

    // 3. Modal Iframe Integration in DemosPage.tsx
    const content = portfolioAuditor.readContent();
    expect(content).toContain('selectedDemo');
    expect(content).toContain('viewportMode');
    expect(content).toContain('<iframe');
  });

});
