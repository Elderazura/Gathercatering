'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ImageSectionProps {
  src: string;
  alt: string;
  orientation?: 'landscape' | 'portrait';
  className?: string;
}

export default function ImageSection({
  src,
  alt,
  orientation = 'landscape',
  className = '',
}: ImageSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
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
