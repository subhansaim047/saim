const fs = require('fs');

let html = fs.readFileSync('public/burger-garage/index.html', 'utf8');

html = html.replace(/let animProgress = \(progress - 0\.1\) \/ 0\.6;/g, `
                    // Start when element is 30% into view (progress = 0.3)
                    // Finish when element is 80% up the screen (progress = 0.8)
                    let animProgress = (progress - 0.3) / 0.5;
`);

fs.writeFileSync('public/burger-garage/index.html', html);
console.log('Script updated for perfect timing.');
