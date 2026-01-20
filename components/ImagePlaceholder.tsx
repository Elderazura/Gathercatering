"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  src?: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  category?: string;
  priority?: boolean;
  sizes?: string;
}

export default function ImagePlaceholder({
  src,
  alt,
  width = 800,
  height = 600,
  className,
  category,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
}: ImagePlaceholderProps) {
  // Generate a gradient based on category or use default
  const getGradient = () => {
    const gradients = {
      Tablescapes: "from-[#A28979] via-[#C1B9AA] to-[#988A78]",
      Buffets: "from-[#0E564C] via-[#A28979] to-[#C1B9AA]",
      "Live Counters": "from-[#8b7565] via-[#A28979] to-[#C1B9AA]",
      Plated: "from-[#C1B9AA] via-[#A28979] to-[#988A78]",
      Details: "from-[#988A78] via-[#A28979] to-[#0E564C]",
      default: "from-[#A28979] via-[#C1B9AA] to-[#988A78]",
    };
    return gradients[category as keyof typeof gradients] || gradients.default;
  };

  if (src && src.startsWith("/")) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn("object-cover", className)}
        priority={priority}
        sizes={sizes}
      />
    );
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-gradient-to-br",
        getGradient(),
        className
      )}
      style={{ width, height }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center p-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <svg
              className="w-8 h-8 text-white/80"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <p className="text-white/90 font-serif text-lg font-medium mb-1">
            {alt}
          </p>
          {category && (
            <p className="text-white/60 text-xs uppercase tracking-wider">
              {category}
            </p>
          )}
        </div>
      </div>
      {/* Overlay pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent_50%)]" />
    </div>
  );
}
