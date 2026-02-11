import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = {
  title: pageMetadata.menu.title,
  description: pageMetadata.menu.description,
};

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return children;
}
