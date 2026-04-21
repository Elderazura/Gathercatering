'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/lib/routing';
import { gatherImages } from '@/lib/constants';

const services = [
  { key: 'boutiqueFive' as const, num: '01', image: '/service/1.jpeg' },
  { key: 'socialFlow' as const, num: '02', image: '/service/2.jpeg' },
  { key: 'corporateConnector' as const, num: '03', image: '/service/3.jpeg' },
  { key: 'liveRituals' as const, num: '04', image: '/service/4.jpeg' },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
};

export default function ServicesPage() {
  const t = useTranslations('services');

  return (
    <div>
      {/* ─── HERO ─── */}
      <section className="relative h-[72vh] min-h-[500px] pt-14 sm:pt-16 overflow-hidden" style={{ margin: 0, border: 'none' }}>
        <img
          src="/service/service_hero.jpeg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        <div className="relative z-10 flex h-full flex-col justify-end pb-14 px-6 sm:px-10 lg:px-16">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="label-editorial text-white/55 mb-5"
            >
              What We Do
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-white leading-[1.08]"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 400, fontStyle: 'italic' }}
            >
              {t('title')}
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="h-px bg-white/30 w-20 mt-7 mb-6"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-white/70 text-sm sm:text-base leading-relaxed max-w-md"
            >
              {t('subtitle')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* ─── INTRO ─── */}
      <section className="py-16 md:py-20 bg-[#faf9f6]" style={{ margin: 0, border: 'none' }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.p {...fadeUp} className="text-[#4a4a42] leading-relaxed max-w-2xl text-lg">
            {t('intro')}
          </motion.p>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="bg-[#faf9f6]" style={{ margin: 0, border: 'none' }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          {services.map((svc, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={svc.key}
                {...fadeUp}
                transition={{ delay: idx * 0.04 }}
              >
                <div className="h-px bg-[#c8c0b4]" />
                <div className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center py-16 md:py-20`}>
                  {/* Image */}
                  <div className={!isEven ? 'md:order-2' : ''}>
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img
                        src={svc.image}
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                      />
                      {/* Offset border accent */}
                      <div className={`absolute -bottom-2 ${isEven ? '-right-2' : '-left-2'} w-full h-full border border-[#04544A]/15 -z-10`} />
                    </div>
                  </div>

                  {/* Text */}
                  <div className={!isEven ? 'md:order-1' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="label-editorial text-[#c8c0b4]">{svc.num}</span>
                      <div className="flex-1 h-px bg-[#c8c0b4]/50" />
                    </div>
                    <h2
                      className="font-serif text-[#0c1c1a] mb-5 leading-[1.1]"
                      style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 400, fontStyle: 'italic' }}
                    >
                      {t(`${svc.key}.title`)}
                    </h2>
                    <p className="text-[#4a4a42] font-medium mb-4 leading-relaxed">{t(`${svc.key}.subtitle`)}</p>
                    <p className="text-[#6a6658] leading-relaxed mb-6">{t(`${svc.key}.tagline`)}</p>
                    <div className="space-y-2">
                      <p className="text-[#6a6658] text-sm">{t(`${svc.key}.vibe`)}</p>
                      <p className="text-[#6a6658] text-sm">{t(`${svc.key}.flow`)}</p>
                      <p className="text-[#04544A] text-sm font-medium mt-3">{t(`${svc.key}.perfectFor`)}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
          <div className="h-px bg-[#c8c0b4]" />
        </div>
      </section>

      {/* ─── STANDARDS ─── */}
      <section className="py-24 md:py-32 bg-[#f0ede7]" style={{ margin: 0, border: 'none' }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="flex items-center gap-6 mb-14">
            <span className="label-editorial text-[#04544A]">Standards</span>
            <div className="flex-1 h-px bg-[#c8c0b4]" />
          </motion.div>
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
            <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
              <h2
                className="font-serif text-[#0c1c1a] leading-[1.1]"
                style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 400, fontStyle: 'italic' }}
              >
                {t('standards.title')}
              </h2>
              <p className="text-[#A38A7A] mt-4 italic text-sm">{t('standards.subtitle')}</p>
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="space-y-6">
              <p className="text-[#4a4a42] leading-relaxed">{t('standards.hostFirst')}</p>
              <div className="h-px bg-[#c8c0b4]/50" />
              <p className="text-[#4a4a42] leading-relaxed">{t('standards.minimalist')}</p>
              <div className="h-px bg-[#c8c0b4]/50" />
              <p className="text-[#4a4a42] leading-relaxed">{t('standards.backbone')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── IMAGE STRIP ─── */}
      <section style={{ margin: 0, border: 'none' }}>
        <div className="grid grid-cols-3 gap-1 sm:gap-2">
          {[
            gatherImages.gallery[0],
            gatherImages.gallery[4],
            gatherImages.gallery[8],
          ].map((src, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ delay: i * 0.08 }}
              className="aspect-[3/4] overflow-hidden"
            >
              <img
                src={src}
                alt=""
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative py-32 md:py-40 overflow-hidden" style={{ margin: 0, border: 'none' }}>
        <img
          src={gatherImages.gallery[7]}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0c1c1a]/78" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div {...fadeUp}>
            <div className="h-px bg-white/20 mb-12 max-w-xs" />
            <h2
              className="font-serif text-white leading-[1.1] mb-12"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)', fontWeight: 300, fontStyle: 'italic' }}
            >
              {t('consult.headline')}
            </h2>
            <p className="text-white/65 leading-relaxed mb-12 max-w-md">{t('consult.body')}</p>
            <div className="flex flex-wrap gap-5 items-center">
              <Link href="/contact">
                <span className="label-editorial border border-white text-white px-8 py-4 hover:bg-white hover:text-[#04544A] transition-all duration-300 inline-flex items-center gap-3">
                  {t('consult.consultBtn')}
                  <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
                    <path d="M12 1l3 3-3 3M15 4H1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
                  </svg>
                </span>
              </Link>
              <Link href="/menu">
                <span className="label-editorial text-white/45 hover:text-white transition-colors duration-200 inline-flex items-center gap-3">
                  {t('consult.menuBtn')}
                  <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
                    <path d="M12 1l3 3-3 3M15 4H1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
                  </svg>
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
