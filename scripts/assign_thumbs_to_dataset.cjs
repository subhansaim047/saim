const fs = require('fs');
const path = require('path');

const tsPath = path.resolve(__dirname, '../src/data/saim_templates.ts');
let content = fs.readFileSync(tsPath, 'utf8');

// Update interface to include thumbUrl
if (!content.includes('thumbUrl?: string;')) {
  content = content.replace(
    'imgUrl: string;',
    'imgUrl: string;\n  thumbUrl?: string;'
  );
}

const jsonMatch = content.match(/export const FOOD_SAFETY_TEMPLATES: FoodSafetyTemplate\[\] = (\[[\s\S]*?\]);/);
const templates = JSON.parse(jsonMatch[1]);

templates.forEach(t => {
  const thumbPath = path.resolve(__dirname, `../public/templates/thumbs/${t.id}.webp`);
  if (fs.existsSync(thumbPath)) {
    t.thumbUrl = `/templates/thumbs/${t.id}.webp`;
  } else {
    t.thumbUrl = t.imgUrl;
  }

  // Update posters and charts to use optimized .webp full image
  if (t.imgUrl.endsWith('.png')) {
    const webpPath = path.resolve(__dirname, `../public${t.imgUrl.replace(/\.png$/, '.webp')}`);
    if (fs.existsSync(webpPath)) {
      t.imgUrl = t.imgUrl.replace(/\.png$/, '.webp');
    }
  }
});

content = content.replace(
  jsonMatch[0],
  `export const FOOD_SAFETY_TEMPLATES: FoodSafetyTemplate[] = ${JSON.stringify(templates, null, 2)};`
);

fs.writeFileSync(tsPath, content, 'utf8');
console.log(`Updated all ${templates.length} templates with thumbUrl and optimized WebP imgUrl!`);
