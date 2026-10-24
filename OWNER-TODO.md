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


---

## 5. Home-Page Claims Evidence Punch List (`content/claims.json`)

To prevent deceptive advertising or unverified commercial representations under UK CAP Code / CMA guidelines, the claims below currently display neutral fallback copy on the live website. To re-enable any specific commercial claim, add verifiable evidence to [`content/claims.json`](file:///C:/Users/subhan/.gemini/antigravity/scratch/saim/content/claims.json):

| Claim ID | Promotional Claim | Required Evidence from Owner | Current Status | Neutral Live Text in Use |
|---|---|---|---|---|
| `gdpr-compliant` | "GDPR compliant" | Third-party legal audit, DPO sign-off, or data mapping documentation | Needs Evidence | "Privacy-conscious architecture" |
| `core-web-vitals-95` | "95+ Core Web Vitals" | Real-user monitoring (CrUX field data) across 75th percentile of mobile visits | Needs Evidence | "Optimised Core Web Vitals" |
| `core-web-vitals-98` | "Verified Core Web Vitals (98+ Score)" | Public Lighthouse/PageSpeed URL or report link for deployed client build | Needs Evidence | "Optimised Core Web Vitals score" |
| `performance-stats` | "Organic Impressions 34,200+ / Qualified Inquiries 1,274+" | Search Console / Analytics export verifying client post-launch metrics | Needs Evidence | Labeled: "Illustrative example, not a client result" |
| `satisfaction-guarantee` | "100% Satisfaction Guarantee" | Formal refund/revision contract terms or escrow terms | Needs Evidence | "Dedicated Revision Support" |
| `reply-speed` | "Reply in <15 mins" | Verified SLA or automated round-the-clock dispatch confirmation | Needs Evidence | "Direct WhatsApp communication" |
| `end-to-end-encrypted` | "Direct end-to-end encrypted connection" | Valid only if WhatsApp/Signal is specified (general web contact is TLS/HTTPS) | Needs Evidence | "Direct messaging connection" |
| `hmrc-vat` | "HMRC & EU VAT-compliant invoices" | Official UK VAT registration number and VAT invoice templates | Needs Evidence | "Itemised commercial invoices" |
| `sub-second` | "sub-second" | Server response (TTFB) or client render benchmarking < 1000ms on 4G | Needs Evidence | "Fast-loading" |
| `seven-years` | "Over the last seven years, our studio..." | Business incorporation date or portfolio archive from 2019 or earlier | Needs Evidence | "Our studio engineers" |
| `zero-commission` | "0% commission" | Explanation of WhatsApp ordering without aggregator transaction cuts | Verified for Direct WhatsApp | "Direct ordering without aggregator commission fees" |
| `instant-maps-seo` | "instant Google Maps SEO" | Clarification that Google Local Pack ranking depends on Google algorithms | Needs Evidence | "Google Maps profile integration" |

---

## 6. Privacy Policy Finalisation (`content/privacy-draft.md`)
Review [`content/privacy-draft.md`](file:///C:/Users/subhan/.gemini/antigravity/scratch/saim/content/privacy-draft.md):
- Confirm international data transfer safeguards for Vercel and WhatsApp.
- Set explicit enquiry retention periods (recommended: 6 months for enquiries, 6 years for client contracts).
- Provide a dedicated contact email address in Section 1.
