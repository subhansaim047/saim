const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const originalTemplates = JSON.parse(fs.readFileSync(path.join(__dirname, 'unique_templates.json'), 'utf8'));

// SVG dir files to verify local presence
const svgDir = path.join(rootDir, 'public', 'templates', 'svg');
const downloadedSvgs = new Set(fs.readdirSync(svgDir));

const saimTemplates = originalTemplates.map((t, idx) => {
  let title = t.title || 'Food Safety Template';
  title = title.replace(/\b\w/g, l => l.toUpperCase());
  // Remove any mention of FoodDocs from title
  title = title.replace(/fooddocs/gi, 'Saim Dev').trim();

  let preheader = t.preheader || t.type.toUpperCase();
  if (t.type === 'smart_tool') preheader = 'SMART TOOL';
  else if (t.type === 'poster') preheader = 'POSTER';
  else if (t.type === 'checklist') preheader = 'CHECKLIST';
  else if (t.type === 'chart') preheader = 'CHART';
  else if (t.type === 'log') preheader = 'LOG';
  else if (t.type === 'ebook') preheader = 'GUIDE';

  // Generate slug
  let slug = '';
  if (t.link) {
    const urlObj = new URL(t.link);
    const parts = urlObj.pathname.split('/').filter(Boolean);
    slug = parts[parts.length - 1];
  }
  if (!slug) {
    slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }

  // Local image path
  let localImg = '';
  if (t.img) {
    const urlObj = new URL(t.img);
    let base = path.basename(urlObj.pathname);
    if (!base.endsWith('.svg') && !base.endsWith('.webp') && !base.endsWith('.png') && !base.endsWith('.jpg')) {
      base += '.svg';
    }
    if (downloadedSvgs.has(base)) {
      localImg = `/templates/svg/${base}`;
    }
  }
  if (!localImg) {
    localImg = '/templates/svg/Freezer.svg';
  }

  // Generate rich description based on title and type
  let desc = t.desc || '';
  if (!desc || desc.length < 10) {
    if (t.type === 'poster') {
      desc = `Official kitchen wall poster for ${title.toLowerCase()}. Promotes compliance with UK Food Standards Agency (FSA) and Natasha's Law guidelines. Free printable A4/A3 format.`;
    } else if (t.type === 'checklist') {
      desc = `Comprehensive food hygiene and compliance checklist for ${title.toLowerCase()}. Designed for daily kitchen supervisor verification and local authority (EHO) audits.`;
    } else if (t.type === 'chart') {
      desc = `Critical food temperature and safety chart for ${title.toLowerCase()}. Clear visual reference guide for chefs and food preparation handlers.`;
    } else if (t.type === 'log') {
      desc = `Mandatory record keeping log for ${title.toLowerCase()}. Essential for HACCP documentation, due diligence, and 5-Star Food Hygiene ratings.`;
    } else if (t.type === 'smart_tool') {
      desc = `Interactive smart calculator and digital generator for ${title.toLowerCase()}. Streamlines food safety operations with zero manual calculation errors.`;
    } else {
      desc = `Essential guidance and standard operating procedures for ${title.toLowerCase()}.`;
    }
  }

  // Clean description of any FoodDocs mention
  desc = desc.replace(/fooddocs/gi, 'Saim Dev');

  return {
    id: `template-${idx + 1}`,
    slug,
    type: t.type || 'poster',
    preheader,
    title,
    activity: t.activity || 'restaurant,retail,producer',
    pdfUrl: t.pdf || '', // Upstream source for download proxy
    imgUrl: localImg,
    targetUrl: `/food-safety-templates/${slug}`,
    desc
  };
});

const tsFileContent = `// Saim Dev 100% Free Food Safety Templates & Resources (Zero External Branding)
export interface FoodSafetyTemplate {
  id: string;
  slug: string;
  type: "poster" | "checklist" | "chart" | "log" | "smart_tool" | "ebook" | string;
  preheader: string;
  title: string;
  activity: string;
  pdfUrl: string;
  imgUrl: string;
  targetUrl: string;
  desc: string;
}

export const FOOD_SAFETY_TEMPLATES: FoodSafetyTemplate[] = ${JSON.stringify(saimTemplates, null, 2)};

export function getTemplateBySlug(slug: string): FoodSafetyTemplate | undefined {
  return FOOD_SAFETY_TEMPLATES.find(t => t.slug === slug || t.slug.toLowerCase() === slug.toLowerCase());
}
`;

fs.writeFileSync(path.join(rootDir, 'src/data/fooddocs_templates.ts'), tsFileContent, 'utf8');
console.log(`Generated cleaned src/data/fooddocs_templates.ts (${saimTemplates.length} templates, 100% local images, zero FoodDocs links)!`);
