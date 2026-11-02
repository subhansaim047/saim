import { chromium } from "playwright";
import fs from "fs";

async function main() {
  const browser = await chromium.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });

  const context = await browser.newContext({
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
    viewport: { width: 1400, height: 1000 }
  });

  const page = await context.newPage();
  console.log("Navigating to Seobility check URL...");

  const targetUrl = "https://www.seobility.net/en/seocheck/check/?utm_source=chatgpt.com&url=https%3A%2F%2Fwww.saimdev.site%2F&mode=standard";
  
  try {
    await page.goto(targetUrl, { waitUntil: "networkidle", timeout: 45000 });
  } catch (e) {
    console.log("Navigation timeout or partial load:", e.message);
  }

  console.log("Waiting for results to load...");
  // Wait up to 20 seconds for the check to complete and render
  for (let i = 0; i < 8; i++) {
    await page.waitForTimeout(3000);
    const hasScore = await page.evaluate(() => {
      const el = document.querySelector("seobility-freetools-seo-check");
      if (!el) return false;
      const text = el.innerText || (el.shadowRoot ? el.shadowRoot.innerText : "");
      return text.includes("%") || text.includes("SEO Score") || text.includes("Meta") || text.length > 500;
    });
    console.log(`Check tick ${i + 1}: rendered? ${hasScore}`);
    if (hasScore) break;
  }

  // Extract content
  const pageData = await page.evaluate(() => {
    const widget = document.querySelector("seobility-freetools-seo-check");
    let widgetText = "";
    let shadowText = "";
    if (widget) {
      widgetText = widget.innerText || "";
      if (widget.shadowRoot) {
        shadowText = widget.shadowRoot.innerText || "";
      }
    }
    const bodyText = document.body.innerText;
    return { widgetText, shadowText, bodyText };
  });

  await page.screenshot({ path: "scripts/seobility_screenshot.png", fullPage: true });
  console.log("Saved screenshot to scripts/seobility_screenshot.png");

  const combinedText = `=== WIDGET TEXT ===\n${pageData.widgetText}\n\n=== SHADOW TEXT ===\n${pageData.shadowText}\n\n=== FULL BODY TEXT ===\n${pageData.bodyText}`;
  fs.writeFileSync("scripts/seobility_rendered.txt", combinedText, "utf8");
  console.log(`Saved text (${combinedText.length} chars) to scripts/seobility_rendered.txt`);

  await browser.close();
}

main().catch(err => {
  console.error("Error:", err);
  process.exit(1);
});
