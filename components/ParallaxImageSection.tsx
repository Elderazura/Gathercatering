'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

interface ParallaxImageSectionProps {
  src: string;
  alt: string;
  orientation?: 'landscape' | 'portrait';
  className?: string;
  speed?: number;
}

export default function ParallaxImageSection({
  src,
  alt,
  orientation = 'landscape',
  className = '',
  speed = 0.5,
}: ParallaxImageSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50 * speed]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.7, 1, 1, 0.7]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.02, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, scale }}
      className={`relative overflow-hidden rounded-lg shadow-xl ${className}`}
    >
      <div
        className={`relative w-full ${
          orientation === 'portrait' ? 'h-[600px]' : 'aspect-video'
        }`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover ${orientation === 'portrait' ? 'object-center' : ''}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </motion.div>
  );
}
