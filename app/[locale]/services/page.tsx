'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Home, Users, Briefcase, Flame, ArrowRight } from 'lucide-react';
import { Link } from '@/lib/routing';
import { Button } from '@/components/ui/button';
const services = [
  { key: 'boutiqueFive' as const, Icon: Home, image: '/service/1.jpeg' },
  { key: 'socialFlow' as const, Icon: Users, image: '/service/2.jpeg' },
  { key: 'corporateConnector' as const, Icon: Briefcase, image: '/service/3.jpeg' },
  { key: 'liveRituals' as const, Icon: Flame, image: '/service/4.jpeg' },
];

const fadeIn = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

export default function ServicesPage() {
  const t = useTranslations('services');

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero - Image with overlapping card */}
      <section className="relative" style={{ margin: 0, border: 'none' }}>
        <div className="relative h-[55vh] min-h-[380px] md:h-[65vh]">
          <img
            src="/service/service_hero.jpeg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        </div>
        <div className="relative z-10 -mt-20 md:-mt-28 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 md:p-12 shadow-xl"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary leading-tight">
              {t('title')}
            </h1>
            <p className="mt-5 text-lg text-gray-600 max-w-2xl">
              {t('subtitle')}
            </p>
            <p className="mt-4 text-gray-600">
              {t('intro')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services - Alternating rows */}
      <section className="py-20 md:py-28 bg-white" style={{ margin: 0, border: 'none' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((svc, idx) => {
            const Icon = svc.Icon;
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={svc.key}
                {...fadeIn}
                transition={{ delay: idx * 0.05 }}
                className="grid md:grid-cols-2 gap-12 md:gap-16 items-center py-16 md:py-20 border-b border-gray-100 last:border-0"
              >
                <div className={!isEven ? 'md:order-2' : ''}>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={svc.image}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className={!isEven ? 'md:order-1' : ''}>
                  <span className="text-5xl md:text-6xl font-bold text-primary/20">{t(`${svc.key}.num`)}</span>
                  <div className="flex items-center gap-3 mt-2 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="text-2xl font-bold text-primary">{t(`${svc.key}.title`)}</h2>
                  </div>
                  <p className="text-gray-600 font-medium mb-4">{t(`${svc.key}.subtitle`)}</p>
                  <p className="text-gray-700 leading-relaxed mb-6">{t(`${svc.key}.tagline`)}</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>{t(`${svc.key}.vibe`)}</p>
                    <p>{t(`${svc.key}.flow`)}</p>
                    <p className="text-primary font-medium">{t(`${svc.key}.perfectFor`)}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Standards */}
      <section className="py-20 md:py-28 bg-[#F8F7F5]" style={{ margin: 0, border: 'none' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn}>
            <h2 className="text-2xl font-bold text-primary mb-6">{t('standards.title')}</h2>
            <p className="text-gray-600 italic mb-10">{t('standards.subtitle')}</p>
            <div className="space-y-8">
              <p className="text-gray-700 leading-relaxed">{t('standards.hostFirst')}</p>
              <p className="text-gray-700 leading-relaxed">{t('standards.minimalist')}</p>
              <p className="text-gray-700 leading-relaxed">{t('standards.backbone')}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image strip */}
      <section style={{ margin: 0, border: 'none' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-2 md:gap-4">
            <motion.div {...fadeIn} className="aspect-[3/4] overflow-hidden">
              <img src="/images/gather/food/gather-pics-28.jpg" alt="" className="h-full w-full object-cover" />
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="aspect-[3/4] overflow-hidden">
              <img src="/images/gather/food/gather-pics-32.jpg" alt="" className="h-full w-full object-cover" />
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="aspect-[3/4] overflow-hidden">
              <img src="/images/gather/food/gather-pics-36.jpg" alt="" className="h-full w-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-primary text-white" style={{ margin: 0, border: 'none' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 {...fadeIn} className="text-2xl md:text-3xl font-bold mb-6">
            {t('consult.headline')}
          </motion.h2>
          <motion.p {...fadeIn} transition={{ delay: 0.1 }} className="opacity-95 mb-10">
            {t('consult.body')}
          </motion.p>
          <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/95 rounded-full w-full sm:w-auto">
                {t('consult.consultBtn')}
              </Button>
            </Link>
            <Link href="/menu">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 rounded-full w-full sm:w-auto">
                {t('consult.menuBtn')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
