const fs = require('fs');
const path = require('path');

const demosPath = path.resolve('src/components/DemosPage.tsx');
let code = fs.readFileSync(demosPath, 'utf8');

code = code.replace(/badge:\s*"New 1:1 Demo"/g, 'badge: "Production Architecture"');
code = code.replace(
  'description: "A premium, fully scraped variant of the Royal Fare template."',
  'description: "Bespoke high-performance digital menu & fast-casual restaurant architecture."'
);
code = code.replace('"Exact perfect clone"', '"Pixel-Perfect Responsive Engineering"');
code = code.replace(
  'description: "A premium 1-to-1 restaurant website template clone ready for customization."',
  'description: "Bespoke fine-dining & luxury hospitality web experience tailored for reservations."'
);
code = code.replace(/badge:\s*"Template"/g, 'badge: "Bespoke Architecture"');
code = code.replace(/badge:\s*"Featured Template"/g, 'badge: "Featured Production"');
code = code.replace('"Full Template"', '"Complete Platform"');
code = code.replace(
  'description: "An ultra-luxurious, editorial aesthetic beauty salon template',
  'description: "An ultra-luxurious, editorial aesthetic beauty salon platform'
);
code = code.replace(
  'description: "A 100% pixel-perfect 1:1 build of the premier Studio-D Brickell salon in Miami, FL.',
  'description: "A high-performance custom digital flagship engineered for premier salons and luxury studios.'
);
code = code.replace('"1:1 Pixel Perfect"', '"Pixel-Perfect UI"');
code = code.replace('"100% 1:1 Pixel-Perfect Visual Fidelity"', '"100% Pixel-Perfect Visual Fidelity"');
code = code.replace(
  'title: "LIANA - Hair & Beauty Salon Native Template"',
  'title: "LIANA - Luxury Hair & Beauty Salon Experience"'
);
code = code.replace(
  'description: "A pixel-perfect, ultra-fast native recreation of the luxury LIANA Hair & Beauty Salon template.',
  'description: "A pixel-perfect, ultra-fast custom web architecture engineered for luxury hair & beauty brands.'
);
code = code.replace(
  'description: "A premium 1-to-1 restaurant website showcasing dynamic scroll animations',
  'description: "A bespoke culinary web platform showcasing dynamic scroll animations'
);

fs.writeFileSync(demosPath, code, 'utf8');
console.log('DemosPage.tsx successfully updated with professional agency vocabulary!');
