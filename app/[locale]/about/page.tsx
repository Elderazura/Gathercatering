'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Banner from '@/components/Banner';
import VideoSection from '@/components/VideoSection';
import ImageSection from '@/components/ImageSection';
import ParallaxImageSection from '@/components/ParallaxImageSection';
import ParallaxSection from '@/components/ParallaxSection';
import Image from 'next/image';
import { Link } from '@/lib/routing';

export default function AboutPage() {
  const t = useTranslations('about');

  const values = [
    {
      title: t('hostMindset.title'),
      description: t('hostMindset.description'),
      icon: '🏠',
    },
    {
      title: t('internationalFood.title'),
      description: t('internationalFood.description'),
      icon: '🌍',
    },
    {
      title: t('beautifulSetups.title'),
      description: t('beautifulSetups.description'),
      icon: '✨',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-r from-primary to-secondary" style={{ margin: 0, border: 'none', borderWidth: 0, outline: 'none' }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-4"
            >
              {t('title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl max-w-3xl mx-auto"
            >
              {t('tagline')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <Banner variant="light" className="py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8"
          >
            {t('description')}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-700 leading-relaxed"
          >
            {t('specialization')}
          </motion.p>
        </div>
      </Banner>

      {/* Values Section */}
      <section className="py-20 bg-white" style={{ margin: 0, border: 'none', borderWidth: 0, outline: 'none' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="text-6xl mb-6">{value.icon}</div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Glimpse Section */}
      <ParallaxSection speed={0.1}>
        <section className="py-20 bg-white" style={{ margin: 0, border: 'none', borderWidth: 0, outline: 'none' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Our Services
              </h2>
              <p className="text-xl text-gray-600">
                How we bring your vision to life
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { key: 'eventCatering', icon: '🍽️', image: '/media/images/catering 1.jpeg', orientation: 'landscape' as const },
                { key: 'setupDesign', icon: '✨', image: '/media/images/1e2.jpeg', orientation: 'portrait' as const },
                { key: 'coordination', icon: '🤝', image: '/media/images/food 1.jpeg', orientation: 'landscape' as const },
                { key: 'menuPlanning', icon: '📋', image: '/media/images/1e3.jpeg', orientation: 'portrait' as const },
              ].map((service, index) => (
                <motion.div
                  key={service.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className={`relative ${service.orientation === 'portrait' ? 'h-64' : 'aspect-video'}`}>
                    <Image
                      src={service.image}
                      alt={t(`services.${service.key}.title`)}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-4xl mb-3">{service.icon}</div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {t(`services.${service.key}.title`)}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {t(`services.${service.key}.description`)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Image Section with Parallax */}
      <ParallaxSection speed={0.2}>
        <section className="py-20 bg-gray-50" style={{ margin: 0, border: 'none', borderWidth: 0, outline: 'none' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Our Journey
              </h2>
              <p className="text-xl text-gray-600">
                Moments that define us
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8">
              <ParallaxImageSection
                src="/media/images/catering 2.jpeg"
                alt="Gather Catering Story"
                orientation="landscape"
                speed={0.4}
              />
              <ParallaxImageSection
                src="/media/images/1e2.jpeg"
                alt="Gather Catering Experience"
                orientation="portrait"
                speed={0.3}
              />
            </div>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <ParallaxImageSection
                src="/media/images/1e3.jpeg"
                alt="Gather Catering Event"
                orientation="portrait"
                speed={0.35}
              />
              <ParallaxImageSection
                src="/media/images/1e4.jpeg"
                alt="Gather Catering Service"
                orientation="portrait"
                speed={0.3}
              />
              <ParallaxImageSection
                src="/media/images/1e5.jpeg"
                alt="Gather Catering Presentation"
                orientation="portrait"
                speed={0.35}
              />
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white" style={{ margin: 0, border: 'none', borderWidth: 0, outline: 'none' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Why Choose Gather Cater
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ul className="space-y-6">
                {[
                  'International cuisine with Indian hospitality',
                  'Host\'s mindset in every detail',
                  'Elegant setups without the drama',
                  'Impeccable coordination from start to finish',
                  'Serving Dubai, Abu Dhabi, and across UAE',
                ].map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <span className="text-primary text-2xl">✓</span>
                    <span className="text-lg text-gray-700">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <ParallaxImageSection
              src="/media/images/1e6.jpeg"
              alt="Why Choose Gather Cater"
              orientation="portrait"
              speed={0.3}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <Banner variant="secondary" className="py-20">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience Gather Cater?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's create something memorable together
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
          >
            Get in Touch
          </Link>
        </div>
      </Banner>
    </div>
  );
}
