const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const oldFile = path.join(rootDir, 'src', 'data', 'fooddocs_templates.ts');
const newFile = path.join(rootDir, 'src', 'data', 'saim_templates.ts');

if (fs.existsSync(oldFile)) {
  fs.copyFileSync(oldFile, newFile);
  fs.unlinkSync(oldFile);
  console.log('Renamed fooddocs_templates.ts to saim_templates.ts');
}

// Update imports
const filesToUpdate = [
  path.join(rootDir, 'src', 'components', 'FoodSafetyTemplatesPage.tsx'),
  path.join(rootDir, 'src', 'components', 'TemplateDetailPage.tsx'),
  path.join(rootDir, 'app', 'api', 'download', 'route.ts'),
  path.join(rootDir, 'app', 'food-safety-templates', '[slug]', 'page.tsx')
];

filesToUpdate.forEach(f => {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    content = content.replace(/@\/data\/fooddocs_templates/g, '@/data/saim_templates');
    fs.writeFileSync(f, content, 'utf8');
    console.log(`Updated import in ${path.basename(f)}`);
  }
});
