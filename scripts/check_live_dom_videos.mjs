import { chromium } from 'playwright';

async function checkLive() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://www.thejacketmaker.pk/collections/mens-leather-jackets', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(3000);

  // Check all videos in live DOM
  const videos = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('video')).map(v => ({
      src: v.src || v.querySelector('source')?.src,
      currentSrc: v.currentSrc,
      outerHTML: v.outerHTML.slice(0, 300),
      parentClass: v.parentElement?.className
    }));
  });
  console.log('Live DOM videos count:', videos.length);
  console.log('Videos:', JSON.stringify(videos, null, 2));

  // Check if product cards have video elements or video data
  const cardData = await page.evaluate(() => {
    const cards = Array.from(document.querySelectorAll('.product-block, .product-card, [data-product-id]'));
    return cards.slice(0, 5).map(c => ({
      html: c.innerHTML.slice(0, 500),
      hasVideo: !!c.querySelector('video'),
      hasHover: !!c.querySelector('.product-block__image--secondary, .hover-image, .rimage-second-image')
    }));
  });
  console.log('Card data sample (5):', JSON.stringify(cardData, null, 2));

  // Also check product page
  await page.goto('https://www.thejacketmaker.pk/products/ionic-black-leather-jacket', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(3000);
  const prodVideos = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('video')).map(v => ({
      src: v.src || v.querySelector('source')?.src,
      currentSrc: v.currentSrc,
      outerHTML: v.outerHTML.slice(0, 300),
      parentClass: v.parentElement?.className,
      paused: v.paused
    }));
  });
  console.log('Live Product Page videos count:', prodVideos.length);
  console.log('Product Videos:', JSON.stringify(prodVideos, null, 2));

  await browser.close();
}

checkLive().catch(console.error);
