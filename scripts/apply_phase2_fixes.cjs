const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');

function replaceInFile(relPath, replacements) {
  const filePath = path.join(rootDir, relPath);
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    return false;
  }
  let content = fs.readFileSync(filePath, 'utf8');
  let count = 0;
  for (const { from, to } of replacements) {
    if (content.includes(from)) {
      content = content.replace(from, to);
      count++;
    } else {
      console.warn(`[WARN] Pattern not found in ${relPath}: ${from.substring(0, 50)}...`);
    }
  }
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${relPath} (${count}/${replacements.length} replacements applied)`);
  return true;
}

// 1. HeroSection.tsx
replaceInFile('src/components/HeroSection.tsx', [
  {
    from: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-1.webp',
    to: '/hero-shots/shot-1.webp'
  },
  {
    from: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-2.webp',
    to: '/hero-shots/shot-2.webp'
  },
  {
    from: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-3.webp',
    to: '/hero-shots/shot-3.webp'
  },
  {
    from: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-4.webp',
    to: '/hero-shots/shot-4.webp'
  },
  {
    from: 'Saim Dev is a worldwide collective of web developers &amp; strategists connected by a\r\n                shared purpose &mdash; building custom websites that unlock',
    to: 'Saim Dev is a bespoke web engineering studio. We build custom, ultra-fast websites that unlock'
  },
  {
    from: 'for every business we work with.',
    to: 'for every business we partner with.'
  }
]);

// 2. AboutSection.tsx
replaceInFile('src/components/AboutSection.tsx', [
  {
    from: '{ text: "I am a web architect,", className: "font-normal text-[#E1E0CC]" },',
    to: '{ text: "We are web architects,", className: "font-normal text-[#E1E0CC]" },'
  },
  {
    from: 'Over the last seven years, I have built fast, modern, high-converting websites for service leaders',
    to: 'Over the last seven years, our studio has engineered fast, modern, high-converting platforms for service leaders'
  },
  {
    from: 'Saim Dev is a freelance web developer specializing in custom business websites',
    to: 'Saim Dev is a bespoke web engineering studio specializing in custom business websites'
  }
]);

// 3. ProcessSection.tsx
replaceInFile('src/components/ProcessSection.tsx', [
  {
    from: 'My Process',
    to: 'Our Process'
  }
]);

// 4. FooterSection.tsx
replaceInFile('src/components/FooterSection.tsx', [
  {
    from: '<a href="/#process">My Process</a>',
    to: '<a href="/#process">Our Process</a>'
  }
]);

// 5. FaqSection.tsx
replaceInFile('src/components/FaqSection.tsx', [
  {
    from: 'Yes! I guide you through selecting and setting up ultra-fast cloud hosting',
    to: 'Yes! We guide you through selecting and setting up ultra-fast cloud hosting'
  }
]);

// 6. ChatPanel.tsx
replaceInFile('src/components/ChatPanel.tsx', [
  {
    from: 'Welcome to Saim Dev! I build high-converting websites engineered to turn visitors into paying clients. How can I help your business grow today?',
    to: 'Welcome to Saim Dev! We engineer high-converting websites designed to turn visitors into paying clients. How can we help your business grow today?'
  }
]);

// 7. app/page.tsx (FAQ Schema)
replaceInFile('app/page.tsx', [
  {
    from: 'Yes! I guide you through selecting and setting up ultra-fast cloud hosting',
    to: 'Yes! We guide you through selecting and setting up ultra-fast cloud hosting'
  }
]);

// 8. PerformanceSection.tsx
replaceInFile('src/components/PerformanceSection.tsx', [
  {
    from: '{/* LEFT: Heading (Same font as My Process) */}',
    to: '{/* LEFT: Heading (Same font as Our Process) */}'
  },
  {
    from: '{ val: "5.000", y: 40 },',
    to: '{ val: "50,000", y: 40 },'
  },
  {
    from: '{ val: "4.000", y: 110 },',
    to: '{ val: "40,000", y: 110 },'
  },
  {
    from: '{ val: "3.000", y: 180 },',
    to: '{ val: "30,000", y: 180 },'
  },
  {
    from: '{ val: "2.000", y: 250 },',
    to: '{ val: "20,000", y: 250 },'
  },
  {
    from: '{ val: "1.000", y: 320 },',
    to: '{ val: "10,000", y: 320 },'
  },
  {
    from: '<span className="text-[11px] text-white/50 font-medium">Views</span>',
    to: '<span className="text-[11px] text-white/50 font-medium">Organic Impressions</span>'
  },
  {
    from: '<span className="text-xs font-bold text-white">3.024</span>',
    to: '<span className="text-xs font-bold text-white">34,200</span>'
  },
  {
    from: '<span className="text-[11px] text-white/50 font-medium">Clicks</span>',
    to: '<span className="text-[11px] text-white/50 font-medium">Qualified Inquiries</span>'
  },
  {
    from: '<span className="text-xs font-bold text-white">1.274</span>',
    to: '<span className="text-xs font-bold text-white">1,274</span>'
  }
]);

// 9. CaseStudiesPage.tsx
replaceInFile('src/components/CaseStudiesPage.tsx', [
  {
    from: 'featuring click-to-book Instagram integration',
    to: 'featuring click-to-book WhatsApp integration'
  },
  {
    from: 'The instant Instagram location sharing alone saved us hours of back-and-forth.',
    to: 'The instant WhatsApp location sharing alone saved us hours of back-and-forth.'
  }
]);

// 10. Blog Author Bios
['src/components/BlogPost1Page.tsx', 'src/components/BlogPost2Page.tsx', 'src/components/BlogPost3Page.tsx'].forEach(p => {
  replaceInFile(p, [
    {
      from: 'I build high-performance, conversion-focused websites for small businesses. Every site I deliver is fast, mobile-optimised, and built to generate real leads — not just look good.',
      to: 'We build high-performance, conversion-focused websites for growing businesses. Every site our studio delivers is fast, mobile-optimised, and built to generate real leads — not just look good.'
    },
    {
      from: 'I build high-performance, conversion-focused websites for small and local businesses. Every site I deliver is fast, mobile-optimised, and built to generate real leads — not just look good.',
      to: 'We build high-performance, conversion-focused websites for growing businesses. Every site our studio delivers is fast, mobile-optimised, and built to generate real leads — not just look good.'
    }
  ]);
});

console.log('Phase 2 script finished.');
