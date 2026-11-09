const { chromium } = require("playwright");

(async () => {
  console.log("=== VERIFYING SUBPAGES & MOBILE BEHAVIOR ===");
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  // 1. Verify contact page form
  console.log("\n1. Testing contact page form submission...");
  await page.goto("http://localhost:3008/demos/woshico/contact.html", { waitUntil: "networkidle" });
  await page.fill("#Name-4", "Subhan Tester");
  await page.fill("#Email-8", "subhan@example.com");
  await page.fill("#Phone-4", "4045878565");
  await page.fill("#Comment", "Looking for showroom detailing appointment.");
  await page.click(".contact-form-btn");
  await page.waitForTimeout(1000);
  const done = await page.$eval(".contact-form .w-form-done", el => el.style.display === "block" || el.offsetHeight > 0);
  console.log("Contact form submission -> w-form-done visible:", done);

  // 2. Check all buttons on pricing-plan.html
  console.log("\n2. Testing pricing-plan.html buttons...");
  await page.goto("http://localhost:3008/demos/woshico/pricing-plan.html", { waitUntil: "networkidle" });
  const pricingButtons = await page.$$eval(".button-link", btns => btns.map(b => ({
    text: b.innerText.trim().replace(/\n/g, " "),
    href: b.getAttribute("href")
  })));
  console.log(`Found ${pricingButtons.length} buttons on pricing page:`);
  pricingButtons.slice(0, 5).forEach(b => console.log(` - Text: "${b.text}", href: ${b.href}`));

  // 3. Test Mobile (375px) on index.html
  console.log("\n3. Testing 375px mobile viewport on index.html...");
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("http://localhost:3008/demos/woshico/index.html", { waitUntil: "networkidle" });
  const scrollWidthIndex = await page.evaluate(() => document.documentElement.scrollWidth);
  const clientWidthIndex = await page.evaluate(() => document.documentElement.clientWidth);
  console.log(`Mobile index.html: scrollWidth = ${scrollWidthIndex}, clientWidth = ${clientWidthIndex}, Overflow: ${scrollWidthIndex > clientWidthIndex ? "YES" : "NO"}`);

  // 4. Test Mobile (375px) on contact.html
  console.log("\n4. Testing 375px mobile viewport on contact.html...");
  await page.goto("http://localhost:3008/demos/woshico/contact.html", { waitUntil: "networkidle" });
  const scrollWidthContact = await page.evaluate(() => document.documentElement.scrollWidth);
  const clientWidthContact = await page.evaluate(() => document.documentElement.clientWidth);
  console.log(`Mobile contact.html: scrollWidth = ${scrollWidthContact}, clientWidth = ${clientWidthContact}, Overflow: ${scrollWidthContact > clientWidthContact ? "YES" : "NO"}`);

  await browser.close();
  console.log("\n=== ALL SUBPAGE & MOBILE CHECKS COMPLETED! ===");
})();
