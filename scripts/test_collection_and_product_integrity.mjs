import { chromium } from 'playwright';

async function testOthers() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  // 1. Collection Page
  console.log("\nAuditing Collection: /thejacketmaker/collections/mens-leather-jackets/index.html");
  await page.goto('http://localhost:3891/thejacketmaker/collections/mens-leather-jackets/index.html', { waitUntil: 'load' });
  await page.evaluate(() => window.scrollTo(0, 1500));
  await page.waitForTimeout(1000);
  const colAudit = await page.evaluate(() => {
    const imgs = Array.from(document.querySelectorAll('img'));
    return {
      total: imgs.length,
      broken: imgs.filter(i => i.offsetWidth > 0 && i.naturalWidth === 0).length,
      zeroOpacity: imgs.filter(i => i.offsetWidth > 0 && window.getComputedStyle(i).opacity === '0').length
    };
  });
  console.log("Collection audit:", colAudit);

  // 2. Product Detail Page
  console.log("\nAuditing Product: /thejacketmaker/products/ionic-black-leather-jacket/index.html");
  await page.goto('http://localhost:3891/thejacketmaker/products/ionic-black-leather-jacket/index.html', { waitUntil: 'load' });
  await page.waitForTimeout(1000);
  const prodAudit = await page.evaluate(() => {
    const imgs = Array.from(document.querySelectorAll('img'));
    return {
      total: imgs.length,
      broken: imgs.filter(i => i.offsetWidth > 0 && i.naturalWidth === 0).length,
      zeroOpacity: imgs.filter(i => i.offsetWidth > 0 && window.getComputedStyle(i).opacity === '0').length
    };
  });
  console.log("Product audit:", prodAudit);

  // 3. Custom Leather Jackets Page
  console.log("\nAuditing Custom Page: /thejacketmaker/pages/custom-leather-jackets/index.html");
  await page.goto('http://localhost:3891/thejacketmaker/pages/custom-leather-jackets/index.html', { waitUntil: 'load' });
  await page.waitForTimeout(1000);
  const customAudit = await page.evaluate(() => {
    const imgs = Array.from(document.querySelectorAll('img'));
    return {
      total: imgs.length,
      broken: imgs.filter(i => i.offsetWidth > 0 && i.naturalWidth === 0).length,
      zeroOpacity: imgs.filter(i => i.offsetWidth > 0 && window.getComputedStyle(i).opacity === '0').length
    };
  });
  console.log("Custom page audit:", customAudit);

  await browser.close();
}

testOthers().catch(console.error);
