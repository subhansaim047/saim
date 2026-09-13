const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const dir = 'public/fitbitepizza/';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const oldCssStart = '<style>\n.floating-call-btn {';
const oldBtnRegex = /<style>\s*\.floating-call-btn\s*\{[\s\S]*?<\/a>/;

const newFloatingCallHtml = `
<style>
.floating-call-btn {
    position: fixed;
    bottom: 30px;
    left: 30px;
    background-color: #fcc332;
    color: #111 !important;
    font-family: 'Luckiest Guy', cursive;
    font-size: 20px;
    padding: 8px 24px 8px 8px;
    border-radius: 50px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.3);
    z-index: 99999;
    display: flex;
    align-items: center;
    gap: 12px;
    text-decoration: none !important;
    transition: all 0.3s ease;
    border: 3px solid #111;
}
.floating-call-btn:hover {
    transform: translateY(-5px) scale(1.05);
    background-color: #111;
    color: #fcc332 !important;
    border-color: #fcc332;
    box-shadow: 0 10px 25px rgba(252, 195, 50, 0.4);
}
.floating-call-btn .icon-circle {
    background-color: #111;
    color: #fcc332;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
}
.floating-call-btn:hover .icon-circle {
    background-color: #fcc332;
    color: #111;
}
.floating-call-btn svg {
    width: 20px;
    height: 20px;
    fill: currentColor;
}
.floating-call-btn span {
    letter-spacing: 1px;
    margin-top: 3px;
}
</style>
<a href="tel:03011337766" class="floating-call-btn">
    <div class="icon-circle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
    </div>
    <span>CALL NOW</span>
</a>
`;

files.forEach(file => {
    let html = fs.readFileSync(path.join(dir, file), 'utf8');
    
    // Remove the old button completely using regex
    if (oldBtnRegex.test(html)) {
        html = html.replace(oldBtnRegex, '');
    }

    // Now insert the new button before </body>
    const $ = cheerio.load(html, { decodeEntities: false });
    
    if (html.indexOf('CALL NOW') === -1 || html.indexOf('icon-circle') === -1) {
        $('body').append('\n' + newFloatingCallHtml + '\n');
        fs.writeFileSync(path.join(dir, file), $.html());
        console.log(`Updated button in ${file}`);
    }
});
