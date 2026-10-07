const fs = require('fs');

const updateFile = (file) => {
    let content = fs.readFileSync(file, 'utf8');

    // 1. Remove existing CTA buttons in Deals if they exist
    const oldBtnsStart = '<!-- Call to Action Buttons -->';
    const oldBtnsEnd = '<!-- END EXCLUSIVE DEALS SECTION -->';
    
    // Instead of regex, let's just find the closing tags of the grid and inject our standard buttons
    
    const standardBtns = `
                <!-- Section CTA Buttons -->
                <div class="section-cta-buttons" style="display: flex; justify-content: center; align-items: center; gap: 20px; margin-top: 50px; flex-wrap: wrap; width: 100%;">
                    <a href="/pizzabox/menu.html" class="pbmit-btn pbmit-btn-outline" onmouseover="this.style.backgroundColor='#e62222'; this.style.color='#fff'" onmouseout="this.style.backgroundColor='transparent'; this.style.color='#e62222'" style="border: 2px solid #e62222; color: #e62222; padding: 15px 40px; border-radius: 30px; font-weight: bold; text-transform: uppercase; text-decoration: none; transition: 0.3s; display: inline-flex; align-items: center; gap: 10px;">View More</a>
                    <a href="https://wa.me/923250221111" class="pbmit-btn" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'" style="background-color: #e62222; color: #fff; padding: 17px 40px; border-radius: 30px; font-weight: bold; text-transform: uppercase; text-decoration: none; transition: 0.3s; display: inline-flex; align-items: center; gap: 10px;">Order Now</a>
                </div>
            </div>
        </div>
    </div>
</section>`;

    // Remove old CTA from deals
    if (content.includes('<!-- Call to Action Buttons -->')) {
        content = content.replace(/<!-- Call to Action Buttons -->[\s\S]*?<\/section>/, standardBtns);
    } else {
        content = content.replace(/<\/div>\s*<\/div>\s*<\/div>\s*<\/section>\s*<!-- END EXCLUSIVE DEALS SECTION -->/, standardBtns + '\n<!-- END EXCLUSIVE DEALS SECTION -->');
    }

    // Add to Broast
    if (!content.includes('<!-- END CHICKEN BROAST SECTION -->')) console.log("Can't find Broast end");
    content = content.replace(/<\/div>\s*<\/div>\s*<\/div>\s*<\/section>\s*<!-- END CHICKEN BROAST SECTION -->/, standardBtns + '\n<!-- END CHICKEN BROAST SECTION -->');

    // Add to Desi
    if (!content.includes('<!-- END DESI MENU SECTION -->')) console.log("Can't find Desi end");
    content = content.replace(/<\/div>\s*<\/div>\s*<\/div>\s*<\/section>\s*<!-- END DESI MENU SECTION -->/, standardBtns + '\n<!-- END DESI MENU SECTION -->');

    fs.writeFileSync(file, content);
    console.log('Successfully added View More & Order Now buttons to all 3 sections.');
};

updateFile('public/pizzabox/index.html');
