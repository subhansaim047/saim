const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');

const filePath = path.join(__dirname, '../../public/demos/dilicious-pizza/index.html');
const html = fs.readFileSync(filePath, 'utf-8');

const $ = cheerio.load(html);

const newMenu = `
<li class="menu-item"><a href="index.html">Home</a></li>
<li class="menu-item"><a href="#about">About Us</a></li>
<li class="menu-item"><a href="#menu">Menu</a></li>
<li class="menu-item"><a href="#reservation">Reservation</a></li>
<li class="menu-item"><a href="#services">Our Services</a></li>
<li class="menu-item"><a href="#contact">Contact Us</a></li>
`;

$('#pbmit-top-menu').html(newMenu);

fs.writeFileSync(filePath, $.html());
console.log('Menu updated successfully!');
