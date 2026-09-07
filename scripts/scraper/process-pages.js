const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');

const mappings = [
  { src: 'index.html', dest: 'about-us.html' },
  { src: 'index_1.html', dest: 'menu.html' },
  { src: 'index_2.html', dest: 'reservation.html' },
  { src: 'index_3.html', dest: 'contact-us.html' },
  { src: 'index_4.html', dest: 'our-services.html' }
];

const newMenu = `
<li class="menu-item"><a href="index.html">Home</a></li>
<li class="menu-item"><a href="about-us.html">About Us</a></li>
<li class="menu-item"><a href="menu.html">Menu</a></li>
<li class="menu-item"><a href="reservation.html">Reservation</a></li>
<li class="menu-item"><a href="our-services.html">Our Services</a></li>
<li class="menu-item"><a href="contact-us.html">Contact Us</a></li>
`;

const aggressiveCSS = `
    <style>
        /* Force black background on theme color sections */
        .pbmit-bg-color-globalcolor, 
        .pbmit-elementor-bg-color-globalcolor,
        .pbmit-bg-color-globalcolor > .elementor-background-overlay,
        .pbmit-elementor-bg-color-globalcolor > .elementor-background-overlay,
        .pbmit-bg-color-globalcolor::before,
        .pbmit-elementor-bg-color-globalcolor::before {
            background-color: #000000 !important;
            background-image: none !important;
        }
    </style>
</head>
`;

const targetDir = path.join(__dirname, '../../public/demos/dilicious-pizza/');

// 1. Update the new pages
mappings.forEach(m => {
  const html = fs.readFileSync(path.join(__dirname, 'temp-scrape', m.src), 'utf8');
  const $ = cheerio.load(html);
  
  // Replace menu
  $('#pbmit-top-menu').html(newMenu);
  
  let newHtml = $.html();
  // Inject CSS
  newHtml = newHtml.replace('</head>', aggressiveCSS);
  
  fs.writeFileSync(path.join(targetDir, m.dest), newHtml);
  console.log('Processed and saved', m.dest);
});

// 2. Update the homepage (index.html) to have correct links
const homeHtmlPath = path.join(targetDir, 'index.html');
let homeHtml = fs.readFileSync(homeHtmlPath, 'utf8');
const $home = cheerio.load(homeHtml);
$home('#pbmit-top-menu').html(newMenu);
fs.writeFileSync(homeHtmlPath, $home.html());
console.log('Processed and saved index.html');

