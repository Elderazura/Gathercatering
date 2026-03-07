import type { Metadata } from 'next';
import { pageMetadata, siteConfig } from '@/lib/seo';
import { routing } from '@/lib/routing';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const path = locale === routing.defaultLocale ? '/about' : `/${locale}/about`;
  const canonical = `${siteConfig.url.replace(/\/$/, '')}${path}`;

  return {
    title: pageMetadata.about.title,
    description: pageMetadata.about.description,
    alternates: { canonical },
    openGraph: {
      title: pageMetadata.about.title,
      description: pageMetadata.about.description,
      url: canonical,
    },
  };
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
