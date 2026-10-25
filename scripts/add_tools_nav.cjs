const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');

// 1. HeroSection.tsx
const heroPath = path.join(rootDir, 'src/components/HeroSection.tsx');
let hero = fs.readFileSync(heroPath, 'utf8');
if (!hero.includes('/tools')) {
  hero = hero.replace(
    '{ label: "Tech Stack", href: "/technologies" },',
    '{ label: "Tech Stack", href: "/technologies" },\r\n  { label: "Free Tools", href: "/tools" },'
  );
  if (!hero.includes('/tools')) {
    // Try LF
    hero = hero.replace(
      '{ label: "Tech Stack", href: "/technologies" },',
      '{ label: "Tech Stack", href: "/technologies" },\n  { label: "Free Tools", href: "/tools" },'
    );
  }
  fs.writeFileSync(heroPath, hero, 'utf8');
  console.log('Added Free Tools to HeroSection.tsx');
} else {
  console.log('HeroSection.tsx already has /tools');
}

// 2. FooterSection.tsx
const footerPath = path.join(rootDir, 'src/components/FooterSection.tsx');
let footer = fs.readFileSync(footerPath, 'utf8');
if (!footer.includes('/tools')) {
  footer = footer.replace(
    '<Link href="/demos">Demo Sites</Link>',
    '<Link href="/tools" className="text-primary hover:underline">Free Food Safety Tools</Link>\r\n            <Link href="/demos">Demo Sites</Link>'
  );
  if (!footer.includes('/tools')) {
    footer = footer.replace(
      '<Link href="/demos">Demo Sites</Link>',
      '<Link href="/tools" className="text-primary hover:underline">Free Food Safety Tools</Link>\n            <Link href="/demos">Demo Sites</Link>'
    );
  }
  fs.writeFileSync(footerPath, footer, 'utf8');
  console.log('Added Free Tools to FooterSection.tsx');
} else {
  console.log('FooterSection.tsx already has /tools');
}

// 3. sitemap.xml
const sitemapPath = path.join(rootDir, 'public/sitemap.xml');
let sitemap = fs.readFileSync(sitemapPath, 'utf8');
if (!sitemap.includes('/tools')) {
  const toolsUrlEntry = `  <url>
    <loc>https://www.saimdev.site/tools</loc>
    <lastmod>2026-10-23</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>\n`;
  sitemap = sitemap.replace('  <!-- Core Authority Pages -->\n', '  <!-- Core Authority Pages -->\n' + toolsUrlEntry);
  if (!sitemap.includes('/tools')) {
    sitemap = sitemap.replace('  <!-- Core Authority Pages -->\r\n', '  <!-- Core Authority Pages -->\r\n' + toolsUrlEntry);
  }
  fs.writeFileSync(sitemapPath, sitemap, 'utf8');
  console.log('Added /tools to sitemap.xml');
} else {
  console.log('sitemap.xml already has /tools');
}
