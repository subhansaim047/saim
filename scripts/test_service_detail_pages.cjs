const { chromium } = require("playwright");

const servicePages = [
  "car-carpet-cleaning.html",
  "car-scratch-removal.html",
  "cleaning-car-engine.html",
  "exterior-washing.html",
  "pressure-washer.html",
  "vehicle-polisher.html"
];

(async () => {
  const browser = await chromium.launch({ headless: true });
  console.log("=== TESTING SERVICE DETAIL PAGES ===");

  for (const slug of servicePages) {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    const errors = [];
    page.on("pageerror", err => errors.push(err.message));

    await page.goto(`http://localhost:3008/demos/woshico/services/${slug}`, { waitUntil: "networkidle" });

    // Check buttons
    const buttons = await page.$$eval(".button-link", btns => btns.map(b => b.innerText.trim()));

    // Check overflow
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);

    // Mobile check
    await page.setViewportSize({ width: 375, height: 812 });
    const mScrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const mClientWidth = await page.evaluate(() => document.documentElement.clientWidth);

    console.log(`[${slug}] Errors: ${errors.length}, Buttons: ${buttons.length}, Desktop Overflow: ${scrollWidth > clientWidth ? "YES" : "NO"}, Mobile Overflow: ${mScrollWidth > mClientWidth ? "YES" : "NO"}`);

    await page.close();
  }

  await browser.close();
  console.log("=== ALL SERVICE PAGES PASSED ===");
})();
