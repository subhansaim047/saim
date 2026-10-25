import type { Metadata } from 'next';
import { ContactPage } from '@/components/ContactPage';

export const metadata: Metadata = {
  title: "Contact Saim Dev | Website Projects for UK Businesses",
  description: "Contact Saim Dev about a fast, mobile-friendly website for your UK or European business. Message us on WhatsApp or submit your brief for a fast free quote.",
  alternates: {
    canonical: 'https://www.saimdev.site/contact',
  },
  openGraph: {
    title: "Contact Saim Dev | Website Projects for UK Businesses",
    description: "Contact Saim Dev about a fast, mobile-friendly website for your UK or European business. Message us on WhatsApp or submit your brief for a fast free quote.",
    url: 'https://www.saimdev.site/contact',
    siteName: 'Saim Dev',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Contact Saim Dev | Website Projects for UK Businesses",
    description: "Contact Saim Dev about a fast, mobile-friendly website for your UK or European business. Message us on WhatsApp or submit your brief for a fast free quote.",
  },
};

export default function Page() {
  return <ContactPage />;
}
