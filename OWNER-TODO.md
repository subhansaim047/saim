# Owner Action Punch List: saimdev.site

This punch list outlines the remaining manual actions required from you as the site owner to complete your compliance, re-branding, and Google AdSense re-application.

---

## 1. Populate Business Information in `content/owner-facts.json`
Open [`content/owner-facts.json`](file:///C:/Users/subhan/.gemini/antigravity/scratch/saim/content/owner-facts.json) and enter your real business details:
```json
{
  "businessName": "Your Registered Legal Company Name",
  "tradingName": "Saim Dev",
  "registeredAddress": "Your Official UK Registered Office Address",
  "email": "contact@saimdev.site",
  "phone": "+92 319 6526604",
  "companiesHouseNumber": "Your 8-digit Company Number (if registered)",
  "vatNumber": "Your VAT Registration Number (if applicable)"
}
```
*Note: These fields currently default to empty strings so no placeholder text is ever rendered to visitors or Googlebot.*

---

## 2. Review and Approve the Redirect Plan
Review [`review/redirect-plan.csv`](file:///C:/Users/subhan/.gemini/antigravity/scratch/saim/review/redirect-plan.csv).
- We have identified 19 near-duplicate pages (e.g. 5 duplicate pest control checklists, multiple cleaning checklist variants, and duplicate allergen posters).
- These duplicate pages currently remain live and browsable with `<meta name="robots" content="noindex, follow">` and point their canonical URL to the primary survivor page.
- **Action:** If you wish to convert these duplicate URLs into permanent `301` server-level redirects in `next.config.mjs`, reply to this conversation with:
  > **"APPROVE redirect-plan"**
  *(As instructed by your operating rules, no permanent redirects will be configured until you send this explicit approval).*

---

## 3. Visual Review of Flagged Image Assets
Review [`review/originality-checklist.csv`](file:///C:/Users/subhan/.gemini/antigravity/scratch/saim/review/originality-checklist.csv).
- We scanned all 414 images in `public/templates/`.
- **Action:** Inspect the top 24 core template charts and posters in `public/templates/charts/` and `public/templates/posters/` to confirm:
  1. No third-party agency watermarks or external vendor logos remain visible.
  2. The table text and diagrams are clean and legible.
  *(Our automated bottom-cropping scripts previously removed upstream footers on all charts and posters, but manual spot-checking is recommended before applying for commercial AdSense monetization).*

---

## 4. Google AdSense Re-Application Roadmap

Follow these sequential steps before submitting your site for AdSense re-review:

1. **Deploy the `fix/site-quality` Branch to Production:**
   - Merge `fix/site-quality` into `main` and trigger your production build.
2. **Verify Google Search Console:**
   - Submit the updated sitemap URL: `https://www.saimdev.site/sitemap.xml`.
   - Confirm that Google indexes only the 24 core high-quality pages and skips the NOINDEX pages.
3. **Verify Trust & Legal Links:**
   - Check that `/about`, `/contact`, `/privacy`, `/cookie-policy`, and `/disclaimer` resolve properly with HTTP 200 on your live domain.
4. **Resubmit to Google AdSense:**
   - Log into your Google AdSense Dashboard.
   - Navigate to **Sites** > **saimdev.site** > **Request Review**.
   - Note that your site now provides distinct original tools (Allergen Matrix, Food Cost Calculator, Recipe Calculator, Level 2 Quiz), transparent ownership facts, explicit food safety disclaimers, and zero deceptive claims.
