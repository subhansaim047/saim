const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.mp4': 'video/mp4',
  '.svg': 'image/svg+xml'
};

const server = http.createServer((req, res) => {
  let reqPath = decodeURI(req.url.split('?')[0]);
  if (reqPath.endsWith('/')) reqPath += 'index.html';
  const filePath = path.join(process.cwd(), 'public', reqPath);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(0, async () => {
  const port = server.address().port;
  console.log('Test server running on port:', port);
  const browser = await chromium.launch({ headless: true });

  const testHandles = [
    'ionic-black-leather-jacket',
    'dean-brown-leather-biker-jacket',
    'bliss-black-leather-bomber-jacket'
  ];

  for (const handle of testHandles) {
    const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
    const url = 'http://127.0.0.1:' + port + '/thejacketmaker/products/' + handle + '/index.html';
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1000);

    const gallery = page.locator('.gallery, .product-detail .gallery').first();
    const outPath = 'C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4/proof_gallery_' + handle + '.png';
    await gallery.screenshot({ path: outPath });
    console.log('Saved gallery screenshot for:', handle);

    // Check video thumbnail click
    const videoThumb = page.locator('.thumbnails a[data-media-type="video"], .thumbnails .thumbnail--media-video, .thumbnails a:has(.watchvideo)').first();
    if (await videoThumb.count() > 0) {
      await videoThumb.click();
      await page.waitForTimeout(1500);
      const isVideoPlaying = await page.evaluate(() => {
        const vid = document.querySelector('.gallery video');
        if (!vid) return 'No video tag in gallery';
        return {
          paused: vid.paused,
          currentTime: vid.currentTime,
          duration: vid.duration,
          src: vid.currentSrc
        };
      });
      console.log('Video status for', handle, ':', JSON.stringify(isVideoPlaying));
      const videoOutPath = 'C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4/proof_video_' + handle + '.png';
      await gallery.screenshot({ path: videoOutPath });
      console.log('Saved video screenshot for:', handle);
    }

    await page.close();
  }

  await browser.close();
  server.close();
  console.log('Verification complete.');
});
