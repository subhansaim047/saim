import { chromium } from 'playwright';
import fs from 'fs';

async function main() {
  console.log('Launching browser to inspect https://www.thejacketmaker.pk/ ...');
  const browser = await chromium.launch({ headless: true });
  
  // Desktop
  const desktopContext = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36'
  });
  const page = await desktopContext.newPage();

  const requests = [];
  page.on('request', req => {
    requests.push({
      url: req.url(),
      resourceType: req.resourceType()
    });
  });

  try {
    await page.goto('https://www.thejacketmaker.pk/', { waitUntil: 'load', timeout: 35000 });
    await page.waitForTimeout(3000);

    const title = await page.title();
    console.log('Page Title:', title);

    // Save full HTML
    const html = await page.content();
    fs.writeFileSync('audit/tjm_home_rendered.html', html, 'utf-8');
    console.log('Saved audit/tjm_home_rendered.html, size:', html.length);

    // Take desktop screenshot
    await page.screenshot({ path: 'audit/tjm_live_desktop.png', fullPage: false });
    console.log('Saved audit/tjm_live_desktop.png');

    // Extract navigation links
    const navLinks = await page.evaluate(() => {
      const links = [];
      document.querySelectorAll('header a, nav a, .menu a, .header a').forEach(a => {
        const text = a.innerText.trim();
        const href = a.getAttribute('href');
        if (text && href) links.push({ text, href });
      });
      return links;
    });
    console.log('Extracted Nav Links Count:', navLinks.length);
    fs.writeFileSync('audit/tjm_nav_links.json', JSON.stringify(navLinks, null, 2));

    // Mobile Screenshot
    const mobileContext = await browser.newContext({
      viewport: { width: 390, height: 844 },
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)'
    });
    const mobilePage = await mobileContext.newPage();
    await mobilePage.goto('https://www.thejacketmaker.pk/', { waitUntil: 'load', timeout: 35000 });
    await mobilePage.waitForTimeout(2000);
    await mobilePage.screenshot({ path: 'audit/tjm_live_mobile.png', fullPage: false });
    console.log('Saved audit/tjm_live_mobile.png');

    // Summarize requests
    const cssReqs = requests.filter(r => r.resourceType === 'stylesheet' || r.url.includes('.css'));
    const jsReqs = requests.filter(r => r.resourceType === 'script' || r.url.includes('.js'));
    const fontReqs = requests.filter(r => r.resourceType === 'font' || r.url.includes('.woff') || r.url.includes('.ttf'));
    const imgReqs = requests.filter(r => r.resourceType === 'image');

    console.log('Asset counts:', {
      css: cssReqs.length,
      js: jsReqs.length,
      fonts: fontReqs.length,
      images: imgReqs.length
    });

    fs.writeFileSync('audit/tjm_requests.json', JSON.stringify({
      css: cssReqs.map(r => r.url),
      js: jsReqs.map(r => r.url),
      fonts: fontReqs.map(r => r.url),
      images: imgReqs.map(r => r.url)
    }, null, 2));

  } catch (err) {
    console.error('Error visiting thejacketmaker.pk:', err);
  } finally {
    await browser.close();
  }
}

main();
