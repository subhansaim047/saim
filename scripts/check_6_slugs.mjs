import fs from 'fs';

const pagePlan = JSON.parse(fs.readFileSync('src/data/page_plan.json', 'utf8'));
const targets = [
  'allergy-matrix',
  'commercial-kitchen-food-cost-percentage-calculator',
  'recipe-batch-scaling-calculator',
  'haccp-plan-template',
  'freezer-temperature-chart',
  'kitchen-cleaning-schedule-template'
];

targets.forEach(s => {
  const p = pagePlan[s];
  console.log(s, '->', p ? p.bucket : 'NOT FOUND IN PLAN');
});
