const fs = require('fs');
const file = 'src/components/BlogsPage.tsx';
let content = fs.readFileSync(file, 'utf8');

// Add the click route logic
content = content.replace(
  'if (blog.slug === "#blog-post-1")',
  'if (blog.slug === "#blog-post-3") router.push("/blog/50-percent-off-agency-launch");\n                if (blog.slug === "#blog-post-1")'
);

fs.writeFileSync(file, content, 'utf8');
console.log("Replaced");
