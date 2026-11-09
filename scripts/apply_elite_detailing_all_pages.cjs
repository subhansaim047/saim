const fs = require("fs");
const path = require("path");
const cheerio = require("cheerio");

const WOSHICO_DIR = path.join(__dirname, "../public/demos/woshico");
const { generatePricingHtml } = require("./build_elite_pricing_component.cjs");

function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getHtmlFiles(fullPath));
    } else if (file.endsWith(".html")) {
      results.push(fullPath);
    }
  });
  return results;
}

const htmlFiles = getHtmlFiles(WOSHICO_DIR);
console.log(`Starting Elite Mobile Detailing transformation across ${htmlFiles.length} files...`);

// Master CSS with signature Elite Emerald Green palette
const masterStyle = `
<style id="woshico-master-fix">
  html, body {
    overflow-x: clip !important;
    max-width: 100vw !important;
  }
  .w-webflow-badge {
    display: none !important;
  }

  /* ----------------------------------------------------
     ELITE EMERALD GREEN BRAND ACCENTS & BUTTONS
     ---------------------------------------------------- */
  :root {
    --elite-green: #2ea378;
    --elite-green-dark: #1b6045;
    --elite-green-glow: rgba(46, 163, 120, 0.4);
    --elite-bg-dark: #0b120e;
  }

  .button-link, .header-button-link, .static-box-btn-bg-color, .contact-form-btn, .footer-form-submit {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    position: relative !important;
    cursor: pointer !important;
    text-decoration: none !important;
    border: none !important;
    background-color: #2ea378 !important;
    color: #ffffff !important;
    transition: background-color 0.3s cubic-bezier(0.16, 1, 0.3, 1),
                transform 0.25s cubic-bezier(0.16, 1, 0.3, 1),
                box-shadow 0.3s ease !important;
  }
  .button-link:hover, .static-box-btn-bg-color:hover, .contact-form-btn:hover, .footer-form-submit:hover {
    background-color: #1b6045 !important;
    transform: translateY(-2px) !important;
    box-shadow: 0 10px 24px rgba(46, 163, 120, 0.4) !important;
  }
  .button-link.white-bg {
    background-color: #ffffff !important;
    color: #0b120e !important;
  }
  .button-link.white-bg:hover {
    background-color: #2ea378 !important;
    color: #ffffff !important;
    box-shadow: 0 10px 24px rgba(46, 163, 120, 0.35) !important;
  }
  .button-link:active, .static-box-btn-bg-color:active, .contact-form-btn:active, .footer-form-submit:active {
    transform: translateY(0) scale(0.98) !important;
  }

  .button-link-wrap {
    display: flex !important;
    position: relative !important;
    overflow: hidden !important;
    height: 22px !important;
    align-items: center !important;
  }
  .button-text {
    display: inline-block !important;
    color: inherit !important;
    font-weight: 700 !important;
    font-size: 14px !important;
    line-height: 22px !important;
    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
  }
  .button-text-hover {
    display: inline-block !important;
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    font-weight: 700 !important;
    font-size: 14px !important;
    line-height: 22px !important;
    color: inherit !important;
    transform: translateY(100%) !important;
    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
  }
  .button-link:hover .button-text {
    transform: translateY(-100%) !important;
  }
  .button-link:hover .button-text-hover {
    transform: translateY(0) !important;
  }

  /* Looping arrow animation on buttons */
  .button-arrow-wrap {
    width: 14px !important;
    height: 14px !important;
    position: relative !important;
    overflow: hidden !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    margin-left: 6px !important;
  }
  .button-arrow {
    display: block !important;
    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
  }
  .button-arrow-hover {
    display: block !important;
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    transform: translate(-100%, 100%) !important;
    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
  }
  .button-link:hover .button-arrow {
    transform: translate(100%, -100%) !important;
  }
  .button-link:hover .button-arrow-hover {
    transform: translate(0, 0) !important;
  }

  /* ----------------------------------------------------
     LOGO STYLING IN HEADER & FOOTER
     ---------------------------------------------------- */
  .elite-logo-wrapper {
    display: inline-flex !important;
    align-items: center !important;
    gap: 12px !important;
    text-decoration: none !important;
  }
  .elite-brand-icon {
    height: 48px !important;
    width: auto !important;
    object-fit: contain !important;
    filter: drop-shadow(0 2px 8px rgba(0,0,0,0.3)) !important;
  }
  .elite-logo-text {
    display: flex !important;
    flex-direction: column !important;
    line-height: 1.05 !important;
  }
  .elite-logo-main {
    font-size: 20px !important;
    font-weight: 900 !important;
    letter-spacing: 0.5px !important;
    color: #ffffff !important;
    text-transform: uppercase !important;
  }
  .header-two .elite-logo-main {
    color: #0f1012 !important;
  }
  .footer .elite-logo-main {
    color: #ffffff !important;
  }
  .elite-logo-sub {
    font-size: 10px !important;
    font-weight: 700 !important;
    letter-spacing: 1.5px !important;
    color: #2ea378 !important;
    text-transform: uppercase !important;
  }

  /* ----------------------------------------------------
     BEFORE / AFTER SLIDER
     ---------------------------------------------------- */
  .before-after-style-wrap {
    z-index: 10 !important;
    border-radius: 24px !important;
    height: 380px !important;
    position: relative !important;
    overflow: hidden !important;
    cursor: ew-resize !important;
    user-select: none !important;
    touch-action: pan-y !important;
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.25) !important;
    border: 2px solid rgba(46, 163, 120, 0.3) !important;
  }
  .before-after-style-before {
    position: absolute !important;
    inset: 0 !important;
    width: 100% !important;
    height: 100% !important;
    z-index: 1 !important;
  }
  .before-after-style-before img {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
  }
  .before-after-style-after {
    position: absolute !important;
    inset: 0 !important;
    width: 100% !important;
    height: 100% !important;
    z-index: 2 !important;
    clip-path: inset(0 0 0 50%);
    will-change: clip-path;
  }
  .before-after-style-after-inner {
    position: absolute !important;
    inset: 0 !important;
    width: 100% !important;
    height: 100% !important;
  }
  .before-after-style-after-inner img {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
  }
  .before-after-style-divider {
    position: absolute !important;
    top: 0 !important;
    bottom: 0 !important;
    left: 50%;
    width: 3px !important;
    background: #ffffff !important;
    box-shadow: 0 0 14px rgba(0, 0, 0, 0.6) !important;
    z-index: 3 !important;
    pointer-events: none !important;
    transform: translateX(-50%) !important;
  }
  .before-after-handle {
    position: absolute !important;
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%) !important;
    width: 44px !important;
    height: 44px !important;
    background: #2ea378 !important;
    border: 3px solid #ffffff !important;
    border-radius: 50% !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5) !important;
    color: #ffffff !important;
    font-size: 13px !important;
    gap: 4px !important;
    cursor: grab !important;
    pointer-events: auto !important;
    transition: transform 0.2s ease, background-color 0.2s ease !important;
  }
  .before-after-handle:active {
    cursor: grabbing !important;
    transform: translate(-50%, -50%) scale(1.1) !important;
  }
  .before-badge {
    position: absolute !important;
    top: 18px !important;
    padding: 6px 14px !important;
    background: rgba(0, 0, 0, 0.75) !important;
    backdrop-filter: blur(8px) !important;
    color: #ffffff !important;
    font-size: 11px !important;
    font-weight: 700 !important;
    letter-spacing: 1px !important;
    text-transform: uppercase !important;
    border-radius: 30px !important;
    z-index: 4 !important;
    pointer-events: none !important;
  }
  .before-badge.left { left: 18px !important; }
  .before-badge.right { right: 18px !important; background: rgba(46, 163, 120, 0.9) !important; }

  /* ----------------------------------------------------
     SERVICES SECTION TABS
     ---------------------------------------------------- */
  .static-style-one-section {
    position: relative !important;
    overflow: hidden !important;
    padding: 80px 0 !important;
    background: #0b120e !important;
  }
  .static-style-one-section-inner {
    height: auto !important;
  }
  .static-style-one-sticky {
    position: relative !important;
    top: auto !important;
  }
  .static-box-columns {
    display: flex !important;
    flex-wrap: wrap !important;
    gap: 32px !important;
  }
  .static-box-left-column {
    flex: 1 1 540px !important;
    max-width: 650px !important;
  }
  .static-box-right-column {
    flex: 1 1 420px !important;
    min-height: 520px !important;
    position: relative !important;
  }
  .static-box-right-images {
    position: relative !important;
    width: 100% !important;
    height: 100% !important;
    min-height: 520px !important;
    border-radius: 28px !important;
    overflow: hidden !important;
    border: 1px solid rgba(46, 163, 120, 0.2) !important;
  }
  .static-box-images-wrap {
    position: absolute !important;
    inset: 0 !important;
    width: 100% !important;
    height: 100% !important;
    transition: opacity 0.4s ease, transform 0.4s ease !important;
  }
  .static-box-images-wrap img {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
  }
  .static-box-service-content {
    display: none !important;
    opacity: 0 !important;
    transition: opacity 0.35s ease, transform 0.35s ease !important;
  }
  .static-box-service-content.active {
    display: block !important;
    opacity: 1 !important;
  }

  /* Interactive service selector pills */
  .service-tab-nav {
    display: flex !important;
    flex-wrap: wrap !important;
    gap: 10px !important;
    margin-bottom: 24px !important;
  }
  .service-tab-btn {
    padding: 10px 18px !important;
    border-radius: 40px !important;
    border: 1px solid rgba(255, 255, 255, 0.15) !important;
    background: rgba(255, 255, 255, 0.05) !important;
    color: #ffffff !important;
    font-size: 13px !important;
    font-weight: 600 !important;
    cursor: pointer !important;
    transition: all 0.25s ease !important;
  }
  .service-tab-btn:hover {
    background: rgba(46, 163, 120, 0.2) !important;
    border-color: rgba(46, 163, 120, 0.4) !important;
  }
  .service-tab-btn.active {
    background: #2ea378 !important;
    border-color: #2ea378 !important;
    box-shadow: 0 4px 16px rgba(46, 163, 120, 0.4) !important;
  }

  .static-box-btn-column, .home-one-static-box-bg {
    position: relative !important;
    right: auto !important;
    top: auto !important;
    margin-top: 28px !important;
    width: 100% !important;
    border-radius: 0 !important;
    background: transparent !important;
  }
  .static-box-btn-bg-color {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 10px !important;
    padding: 14px 28px !important;
    width: auto !important;
    min-width: 240px !important;
    height: auto !important;
    border-radius: 40px !important;
    background: #2ea378 !important;
    color: #ffffff !important;
    font-weight: 700 !important;
    font-size: 14px !important;
    text-decoration: none !important;
    transition: all 0.3s ease !important;
    box-shadow: 0 6px 20px rgba(46, 163, 120, 0.3) !important;
    overflow: visible !important;
  }
  .static-box-btn-bg-color:hover {
    background: #1b6045 !important;
    color: #ffffff !important;
    transform: translateY(-2px) !important;
  }
  .static-box-bg-btn-content {
    display: flex !important;
    align-items: center !important;
    gap: 8px !important;
    width: 100% !important;
    justify-content: center !important;
  }
  .static-icon {
    width: 14px !important;
    height: 14px !important;
  }
  .static-icon-text {
    display: inline-block !important;
    white-space: nowrap !important;
    font-size: 14px !important;
    font-weight: 700 !important;
  }

  .static-box-two-line, .testimonial-two-line {
    background: #2ea378 !important;
  }
  .subtitle-head {
    color: #2ea378 !important;
  }
  .subtitle-head-icon {
    filter: invert(53%) sepia(51%) saturate(541%) hue-rotate(105deg) brightness(96%) contrast(87%) !important;
  }

  /* Contact and Feature Icons in Emerald */
  .icon-style-thirteen-icon-wrap, .feature-icon-wrap, .header-button-icon-wrap.light-bg {
    background-color: #2ea378 !important;
    box-shadow: 0 6px 18px rgba(46, 163, 120, 0.35) !important;
  }
  .header-button-content .header-button-text {
    color: #2ea378 !important;
  }
  .highlight-text, span.red-text, span.text-primary {
    color: #2ea378 !important;
  }

  /* Pricing Cards responsive layout */
  @media (max-width: 767px) {
    .elite-pricing-grid {
      grid-template-columns: 1fr !important;
    }
  }
</style>
`;

