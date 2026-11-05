const fs = require('fs');

const file = 'public/burger-garage/about.html';
let content = fs.readFileSync(file, 'utf8');

// The reviews use the same name and text multiple times. Let's make them look real.
content = content.replace('<h6><span class="me-1">Sarah Johnson </span><span class="dark-gray"> | Customer</span></h6>', '<h6><span class="me-1">Ali Khan </span><span class="dark-gray"> | Customer</span></h6>');

content = content.replace('<h6><span class="me-1">Sarah Johnson </span><span class="dark-gray"> | Customer</span></h6>', '<h6><span class="me-1">Fatima Ahmed </span><span class="dark-gray"> | Food Blogger</span></h6>');

content = content.replace('<h6><span class="me-1">Sarah Johnson </span><span class="dark-gray"> | Customer</span></h6>', '<h6><span class="me-1">Usman Tariq </span><span class="dark-gray"> | Customer</span></h6>');

// Also update the review text slightly so it's not identically repeated
content = content.replace('"Consistency is key, and this place nails it every time. Whether it\'s a quick lunch or a late-night snack, the quality is consistently top-notch."', '"The flavors are incredible! Best burgers in Pakistan, hands down. Highly recommended for weekend hangouts."');

content = content.replace('"Consistency is key, and this place nails it every time. Whether it\'s a quick lunch or a late-night snack, the quality is consistently top-notch."', '"Consistency is key, and Burger Garage nails it every time. I always order their Midnight Deals!"');

fs.writeFileSync(file, content, 'utf8');
console.log("Updated about.html reviews");
