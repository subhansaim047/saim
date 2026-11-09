const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto("http://localhost:3008/demos/woshico/faq-page.html", { waitUntil: "networkidle" });

  const toggles = await page.$$(".accordian-title-wrap");
  console.log("Accordion toggles found:", toggles.length);

  const initialHeight = await page.$eval(".accordian-desc-wrap", el => ({
    height: el.style.height,
    offsetHeight: el.offsetHeight,
    display: window.getComputedStyle(el).display
  }));
  console.log("Initial state of item 0:", initialHeight);

  // Click toggle 0
  await toggles[0].click();
  await page.waitForTimeout(600);

  const afterClick = await page.$eval(".accordian-desc-wrap", el => ({
    height: el.style.height,
    offsetHeight: el.offsetHeight,
    display: window.getComputedStyle(el).display,
    isOpen: el.classList.contains("w--open")
  }));
  console.log("After clicking item 0:", afterClick);

  await browser.close();
})();
