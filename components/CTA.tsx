"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Container from "./Container";
import { motion } from "framer-motion";

interface CTAProps {
  title: string;
  description?: string;
  ctaText: string;
  ctaHref?: string;
  variant?: "default" | "taupe";
}

export default function CTA({
  title,
  description,
  ctaText,
  ctaHref = "/contact",
  variant = "default",
}: CTAProps) {
  const bgClass =
    variant === "taupe"
      ? "bg-gradient-to-br from-[#A28979] to-[#8b7565]"
      : "bg-gradient-to-br from-[#0E564C] to-[#0a453d]";
  const textClass = "text-white";

  return (
    <section className={`${bgClass} py-20 md:py-28 relative overflow-hidden`}>
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      
      <Container size="narrow" className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <h2 className={`text-4xl md:text-5xl font-serif font-semibold ${textClass} leading-tight`}>
            {title}
          </h2>
          {description && (
            <p className={`text-xl ${textClass}/90 max-w-2xl mx-auto leading-relaxed`}>
              {description}
            </p>
          )}
          <div className="pt-6">
            <Link href={ctaHref}>
              <Button
                size="lg"
                className="bg-white text-[#0E564C] hover:bg-white/95 hover:shadow-2xl hover:shadow-white/20"
              >
                {ctaText}
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
