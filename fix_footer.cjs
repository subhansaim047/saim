const fs = require('fs');
const file = 'src/components/FooterSection.tsx';
let content = fs.readFileSync(file, 'utf8');

const target = `          <nav className="site-footer__nav" aria-label="Social navigation">`;
const replacement = `          <nav className="site-footer__nav" aria-label="Client Demos">
            <span style={{color:'rgba(255,255,255,0.4)', fontSize:'10px', textTransform:'uppercase', fontWeight:600, marginBottom:'4px', display:'block'}}>Live Demos</span>
            <a href="/burger-garage/index.html">Burger Garage</a>
            <a href="/frenchyse/index.html">Frenchyse Luxury</a>
          </nav>

          <nav className="site-footer__nav" aria-label="Social navigation">`;

content = content.replace(target, replacement);
fs.writeFileSync(file, content, 'utf8');
