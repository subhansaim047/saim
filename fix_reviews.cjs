const fs = require('fs');

const file = 'public/burger-garage/index.html';
let content = fs.readFileSync(file, 'utf8');

// The reviews use the same name and text multiple times. Let's make them look real.
content = content.replace('<h6><span class="me-1">Sarah Johnson </span><span class="dark-gray"> | Customer</span></h6>', '<h6><span class="me-1">Ali Khan </span><span class="dark-gray"> | Customer</span></h6>');

// Second occurrence (since replace only replaces first match by default unless global regex is used)
content = content.replace('<h6><span class="me-1">Sarah Johnson </span><span class="dark-gray"> | Customer</span></h6>', '<h6><span class="me-1">Fatima Ahmed </span><span class="dark-gray"> | Food Blogger</span></h6>');

content = content.replace('<h6><span class="me-1">Sarah Johnson </span><span class="dark-gray"> | Customer</span></h6>', '<h6><span class="me-1">Usman Tariq </span><span class="dark-gray"> | Customer</span></h6>');


fs.writeFileSync(file, content, 'utf8');
console.log("Updated index.html reviews");
