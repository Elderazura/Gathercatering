'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Banner from '@/components/Banner';
import VideoSection from '@/components/VideoSection';
import ImageSection from '@/components/ImageSection';
import ParallaxImageSection from '@/components/ParallaxImageSection';
import ParallaxSection from '@/components/ParallaxSection';
import { Link } from '@/lib/routing';

export default function MenuPage() {
  const t = useTranslations('menu');

  const menuCategories = [
    {
      key: 'appetizers',
      items: [
        'International Canapés',
        'Charcuterie Boards',
        'Fresh Spring Rolls',
        'Antipasto Platters',
        'Bruschetta Selection',
      ],
      image: '/media/images/1e2.jpeg',
      orientation: 'portrait' as const,
    },
    {
      key: 'mainCourses',
      items: [
        'Grilled Specialties',
        'International Curry Selection',
        'Wood-fired Pizzas',
        'Gourmet Pasta Dishes',
        'Slow-cooked Meats',
      ],
      image: '/media/images/catering 1.jpeg',
      orientation: 'landscape' as const,
    },
    {
      key: 'desserts',
      items: [
        'Artisan Dessert Platters',
        'Live Crepe Station',
        'Gourmet Ice Cream Selection',
        'Fresh Fruit Arrangements',
        'Custom Dessert Creations',
      ],
      image: '/media/images/1e5.jpeg',
      orientation: 'portrait' as const,
    },
    {
      key: 'beverages',
      items: [
        'Signature Mocktails',
        'Fresh Juice Bar',
        'Premium Coffee Selection',
        'Specialty Teas',
        'Custom Beverage Stations',
      ],
      image: '/media/images/1e6.jpeg',
      orientation: 'portrait' as const,
    },
  ];

  const menuHighlights = [
    {
      title: 'International Fusion',
      description: 'A blend of global flavors with authentic techniques',
      image: '/media/images/food 1.jpeg',
      orientation: 'landscape' as const,
    },
    {
      title: 'Fresh & Seasonal',
      description: 'Using the finest ingredients sourced locally and internationally',
      image: '/media/images/1e3.jpeg',
      orientation: 'portrait' as const,
    },
    {
      title: 'Custom Creations',
      description: 'Tailored dishes to match your event theme and preferences',
      image: '/media/images/food 4.jpeg',
      orientation: 'landscape' as const,
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Banner variant="primary" className="py-20">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            {t('title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl opacity-90"
          >
            {t('subtitle')}
          </motion.p>
        </div>
      </Banner>

      {/* Menu Categories */}
      <section className="py-20 bg-white" style={{ margin: 0, border: 'none', borderWidth: 0, outline: 'none' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {menuCategories.map((category, index) => (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
                    {t(category.key)}
                  </h2>
                  <ul className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
                        className="flex items-center text-lg text-gray-700"
                      >
                        <span className="text-secondary mr-3">•</span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                  <p className="mt-6 text-gray-600 italic">
                    All menus are customized to your preferences and dietary requirements
                  </p>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <ParallaxImageSection
                    src={category.image}
                    alt={t(category.key)}
                    orientation={category.orientation}
                    speed={0.3 + (index * 0.1)}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <ParallaxSection speed={0.1}>
      <section className="py-20 bg-gray-50" style={{ margin: 0, border: 'none', borderWidth: 0, outline: 'none' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Menu Highlights
            </h2>
              <p className="text-xl text-gray-600">
                What makes our cuisine special
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {menuHighlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <ParallaxImageSection
                    src={highlight.image}
                    alt={highlight.title}
                    orientation={highlight.orientation}
                    speed={0.3}
                    className="rounded-t-lg"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-primary mb-3">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600">
                      {highlight.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Dietary Options */}
      <section className="py-20 bg-white" style={{ margin: 0, border: 'none', borderWidth: 0, outline: 'none' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Dietary Accommodations
            </h2>
            <p className="text-xl text-gray-600">
              We cater to all dietary needs
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Vegetarian',
              'Vegan',
              'Gluten-Free',
              'Halal',
              'Keto',
              'Paleo',
              'Nut-Free',
              'Dairy-Free',
            ].map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-gray-50 p-6 rounded-lg text-center hover:bg-primary hover:text-white transition-colors"
              >
                <p className="font-semibold text-lg">{option}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <Banner variant="secondary" className="py-20">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Customize Your Menu
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's create a menu that perfectly matches your event and taste preferences
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
          >
            Discuss Your Menu
          </Link>
        </div>
      </Banner>
    </div>
  );
}
