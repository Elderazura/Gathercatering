export const siteConfig = {
  name: 'Gather Catering',
  description:
    'Premium catering in Dubai & Abu Dhabi, UAE. International menus, elegant setups, warm hospitality. We host gatherings, not just cater events. Boutique events, corporate catering, weddings.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://gathercatering.ae',
  ogImage: '/images/gather/food/gather-pics-28.jpg',
  locale: 'en_AE',
  locales: ['en', 'ar'] as const,
  defaultLocale: 'en',
  keywords: [
    'catering Dubai',
    'catering Abu Dhabi',
    'event catering UAE',
    'corporate catering Dubai',
    'wedding catering',
    'boutique catering',
    'live grill catering',
    'private chef Dubai',
    'gathering catering',
  ],
  social: {
    email: 'contact@gathercatering.ae',
  },
  business: {
    name: 'Gather Catering',
    type: 'LocalBusiness',
    areaServed: ['Dubai', 'Abu Dhabi', 'UAE'],
    description: 'Premium catering and hosting services in Dubai and Abu Dhabi. International menus, elegant setups, warm hospitality.',
  },
};

export const pageMetadata: Record<string, { title: string; description: string }> = {
  home: {
    title: 'Premium Catering Dubai & Abu Dhabi | Gather Catering',
    description:
      'Everyone feeds. Few truly host. Premium catering in Dubai & Abu Dhabi with international menus, elegant setups, and warm hospitality. Host gatherings with confidence.',
  },
  about: {
    title: 'About Us | Gather Catering Dubai & Abu Dhabi',
    description:
      'Inherited warmth, international flavor. Learn about Gather Catering—premium catering in Dubai & Abu Dhabi backed by 25 years of hospitality excellence.',
  },
  services: {
    title: 'Catering Services | Boutique, Corporate & Events',
    description:
      'The Art of the Gathering. Boutique dinners, social events, corporate catering, and live grill experiences in Dubai & Abu Dhabi. Professional hosting for 5+ guests.',
  },
  menu: {
    title: 'Full Menu | International Cuisine Dubai & Abu Dhabi',
    description:
      'Quality. Variety. Craft. Explore our full menu—Spiced & Aromatic, Arabic, and Continental cuisine. Custom curation for your gathering in Dubai & Abu Dhabi.',
  },
  contact: {
    title: 'Contact | Get in Touch',
    description:
      "Let's plan your perfect gathering. Contact Gather Catering for premium catering in Dubai & Abu Dhabi. Enquire about your event.",
  },
  blog: {
    title: 'Blog | Stories & Insights',
    description:
      'Stories and insights about hosting great gatherings. Tips, inspiration, and updates from Gather Catering.',
  },
};
