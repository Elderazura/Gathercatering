'use client';

import { motion } from 'framer-motion';

interface VideoShowreelProps {
  videoUrl: string;
  title?: string;
}

export default function VideoShowreel({ videoUrl, title = 'Our Work Showreel' }: VideoShowreelProps) {
  // Convert YouTube URL to embed format
  const getEmbedUrl = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    const videoId = match && match[2].length === 11 ? match[2] : null;
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  };

  const embedUrl = getEmbedUrl(videoUrl);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
      style={{ margin: 0, border: 'none', borderWidth: 0, outline: 'none' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600">
            Experience the essence of Gather Catering
          </p>
        </div>
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
          <iframe
            src={embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>
    </motion.section>
  );
}
