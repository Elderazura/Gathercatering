'use client';

import { motion } from 'framer-motion';

interface VideoSectionProps {
  src: string;
  orientation?: 'landscape' | 'portrait';
  className?: string;
}

export default function VideoSection({
  src,
  orientation = 'landscape',
  className = '',
}: VideoSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative overflow-hidden rounded-lg shadow-xl ${className}`}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className={`w-full ${
          orientation === 'portrait' ? 'h-[600px] object-cover' : 'aspect-video'
        }`}
      >
        <source src={src} type="video/mp4" />
        <source src={src.replace('.mp4', '.webm')} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </motion.div>
  );
}
