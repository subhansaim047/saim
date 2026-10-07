const fs = require('fs');

const updateFile = (file) => {
    let content = fs.readFileSync(file, 'utf8');

    // Remove old block
    const cssStart = content.indexOf('/* ELEGANCIA CUSTOM HERO STYLES */');
    if (cssStart !== -1) {
        content = content.substring(0, cssStart);
    }

    const newCss = `
/* ELEGANCIA CUSTOM HERO STYLES */
#custom-elegancia-hero {
    position: relative;
    width: 100%;
    height: 100vh;
    min-height: 800px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000;
    overflow: hidden;
    margin-top: -115px;
    z-index: 1;
}
.ak-hero {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
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
.hero-text-section {
    position: relative;
    z-index: 2;
    text-align: center;
    color: #fff;
    max-width: 900px;
    padding: 0 15px;
    margin-top: 80px;
}
.hero-title {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.hero-main-title {
    font-family: 'Baskervville', serif !important;
    font-size: 110px !important;
    font-weight: 400 !important;
    line-height: 1 !important;
    margin: 0 !important;
    color: #ffffff !important;
    text-transform: none !important;
}
.hero-main-title-1 {
    font-family: 'Baskervville', serif !important;
    font-style: italic !important;
    font-size: 100px !important;
    font-weight: 400 !important;
    color: #FFD28D !important;
    margin: -25px 0 0 0 !important;
    text-transform: none !important;
}
.hero-sub-text {
    font-family: 'Inter', sans-serif !important;
    font-size: 17px !important;
    line-height: 1.8 !important;
    margin: 0 auto !important;
    max-width: 650px !important;
    color: #dfdfdf !important;
}
.hero-btn {
    display: inline-block;
    background: transparent;
    border: 1px solid #FFD28D !important;
    color: #000 !important;
    background-color: #FFD28D !important;
    font-family: 'Inter', sans-serif !important;
    font-size: 14px !important;
    font-weight: 600 !important;
    padding: 16px 42px !important;
    text-transform: uppercase !important;
    letter-spacing: 1.5px !important;
    text-decoration: none !important;
    transition: all 0.4s ease !important;
    border-radius: 0 !important;
}
.hero-btn:hover {
    background-color: transparent !important;
    color: #FFD28D !important;
}
.hero-spacing-1 {
    height: 30px;
}
.hero-spacing-2 {
    height: 45px;
}
@media (max-width: 991px) {
    .hero-main-title { font-size: 80px !important; }
    .hero-main-title-1 { font-size: 70px !important; margin-top: -15px !important; }
}
@media (max-width: 767px) {
    .hero-main-title { font-size: 55px !important; }
    .hero-main-title-1 { font-size: 50px !important; margin-top: -10px !important; }
    #custom-elegancia-hero { min-height: 600px; }
    .hero-spacing-1 { height: 20px; }
    .hero-spacing-2 { height: 30px; }
    .hero-btn { padding: 12px 30px !important; font-size: 13px !important; }
}
`;

    fs.writeFileSync(file, content + newCss);
};

updateFile('public/pizzabox/css/combined_index.css');
