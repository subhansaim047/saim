const fs = require('fs');
const content = fs.readFileSync('src/data/tool_deep_content.ts', 'utf8');
console.log('File length:', content.length);
console.log('Sample preview:\n', content.slice(0, 1500));
