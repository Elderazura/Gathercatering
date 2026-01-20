"use client";

import Section from "@/components/Section";
import Container from "@/components/Container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import TestimonialCard from "@/components/TestimonialCard";
import CTA from "@/components/CTA";
import ParallaxSection from "@/components/ParallaxSection";
import ParallaxImage from "@/components/ParallaxImage";
import { homeCopy } from "@/lib/copy";
import { brandLines } from "@/lib/constants";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { Sparkles, UtensilsCrossed, Users, Calendar } from "lucide-react";

// Gallery images with actual URLs
const galleryPreviewImages = [
  { 
    src: "https://picsum.photos/seed/tablescape1/600/600", 
    alt: "Elegant Tablescape", 
    category: "Tablescapes" 
  },
  { 
    src: "https://picsum.photos/seed/buffet1/600/600", 
    alt: "Modern Buffet Display", 
    category: "Buffets" 
  },
  { 
    src: "https://picsum.photos/seed/grill1/600/600", 
    alt: "Live Grill Station", 
    category: "Live Counters" 
  },
  { 
    src: "https://picsum.photos/seed/plated1/600/600", 
    alt: "Plated Dinner Service", 
    category: "Plated" 
  },
  { 
    src: "https://picsum.photos/seed/detail1/600/600", 
    alt: "Table Setting Detail", 
    category: "Details" 
  },
  { 
    src: "https://picsum.photos/seed/garden1/600/600", 
    alt: "Garden Party Setup", 
    category: "Tablescapes" 
  },
];

const valuePillarIcons = [
  { icon: Users, color: "text-[#0E564C]" },
  { icon: UtensilsCrossed, color: "text-[#A28979]" },
  { icon: Sparkles, color: "text-[#988A78]" },
];

export default function HomeContent() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      {/* Hero with Parallax */}
      <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="https://picsum.photos/seed/hero-catering/1920/1080"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        </motion.div>

        {/* Hero Content */}
        <Container size="narrow" className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center space-y-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-medium text-white leading-[1.1] tracking-tight text-balance drop-shadow-lg">
                {homeCopy.hero.headline}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md">
                {homeCopy.hero.subtext}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-6"
            >
              <Link href="/contact" className="group">
                <button className="px-10 py-4 bg-[#0E564C] text-white rounded-full text-base font-semibold hover:bg-[#0a453d] shadow-2xl hover:shadow-[#0E564C]/30 hover:-translate-y-1 transition-all duration-300 min-w-[200px]">
                  {homeCopy.hero.ctaPrimary}
                </button>
              </Link>
              <Link href="/gallery" className="group">
                <button className="px-10 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-full text-base font-semibold hover:bg-white/20 hover:border-white/50 shadow-xl hover:-translate-y-1 transition-all duration-300 min-w-[200px]">
                  {homeCopy.hero.ctaSecondary}
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </Container>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white/70 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Value Pillars with Images */}
      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-serif font-semibold text-[#141414] mb-6">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-[#988A78] max-w-2xl mx-auto">
              Three principles that guide every gathering we host
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {homeCopy.valuePillars.map((pillar, index) => {
              const IconComponent = valuePillarIcons[index].icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group"
                >
                  <Card className="h-full border-[#C1B9AA]/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                    {/* Image Background */}
                    <div className="relative h-64 overflow-hidden">
                      <ParallaxImage
                        src={`https://picsum.photos/seed/pillar${index}/800/600`}
                        alt={pillar.title}
                        speed={0.2}
                        className="absolute inset-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0E564C]/80 via-[#0E564C]/40 to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border-2 border-white/30">
                          <IconComponent className="h-10 w-10 text-white" />
                        </div>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-2xl">{pillar.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {pillar.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Pull Quote with Parallax Background */}
      <div className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
        <ParallaxImage
          src="https://picsum.photos/seed/quote/1920/800"
          alt="Quote Background"
          speed={0.3}
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#A28979]/90 via-[#8b7565]/90 to-[#A28979]/90" />
        <Container size="narrow" className="relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center py-20"
          >
            <p className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-white leading-[1.2] italic drop-shadow-lg">
              &ldquo;{brandLines.pullQuote}&rdquo;
            </p>
          </motion.div>
        </Container>
      </div>

      {/* Signature Experiences with Staggered Layout */}
      <Section background="white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-serif font-semibold text-[#141414] mb-6">
              Signature Experiences
            </h2>
            <p className="text-xl text-[#988A78] max-w-2xl mx-auto">
              We create gatherings that feel effortless, memorable, and perfectly hosted.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeCopy.signatureExperiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full border-[#C1B9AA]/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <ParallaxImage
                      src={`https://picsum.photos/seed/experience${index}/800/600`}
                      alt={experience.title}
                      speed={0.15}
                      className="absolute inset-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{experience.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {experience.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* How It Feels - Full Width Image Section */}
      <div className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <ParallaxImage
          src="https://picsum.photos/seed/emotional/1920/1080"
          alt="Emotional Hook Background"
          speed={0.4}
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#141414]/80 via-[#141414]/70 to-[#141414]/80" />
        <Container size="narrow" className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center py-20"
          >
            <p className="text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-white leading-[1.2] mb-8 drop-shadow-lg">
              {brandLines.emotionalHook}
            </p>
            <p className="text-2xl text-white/90 max-w-xl mx-auto leading-relaxed font-light">
              {brandLines.hostingRelief}
            </p>
          </motion.div>
        </Container>
      </div>

      {/* Gallery Preview with Masonry Layout */}
      <Section background="white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-serif font-semibold text-[#141414] mb-6">
              Our Work
            </h2>
            <p className="text-xl text-[#988A78] max-w-2xl mx-auto mb-10">
              A glimpse into the gatherings we&apos;ve hosted.
            </p>
            <Link href="/gallery">
              <button className="text-[#0E564C] font-semibold hover:underline text-lg transition-all hover:tracking-wide flex items-center gap-2 mx-auto">
                View Full Gallery
                <span className="text-2xl">→</span>
              </button>
            </Link>
          </motion.div>
          
          {/* Masonry-style grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {galleryPreviewImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className={`relative aspect-square rounded-3xl overflow-hidden cursor-pointer group shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 ${
                  index % 3 === 0 ? "md:row-span-2" : ""
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="font-serif text-sm font-medium mb-1">
                      {image.alt}
                    </p>
                    <p className="text-xs text-white/80">{image.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section background="off-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-serif font-semibold text-[#141414] mb-6">
              What Our Hosts Say
            </h2>
            <p className="text-xl text-[#988A78] max-w-2xl mx-auto">
              Real experiences from hosts who trusted us with their gatherings
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {homeCopy.testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                index={index}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <CTA
        title="Ready to Host Your Gathering?"
        description="Let&apos;s create an experience your guests will remember."
        ctaText="Make an Enquiry"
        ctaHref="/contact"
      />
    </>
  );
}
