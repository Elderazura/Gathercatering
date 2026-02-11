'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/lib/routing';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { gatherImages } from '@/lib/constants';

const fadeIn = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

export default function AboutPage() {
  const t = useTranslations('about');

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero - Image with overlapping content card */}
      <section className="relative" style={{ margin: 0, border: 'none' }}>
        <div className="relative h-[60vh] min-h-[400px] md:h-[70vh]">
          <img
            src={gatherImages.gallery[0]}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </div>
        <div className="relative z-10 -mt-24 md:-mt-32 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 md:p-12 lg:p-14 shadow-xl"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary leading-tight">
              {t('headline')}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl">
              {t('subheadline')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Legacy - Text + stat */}
      <section className="py-20 md:py-28 bg-white" style={{ margin: 0, border: 'none' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-start gap-12 md:gap-16">
            <motion.div {...fadeIn} className="md:w-24 shrink-0">
              <span className="text-6xl md:text-7xl font-bold text-primary/20">25</span>
              <span className="block text-sm font-medium text-primary mt-1">years</span>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.1 }}>
              <h2 className="text-2xl font-bold text-primary mb-6">{t('legacy.title')}</h2>
              <p className="text-xl text-gray-900 mb-6">{t('legacy.intro')}</p>
              <p className="text-gray-700 leading-relaxed mb-6">{t('legacy.body')}</p>
              <p className="text-gray-700 leading-relaxed">{t('legacy.continuation')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image break */}
      <section style={{ margin: 0, border: 'none' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="aspect-[2/1] overflow-hidden">
            <img
              src="/images/gather/food/gather-pics-28.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 md:py-28 bg-[#F8F7F5]" style={{ margin: 0, border: 'none' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn}>
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-8">
              {t('philosophy.title')}
            </p>
            <p className="text-2xl md:text-3xl font-medium text-gray-900 leading-snug mb-10">
              {t('philosophy.intro')}
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">{t('philosophy.body')}</p>
            <p className="text-gray-700 leading-relaxed mb-12">{t('philosophy.continuation')}</p>
            <div className="pl-6 border-l-4 border-primary">
              <p className="text-lg md:text-xl text-primary font-medium leading-relaxed">
                {t('philosophy.rule')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Signature - Image + text */}
      <section className="py-20 md:py-28 bg-white" style={{ margin: 0, border: 'none' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
            <motion.div {...fadeIn} className="md:col-span-2">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="/images/gather/food/legacy-of-warmth.png"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="md:col-span-3">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                {t('signature.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">{t('signature.body')}</p>
              <p className="text-gray-700 leading-relaxed">{t('signature.continuation')}</p>
              <Link href="/menu" className="inline-flex items-center gap-2 mt-8 text-primary font-semibold hover:underline">
                Explore our menu <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Commitment + CTA */}
      <section className="py-20 md:py-28 bg-primary text-white" style={{ margin: 0, border: 'none' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-xl font-semibold uppercase tracking-widest opacity-80 mb-6">
              {t('commitment.title')}
            </h2>
            <p className="text-2xl md:text-3xl font-bold mb-8">{t('commitment.subtitle')}</p>
            <p className="text-lg opacity-95 leading-relaxed mb-12">{t('commitment.body')}</p>
            <p className="text-xl font-semibold mb-10">{t('closing')}</p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/95 rounded-full px-10">
                {t('ctaBox.button')}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
