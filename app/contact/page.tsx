import type { Metadata } from 'next';
import { ContactPage } from '@/components/ContactPage';

export const metadata: Metadata = {
  title: "Contact | Saim Dev",
  description: "Get in touch for a project.",
  alternates: {
    canonical: 'https://www.saimdev.site/contact'
  }
};

export default function Page() {
  return <ContactPage />;
}
