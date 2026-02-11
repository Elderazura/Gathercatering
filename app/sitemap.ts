import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/seo';
import { routing } from '@/lib/routing';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const locales = routing.locales;
  const defaultLocale = routing.defaultLocale;

  const paths = ['', '/about', '/services', '/menu', '/contact', '/blog'];

  const entries: MetadataRoute.Sitemap = [];

  for (const path of paths) {
    for (const locale of locales) {
      const url = locale === defaultLocale ? `${baseUrl}${path || '/'}` : `${baseUrl}/${locale}${path}`;
      entries.push({
        url: url.endsWith('//') ? url.slice(0, -1) : url,
        lastModified: new Date(),
        changeFrequency: path === '' ? 'weekly' : 'monthly',
        priority: path === '' ? 1 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [
              l,
              l === defaultLocale ? `${baseUrl}${path || '/'}` : `${baseUrl}/${l}${path}`,
            ])
          ),
        },
      });
    }
  }

  return entries;
}
