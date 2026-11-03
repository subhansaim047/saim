import { chromium } from 'playwright';
import fs from 'fs';

async function main() {
  console.log('Launching browser to inspect idreesleather.com...');
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 }
  });

  try {
    await page.goto('https://idreesleather.com/', { waitUntil: 'networkidle', timeout: 30000 });
  } catch (e) {
    console.log('Networkidle timeout, continuing with current state...');
  }

  await page.waitForTimeout(3000);

  const title = await page.title();
  console.log('Page Title:', title);

  // Take screenshot of desktop
  await page.screenshot({ path: 'audit/idrees_desktop.png', fullPage: true });
  console.log('Saved audit/idrees_desktop.png');

  // Take mobile screenshot
  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'audit/idrees_mobile.png', fullPage: true });
  console.log('Saved audit/idrees_mobile.png');

  // Extract navigation links
  await page.setViewportSize({ width: 1440, height: 900 });
  const links = await page.$$eval('a', anchors => {
    return Array.from(new Set(anchors.map(a => a.href).filter(h => h.includes('idreesleather.com'))));
  });
  console.log('Internal links found:', links.length);
  console.log('Links preview:', links.slice(0, 20));

  // Extract page HTML
  const html = await page.content();
  fs.writeFileSync('audit/idrees_raw.html', html, 'utf-8');
  console.log('Saved audit/idrees_raw.html (' + html.length + ' chars)');

  await browser.close();
  console.log('Done inspection!');
}

main().catch(err => {
  console.error('Inspection failed:', err);
  process.exit(1);
});
