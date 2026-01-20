"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import ImagePlaceholder from "./ImagePlaceholder";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
  categories?: string[];
}

export default function GalleryGrid({
  images,
  categories = ["All", "Tablescapes", "Buffets", "Live Counters", "Plated", "Details"],
}: GalleryGridProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);

  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  const currentImageIndex = lightboxImage !== null ? lightboxImage : 0;
  const currentImage = filteredImages[currentImageIndex];

  const nextImage = () => {
    if (lightboxImage !== null) {
      setLightboxImage((lightboxImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (lightboxImage !== null) {
      setLightboxImage(
        lightboxImage === 0 ? filteredImages.length - 1 : lightboxImage - 1
      );
    }
  };

  return (
    <>
      <div className="mb-12 flex flex-wrap gap-3 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setLightboxImage(null);
            }}
            className={cn(
              "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
              selectedCategory === category
                ? "bg-[#0E564C] text-white shadow-lg shadow-[#0E564C]/20"
                : "bg-white/80 text-[#141414] border-2 border-[#C1B9AA]/30 hover:border-[#0E564C] hover:bg-[#F4F3F1]"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            onClick={() => {
              const actualIndex = images.findIndex(
                (img) => img.src === image.src
              );
              setLightboxImage(actualIndex);
            }}
          >
            <ImagePlaceholder
              src={image.src}
              alt={image.alt}
              category={image.category}
              className="w-full h-full"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="font-serif text-lg font-medium mb-1">
                  {image.alt}
                </p>
                <p className="text-sm text-white/80">{image.category}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {lightboxImage !== null && currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 text-white hover:text-[#C1B9AA] transition-colors z-10 p-2 hover:bg-white/10 rounded-full"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-6 text-white hover:text-[#C1B9AA] transition-colors z-10 p-3 hover:bg-white/10 rounded-full"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-6 text-white hover:text-[#C1B9AA] transition-colors z-10 p-3 hover:bg-white/10 rounded-full"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <ImagePlaceholder
                  src={currentImage.src}
                  alt={currentImage.alt}
                  category={currentImage.category}
                  className="w-full h-full"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                />
              </div>
              <div className="mt-6 text-center text-white">
                <p className="font-serif text-xl font-medium mb-2">
                  {currentImage.alt}
                </p>
                <p className="text-sm text-white/70">
                  {currentImageIndex + 1} of {filteredImages.length} •{" "}
                  {currentImage.category}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
