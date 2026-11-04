import { chromium } from 'playwright';
import http from 'http';
import fs from 'fs';
import path from 'path';

function createServer(port) {
  const root = path.resolve('.');
  const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.mjs': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.webp': 'image/webp',
    '.mp4': 'video/mp4'
  };

  const server = http.createServer((req, res) => {
    let reqPath = decodeURI(req.url.split('?')[0]);
    if (reqPath.endsWith('/')) reqPath += 'index.html';
    
    let filePath = path.join(root, 'public', reqPath);
    if (!fs.existsSync(filePath)) {
      filePath = path.join(root, reqPath);
    }

    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      const mime = mimeTypes[ext] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': mime, 'Access-Control-Allow-Origin': '*' });
      fs.createReadStream(filePath).pipe(res);
    } else {
      res.writeHead(404);
      res.end('Not Found');
    }
  });

  return new Promise((resolve) => {
    server.listen(port, () => resolve(server));
  });
}

async function testRandomProducts() {
  const PORT = 3894;
  const server = await createServer(PORT);
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  const testHandles = [
    'ionic-black-leather-jacket',
    'bliss-black-leather-bomber-jacket',
    'air-rolf-brown-leather-bomber-jacket',
    'dean-brown-leather-biker-jacket',
    'rave-black-leather-biker-jacket'
  ];

  for (const h of testHandles) {
    console.log(`\n================ Testing Product: ${h} ================`);
    const consoleLogs = [];
    page.on('console', msg => consoleLogs.push(msg.text()));

    await page.goto(`http://localhost:${PORT}/thejacketmaker/products/${h}/index.html`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1000);

    // Check thumbnail alt text visibility
    const thumbAltIssue = await page.evaluate(() => {
      const thumbs = Array.from(document.querySelectorAll('.thumbnails a'));
      return thumbs.map(t => {
        const img = t.querySelector('img');
        if (!img) return null;
        const rect = img.getBoundingClientRect();
        return {
          alt: img.alt,
          src: img.src,
          naturalWidth: img.naturalWidth,
          hasBg: !!img.style.backgroundImage,
          rect: { width: rect.width, height: rect.height }
        };
      });
    });
    console.log(`Thumbnail images in ${h}:`, JSON.stringify(thumbAltIssue.slice(0, 3), null, 2));

    // Check video slide & video element
    const videoInfo = await page.evaluate(() => {
      const vids = Array.from(document.querySelectorAll('video'));
      const videoSlide = document.querySelector('.product-media--video');
      const vTemplate = document.querySelector('script.product-media__video-template');
      return {
        videoCount: vids.length,
        hasVideoSlide: !!videoSlide,
        hasTemplate: !!vTemplate,
        firstVideoSrc: vids.length > 0 ? (vids[0].src || vids[0].querySelector('source')?.src) : null,
        firstVideoPaused: vids.length > 0 ? vids[0].paused : null,
        firstVideoReadyState: vids.length > 0 ? vids[0].readyState : null
      };
    });
    console.log(`Video status before click in ${h}:`, videoInfo);

    // Click the video thumbnail
    const videoThumb = page.locator('.thumbnail--media-video, .thumbnails a:has(.watchvideo)').first();
    if (await videoThumb.count() > 0) {
      await videoThumb.click();
      await page.waitForTimeout(2000);

      const afterClick = await page.evaluate(() => {
        const v = document.querySelector('video');
        return v ? {
          paused: v.paused,
          currentTime: v.currentTime,
          duration: v.duration,
          error: v.error ? v.error.message : null,
          display: window.getComputedStyle(v).display,
          visibility: window.getComputedStyle(v).visibility,
          width: v.clientWidth,
          height: v.clientHeight
        } : 'No video found';
      });
      console.log(`Video status after clicking thumbnail in ${h}:`, afterClick);

      // Screenshot the product gallery
      await page.screenshot({ path: `audit/test_video_${h}.png` });
      console.log(`Saved audit/test_video_${h}.png`);
    } else {
      console.log(`NO VIDEO THUMBNAIL FOUND for ${h}!`);
    }
  }

  await browser.close();
  server.close();
}

testRandomProducts();
