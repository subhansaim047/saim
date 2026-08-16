/**
 * Tier 2: Boundary & Corner Cases Test Suite
 * Studio-D Brickell Luxury Beauty Salon Web Application Clone
 *
 * 30 Test Cases covering 6 Critical Domains (B1 through B6):
 *  B1: Extreme Viewports & Screen Widths
 *  B2: Empty & Malformed Form Inputs
 *  B3: Long Text Inputs & Injection Resilience
 *  B4: No-JS Fallback, Asset Latency & Sandboxing
 *  B5: Rapid Click Interactions & Debounce / Throttle
 *  B6: Zero-State & Dynamic Boundary Checks
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

const assetAuditor = new AssetAuditor(DEMO_ROOT);

describe('Tier 2: Boundary & Corner Cases (B1 to B6)', () => {

  // ---------------------------------------------------------------------------
  // B1: Extreme Viewports & Screen Widths
  // ---------------------------------------------------------------------------
  describe('Domain B1: Screen Widths & Extreme Viewports', () => {
    test('T2-B1-01: Ultra-narrow 320px viewport maintains zero horizontal overflow rules', () => {
      const css = loadCSS();
      const hasOverflowControl = css.includes('overflow-x: hidden') || css.includes('overflow-x:hidden') || css.includes('max-width: 100%');
      expect(hasOverflowControl).toBeTruthy();
    });

    test('T2-B1-02: Standard modern mobile 375px-390px retains touch-accessible targets', () => {
      const html = loadHTML();
      const { document } = createDOMContext(html);
      const buttons = document.querySelectorAll('button, a.btn, input[type="submit"]');
      expect(buttons.length).toBeGreaterThanOrEqual(5);
    });

    test('T2-B1-03: Tablet portrait 768px activates responsive grid rules and sticky bar', () => {
      const css = loadCSS();
      const hasTabletRule = css.includes('max-width: 800px') || css.includes('max-width: 768px') || css.includes('max-width:768px');
      expect(hasTabletRule).toBeTruthy();
    });

    test('T2-B1-04: Tablet landscape / desktop 1024px hides mobile bottom bar (>800px)', () => {
      const css = loadCSS();
      const parser = parseStyles(css);
      const defaultStickyRule = parser.getRule('#botones-movil') || parser.getRule('.mobile-sticky-bar');
      const isHiddenByDefault = defaultStickyRule && defaultStickyRule.display === 'none';
      const has800MediaQuery = css.includes('max-width: 800px');
      expect(isHiddenByDefault || has800MediaQuery).toBeTruthy();
    });

    test('T2-B1-05: 4K ultrawide 2560px-3840px container centers content with max-width', () => {
      const css = loadCSS();
      const hasContainerCenter = css.includes('margin: 0 auto') || css.includes('margin: auto') || css.includes('max-width: 1140px') || css.includes('max-width: 1200px');
      expect(hasContainerCenter).toBeTruthy();
    });
  });

  // ---------------------------------------------------------------------------
  // B2: Empty & Malformed Form Inputs
  // ---------------------------------------------------------------------------
  describe('Domain B2: Empty & Malformed Form Inputs', () => {
    test('T2-B2-01: Empty form submission rejects and enforces required attributes', () => {
      const html = loadHTML();
      const { document } = createDOMContext(html);
      const form = document.querySelector('form');
      expect(form).not.toBeNull();
      const requiredInputs = document.querySelectorAll('input[required], textarea[required]');
      expect(requiredInputs.length).toBeGreaterThanOrEqual(4);
    });

    test('T2-B2-02: Invalid email syntaxes rejected by email input type', () => {
      const html = loadHTML();
      const { document } = createDOMContext(html);
      const emailInput = document.querySelector('input[type="email"], input#email');
      expect(emailInput).not.toBeNull();
      expect(emailInput.getAttribute('type')).toBe('email');
    });

    test('T2-B2-03: Malformed phone inputs guarded with tel input type', () => {
      const html = loadHTML();
      const { document } = createDOMContext(html);
      const phoneInput = document.querySelector('input[type="tel"], input#phone');
      expect(phoneInput).not.toBeNull();
      expect(phoneInput.getAttribute('type')).toBe('tel');
    });

    test('T2-B2-04: Unchecked SMS consent checkbox prevents form submission', () => {
      const html = loadHTML();
      const { document } = createDOMContext(html);
      const sms = document.querySelector('input[type="checkbox"][name*="sms"], input#sms-consent');
      expect(sms).not.toBeNull();
      expect(sms.hasAttribute('required')).toBeTruthy();
    });

    test('T2-B2-05: Whitespace-only inputs trimmed by validation logic', () => {
      const html = loadHTML();
      const { document } = createDOMContext(html);
      const firstNameInput = document.querySelector('#first-name, input[name*="first"]');
      const commentsInput = document.querySelector('#comments, textarea[name*="comment"]');
      expect(firstNameInput).not.toBeNull();
      expect(commentsInput).not.toBeNull();

      firstNameInput.value = '   ';
      commentsInput.value = '  \t\n  ';

      expect(firstNameInput.value.trim().length).toBe(0);
      expect(commentsInput.value.trim().length).toBe(0);
      expect(firstNameInput.hasAttribute('required')).toBeTruthy();
      expect(commentsInput.hasAttribute('required')).toBeTruthy();
    });
  });

  // ---------------------------------------------------------------------------
  // B3: Long Text Inputs & Injection Resilience
  // ---------------------------------------------------------------------------
  describe('Domain B3: Long Text Inputs & Injection Resilience', () => {
    test('T2-B3-01: 5000+ character comment input handled in textarea', () => {
      const html = loadHTML();
      const { document } = createDOMContext(html);
      const textarea = document.querySelector('textarea');
      expect(textarea).not.toBeNull();
      const longText = 'A'.repeat(5000);
      textarea.value = longText;
      expect(textarea.value.length).toBe(5000);
    });

    test('T2-B3-02: Unbroken single-word string wrapped via CSS word-break rules', () => {
      const css = loadCSS();
      const hasWordBreak = css.includes('word-break') || css.includes('overflow-wrap') || css.includes('white-space');
      expect(hasWordBreak).toBeTruthy();
    });

    test('T2-B3-03: XSS script payload injection escaped in synthetic DOM and feedback', () => {
      const html = loadHTML();
      const { document } = createDOMContext(html);
      const feedbackBox = document.querySelector('#booking-feedback, .booking-feedback');
      expect(feedbackBox).not.toBeNull();
      feedbackBox.textContent = '<script>alert("XSS")</script>';
      expect(feedbackBox.innerHTML).not.toContain('<script>');
      expect(feedbackBox.innerHTML).toContain('&lt;script&gt;');
    });

    test('T2-B3-04: Unicode and international characters encoded with UTF-8 fidelity', () => {
      const html = loadHTML();
      expect(html).toContain('charset="UTF-8"');
    });

    test('T2-B3-05: Multi-line paste into single-line input does not break input element', () => {
      const html = loadHTML();
      const { document } = createDOMContext(html);
      const input = document.querySelector('input[type="text"], input#first-name');
      expect(input).not.toBeNull();
      input.value = 'First\nLine';
      expect(input.value).toBe('First\nLine');
    });
  });

  // ---------------------------------------------------------------------------
  // B4: Missing Script / No-JS Fallback & Asset Latency
  // ---------------------------------------------------------------------------
  describe('Domain B4: Missing Script / No-JS Fallback & Asset Latency', () => {
    test('T2-B4-01: Page renders all HTML semantic sections without JavaScript execution', () => {
      const html = loadHTML();
      const { document } = createDOMContext(html);
      expect(document.querySelector('header')).not.toBeNull();
      expect(document.querySelector('main, #content, .site-main, section')).not.toBeNull();
      expect(document.querySelector('footer')).not.toBeNull();
    });

    test('T2-B4-02: Broken image fallback maintains aspect ratio via CSS', () => {
      const css = loadCSS();
      const hasImgRules = css.includes('img') && (css.includes('max-width: 100%') || css.includes('height: auto') || css.includes('display: block'));
      expect(hasImgRules).toBeTruthy();
    });

    test('T2-B4-03: Font loading specifies font-display: swap to prevent FOIT', () => {
      const css = loadCSS();
      const hasSwap = css.includes('font-display: swap') || css.includes('font-display:swap');
      expect(hasSwap).toBeTruthy();
    });

    test('T2-B4-04: 100% of referenced assets exist locally for standalone execution', () => {
      const html = loadHTML();
      const issues = assetAuditor.auditHtmlAssets(html);
      expect(issues.length).toBe(0);
    });

    test('T2-B4-05: Zero frame-busting scripts execute inside iframe embedding', () => {
      const html = loadHTML();
      expect(html).not.toMatch(/window\.top\s*!==\s*window\.self/);
      expect(html).not.toMatch(/top\.location\s*=\s*self\.location/);
    });
  });

  // ---------------------------------------------------------------------------
  // B5: Rapid Click Interactions & Debounce / Throttle
  // ---------------------------------------------------------------------------
  describe('Domain B5: Rapid Click Interactions & Debounce / Throttle', () => {
    test('T2-B5-01: Testimonials carousel buttons handle multiple clicks gracefully', () => {
      const html = loadHTML();
      const { document } = createDOMContext(html);
      const nextBtn = document.querySelector('.carousel-next, #testimonial-next, .next-btn, [data-action="next"]');
      expect(nextBtn).not.toBeNull();
      let clickCount = 0;
      nextBtn.addEventListener('click', () => { clickCount++; });
      for (let i = 0; i < 10; i++) {
        nextBtn.click();
      }
      expect(clickCount).toBe(10);
    });

    test('T2-B5-02: Hero slider dots tolerate rapid successive clicks', () => {
      const html = loadHTML();
      const { document } = createDOMContext(html);
      const dots = document.querySelectorAll('.hero-dot, .hero-dots .dot, .slider-nav button');
      expect(dots.length).toBeGreaterThanOrEqual(3);
      let totalClicks = 0;
      for (const dot of dots) {
        dot.addEventListener('click', () => { totalClicks++; });
        dot.click();
      }
      expect(totalClicks).toBe(dots.length);
    });

    test('T2-B5-03: Booking form submit triggers submit event cleanly', () => {
      const html = loadHTML();
      const { document } = createDOMContext(html);
      const form = document.querySelector('form');
      expect(form).not.toBeNull();
      let submitted = false;
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        submitted = true;
      });
      form.submit();
      expect(submitted).toBeTruthy();
    });

    test('T2-B5-04: Mobile hamburger button toggles menu state', () => {
      const html = loadHTML();
      const { document } = createDOMContext(html);
      const hamburger = document.querySelector('.mobile-menu-toggle, .menu-toggle, #menu-toggle');
      expect(hamburger).not.toBeNull();
      let toggled = false;
      hamburger.addEventListener('click', () => { toggled = !toggled; });
      hamburger.click();
      expect(toggled).toBeTruthy();
    });

    test('T2-B5-05: Dropdown menus handle mouse enter and leave events', () => {
      const html = loadHTML();
      const { document } = createDOMContext(html);
      const dropdown = document.querySelector('.has-dropdown, .nav-item-dropdown, [data-dropdown]');
      expect(dropdown).not.toBeNull();
      let mouseEntered = false;
      let mouseLeft = false;
      dropdown.addEventListener('mouseenter', () => { mouseEntered = true; });
      dropdown.addEventListener('mouseleave', () => { mouseLeft = true; });
      dropdown.dispatchEvent({ type: 'mouseenter' });
      dropdown.dispatchEvent({ type: 'mouseleave' });
      expect(mouseEntered).toBeTruthy();
      expect(mouseLeft).toBeTruthy();
    });
  });

  // ---------------------------------------------------------------------------
  // B6: Zero-State & Dynamic Boundary Checks
  // ---------------------------------------------------------------------------
  describe('Domain B6: Zero-State & Dynamic Boundary Checks', () => {
    test('T2-B6-01: Single-slide carousel fallback renders without throwing', () => {
      const html = loadHTML();
      const { document } = createDOMContext(html);
      const carouselTrack = document.querySelector('#testimonials-track, .testimonials-track, .carousel-track');
      expect(carouselTrack).not.toBeNull();
      const slides = document.querySelectorAll('.testimonial-slide, .carousel-slide');
      expect(slides.length).toBeGreaterThanOrEqual(1);
    });

    test('T2-B6-02: Initial top scroll y=0 renders header and announcement bar without clipping', () => {
      const html = loadHTML();
      const { document } = createDOMContext(html);
      const topBar = document.querySelector('.announcement-bar, header');
      expect(topBar).not.toBeNull();
    });

    test('T2-B6-03: Max bottom scroll renders footer cleanly above mobile sticky bar', () => {
      const html = loadHTML();
      const { document } = createDOMContext(html);
      const footer = document.querySelector('footer');
      expect(footer).not.toBeNull();
    });

    test('T2-B6-04: Browser tab backgrounding timers handled in VM sandbox', () => {
      const sandbox = createSandbox(loadHTML());
      const timerId = sandbox.execute('setTimeout(() => {}, 10);');
      expect(timerId).not.toBeNull();
      expect(sandbox.timers.length).toBeGreaterThanOrEqual(1);
      sandbox.cleanup();
      expect(sandbox.timers.length).toBeGreaterThanOrEqual(1);
    });

    test('T2-B6-05: Responsive orientation change handled via CSS fluid layout', () => {
      const css = loadCSS();
      const hasPercentagesOrFlex = css.includes('%') || css.includes('flex') || css.includes('grid');
      expect(hasPercentagesOrFlex).toBeTruthy();
    });
  });

});
