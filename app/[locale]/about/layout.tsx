import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = {
  title: pageMetadata.about.title,
  description: pageMetadata.about.description,
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
