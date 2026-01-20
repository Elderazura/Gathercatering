'use client';

import { motion } from 'framer-motion';
import { Link } from '@/lib/routing';
import Image from 'next/image';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  slug: string;
}

export default function BlogShowcase() {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'The Art of Hosting: Creating Memorable Gatherings',
      excerpt: 'Discover the key elements that transform ordinary events into extraordinary experiences.',
      image: '/media/images/food 3.jpeg',
      date: '2024-01-15',
      slug: 'art-of-hosting',
    },
    {
      id: 2,
      title: 'International Flavors with Indian Hospitality',
      excerpt: 'How we blend global cuisines with warm, attentive service that makes every guest feel special.',
      image: '/media/images/food 4.jpeg',
      date: '2024-01-10',
      slug: 'international-flavors',
    },
    {
      id: 3,
      title: 'Setting the Perfect Table: Elegance Without Excess',
      excerpt: 'Tips on creating beautiful, practical setups that enhance your event without overwhelming it.',
      image: '/media/images/food 5.jpeg',
      date: '2024-01-05',
      slug: 'perfect-table',
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-12 sm:py-16 md:py-20 bg-white"
      style={{ margin: 0, border: 'none', borderWidth: 0, outline: 'none' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2 sm:mb-4">
              Latest Stories
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              Insights on hosting great gatherings
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden lg:block text-primary font-semibold hover:underline text-sm sm:text-base"
          >
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <Link href={`/blog#${post.slug}`} className="block">
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <time className="text-xs sm:text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mt-2 mb-2 sm:mb-3 group-hover:text-opacity-80 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 line-clamp-2 mb-3 sm:mb-4">{post.excerpt}</p>
                  <span className="inline-block text-sm sm:text-base text-primary font-semibold group-hover:underline">
                    Read More →
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
        <div className="text-center mt-6 sm:mt-8 lg:hidden">
          <Link
            href="/blog"
            className="inline-block text-primary font-semibold hover:underline text-sm sm:text-base touch-manipulation"
          >
            View All Blog Posts →
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
