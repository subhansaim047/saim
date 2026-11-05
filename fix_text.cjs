const fs = require('fs');
const path = require('path');

const dir = 'public/burger-garage';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

for (const file of files) {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');
    
    // Fix garbled Opening Hours
    content = content.replace(/<p class="lead dark-gray">(\?\?\?\?\?\? \?\?\? 9 \?\?\? \?\? \?\?\? 12 |OU\^OO U\+U\? OO"O- 9 O"OU' O3U' OO O 12 )<\/p>/g, '<p class="lead dark-gray">Every Day 09:00 AM to 10:00 PM</p>');
    
    // Fix 10PM:00pm
    content = content.replace(/10PM:00pm/g, '10:00 PM');
    content = content.replace(/09:00am/g, '09:00 AM');
    
    // Change info@example.com to info@burgergarage.com
    content = content.replace(/info@example\.com/g, 'info@burgergarage.com');
    content = content.replace(/email@example\.com/g, 'info@burgergarage.com');
    content = content.replace(/email@info\.example\.com/g, 'info@burgergarage.com');
    
    // Change Phone numbers to something standard or keep them.
    
    fs.writeFileSync(path.join(dir, file), content, 'utf8');
}
console.log('Fixed text issues.');
