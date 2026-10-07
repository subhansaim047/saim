const fs = require('fs');

const updateFile = (file) => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Check if we already added it
    if (content.includes('Chicken Broast Combos')) {
        console.log('Broast section already exists.');
        return;
    }
    
    const broastHTML = `
<!-- CHICKEN BROAST SECTION -->
<section class="elementor-section elementor-top-section pbmit-bg-color-over-image" style="background-color: #fff; padding: 100px 0 80px 0;">
    <div class="elementor-container elementor-column-gap-no">
        <div class="elementor-column elementor-col-100 elementor-top-column">
            <div class="elementor-widget-wrap">
                <!-- Heading -->
                <div class="pbmit-heading-subheading" style="text-align: center; margin-bottom: 50px; width: 100%;">
                    <h4 class="pbmit-element-subtitle" style="color: #e62222; margin-bottom: 10px;">?? Crispy &amp; Juicy</h4>
                    <h2 class="pbmit-element-title" style="font-size: 48px; font-weight: 800; color: #111; text-transform: uppercase; font-family: 'Luckiest Guy', cursive; letter-spacing: 2px;">Chicken Broast</h2>
                </div>
                
                <!-- Deals Grid -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; width: 100%; padding: 0 15px;">
                    
                    <!-- Broast 1 -->
                    <div class="pbmit-deal-card" style="background: #f7f7f7; border-radius: 15px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05); transition: transform 0.3s; text-align: center; border: 2px solid transparent;">
                        <div style="height: 240px; background: url('https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=600&auto=format&fit=crop') center/cover; position: relative;">
                        </div>
                        <div style="padding: 30px 20px;">
                            <h3 style="font-size: 24px; font-weight: 700; margin-bottom: 10px; color: #111;">Quarter Broast</h3>
                            <p style="color: #666; font-size: 15px; margin-bottom: 20px; min-height: 45px;">1 Chest/Leg Piece, Golden Fries, Bun &amp; Garlic Mayo Dip</p>
                            <div style="display: flex; justify-content: center; align-items: center; gap: 10px; margin-bottom: 25px;">
                                <span style="font-size: 28px; font-weight: 900; color: #fcc332;">Rs 550</span>
                            </div>
                            <a href="https://wa.me/923250221111?text=I%20want%20to%20order%20Quarter%20Broast%20for%20Rs%20550" class="elementor-button elementor-size-md" style="background-color: #e62222; color: #fff; width: 100%; border-radius: 8px; font-weight: bold; text-transform: uppercase;">Order Now</a>
                        </div>
                    </div>

                    <!-- Broast 2 -->
                    <div class="pbmit-deal-card" style="background: #f7f7f7; border-radius: 15px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05); transition: transform 0.3s; text-align: center; border: 3px solid #fcc332; position: relative;">
                        <span style="position: absolute; top: 0; left: 50%; transform: translateX(-50%); background: #fcc332; color: #111; padding: 5px 25px; border-radius: 0 0 10px 10px; font-weight: bold; font-size: 14px; z-index: 10; text-transform: uppercase;">Highly Recommended</span>
                        <div style="height: 240px; background: url('https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?q=80&w=600&auto=format&fit=crop') center/cover; position: relative;">
                        </div>
                        <div style="padding: 30px 20px;">
                            <h3 style="font-size: 24px; font-weight: 700; margin-bottom: 10px; color: #111;">Half Broast</h3>
                            <p style="color: #666; font-size: 15px; margin-bottom: 20px; min-height: 45px;">2 Chicken Pieces, Regular Fries, 2 Buns &amp; Garlic Mayo Dip</p>
                            <div style="display: flex; justify-content: center; align-items: center; gap: 10px; margin-bottom: 25px;">
                                <span style="font-size: 28px; font-weight: 900; color: #fcc332;">Rs 999</span>
                            </div>
                            <a href="https://wa.me/923250221111?text=I%20want%20to%20order%20Half%20Broast%20for%20Rs%20999" class="elementor-button elementor-size-md" style="background-color: #fcc332; color: #111; width: 100%; border-radius: 8px; font-weight: bold; text-transform: uppercase;">Order Now</a>
                        </div>
                    </div>

                    <!-- Broast 3 -->
                    <div class="pbmit-deal-card" style="background: #f7f7f7; border-radius: 15px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05); transition: transform 0.3s; text-align: center; border: 2px solid transparent;">
                        <div style="height: 240px; background: url('https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=600&auto=format&fit=crop') center/cover; position: relative;">
                            <span style="position: absolute; top: 15px; right: 15px; background: #e62222; color: #fff; padding: 5px 15px; border-radius: 30px; font-weight: bold; font-size: 14px;">Spicy</span>
                        </div>
                        <div style="padding: 30px 20px;">
                            <h3 style="font-size: 24px; font-weight: 700; margin-bottom: 10px; color: #111;">Full Broast</h3>
                            <p style="color: #666; font-size: 15px; margin-bottom: 20px; min-height: 45px;">4 Chicken Pieces, Large Fries, 4 Buns &amp; Garlic Mayo Dips</p>
                            <div style="display: flex; justify-content: center; align-items: center; gap: 10px; margin-bottom: 25px;">
                                <span style="font-size: 28px; font-weight: 900; color: #fcc332;">Rs 1899</span>
                            </div>
                            <a href="https://wa.me/923250221111?text=I%20want%20to%20order%20Full%20Broast%20for%20Rs%201899" class="elementor-button elementor-size-md" style="background-color: #e62222; color: #fff; width: 100%; border-radius: 8px; font-weight: bold; text-transform: uppercase;">Order Now</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>
<!-- END CHICKEN BROAST SECTION -->
    `;
    
    // Find the marker: <!-- END EXCLUSIVE DEALS SECTION -->
    const marker = '<!-- END EXCLUSIVE DEALS SECTION -->';
    
    if (content.includes(marker)) {
        content = content.replace(marker, marker + '\n\n\t\t\t\t' + broastHTML);
        fs.writeFileSync(file, content);
        console.log(`Successfully added broast section to ${file}`);
    } else {
        console.log('Marker not found in the file.');
    }
};

updateFile('public/pizzabox/index.html');
