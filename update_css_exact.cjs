const fs = require('fs');
const cheerio = require('cheerio');

// Fix HTML
let html = fs.readFileSync('public/pizzabox/index.html', 'utf8');
const $ = cheerio.load(html, { decodeEntities: false });

const newHeroHtml = `
<section id="custom-elegancia-hero">
    <div class="ak-hero ak-style1">
        <div class="ak-hero-bg" style="background-image: url('/pizzabox/images/hero-bg-custom.jpg');"></div>
        <div class="container">
            <div class="hero-text-section">
                <div class="slider-info">
                    <div class="hero-title">
                        <h1 class="hero-main-title">Pizza Box</h1>
                        <h1 class="hero-main-title-1">Luxury Dining</h1>
                    </div>
                    <div class="ak-height-30"></div>
                    <p class="hero-sub-text">Welcome to our restaurant, where culinary artistry meets exceptional dining experiences. We strive to create a gastronomic haven that tantalizes your taste buds.</p>
                    <div class="ak-height-70"></div>
                    <a class="hero-btn style-1" href="/pizzabox/menu.html">
                        <div class="ak-btn style-5 color-yellow-bg">Order Now</div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
`;

$('#custom-elegancia-hero').replaceWith(newHeroHtml);
fs.writeFileSync('public/pizzabox/index.html', $.html());

// Fix CSS
let css = fs.readFileSync('public/pizzabox/css/combined_index.css', 'utf8');
const cssStart = css.indexOf('/* ELEGANCIA CUSTOM HERO STYLES */');
if (cssStart !== -1) {
    css = css.substring(0, cssStart);
}

const newCss = `
/* ELEGANCIA CUSTOM HERO STYLES */
#custom-elegancia-hero {
    position: relative;
    width: 100%;
    min-height: 100vh;
    background-color: #000;
    overflow: hidden;
    margin-top: -115px; /* Pull under header */
    z-index: 1;
}
.ak-hero.ak-style1 {
    width: 100%;
    height: 100vh;
    min-height: 700px;
    position: relative;
    display: flex;
    align-items: center;
}
.ak-hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 0;
}
.ak-hero-bg::before {
    content: '';
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
}
#custom-elegancia-hero .container {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 15px;
}
.hero-text-section {
    width: 100%;
    display: flex;
    align-items: center;
}
.slider-info {
    text-align: left;
    max-width: 700px;
}
.hero-title {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.hero-main-title {
    font-family: 'Baskervville', serif !important;
    font-size: 90px !important;
    font-weight: 400 !important;
    line-height: 1.1 !important;
    margin: 0 !important;
    color: #ffffff !important;
    text-transform: uppercase !important;
}
.hero-main-title-1 {
    font-family: 'Baskervville', serif !important;
    font-style: italic !important;
    font-size: 85px !important;
    font-weight: 400 !important;
    color: #FFD28D !important;
    margin: 0 !important;
    text-transform: uppercase !important;
}
.hero-sub-text {
    font-family: 'Prompt', sans-serif !important;
    font-size: 18px !important;
    line-height: 1.8 !important;
    margin: 0 !important;
    color: #c8c8c8 !important;
    max-width: 550px;
}
.ak-height-30 {
    height: 30px;
}
.ak-height-70 {
    height: 70px;
}
.hero-btn {
    display: inline-block;
    text-decoration: none;
}
.ak-btn {
    display: inline-block;
    background-color: #FFD28D;
    color: #000 !important;
    font-family: 'Prompt', sans-serif !important;
    font-size: 18px !important;
    font-weight: 400 !important;
    padding: 18px 36px !important;
    text-transform: uppercase !important;
    transition: all 0.3s ease !important;
}
.ak-btn:hover {
    background-color: #fff;
    color: #000 !important;
}

@media (max-width: 991px) {
    .hero-main-title { font-size: 60px !important; }
    .hero-main-title-1 { font-size: 55px !important; }
    .ak-height-70 { height: 40px; }
}
@media (max-width: 767px) {
    .hero-main-title { font-size: 45px !important; }
    .hero-main-title-1 { font-size: 40px !important; }
    .hero-sub-text { font-size: 15px !important; }
    .ak-btn { padding: 12px 24px !important; font-size: 15px !important; }
    .ak-height-70 { height: 30px; }
}
`;

fs.writeFileSync('public/pizzabox/css/combined_index.css', css + newCss);
