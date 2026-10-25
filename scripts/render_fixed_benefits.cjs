const { chromium } = require('playwright');
const path = require('path');

async function renderBenefitsSection() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });

  const posterPath = path.resolve(__dirname, '../public/videos/benefits-poster.webp').replace(/\\/g, '/');

  const html = `
<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-black text-white p-12">
  <div class="w-full max-w-[1400px] mx-auto">
    <h2 class="text-white text-3xl sm:text-4xl md:text-5xl font-light text-center mb-12 sm:mb-24" style="letter-spacing: -0.04em">
      Key Benefits
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
      <!-- Card 1 -->
      <div class="relative h-[380px] sm:h-[460px] rounded-2xl bg-neutral-950 overflow-hidden p-6 sm:p-8">
        <div class="absolute top-1/2 -translate-y-1/2 -left-[420px] h-[460px] w-[460px] rounded-full bg-[#1e3a8a] blur-3xl opacity-40 pointer-events-none"></div>
        <div class="relative z-10 flex flex-col h-full">
          <h3 class="text-white text-xl sm:text-2xl font-light leading-tight">
            Business Growth &<br />Lead Conversion
          </h3>
          <p class="mt-12 sm:mt-20 text-[13px] sm:text-[14px] leading-relaxed text-white/70 font-light max-w-[280px]">
            High-converting websites engineered to turn visitors into leads and bookings with 24/7 online presence, fast loading speed, and modern custom design.
          </p>
        </div>
      </div>

      <!-- Card 2 with object-contain and comfortable sizing -->
      <div class="relative h-[380px] sm:h-[460px] rounded-2xl bg-neutral-950 overflow-hidden flex flex-col">
        <div class="relative w-full overflow-hidden h-[54%] flex items-center justify-center bg-black pt-2">
          <img src="file:///${posterPath}" class="w-full h-full object-contain block" />
          <div class="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-neutral-950"></div>
        </div>
        <div class="flex-1 flex flex-col justify-center p-6 sm:p-8 pt-1">
          <h3 class="text-white text-xl sm:text-2xl font-light leading-tight text-left">
            Performance, Speed &<br />SEO Optimization
          </h3>
          <p class="mt-3 text-[13px] sm:text-[14px] leading-relaxed text-white/70 font-light max-w-[320px]">
            Sub-second Next.js architecture, optimised Core Web Vitals, and structured schema markup engineered to rank on Google.
          </p>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="relative h-[380px] sm:h-[460px] rounded-2xl bg-neutral-950 overflow-hidden p-6 sm:p-8">
        <div class="absolute -top-28 -right-28 h-56 w-56 rounded-full bg-[#1e3a8a] blur-3xl opacity-40 pointer-events-none"></div>
        <div class="relative z-10 flex flex-col h-full">
          <h3 class="text-white text-xl sm:text-2xl font-light leading-tight">
            Marketing Integration &<br />Technical Security
          </h3>
          <p class="mt-auto text-[13px] sm:text-[14px] leading-relaxed text-white/70 font-light max-w-[320px]">
            Complete Google indexing, local SEO, SSL security, Instagram and social integration, with clean, scalable code built for reliable business growth.
          </p>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
  `;

  await page.setContent(html, { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  const outPath = path.resolve('C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4/rendered_fixed_benefits.png');
  await page.screenshot({ path: outPath, fullPage: true });
  console.log('Saved rendered fixed benefits screenshot to:', outPath);
  await browser.close();
}

renderBenefitsSection().catch(console.error);
