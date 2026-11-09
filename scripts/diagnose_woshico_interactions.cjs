const { chromium } = require("playwright");
const path = require("path");

const BASE_URL = "http://localhost:3008/demos/woshico";
const ARTIFACT_DIR = "C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4";

async function diagnose() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(`${BASE_URL}/index.html`, { waitUntil: "networkidle" });
  await page.waitForTimeout(1000);

  console.log("=== 1. DIAGNOSING BEFORE/AFTER SLIDER ===");
  const slider = await page.$(".before-after-style-wrap");
  if (slider) {
    const html = await slider.evaluate(el => el.outerHTML);
    console.log("Slider HTML:\n", html);
    const css = await page.$eval(".before-after-style-wrap", el => {
      const s = window.getComputedStyle(el);
      return {
        display: s.display,
        position: s.position,
        width: s.width,
        height: s.height
      };
    });
    console.log("Slider CSS:", css);

    const dividerCss = await page.$eval(".before-after-style-divider", el => {
      const s = window.getComputedStyle(el);
      return {
        display: s.display,
        position: s.position,
        left: s.left,
        width: s.width,
        height: s.height,
        cursor: s.cursor
      };
    });
    console.log("Divider CSS:", dividerCss);

    const afterInnerCss = await page.$eval(".before-after-style-after", el => {
      const s = window.getComputedStyle(el);
      return {
        position: s.position,
        width: s.width,
        overflow: s.overflow
      };
    });
    console.log(".before-after-style-after CSS:", afterInnerCss);
  }

  console.log("\n=== 2. DIAGNOSING STATIC SERVICES SECTION ===");
  const staticSection = await page.$eval(".static-style-one-section", el => {
    return {
      innerHTMLSnippet: el.innerHTML.substring(0, 300),
      clientCounts: {
        services: el.querySelectorAll(".static-box-service-content").length,
        images: el.querySelectorAll(".static-box-image").length,
        timeWraps: el.querySelectorAll(".static-box-time-wrap").length
      }
    };
  });
  console.log("Static Section details:", staticSection);

  // Check how each of the 3 services is styled
  const serviceStyles = await page.$$eval(".static-box-service-content", els => {
    return els.map((el, i) => {
      const s = window.getComputedStyle(el);
      return {
        index: i,
        display: s.display,
        opacity: s.opacity,
        visibility: s.visibility,
        top: el.getBoundingClientRect().top
      };
    });
  });
  console.log("Services visibility/display:", serviceStyles);

  console.log("\n=== 3. DIAGNOSING BUTTON HOVER EFFECT ===");
  const btnLink = await page.$(".hero-one-button-wrap .button-link");
  if (btnLink) {
    const textNormal = await page.$eval(".hero-one-button-wrap .button-link-wrap", el => el.innerText);
    const arrowNormal = await page.$eval(".hero-one-button-wrap .button-arrow", el => window.getComputedStyle(el).transform);
    console.log("Hero Button Normal:", { text: textNormal, arrowTransform: arrowNormal });

    // Hover
    await btnLink.hover();
    await page.waitForTimeout(300);
    const textHover = await page.$eval(".hero-one-button-wrap .button-text-hover", el => window.getComputedStyle(el).transform);
    const arrowHover = await page.$eval(".hero-one-button-wrap .button-arrow-hover", el => window.getComputedStyle(el).transform);
    console.log("Hero Button Hovered:", { textHoverTransform: textHover, arrowHoverTransform: arrowHover });
  }

  console.log("\n=== 4. DIAGNOSING PRICING TABS ===");
  const pTabs = await page.$$eval(".pricing-tab", els => els.map(el => ({
    text: el.innerText.trim(),
    classes: el.className,
    tabAttr: el.getAttribute("data-w-tab")
  })));
  console.log("Pricing Tabs:", pTabs);

  console.log("\n=== 5. DIAGNOSING PROCESS SECTION TABS ===");
  const procTabs = await page.$$eval(".static-box-two-heading-box", els => els.map((el, i) => {
    const icon = el.querySelector(".static-box-two-heading-icon");
    const line = el.querySelector(".static-box-two-line");
    return {
      index: i,
      title: el.innerText.trim(),
      opacity: window.getComputedStyle(el).opacity,
      iconTransform: icon ? window.getComputedStyle(icon).transform : "none",
      lineWidth: line ? window.getComputedStyle(line).width : "none"
    };
  }));
  console.log("Process Tabs initial state:", procTabs);

  console.log("\n=== 6. DIAGNOSING TESTIMONIALS ===");
  const testTabs = await page.$$eval(".testimonial-two-client", els => els.map((el, i) => {
    return {
      index: i,
      name: el.innerText.trim(),
      opacity: window.getComputedStyle(el).opacity
    };
  }));
  console.log("Testimonial clients initial state:", testTabs);

  console.log("\n=== 7. DIAGNOSING FORMS SUBMISSION ===");
  const footerForm = await page.$("#wf-form-Footer-Form");
  if (footerForm) {
    const submitBtn = await page.$(".footer-form-submit");
    console.log("Footer form found, submit button present:", submitBtn !== null);
  }

  await browser.close();
}

diagnose().catch(e => console.error(e));
