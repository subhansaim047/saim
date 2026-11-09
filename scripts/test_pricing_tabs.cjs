const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto("http://localhost:3008/demos/woshico/pricing-plan.html", { waitUntil: "networkidle" });

  const tabLinks = await page.$$(".pricing-tab");
  console.log("Tab links found:", tabLinks.length);

  // Click tab 2
  await tabLinks[1].click();
  await page.waitForTimeout(400);
  const pane2Active = await page.$eval(".pricing-tab-content-wrap[data-w-tab='Tab 2']", el => el.classList.contains("w--tab-active") || el.style.display !== "none");
  console.log("Tab 2 active after click:", pane2Active);

  // Click tab 3
  await tabLinks[2].click();
  await page.waitForTimeout(400);
  const pane3Active = await page.$eval(".pricing-tab-content-wrap[data-w-tab='Tab 3']", el => el.classList.contains("w--tab-active") || el.style.display !== "none");
  console.log("Tab 3 active after click:", pane3Active);

  await browser.close();
})();
