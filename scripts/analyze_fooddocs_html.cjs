const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, 'fooddocs_page.html'), 'utf8');

console.log('HTML Length:', html.length);

// Extract main container or sections
const sections = [];
const h2Regex = /<h2[^>]*>(.*?)<\/h2>/gi;
let match;
while ((match = h2Regex.exec(html)) !== null) {
  sections.push(match[1].replace(/<[^>]+>/g, '').trim());
}
console.log('\n--- H2 SECTIONS (' + sections.length + ') ---');
sections.forEach((s, idx) => console.log(`${idx + 1}. ${s}`));

// Extract H1
const h1Match = html.match(/<h1[^>]*>(.*?)<\/h1>/i);
console.log('\nH1:', h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim() : 'None');

// Check main content div
const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
console.log('Main tag present:', !!mainMatch);

// Look for template cards or list items
// Let's inspect class names of containers
const classes = new Set();
const classRegex = /class="([^"]+)"/g;
while ((match = classRegex.exec(html)) !== null) {
  match[1].split(/\s+/).forEach(c => {
    if (c.includes('template') || c.includes('card') || c.includes('hub') || c.includes('grid') || c.includes('poster')) {
      classes.add(c);
    }
  });
}
console.log('\nRelevant classes:', Array.from(classes).slice(0, 30));
