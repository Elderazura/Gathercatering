import type { Metadata } from 'next';
import { pageMetadata, siteConfig } from '@/lib/seo';
import { routing } from '@/lib/routing';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const path = locale === routing.defaultLocale ? '/services' : `/${locale}/services`;
  const canonical = `${siteConfig.url.replace(/\/$/, '')}${path}`;

  return {
    title: pageMetadata.services.title,
    description: pageMetadata.services.description,
    alternates: { canonical },
    openGraph: {
      title: pageMetadata.services.title,
      description: pageMetadata.services.description,
      url: canonical,
    },
  };
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
