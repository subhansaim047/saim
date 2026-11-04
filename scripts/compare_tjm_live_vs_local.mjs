import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

async function run() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
  });

  console.log("Analyzing live site: https://www.thejacketmaker.pk/");
  const livePage = await context.newPage();
  try {
    await livePage.goto('https://www.thejacketmaker.pk/', { waitUntil: 'networkidle', timeout: 30000 });
  } catch (e) {
    console.log("Live page load warning/timeout:", e.message);
  }

  // Scroll down smoothly to trigger all lazyloads on live
  await livePage.evaluate(async () => {
    for (let i = 0; i < document.body.scrollHeight; i += 800) {
      window.scrollTo(0, i);
      await new Promise(r => setTimeout(r, 200));
    }
    window.scrollTo(0, 0);
  });
  await livePage.waitForTimeout(1500);

  const liveInfo = await livePage.evaluate(() => {
    const sections = Array.from(document.querySelectorAll('section, main > div, header, footer')).map(el => ({
      tag: el.tagName,
      id: el.id,
      className: el.className,
      textPreview: el.innerText.slice(0, 100).replace(/\s+/g, ' ')
    }));

    const images = Array.from(document.querySelectorAll('img')).map(img => ({
      src: img.src,
      dataSrc: img.getAttribute('data-src'),
      naturalWidth: img.naturalWidth,
      naturalHeight: img.naturalHeight,
      visible: img.offsetWidth > 0 && img.offsetHeight > 0,
      alt: img.alt
    }));

    const navItems = Array.from(document.querySelectorAll('nav a, header a')).map(a => ({
      text: a.innerText.trim(),
      href: a.href
    })).filter(a => a.text.length > 0);

    return {
      title: document.title,
      sectionCount: sections.length,
      sections,
      imageCount: images.length,
      visibleImages: images.filter(i => i.visible && i.naturalWidth > 0).length,
      brokenImages: images.filter(i => i.visible && i.naturalWidth === 0).length,
      navItems: navItems.slice(0, 25)
    };
  });

  await livePage.screenshot({ path: 'audit/comparison_live_full.png', fullPage: true });
  console.log("Captured live full screenshot to audit/comparison_live_full.png");

  console.log("\nAnalyzing local clone: http://localhost:3891/thejacketmaker/index.html");
  const localPage = await context.newPage();
  await localPage.goto('http://localhost:3891/thejacketmaker/index.html', { waitUntil: 'load', timeout: 30000 });

  // Scroll down smoothly to trigger any lazyloads on local
  await localPage.evaluate(async () => {
    for (let i = 0; i < document.body.scrollHeight; i += 800) {
      window.scrollTo(0, i);
      await new Promise(r => setTimeout(r, 200));
    }
    window.scrollTo(0, 0);
  });
  await localPage.waitForTimeout(1500);

  const localInfo = await localPage.evaluate(() => {
    const sections = Array.from(document.querySelectorAll('section, main > div, header, footer')).map(el => ({
      tag: el.tagName,
      id: el.id,
      className: el.className,
      textPreview: el.innerText.slice(0, 100).replace(/\s+/g, ' ')
    }));

    const images = Array.from(document.querySelectorAll('img')).map(img => ({
      src: img.src,
      dataSrc: img.getAttribute('data-src'),
      naturalWidth: img.naturalWidth,
      naturalHeight: img.naturalHeight,
      visible: img.offsetWidth > 0 && img.offsetHeight > 0,
      alt: img.alt
    }));

    const navItems = Array.from(document.querySelectorAll('nav a, header a')).map(a => ({
      text: a.innerText.trim(),
      href: a.href
    })).filter(a => a.text.length > 0);

    return {
      title: document.title,
      sectionCount: sections.length,
      sections,
      imageCount: images.length,
      visibleImages: images.filter(i => i.visible && i.naturalWidth > 0).length,
      brokenImages: images.filter(i => i.visible && i.naturalWidth === 0).length,
      navItems: navItems.slice(0, 25)
    };
  });

  await localPage.screenshot({ path: 'audit/comparison_local_full.png', fullPage: true });
  console.log("Captured local full screenshot to audit/comparison_local_full.png");

  fs.writeFileSync('audit/comparison_results.json', JSON.stringify({ live: liveInfo, local: localInfo }, null, 2));

  console.log("\n--- Comparison Summary ---");
  console.log(`Live Title: "${liveInfo.title}"`);
  console.log(`Local Title: "${localInfo.title}"`);
  console.log(`Live Images: total=${liveInfo.imageCount}, visibleWithWidth=${liveInfo.visibleImages}, broken=${liveInfo.brokenImages}`);
  console.log(`Local Images: total=${localInfo.imageCount}, visibleWithWidth=${localInfo.visibleImages}, broken=${localInfo.brokenImages}`);

  // Test interactive elements on local
  console.log("\nTesting interactions on local:");
  // Check if mega menu triggers on hover
  const menLink = await localPage.$('header a:has-text("MEN"), nav a:has-text("MEN")');
  if (menLink) {
    await menLink.hover();
    await localPage.waitForTimeout(500);
    const megaMenuVisible = await localPage.evaluate(() => {
      const mega = document.querySelector('.mega-menu, .sub-menu, .dropdown-menu, [class*="megamenu"], [class*="dropdown"]');
      if (!mega) return false;
      const style = window.getComputedStyle(mega);
      return style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0';
    });
    console.log("Hover on 'MEN' -> Mega menu visible:", megaMenuVisible);
    await localPage.screenshot({ path: 'audit/test_local_hover_men.png' });
  }

  // Check if bestsellers slider or tabs exist
  const bestSellerTabs = await localPage.$$('.tabs li, [data-tab], .tab-title, button:has-text("Men"), button:has-text("Women")');
  console.log("Found tab buttons count:", bestSellerTabs.length);

  await browser.close();
}

run().catch(console.error);
