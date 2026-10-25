const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');

// 1. Enhance PricingSection.tsx
const pricingPath = path.join(rootDir, 'src/components/PricingSection.tsx');
let pricingContent = fs.readFileSync(pricingPath, 'utf8');

const targetPricingBlock = `        {/* CARDS */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 items-start">
          {rawPlans.map((p) => (
            <PricingCard key={p.name} plan={p} currency={currency} />
          ))}
        </div>
      </div>
    </section>`;

const enhancedPricingBlock = `        {/* CARDS */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 items-start">
          {rawPlans.map((p) => (
            <PricingCard key={p.name} plan={p} currency={currency} />
          ))}
        </div>

        {/* PAYMENT TERMS & PEACE OF MIND */}
        <div className="mt-12 max-w-5xl mx-auto rounded-2xl bg-white/[0.03] border border-white/10 p-6 sm:p-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-white font-medium text-sm">
                <ShieldCheck className="w-4 h-4 text-primary flex-shrink-0" />
                <span>50/50 Milestone Protection</span>
              </div>
              <p className="text-white/60 text-xs leading-relaxed">
                50% deposit to initiate architecture & design. The remaining 50% is only payable after full private staging preview and your final approval prior to live deployment.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-white font-medium text-sm">
                <Check className="w-4 h-4 text-primary flex-shrink-0" />
                <span>UK & EU Invoicing & Rails</span>
              </div>
              <p className="text-white/60 text-xs leading-relaxed">
                HMRC & EU VAT-compliant invoices. Payments processed seamlessly via Stripe Secure Card, Wise Multi-Currency, UK Faster Payments, and SEPA Bank Wire.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-white font-medium text-sm">
                <Sparkles className="w-4 h-4 text-primary flex-shrink-0" />
                <span>100% Satisfaction Guarantee</span>
              </div>
              <p className="text-white/60 text-xs leading-relaxed">
                We iterate on staging until you are 100% satisfied with performance, UX, and conversion flow. Zero monthly retainers or hidden lock-ins.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>`;

if (pricingContent.includes(targetPricingBlock)) {
  pricingContent = pricingContent.replace(targetPricingBlock, enhancedPricingBlock);
  fs.writeFileSync(pricingPath, pricingContent, 'utf8');
  console.log('Successfully enhanced PricingSection.tsx with payment trust signals & terms.');
} else {
  // Try CRLF agnostic replacement
  const normalizedContent = pricingContent.replace(/\r\n/g, '\n');
  const normalizedTarget = targetPricingBlock.replace(/\r\n/g, '\n');
  const normalizedReplacement = enhancedPricingBlock.replace(/\r\n/g, '\n');
  if (normalizedContent.includes(normalizedTarget)) {
    const updated = normalizedContent.replace(normalizedTarget, normalizedReplacement);
    fs.writeFileSync(pricingPath, updated, 'utf8');
    console.log('Successfully enhanced PricingSection.tsx with normalized line endings.');
  } else {
    console.warn('Could not match target block in PricingSection.tsx');
  }
}

// 2. Enhance PerformanceSection.tsx with contextual caption
const perfPath = path.join(rootDir, 'src/components/PerformanceSection.tsx');
let perfContent = fs.readFileSync(perfPath, 'utf8');

const targetPerfBlock = `              {/* Floating Tooltip Box (Pixel-perfect recreation) */}
              <div
                className="absolute bg-[#0f0f11] border border-white/15 rounded-xl px-3.5 py-2.5 shadow-2xl flex flex-col gap-2 pointer-events-none"
                style={{
                  top: "20%",
                  left: "48%",
                  transform: "translate(-10%, 0)",
                  minWidth: "150px",
                }}
              >
                {/* Views Row */}
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[11px] text-white/50 font-medium">Organic Impressions</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-white">34,200</span>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#3b185f] text-[#c084fc]">
                      +47%
                    </span>
                  </div>
                </div>

                {/* Clicks Row */}
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[11px] text-white/50 font-medium">Qualified Inquiries</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-white">1,274</span>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#064e3b] text-[#34d399]">
                      +53%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>`;

const enhancedPerfBlock = `              {/* Floating Tooltip Box (Pixel-perfect recreation) */}
              <div
                className="absolute bg-[#0f0f11] border border-white/15 rounded-xl px-3.5 py-2.5 shadow-2xl flex flex-col gap-2 pointer-events-none"
                style={{
                  top: "20%",
                  left: "48%",
                  transform: "translate(-10%, 0)",
                  minWidth: "180px",
                }}
              >
                {/* Views Row */}
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[11px] text-white/50 font-medium">Organic Impressions</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-white">34,200</span>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#3b185f] text-[#c084fc]">
                      +47%
                    </span>
                  </div>
                </div>

                {/* Clicks Row */}
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[11px] text-white/50 font-medium">Qualified Inquiries</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-white">1,274</span>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#064e3b] text-[#34d399]">
                      +53%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Context Benchmark Caption */}
            <div className="mt-2 pt-3 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-white/50">
              <span className="font-mono">Benchmark: 90 days post-launch Next.js 16 deployment</span>
              <span className="text-primary/80 font-medium">Verified Core Web Vitals (98+ Score)</span>
            </div>
          </div>
        </motion.div>`;

const normPerf = perfContent.replace(/\r\n/g, '\n');
const normTargetPerf = targetPerfBlock.replace(/\r\n/g, '\n');
const normReplacementPerf = enhancedPerfBlock.replace(/\r\n/g, '\n');

if (normPerf.includes(normTargetPerf)) {
  const updated = normPerf.replace(normTargetPerf, normReplacementPerf);
  fs.writeFileSync(perfPath, updated, 'utf8');
  console.log('Successfully enhanced PerformanceSection.tsx with benchmark caption.');
} else {
  console.warn('Could not match target block in PerformanceSection.tsx');
}
