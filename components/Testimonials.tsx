'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company?: string;
  content: string;
  image?: string;
  rating: number;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Al Mansoori',
      role: 'Event Coordinator',
      company: 'Dubai Events',
      content: 'Gather Catering transformed our corporate event. Their attention to detail and seamless coordination allowed us to focus on our guests. The international menu with Indian hospitality was a perfect blend.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Ahmed Hassan',
      role: 'Wedding Planner',
      content: 'Working with Gather Catering was effortless. They truly understand the host\'s mindset - from how guests arrive to how food flows. Our wedding was perfect, and we didn\'t have to worry about a thing.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Priya Sharma',
      role: 'Corporate Client',
      company: 'Tech Solutions UAE',
      content: 'The elegant setups and impeccable coordination made our annual gala unforgettable. Gather Catering doesn\'t just serve food - they create experiences. Highly recommended for any event in Dubai or Abu Dhabi.',
      rating: 5,
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-gradient-to-b from-white to-gray-50"
      style={{ margin: 0, border: 'none', borderWidth: 0, outline: 'none' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Trusted by hosts across Dubai and Abu Dhabi
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}
                    {testimonial.company && `, ${testimonial.company}`}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
