'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface GalleryImage {
  src: string;
  alt: string;
  orientation: 'portrait' | 'landscape';
}

interface AnimatedGalleryProps {
  images: GalleryImage[];
  interval?: number;
}

export default function AnimatedGallery({ images, interval = 3000 }: AnimatedGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentIndexRef = useRef(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  useEffect(() => {
    if (images.length <= 1) return;

    const changeImage = () => {
      // Randomly select next image (different from current)
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * images.length);
      } while (newIndex === currentIndexRef.current && images.length > 1);
      
      setCurrentIndex(newIndex);
    };

    const scheduleNextChange = () => {
      // Random interval between 2-5 seconds (2000ms to 5000ms)
      const minInterval = 2000;
      const maxInterval = 5000;
      const randomInterval = minInterval + Math.random() * (maxInterval - minInterval);
      timerRef.current = setTimeout(() => {
        changeImage();
        scheduleNextChange();
      }, randomInterval);
    };

    scheduleNextChange();

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [images.length]);

  const currentImage = images[currentIndex];

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ 
            opacity: 0, 
            scale: 1.05,
            filter: 'blur(8px)'
          }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            filter: 'blur(0px)'
          }}
          exit={{ 
            opacity: 0, 
            scale: 0.95,
            filter: 'blur(8px)'
          }}
          transition={{ 
            duration: 1,
            ease: [0.4, 0, 0.2, 1]
          }}
          className="absolute inset-0"
        >
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            className={`object-cover transition-all duration-1000 ${
              currentImage.orientation === 'portrait' ? 'object-center' : ''
            }`}
            sizes="100vw"
            priority={currentIndex === 0}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
