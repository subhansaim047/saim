const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const uniqueTemplates = JSON.parse(fs.readFileSync(path.join(__dirname, 'unique_templates.json'), 'utf8'));

// Clean up titles, descriptions, and formats
const cleaned = uniqueTemplates.map((t, idx) => {
  let title = t.title || 'Food Safety Template';
  // Capitalize properly if needed
  title = title.replace(/\b\w/g, l => l.toUpperCase());
  
  let preheader = t.preheader || t.type.toUpperCase();
  if (t.type === 'smart_tool') preheader = 'SMART TOOL';
  else if (t.type === 'poster') preheader = 'POSTER';
  else if (t.type === 'checklist') preheader = 'CHECKLIST';
  else if (t.type === 'chart') preheader = 'CHART';
  else if (t.type === 'log') preheader = 'LOG';
  else if (t.type === 'ebook') preheader = 'GUIDE';

  return {
    id: `template-${idx + 1}`,
    type: t.type || 'poster',
    preheader,
    title,
    activity: t.activity || 'restaurant,retail,producer',
    pdfUrl: t.pdf || '',
    imgUrl: t.img || 'https://www.fooddocs.com/hubfs/HACCP_templates/Freezer.svg',
    targetUrl: t.link || '',
    desc: t.desc || ''
  };
});

const tsContent = `// Auto-generated 1-to-1 FoodDocs Templates Dataset
export interface FoodSafetyTemplate {
  id: string;
  type: "poster" | "checklist" | "chart" | "log" | "smart_tool" | "ebook" | string;
  preheader: string;
  title: string;
  activity: string;
  pdfUrl: string;
  imgUrl: string;
  targetUrl: string;
  desc: string;
}

export const FOOD_SAFETY_TEMPLATES: FoodSafetyTemplate[] = ${JSON.stringify(cleaned, null, 2)};
`;

fs.writeFileSync(path.join(rootDir, 'src/data/fooddocs_templates.ts'), tsContent, 'utf8');
console.log(`Generated src/data/fooddocs_templates.ts with ${cleaned.length} templates!`);
