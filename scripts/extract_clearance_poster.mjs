import { chromium } from 'playwright';
import path from 'path';

async function extractFrame() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 800, height: 800 } });
  
  const videoPath = path.resolve('public/thejacketmaker/videos/clearance-sale.mp4').replace(/\\/g, '/');
  
  await page.setContent(`
    <!DOCTYPE html>
    <html>
    <body style="margin:0;padding:0;overflow:hidden;background:#000;">
      <video id="vid" src="file:///${videoPath}" autoplay muted style="width:100%;height:100%;object-fit:cover;"></video>
    </body>
    </html>
  `);
  
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'public/thejacketmaker/images/clearance-sale-poster.jpg' });
  console.log('Saved public/thejacketmaker/images/clearance-sale-poster.jpg');
  
  await browser.close();
}

extractFrame().catch(console.error);
