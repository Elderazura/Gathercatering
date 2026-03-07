import type { Metadata } from 'next';
import { pageMetadata, siteConfig } from '@/lib/seo';
import { routing } from '@/lib/routing';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const path = locale === routing.defaultLocale ? '/contact' : `/${locale}/contact`;
  const canonical = `${siteConfig.url.replace(/\/$/, '')}${path}`;

  return {
    title: pageMetadata.contact.title,
    description: pageMetadata.contact.description,
    alternates: { canonical },
    openGraph: {
      title: pageMetadata.contact.title,
      description: pageMetadata.contact.description,
      url: canonical,
    },
  };
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
