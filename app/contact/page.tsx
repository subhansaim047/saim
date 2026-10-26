import type { Metadata } from 'next';
import { ContactPage } from '@/components/ContactPage';

export const metadata: Metadata = {
  title: 'Contact Saim Dev | Fast Fixed-Price Website Quotes',
  description: 'Get a fixed-price quote for your UK small-business website. Contact Saim Dev via WhatsApp or enquiry form for quick responses within 24 hours.',
  alternates: {
    canonical: 'https://www.saimdev.site/contact',
  },
  openGraph: {
    type: 'website',
    title: 'Contact Saim Dev | Fast Fixed-Price Website Quotes',
    description: 'Get a fixed-price quote for your UK small-business website. Contact Saim Dev via WhatsApp or enquiry form for quick responses within 24 hours.',
    url: 'https://www.saimdev.site/contact',
    siteName: 'Saim Dev',
    locale: 'en_GB',
    images: [
      {
        url: 'https://www.saimdev.site/og-contact.png',
        width: 1200,
        height: 630,
        alt: 'Contact Saim Dev for Fixed-Price Website Project Quotes',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Saim Dev | Fast Fixed-Price Website Quotes',
    description: 'Get a fixed-price quote for your UK small-business website. Contact Saim Dev via WhatsApp or enquiry form for quick responses within 24 hours.',
    images: ['https://www.saimdev.site/og-contact.png'],
  },
};

export default function Page() {
  return <ContactPage />;
}
