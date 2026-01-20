"use client";

import Section from "@/components/Section";
import Container from "@/components/Container";
import GalleryGrid from "@/components/GalleryGrid";
import { motion } from "framer-motion";

// Gallery images with placeholders
const galleryImages = [
  { src: "", alt: "Elegant tablescape setup", category: "Tablescapes" },
  { src: "", alt: "Modern buffet display", category: "Buffets" },
  { src: "", alt: "Live grill station", category: "Live Counters" },
  { src: "", alt: "Plated dinner service", category: "Plated" },
  { src: "", alt: "Detail shot of table setting", category: "Details" },
  { src: "", alt: "Garden party setup", category: "Tablescapes" },
  { src: "", alt: "Canapé display", category: "Buffets" },
  { src: "", alt: "Live counter service", category: "Live Counters" },
  { src: "", alt: "Elegant plated course", category: "Plated" },
  { src: "", alt: "Table detail", category: "Details" },
  { src: "", alt: "Sunset table setup", category: "Tablescapes" },
  { src: "", alt: "Dessert buffet", category: "Buffets" },
];

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
