#!/usr/bin/env node

/**
 * Live Deployment Verification Script: saimdev.site
 * 
 * Usage:
 *   node scripts/verify-live.mjs https://www.saimdev.site [expectedSha]
 *   node scripts/verify-live.mjs http://localhost:3000
 */

const baseUrl = process.argv[2] ? process.argv[2].replace(/\/$/, '') : 'https://www.saimdev.site';
const expectedSha = process.argv[3] || process.env.EXPECTED_SHA || null;

console.log(`=================================================`);
console.log(`   LIVE SITE VERIFICATION: ${baseUrl}`);
if (expectedSha) {
  console.log(`   EXPECTED COMMIT SHA: ${expectedSha}`);
}
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
    expectedTitle: 'Contact Saim Dev | Website Projects for UK Businesses',
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
  "Saim Dev (SMS)",
  "Fill out the form below to initiate an instant project inquiry directly on Instagram",
  "Submitting this form launches Instagram",
  "Can we communicate via Instagram? Yes! Instant communication is available via Instagram (SMS)",
  "$500 - $1,000 (Starter Website)",
  "$1,000 - $5,000 (Full Business Plan)",
  "$1,200+ (Custom Web Architecture / AI App)",
  "phone/Instagram number",
  "We never sell or share your information with third parties.",
  "privacy-focused analytics (such as Google Analytics)",
  "contact us directly via Instagram at SMS"
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
        'User-Agent': 'SaimDev-QualityGuard/3.0'
      }
    });

    assert(res.status === 200, `HTTP status 200 for ${route.path} (got ${res.status})`);
    if (res.status !== 200) return;

    const html = await res.text();

    // (a) Build SHA check on homepage or all pages
    if (expectedSha) {
      const shaMatch = html.match(/<meta[^>]+name=["']build-sha["'][^>]+content=["']([^"']+)["']/i);
      if (shaMatch) {
        const liveSha = shaMatch[1];
        assert(liveSha === expectedSha, `build-sha matches expected ${expectedSha} (live: ${liveSha})`);
      } else {
        assert(false, `No <meta name="build-sha"> tag found on ${route.path}`);
      }
    }

    // (b) Forbidden Section 1 strings check
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

    // (c) Title verification
    if (route.expectedTitle) {
      const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
      const actualTitle = titleMatch ? titleMatch[1].trim().replace(/&amp;/g, '&') : '';
      assert(actualTitle.includes(route.expectedTitle), `Title matches "${route.expectedTitle}" on ${route.path} (actual: "${actualTitle}")`);
    }

    // (d) og:url equals canonical
    const canonicalMatch = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i);
    const ogUrlMatch = html.match(/<meta[^>]+property=["']og:url["'][^>]+content=["']([^"']+)["']/i);
    
    if (canonicalMatch && ogUrlMatch) {
      const canonical = canonicalMatch[1];
      const ogUrl = ogUrlMatch[1];
      assert(canonical.replace(/\/$/, '') === ogUrl.replace(/\/$/, ''), `og:url ("${ogUrl}") matches canonical ("${canonical}") on ${route.path}`);
    }

    // (e) Footer links present
    let missingLinks = 0;
    for (const link of requiredFooterLinks) {
      if (!html.includes(link)) {
        missingLinks++;
        console.error(`Missing footer link ${link} in ${route.path}`);
      }
    }
    assert(missingLinks === 0, `All 9 footer links present in ${route.path}`);

    // (f) Specific checks per route
    if (route.path === '/contact') {
      assert(html.includes('Send Project Inquiry on WhatsApp'), 'Contact form CTA submits to WhatsApp');
      assert(html.includes('Landing page (from £250)'), 'Contact form uses unified budget plans from plans.ts');
    }

    if (route.path === '/privacy') {
      assert(html.includes('We do not sell personal data. We share it only with the service providers listed above.'), 'Privacy policy contains required no-sale declaration');
      assert(html.includes('Information Commissioner') || html.includes('ICO'), 'Privacy policy contains ICO disclosure');
    }

    if (route.path === '/cookie-policy') {
      assert(html.includes('saim_cookie_consent'), 'Cookie policy contains storage inventory table');
    }

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
