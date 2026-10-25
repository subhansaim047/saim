import fs from 'fs';
import path from 'path';

const blogDescs = {
  "50-percent-off-agency-launch": "Claim 50% off Next.js web development during our agency launch. Fast turnarounds, bespoke code, and high performance for UK small businesses.", // 141 -> let's make 148
  "free-website-for-local-business": "Saim Dev is building 5 free Next.js websites for independent UK local businesses to expand our portfolio. Learn how to claim your slot today.", // 143 -> let's check
  "how-to-create-compliant-14-allergen-matrix-uk-restaurants": "Auditing recipes and building an allergen matrix aligned with FSA guidance under Natasha's Law. Free interactive digital generator included.",
  "how-to-scale-recipes-commercial-catering-batch-calculator": "Master recipe scaling for catering kitchens. Avoid seasoning errors and calculate precise portion costs with our free interactive tool online.",
  "how-to-write-haccp-plan-uk-food-business-step-by-step": "Plain-English guide to creating a HACCP plan for UK takeaways aligned with FSA rules. Build hazard tables with our free digital tool online.",
  "level-2-food-hygiene-practice-test-kitchen-staff-guide": "Test your kitchen team with our Level 2 Food Hygiene practice test. Review temperature danger zones, cross-contamination, and hygiene laws today.",
  "mastering-food-cost-percentage-commercial-kitchen-calculator": "Calculate food cost percentage and protect 70%+ margins. Use our free interactive commercial kitchen calculator built for UK takeaways and cafes.",
  "natashas-law-ppds-food-labelling-guide": "Complete guide to Natasha's Law and PPDS food labelling in the UK. Learn mandatory rules for ingredient lists and allergen emphasis on packaging.",
  "sfbb-daily-kitchen-opening-closing-checklist-guide": "Essential SFBB opening and closing hygiene checks every UK kitchen must log daily. Prevent contamination and pass EHO audits with our free tool.",
  "why-small-business-needs-website-2026": "Why UK small businesses need a fast Next.js website in 2026. Turn local searches into paying customers with modern mobile performance and local SEO."
};

for (const [slug, desc] of Object.entries(blogDescs)) {
  const len = desc.length;
  console.log(`${slug}: len=${len}`);
  if (len < 140 || len > 155) {
    throw new Error(`FAIL on ${slug}: ${len}`);
  }
}

// Write to files
for (const [slug, desc] of Object.entries(blogDescs)) {
  const p = path.join('app/blog', slug, 'page.tsx');
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf8');
    content = content.replace(/description: ".*?",/g, `description: "${desc}",`);
    fs.writeFileSync(p, content, 'utf8');
  }
}
console.log("ALL BLOG DESCRIPTIONS NOW IN 140-155 RANGE!");
