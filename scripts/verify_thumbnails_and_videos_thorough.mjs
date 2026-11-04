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
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.webp': 'image/webp',
    '.mp4': 'video/mp4'
  };

  const server = http.createServer((req, res) => {
    let reqPath = decodeURI(req.url.split('?')[0]);
    if (reqPath.endsWith('/')) reqPath += 'index.html';
    let filePath = path.join(root, 'public', reqPath);
    if (!fs.existsSync(filePath)) filePath = path.join(root, reqPath);

    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream', 'Access-Control-Allow-Origin': '*' });
      fs.createReadStream(filePath).pipe(res);
    } else {
      res.writeHead(404);
      res.end('Not Found');
    }
  });

  return new Promise((resolve) => server.listen(port, () => resolve(server)));
}

async function verifyAll() {
  const server = await createServer(0);
  const PORT = server.address().port;
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  const testHandles = [
    'ionic-black-leather-jacket',
    'bliss-black-leather-bomber-jacket',
    'air-rolf-brown-leather-bomber-jacket',
    'dean-brown-leather-biker-jacket',
    'rave-black-leather-biker-jacket'
  ];

  const results = [];

  for (const handle of testHandles) {
    console.log(`\n================ Testing Product: ${handle} ================`);
    await page.goto(`http://localhost:${PORT}/thejacketmaker/products/${handle}/index.html`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(2000);

    // 1. Inspect Thumbnails
    const thumbData = await page.evaluate(() => {
      const thumbs = Array.from(document.querySelectorAll('.thumbnails a'));
      return thumbs.map(t => {
        const img = t.querySelector('img');
        const wv = t.querySelector('.watchvideo');
        return {
          hasImg: !!img,
          src: img ? img.src : null,
          naturalWidth: img ? img.naturalWidth : 0,
          naturalHeight: img ? img.naturalHeight : 0,
          alt: img ? img.alt : null,
          hasWatchVideo: !!wv,
          wvText: wv ? wv.textContent.trim() : null
        };
      });
    });

    console.log(`Thumbnails found: ${thumbData.length}`);
    console.log(`Sample thumbnail 0:`, thumbData[0]);
    const videoThumbIdx = thumbData.findIndex(t => t.hasWatchVideo);
    console.log(`Video thumbnail index: ${videoThumbIdx}, data:`, thumbData[videoThumbIdx]);

    // Screenshot thumbnails specifically
    const thumbContainer = await page.$('.thumbnails');
    if (thumbContainer) {
      await thumbContainer.screenshot({ path: `audit/verify_thumbs_${handle}.png` });
      console.log(`Saved audit/verify_thumbs_${handle}.png`);
    }

    // 2. Click Video Thumbnail and verify video playback
    const vThumbLink = page.locator('.thumbnails a:has(.watchvideo), .thumbnails a.thumbnail--media-video').first();
    await vThumbLink.click();
    await page.waitForTimeout(2000);

    const videoStatus = await page.evaluate(() => {
      const v = document.querySelector('.product-slideshow video');
      return v ? {
        src: v.currentSrc || v.src || v.querySelector('source')?.src,
        paused: v.paused,
        currentTime: v.currentTime,
        duration: v.duration,
        readyState: v.readyState,
        width: v.clientWidth,
        height: v.clientHeight
      } : null;
    });

    console.log(`Video Playback Status in ${handle}:`, videoStatus);

    // Screenshot the playing video in the main gallery
    await page.screenshot({ path: `audit/verify_video_${handle}.png` });
    console.log(`Saved audit/verify_video_${handle}.png`);

    results.push({
      handle,
      thumbsValid: thumbData.every(t => t.hasImg && t.src && t.naturalWidth > 0 && (!t.alt || t.alt === '')),
      videoPlaying: videoStatus && !videoStatus.paused && videoStatus.currentTime > 0
    });
  }

  console.log('\n================ FINAL SUMMARY ================');
  console.log(JSON.stringify(results, null, 2));

  await browser.close();
  server.close();
}

verifyAll().catch(console.error);
