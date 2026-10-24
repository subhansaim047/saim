import type { Metadata } from 'next';
import { ContactPage } from '@/components/ContactPage';

export const metadata: Metadata = {
  title: "Contact | Saim Dev",
  description: "Contact Saim Dev about a fast, mobile-friendly website for your UK business. Message on WhatsApp or send a project brief.",
  alternates: {
    canonical: 'https://www.saimdev.site/contact'
  },
  openGraph: {
    title: "Contact | Saim Dev",
    description: "Contact Saim Dev about a fast, mobile-friendly website for your UK business. Message on WhatsApp or send a project brief.",
    url: 'https://www.saimdev.site/contact',
    siteName: 'Saim Dev',
    locale: 'en_GB',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: "Contact | Saim Dev",
    description: "Contact Saim Dev about a fast, mobile-friendly website for your UK business. Message on WhatsApp or send a project brief."
  }
};

export default function Page() {
  return <ContactPage />;
}
