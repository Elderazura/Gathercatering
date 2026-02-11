import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = {
  title: pageMetadata.blog.title,
  description: pageMetadata.blog.description,
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
