const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve('.');

// 1. Files where simple replacement of sms:+447473962953 applies:
const simpleReplaceFiles = [
  'src/components/BlogPost3Page.tsx',
  'src/components/BlogsPage.tsx',
  'src/components/CaseStudiesPage.tsx',
  'src/components/CtaSection.tsx',
  'src/components/DemosPage.tsx',
  'src/components/Nexova404.tsx',
  'src/components/ServicesPage.tsx',
  'src/components/TechnologiesPage.tsx',
];

const defaultWaUrl = 'https://wa.me/447473962953?text=Hi%20Saim,%20I%27m%20interested%20in%20discussing%20a%20website%20project';

simpleReplaceFiles.forEach(relPath => {
  const fullPath = path.join(projectRoot, relPath);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    if (content.includes('sms:+447473962953')) {
      content = content.replace(/sms:\+447473962953/g, defaultWaUrl);
      fs.writeFileSync(fullPath, content, 'utf8');
      console.log('Updated:', relPath);
    }
  }
});

// 2. Update HeroSection.tsx
const heroPath = path.join(projectRoot, 'src/components/HeroSection.tsx');
if (fs.existsSync(heroPath)) {
  let hero = fs.readFileSync(heroPath, 'utf8');
  // Replace the CTA motion.a
  const oldCtaRegex = /<motion\.a\s+href="sms:\+447473962953"[\s\S]*?<\/motion\.a>/;
  const newCta = `<div className="flex flex-wrap items-center gap-3 pt-1">
                <motion.a
                  href="https://wa.me/447473962953?text=Hi%20Saim,%20I'm%20interested%20in%20starting%20a%20website%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-primary rounded-full pl-5 pr-1.5 py-1.5 sm:pl-6 sm:pr-2 sm:py-2 flex items-center gap-3 hover:gap-4 transition-all duration-300 group cursor-pointer self-start shadow-xl"
                >
                  <span className="text-black font-semibold text-xs sm:text-sm tracking-wide">Start on WhatsApp</span>
                  <div className="bg-black rounded-full w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E1E0CC]" />
                  </div>
                </motion.a>

                <motion.a
                  href="https://calendly.com/saimdev/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-full px-4 sm:px-5 py-2 sm:py-2.5 flex items-center gap-2 border border-white/20 bg-white/5 hover:bg-white/10 text-[#E1E0CC] hover:text-white transition-all text-xs sm:text-sm font-medium backdrop-blur"
                >
                  <span>Book 15-Min Call</span>
                </motion.a>
              </div>`;

  if (oldCtaRegex.test(hero)) {
    hero = hero.replace(oldCtaRegex, newCta);
    fs.writeFileSync(heroPath, hero, 'utf8');
    console.log('Updated HeroSection.tsx with WhatsApp + Calendly CTAs');
  } else {
    console.log('HeroSection CTA regex did not match, check manual replacement');
  }
}

// 3. Update ContactSection.tsx
const contactPath = path.join(projectRoot, 'src/components/ContactSection.tsx');
if (fs.existsSync(contactPath)) {
  let contact = fs.readFileSync(contactPath, 'utf8');
  // Fix form submission WhatsApp URL
  contact = contact.replace(
    /const igUrl = 'sms:\+447473962953';\s*window\.open\(igUrl, "_blank", "noopener,noreferrer"\);/,
    `const encodedMessage = encodeURIComponent(message);\n    const waUrl = \`https://wa.me/447473962953?text=\${encodedMessage}\`;\n    window.open(waUrl, "_blank", "noopener,noreferrer");`
  );

  // Fix quick contact card
  const oldCardRegex = /<span className="text-xs font-mono text-white\/40 uppercase tracking-wider">Direct Hotline<\/span>[\s\S]*?<span>SMS<\/span>[\s\S]*?<\/a>[\s\S]*?<span className="text-\[11px\] text-white\/40">Available Monday.*?<\/span>/;
  const newCard = `<span className="text-xs font-mono text-white/40 uppercase tracking-wider">Direct Channels</span>
              <a
                href="https://wa.me/447473962953?text=Hi%20Saim,%20I'm%20interested%20in%20a%20website%20project"
                target="_blank"
                rel="noreferrer"
                className="text-base sm:text-lg font-bold text-white hover:text-primary transition-colors flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-primary" />
                <span>WhatsApp: +44 7473 962953</span>
              </a>
              <a
                href="https://calendly.com/saimdev/15min"
                target="_blank"
                rel="noreferrer"
                className="text-xs sm:text-sm font-semibold text-primary hover:underline flex items-center gap-1.5"
              >
                <span>📅 Book a 15-Min Discovery Call &rarr;</span>
              </a>
              <span className="text-[11px] text-white/40">Serving UK, European & International Businesses</span>`;

  if (oldCardRegex.test(contact)) {
    contact = contact.replace(oldCardRegex, newCard);
  }
  fs.writeFileSync(contactPath, contact, 'utf8');
  console.log('Updated ContactSection.tsx');
}

// 4. Update ContactPage.tsx
const contactPagePath = path.join(projectRoot, 'src/components/ContactPage.tsx');
if (fs.existsSync(contactPagePath)) {
  let cp = fs.readFileSync(contactPagePath, 'utf8');
  cp = cp.replace(
    /const encodedText = encodeURIComponent\(text\);\s*const url = 'sms:\+447473962953';/,
    `const encodedText = encodeURIComponent(text);\n      const url = \`https://wa.me/447473962953?text=\${encodedText}\`;`
  );
  cp = cp.replace(/href="sms:\+447473962953"/g, 'href="https://wa.me/447473962953?text=Hi%20Saim,%20I%27m%20interested%20in%20discussing%20a%20website%20project"');
  cp = cp.replace(/<span>Chat on SMS<\/span>/g, '<span>Chat on WhatsApp</span>');
  cp = cp.replace(/message Saim Dev directly on Instagram/g, 'message Saim Dev directly on WhatsApp');
  fs.writeFileSync(contactPagePath, cp, 'utf8');
  console.log('Updated ContactPage.tsx');
}
