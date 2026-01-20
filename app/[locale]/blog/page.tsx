'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Banner from '@/components/Banner';
import ParallaxImageSection from '@/components/ParallaxImageSection';
import ParallaxSection from '@/components/ParallaxSection';
import { Link } from '@/lib/routing';

export default function BlogPage() {
  const t = useTranslations('blog');

  const blogPosts = [
    {
      id: 1,
      title: 'The Art of Hosting: Creating Memorable Gatherings',
      excerpt: 'Discover the key elements that transform ordinary events into extraordinary experiences.',
      image: '/media/images/food 1.jpeg',
      date: '2024-01-15',
      category: 'Hosting Tips',
    },
    {
      id: 2,
      title: 'International Flavors with Indian Hospitality',
      excerpt: 'How we blend global cuisines with warm, attentive service that makes every guest feel special.',
      image: '/media/images/food 2.jpeg',
      date: '2024-01-10',
      category: 'Cuisine',
    },
    {
      id: 3,
      title: 'Setting the Perfect Table: Elegance Without Excess',
      excerpt: 'Tips on creating beautiful, practical setups that enhance your event without overwhelming it.',
      image: '/media/images/food 4.jpeg',
      date: '2024-01-05',
      category: 'Design',
    },
    {
      id: 4,
      title: 'Event Planning in Dubai: A Complete Guide',
      excerpt: 'Everything you need to know about hosting events in the UAE\'s most vibrant city.',
      image: '/media/images/catering 1.jpeg',
      date: '2023-12-28',
      category: 'Events',
    },
    {
      id: 5,
      title: 'Seasonal Menus: Adapting to UAE Climate',
      excerpt: 'How we create menus that work perfectly for Dubai\'s unique seasonal variations.',
      image: '/media/images/food 5.jpeg',
      date: '2023-12-20',
      category: 'Menu Planning',
    },
    {
      id: 6,
      title: 'Corporate Catering: Making Business Events Memorable',
      excerpt: 'Strategies for creating impressive corporate events that leave lasting impressions.',
      image: '/media/images/catering 2.jpeg',
      date: '2023-12-15',
      category: 'Corporate',
    },
  ];

  const categories = ['All', 'Hosting Tips', 'Cuisine', 'Design', 'Events', 'Menu Planning', 'Corporate'];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Banner variant="primary" className="py-20">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            {t('title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl opacity-90"
          >
            {t('subtitle')}
          </motion.p>
        </div>
      </Banner>

      {/* Categories Filter */}
      <section className="py-12 bg-white" style={{ margin: 0, border: 'none', borderWidth: 0, borderBottom: 'none', outline: 'none' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-6 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-primary hover:text-white transition-colors font-medium"
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <ParallaxSection speed={0.1}>
      <section className="py-20 bg-gray-50" style={{ margin: 0, border: 'none', borderWidth: 0, outline: 'none' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center bg-white rounded-lg shadow-xl overflow-hidden"
          >
              <div className="relative h-96 md:h-full">
                <Image
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-8 md:p-12">
                <span className="inline-block px-4 py-1 bg-primary text-white rounded-full text-sm font-semibold mb-4">
                  {blogPosts[0].category}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-600 mb-6 text-lg">
                  {blogPosts[0].excerpt}
                </p>
                <time className="text-sm text-gray-500 block mb-6">
                  {new Date(blogPosts[0].date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <Link
                  href="#"
                  className="inline-block text-primary font-semibold hover:underline"
                >
                  Read Full Article →
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </ParallaxSection>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white" style={{ margin: 0, border: 'none', borderWidth: 0, outline: 'none' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-primary text-white rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                    <time className="text-sm text-gray-500">
                      {new Date(post.date).toLocaleDateString()}
                    </time>
                  </div>
                  <h2 className="text-2xl font-bold text-primary mt-2 mb-3 group-hover:text-opacity-80 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  <Link
                    href="#"
                    className="inline-block text-primary font-semibold hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <ParallaxSection speed={0.1}>
      <section className="py-20 bg-primary text-white" style={{ margin: 0, border: 'none', borderWidth: 0, outline: 'none' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Stay Updated
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Subscribe to our newsletter for hosting tips, menu updates, and event inspiration
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-secondary text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </ParallaxSection>

      {/* Image Gallery */}
      <section className="py-20 bg-gray-50" style={{ margin: 0, border: 'none', borderWidth: 0, outline: 'none' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Behind the Scenes
            </h2>
            <p className="text-xl text-gray-600">
              A glimpse into our creative process
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            <ParallaxImageSection
              src="/media/images/1e4.jpeg"
              alt="Behind the Scenes"
              orientation="portrait"
              speed={0.3}
            />
            <ParallaxImageSection
              src="/media/images/food 3.jpeg"
              alt="Behind the Scenes"
              orientation="landscape"
              speed={0.4}
            />
            <ParallaxImageSection
              src="/media/images/1e5.jpeg"
              alt="Behind the Scenes"
              orientation="portrait"
              speed={0.35}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
