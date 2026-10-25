import fs from 'fs';
import path from 'path';

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const title = content.match(/title:\s*["']([^"']+)["']/);
  const desc = content.match(/description:\s*["']([^"']+)["']/);
  const canonical = content.match(/canonical:\s*["']([^"']+)["']/);
  const ogTitle = content.match(/openGraph:\s*\{[\s\S]*?title:\s*["']([^"']+)["']/);
  const ogDesc = content.match(/openGraph:\s*\{[\s\S]*?description:\s*["']([^"']+)["']/);
  const ogUrl = content.match(/openGraph:\s*\{[\s\S]*?url:\s*["']([^"']+)["']/);
  const twitterTitle = content.match(/twitter:\s*\{[\s\S]*?title:\s*["']([^"']+)["']/);
  return {
    filePath,
    title: title ? title[1] : null,
    desc: desc ? desc[1] : null,
    descLen: desc ? desc[1].length : 0,
    canonical: canonical ? canonical[1] : null,
    ogTitle: ogTitle ? ogTitle[1] : null,
    ogDesc: ogDesc ? ogDesc[1] : null,
    ogUrl: ogUrl ? ogUrl[1] : null,
    twitterTitle: twitterTitle ? twitterTitle[1] : null
  };
}

const pages = [
  'app/layout.tsx',
  'app/page.tsx',
  'app/about/page.tsx',
  'app/contact/page.tsx',
  'app/cookie-policy/page.tsx',
  'app/disclaimer/page.tsx',
  'app/privacy/page.tsx',
  'app/terms/page.tsx',
  'app/tools/page.tsx',
  'app/blogs/page.tsx',
  'app/case-studies/page.tsx',
  'app/demos/page.tsx',
  'app/nextjs-developer-uk/page.tsx',
  'app/services/page.tsx',
  'app/technologies/page.tsx'
];

console.log("=== CORE PAGES METADATA AUDIT ===");
pages.forEach(p => {
  if (fs.existsSync(p)) {
    const res = checkFile(p);
    console.log(`\nFile: ${p}`);
    console.log(`  Title: ${res.title}`);
    console.log(`  OG Title: ${res.ogTitle}`);
    console.log(`  Twitter Title: ${res.twitterTitle}`);
    console.log(`  Desc (${res.descLen} chars): ${res.desc}`);
    console.log(`  Canonical: ${res.canonical}`);
    console.log(`  OG URL: ${res.ogUrl}`);
    const validLen = res.descLen >= 140 && res.descLen <= 155;
    if (!validLen) console.log(`  ⚠️ LENGTH OUT OF 140-155 RANGE: ${res.descLen}`);
  } else {
    console.log(`MISSING: ${p}`);
  }
});

console.log("\n=== BLOG POSTS METADATA AUDIT ===");
const blogDir = 'app/blog';
if (fs.existsSync(blogDir)) {
  const blogs = fs.readdirSync(blogDir);
  blogs.forEach(b => {
    const p = path.join(blogDir, b, 'page.tsx');
    if (fs.existsSync(p)) {
      const res = checkFile(p);
      console.log(`\nBlog: ${b}`);
      console.log(`  Title: ${res.title}`);
      console.log(`  Desc (${res.descLen} chars): ${res.desc}`);
      console.log(`  Canonical: ${res.canonical}`);
      console.log(`  OG URL: ${res.ogUrl}`);
      const validLen = res.descLen >= 140 && res.descLen <= 155;
      if (!validLen) console.log(`  ⚠️ LENGTH OUT OF 140-155 RANGE: ${res.descLen}`);
    }
  });
}
