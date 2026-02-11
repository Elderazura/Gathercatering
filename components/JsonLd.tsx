import { siteConfig } from '@/lib/seo';

export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.business.name,
    description: siteConfig.business.description,
    url: siteConfig.url,
    areaServed: siteConfig.business.areaServed.map((area) => ({
      '@type': 'Place',
      name: area,
    })),
    email: siteConfig.social.email,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
