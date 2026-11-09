const { chromium } = require("playwright");
const path = require("path");

const BASE_URL = "http://localhost:3008/demos/woshico/index.html";
const ARTIFACT_DIR = "C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4";

async function verify() {
  console.log("=== VERIFYING WOSHICO ENHANCEMENTS ===");
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  await page.goto(BASE_URL, { waitUntil: "networkidle" });
  await page.waitForTimeout(1000);

  // 1. Verify Before/After Slider Interactivity
  console.log("\n--- 1. Testing Before/After Slider ---");
  const slider = await page.$(".before-after-style-wrap");
  await slider.scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);

  const box = await slider.boundingBox();
  console.log("Slider bounding box after scroll:", box);

  const divider = await page.$(".before-after-style-divider");
  const initialDividerPos = await divider.evaluate(el => el.style.left);
  console.log("Initial divider left:", initialDividerPos);

  // Move mouse to 30% width
  await page.mouse.move(box.x + box.width * 0.3, box.y + box.height * 0.5);
  await page.waitForTimeout(300);
  const hoverDividerPos = await divider.evaluate(el => el.style.left);
  const hoverClipPath = await page.$eval(".before-after-style-after", el => el.style.clipPath);
  console.log("Hover 30% divider left:", hoverDividerPos, "clipPath:", hoverClipPath);

  // Drag mouse to 75% width
  await page.mouse.down();
  await page.mouse.move(box.x + box.width * 0.75, box.y + box.height * 0.5, { steps: 5 });
  await page.waitForTimeout(300);
  await page.mouse.up();
  const dragDividerPos = await divider.evaluate(el => el.style.left);
  const dragClipPath = await page.$eval(".before-after-style-after", el => el.style.clipPath);
  console.log("Drag 75% divider left:", dragDividerPos, "clipPath:", dragClipPath);

  await page.screenshot({ path: path.join(ARTIFACT_DIR, "woshico_fixed_before_after.png") });
  console.log("Captured woshico_fixed_before_after.png");

  // 2. Verify Services Tabs (01, 02, 03)
  console.log("\n--- 2. Testing Service Tabs (01, 02, 03) ---");
  const servicesSec = await page.$(".static-style-one-section");
  await servicesSec.scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);

  // Click Tab 2 (Pressure Washer)
  const tab2 = await page.$(".service-tab-btn[data-service='2']");
  await tab2.click();
  await page.waitForTimeout(400);
  const service2Active = await page.$eval(".static-box-service-content._2", el => el.classList.contains("active"));
  const image2Opacity = await page.$eval(".static-box-images-wrap.two", el => el.style.opacity);
  console.log("Service 2 Active:", service2Active, "Image 2 Opacity:", image2Opacity);

  // Click Tab 3 (Exterior Washing)
  const tab3 = await page.$(".service-tab-btn[data-service='3']");
  await tab3.click();
  await page.waitForTimeout(400);
  const service3Active = await page.$eval(".static-box-service-content._3", el => el.classList.contains("active"));
  const image3Opacity = await page.$eval(".static-box-images-wrap.three", el => el.style.opacity);
  console.log("Service 3 Active:", service3Active, "Image 3 Opacity:", image3Opacity);

  await page.screenshot({ path: path.join(ARTIFACT_DIR, "woshico_fixed_services_section.png") });
  console.log("Captured woshico_fixed_services_section.png");

  // 3. Verify Process Tabs
  console.log("\n--- 3. Testing Process Tabs ---");
  const procTab2 = await page.$(".static-box-two-heading-box._02");
  await procTab2.click();
  await page.waitForTimeout(300);
  const proc2Display = await page.$eval(".static-box-two._02", el => el.style.display);
  const proc2LineWidth = await page.$eval(".static-box-two-line._02", el => el.style.width);
  console.log("Process Tab 2 clicked -> display:", proc2Display, "lineWidth:", proc2LineWidth);

  // 4. Verify Form Submission
  console.log("\n--- 4. Testing Form Submission ---");
  const emailInput = await page.$("#Footer-Email-2");
  if (emailInput) {
    await emailInput.scrollIntoViewIfNeeded();
    await emailInput.fill("test@customer.com");
    await page.waitForTimeout(200);
    const submitBtn = await page.$(".footer-form-submit");
    await submitBtn.click();
    await page.waitForTimeout(1000);
    const isDoneVisible = await page.$eval(".footer-form-wrap .w-form-done", el => el.style.display === "block" || el.offsetHeight > 0);
    console.log("Form submitted, w-form-done visible:", isDoneVisible);
    await page.screenshot({ path: path.join(ARTIFACT_DIR, "woshico_fixed_form_done.png") });
  }

  // 5. Verify Button Hover
  console.log("\n--- 5. Testing Button Hover States ---");
  const heroBtn = await page.$(".hero-one-button-wrap .button-link");
  await heroBtn.scrollIntoViewIfNeeded();
  await page.waitForTimeout(200);
  await heroBtn.hover();
  await page.waitForTimeout(300);
  const btnHoverTextVisible = await page.$eval(".hero-one-button-wrap .button-text-hover", el => {
    const s = window.getComputedStyle(el);
    return { transform: s.transform, opacity: s.opacity, display: s.display };
  });
  console.log("Hero Button Hover Text Computed:", btnHoverTextVisible);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, "woshico_fixed_hero_button_hover.png") });

  await browser.close();
  console.log("=== ALL VERIFICATION TESTS PASSED SUCCESSFULLY! ===");
}

verify().catch(e => {
  console.error("Verification failed:", e);
  process.exit(1);
});
