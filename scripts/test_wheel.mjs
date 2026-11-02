import { chromium } from "playwright";

async function testUserScroll() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  console.log("Loading page...");
  await page.goto("http://localhost:3015", { waitUntil: "networkidle" });
  await page.waitForTimeout(2000);

  // Monitor canvas changes and log console
  page.on("console", msg => console.log("BROWSER LOG:", msg.text()));

  // Check state before wheel
  const beforeWheel = await page.evaluate(() => {
    return {
      scrollY: window.scrollY,
      lenisProgress: window.__lenis?.progress,
      scrollHeight: document.documentElement.scrollHeight,
      innerHeight: window.innerHeight,
    };
  });
  console.log("Before wheel:", beforeWheel);

  // Simulate user mouse wheeling down 10 times (like spinning the mouse wheel)
  for (let i = 0; i < 10; i++) {
    await page.mouse.wheel(0, 500); // 500px scroll per wheel tick
    await page.waitForTimeout(100);
  }

  await page.waitForTimeout(1000);

  const afterWheel = await page.evaluate(() => {
    return {
      scrollY: window.scrollY,
      lenisProgress: window.__lenis?.progress,
    };
  });
  console.log("After 10 wheel ticks:", afterWheel);

  await browser.close();
}

testUserScroll().catch(console.error);
