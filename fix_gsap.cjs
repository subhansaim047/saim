const fs = require('fs');

let html = fs.readFileSync('public/burger-garage/index.html', 'utf8');

const oldScriptStart = '    <!-- Burger Scroll Animation Script -->';
const oldScriptEnd = '    </script>';

// We'll replace everything between these tags with the new GSAP script
const regex = new RegExp('    <!-- Burger Scroll Animation Script -->[\\s\\S]*?    </script>');

const gsapScript = `    <!-- Burger Scroll Animation Script -->
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
                gsap.registerPlugin(ScrollTrigger);
                
                var parts = document.querySelectorAll('.burger-part');
                var endPercents = [-100, -120, -30, 0, 70, 110, 160, 165];
                
                parts.forEach(function(part, index) {
                    if (index < endPercents.length) {
                        gsap.to(part, {
                            scrollTrigger: {
                                trigger: '.burger-exploding-wrapper',
                                start: "top 60%", // Starts animating when wrapper enters 60% of screen height
                                end: "top 10%",   // Ends when wrapper is near top
                                scrub: 1          // 1 second smooth catch-up (buttery smooth)
                            },
                            yPercent: endPercents[index], // Use percentage of element's own height!
                            ease: "power2.out"
                        });
                    }
                });
            }
        });
    </script>`;

if (regex.test(html)) {
    html = html.replace(regex, gsapScript);
    fs.writeFileSync('public/burger-garage/index.html', html);
    console.log('Replaced with GSAP ScrollTrigger!');
} else {
    console.log('Could not find the script block to replace.');
}
