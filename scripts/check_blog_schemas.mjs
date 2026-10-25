import fs from 'fs';
import path from 'path';

const blogDir = 'app/blog';
const blogs = fs.readdirSync(blogDir);

blogs.forEach(b => {
  const p = path.join(blogDir, b, 'page.tsx');
  if (fs.existsSync(p)) {
    const content = fs.readFileSync(p, 'utf8');
    const hasLdJson = content.includes('application/ld+json');
    const hasArticle = content.includes('"@type": "Article"') || content.includes("'@type': 'Article'");
    const hasBreadcrumbs = content.includes('BreadcrumbList');
    const hasPersonAuthor = content.includes('"@type": "Person"');
    console.log(`Blog: ${b}`);
    console.log(`  ld+json: ${hasLdJson}, Article: ${hasArticle}, Breadcrumbs: ${hasBreadcrumbs}, PersonAuthor: ${hasPersonAuthor}`);
  }
});
