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
import AnimatedGallery from '@/components/AnimatedGallery';
import { Link } from '@/lib/routing';

export default function HomePage() {
  const t = useTranslations();

  return (
    <div style={{ margin: 0, padding: 0, background: '#ffffff' }}>
      {/* Hero Section */}
      <VideoHero />

      {/* About Preview Section */}
      <ParallaxSection speed={0.2}>
        <Banner variant="light" className="py-12 sm:py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">
                {t('about.tagline')}
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                {t('about.description')}
              </p>
              <Link
                href="/about"
                className="inline-block bg-primary text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-opacity-90 transition-all touch-manipulation min-h-[44px] flex items-center justify-center w-fit"
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
                src="/media/images/food 1.jpeg"
                alt="Gather Catering Service"
                orientation="landscape"
                speed={0.4}
              />
            </motion.div>
          </div>
        </Banner>
      </ParallaxSection>

      {/* Services Banner */}
      <Banner variant="primary" className="py-12 sm:py-16 md:py-20">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            {t('services.title')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl opacity-90 px-4">{t('services.subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
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
              className="bg-white bg-opacity-10 backdrop-blur-sm p-4 sm:p-6 rounded-lg"
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{service.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {t(`services.${service.key}.title`)}
              </h3>
              <p className="text-xs sm:text-sm opacity-90 leading-relaxed">
                {t(`services.${service.key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8 sm:mt-12">
          <Link
            href="/services"
            className="inline-block bg-white text-primary px-6 py-2.5 sm:px-8 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-opacity-90 transition-all touch-manipulation min-h-[44px] flex items-center justify-center mx-auto"
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

      {/* Animated Gallery Section */}
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
              className="text-center mb-8 sm:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4">
                Our Work
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4">
                Capturing moments of excellence
              </p>
            </motion.div>
            
            {/* Main Animated Gallery */}
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
              <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg shadow-xl">
                <AnimatedGallery
                  images={[
                    { src: '/media/images/1e2.jpeg', alt: 'Gather Catering Food Presentation', orientation: 'portrait' },
                    { src: '/media/images/1e3.jpeg', alt: 'Gather Catering Cuisine', orientation: 'portrait' },
                    { src: '/media/images/1e4.jpeg', alt: 'Gather Catering Presentation', orientation: 'portrait' },
                    { src: '/media/images/1e5.jpeg', alt: 'Gather Catering Event', orientation: 'portrait' },
                    { src: '/media/images/1e6.jpeg', alt: 'Gather Catering Service', orientation: 'portrait' },
                  ]}
                  interval={3000}
                />
              </div>
              <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg shadow-xl">
                <AnimatedGallery
                  images={[
                    { src: '/media/images/food 1.jpeg', alt: 'Gather Catering Menu', orientation: 'landscape' },
                    { src: '/media/images/food 2.jpeg', alt: 'Gather Catering Food', orientation: 'landscape' },
                    { src: '/media/images/food 3.jpeg', alt: 'Gather Catering Cuisine', orientation: 'landscape' },
                    { src: '/media/images/food 4.jpeg', alt: 'Gather Catering Presentation', orientation: 'landscape' },
                    { src: '/media/images/food 5.jpeg', alt: 'Gather Catering Service', orientation: 'landscape' },
                  ]}
                  interval={3500}
                />
              </div>
            </div>

            {/* Additional Static Images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              <ParallaxImageSection
                src="/media/images/1e1.jpeg"
                alt="Gather Catering Event"
                orientation="portrait"
                speed={0.35}
              />
              <ParallaxImageSection
                src="/media/images/catering 1.jpeg"
                alt="Gather Catering Setup"
                orientation="landscape"
                speed={0.4}
              />
              <ParallaxImageSection
                src="/media/images/catering 2.jpeg"
                alt="Gather Catering Service"
                orientation="landscape"
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
        <Banner variant="secondary" className="py-12 sm:py-16 md:py-20 relative overflow-hidden" backgroundImage="/media/images/catering 1.jpeg">
          <div className="text-center relative z-10 px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
            >
              Ready to Host with Confidence?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90"
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
                className="inline-block bg-primary text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl touch-manipulation min-h-[44px] flex items-center justify-center mx-auto"
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
