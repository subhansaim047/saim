const fs = require('fs');
const path = require('path');

const contactPagePath = path.resolve('src/components/ContactPage.tsx');
let cp = fs.readFileSync(contactPagePath, 'utf8');

cp = cp.replace(/sms:\+447473962953/g, 'https://wa.me/447473962953');
cp = cp.replace(/open Instagram/g, 'open WhatsApp');
cp = cp.replace(/Message on SMS/g, 'Message on WhatsApp');

fs.writeFileSync(contactPagePath, cp, 'utf8');
console.log('Fixed ContactPage.tsx line 115');
