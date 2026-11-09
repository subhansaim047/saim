const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

const BASE_URL = "http://localhost:3008/demos/woshico";
const ARTIFACT_DIR = "C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4";

async function deepAudit() {
  console.log("=== DEEP SECTION-BY-SECTION AUDIT OF WOSHICO ===");
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  await page.goto(`${BASE_URL}/index.html`, { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);

  // Take full page desktop screenshot
  await page.screenshot({ path: path.join(ARTIFACT_DIR, "woshico_fullpage_desktop.png"), fullPage: true });
  console.log("Captured woshico_fullpage_desktop.png");

  // Take full page mobile screenshot
  await page.setViewportSize({ width: 375, height: 812 });
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, "woshico_fullpage_mobile.png"), fullPage: true });
  console.log("Captured woshico_fullpage_mobile.png");

  // Reset to desktop
  await page.setViewportSize({ width: 1440, height: 900 });

  // 1. Audit Buttons & Links
  const issues = [];

  // Check all anchor tags for dead hrefs or broken targets
  const links = await page.$$eval("a", (els) => els.map(a => ({
    text: a.innerText.trim() || a.getAttribute("aria-label") || "(no text)",
    href: a.getAttribute("href"),
    target: a.getAttribute("target"),
    classes: a.className,
    visible: a.offsetWidth > 0 && a.offsetHeight > 0
  })));

  console.log(`\nAudited ${links.length} links:`);
  links.forEach(l => {
    if (!l.href || l.href === "#" || l.href === "") {
      issues.push(`Dead link: "${l.text}" has href="${l.href}"`);
    } else if (l.href.startsWith("http://localhost:3008") || l.href.startsWith("/demos/woshico")) {
      // Internal link
    }
  });

  // 2. Check Interactive Elements
  // A. Before / After Slider
  console.log("\n--- Checking Before / After Slider ---");
  const beforeAfterWrap = await page.$(".before-after-style-wrap");
  if (beforeAfterWrap) {
    const box = await beforeAfterWrap.boundingBox();
    console.log("Before/After wrap bounding box:", box);
    
    // Check if moving mouse across slider changes clip or divider
    const divider = await page.$(".before-after-style-divider");
    const dividerBoxBefore = divider ? await divider.boundingBox() : null;
    
    if (box) {
      await page.mouse.move(box.x + box.width * 0.2, box.y + box.height * 0.5);
      await page.waitForTimeout(200);
      await page.mouse.move(box.x + box.width * 0.8, box.y + box.height * 0.5);
      await page.waitForTimeout(200);
    }
    
    const dividerBoxAfter = divider ? await divider.boundingBox() : null;
    console.log("Divider before mouse move:", dividerBoxBefore ? dividerBoxBefore.x : "none");
    console.log("Divider after mouse move:", dividerBoxAfter ? dividerBoxAfter.x : "none");
    if (dividerBoxBefore && dividerBoxAfter && dividerBoxBefore.x === dividerBoxAfter.x) {
      issues.push("Before/After slider is STATIC! Mouse move does not drag the divider or reveal before/after image.");
    }
  } else {
    issues.push("Before/After slider (.before-after-style-wrap) element not found!");
  }

  // B. Services 1/2/3 sticky scroll or tabs
  console.log("\n--- Checking Static Services Section ---");
  const staticServices = await page.$$(".static-box-service-content");
  console.log(`Found ${staticServices.length} static service contents`);
  const serviceImages = await page.$$(".static-box-image");
  console.log(`Found ${serviceImages.length} static service images`);
  
  // Check if all 3 service images overlap or how they display
  const serviceImgBoxes = [];
  for (const img of serviceImages) {
    serviceImgBoxes.push(await img.boundingBox());
  }
  console.log("Service image boxes:", serviceImgBoxes);

  // C. Process Tabs (01. Touchless Wash, 02. Automatic Wash, 03. Waxing & Sealing)
  console.log("\n--- Checking Process Tabs ---");
  const procTabs = await page.$$(".static-box-two-heading-box");
  console.log(`Found ${procTabs.length} process tab buttons`);
  for (let i = 0; i < procTabs.length; i++) {
    await procTabs[i].click();
    await page.waitForTimeout(200);
    const activePanel = await page.$eval(`.static-box-two._0${i+1}`, el => ({
      display: window.getComputedStyle(el).display,
      opacity: window.getComputedStyle(el).opacity
    }));
    console.log(`Process Tab ${i+1} active panel display: ${activePanel.display}, opacity: ${activePanel.opacity}`);
    if (activePanel.display !== "block" && activePanel.display !== "flex") {
      issues.push(`Process Tab ${i+1} did not activate properly on click!`);
    }
  }

  // D. Pricing Tabs (Sedan, SUV, MiniBus)
  console.log("\n--- Checking Pricing Tabs ---");
  const pricingTabs = await page.$$(".pricing-tab");
  console.log(`Found ${pricingTabs.length} pricing tabs`);
  for (let i = 0; i < pricingTabs.length; i++) {
    await pricingTabs[i].click();
    await page.waitForTimeout(300);
    const pane = await page.$$(`.pricing-tab-content-wrap`);
    const isCurrent = await pricingTabs[i].evaluate(el => el.classList.contains("w--current"));
    console.log(`Pricing Tab ${i+1} w--current: ${isCurrent}`);
  }

  // E. Testimonials
  console.log("\n--- Checking Testimonials Tabs ---");
  const testClients = await page.$$(".testimonial-two-client");
  console.log(`Found ${testClients.length} testimonial tab buttons`);
  for (let i = 0; i < testClients.length; i++) {
    await testClients[i].click();
    await page.waitForTimeout(200);
    const activeTestWrap = await page.$eval(`.testimonial-two-wrap._0${i+1}`, el => ({
      display: window.getComputedStyle(el).display,
      opacity: window.getComputedStyle(el).opacity
    }));
    console.log(`Testimonial Tab ${i+1} display: ${activeTestWrap.display}, opacity: ${activeTestWrap.opacity}`);
    if (activeTestWrap.display !== "flex" && activeTestWrap.display !== "block") {
      issues.push(`Testimonial Tab ${i+1} did not activate properly on click!`);
    }
  }

  // F. Button Hover Animation Check
  console.log("\n--- Checking Button Hover Animations ---");
  const heroBtn = await page.$(".hero-one-button-wrap .button-link");
  if (heroBtn) {
    const btnBox = await heroBtn.boundingBox();
    console.log("Hero button box:", btnBox);
    await page.mouse.move(btnBox.x + btnBox.width / 2, btnBox.y + btnBox.height / 2);
    await page.waitForTimeout(300);
    const hoverTextTransform = await page.$eval(".hero-one-button-wrap .button-text-hover", el => window.getComputedStyle(el).transform);
    console.log("Hero button hover text transform:", hoverTextTransform);
  }

  // G. Check Dropdown Menu ("Pages" dropdown in navbar)
  console.log("\n--- Checking Navbar Dropdown ---");
  const pagesDropdown = await page.$(".dropdown-toggle");
  if (pagesDropdown) {
    await pagesDropdown.hover();
    await page.waitForTimeout(300);
    const dropdownList = await page.$(".dropdown-list");
    const isListVisible = dropdownList ? await dropdownList.isVisible() : false;
    console.log("Pages dropdown list visible on hover:", isListVisible);
    if (!isListVisible) {
      await pagesDropdown.click();
      await page.waitForTimeout(300);
      const isListVisibleClick = dropdownList ? await dropdownList.isVisible() : false;
      console.log("Pages dropdown list visible on click:", isListVisibleClick);
    }
  }

  // H. Check All Sub-pages for Broken Links or Layout Breaks
  const subpages = ["about-us.html", "services.html", "pricing-plan.html", "faq-page.html", "contact.html"];
  for (const sp of subpages) {
    console.log(`\n--- Auditing Subpage: ${sp} ---`);
    await page.goto(`${BASE_URL}/${sp}`, { waitUntil: "networkidle" });
    await page.waitForTimeout(500);

    // Check console errors
    const subpageLinks = await page.$$eval("a", els => els.map(a => a.getAttribute("href")));
    const deadSubLinks = subpageLinks.filter(h => !h || h === "#" || h === "");
    if (deadSubLinks.length > 0) {
      issues.push(`${sp} has ${deadSubLinks.length} dead links!`);
    }

    // Check overflow
    const sWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const cWidth = await page.evaluate(() => document.documentElement.clientWidth);
    if (sWidth > cWidth) {
      issues.push(`${sp} has horizontal overflow! (${sWidth} > ${cWidth})`);
    }

    // Capture screenshot
    await page.screenshot({ path: path.join(ARTIFACT_DIR, `woshico_subpage_${sp.replace('.html', '')}.png`) });
  }

  console.log("\n================ AUDIT SUMMARY OF ISSUES ================");
  console.log(`Total Issues Found: ${issues.length}`);
  issues.forEach((iss, i) => console.log(`${i + 1}. ${iss}`));

  await browser.close();
}

deepAudit().catch(err => {
  console.error("Deep audit error:", err);
  process.exit(1);
});
