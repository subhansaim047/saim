const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'saim_templates.ts'), 'utf8');

const regex = /\{\s*"id":\s*"([^"]+)",\s*"slug":\s*"([^"]+)",\s*"type":\s*"([^"]+)",\s*(?:[^{}]*?)"title":\s*"([^"]+)"/g;

let match;
const templates = [];
while ((match = regex.exec(content)) !== null) {
  templates.push({
    id: match[1],
    slug: match[2],
    type: match[3],
    title: match[4]
  });
}

console.log('Total parsed templates:', templates.length);

const recipe = templates.filter(t => t.slug.includes('recipe') || t.title.toLowerCase().includes('recipe'));
console.log('\n--- RECIPE TEMPLATES ---');
recipe.forEach(t => console.log(`${t.slug} | ${t.title} | ${t.type}`));

const cost = templates.filter(t => t.slug.includes('cost') || t.title.toLowerCase().includes('cost'));
console.log('\n--- COST TEMPLATES ---');
cost.forEach(t => console.log(`${t.slug} | ${t.title} | ${t.type}`));

const aller = templates.filter(t => t.slug.includes('aller') || t.title.toLowerCase().includes('aller'));
console.log('\n--- ALLERGEN TEMPLATES ---');
aller.forEach(t => console.log(`${t.slug} | ${t.title} | ${t.type}`));
