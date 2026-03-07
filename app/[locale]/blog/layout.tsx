import type { Metadata } from 'next';
import { pageMetadata, siteConfig } from '@/lib/seo';
import { routing } from '@/lib/routing';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const path = locale === routing.defaultLocale ? '/blog' : `/${locale}/blog`;
  const canonical = `${siteConfig.url.replace(/\/$/, '')}${path}`;

  return {
    title: pageMetadata.blog.title,
    description: pageMetadata.blog.description,
    alternates: { canonical },
    openGraph: {
      title: pageMetadata.blog.title,
      description: pageMetadata.blog.description,
      url: canonical,
    },
  };
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
