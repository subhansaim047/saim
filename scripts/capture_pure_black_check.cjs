const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 }
  });

  await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });

  // Evaluate background color of body, hero, about, performance, pricing, faq, contact
  const bgStyles = await page.evaluate(() => {
    const getBg = (sel) => {
      const el = document.querySelector(sel);
      return el ? window.getComputedStyle(el).backgroundColor : "not found";
    };
    return {
      body: getBg("body"),
      main: getBg("main"),
      hero: getBg("section"),
      about: getBg("#our-story"),
      benefits: getBg("#benefits"),
      performance: getBg("section.text-white"),
      process: getBg("#process"),
      pricing: getBg("#pricing"),
      faq: getBg("#faq"),
      contact: getBg("#contact"),
      footer: getBg(".site-footer"),
    };
  });

  console.log("Computed Background Colors:", JSON.stringify(bgStyles, null, 2));

  // Take screenshot of hero & top
  await page.screenshot({ path: "scripts/pure_black_top.png" });

  // Scroll to pricing & faq
  await page.locator("#pricing").scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.screenshot({ path: "scripts/pure_black_pricing.png" });

  await browser.close();
  console.log("Screenshots captured successfully!");
})();
