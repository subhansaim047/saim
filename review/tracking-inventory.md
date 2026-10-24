# Tracking & Privacy Inventory: saimdev.site

*Audited: 24 October 2026 (Codebase Inspection & Network Isolation Analysis)*

---

## 1. Executive Summary
- **Third-Party Trackers:** 0 (Zero Google Analytics, gtag, GTM, @vercel/analytics, or Meta pixels loaded)
- **Cookies Placed on First Load:** 0 (Zero tracking or advertising cookies)
- **Pre-Consent Network Leakage:** NONE (100% of network requests remain strictly on origin domain)
- **Interactive Tools Data Storage:** Client-side only in browser `localStorage` (never transmitted to servers)

---

## 2. Network Requests & Third-Party Domains
- **First Load Third-Party Requests:** 0
- **External Connections:** None on page load. All fonts are self-hosted via Next.js `next/font/google` (`Inter`, `Instrument Serif`).
- **External Links (User Clicked Only):**
  - WhatsApp: `wa.me/923196526604` (direct user messaging)
  - Instagram: `instagram.com/saim_agency` (direct profile link)
  - Vercel: Edge delivery & serverless hosting platform

---

## 3. Cookie Storage Inventory
- **First Load Cookies:** 0
- **Post-Consent Cookies:** 0 (The consent choice is saved in `localStorage`, not HTTP cookies).

---

## 4. Browser Local Storage Inventory
| Key Name | Storage Type | Duration | Category | Provider | Purpose |
|---|---|---|---|---|---|
| `saim_cookie_consent` | `localStorage` | Persistent (until cleared) | Essential Preference | Saim Dev (First-Party) | Records whether the visitor clicked Accept or Essential on the privacy notice |
| `saim_allergen_matrix_v1` | `localStorage` | Persistent (until cleared) | Functional Tool State | Saim Dev (First-Party) | Saves custom kitchen allergen menu rows locally on the user's device |
| `saim_food_cost_v1` | `localStorage` | Persistent (until cleared) | Functional Tool State | Saim Dev (First-Party) | Saves food cost calculator recipes and ingredient costs locally on the device |
| `saim_recipe_calc_v1` | `localStorage` | Persistent (until cleared) | Functional Tool State | Saim Dev (First-Party) | Saves scaled recipe batch quantities locally on the user's device |

---

## 5. Third-Party Service Processors
1. **Hosting & Edge Delivery:** Vercel Inc. (hosts the Next.js serverless application and technical access logs).
2. **WhatsApp Direct Messaging:** Meta Platforms Ireland Ltd / WhatsApp LLC (initiated when user clicks "Discuss on WhatsApp" or submits a project brief).
3. **Instagram:** Meta Platforms Inc. (external link in site footer: `@saim_agency`).
