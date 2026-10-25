const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

async function testVideoOptions() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });

  const posterPath = path.resolve(__dirname, '../public/videos/benefits-poster.webp').replace(/\\/g, '/');

  const html = `
<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-black text-white p-8">
  <div class="grid grid-cols-3 gap-6 max-w-[1300px] mx-auto">
    
    <!-- Option 1: Current cropped (for comparison) -->
    <div class="relative h-[460px] rounded-2xl bg-neutral-950 overflow-hidden flex flex-col border border-red-500/30">
      <div class="text-[11px] text-red-400 p-2 absolute top-0 left-0 z-20 bg-black/80 font-mono">Current: object-cover (Clipped)</div>
      <div class="relative w-full overflow-hidden h-[50%] bg-black">
        <img src="file:///${posterPath}" class="w-full h-full object-cover block" />
        <div class="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-neutral-950"></div>
      </div>
      <div class="flex-1 flex flex-col justify-center p-6 sm:p-8">
        <h3 class="text-white text-xl sm:text-2xl font-light leading-tight text-left">
          Performance, Speed &<br />SEO Optimization
        </h3>
        <p class="mt-3 text-[13px] sm:text-[14px] leading-relaxed text-white/70 font-light max-w-[320px]">
          Sub-second Next.js architecture, optimised Core Web Vitals, and structured schema markup engineered to rank on Google.
        </p>
      </div>
    </div>

    <!-- Option 2: object-contain with h-[55%] -->
    <div class="relative h-[460px] rounded-2xl bg-neutral-950 overflow-hidden flex flex-col border border-emerald-500/30">
      <div class="text-[11px] text-emerald-400 p-2 absolute top-0 left-0 z-20 bg-black/80 font-mono">Option 2: object-contain (h-[55%] pt-3)</div>
      <div class="relative w-full overflow-hidden h-[55%] flex items-center justify-center bg-black pt-3">
        <img src="file:///${posterPath}" class="w-full h-full object-contain block" />
        <div class="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-neutral-950"></div>
      </div>
      <div class="flex-1 flex flex-col justify-center p-6 sm:p-8 pt-2">
        <h3 class="text-white text-xl sm:text-2xl font-light leading-tight text-left">
          Performance, Speed &<br />SEO Optimization
        </h3>
        <p class="mt-3 text-[13px] sm:text-[14px] leading-relaxed text-white/70 font-light max-w-[320px]">
          Sub-second Next.js architecture, optimised Core Web Vitals, and structured schema markup engineered to rank on Google.
        </p>
      </div>
    </div>

    <!-- Option 3: object-cover with object-top and h-[50%] -->
    <div class="relative h-[460px] rounded-2xl bg-neutral-950 overflow-hidden flex flex-col border border-blue-500/30">
      <div class="text-[11px] text-blue-400 p-2 absolute top-0 left-0 z-20 bg-black/80 font-mono">Option 3: object-cover object-top pt-2</div>
      <div class="relative w-full overflow-hidden h-[52%] bg-black pt-2">
        <img src="file:///${posterPath}" class="w-full h-full object-cover object-top block" />
        <div class="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-neutral-950"></div>
      </div>
      <div class="flex-1 flex flex-col justify-center p-6 sm:p-8 pt-2">
        <h3 class="text-white text-xl sm:text-2xl font-light leading-tight text-left">
          Performance, Speed &<br />SEO Optimization
        </h3>
        <p class="mt-3 text-[13px] sm:text-[14px] leading-relaxed text-white/70 font-light max-w-[320px]">
          Sub-second Next.js architecture, optimised Core Web Vitals, and structured schema markup engineered to rank on Google.
        </p>
      </div>
    </div>

  </div>
</body>
</html>
  `;

  await page.setContent(html, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  const outPath = path.resolve(__dirname, 'video_options_comparison.png');
  await page.screenshot({ path: outPath, fullPage: true });
  console.log('Comparison saved to:', outPath);
  await browser.close();
}

testVideoOptions().catch(console.error);
