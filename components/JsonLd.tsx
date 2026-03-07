import { siteConfig } from '@/lib/seo';

export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.business.name,
    description: siteConfig.business.description,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    email: siteConfig.social.email,
    areaServed: siteConfig.business.areaServed.map((area) => ({
      '@type': 'Place',
      name: area,
    })),
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: siteConfig.social.email,
      url: siteConfig.social.whatsapp,
      availableLanguage: ['English', 'Arabic'],
      areaServed: siteConfig.business.areaServed,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
