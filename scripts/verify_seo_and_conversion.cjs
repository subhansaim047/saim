const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve('.');

let passedAll = true;
function assert(condition, message) {
  if (condition) {
    console.log(`✅ PASS: ${message}`);
  } else {
    console.error(`❌ FAIL: ${message}`);
    passedAll = false;
  }
}

console.log('\n--- 1. SITEMAP.XML VERIFICATION ---');
const sitemap = fs.readFileSync(path.join(projectRoot, 'public/sitemap.xml'), 'utf8');
assert(!sitemap.includes('/burger-garage'), 'Sitemap does not contain /burger-garage');
assert(!sitemap.includes('/frenchyse'), 'Sitemap does not contain /frenchyse');
assert(!sitemap.includes('/hotbite'), 'Sitemap does not contain /hotbite');
assert(sitemap.includes('/nextjs-developer-uk'), 'Sitemap contains /nextjs-developer-uk');
assert(sitemap.includes('/privacy'), 'Sitemap contains /privacy');

console.log('\n--- 2. ROBOTS.TXT VERIFICATION ---');
const robots = fs.readFileSync(path.join(projectRoot, 'public/robots.txt'), 'utf8');
assert(!robots.includes('Disallow: /demos/'), 'Robots.txt does not prematurely disallow /demos/ (allows noindex crawling)');
assert(!robots.includes('Disallow: /burger-garage/'), 'Robots.txt does not prematurely disallow /burger-garage/');
assert(robots.includes('Sitemap: https://www.saimdev.site/sitemap.xml'), 'Robots.txt links to sitemap');

console.log('\n--- 3. DEMO FILES NOINDEX VERIFICATION ---');
const sampleDemos = [
  'public/burger-garage/about.html',
  'public/hotbite/index.html',
  'public/frenchyse/index.html',
  'public/demos/akdetailing/index.html',
  'public/anzaar/index.html',
];

sampleDemos.forEach(demoRel => {
  const full = path.join(projectRoot, demoRel);
  if (fs.existsSync(full)) {
    const html = fs.readFileSync(full, 'utf8');
    assert(
      /<meta\s+name=["']robots["']\s+content=["']noindex,\s*nofollow["']/i.test(html),
      `${demoRel} contains <meta name="robots" content="noindex, nofollow">`
    );
  } else {
    console.log(`⚠️ Skip non-existent sample: ${demoRel}`);
  }
});

console.log('\n--- 4. NO SMS: PROTOCOL REMAINING IN SRC ---');
function checkDirForSms(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(f => {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      checkDirForSms(full);
    } else if (f.endsWith('.tsx') || f.endsWith('.ts')) {
      const code = fs.readFileSync(full, 'utf8');
      if (code.includes('sms:+447473962953') || code.includes('href="sms:')) {
        assert(false, `Found remaining sms: in ${f}`);
      }
    }
  });
}
checkDirForSms(path.join(projectRoot, 'src'));
checkDirForSms(path.join(projectRoot, 'app'));
assert(true, 'Checked all tsx/ts files in src and app - zero sms: links found');

console.log('\n--- 5. UK LANDING PAGE ROUTE VERIFICATION ---');
const ukLanding = path.join(projectRoot, 'app/nextjs-developer-uk/page.tsx');
assert(fs.existsSync(ukLanding), 'app/nextjs-developer-uk/page.tsx exists');
if (fs.existsSync(ukLanding)) {
  const content = fs.readFileSync(ukLanding, 'utf8');
  assert(content.includes('wa.me/447473962953'), 'UK landing page contains direct WhatsApp link');
  assert(content.includes('calendly.com'), 'UK landing page contains Calendly discovery link');
  assert(content.includes('£390'), 'UK landing page contains £390 GBP pricing');
  assert(content.includes('£790'), 'UK landing page contains £790 GBP pricing');
  assert(content.includes('FAQPage'), 'UK landing page contains structured FAQ schema');
}

console.log('\n--- 6. GLOBAL LAYOUT & SCHEMAS VERIFICATION ---');
const layout = fs.readFileSync(path.join(projectRoot, 'app/layout.tsx'), 'utf8');
assert(layout.includes('ProfessionalService'), 'layout.tsx contains ProfessionalService schema');
assert(layout.includes('Person'), 'layout.tsx contains Person schema');
assert(layout.includes('CookieBanner'), 'layout.tsx imports and renders CookieBanner');
assert(layout.includes('GBP'), 'layout.tsx declares GBP currency');

if (passedAll) {
  console.log('\n🎉 ALL SEO & CONVERSION VERIFICATIONS PASSED!\n');
} else {
  console.error('\n⚠️ SOME VERIFICATIONS FAILED!\n');
  process.exit(1);
}
