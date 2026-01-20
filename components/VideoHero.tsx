'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/lib/routing';
import { useEffect, useRef } from 'react';

export default function VideoHero() {
  const t = useTranslations('hero');
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video plays
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay was prevented, user interaction required
      });
    }
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden" style={{ margin: 0, padding: 0 }}>
      {/* Hero Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/images/hero/Hero 1.jpeg"
          className="w-full h-full object-cover"
          style={{ objectFit: 'cover' }}
        >
          <source src="/images/hero/herovideo.webm" type="video/webm" />
          {/* Fallback image if video doesn't load */}
          <img
            src="/images/hero/Hero 1.jpeg"
            alt="Gather Catering Hero"
            className="w-full h-full object-cover"
          />
        </video>
      </div>

      {/* Overlay - Removed green gradient, using subtle dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-[1]" />

      {/* Content - Properly layered */}
      <div className="relative z-[2] flex items-center justify-center h-full">
        <div className="text-center text-white px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 relative z-[3] leading-tight"
          >
            {t('title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto px-2 relative z-[3] leading-relaxed"
          >
            {t('subtitle')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative z-[3]"
          >
            <Link
              href="/contact"
              className="inline-block bg-primary text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 touch-manipulation"
            >
              {t('cta')}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-[3]"
      >
        <div className="animate-bounce">
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}
