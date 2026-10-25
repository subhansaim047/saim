const { chromium } = require('playwright');
const path = require('path');

async function renderMobile() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 375, height: 812 } });

  const posterPath = path.resolve(__dirname, '../public/videos/benefits-poster.webp').replace(/\\/g, '/');

  const html = `
<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-black text-white p-4">
  <div class="relative h-[380px] rounded-2xl bg-neutral-950 overflow-hidden flex flex-col">
    <div class="relative w-full overflow-hidden h-[54%] flex items-center justify-center bg-black pt-2">
      <img src="file:///${posterPath}" class="w-full h-full object-contain block" />
      <div class="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-neutral-950"></div>
    </div>
    <div class="flex-1 flex flex-col justify-center p-6 pt-1">
      <h3 class="text-white text-xl font-light leading-tight text-left">
        Performance, Speed &<br />SEO Optimization
      </h3>
      <p class="mt-3 text-[13px] leading-relaxed text-white/70 font-light max-w-[320px]">
        Sub-second Next.js architecture, optimised Core Web Vitals, and structured schema markup engineered to rank on Google.
      </p>
    </div>
  </div>
</body>
</html>
  `;

  await page.setContent(html, { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  const outPath = path.resolve('C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4/fixed_mobile_card2.png');
  await page.screenshot({ path: outPath, fullPage: true });
  console.log('Saved mobile test screenshot to:', outPath);
  await browser.close();
}

renderMobile().catch(console.error);
