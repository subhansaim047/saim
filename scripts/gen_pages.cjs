const fs = require('fs');
const path = require('path');

const pages = [
  { dir: 'services', component: 'ServicesPage', title: 'Services | Saim Dev', desc: 'Custom web development services.' },
  { dir: 'contact', component: 'ContactPage', title: 'Contact | Saim Dev', desc: 'Get in touch for a project.' },
  { dir: 'technologies', component: 'TechnologiesPage', title: 'Technologies | Saim Dev', desc: 'Tech stack used for modern web dev.' },
  { dir: 'demos', component: 'DemosPage', title: 'Demos | Saim Dev', desc: 'Interactive demos.' },
  { dir: 'privacy', component: 'PrivacyPolicy', title: 'Privacy Policy | Saim Dev', desc: 'Privacy policy.' },
  { dir: 'terms', component: 'TermsOfService', title: 'Terms of Service | Saim Dev', desc: 'Terms of service.' },
  { dir: 'blogs', component: 'BlogsPage', title: 'Blogs | Saim Dev', desc: 'Read the latest blogs.' },
  { dir: 'blog/why-small-business-needs-website-2026', component: 'BlogPost1Page', title: 'Why Every Small Business Needs a Professional Website in 2026 | Saim Dev', desc: '98% of consumers search online for local businesses...' },
  { dir: 'blog/free-website-for-local-business', component: 'BlogPost2Page', title: "I'm Building 5 Free Websites for Local Businesses — Here's Why | Saim Dev", desc: 'Free professional websites for 5 local businesses...' },
];

pages.forEach(p => {
  const content = `import type { Metadata } from 'next';
import { ${p.component} } from '@/components/${p.component}';

export const metadata: Metadata = {
  title: "${p.title.replace(/"/g, '\\"')}",
  description: "${p.desc.replace(/"/g, '\\"')}",
  alternates: {
    canonical: 'https://www.saimdev.site/${p.dir}'
  }
};

export default function Page() {
  return <${p.component} />;
}
`;
  fs.writeFileSync(path.join(__dirname, '..', 'app', p.dir, 'page.tsx'), content);
  console.log(`Created app/${p.dir}/page.tsx`);
});
