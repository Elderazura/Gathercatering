'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/lib/routing';
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

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
      </div>


      {/* Content */}
      <div className="relative z-[2] flex h-full flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow / Location */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-white/90"
          >
            {t('location')}
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 h-px w-16 bg-white/60 mx-auto origin-center"
          />

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl font-medium tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-[4.5rem] leading-[1.1]"
          >
            {t('title')}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-6 max-w-2xl text-lg text-white/95 sm:text-xl md:text-2xl leading-relaxed"
          >
            {t('subtitle')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="min-w-[180px] bg-white text-primary hover:bg-white/95 hover:text-primary"
              >
                {t('cta')}
              </Button>
            </Link>
            <Link href="/menu">
              <Button
                variant="outline"
                size="lg"
                className="min-w-[180px] border-white/60 text-white hover:bg-white/10 hover:border-white hover:text-white"
              >
                View Menu
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 z-[2] -translate-x-1/2"
      >
        <a
          href="#why"
          className="flex flex-col items-center gap-1 text-white/70 transition-colors hover:text-white"
          aria-label="Scroll to content"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="h-5 w-5 animate-bounce" strokeWidth={2} />
        </a>
      </motion.div>
    </section>
  );
}
