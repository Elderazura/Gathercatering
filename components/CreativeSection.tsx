'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface CreativeSectionProps {
  children: ReactNode;
  className?: string;
  variant?: 'fade' | 'slide' | 'scale' | 'rotate';
}

export default function CreativeSection({
  children,
  className = '',
  variant = 'fade',
}: CreativeSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const variants = {
    fade: {
      opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]),
      y: useTransform(scrollYProgress, [0, 1], [50, -50]),
    },
    slide: {
      x: useTransform(scrollYProgress, [0, 1], [-100, 100]),
      opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]),
    },
    scale: {
      scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.05]),
      opacity: useTransform(scrollYProgress, [0, 0.3, 1], [0.5, 1, 1]),
    },
    rotate: {
      rotate: useTransform(scrollYProgress, [0, 1], [0, 5]),
      opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]),
    },
  };

  const style = variants[variant];

  return (
    <motion.div ref={ref} style={style} className={className}>
      {children}
    </motion.div>
  );
}
