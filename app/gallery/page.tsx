"use client";

import Section from "@/components/Section";
import Container from "@/components/Container";
import GalleryGrid from "@/components/GalleryGrid";
import { motion } from "framer-motion";
import { gatherImages } from "@/lib/constants";

const categories = ["Tablescapes", "Buffets", "Live Counters", "Plated", "Details"];

// Gallery images from gather_image - distributed across categories
const galleryImages = gatherImages.gallery.map((src, i) => ({
  src,
  alt: "Gather Catering event",
  category: categories[i % categories.length],
}));

export default function Gallery() {
  return (
    <>
      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center py-16 mb-16"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-[#141414] mb-8">
              Gallery
            </h1>
            <p className="text-xl text-[#988A78] max-w-3xl mx-auto leading-relaxed">
              A glimpse into the gatherings we&apos;ve hosted. Each setup is
              thoughtfully designed for flow, elegance, and warmth.
            </p>
          </motion.div>
          <GalleryGrid images={galleryImages} />
        </Container>
      </Section>
    </>
  );
}
