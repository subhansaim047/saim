import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const reviewDir = path.join(rootDir, 'review');
if (!fs.existsSync(reviewDir)) {
  fs.mkdirSync(reviewDir, { recursive: true });
}

// 1. Read and parse templates from src/data/saim_templates.ts
const saimTemplatesPath = path.join(rootDir, 'src/data/saim_templates.ts');
const saimContent = fs.readFileSync(saimTemplatesPath, 'utf8');
const match = saimContent.match(/export const FOOD_SAFETY_TEMPLATES: FoodSafetyTemplate\[\] = (\[[\s\S]*?\]);/);

if (!match) {
  console.error('Could not parse FOOD_SAFETY_TEMPLATES from src/data/saim_templates.ts');
  process.exit(1);
}

const templates = JSON.parse(match[1]);
console.log(`Found ${templates.length} templates defined in src/data/saim_templates.ts`);

// 2. Scan inbound links from blogs and components
const blogDir = path.join(rootDir, 'src/components/blog');
const blogLinks = {};
if (fs.existsSync(blogDir)) {
  const blogFiles = fs.readdirSync(blogDir).filter(f => f.endsWith('.tsx'));
  for (const bf of blogFiles) {
    const content = fs.readFileSync(path.join(blogDir, bf), 'utf8');
    const matches = content.match(/\/food-safety-templates\/[a-zA-Z0-9_-]+/g);
    if (matches) {
      for (const m of matches) {
        const targetSlug = m.replace('/food-safety-templates/', '');
        blogLinks[targetSlug] = blogLinks[targetSlug] || new Set();
        blogLinks[targetSlug].add(`/blog/${bf.replace('.tsx', '')}`);
      }
    }
  }
}

// 3. Compute inbound related links from other templates (TemplateDetailPage logic)
const incomingRelated = {};
const outgoingRelated = {};

for (const t of templates) {
  // Logic from TemplateDetailPage.tsx:
  const related = templates
    .filter(other => other.id !== t.id && (other.type === t.type || other.catSlug === t.catSlug))
    .slice(0, 4);

  outgoingRelated[t.id] = related.map(r => r.slug);

  for (const rel of related) {
    incomingRelated[rel.slug] = incomingRelated[rel.slug] || new Set();
    incomingRelated[rel.slug].add(t.slug);
  }
}

// 4. Word count utility
function countWords(str) {
  if (!str) return 0;
  return str.trim().split(/\s+/).filter(Boolean).length;
}

// Tool-specific unique word content counts (approximate static baseline items)
const TOOL_EXTRA_WORDS = {
  recipe: 92,     // Recipe calculator default ingredients and prep
  cost: 114,      // Food cost calculator burger & fries breakdown
  haccp: 210,     // 7 HACCP principles CCP entries and limits
  quiz: 542,      // 10 Level 2 hygiene questions & explanations
  allergen: 168,  // 6 dishes, ingredients and allergen mappings
  checklist: 186  // Probe temps & 6 opening/closing checklist tasks
};

function getToolType(slug, title, type) {
  const s = slug.toLowerCase();
  const t = title.toLowerCase();

  if (s.includes('recipe') || t.includes('recipe')) return 'recipe';
  if (s.includes('cost') || s.includes('margin') || t.includes('cost') || t.includes('margin')) return 'cost';
  if (s.includes('haccp') || s.includes('flow-chart') || s.includes('hazard-analysis') || s.includes('food-safety-plan') || s.includes('critical-control-point')) return 'haccp';
  if (s.includes('quiz') || t.includes('quiz')) return 'quiz';
  if (s.includes('allergen') || s.includes('allergy') || t.includes('allergen') || t.includes('allergy') || s.includes('natasha')) return 'allergen';
  if (type === 'checklist' || type === 'log' || s.includes('checklist') || s.includes('log') || s.includes('schedule') || s.includes('sheet') || s.includes('opening') || s.includes('closing') || s.includes('sop') || s.includes('audit') || s.includes('delivery') || s.includes('inspection')) {
    return 'checklist';
  }
  return 'standard';
}

function escapeCsv(val) {
  if (val === null || val === undefined) return '""';
  const str = String(val);
  if (str.includes(',') || str.includes('"') || str.includes('\n') || str.includes('\r')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

// 5. Generate CSV Rows
const headers = [
  'slug',
  'title',
  'meta description',
  'type',
  'canonical',
  'word count of unique body text',
  'outbound/inbound links'
];

const rows = [headers.map(escapeCsv).join(',')];

for (const t of templates) {
  const slug = t.slug;
  const title = t.title;
  const metaDesc = t.desc;
  const type = t.type;
  const canonical = `https://www.saimdev.site/food-safety-templates/${slug}`;

  // Unique word count: title + desc + tool-specific unique text
  const toolKind = getToolType(slug, title, type);
  const extraWords = TOOL_EXTRA_WORDS[toolKind] || 0;
  const uniqueWords = countWords(`${title} ${metaDesc}`) + extraWords;

  // Inbound links calculation:
  // - 2 hub links (/tools, /food-safety-templates)
  // - incoming related links from other templates
  // - incoming blog links
  const inHubs = 2; // /tools and /food-safety-templates
  const inRelatedCount = incomingRelated[slug] ? incomingRelated[slug].size : 0;
  const inBlogsCount = blogLinks[slug] ? blogLinks[slug].size : 0;
  const totalInbound = inHubs + inRelatedCount + inBlogsCount;

  // Outbound links calculation:
  // - 1 back to /food-safety-templates
  // - 1 WhatsApp header link
  // - 1 PDF download link
  // - up to 4 related template links
  // - 1 conversion banner WhatsApp link
  const relCount = outgoingRelated[t.id] ? outgoingRelated[t.id].length : 0;
  const totalOutbound = 1 + 1 + 1 + relCount + 1; // 4 fixed + related (total 8 if 4 related)

  const linksSummary = `${totalOutbound} outbound / ${totalInbound} inbound`;

  const row = [
    escapeCsv(slug),
    escapeCsv(title),
    escapeCsv(metaDesc),
    escapeCsv(type),
    escapeCsv(canonical),
    escapeCsv(uniqueWords),
    escapeCsv(linksSummary)
  ];

  rows.push(row.join(','));
}

const csvOutput = rows.join('\n');
const outputPath = path.join(reviewDir, 'inventory.csv');
fs.writeFileSync(outputPath, csvOutput, 'utf8');

console.log(`Generated ${outputPath} with ${templates.length} resource rows.`);
