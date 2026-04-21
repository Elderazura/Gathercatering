'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/lib/routing';
import { gatherImages } from '@/lib/constants';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
};

export default function AboutPage() {
  const t = useTranslations('about');

  return (
    <div>
      {/* ─── HERO ─── */}
      <section className="relative h-[75vh] min-h-[520px] pt-14 sm:pt-16 overflow-hidden" style={{ margin: 0, border: 'none' }}>
        <img
          src={gatherImages.gallery[0]}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        <div className="relative z-10 flex h-full flex-col justify-end pb-14 sm:pb-18 px-6 sm:px-10 lg:px-16">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="label-editorial text-white/55 mb-5"
            >
              Our Story
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-white leading-[1.08]"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 400, fontStyle: 'italic' }}
            >
              {t('headline')}
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
              className="text-white/70 text-sm sm:text-base leading-relaxed max-w-sm"
            >
              {t('subheadline')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* ─── LEGACY ─── */}
      <section className="py-24 md:py-32 bg-[#faf9f6]" style={{ margin: 0, border: 'none' }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="flex items-center gap-6 mb-16">
            <span className="label-editorial text-[#04544A]">Legacy</span>
            <div className="flex-1 h-px bg-[#c8c0b4]" />
          </motion.div>

          <div className="grid md:grid-cols-[auto_1fr] gap-12 md:gap-20 items-start">
            {/* Large numeral */}
            <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="hidden md:block">
              <span
                className="font-serif text-[#04544A]/15 leading-none select-none"
                style={{ fontSize: 'clamp(6rem, 14vw, 11rem)', fontWeight: 300 }}
              >
                27
              </span>
              <span className="block label-editorial text-[#04544A] mt-1">years</span>
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
              <h2
                className="font-serif text-[#0c1c1a] mb-8 leading-[1.1]"
                style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 400, fontStyle: 'italic' }}
              >
                {t('legacy.title')}
              </h2>
              <p className="text-[#0c1c1a] text-lg leading-relaxed mb-5 max-w-2xl">{t('legacy.intro')}</p>
              <p className="text-[#4a4a42] leading-relaxed mb-5 max-w-2xl">{t('legacy.body')}</p>
              <p className="text-[#4a4a42] leading-relaxed max-w-2xl">{t('legacy.continuation')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── FULL-WIDTH IMAGE ─── */}
      <section style={{ margin: 0, border: 'none' }}>
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7 }}
          className="w-full aspect-[21/9] overflow-hidden"
        >
          <img
            src="/images/gather/food/gather-pics-28.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </motion.div>
      </section>

      {/* ─── PHILOSOPHY ─── */}
      <section className="py-24 md:py-32 bg-[#f0ede7]" style={{ margin: 0, border: 'none' }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="flex items-center gap-6 mb-16">
            <span className="label-editorial text-[#04544A]">{t('philosophy.title')}</span>
            <div className="flex-1 h-px bg-[#c8c0b4]" />
          </motion.div>

          <div className="max-w-3xl">
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.7 }}
              className="font-serif text-[#0c1c1a] mb-10 leading-[1.25]"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 400, fontStyle: 'italic' }}
            >
              {t('philosophy.intro')}
            </motion.p>
            <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="text-[#4a4a42] leading-relaxed mb-6">
              {t('philosophy.body')}
            </motion.p>
            <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }} className="text-[#4a4a42] leading-relaxed mb-12">
              {t('philosophy.continuation')}
            </motion.p>
            {/* Rule quote */}
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="border-l-2 border-[#04544A] pl-8">
              <p
                className="font-serif text-[#04544A] leading-relaxed"
                style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', fontWeight: 400, fontStyle: 'italic' }}
              >
                {t('philosophy.rule')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SIGNATURE ─── */}
      <section className="py-24 md:py-32 bg-[#faf9f6]" style={{ margin: 0, border: 'none' }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid md:grid-cols-[2fr_3fr] gap-12 md:gap-16 items-center">
            <motion.div {...fadeUp} transition={{ duration: 0.7 }} className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={gatherImages.gallery[2]}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Offset border */}
              <div className="absolute -bottom-3 -left-3 w-full h-full border border-[#04544A]/20 -z-10" />
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.1 }}>
              <div className="flex items-center gap-6 mb-10">
                <span className="label-editorial text-[#04544A]">Signature</span>
                <div className="flex-1 h-px bg-[#c8c0b4]" />
              </div>
              <h2
                className="font-serif text-[#0c1c1a] mb-8 leading-[1.1]"
                style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontWeight: 400, fontStyle: 'italic' }}
              >
                {t('signature.title')}
              </h2>
              <p className="text-[#4a4a42] leading-relaxed mb-5">{t('signature.body')}</p>
              <p className="text-[#4a4a42] leading-relaxed mb-10">{t('signature.continuation')}</p>
              <Link
                href="/menu"
                className="label-editorial text-[#04544A] flex items-center gap-3 hover:gap-5 transition-all duration-300"
              >
                Explore our menu
                <svg width="20" height="8" viewBox="0 0 20 8" fill="none">
                  <path d="M16 1l3 3-3 3M19 4H1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── COMMITMENT / CTA ─── */}
      <section className="relative py-32 md:py-40 overflow-hidden" style={{ margin: 0, border: 'none' }}>
        <img
          src={gatherImages.gallery[5]}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0c1c1a]/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div {...fadeUp} transition={{ duration: 0.7 }}>
            <div className="h-px bg-white/20 mb-12 max-w-xs" />
            <p className="label-editorial text-white/50 mb-6">{t('commitment.title')}</p>
            <h2
              className="font-serif text-white leading-[1.1] mb-8"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 300, fontStyle: 'italic' }}
            >
              {t('commitment.subtitle')}
            </h2>
            <p className="text-white/70 leading-relaxed mb-4 max-w-xl">{t('commitment.body')}</p>
            <p className="text-white/90 font-medium mb-12 max-w-xl">{t('closing')}</p>
            <Link href="/contact">
              <span className="label-editorial border border-white text-white px-8 py-4 hover:bg-white hover:text-[#04544A] transition-all duration-300 inline-flex items-center gap-3">
                {t('ctaBox.button')}
                <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
                  <path d="M12 1l3 3-3 3M15 4H1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
                </svg>
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
