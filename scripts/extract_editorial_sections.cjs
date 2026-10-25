const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, 'fooddocs_page.html'), 'utf8');

// Find all H2 sections and their body text
const h2Blocks = [];
const regex = /<h2[^>]*>(.*?)<\/h2>([\s\S]*?)(?=<h2|$)/gi;
let m;
while ((m = regex.exec(html)) !== null) {
  const heading = m[1].replace(/<[^>]+>/g, '').trim();
  const rawBody = m[2];
  // extract paragraphs
  const ps = [];
  const pRegex = /<p[^>]*>(.*?)<\/p>/gi;
  let pm;
  while ((pm = pRegex.exec(rawBody)) !== null) {
    const text = pm[1].replace(/<[^>]+>/g, '').trim();
    if (text && text.length > 20) ps.push(text);
  }

  // extract list items if any
  const lis = [];
  const liRegex = /<li[^>]*>(.*?)<\/li>/gi;
  let lm;
  while ((lm = liRegex.exec(rawBody)) !== null) {
    const text = lm[1].replace(/<[^>]+>/g, '').trim();
    if (text) lis.push(text);
  }

  if (heading && (ps.length > 0 || lis.length > 0)) {
    h2Blocks.push({ heading, ps, lis });
  }
}

console.log('Total H2 sections with content:', h2Blocks.length);
h2Blocks.forEach((b, i) => {
  console.log(`\n[Section ${i+1}] ${b.heading}`);
  console.log(`  Paragraphs: ${b.ps.length}, List items: ${b.lis.length}`);
  if (b.ps[0]) console.log(`  Snippet: ${b.ps[0].substring(0, 120)}...`);
});

fs.writeFileSync(path.join(__dirname, 'editorial_sections.json'), JSON.stringify(h2Blocks, null, 2), 'utf8');
