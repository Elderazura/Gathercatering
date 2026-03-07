'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/lib/routing';
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

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
      <div className="relative z-[2] flex h-full flex-col items-center justify-end pb-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl font-medium tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1]"
          >
            {t('title')}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8"
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="min-w-[200px] bg-white text-primary hover:bg-white/95 hover:text-primary text-base"
              >
                {t('cta')}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
