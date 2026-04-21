'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/lib/routing';
import { useEffect, useRef } from 'react';

export default function VideoHero() {
  const t = useTranslations('hero');
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section
      className="relative h-[100dvh] min-h-[600px] w-full overflow-hidden"
      style={{ margin: 0, padding: 0 }}
      aria-label="Hero"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/images/gather/food/gather-pics-28.jpg"
          className="h-full w-full object-cover"
        >
          <source src="/media/hero1.mp4" type="video/mp4" />
          <img
            src="/images/gather/food/gather-pics-28.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </video>
        {/* Subtle gradient: dark at edges, lighter in center */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
      </div>

      {/* Content — left aligned, architectural */}
      <div className="relative z-[2] flex h-full flex-col justify-end pb-16 sm:pb-20 lg:pb-24 px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="max-w-2xl xl:max-w-3xl">

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="label-editorial text-white/60 mb-6 tracking-[0.2em]"
          >
            Dubai · UAE
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-white leading-[1.05] mb-8"
            style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: 400, fontStyle: 'italic' }}
          >
            {t('title')}
          </motion.h1>

          {/* Thin rule */}
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="h-px bg-white/30 w-24 mb-8"
          />

          {/* Subtext + CTA in a row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10"
          >
            <p className="text-white/75 text-sm sm:text-base font-light leading-relaxed max-w-xs">
              International menus · Elegant setups · Seamless hosting
            </p>
            <Link href="/contact" className="shrink-0">
              <span className="inline-flex items-center gap-3 label-editorial text-white border border-white/50 px-6 py-3 hover:bg-white hover:text-[#04544A] transition-all duration-300">
                Plan Your Gathering
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="flex-shrink-0">
                  <path d="M9 1l4 4-4 4M13 5H1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square"/>
                </svg>
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Bottom right: year / tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="absolute bottom-16 sm:bottom-20 right-6 sm:right-10 lg:right-16 label-editorial text-white/40 hidden sm:block"
        >
          Est. 27 years of gathering
        </motion.p>
      </div>
    </section>
  );
}
