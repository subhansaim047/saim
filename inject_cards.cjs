const fs = require('fs');
const cheerio = require('cheerio');

const updateFile = (file) => {
    let content = fs.readFileSync(file, 'utf8');
    
    const coupleComboCard = `
                    <!-- Deal 4: Couple Combo -->
                    <div class="pbmit-deal-card" style="background: #fff; border-radius: 15px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.08); transition: transform 0.3s; text-align: center; border: 2px solid transparent;">
                        <div style="height: 240px; background: url('/pizzabox/images/couple-combo.jpg') center/cover; position: relative;">
                            <span style="position: absolute; top: 15px; right: 15px; background: #e62222; color: #fff; padding: 5px 15px; border-radius: 30px; font-weight: bold; font-size: 14px;">Save 25%</span>
                        </div>
                        <div style="padding: 30px 20px;">
                            <h3 style="font-size: 24px; font-weight: 700; margin-bottom: 10px; color: #111;">Couple Combo</h3>
                            <p style="color: #666; font-size: 15px; margin-bottom: 20px; min-height: 45px;">1 Medium Pizza, 2 Zinger Burgers &amp; 2 Cans</p>
                            <div style="display: flex; justify-content: center; align-items: center; gap: 10px; margin-bottom: 25px;">
                                <span style="text-decoration: line-through; color: #999; font-size: 16px;">Rs 2400</span>
                                <span style="font-size: 28px; font-weight: 900; color: #fcc332;">Rs 1899</span>
                            </div>
                            <a href="https://wa.me/923250221111?text=I%20want%20to%20order%20Couple%20Combo%20Deal%20for%20Rs%201899" class="elementor-button elementor-size-md" style="background-color: #e62222; color: #fff; width: 100%; border-radius: 8px; font-weight: bold; text-transform: uppercase;">Order Now</a>
                        </div>
                    </div>
    `;

    const familyBucketCard = `
                    <!-- Broast 4: Family Bucket -->
                    <div class="pbmit-deal-card" style="background: #f7f7f7; border-radius: 15px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05); transition: transform 0.3s; text-align: center; border: 2px solid transparent;">
                        <div style="height: 240px; background: url('/pizzabox/images/family-broast-bucket.jpg') center/cover; position: relative;">
                            <span style="position: absolute; top: 15px; right: 15px; background: #e62222; color: #fff; padding: 5px 15px; border-radius: 30px; font-weight: bold; font-size: 14px;">Mega Saver</span>
                        </div>
                        <div style="padding: 30px 20px;">
                            <h3 style="font-size: 24px; font-weight: 700; margin-bottom: 10px; color: #111;">Family Broast Bucket</h3>
                            <p style="color: #666; font-size: 15px; margin-bottom: 20px; min-height: 45px;">8 Pcs Crispy Chicken, Large Fries, 4 Buns &amp; 1.5L Drink</p>
                            <div style="display: flex; justify-content: center; align-items: center; gap: 10px; margin-bottom: 25px;">
                                <span style="font-size: 28px; font-weight: 900; color: #fcc332;">Rs 3499</span>
                            </div>
                            <a href="https://wa.me/923250221111?text=I%20want%20to%20order%20Family%20Broast%20Bucket%20for%20Rs%203499" class="elementor-button elementor-size-md" style="background-color: #e62222; color: #fff; width: 100%; border-radius: 8px; font-weight: bold; text-transform: uppercase;">Order Now</a>
                        </div>
                    </div>
    `;

    // The deals grid ends right before the Call to Action Buttons
    // We can inject the Couple Combo Deal right before the closing </div> of that grid.
    
    // Find the deals grid closing div for Exclusive Deals
    let firstGridIndex = content.indexOf('<!-- Call to Action Buttons -->');
    if (firstGridIndex !== -1) {
        // Go backwards to find the </div> closing the grid
        let closingDivIndex = content.lastIndexOf('</div>', firstGridIndex);
        if (closingDivIndex !== -1) {
            content = content.substring(0, closingDivIndex) + coupleComboCard + '\n' + content.substring(closingDivIndex);
        }
    }
    
    // The Broast grid ends right before <!-- END CHICKEN BROAST SECTION -->
    let broastSectionEnd = content.indexOf('<!-- END CHICKEN BROAST SECTION -->');
    if (broastSectionEnd !== -1) {
        // Go backwards to find the inner </div> closing the grid
        // The structure is: </div> </div> </div> </div> </section> <!-- END CHICKEN BROAST SECTION -->
        // We need to insert before the 4 closing divs.
        let gridEndStr = '</div>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- END CHICKEN BROAST SECTION -->';
        if (content.includes(gridEndStr)) {
            content = content.replace(gridEndStr, familyBucketCard + '\n                ' + gridEndStr);
        } else {
            console.log('Could not cleanly inject broast card. using regex fallback.');
            content = content.replace(/(<!-- Broast 3.*?<\/div>\s*<\/div>\s*<\/div>)/s, '$1' + familyBucketCard);
        }
    }
    
    fs.writeFileSync(file, content);
    console.log('Successfully injected the 4th cards.');
};

updateFile('public/pizzabox/index.html');
