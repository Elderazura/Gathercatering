'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Banner from '@/components/Banner';
import VideoSection from '@/components/VideoSection';
import ImageSection from '@/components/ImageSection';
import ParallaxImageSection from '@/components/ParallaxImageSection';
import ParallaxSection from '@/components/ParallaxSection';
import { Link } from '@/lib/routing';

export default function ServicesPage() {
  const t = useTranslations('services');

  const services = [
    {
      key: 'eventCatering',
      icon: '🍽️',
      image: '/media/images/catering 1.jpeg',
      orientation: 'landscape' as const,
    },
    {
      key: 'setupDesign',
      icon: '✨',
      image: '/media/images/1e2.jpeg',
      orientation: 'portrait' as const,
    },
    {
      key: 'coordination',
      icon: '🤝',
      image: '/media/images/food 1.jpeg',
      orientation: 'landscape' as const,
    },
    {
      key: 'menuPlanning',
      icon: '📋',
      image: '/media/images/1e3.jpeg',
      orientation: 'portrait' as const,
    },
  ];

  const additionalServices = [
    {
      title: 'Event Planning Consultation',
      description: 'Expert guidance to plan your perfect event from concept to execution',
      icon: '📅',
    },
    {
      title: 'Custom Menu Development',
      description: 'Tailored menus that reflect your taste and dietary requirements',
      icon: '🍴',
    },
    {
      title: 'Staff Coordination',
      description: 'Professional service staff trained in hospitality excellence',
      icon: '👥',
    },
    {
      title: 'Equipment & Setup',
      description: 'Complete setup including tables, linens, and elegant decor',
      icon: '🪑',
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

      {/* Main Services Grid */}
      <section className="py-20 bg-white" style={{ margin: 0, border: 'none', borderWidth: 0, outline: 'none' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="text-6xl mb-6">{service.icon}</div>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                    {t(`${service.key}.title`)}
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {t(`${service.key}.description`)}
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Personalized consultation',
                      'Detailed planning',
                      'Seamless execution',
                      'Post-event follow-up',
                    ].map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-3 text-gray-600">
                        <span className="text-primary">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <ParallaxImageSection
                    src={service.image}
                    alt={t(`${service.key}.title`)}
                    orientation={service.orientation}
                    speed={0.3 + (index * 0.1)}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
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
              Additional Services
            </h2>
              <p className="text-xl text-gray-600">
                Comprehensive solutions for your event needs
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Process Section */}
      <section className="py-20 bg-white" style={{ margin: 0, border: 'none', borderWidth: 0, outline: 'none' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600">
              From consultation to celebration
            </p>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Consultation', desc: 'Understanding your vision' },
              { step: '2', title: 'Planning', desc: 'Detailed event planning' },
              { step: '3', title: 'Execution', desc: 'Seamless day-of service' },
              { step: '4', title: 'Follow-up', desc: 'Ensuring your satisfaction' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <ParallaxSection speed={0.15}>
      <section className="py-20 bg-gray-50" style={{ margin: 0, border: 'none', borderWidth: 0, outline: 'none' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
              <ParallaxImageSection
                src="/media/images/1e4.jpeg"
                alt="Service Gallery"
                orientation="portrait"
                speed={0.3}
              />
              <ParallaxImageSection
                src="/media/images/food 2.jpeg"
                alt="Service Gallery"
                orientation="landscape"
                speed={0.4}
              />
              <ParallaxImageSection
                src="/media/images/1e5.jpeg"
                alt="Service Gallery"
                orientation="portrait"
                speed={0.35}
              />
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* CTA Section */}
      <Banner variant="secondary" className="py-20">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us to discuss your event and let's create something memorable
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </Banner>
    </div>
  );
}
