const fs = require('fs');
const filePath = 'src/components/DemosPage.tsx';

let content = fs.readFileSync(filePath, 'utf8');
content = content.replace(/\/demos\/dilicious-pizza/g, '/fitbitepizza');

fs.writeFileSync(filePath, content);
console.log("Updated DemosPage.tsx");