const eliteLogoHtml = `
<div class="elite-logo-wrapper">
  <img src="/demos/woshico/images/elite-logo.png" alt="Elite Mobile Detailing" class="logo elite-brand-icon" />
  <div class="elite-logo-text">
    <span class="elite-logo-main">ELITE</span>
    <span class="elite-logo-sub">MOBILE DETAILING</span>
  </div>
</div>
`;

const eliteLogoFooterHtml = `
<div class="elite-logo-wrapper" style="margin-bottom: 20px;">
  <img src="/demos/woshico/images/elite-logo.png" alt="Elite Mobile Detailing" class="elite-brand-icon" style="height: 56px;" />
  <div class="elite-logo-text">
    <span class="elite-logo-main" style="font-size: 22px;">ELITE</span>
    <span class="elite-logo-sub">MOBILE DETAILING</span>
  </div>
</div>
`;

const chemicalTickerHtml = `
<div class="client-logo-one-wrap">
  <div class="client-one-logo" style="font-size: 22px; font-weight: 800; color: #ffffff; letter-spacing: 1px;">KochChemie®</div>
  <div class="client-one-logo" style="font-size: 22px; font-weight: 800; color: #ffffff; letter-spacing: 2px;">CARPRO</div>
  <div class="client-one-logo" style="font-size: 22px; font-weight: 800; color: #ffffff; letter-spacing: 3px;">GYEON</div>
  <div class="client-one-logo" style="font-size: 24px; font-weight: bold; color: #ffffff; font-style: italic;">Meguiar's</div>
  <div class="client-one-logo" style="font-size: 16px; font-weight: 700; color: #2ea378; letter-spacing: 1px;">WE COME TO YOU</div>
  <div class="client-one-logo" style="font-size: 22px; font-weight: 800; color: #ffffff; letter-spacing: 1px;">KochChemie®</div>
  <div class="client-one-logo" style="font-size: 22px; font-weight: 800; color: #ffffff; letter-spacing: 2px;">CARPRO</div>
  <div class="client-one-logo" style="font-size: 22px; font-weight: 800; color: #ffffff; letter-spacing: 3px;">GYEON</div>
  <div class="client-one-logo" style="font-size: 24px; font-weight: bold; color: #ffffff; font-style: italic;">Meguiar's</div>
</div>
`;

