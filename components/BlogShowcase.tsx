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
      className="py-20 bg-white"
      style={{ margin: 0, border: 'none', borderWidth: 0, outline: 'none' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Latest Stories
            </h2>
            <p className="text-xl text-gray-600">
              Insights on hosting great gatherings
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden md:block text-primary font-semibold hover:underline"
          >
            View All →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <Link href={`/blog#${post.slug}`}>
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <time className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <h3 className="text-2xl font-bold text-primary mt-2 mb-3 group-hover:text-opacity-80 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-700 line-clamp-2">{post.excerpt}</p>
                  <span className="inline-block mt-4 text-primary font-semibold group-hover:underline">
                    Read More →
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
        <div className="text-center mt-8 md:hidden">
          <Link
            href="/blog"
            className="inline-block text-primary font-semibold hover:underline"
          >
            View All Blog Posts →
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
