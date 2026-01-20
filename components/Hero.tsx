"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Container from "./Container";

interface HeroProps {
  headline: string;
  subtext: string;
  ctaPrimary: string;
  ctaPrimaryHref?: string;
  ctaSecondary: string;
  ctaSecondaryHref?: string;
}

export default function Hero({
  headline,
  subtext,
  ctaPrimary,
  ctaPrimaryHref = "/contact",
  ctaSecondary,
  ctaSecondaryHref = "/gallery",
}: HeroProps) {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with gradient and subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F4F3F1] via-white to-[#F4F3F1]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,86,76,0.03),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(162,137,121,0.02)_25%,rgba(162,137,121,0.02)_50%,transparent_50%,transparent_75%,rgba(162,137,121,0.02)_75%,rgba(162,137,121,0.02)_100%)] bg-[length:20px_20px]" />
      </div>
      
      <Container size="narrow">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center space-y-10 relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-6"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-medium text-[#141414] leading-[1.1] tracking-tight text-balance">
              {headline}
            </h1>
            <p className="text-xl md:text-2xl text-[#988A78] max-w-3xl mx-auto leading-relaxed font-light">
              {subtext}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-6"
          >
            <Link href={ctaPrimaryHref} className="group">
              <Button size="lg" className="w-full sm:w-auto min-w-[200px]">
                {ctaPrimary}
              </Button>
            </Link>
            <Link href={ctaSecondaryHref} className="group">
              <Button variant="outline" size="lg" className="w-full sm:w-auto min-w-[200px]">
                {ctaSecondary}
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
}
