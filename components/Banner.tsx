'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface BannerProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'light';
  className?: string;
}

export default function Banner({ children, variant = 'primary', className = '' }: BannerProps) {
  const variants = {
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-white',
    light: 'bg-gray-100 text-gray-800',
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`py-16 ${variants[variant]} ${className}`}
      style={{ 
        margin: 0, 
        paddingTop: '5rem', 
        paddingBottom: '5rem',
        border: 'none', 
        outline: 'none',
        borderWidth: 0,
        boxShadow: 'none',
        display: 'block',
        position: 'relative',
        zIndex: 1
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </motion.section>
  );
}
