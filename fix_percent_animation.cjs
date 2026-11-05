const fs = require('fs');

let html = fs.readFileSync('public/burger-garage/index.html', 'utf8');

// Replace the entire burger animation script with a percentage-based one
// that exactly mirrors how Frenchyse's GSAP plugin works:
// translate(0%, <data-y-end>%) means: move by data-y-end% of the element's OWN height

const oldScript = `    <!-- Burger Scroll Animation Script -->
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
                    
                    // Start when element is 30% into view (progress = 0.3)
                    // Finish when element is 80% up the screen (progress = 0.8)
                    let animProgress = (progress - 0.3) / 0.5;

                    
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
    </script>`;

const newScript = `    <!-- Burger Scroll Animation Script -->
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            var wrapper = document.querySelector('.burger-exploding-wrapper');
            var parts = document.querySelectorAll('.burger-part');
            
            // EXACT data-y-end percentages from Frenchyse website
            // These are PERCENTAGE values (relative to each element's own height)
            // matching translate(0%, Y%) used by Frenchyse's GSAP plugin
            var endPercents = [-100, -120, -30, 0, 70, 110, 160, 165];
            
            if (wrapper && parts.length > 0) {
                window.addEventListener('scroll', function() {
                    var rect = wrapper.getBoundingClientRect();
                    var windowHeight = window.innerHeight;
                    
                    // Frenchyse uses data-start-position="70%" meaning: 
                    // animation starts when element is 70% from top of viewport
                    // = when element enters from bottom at 30% progress
                    var progress = 1 - (rect.top / windowHeight);
                    
                    // Start at 70% from top (progress = 0.3 since it's from bottom)
                    // Fully exploded when element center passes viewport center
                    var animProgress = (progress - 0.3) / 0.5;
                    
                    // Clamp between 0 and 1
                    if (animProgress < 0) animProgress = 0;
                    if (animProgress > 1) animProgress = 1;
                    
                    // Ease-out cubic (matching GSAP default)
                    var easeProgress = 1 - Math.pow(1 - animProgress, 3);
                    
                    for(var index = 0; index < parts.length; index++) {
                        if (index < endPercents.length) {
                            var part = parts[index];
                            // Get element's own height to replicate percentage behavior
                            var height = part.offsetHeight;
                            // Convert percentage to pixels: exactly how GSAP translate(0%, Y%) works
                            var yOffset = (endPercents[index] / 100) * height * easeProgress;
                            part.style.transform = 'translateY(' + yOffset + 'px)';
                        }
                    }
                });
                
                // Trigger once on load to set initial state
                window.dispatchEvent(new Event('scroll'));
            }
        });
    </script>`;

html = html.replace(oldScript, newScript);
fs.writeFileSync('public/burger-garage/index.html', html);
console.log('Script replaced with percentage-based animation!');
console.log('Length diff:', newScript.length - oldScript.length);
