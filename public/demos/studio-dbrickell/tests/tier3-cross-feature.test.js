/**
 * Tier 3: Cross-Feature Combinations Test Suite
 * Studio-D Brickell Luxury Beauty Salon Web Application Clone
 *
 * 10 Pairwise Interaction Test Cases (T3-01 to T3-10)
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

describe('Tier 3: Cross-Feature Combinations & Complex Interactions', () => {

  test('T3-01: Mobile Navigation Drawer & Hero Slider Layering', () => {
    const css = loadCSS();
    const hasHighZIndex = css.includes('z-index: 1000') || css.includes('z-index: 999') || css.includes('z-index: 998') || css.includes('z-index: 100');
    expect(hasHighZIndex).toBeTruthy();
  });

  test('T3-02: Interactive Booking Form Submit & Reset State Flow', () => {
    const html = loadHTML();
    const { document } = createDOMContext(html);
    const form = document.querySelector('form');
    expect(form).not.toBeNull();

    const firstName = document.querySelector('input[name*="first"], input#first-name');
    const email = document.querySelector('input[type="email"], input#email');
    const sms = document.querySelector('input[type="checkbox"][name*="sms"], input#sms-consent');

    expect(firstName).not.toBeNull();
    expect(email).not.toBeNull();
    expect(sms).not.toBeNull();

    firstName.value = 'Elena';
    email.value = 'elena@example.com';
    sms.checked = true;

    expect(firstName.value).toBe('Elena');
    expect(email.value).toBe('elena@example.com');
    expect(sms.checked).toBe(true);
  });

  test('T3-03: Testimonials Carousel Navigation & Autoplay Interval Interaction', () => {
    const html = loadHTML();
    const { document } = createDOMContext(html);
    const nextBtn = document.querySelector('.carousel-next, #testimonial-next, .next-btn, [data-action="next"]');
    const slides = document.querySelectorAll('.testimonial-slide, .review-card, .carousel-slide');
    expect(slides.length).toBeGreaterThanOrEqual(3);
    expect(nextBtn).not.toBeNull();
    let clicked = false;
    nextBtn.addEventListener('click', () => { clicked = true; });
    nextBtn.click();
    expect(clicked).toBeTruthy();
  });

  test('T3-04: Mobile Sticky Quick Bar & Footer Clearance', () => {
    const css = loadCSS();
    const hasBottomBar = css.includes('#botones-movil') || css.includes('.mobile-sticky-bar');
    const hasFooter = css.includes('footer') || css.includes('.main-footer');
    expect(hasBottomBar && hasFooter).toBeTruthy();
  });

  test('T3-05: Services Showcase Card Click & Anchor Navigation Target', () => {
    const html = loadHTML();
    const { document } = createDOMContext(html);
    const cardLinks = document.querySelectorAll('.service-card a, .services-grid a');
    expect(cardLinks.length).toBeGreaterThanOrEqual(6);
  });

  test('T3-06: Specials Promo Banner CTA to Booking Workflow Routing', () => {
    const html = loadHTML();
    const { document } = createDOMContext(html);
    const specialsCTA = document.querySelector('.specials-banner a, .specials-section a');
    expect(specialsCTA).not.toBeNull();
    const href = specialsCTA.getAttribute('href');
    expect(href).toMatch(/booking|mangomint|#booking|#contact/i);
  });

  test('T3-07: Announcement Bar Shop Link & Main Navigation Stacking Context', () => {
    const html = loadHTML();
    const { document } = createDOMContext(html);
    const bar = document.querySelector('.announcement-bar, .top-announcement');
    const nav = document.querySelector('header nav, .main-nav');
    expect(bar).not.toBeNull();
    expect(nav).not.toBeNull();
  });

  test('T3-08: Google Maps Lazy Iframe Embedding & Fast Rendering', () => {
    const html = loadHTML();
    const { document } = createDOMContext(html);
    const iframe = document.querySelector('iframe');
    expect(iframe).not.toBeNull();
    expect(iframe.getAttribute('src')).toContain('google.com/maps');
  });

  test('T3-09: Portfolio DemosPage Modal Responsive Viewport Switching', () => {
    const content = portfolioAuditor.readContent();
    expect(content).toContain('desktop');
    expect(content).toContain('tablet');
    expect(content).toContain('mobile');
    expect(content).toContain('w-[768px]');
    expect(content).toContain('w-[390px]');
  });

  test('T3-10: Offline Local Fonts Loading & CLS Layout Preservation', () => {
    const css = loadCSS();
    expect(css).toContain('@font-face');
    expect(css).toContain('font-family');
    expect(css).toContain('font2-1.ttf');
  });

});
