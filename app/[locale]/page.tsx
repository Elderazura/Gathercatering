'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import VideoHero from '@/components/VideoHero';
import Banner from '@/components/Banner';
import ParallaxImageSection from '@/components/ParallaxImageSection';
import ParallaxSection from '@/components/ParallaxSection';
import VideoShowreel from '@/components/VideoShowreel';
import InstagramFeed from '@/components/InstagramFeed';
import Testimonials from '@/components/Testimonials';
import BlogShowcase from '@/components/BlogShowcase';
import { Link } from '@/lib/routing';

export default function HomePage() {
  const t = useTranslations();

  return (
    <div style={{ margin: 0, padding: 0, background: '#ffffff' }}>
      {/* Hero Section */}
      <VideoHero />

      {/* About Preview Section */}
      <ParallaxSection speed={0.2}>
        <Banner variant="light" className="py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                {t('about.tagline')}
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                {t('about.description')}
              </p>
              <Link
                href="/about"
                className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
              >
                Learn More
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ParallaxImageSection
                src="/media/images/catering 1.jpeg"
                alt="Gather Catering Service"
                orientation="landscape"
                speed={0.4}
              />
            </motion.div>
          </div>
        </Banner>
      </ParallaxSection>

      {/* Services Banner */}
      <Banner variant="primary" className="py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl opacity-90">{t('services.subtitle')}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { key: 'eventCatering', icon: '🍽️' },
            { key: 'setupDesign', icon: '✨' },
            { key: 'coordination', icon: '🤝' },
            { key: 'menuPlanning', icon: '📋' },
          ].map((service, index) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">
                {t(`services.${service.key}.title`)}
              </h3>
              <p className="text-sm opacity-90">
                {t(`services.${service.key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
          >
            View All Services
          </Link>
        </div>
      </Banner>

      {/* Video Showreel Section */}
      <ParallaxSection speed={0.15}>
        <VideoShowreel 
          videoUrl="https://youtu.be/9ElL3AZAscQ?si=-b-JnGhzuSpHQOmq"
          title="Our Work Showreel"
        />
      </ParallaxSection>

      {/* Image Showcase */}
      <ParallaxSection speed={0.1}>
        <section 
          className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden" 
          style={{ margin: 0, border: 'none', borderWidth: 0, outline: 'none', display: 'block' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Our Work
              </h2>
              <p className="text-xl text-gray-600">
                Capturing moments of excellence
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <ParallaxImageSection
                src="/media/images/1e2.jpeg"
                alt="Gather Catering Food Presentation"
                orientation="portrait"
                speed={0.3}
              />
              <ParallaxImageSection
                src="/media/images/catering 2.jpeg"
                alt="Gather Catering Event Setup"
                orientation="landscape"
                speed={0.4}
              />
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <ParallaxImageSection
                src="/media/images/1e3.jpeg"
                alt="Gather Catering Cuisine"
                orientation="portrait"
                speed={0.35}
              />
              <ParallaxImageSection
                src="/media/images/catering 1.jpeg"
                alt="Gather Catering Menu"
                orientation="landscape"
                speed={0.4}
              />
              <ParallaxImageSection
                src="/media/images/1e4.jpeg"
                alt="Gather Catering Presentation"
                orientation="portrait"
                speed={0.3}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <ParallaxImageSection
                src="/media/images/1e5.jpeg"
                alt="Gather Catering Event"
                orientation="portrait"
                speed={0.35}
              />
              <ParallaxImageSection
                src="/media/images/1e6.jpeg"
                alt="Gather Catering Service"
                orientation="portrait"
                speed={0.3}
              />
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Instagram Feed Section */}
      <ParallaxSection speed={0.15}>
        <InstagramFeed />
      </ParallaxSection>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Blog Showcase Section */}
      <ParallaxSection speed={0.12}>
        <BlogShowcase />
      </ParallaxSection>

      {/* CTA Banner */}
      <ParallaxSection speed={0.08}>
        <Banner variant="secondary" className="py-20 relative overflow-hidden">
          <div className="text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Ready to Host with Confidence?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl mb-8 opacity-90"
            >
              Let us take the responsibility of hosting off your shoulders
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="inline-block bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
              >
                Get Started
              </Link>
            </motion.div>
          </div>
        </Banner>
      </ParallaxSection>
    </div>
  );
}
