const fs = require('fs');
const path = require('path');

const tsPath = path.join(__dirname, '..', 'src', 'data', 'saim_templates.ts');
const rawTs = fs.readFileSync(tsPath, 'utf8');

const match = rawTs.match(/export const FOOD_SAFETY_TEMPLATES:\s*FoodSafetyTemplate\[\]\s*=\s*(\[[\s\S]*?\]);/);
if (!match) {
  console.error('Could not find FOOD_SAFETY_TEMPLATES array in saim_templates.ts');
  process.exit(1);
}

const templates = JSON.parse(match[1]);
const mappings = JSON.parse(fs.readFileSync(path.join(__dirname, 'poster_mappings.json'), 'utf8'));

console.log(`Loaded ${templates.length} templates and ${mappings.length} poster mappings.`);

let updatedCount = 0;

for (const m of mappings) {
  const target = templates.find((t) => t.id === m.id);
  if (target) {
    const newImgUrl = `/templates/posters/${m.id}.png`;
    console.log(`Assigning ${m.id} (${target.title}): ${target.imgUrl} -> ${newImgUrl}`);
    target.imgUrl = newImgUrl;
    updatedCount++;
  } else {
    console.warn(`Template with id ${m.id} not found!`);
  }
}

console.log(`\nSuccessfully assigned ${updatedCount}/${mappings.length} posters!`);

// Reconstruct file
const updatedTs = rawTs.replace(
  /export const FOOD_SAFETY_TEMPLATES:\s*FoodSafetyTemplate\[\]\s*=\s*\[[\s\S]*?\];/,
  `export const FOOD_SAFETY_TEMPLATES: FoodSafetyTemplate[] = ${JSON.stringify(templates, null, 2)};`
);

fs.writeFileSync(tsPath, updatedTs, 'utf8');
console.log('Saved updated src/data/saim_templates.ts!');
