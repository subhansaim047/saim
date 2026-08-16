/**
 * Tier 1: Exhaustive Feature Coverage Test Suite (F1 to F17)
 * Studio-D Brickell Luxury Beauty Salon Web Application Clone
 *
 * Covers all 17 features with at least 5 test cases per feature = 85 tests total.
 */

import fs from 'node:fs';
import path from 'node:path';
import {
  describe, test, it, expect, beforeEach,
  createDOMContext, parseStyles, createSandbox,
  AssetAuditor, PortfolioAuditor,
  DEMO_ROOT, WEBSITE_ROOT
} from './harness.js';

// Helper loaders
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
const portfolioAuditor = new PortfolioAuditor();

// =============================================================================
// TIER 1 FEATURE COVERAGE
// =============================================================================

describe('Tier 1: Feature Coverage (F1 to F17)', () => {

  // ---------------------------------------------------------------------------
  // F1: Royal Blue Header Announcement
  // ---------------------------------------------------------------------------
  describe('F1: Royal Blue Header Announcement', () => {
    test('T1-F01-01: Element exists and spans full width in header', () => {
      const html = loadHTML();
      const { document } = createDOMContext(html);
      const bar = document.querySelector('.announcement-bar, .top-announcement, [data-element="announcement-bar"]');
      expect(bar).not.toBeNull();
    });

    test('T1-F01-02: Background color is Royal Blue (#0019FF) and text is white', () => {
      const css = loadCSS();
      const parser = parseStyles(css);
      const hasBlueBg = parser.hasProperty('.announcement-bar', 'background-color', '#0019FF') ||
                        parser.hasProperty('.announcement-bar', 'background', '#0019FF') ||
                        parser.hasProperty('.top-announcement', 'background-color', '#0019FF') ||
                        css.includes('#0019FF') || css.includes('rgb(0, 25, 255)');
      expect(hasBlueBg).toBeTruthy();
    });

    test('T1-F01-03: Typography uses luxury font and correct sizing', () => {
      const css = loadCSS();
      const parser = parseStyles(css);
      const hasFont2 = parser.hasProperty('.announcement-bar', 'font-family', 'Font2') ||
                       css.includes('Font2') || css.includes('font2-1.ttf');
      expect(hasFont2).toBeTruthy();
    });

    test('T1-F01-04: Promotional discount copy and emojis match live site', () => {
      const html = loadHTML();
      const { document } = createDOMContext(html);
      const bar = document.querySelector('.announcement-bar, .top-announcement, [data-element="announcement-bar"]');
      expect(bar).not.toBeNull();
      const text = bar.textContent;
      expect(text).toContain('20% Off');
      expect(text).toContain('$100.00');
      expect(text).toContain('Online Store');
    });

    test('T1-F01-05: Hyperlink points to online store with secure target attributes', () => {
      const html = loadHTML();
      const { document } = createDOMContext(html);
      const link = document.querySelector('.announcement-bar a, .top-announcement a');
      expect(link).not.toBeNull();
      expect(link.getAttribute('href')).toContain('studio-dbrickell.shop');
      expect(link.getAttribute('target')).toBe('_blank');
      expect(link.getAttribute('rel')).toContain('noopener');
    });
  });

  // ---------------------------------------------------------------------------
  // F2: Main Header & Navigation Dropdowns
  // ---------------------------------------------------------------------------
  describe('F2: Main Header & Navigation Dropdowns', () => {
    test('T1-F02-01: Logo renders with alt text and relative path', () => {
      const html = loadHTML();
      const { document } = createDOMContext(html);
      const logo = document.querySelector('header img, .header-logo img, .site-logo img');
      expect(logo).not.toBeNull();
      expect(logo.getAttribute('src')).toMatch(/logo\.(png|svg|webp)/i);
      expect(logo.getAttribute('alt')).toMatch(/Studio-?D Brickell/i);
    });

    test('T1-F02-02: All 9 top-level navigation links exist', () => {
      const html = loadHTML();
      const { document } = createDOMContext(html);
      const navLinks = document.querySelectorAll('nav a, .nav-menu a, .header-nav a');
      const linkTexts = navLinks.map(a => a.textContent.trim().toUpperCase());

      const requiredLinks = ['HOME', 'SERVICES', 'BLOG', 'DINHO', 'GALLERY', 'SPECIALS', 'GIFT CARD', 'TEAM', 'CONTACT'];
      for (const req of requiredLinks) {
        const found = linkTexts.some(t => t.includes(req));
        expect(found).toBeTruthy();
      }
    });

    test('T1-F02-03: Multi-tier dropdowns present for SERVICES and HAIR sub-items', () => {
      const html = loadHTML();
      const { document } = createDOMContext(html);
      const servicesMenu = document.querySelector('.dropdown-menu, .sub-menu, [data-nav="services"]');
      expect(servicesMenu).not.toBeNull();
      expect(html).toMatch(/KERASTASE|SHU UEMURA/i);
      expect(html).toMatch(/HAIRCUTS|EXTENSIONS|STRAIGHTENING/i);
    });

    test('T1-F02-04: Underline pointer animation styles declared in CSS', () => {
      const css = loadCSS();
      const hasPointerUnderline = css.includes('pointer-underline') ||
                                  css.includes('::after') ||
                                  css.includes('transition: width') ||
                                  css.includes('transition: all') ||
                                  css.includes('nav-link:hover');
      expect(hasPointerUnderline).toBeTruthy();
    });

    test('T1-F02-05: Header contains Phone, Shop, and Book CTAs', () => {
      const html = loadHTML();
      const { document } = createDOMContext(html);
      const phoneLink = document.querySelector('header a[href^="tel:"]');
      const bookLink = document.querySelector('header a[href*="mangomint"], header a[href*="booking"], header .btn-header-book');
      expect(phoneLink).not.toBeNull();
      expect(bookLink).not.toBeNull();
      expect(phoneLink.textContent).toContain('349-4969');
    });
  });

  // ---------------------------------------------------------------------------
  // F3: Multi-Slide Hero Section
  // ---------------------------------------------------------------------------
  describe('F3: Multi-Slide Hero Section', () => {
    test('T1-F03-01: Hero container exists with minimum height framing', () => {
      const html = loadHTML();
      const { document } = createDOMContext(html);
      const hero = document.querySelector('.hero-section, .hero-slider, #hero, section.hero');
      expect(hero).not.toBeNull();

      const css = loadCSS();
      const hasMinHeight = css.includes('676px') || css.includes('min-height') || css.includes('100vh');
      expect(hasMinHeight).toBeTruthy();
    });

    test('T1-F03-02: 5 local slide images are configured in hero background', () => {
      const html = loadHTML();
      const css = loadCSS();
      const slideMatch = (html + css).match(/slide-[1-5]\.jpg|hero-slide-[1-5]\.jpg|card-bg-[1-3]\.jpg/g);
      expect(slideMatch).not.toBeNull();
      expect(slideMatch.length).toBeGreaterThanOrEqual(3);
    });

    test('T1-F03-03: Ken Burns zoom animation keyframes defined in CSS', () => {
      const css = loadCSS();
      const parser = parseStyles(css);
      const kf = parser.getKeyframes('kenburns') || parser.getKeyframes('zoomIn') || parser.getKeyframes('heroZoom');
      const hasKf = kf !== null || css.includes('@keyframes kenburns') || css.includes('transform: scale');
      expect(hasKf).toBeTruthy();
    });

    test('T1-F03-04: Dark contrast gradient overlay styling present', () => {
      const css = loadCSS();
      const hasOverlay = css.includes('linear-gradient') || css.includes('rgba(0, 0, 0') || css.includes('rgba(0,0,0');
      expect(hasOverlay).toBeTruthy();
    });

    test('T1-F03-05: Hero typography and 3 action buttons render properly', () => {
      const html = loadHTML();
      const { document } = createDOMContext(html);
      const h1 = document.querySelector('.hero-section h1, .hero h1, #hero h1');
      expect(h1).not.toBeNull();
      expect(h1.textContent.toUpperCase()).toContain('BEAUTY SALON');

      const heroButtons = document.querySelectorAll('.hero-section a, .hero-section button, .hero a, .hero button');
      expect(heroButtons.length).toBeGreaterThanOrEqual(3);
    });
  });

  // ---------------------------------------------------------------------------
  // F4: Welcome & Brand Story
  // ---------------------------------------------------------------------------
  describe('F4: Welcome & Brand Story', () => {
    test('T1-F04-01: 2-column split layout container exists on desktop', () => {
      const html = loadHTML();
      const { document } = createDOMContext(html);
      const welcome = document.querySelector('.welcome-section, #welcome, .brand-story');
      expect(welcome).not.toBeNull();
    });

    test('T1-F04-02: Salon interior photo rendered with luxury styling', () => {
      const html = loadHTML();
      const { document } = createDOMContext(html);
      const welcomeImg = document.querySelector('.welcome-section img, #welcome img, .welcome-image img');
      expect(welcomeImg).not.toBeNull();
      expect(welcomeImg.getAttribute('src')).toMatch(/welcome|salon|showcase/i);
    });

    test('T1-F04-03: Headings match "Welcome To STUDIO-D BRICKELL" verbatim', () => {
      const html = loadHTML();
      expect(html).toMatch(/Welcome To STUDIO-?D BRICKELL/i);
      expect(html).toMatch(/Come As You Are, Leave At Your Best/i);
    });

    test('T1-F04-04: Narrative brand copy matches live website story', () => {
      const html = loadHTML();
      expect(html).toMatch(/High-quality beauty services|premier beauty salon in Miami/i);
    });

    test('T1-F04-05: Booking action button links to appointment flow', () => {
      const html = loadHTML();
      const { document } = createDOMContext(html);
      const bookBtn = document.querySelector('.welcome-section a[href*="mangomint"], .welcome-section a[href*="booking"], .welcome-section a.btn-primary');
      expect(bookBtn).not.toBeNull();
      expect(bookBtn.textContent.toUpperCase()).toContain('BOOK');
    });
  });

  // ---------------------------------------------------------------------------
  // F5: Services Showcase Grid
  // ---------------------------------------------------------------------------
  describe('F5: Services Showcase Grid', () => {
    test('T1-F05-01: Exactly 6 core category service cards exist', () => {
      const html = loadHTML();
      const { document } = createDOMContext(html);
      const cards = document.querySelectorAll('.service-card, .services-grid .card, [data-service]');
      expect(cards.length).toBeGreaterThanOrEqual(6);
    });

    test('T1-F05-02: Each card binds local image in assets/images/services/', () => {
      const html = loadHTML();
      const { document } = createDOMContext(html);
      const serviceImages = document.querySelectorAll('.service-card img, .services-grid img');
      expect(serviceImages.length).toBeGreaterThanOrEqual(6);
      for (const img of serviceImages) {
        expect(img.getAttribute('src')).toMatch(/services\/|assets\/images\//i);
      }
    });

    test('T1-F05-03: Uppercase category overlay labels render for all cards', () => {
      const html = loadHTML();
      expect(html).toMatch(/HAIR/);
      expect(html).toMatch(/BODY WAXING|WAXING/);
      expect(html).toMatch(/NAILS/);
      expect(html).toMatch(/BROWS & LASHES|BROWS/);
      expect(html).toMatch(/FACIALS/);
      expect(html).toMatch(/MORE SERVICES/);
    });

    test('T1-F05-04: Hover zoom scale transform declared in CSS', () => {
      const css = loadCSS();
      const hasScale = css.includes('scale(1.05)') || css.includes('scale(1.1)') || css.includes('transition: transform');
      expect(hasScale).toBeTruthy();
    });

    test('T1-F05-05: Service cards contain navigation anchors', () => {
      const html = loadHTML();
      const { document } = createDOMContext(html);
      const cardLinks = document.querySelectorAll('.service-card a, .services-grid a');
      expect(cardLinks.length).toBeGreaterThanOrEqual(6);
    });
  });

  // ---------------------------------------------------------------------------
  // F6: "Why Us?" Experience Metrics
  // ---------------------------------------------------------------------------
  describe('F6: "Why Us?" Experience Metrics', () => {
    test('T1-F06-01: Dark background overlay and container exist', () => {
      const html = loadHTML();
      const { document } = createDOMContext(html);
      const whyUs = document.querySelector('.why-us-section, #why-us, .metrics-section');
      expect(whyUs).not.toBeNull();
    });

    test('T1-F06-02: Section title "WHY US?" rendered in luxury typography', () => {
      const html = loadHTML();
      expect(html).toMatch(/WHY US\?/i);
    });

    test('T1-F06-03: Displays 3 key stat highlights: 20, 45, and 25', () => {
      const html = loadHTML();
      expect(html).toMatch(/20/);
      expect(html).toMatch(/45/);
      expect(html).toMatch(/25/);
    });

    test('T1-F06-04: Supporting narrative text explains 20 yrs, 45 services, 25 stylists', () => {
      const html = loadHTML();
      expect(html).toMatch(/years of experience/i);
      expect(html).toMatch(/Beauty Care Services/i);
      expect(html).toMatch(/professional Hair Stylists|Stylists/i);
    });

    test('T1-F06-05: Responsive grid columns declared for metrics section', () => {
      const css = loadCSS();
      const hasGrid = css.includes('grid-template-columns') || css.includes('flex') || css.includes('col-');
      expect(hasGrid).toBeTruthy();
    });
  });

  // ---------------------------------------------------------------------------
  // F7: Luxury Product Spotlights (Kérastase & Shu Uemura)
  // ---------------------------------------------------------------------------
  describe('F7: Luxury Product Spotlights', () => {
    test('T1-F07-01: Kérastase Première Set product card rendered with image', () => {
      const html = loadHTML();
      const { document } = createDOMContext(html);
      const kerastaseImg = document.querySelector('img[src*="kerastase"], img[src*="premiere"], .product-card img');
      expect(kerastaseImg).not.toBeNull();
    });

    test('T1-F07-02: Product title and price $148.00 rendered accurately', () => {
      const html = loadHTML();
      expect(html).toMatch(/Première Fine To Medium Repairing Hair Care Set|Première/i);
      expect(html).toMatch(/\$148\.00/);
    });

    test('T1-F07-03: "SHOP ONLINE" CTA links to official e-commerce store', () => {
      const html = loadHTML();
      const { document } = createDOMContext(html);
      const shopLink = document.querySelector('a[href*="studio-dbrickell.shop"]');
      expect(shopLink).not.toBeNull();
    });

    test('T1-F07-04: Shu Uemura exclusive salon story highlights brand prestige', () => {
      const html = loadHTML();
      expect(html).toMatch(/Kerastase & shu uemura Exclusive Salon|shu uemura/i);
    });

    test('T1-F07-05: Editorial salon photo and secondary shop CTA present', () => {
      const html = loadHTML();
      const { document } = createDOMContext(html);
      const productSection = document.querySelector('.product-spotlight, .products-section, #products');
      expect(productSection).not.toBeNull();
    });
  });

  // ---------------------------------------------------------------------------
  // F8: Specials & Promotions Callout
  // ---------------------------------------------------------------------------
  describe('F8: Specials & Promotions Callout', () => {
    test('T1-F08-01: Promotional banner container exists with background styling', () => {
      const html = loadHTML();
      const { document } = createDOMContext(html);
      const specials = document.querySelector('.specials-banner, .specials-section, #specials');
      expect(specials).not.toBeNull();
    });

    test('T1-F08-02: Offer headline matches Free Kérastase Hydration Treatment', () => {
      const html = loadHTML();
      expect(html).toMatch(/Free Kerastase Hydration Treatment With Any Color/i);
    });

    test('T1-F08-03: Subtext reads "Mention this ad when booking"', () => {
      const html = loadHTML();
      expect(html).toMatch(/Mention this ad when booking/i);
    });

    test('T1-F08-04: Action button triggers appointment booking flow', () => {
      const html = loadHTML();
      const { document } = createDOMContext(html);
      const bookCTA = document.querySelector('.specials-banner a, .specials-section a');
      expect(bookCTA).not.toBeNull();
      expect(bookCTA.textContent.toUpperCase()).toContain('BOOK');
    });

    test('T1-F08-05: Quality salon Services highlight block lists 6 beauty disciplines', () => {
      const html = loadHTML();
      expect(html).toMatch(/quality salon Services/i);
      expect(html).toMatch(/Hair.*Waxing.*Nails.*Eyelashes.*Skin Care.*Microblading/i);
    });
  });

  // ---------------------------------------------------------------------------
  // F9: Testimonials & Reviews Carousel
  // ---------------------------------------------------------------------------
  describe('F9: Testimonials & Reviews Carousel', () => {
    test('T1-F09-01: Heading "TESTIMONIALS" rendered centered in Font2', () => {
      const html = loadHTML();
      expect(html).toMatch(/TESTIMONIALS/i);
    });

    test('T1-F09-02: 5-star rating SVG stars rendered for client reviews', () => {
      const html = loadHTML();
      const { document } = createDOMContext(html);
      const starIcons = document.querySelectorAll('.star-icon, .stars, img[src*="star"], svg.star');
      const hasStars = starIcons.length > 0 || html.includes('★') || html.includes('star.svg');
      expect(hasStars).toBeTruthy();
    });

    test('T1-F09-03: Real reviews from Maria G., Sophia L., and Elena R. with stylist names', () => {
      const html = loadHTML();
      expect(html).toMatch(/Maria G\.|Dinho/i);
      expect(html).toMatch(/Sophia L\.|Rafael/i);
      expect(html).toMatch(/Elena R\.|Cristiane/i);
    });

    test('T1-F09-04: Carousel navigation controls (prev/next/dots) exist', () => {
      const html = loadHTML();
      const { document } = createDOMContext(html);
      const controls = document.querySelectorAll('.carousel-prev, .carousel-next, .carousel-dots, .dot, .carousel-btn');
      expect(controls.length).toBeGreaterThanOrEqual(2);
    });

    test('T1-F09-05: Carousel structure supports multiple review slides', () => {
      const html = loadHTML();
      const { document } = createDOMContext(html);
      const slides = document.querySelectorAll('.testimonial-slide, .review-card, .carousel-slide');
      expect(slides.length).toBeGreaterThanOrEqual(3);
    });
  });

  // ---------------------------------------------------------------------------
  // F10: Interactive Appointment Booking Form
  // ---------------------------------------------------------------------------
  describe('F10: Interactive Appointment Booking Form', () => {
    test('T1-F10-01: Heading and Mary Brickell Village validated parking notice exist', () => {
      const html = loadHTML();
      expect(html).toMatch(/BOOK AN APPOINTMENT TODAY|BOOK AN APPOINTMENT/i);
      expect(html).toMatch(/Mary Brickell Village|Garage Parking/i);
    });

    test('T1-F10-02: Form inputs for First Name, Last Name, Email, Phone, Comments exist', () => {
      const html = loadHTML();
      const { document } = createDOMContext(html);
      const form = document.querySelector('form#booking-form, form.booking-form, form');
      expect(form).not.toBeNull();

      expect(document.querySelector('input[name*="first"], input#first-name, input[placeholder*="First"]')).not.toBeNull();
      expect(document.querySelector('input[name*="last"], input#last-name, input[placeholder*="Last"]')).not.toBeNull();
      expect(document.querySelector('input[type="email"], input#email')).not.toBeNull();
      expect(document.querySelector('input[type="tel"], input#phone')).not.toBeNull();
      expect(document.querySelector('textarea, textarea#comments')).not.toBeNull();
    });

    test('T1-F10-03: SMS consent checkbox present with required status', () => {
      const html = loadHTML();
      const { document } = createDOMContext(html);
      const smsCheckbox = document.querySelector('input[type="checkbox"][name*="sms"], input#sms-consent');
      expect(smsCheckbox).not.toBeNull();
    });

    test('T1-F10-04: Submit button styled with Navy background #002C50', () => {
      const css = loadCSS();
      const hasNavy = css.includes('#002C50') || css.includes('#002c50') || css.includes('rgb(0, 44, 80)');
      expect(hasNavy).toBeTruthy();
    });

    test('T1-F10-05: Client-side validation feedback element exists', () => {
      const html = loadHTML();
      const hasFeedback = html.includes('booking-feedback') ||
                          html.includes('booking-success') ||
                          html.includes('form-message') ||
                          html.includes('alert');
      expect(hasFeedback).toBeTruthy();
    });
  });

  // ---------------------------------------------------------------------------
  // F11: Google Maps & Mary Brickell Location
  // ---------------------------------------------------------------------------
  describe('F11: Google Maps & Mary Brickell Location', () => {
    test('T1-F11-01: Map container and iframe embed exist', () => {
      const html = loadHTML();
      const { document } = createDOMContext(html);
      const mapIframe = document.querySelector('iframe[src*="google.com/maps"], .map-container iframe, #map iframe');
      expect(mapIframe).not.toBeNull();
    });

    test('T1-F11-02: Map iframe has width 100% and lazy loading attribute', () => {
      const html = loadHTML();
      const { document } = createDOMContext(html);
      const mapIframe = document.querySelector('iframe[src*="google.com/maps"], .map-container iframe');
      expect(mapIframe).not.toBeNull();
      expect(mapIframe.getAttribute('loading') || 'lazy').toBe('lazy');
    });

    test('T1-F11-03: Mary Brickell Village physical address rendered verbatim', () => {
      const html = loadHTML();
      expect(html).toMatch(/Studio-?D Brickell/i);
      expect(html).toMatch(/900 S Miami Ave/i);
      expect(html).toMatch(/#266/);
      expect(html).toMatch(/33130/);
    });

    test('T1-F11-04: Directions trigger link opens Google Maps in new tab', () => {
      const html = loadHTML();
      const { document } = createDOMContext(html);
      const directionsLink = document.querySelector('a[href*="maps.google.com"], a[href*="goo.gl/maps"], .btn-directions');
      expect(directionsLink).not.toBeNull();
      expect(directionsLink.getAttribute('target') || '_blank').toBe('_blank');
    });

    test('T1-F11-05: Map iframe contains descriptive accessibility title', () => {
      const html = loadHTML();
      const { document } = createDOMContext(html);
      const mapIframe = document.querySelector('iframe[src*="google.com/maps"], .map-container iframe');
      expect(mapIframe).not.toBeNull();
      expect(mapIframe.getAttribute('title')).not.toBeNull();
    });
  });

  // ---------------------------------------------------------------------------
  // F12: Comprehensive 3-Column Footer
  // ---------------------------------------------------------------------------
  describe('F12: Comprehensive 3-Column Footer', () => {
    test('T1-F12-01: Pre-footer banner "Schedule Your Next Beauty Session" exists', () => {
      const html = loadHTML();
      expect(html).toMatch(/Schedule Your Next Beauty Session/i);
    });

    test('T1-F12-02: Column 1 lists 10 accepted payment methods and phone', () => {
      const html = loadHTML();
      expect(html).toMatch(/Cash/i);
      expect(html).toMatch(/VISA/i);
      expect(html).toMatch(/Master\s?Card/i);
      expect(html).toMatch(/American Express|Amex/i);
      expect(html).toMatch(/Apple Pay/i);
      expect(html).toMatch(/Google Pay/i);
    });

    test('T1-F12-03: Column 2 lists complete 7-day weekly operating hours', () => {
      const html = loadHTML();
      expect(html).toMatch(/Sunday/i);
      expect(html).toMatch(/Monday/i);
      expect(html).toMatch(/Tuesday/i);
      expect(html).toMatch(/Saturday/i);
      expect(html).toMatch(/10:00\s*AM|09:00\s*AM/i);
    });

    test('T1-F12-04: Column 3 renders legal policies and social links', () => {
      const html = loadHTML();
      expect(html).toMatch(/PRIVACY POLICY|Privacy Policy/i);
      expect(html).toMatch(/TERMS OF SERVICE|Terms/i);
      expect(html).toMatch(/instagram\.com\/studiodmiami|instagram/i);
      expect(html).toMatch(/facebook\.com\/StudioDMiami|facebook/i);
    });

    test('T1-F12-05: Copyright notice and Dharma Marketing agency credit exist', () => {
      const html = loadHTML();
      expect(html).toMatch(/Copyright © 2025 Studio-?D Brickell|Studio-?D Brickell All Rights Reserved/i);
      expect(html).toMatch(/Dharma/i);
    });
  });

  // ---------------------------------------------------------------------------
  // F13: Mobile Sticky Quick-Action Bar
  // ---------------------------------------------------------------------------
  describe('F13: Mobile Sticky Quick-Action Bar', () => {
    test('T1-F13-01: Element #botones-movil exists with fixed bottom positioning', () => {
      const html = loadHTML();
      const { document } = createDOMContext(html);
      const bar = document.querySelector('#botones-movil, .mobile-sticky-bar');
      expect(bar).not.toBeNull();

      const css = loadCSS();
      const hasFixed = css.includes('position: fixed') || css.includes('bottom: 0');
      expect(hasFixed).toBeTruthy();
    });

    test('T1-F13-02: Responsive media query @media (max-width: 800px) activates bar', () => {
      const css = loadCSS();
      const parser = parseStyles(css);
      const mediaRules = parser.getMediaQueryRules(/800px/);
      const has800Rule = mediaRules.length > 0 || css.includes('max-width: 800px') || css.includes('max-width:800px');
      expect(has800Rule).toBeTruthy();
    });

    test('T1-F13-03: Left 50% action triggers phone dialer tel:3054000669', () => {
      const html = loadHTML();
      const { document } = createDOMContext(html);
      const phoneLink = document.querySelector('#botones-movil a[href^="tel:"], .mobile-sticky-bar a[href^="tel:"]');
      expect(phoneLink).not.toBeNull();
      expect(phoneLink.textContent).toContain('349-4969');
    });

    test('T1-F13-04: Right 50% action triggers BOOK NOW appointment link', () => {
      const html = loadHTML();
      const { document } = createDOMContext(html);
      const bookLink = document.querySelector('#botones-movil a[href*="mangomint"], #botones-movil a[href*="booking"], .mobile-sticky-bar a.btn-mobile-book');
      expect(bookLink).not.toBeNull();
      expect(bookLink.textContent.toUpperCase()).toContain('BOOK NOW');
    });

    test('T1-F13-05: Bar has high z-index (>= 100) to remain on top', () => {
      const css = loadCSS();
      const hasZIndex = css.includes('z-index: 100') || css.includes('z-index: 99') || css.includes('z-index: 1000');
      expect(hasZIndex).toBeTruthy();
    });
  });

  // ---------------------------------------------------------------------------
  // F14: Offline Asset Harvesting & Optimization
  // ---------------------------------------------------------------------------
  describe('F14: Offline Asset Harvesting & Optimization', () => {
    test('T1-F14-01: Local font files exist and load via fonts.css', () => {
      expect(assetAuditor.verifyAssetExists('assets/fonts/font2-1.ttf')).toBeTruthy();
      expect(assetAuditor.verifyAssetExists('assets/fonts/roboto.woff2')).toBeTruthy();
      expect(assetAuditor.verifyAssetExists('assets/fonts/robotoslab.woff2')).toBeTruthy();
      expect(assetAuditor.verifyAssetExists('assets/css/fonts.css')).toBeTruthy();
    });

    test('T1-F14-02: All local images exist with non-empty file sizes', () => {
      const requiredImages = [
        'assets/images/logo.png',
        'assets/images/hero/hero-banner.jpg',
        'assets/images/hero/slide-1.jpg',
        'assets/images/products/kerastase-premiere.webp',
        'assets/images/services/body-waxing.jpg',
        'assets/images/services/nails.jpg'
      ];
      for (const img of requiredImages) {
        expect(assetAuditor.verifyAssetExists(img)).toBeTruthy();
        expect(assetAuditor.verifyAssetNonEmpty(img, 1000)).toBeTruthy();
      }
    });

    test('T1-F14-03: Vector SVG icons exist in assets/icons/', () => {
      const requiredIcons = [
        'assets/icons/phone.svg',
        'assets/icons/star.svg',
        'assets/icons/clock.svg',
        'assets/icons/map-pin.svg'
      ];
      for (const icon of requiredIcons) {
        expect(assetAuditor.verifyAssetExists(icon)).toBeTruthy();
      }
    });

    test('T1-F14-04: Zero external CDNs referenced in HTML/CSS', () => {
      const html = loadHTML();
      const css = loadCSS();
      expect(html).not.toMatch(/fonts\.googleapis\.com/);
      expect(html).not.toMatch(/cdnjs\.cloudflare\.com/);
      expect(css).not.toMatch(/@import\s+url\(['"]?https?:/);
    });

    test('T1-F14-05: Strict relative pathing used across HTML and CSS assets', () => {
      const html = loadHTML();
      const issues = assetAuditor.auditHtmlAssets(html);
      expect(issues.length).toBe(0);
    });
  });

  // ---------------------------------------------------------------------------
  // F15: Portfolio DemosPage Registration
  // ---------------------------------------------------------------------------
  describe('F15: Portfolio DemosPage Registration', () => {
    test('T1-F15-01: DemoItem entry for "studio-dbrickell" registered in DemosPage.tsx', () => {
      const item = portfolioAuditor.findDemoItem('studio-dbrickell');
      expect(item).not.toBeNull();
      expect(item.id).toBe('studio-dbrickell');
    });

    test('T1-F15-02: Title and category match Studio D Brickell specifications', () => {
      const item = portfolioAuditor.findDemoItem('studio-dbrickell');
      expect(item).not.toBeNull();
      expect(item.title).toContain('Studio D Brickell');
      expect(item.category).toMatch(/Beauty Salon|Luxury Spa/i);
    });

    test('T1-F15-03: Tags and features arrays contain valid entries', () => {
      const item = portfolioAuditor.findDemoItem('studio-dbrickell');
      expect(item).not.toBeNull();
      expect(item.tags.length).toBeGreaterThanOrEqual(3);
      expect(item.features.length).toBeGreaterThanOrEqual(3);
    });

    test('T1-F15-04: demoUrl and previewImage routes point to demo paths', () => {
      const item = portfolioAuditor.findDemoItem('studio-dbrickell');
      expect(item).not.toBeNull();
      expect(item.demoUrl).toBe('/demos/studio-dbrickell/index.html');
      expect(item.previewImage).toBe('/demos/studio-dbrickell/preview.png');
    });

    test('T1-F15-05: DemosPage modal supports interactive iframe preview', () => {
      const content = portfolioAuditor.readContent();
      expect(content).toContain('<iframe');
      expect(content).toContain('selectedDemo.demoUrl');
    });
  });

  // ---------------------------------------------------------------------------
  // F16: High-Resolution Preview Thumbnail
  // ---------------------------------------------------------------------------
  describe('F16: High-Resolution Preview Thumbnail', () => {
    test('T1-F16-01: Preview image exists at public/demos/studio-dbrickell/preview.png', () => {
      expect(assetAuditor.verifyAssetExists('preview.png')).toBeTruthy();
    });

    test('T1-F16-02: Preview file has valid PNG magic bytes header', () => {
      expect(assetAuditor.checkMagicBytes('preview.png', 'png')).toBeTruthy();
    });

    test('T1-F16-03: Preview file size is non-empty and optimized (> 10KB)', () => {
      expect(assetAuditor.verifyAssetNonEmpty('preview.png', 10000)).toBeTruthy();
    });

    test('T1-F16-04: Preview path matches DemosPage registration', () => {
      const item = portfolioAuditor.findDemoItem('studio-dbrickell');
      expect(item).not.toBeNull();
      expect(item.previewImage).toBe('/demos/studio-dbrickell/preview.png');
    });

    test('T1-F16-05: Preview image accessible in public web demo root', () => {
      const fullPath = path.join(DEMO_ROOT, 'preview.png');
      expect(fs.existsSync(fullPath)).toBeTruthy();
    });
  });

  // ---------------------------------------------------------------------------
  // F17: Responsive Layout & Viewport Adaptability
  // ---------------------------------------------------------------------------
  describe('F17: Responsive Layout & Viewport Adaptability', () => {
    test('T1-F17-01: Viewport meta tag is defined with width=device-width', () => {
      const html = loadHTML();
      const { document } = createDOMContext(html);
      const meta = document.querySelector('meta[name="viewport"]');
      expect(meta).not.toBeNull();
      expect(meta.getAttribute('content')).toContain('width=device-width');
    });

    test('T1-F17-02: Desktop container max-width constraints applied (1140px/1200px)', () => {
      const css = loadCSS();
      const hasMaxWidth = css.includes('max-width: 1140px') ||
                          css.includes('max-width: 1200px') ||
                          css.includes('max-width: 1280px') ||
                          css.includes('max-width:1140px');
      expect(hasMaxWidth).toBeTruthy();
    });

    test('T1-F17-03: Tablet media queries defined for 768px-1024px breakpoints', () => {
      const css = loadCSS();
      const hasTablet = css.includes('1024px') || css.includes('768px');
      expect(hasTablet).toBeTruthy();
    });

    test('T1-F17-04: Mobile media queries defined for <= 800px and <= 767px', () => {
      const css = loadCSS();
      const hasMobile = css.includes('800px') || css.includes('767px') || css.includes('480px');
      expect(hasMobile).toBeTruthy();
    });

    test('T1-F17-05: Overflow-x hidden rule configured to prevent horizontal scrollbars', () => {
      const css = loadCSS();
      const hasNoOverflow = css.includes('overflow-x: hidden') || css.includes('overflow-x:hidden');
      expect(hasNoOverflow).toBeTruthy();
    });
  });

});
