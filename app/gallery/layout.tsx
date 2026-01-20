import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A glimpse into the gatherings we've hosted. Tablescapes, buffets, live counters, and more.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
