const fs = require('fs');

let html = fs.readFileSync('public/burger-garage/index.html', 'utf8');

html = html.replace(/<!-- Burger Scroll Animation Script -->[\s\S]*?<\/script>/, `
    <!-- Burger Scroll Animation Script -->
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const wrapper = document.querySelector('.burger-exploding-wrapper');
            const parts = document.querySelectorAll('.burger-part');
            
            // Exact offsets from Frenchyse website data-y-end attributes
            const endOffsets = [-100, -120, -30, 0, 70, 110, 160, 165];
            
            if (wrapper && parts.length > 0) {
                window.addEventListener('scroll', function() {
                    const rect = wrapper.getBoundingClientRect();
                    const windowHeight = window.innerHeight;
                    
                    // progress is 0 when the top of the wrapper hits the bottom of the screen
                    // progress is 1 when the top of the wrapper hits the top of the screen
                    let progress = 1 - (rect.top / windowHeight);
                    
                    // We want the animation to start shortly after it enters the screen (e.g., progress 0.2)
                    // And fully explode when it's in the middle/upper part of the screen (e.g., progress 0.8)
                    let animProgress = (progress - 0.1) / 0.6;
                    
                    // Clamp between 0 and 1
                    if (animProgress < 0) animProgress = 0;
                    if (animProgress > 1) animProgress = 1;
                    
                    // Optional easing for smoother look (ease-out cubic)
                    const easeProgress = 1 - Math.pow(1 - animProgress, 3);
                    
                    parts.forEach((part, index) => {
                        if (index < endOffsets.length) {
                            // Starts at 0 (assembled), goes to endOffsets[index] (exploded)
                            const yOffset = endOffsets[index] * easeProgress;
                            part.style.transform = \`translateY(\${yOffset}px)\`;
                        }
                    });
                });
                
                // Trigger once on load to set initial state
                window.dispatchEvent(new Event('scroll'));
            }
        });
    </script>`);

fs.writeFileSync('public/burger-garage/index.html', html);
console.log('Script updated to perfectly match Frenchyse exact offsets.');
