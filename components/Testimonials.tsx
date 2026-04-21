'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    content: 'Gather Catering transformed our corporate event. Their attention to detail and seamless coordination allowed us to focus on our guests. The international menu with warm hospitality was a perfect blend.',
    name: 'Sarah Al Mansoori',
    role: 'Event Coordinator, Dubai Events',
  },
  {
    id: 2,
    content: 'Working with Gather Catering was effortless. They truly understand the host\'s mindset — from how guests arrive to how food flows. Our wedding was perfect, and we didn\'t have to worry about a thing.',
    name: 'Ahmed Hassan',
    role: 'Wedding Client',
  },
  {
    id: 3,
    content: 'The elegant setups and impeccable coordination made our annual gala unforgettable. Gather Catering doesn\'t just serve food — they create experiences.',
    name: 'Priya Sharma',
    role: 'Corporate Client, Tech Solutions UAE',
  },
];

export default function Testimonials() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {testimonials.map((t, i) => (
        <motion.div
          key={t.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.12 }}
        >
          <div className="h-px bg-[#c8c0b4]" />
          <div className={`py-10 grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 items-start ${i % 2 !== 0 ? 'md:grid-cols-[2fr_1fr]' : ''}`}>
            <div className={i % 2 !== 0 ? 'md:order-2' : ''}>
              <p
                className="font-serif text-[#0c1c1a] leading-[1.3]"
                style={{ fontSize: 'clamp(1.15rem, 2.5vw, 1.5rem)', fontWeight: 400, fontStyle: 'italic' }}
              >
                &ldquo;{t.content}&rdquo;
              </p>
            </div>
            <div className={`self-end ${i % 2 !== 0 ? 'md:order-1' : ''}`}>
              <p className="text-[#0c1c1a] font-medium text-sm">{t.name}</p>
              <p className="label-editorial text-[#9a9080] mt-1">{t.role}</p>
            </div>
          </div>
        </motion.div>
      ))}
      <div className="h-px bg-[#c8c0b4]" />
    </motion.div>
  );
}
