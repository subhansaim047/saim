const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

const BASE_URL = "http://localhost:3008/demos/woshico";
const ARTIFACT_DIR = "C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4";

async function audit() {
  console.log("=== STARTING FULL AUDIT OF WOSHICO DEMO ===");
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  const consoleErrors = [];
  const networkErrors = [];

  page.on("console", (msg) => {
    if (msg.type() === "error") {
      consoleErrors.push(msg.text());
    }
  });

  page.on("response", (res) => {
    if (res.status() >= 400) {
      networkErrors.push(`${res.status()} ${res.url()}`);
    }
  });

  console.log(`Navigating to ${BASE_URL}/index.html ...`);
  const response = await page.goto(`${BASE_URL}/index.html`, { waitUntil: "networkidle", timeout: 30000 });
  console.log(`Page HTTP status: ${response ? response.status() : "none"}`);

  await page.waitForTimeout(2000);

  // 1. Console & Network Errors
  console.log(`\n--- CONSOLE ERRORS (${consoleErrors.length}) ---`);
  consoleErrors.forEach((err) => console.log(`[Console Error] ${err}`));

  console.log(`\n--- NETWORK 4xx/5xx ERRORS (${networkErrors.length}) ---`);
  networkErrors.forEach((err) => console.log(`[Network Error] ${err}`));

  // 2. Check Horizontal Overflow on 1440, 768, 375
  const viewports = [
    { name: "desktop", w: 1440, h: 900 },
    { name: "tablet", w: 768, h: 1024 },
    { name: "mobile", w: 375, h: 812 }
  ];

  for (const vp of viewports) {
    await page.setViewportSize({ width: vp.w, height: vp.h });
    await page.waitForTimeout(500);
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    console.log(`[${vp.name} ${vp.w}px] scrollWidth: ${scrollWidth}, clientWidth: ${clientWidth}, overflow: ${scrollWidth > clientWidth}`);
    await page.screenshot({ path: path.join(ARTIFACT_DIR, `woshico_audit_${vp.name}.png`), fullPage: false });
  }

  // Reset to desktop
  await page.setViewportSize({ width: 1440, height: 900 });

  // 3. Check All Links & Buttons on Homepage
  const linkData = await page.evaluate(() => {
    const anchors = Array.from(document.querySelectorAll("a"));
    return anchors.map((a) => ({
      text: a.innerText.trim() || a.getAttribute("aria-label") || "(no text)",
      href: a.getAttribute("href"),
      className: a.className,
      outerHTML: a.outerHTML.substring(0, 150)
    }));
  });

  console.log(`\n--- TOTAL ANCHORS / LINKS FOUND: ${linkData.length} ---`);
  const deadLinks = linkData.filter((l) => !l.href || l.href === "#" || l.href === "" || l.href.startsWith("javascript:"));
  console.log(`Dead / Empty / Placeholder Links: ${deadLinks.length}`);
  deadLinks.forEach((l) => console.log(`  - [DEAD LINK] text: "${l.text}", href: "${l.href}"`));

  // 4. Check Buttons
  const buttonData = await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll("button, input[type='button'], input[type='submit'], .w-button, [role='button']"));
    return btns.map((b) => ({
      tag: b.tagName,
      text: b.innerText ? b.innerText.trim() : b.getAttribute("value") || "(empty)",
      className: b.className,
      type: b.getAttribute("type") || "(none)"
    }));
  });
  console.log(`\n--- TOTAL BUTTONS FOUND: ${buttonData.length} ---`);
  buttonData.forEach((b) => console.log(`  - [BUTTON] tag: ${b.tag}, text: "${b.text}", type: ${b.type}, class: ${b.className}`));

  // 5. Check Interactive Elements / Animations / Sliders
  // Before/After Slider
  const beforeAfter = await page.$(".before-after, [data-before-after], .twentytwenty-container, .comparison-slider");
  console.log(`\n--- BEFORE/AFTER SLIDER CHECK ---`);
  console.log(`Before/After slider container found: ${beforeAfter !== null}`);

  // Tabs (Pricing tabs, Service tabs)
  const tabs = await page.$$(".w-tab-link, [data-w-tab]");
  console.log(`Webflow Tabs found: ${tabs.length}`);

  // Sliders (Testimonials slider)
  const sliders = await page.$$(".w-slider");
  console.log(`Webflow Sliders found: ${sliders.length}`);

  // Accordions / Dropdowns / FAQs
  const dropdowns = await page.$$(".w-dropdown-toggle, .accordion-header, .faq-question");
  console.log(`Dropdowns / Accordions found: ${dropdowns.length}`);

  // Forms
  const forms = await page.$$("form, .w-form");
  console.log(`Forms found: ${forms.length}`);

  // Webflow IX2 (Interactions / Animations) Check
  const webflowStatus = await page.evaluate(() => {
    return {
      hasWebflow: typeof window.Webflow !== "undefined",
      hasJQuery: typeof window.jQuery !== "undefined",
      webflowModules: window.Webflow ? Object.keys(window.Webflow.modules || {}) : [],
      hasIX2: window.Webflow && window.Webflow.require ? Boolean(window.Webflow.require("ix2")) : false
    };
  });
  console.log(`\n--- WEBFLOW JS & ANIMATION RUNTIME STATUS ---`);
  console.log(JSON.stringify(webflowStatus, null, 2));

  // 6. Mobile Menu Test
  await page.setViewportSize({ width: 375, height: 812 });
  const navBtn = await page.$(".w-nav-button");
  console.log(`\n--- MOBILE NAV BUTTON TEST ---`);
  console.log(`Mobile nav button present: ${navBtn !== null}`);
  if (navBtn) {
    const isVisibleBefore = await navBtn.isVisible();
    console.log(`Mobile nav button isVisible: ${isVisibleBefore}`);
    await navBtn.click();
    await page.waitForTimeout(600);
    const navMenu = await page.$(".w-nav-menu");
    const isMenuOpen = navMenu ? await navMenu.isVisible() : false;
    console.log(`After click, mobile menu isVisible: ${isMenuOpen}`);
    await page.screenshot({ path: path.join(ARTIFACT_DIR, "woshico_mobile_menu_clicked.png") });
  }

  // 7. Test Sub-pages
  const subpages = ["about-us.html", "services.html", "pricing-plan.html", "faq-page.html", "contact.html"];
  console.log(`\n--- SUBPAGES AUDIT ---`);
  for (const sp of subpages) {
    try {
      const res = await page.goto(`${BASE_URL}/${sp}`, { waitUntil: "networkidle", timeout: 15000 });
      console.log(`Subpage ${sp}: status ${res ? res.status() : "none"}`);
    } catch (e) {
      console.log(`Subpage ${sp} FAILED: ${e.message}`);
    }
  }

  await browser.close();
  console.log("\n=== AUDIT COMPLETED ===");
}

audit().catch((err) => {
  console.error("Audit script failed:", err);
  process.exit(1);
});
