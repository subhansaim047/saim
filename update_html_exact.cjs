const fs = require('fs');
const cheerio = require('cheerio');

// Update HTML - replace inner content of hero section 
let html = fs.readFileSync('public/pizzabox/index.html', 'utf8');
const $ = cheerio.load(html, { decodeEntities: false });

const newHeroHtml = `
<section id="custom-elegancia-hero">
    <div class="ak-hero ak-style1">
        <div class="ak-hero-bg" style="background-image: url('/pizzabox/images/hero-bg-custom.jpg');"></div>
        <div class="hero-text-section">
            <div class="slider-info">
                <div class="hero-title">
                    <h1 class="hero-main-title">Pizza Box</h1>
                    <h1 class="hero-main-title-1">Luxury Dining</h1>
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
console.log('HTML updated');
