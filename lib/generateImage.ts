// Generate placeholder images using a service
export function getPlaceholderImage(
  width: number,
  height: number,
  text: string,
  bgColor: string = "A28979",
  textColor: string = "F4F3F1"
): string {
  // Using placeholder.com or similar service
  const encodedText = encodeURIComponent(text);
  return `https://placehold.co/${width}x${height}/${bgColor}/${textColor}?text=${encodedText}`;
}

// Alternative: Use Unsplash Source for better quality
export function getUnsplashImage(
  width: number,
  height: number,
  keywords: string
): string {
  const encodedKeywords = encodeURIComponent(keywords);
  return `https://source.unsplash.com/${width}x${height}/?${encodedKeywords}`;
}

// Use picsum.photos for random images
export function getPicsumImage(width: number, height: number, id?: number): string {
  if (id) {
    return `https://picsum.photos/seed/${id}/${width}/${height}`;
  }
  return `https://picsum.photos/${width}/${height}`;
}
