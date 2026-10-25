const fs = require('fs');
const path = require('path');

const saimTs = fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'saim_templates.ts'), 'utf8');
const match = saimTs.match(/export const FOOD_SAFETY_TEMPLATES:\s*FoodSafetyTemplate\[\]\s*=\s*(\[[\s\S]*?\]);/);
const currentTemplates = JSON.parse(match[1]);

const interactive = currentTemplates.filter(t => 
  t.type === 'smart_tool' || 
  t.type === 'quiz' ||
  t.slug.includes('calc') || 
  t.slug.includes('allergy') || 
  t.slug.includes('allergen') ||
  t.slug.includes('quiz')
);

console.log('Interactive tools count:', interactive.length);
console.table(interactive.map(t => ({ id: t.id, slug: t.slug, title: t.title, type: t.type })));
