const fs = require('fs');
const cheerio = require('cheerio');

const updateFile = (file) => {
    let content = fs.readFileSync(file, 'utf8');

    // Remove the swiper script if we added it
    const swiperScriptRegex = /<script>\s*document\.addEventListener\('DOMContentLoaded', function\(\) \{\s*if \(typeof Swiper !== 'undefined'\) \{[\s\S]*?<\/script>/;
    content = content.replace(swiperScriptRegex, '');

    const $ = cheerio.load(content, { decodeEntities: false });

    // Change Playfair Display to Baskervville
    $('link[href*="Playfair+Display"]').attr('href', 'https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&display=swap');
    if ($('link[href*="Baskervville"]').length === 0) {
        $('head').append(`<link href="https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&display=swap" rel="stylesheet">`);
    }

    // Replace the custom-elegancia-hero section
    const oldHero = $('#custom-elegancia-hero');
    if (oldHero.length) {
        const newHeroHtml = `
<section id="custom-elegancia-hero">
    <div class="ak-hero">
        <div class="ak-hero-bg" style="background-image: url('/pizzabox/images/hero-bg-custom.jpg');"></div>
        <div class="hero-text-section">
            <div class="hero-title">
                <h1 class="hero-main-title">Pizza Box</h1>
                <h1 class="hero-main-title-1">Luxury Dining</h1>
            </div>
            <div class="hero-spacing-1"></div>
            <p class="hero-sub-text">Welcome to our restaurant, where culinary artistry meets exceptional dining experiences. We strive to create a gastronomic haven that tantalizes your taste buds.</p>
            <div class="hero-spacing-2"></div>
            <a class="hero-btn" href="/pizzabox/menu.html">Order Now</a>
        </div>
    </div>
</section>
        `;
        oldHero.replaceWith(newHeroHtml);
        console.log('Replaced custom hero with static elegant version.');
    } else {
        console.log('Could not find #custom-elegancia-hero.');
    }

    fs.writeFileSync(file, $.html());
};

updateFile('public/pizzabox/index.html');