htmlFiles.forEach(file => {
  const relPath = path.relative(WOSHICO_DIR, file).replace(/\\/g, "/");
  let content = fs.readFileSync(file, "utf8");
  const $ = cheerio.load(content);

  // 1. Update Title & Meta
  let currentTitle = $("title").text();
  $("title").text("Elite Mobile Detailing - Premium Showroom Care At Your Doorstep");
  $('meta[name="description"]').attr("content", "Elite Mobile Detailing brings showroom-grade mobile detailing directly to your home or office. We use the world's leading chemical brands & protectants including KochChemie, CarPro, Gyeon and Meguiar's.");

  // 2. Update Header Logo
  $(".logo-wrap .logo-link").each((i, el) => {
    $(el).html(eliteLogoHtml);
  });

  // 3. Update Footer Logo
  $(".footer-logo").each((i, el) => {
    $(el).replaceWith(eliteLogoFooterHtml);
  });

  // 4. Update Footer About Text
  $(".footer-first-column .white-desc-text").html(`
    Elite Mobile Detailing brings premium, showroom-grade mobile detailing directly to your doorstep. We Come To You! Powered by the world's leading chemical protectants.
  `);

  // 5. Update Footer Copyright
  $(".footer-small-text").html(`
    © 2026 <a class="footer-small-link" href="/demos/woshico/index.html">Elite Mobile Detailing.</a> All Rights Reserved.
  `);

  // 6. Update Scrolling Marquee (Chemical Brands & Protectants)
  if ($(".client-logo-one-wrap").length > 0) {
    $(".client-logo-one-wrap").html(chemicalTickerHtml);
  }

  // 7. Replace old "Luxury Wash USA" / "Woshico" / old emails
  $("body *").contents().each(function() {
    if (this.type === "text") {
      let text = this.data;
      if (text.includes("Luxury Wash USA")) {
        text = text.replace(/Luxury Wash USA/g, "Elite Mobile Detailing");
      }
      if (text.includes("Luxury Wash")) {
        text = text.replace(/Luxury Wash/g, "Elite Detailing");
      }
      if (text.includes("Woshico")) {
        text = text.replace(/Woshico/g, "Elite Mobile Detailing");
      }
      if (text.includes("luxurywashoffice@gmail.com")) {
        text = text.replace(/luxurywashoffice@gmail.com/g, "elitemobiledetailing@gmail.com");
      }
      this.data = text;
    }
  });

  // Also replace href="mailto:..."
  $('a[href*="luxurywashoffice@gmail.com"]').attr("href", "mailto:elitemobiledetailing@gmail.com");

  // 8. Custom Updates for index.html
  if (relPath === "index.html") {
    // Hero updates
    $(".subtitle-head").filter((i, el) => $(el).text().includes("PREMIUM") || $(el).text().includes("Car Care") || $(el).text().includes("ELITE")).text("ELITE MOBILE DETAILING");
    $(".heading-title.hero-one-heading, h1.hero-one-heading, .hero-one-title-wrap h1").html(`Premium <span style="color: #2ea378;">mobile detailing</span> services designed for today's busy drivers.`);
    $(".hero-one-desc").text("We come directly to your home or office! From our foundational Basic Detail to our comprehensive multi-stage Premium Full Detail with world-class protectants.");

    // Services section heading
    $(".heading-title.white-text").filter((i, el) => $(el).text().includes("Precision Detailing")).text("Precision Detailing & Showroom Shine For Every Ride");

    // Replace old pricing section with Elite Pricing Section
    const oldPricing = $(".section-gap:has(.pricing-tab-menu)");
    if (oldPricing.length > 0) {
      oldPricing.replaceWith(generatePricingHtml());
    } else {
      // Check if elite pricing already present, update it
      $(".elite-pricing-section").replaceWith(generatePricingHtml());
    }

    // Update service tab pills
    const tabsNavHtml = `
      <div class="service-tab-nav">
        <button type="button" class="service-tab-btn active" data-service="1">01. Basic Detail (Exterior & Interior)</button>
        <button type="button" class="service-tab-btn" data-service="2">02. Premium Full Detail (3-Stage Wash)</button>
        <button type="button" class="service-tab-btn" data-service="3">03. Wheel & Chemical Decontamination</button>
      </div>
    `;
    if ($(".service-tab-nav").length > 0) {
      $(".service-tab-nav").replaceWith(tabsNavHtml);
    }

    // Update Service 1, 2, 3 details
    const service1Title = $(".static-box-service-content._1 .static-box-title");
    if (service1Title.length > 0) {
      service1Title.text("Basic Detail Package");
      $(".static-box-service-content._1 .static-box-desc").text("A fresh clean inside and out. Includes exterior wash, tyre and rim cleaning, full interior vacuum, and dashboard & upholstery wipe down.");
      $(".static-box-service-content._1 .static-box-price-text").text("PKR 6,000 – 8,000");
    }

    const service2Title = $(".static-box-service-content._2 .static-box-title");
    if (service2Title.length > 0) {
      service2Title.text("Premium Full Detail (Most Popular)");
      $(".static-box-service-content._2 .static-box-desc").text("A deep clean inside and out with added protection. 3-stage wash, wheel decontamination, plastics restorer, steam cleaning, and leather protectant.");
      $(".static-box-service-content._2 .static-box-price-text").text("PKR 11,000 – 14,000");
    }

    const service3Title = $(".static-box-service-content._3 .static-box-title");
    if (service3Title.length > 0) {
      service3Title.text("Chemical & Wheel Decontamination");
      $(".static-box-service-content._3 .static-box-desc").text("Specialized brake dust extraction and iron fallout removal using CARPRO and KochChemie professional chemicals.");
      $(".static-box-service-content._3 .static-box-price-text").text("Showroom Standard");
    }
  }

  // 9. Custom Updates for pricing-plan.html
  if (relPath === "pricing-plan.html") {
    $(".breadcrumb-title").text("Detailing Packages & Pricing");
    $(".breadcrumb-desc").text("Transparent pricing tailored for sedans, SUVs, and luxury vehicles. We use the world's leading chemical protectants.");
    
    const oldPricing = $(".section-gap:has(.pricing-tab-menu)");
    if (oldPricing.length > 0) {
      oldPricing.replaceWith(generatePricingHtml());
    } else {
      $(".elite-pricing-section").replaceWith(generatePricingHtml());
    }
  }

  // 10. Update Master CSS in Head
  if ($("#woshico-master-fix").length > 0) {
    $("#woshico-master-fix").replaceWith(masterStyle);
  } else {
    $("head").append(masterStyle);
  }

  fs.writeFileSync(file, $.html(), "utf8");
  console.log(`Transformed ${relPath}`);
});

console.log("=== ELITE MOBILE DETAILING FULL TRANSFORMATION COMPLETE! ===");
