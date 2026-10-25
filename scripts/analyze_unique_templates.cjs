const fs = require('fs');
const path = require('path');

const templates = JSON.parse(fs.readFileSync(path.join(__dirname, 'all_fooddocs_templates.json'), 'utf8'));

// Deduplicate by title or link
const uniqueMap = new Map();
templates.forEach(t => {
  const key = (t.title || t.link).toLowerCase();
  if (!uniqueMap.has(key)) {
    uniqueMap.set(key, t);
  }
});

const uniqueTemplates = Array.from(uniqueMap.values());
console.log('Unique templates count:', uniqueTemplates.length);

const types = {};
uniqueTemplates.forEach(t => {
  types[t.type] = (types[t.type] || 0) + 1;
});
console.log('Types distribution:', types);

console.log('\nTop 20 templates:');
uniqueTemplates.slice(0, 20).forEach((t, i) => {
  console.log(`${i+1}. [${t.type}] ${t.title} (PDF: ${t.pdf ? 'YES' : 'NO'}) -> ${t.img}`);
});

fs.writeFileSync(path.join(__dirname, 'unique_templates.json'), JSON.stringify(uniqueTemplates, null, 2), 'utf8');
