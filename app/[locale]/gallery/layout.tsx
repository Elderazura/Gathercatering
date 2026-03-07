import type { Metadata } from 'next';
import { pageMetadata, siteConfig } from '@/lib/seo';
import { routing } from '@/lib/routing';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const path = locale === routing.defaultLocale ? '/gallery' : `/${locale}/gallery`;
  const canonical = `${siteConfig.url.replace(/\/$/, '')}${path}`;

  return {
    title: pageMetadata.gallery.title,
    description: pageMetadata.gallery.description,
    alternates: { canonical },
    openGraph: {
      title: pageMetadata.gallery.title,
      description: pageMetadata.gallery.description,
      url: canonical,
    },
  };
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
