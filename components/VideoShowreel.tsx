'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VideoShowreelProps {
  videoSrc?: string;
  title?: string;
}

export default function VideoShowreel({
  videoSrc = '/media/videos/gather-2-video-01.mp4',
  title = 'Our Work Showreel',
}: VideoShowreelProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = isMuted;
  }, [isMuted]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {});
  }, []);

  const togglePlay = () => setIsPlaying((p) => !p);
  const toggleMute = () => setIsMuted((m) => !m);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white"
      style={{ margin: 0, border: 'none', borderWidth: 0, outline: 'none' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4">
            {title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4">
            Experience the essence of Gather Catering
          </p>
        </div>
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl mx-2 sm:mx-0 bg-black">
          <video
            ref={videoRef}
            src={videoSrc}
            title={title}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
          <div className="absolute bottom-4 right-4 flex items-center gap-2 z-10">
            <Button
              type="button"
              variant="secondary"
              size="icon"
              className="h-10 w-10 rounded-full bg-black/50 hover:bg-black/70 text-white border-0"
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <Pause className="h-5 w-5" />
              ) : (
                <Play className="h-5 w-5" />
              )}
            </Button>
            <Button
              type="button"
              variant="secondary"
              size="icon"
              className="h-10 w-10 rounded-full bg-black/50 hover:bg-black/70 text-white border-0"
              onClick={toggleMute}
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? (
                <VolumeX className="h-5 w-5" />
              ) : (
                <Volume2 className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
