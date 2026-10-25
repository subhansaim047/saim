import fs from 'fs';
import path from 'path';

const blogDir = 'app/blog';
const blogs = fs.readdirSync(blogDir);

blogs.forEach(b => {
  const p = path.join(blogDir, b, 'page.tsx');
  if (fs.existsSync(p)) {
    const content = fs.readFileSync(p, 'utf8');
    // Find metadata description block
    const metaMatch = content.match(/export const metadata: Metadata = \{([\s\S]*?)\};/);
    if (metaMatch) {
      const metaText = metaMatch[1];
      // match description: "..." or description: '...' or `...`
      const descMatch = metaText.match(/description:\s*([`"'])([\s\S]*?)\1/);
      const titleMatch = metaText.match(/title:\s*([`"'])([\s\S]*?)\1/);
      const canonicalMatch = metaText.match(/canonical:\s*([`"'])([\s\S]*?)\1/);
      const d = descMatch ? descMatch[2].replace(/\n/g, ' ').trim() : '';
      const t = titleMatch ? titleMatch[2].replace(/\n/g, ' ').trim() : '';
      const c = canonicalMatch ? canonicalMatch[2].trim() : '';
      console.log(`Blog: ${b}`);
      console.log(`  title (${t.length}): ${t}`);
      console.log(`  canonical: ${c}`);
      console.log(`  desc (${d.length}): ${d}`);
      if (d.length < 140 || d.length > 155) {
        console.log(`  ❌ NOT IN 140-155: ${d.length}`);
      } else {
        console.log(`  ✅ PERFECT`);
      }
    }
  }
});
