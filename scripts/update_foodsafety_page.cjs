const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'components', 'FoodSafetyTemplatesPage.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Replace href={template.pdfUrl} with href={`/api/download?id=${template.id}`}
content = content.replace(/href=\{template\.pdfUrl\}/g, 'href={`/api/download?id=${template.id}`}');

// Replace any remaining fooddocs comments or strings
content = content.replace(/MATCHING FOODDOCS/gi, 'INTERNAL SAIM DEV FILTERS');
content = content.replace(/FOODDOCS STYLE/gi, 'SAIM DEV STYLE');
content = content.replace(/EXACT 1-TO-1 CONTENT FROM FOODDOCS/gi, "UK FSA & NATASHA'S LAW STANDARDS");

// Update Download PDF buttons to point to /api/download?id=...
content = content.replace(
  /href=\{template\.pdfUrl\}/g,
  'href={`/api/download?id=${template.id}`}'
);

// Update view details link to internal Next.js Link
content = content.replace(
  /<a\s+href=\{template\.targetUrl\}\s+target="_blank"\s+rel="noopener noreferrer"/g,
  '<Link href={`/food-safety-templates/${template.slug}`}'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated FoodSafetyTemplatesPage.tsx');
