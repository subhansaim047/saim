const fs = require('fs');

// 1. Update CSS in app.css
let css = fs.readFileSync('public/burger-garage/assets/css/app.css', 'utf8');

// Remove old burger part classes
css = css.replace(/\.burger-part-1 \{[\s\S]*?floatSlow 3s ease-in-out 1\.4s infinite; \}/g, '');

const newCssClasses = `
.burger-part-1 { top: 0%; z-index: 8; }
.burger-part-2 { top: 12%; z-index: 7; }
.burger-part-3 { top: 25%; z-index: 6; }
.burger-part-4 { top: 38%; z-index: 5; }
.burger-part-5 { top: 50%; z-index: 4; }
.burger-part-6 { top: 62%; z-index: 3; }
.burger-part-7 { top: 75%; z-index: 2; }
.burger-part-8 { top: 88%; z-index: 1; }

.burger-part {
    position: absolute;
    max-width: 300px;
    transition: transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
`;
css = css + newCssClasses;
fs.writeFileSync('public/burger-garage/assets/css/app.css', css);

// 2. Update HTML to inject the scroll script
let html = fs.readFileSync('public/burger-garage/index.html', 'utf8');

const scriptToInject = `
    <!-- Burger Scroll Animation Script -->
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const wrapper = document.querySelector('.burger-exploding-wrapper');
            const parts = document.querySelectorAll('.burger-part');
            
            if (wrapper && parts.length > 0) {
                window.addEventListener('scroll', function() {
                    const rect = wrapper.getBoundingClientRect();
                    const windowHeight = window.innerHeight;
                    
                    // Calculate visibility progress (0 when entering from bottom, 1 when middle)
                    let progress = 1 - (rect.top / windowHeight);
                    if (progress < 0) progress = 0;
                    if (progress > 1) progress = 1;
                    
                    // Apply different translateY multipliers for each part to create exploding effect
                    // Parts further from the center move more
                    parts.forEach((part, index) => {
                        // Spread factor: middle parts move less, outer parts move more
                        const factor = (4 - index) * 20; 
                        
                        // When progress is 0 (not visible), they are together. 
                        // When progress is 1 (visible), they spread out.
                        // Actually, let's make them start spread out and come together!
                        // Or start together and spread out as you scroll down.
                        const yOffset = factor * (progress - 0.5);
                        
                        part.style.transform = \`translateY(\${yOffset}px)\`;
                    });
                });
            }
        });
    </script>
</body>`;

html = html.replace('</body>', scriptToInject);
fs.writeFileSync('public/burger-garage/index.html', html);
console.log('Fixed burger order and added scroll animation script.');
