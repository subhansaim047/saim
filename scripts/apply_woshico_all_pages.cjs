const fs = require("fs");
const path = require("path");
const cheerio = require("cheerio");

const WOSHICO_DIR = path.join(__dirname, "../public/demos/woshico");

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
console.log(`Processing ${htmlFiles.length} HTML files...`);

// Master CSS styles to inject into all pages
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
     BUTTON HOVER & CLICK MICRO-INTERACTIONS
     ---------------------------------------------------- */
  .button-link, .header-button-link, .static-box-btn-bg-color, .contact-form-btn, .footer-form-submit {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    position: relative !important;
    cursor: pointer !important;
    text-decoration: none !important;
    border: none !important;
    transition: background-color 0.3s cubic-bezier(0.16, 1, 0.3, 1),
                transform 0.25s cubic-bezier(0.16, 1, 0.3, 1),
                box-shadow 0.3s ease !important;
  }
  .button-link:hover, .static-box-btn-bg-color:hover, .contact-form-btn:hover, .footer-form-submit:hover {
    transform: translateY(-2px) !important;
    box-shadow: 0 10px 24px rgba(227, 24, 55, 0.3) !important;
  }
  .button-link.white-bg:hover {
    box-shadow: 0 10px 24px rgba(255, 255, 255, 0.25) !important;
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
    font-weight: 600 !important;
    font-size: 15px !important;
    line-height: 22px !important;
    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
  }
  .button-text-hover {
    display: inline-block !important;
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    font-weight: 600 !important;
    font-size: 15px !important;
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
  .button-link.hover-white-bg:hover {
    background-color: #ffffff !important;
    color: #e31837 !important;
  }
  .button-link.hover-white-bg:hover .button-text-hover {
    color: #e31837 !important;
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
     INTERACTIVE BEFORE / AFTER SLIDER
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
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.15) !important;
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
    background: #e31837 !important;
    border: 3px solid #ffffff !important;
    border-radius: 50% !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4) !important;
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
    background: rgba(0, 0, 0, 0.65) !important;
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
  .before-badge.right { right: 18px !important; background: rgba(227, 24, 55, 0.85) !important; }

  /* ----------------------------------------------------
     SERVICES SECTION (CLEAN INTERACTIVE TABS & NO OVERLAP)
     ---------------------------------------------------- */
  .static-style-one-section {
    position: relative !important;
    overflow: hidden !important;
    padding: 80px 0 !important;
    background: #0f1012 !important;
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
    background: rgba(255, 255, 255, 0.15) !important;
    border-color: rgba(255, 255, 255, 0.3) !important;
  }
  .service-tab-btn.active {
    background: #e31837 !important;
    border-color: #e31837 !important;
    box-shadow: 0 4px 16px rgba(227, 24, 55, 0.4) !important;
  }

  /* Clean full-width appointment button inside service card */
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
    background: #ffffff !important;
    color: #0f1012 !important;
    font-weight: 700 !important;
    font-size: 14px !important;
    text-decoration: none !important;
    transition: all 0.3s ease !important;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2) !important;
    overflow: visible !important;
  }
  .static-box-btn-bg-color:hover {
    background: #e31837 !important;
    color: #ffffff !important;
    transform: translateY(-2px) !important;
  }
  .static-box-btn-bg-color:hover .static-icon {
    filter: brightness(0) invert(1) !important;
  }
  .static-box-bg-btn-content {
    display: flex !important;
    align-items: center !important;
    gap: 8px !important;
    width: 100% !important;
    justify-content: center !important;
  }
  .static-box-btn-icon-wrap {
    display: flex !important;
    align-items: center !important;
    gap: 8px !important;
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

  /* ----------------------------------------------------
     PROCESS & TESTIMONIALS ANIMATED LINES & ARROWS
     ---------------------------------------------------- */
  .static-box-two-heading-box {
    cursor: pointer !important;
    transition: opacity 0.3s ease !important;
  }
  .static-box-two-heading-icon {
    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
  }
  .static-box-two-line {
    transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
    background: #e31837 !important;
  }
  .testimonial-two-client {
    cursor: pointer !important;
    transition: opacity 0.3s ease !important;
  }
  .testimonial-two-line {
    transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
    background: #e31837 !important;
  }
</style>
`;

// Master Interactive Script to inject into all pages
const masterScript = `
<script id="woshico-master-interactive-engine">
document.addEventListener("DOMContentLoaded", function() {
  // ---------------------------------------------------------
  // 1. SILKY-SMOOTH BEFORE / AFTER COMPARISON SLIDER
  // ---------------------------------------------------------
  var sliderWrap = document.querySelector('.before-after-style-wrap');
  var afterLayer = document.querySelector('.before-after-style-after');
  var divider = document.querySelector('.before-after-style-divider');

  if (sliderWrap && afterLayer && divider) {
    var isDragging = false;

    function updateSlider(clientX) {
      var rect = sliderWrap.getBoundingClientRect();
      var offsetX = clientX - rect.left;
      var pct = (offsetX / rect.width) * 100;
      pct = Math.max(5, Math.min(95, pct)); // clamp 5% to 95%

      afterLayer.style.clipPath = 'inset(0 0 0 ' + pct + '%)';
      divider.style.left = pct + '%';
    }

    // Initialize at 50%
    afterLayer.style.clipPath = 'inset(0 0 0 50%)';
    divider.style.left = '50%';

    // Pointer events (unifies mouse & touch)
    sliderWrap.addEventListener('pointerdown', function(e) {
      isDragging = true;
      try { sliderWrap.setPointerCapture(e.pointerId); } catch(err) {}
      updateSlider(e.clientX);
    });

    sliderWrap.addEventListener('pointermove', function(e) {
      if (isDragging) {
        updateSlider(e.clientX);
      }
    });

    sliderWrap.addEventListener('pointerup', function(e) {
      isDragging = false;
      try { sliderWrap.releasePointerCapture(e.pointerId); } catch(err) {}
    });

    sliderWrap.addEventListener('pointercancel', function(e) {
      isDragging = false;
    });

    // Hover response on desktop when not dragging
    sliderWrap.addEventListener('mousemove', function(e) {
      if (!isDragging) {
        updateSlider(e.clientX);
      }
    });
  }

  // ---------------------------------------------------------
  // 2. INTERACTIVE SERVICES TAB SWITCHER
  // ---------------------------------------------------------
  var serviceBtns = document.querySelectorAll('.service-tab-btn');
  var serviceContents = document.querySelectorAll('.static-box-service-content');
  var serviceImages = document.querySelectorAll('.static-box-images-wrap');
  var serialNum = document.querySelector('.static-serial-big-number._01');
  var timeWraps = document.querySelectorAll('.static-box-time-wrap');

  if (serviceContents.length > 0) {
    serviceContents.forEach(function(sc, i) {
      if (i === 0) sc.classList.add('active');
      else sc.classList.remove('active');
    });
  }
  if (serviceImages.length > 0) {
    serviceImages.forEach(function(img, i) {
      img.style.opacity = (i === 0) ? '1' : '0';
      img.style.transform = (i === 0) ? 'scale(1)' : 'scale(1.04)';
    });
  }

  if (serviceBtns.length > 0) {
    serviceBtns.forEach(function(btn, idx) {
      btn.addEventListener('click', function() {
        serviceBtns.forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');

        // Update service cards
        serviceContents.forEach(function(sc, i) {
          if (i === idx) sc.classList.add('active');
          else sc.classList.remove('active');
        });

        // Update right image
        serviceImages.forEach(function(img, i) {
          img.style.opacity = (i === idx) ? '1' : '0';
          img.style.transform = (i === idx) ? 'scale(1)' : 'scale(1.04)';
        });

        // Update big serial number
        if (serialNum) {
          serialNum.innerText = (idx + 1).toString();
        }

        // Update active time wrap
        if (timeWraps.length >= 3) {
          timeWraps.forEach(function(tw, i) {
            tw.style.display = (i === idx) ? 'flex' : 'none';
          });
        }
      });
    });
  }

  // ---------------------------------------------------------
  // 3. INTERACTIVE "OUR PROCESS" TABS WITH ANIMATED LINES
  // ---------------------------------------------------------
  var procBoxes = document.querySelectorAll('.static-box-two-heading-box');
  var procPanels = document.querySelectorAll('.static-box-two');

  if (procBoxes.length === 3 && procPanels.length === 3) {
    function activateProcessTab(idx) {
      procPanels.forEach(function(p, i) {
        p.style.display = (i === idx) ? 'block' : 'none';
        p.style.opacity = (i === idx) ? '1' : '0';
      });
      procBoxes.forEach(function(b, i) {
        b.style.opacity = (i === idx) ? '1' : '0.5';
        var icon = b.querySelector('.static-box-two-heading-icon');
        var line = b.querySelector('.static-box-two-line');
        if (icon) {
          icon.style.transform = (i === idx) ? 'rotate(45deg)' : 'rotate(0deg)';
        }
        if (line) {
          line.style.width = (i === idx) ? '100%' : '0%';
        }
      });
    }

    procBoxes.forEach(function(box, idx) {
      box.addEventListener('click', function() {
        activateProcessTab(idx);
      });
    });

    activateProcessTab(0);
  }

  // ---------------------------------------------------------
  // 4. INTERACTIVE TESTIMONIAL TABS WITH ANIMATED LINES
  // ---------------------------------------------------------
  var testClients = document.querySelectorAll('.testimonial-two-client');
  var testWraps = document.querySelectorAll('.testimonial-two-wrap');

  if (testClients.length === 3 && testWraps.length === 3) {
    function activateTestimonial(idx) {
      testWraps.forEach(function(w, i) {
        w.style.display = (i === idx) ? 'flex' : 'none';
        w.style.opacity = (i === idx) ? '1' : '0';
      });
      testClients.forEach(function(c, i) {
        c.style.opacity = (i === idx) ? '1' : '0.5';
        var line = c.querySelector('.testimonial-two-line');
        if (line) {
          line.style.width = (i === idx) ? '100%' : '0%';
        }
      });
    }

    testClients.forEach(function(client, idx) {
      client.addEventListener('click', function() {
        activateTestimonial(idx);
      });
    });

    activateTestimonial(0);
  }

  // ---------------------------------------------------------
  // 5. INTERACTIVE FORM SUBMISSION HANDLER
  // ---------------------------------------------------------
  var forms = document.querySelectorAll('form');
  forms.forEach(function(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var submitBtn = form.querySelector('[type="submit"]');
      var oldVal = submitBtn ? submitBtn.value : '';
      if (submitBtn) submitBtn.value = 'Sending...';

      setTimeout(function() {
        form.style.display = 'none';
        var doneMsg = form.parentElement.querySelector('.w-form-done');
        if (doneMsg) {
          doneMsg.style.display = 'block';
        }
      }, 600);
    });
  });
});
</script>
`;

htmlFiles.forEach(file => {
  const relPath = path.relative(WOSHICO_DIR, file).replace(/\\/g, "/");
  let content = fs.readFileSync(file, "utf8");
  const $ = cheerio.load(content);

  // 1. Remove invalid href="#" from div.nav-text
  $("div.nav-text[href='#']").removeAttr("href");

  // 2. Fix duplicate button text inside .button-link
  $(".button-link").each((i, el) => {
    const linkWrap = $(el).find(".button-link-wrap");
    if (linkWrap.length > 0) {
      const hoverDiv = linkWrap.find(".button-text-hover");
      let text = hoverDiv.length > 0 ? hoverDiv.text().trim() : linkWrap.text().trim();
      if (!text) text = "Book Now";
      linkWrap.html(`<span class="button-text">${text}</span><span class="button-text-hover">${text}</span>`);
    }
  });

  // 3. Update Pricing cards on index.html
  if (relPath === "index.html") {
    $(".pricing-card .button-link").each((i, el) => {
      $(el).attr("href", "https://booking.setmore.com/scheduleappointment/0ae47544-71e2-466e-9fa8-144d4f85495a");
      $(el).attr("target", "_blank");
    });

    // Fix bogus heading
    const heading = $(".heading-title.white-text").filter((i, el) => $(el).text().includes("Many saw improved well-being"));
    if (heading.length > 0) {
      heading.text("Precision Detailing & Showroom Shine For Every Ride");
    }

    // Fix before/after markup if handle missing
    const beforeAfterContainer = $(".before-after-style-wrap");
    if (beforeAfterContainer.length > 0 && $(".before-after-handle").length === 0) {
      beforeAfterContainer.html(`
        <div class="before-badge left">Before</div>
        <div class="before-badge right">After</div>
        <div class="before-after-style-before">
          <img alt="before-img" class="after-image" loading="eager" src="/demos/woshico/images/68f5c54c50a691f5401049db_before-img.jpg"/>
        </div>
        <div class="before-after-style-after">
          <div class="before-after-style-after-inner">
            <img alt="after-img" class="after-image-01" loading="eager" src="/demos/woshico/images/68f5c54c9596800bcc9ee647_after-img.jpg"/>
          </div>
        </div>
        <div class="before-after-style-divider">
          <div class="before-after-handle"><span>◀</span><span>▶</span></div>
        </div>
      `);
    }

    // Add service tab pills if missing
    if ($(".service-tab-nav").length === 0 && $(".static-box-title-inner").length > 0) {
      const tabsNavHtml = `
        <div class="service-tab-nav">
          <button type="button" class="service-tab-btn active" data-service="1">01. Vehicle Polisher</button>
          <button type="button" class="service-tab-btn" data-service="2">02. Pressure Washer</button>
          <button type="button" class="service-tab-btn" data-service="3">03. Exterior Washing</button>
        </div>
      `;
      $(".static-box-title-inner").prepend(tabsNavHtml);
    }
  }

  // 4. Replace or inject master CSS in head
  if ($("#woshico-master-fix").length > 0) {
    $("#woshico-master-fix").replaceWith(masterStyle);
  } else {
    $("head").append(masterStyle);
  }

  // 5. Replace or inject master interactive engine before closing body
  if ($("#woshico-master-interactive-engine").length > 0) {
    $("#woshico-master-interactive-engine").replaceWith(masterScript);
  } else if ($("#woshico-interactive-fix").length > 0) {
    $("#woshico-interactive-fix").replaceWith(masterScript);
  } else {
    $("body").append(masterScript);
  }

  fs.writeFileSync(file, $.html(), "utf8");
  console.log(`Updated ${relPath} successfully.`);
});

console.log("All woshico pages enhanced successfully!");
