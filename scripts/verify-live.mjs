#!/usr/bin/env node

/**
 * Live Deployment Verification Script: saimdev.site
 * 
 * Usage:
 *   node scripts/verify-live.mjs https://www.saimdev.site
 *   node scripts/verify-live.mjs http://localhost:3000
 */

const baseUrl = process.argv[2] ? process.argv[2].replace(/\/$/, '') : 'https://www.saimdev.site';

console.log(`=================================================`);
console.log(`   LIVE SITE VERIFICATION: ${baseUrl}`);
console.log(`=================================================\n`);

const routes = [
  {
    path: '/',
    expectedTitle: 'Saim Dev - Next.js & Full Stack Web Developer | UK & Europe',
    canonical: 'https://www.saimdev.site/'
  },
  {
    path: '/tools',
    expectedTitle: 'Free Food Safety Templates & Kitchen Tools | Saim Dev',
    canonical: 'https://www.saimdev.site/tools'
  },
  {
    path: '/food-safety-templates/food-allergen-chart',
    expectedTitle: 'Free UK Takeaway Allergen Chart Generator (14 Allergens)',
    canonical: 'https://www.saimdev.site/food-safety-templates/food-allergen-chart'
  },
  {
    path: '/about',
    expectedTitle: 'About Saim Dev | Next.js Web Architecture',
    canonical: 'https://www.saimdev.site/about'
  },
  {
    path: '/contact',
    expectedTitle: 'Contact | Saim Dev',
    canonical: 'https://www.saimdev.site/contact'
  },
  {
    path: '/privacy',
    expectedTitle: 'Privacy Policy | Saim Dev',
    canonical: 'https://www.saimdev.site/privacy'
  },
  {
    path: '/cookie-policy',
    expectedTitle: 'Cookie Policy | Saim Dev',
    canonical: 'https://www.saimdev.site/cookie-policy'
  },
  {
    path: '/disclaimer',
    expectedTitle: 'Food Safety Disclaimer | Saim Dev',
    canonical: 'https://www.saimdev.site/disclaimer'
  },
  {
    path: '/terms',
    expectedTitle: 'Terms of Service | Saim Dev',
    canonical: 'https://www.saimdev.site/terms'
  }
];

// Section 1 forbidden strings
const forbiddenSection1 = [
  "Critical food temperature and safety chart for food allergen",
  "Compliant with UK Food Standards Agency (FSA) and Natasha's Law",
  "UK Food Standards Agency & Natasha's Law Compliant",
  "Official 14 Food Allergen Matrix",
  "Audit allergen hazards... export for local authority food hygiene inspections",
  "Compliant with Food Information Regulations 2014 & Natasha's Law (PPDS)",
  "Audited By: ... Approved for Kitchen Wall Display",
  "100% Free downloads compliant with UK Natasha's Law & FSA standards",
  "streamline Natasha's Law compliance and achieve 5-Star Food Hygiene ratings",
  "Official HACCP & Food Hygiene Resources",
  "100% Free Interactive Templates & Compliance Hub",
  "Protect your reputation and prevent catastrophic allergy incidents",
  "ensures your team is always audit-ready",
  "Instagram (SMS)",
  "Instagram: SMS",
  "via Instagram at SMS",
  "Send Project Inquiry on SMS",
  "Saim Dev (SMS)"
];

const requiredFooterLinks = [
  'href="/"',
  'href="/services"',
  'href="/demos"',
  'href="/about"',
  'href="/contact"',
  'href="/privacy"',
  'href="/cookie-policy"',
  'href="/disclaimer"',
  'href="/terms"'
];

let failures = 0;

function assert(condition, message) {
  if (!condition) {
    console.error(`❌ [FAIL] ${message}`);
    failures++;
  } else {
    console.log(`✅ [PASS] ${message}`);
  }
}

async function verifyRoute(route) {
  const url = `${baseUrl}${route.path}`;
  console.log(`\nChecking route: ${route.path} (${url})`);

  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'SaimDev-QualityGuard/2.0'
      }
    });

    assert(res.status === 200, `HTTP status 200 for ${route.path} (got ${res.status})`);
    if (res.status !== 200) return;

    const html = await res.text();

    // (a) Forbidden Section 1 strings check
    let foundForbidden = false;
    for (const forbidden of forbiddenSection1) {
      if (html.includes(forbidden)) {
        foundForbidden = true;
        assert(false, `Found forbidden string "${forbidden}" in ${route.path}`);
      }
    }
    if (!foundForbidden) {
      assert(true, `No Section 1 forbidden claims found in ${route.path}`);
    }

    // (b) Title verification
    if (route.expectedTitle) {
      const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
      const actualTitle = titleMatch ? titleMatch[1].trim() : '';
      assert(actualTitle.includes(route.expectedTitle), `Title matches "${route.expectedTitle}" on ${route.path} (actual: "${actualTitle}")`);
    }

    // (c) og:url equals canonical
    const canonicalMatch = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i);
    const ogUrlMatch = html.match(/<meta[^>]+property=["']og:url["'][^>]+content=["']([^"']+)["']/i);
    
    if (canonicalMatch && ogUrlMatch) {
      const canonical = canonicalMatch[1];
      const ogUrl = ogUrlMatch[1];
      assert(canonical === ogUrl, `og:url ("${ogUrl}") matches canonical ("${canonical}") on ${route.path}`);
    }

    // (d) Footer links present
    let missingLinks = 0;
    for (const link of requiredFooterLinks) {
      if (!html.includes(link)) {
        missingLinks++;
        console.error(`Missing footer link ${link} in ${route.path}`);
      }
    }
    assert(missingLinks === 0, `All 9 footer links present in ${route.path}`);

    // (e) No SMS as placeholder
    const smsPlaceholderMatch = html.match(/Instagram\s*\(SMS\)|Instagram:\s*SMS|via\s+Instagram\s+at\s+SMS|Inquiry\s+on\s+SMS/i);
    assert(!smsPlaceholderMatch, `No SMS placeholder tokens found in ${route.path}`);

  } catch (err) {
    assert(false, `Failed to fetch ${url}: ${err.message}`);
  }
}

async function main() {
  for (const r of routes) {
    await verifyRoute(r);
  }

  console.log(`\n=================================================`);
  if (failures === 0) {
    console.log(`🎉 LIVE VERIFICATION PASSED WITH ZERO ERRORS!`);
    console.log(`=================================================`);
    process.exit(0);
  } else {
    console.error(`💥 LIVE VERIFICATION FAILED WITH ${failures} ERROR(S)!`);
    console.log(`=================================================`);
    process.exit(1);
  }
}

main();
