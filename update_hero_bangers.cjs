const fs = require('fs');
const cheerio = require('cheerio');

let html = fs.readFileSync('public/pizzabox/index.html', 'utf8');
const $ = cheerio.load(html, { decodeEntities: false });

// Add Bangers font (chunky bold italic like the image)
if (!html.includes('Bangers')) {
    $('head').append('<link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet">');
}

// Replace hero content
const newHeroHtml = `
<section id="custom-elegancia-hero">
    <div class="ak-hero ak-style1">
        <div class="ak-hero-bg" style="background-image: url('/pizzabox/images/hero-bg-custom.jpg');"></div>
        <div class="hero-text-section">
            <div class="slider-info">
                <div class="hero-title">
                    <h1 class="hero-main-title pizzabox-big-title">
                        <span class="pb-letter" style="--i:0">P</span><span class="pb-letter" style="--i:1">I</span><span class="pb-letter" style="--i:2">Z</span><span class="pb-letter" style="--i:3">Z</span><span class="pb-letter" style="--i:4">A</span><span class="pb-space"> </span><span class="pb-letter" style="--i:5">B</span><span class="pb-letter" style="--i:6">O</span><span class="pb-letter" style="--i:7">X</span>
                    </h1>
                </div>
                <div class="ak-height-30"></div>
                <p class="hero-sub-text">Welcome to our restaurant, where culinary artistry meets exceptional dining experiences. We strive to create a gastronomic haven that tantalizes your taste buds and leaves you with</p>
                <div class="ak-height-70"></div>
                <a class="hero-btn style-1" href="/pizzabox/menu.html">
                    <div class="ak-btn style-5 color-yellow-bg">Order Now</div>
                </a>
            </div>
        </div>
    </div>
</section>
`;

$('#custom-elegancia-hero').replaceWith(newHeroHtml);
fs.writeFileSync('public/pizzabox/index.html', $.html());
console.log('Hero updated with Bangers font letter-by-letter');
