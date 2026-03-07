import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/seo';
import { routing } from '@/lib/routing';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url.replace(/\/$/, '');
  const locales = routing.locales;
  const defaultLocale = routing.defaultLocale;

  const paths = ['', '/about', '/services', '/menu', '/contact', '/blog', '/gallery'];

  const entries: MetadataRoute.Sitemap = [];

  for (const path of paths) {
    for (const locale of locales) {
      const pathSlug = path || '/';
      const url = locale === defaultLocale ? `${baseUrl}${pathSlug}` : `${baseUrl}/${locale}${pathSlug}`;
      entries.push({
        url,
        lastModified: new Date(),
        changeFrequency: path === '' ? 'weekly' : 'monthly',
        priority: path === '' ? 1 : path === '/gallery' ? 0.7 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [
              l,
              l === defaultLocale ? `${baseUrl}${pathSlug}` : `${baseUrl}/${l}${pathSlug}`,
            ])
          ),
        },
      });
    }
  }

  return entries;
}
