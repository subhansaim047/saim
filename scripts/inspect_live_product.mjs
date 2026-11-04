import { chromium } from 'playwright';

async function inspectLiveProduct() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  console.log('Navigating to live product...');
  await page.goto('https://www.thejacketmaker.pk/products/ionic-black-leather-jacket', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(2000);

  // Take screenshot of live thumbnails
  const thumbsBox = await page.locator('.thumbnails').boundingBox();
  if (thumbsBox) {
    await page.screenshot({
      path: 'audit/live_thumbnails_rendered.png',
      clip: {
        x: Math.max(0, thumbsBox.x - 10),
        y: Math.max(0, thumbsBox.y - 10),
        width: Math.min(thumbsBox.width + 20, 300),
        height: Math.min(thumbsBox.height + 20, 800)
      }
    });
    console.log('Saved audit/live_thumbnails_rendered.png');
  }

  // Inspect live thumbnail markup
  const liveThumbs = await page.evaluate(() => {
    const thumbs = Array.from(document.querySelectorAll('.thumbnails a'));
    return thumbs.map(t => ({
      class: t.className,
      href: t.href,
      html: t.outerHTML
    }));
  });

  console.log('Total live thumbnails:', liveThumbs.length);
  if (liveThumbs.length > 0) {
    console.log('Live Thumb 0:', liveThumbs[0].html);
    // Find video thumb
    const vThumb = liveThumbs.find(t => t.html.includes('watchvideo') || t.html.includes('video'));
    if (vThumb) {
      console.log('Live Video Thumb:', vThumb.html);
    }
  }

  // Inspect how live video behaves
  const liveVideoInfo = await page.evaluate(() => {
    const v = document.querySelector('video');
    return v ? {
      paused: v.paused,
      currentTime: v.currentTime,
      src: v.currentSrc || v.src,
      outerHTML: v.outerHTML.slice(0, 300)
    } : 'No video on page load';
  });
  console.log('Live video on load:', liveVideoInfo);

  // Click live video thumbnail
  const videoThumb = page.locator('.thumbnail--media-video, .thumbnails a:has(.watchvideo)').first();
  if (await videoThumb.count() > 0) {
    await videoThumb.click();
    await page.waitForTimeout(2000);
    const afterClick = await page.evaluate(() => {
      const v = document.querySelector('video');
      return v ? {
        paused: v.paused,
        currentTime: v.currentTime,
        src: v.currentSrc || v.src,
        display: window.getComputedStyle(v).display,
        visibility: window.getComputedStyle(v).visibility
      } : 'No video after click';
    });
    console.log('Live video after thumbnail click:', afterClick);
    await page.screenshot({ path: 'audit/live_product_video_playing.png' });
    console.log('Saved audit/live_product_video_playing.png');
  }

  await browser.close();
}

inspectLiveProduct().catch(console.error);
