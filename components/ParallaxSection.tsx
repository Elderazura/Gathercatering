"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export default function ParallaxSection({
  children,
  speed = 0.5,
  className = "",
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50 * speed]);

  return (
    <div 
      className={`${className}`} 
      style={{ 
        margin: 0, 
        padding: 0, 
        border: 'none',
        borderWidth: 0,
        outline: 'none',
        background: 'transparent',
        display: 'block',
        position: 'relative'
      }}
    >
      <motion.div 
        ref={ref} 
        style={{ 
          y, 
          margin: 0, 
          padding: 0, 
          border: 'none',
          borderWidth: 0,
          outline: 'none'
        }} 
        className="relative"
      >
        {children}
      </motion.div>
    </div>
  );
}
