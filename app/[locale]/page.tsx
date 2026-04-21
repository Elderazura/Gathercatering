'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import VideoHero from '@/components/VideoHero';
import Testimonials from '@/components/Testimonials';
import BlogShowcase from '@/components/BlogShowcase';
import ParallaxSection from '@/components/ParallaxSection';
import { Link } from '@/lib/routing';
import { gatherImages } from '@/lib/constants';

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
};

const mindsetPairs = [
  { other: 'How many plates?', gather: 'How do guests feel when they arrive?' },
  { other: 'Is the food hot?', gather: 'Is the grill sizzling at the right moment?' },
  { other: 'What time do we leave?', gather: 'How do we make the host feel like a guest?' },
  { other: 'Menu execution.', gather: 'The flow of the whole evening.' },
];

const servicesList = [
  { num: '01', title: 'Menu & Cuisine', desc: 'International, non-regional menus built for the room.' },
  { num: '02', title: 'Setup & Atmosphere', desc: 'Clean tablescapes and tasteful arrangements, handled.' },
  { num: '03', title: 'Live Stations', desc: 'Grill, carving, mezze — live counters with perfect timing.' },
  { num: '04', title: 'Full Coordination', desc: 'From planning to pack-up. One point of contact.' },
];

export default function HomePage() {
  const t = useTranslations();
  const [leadForm, setLeadForm] = useState({ name: '', email: '', phone: '' });
  const [leadStatus, setLeadStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLeadStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...leadForm, message: 'Home page lead — interested in planning a gathering' }),
      });
      if (res.ok) {
        setLeadStatus('success');
        setLeadForm({ name: '', email: '', phone: '' });
      } else setLeadStatus('error');
    } catch {
      setLeadStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-[#faf9f6]">
      <VideoHero />

      {/* ─── 01 · PHILOSOPHY ─── */}
      <section className="relative py-24 md:py-32 bg-[#faf9f6]" style={{ margin: 0, border: 'none' }}>
        {/* Big background number */}
        <span className="section-number absolute -top-4 left-6 sm:left-10 lg:left-16 select-none pointer-events-none">
          01
        </span>

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          {/* Section label + rule */}
          <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="flex items-center gap-6 mb-14">
            <span className="label-editorial text-[#04544A]">Philosophy</span>
            <div className="flex-1 h-px bg-[#c8c0b4]" />
          </motion.div>

          {/* Content: text left, image right */}
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-start">
            <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.1 }}>
              <h2
                className="font-serif text-[#0c1c1a] leading-[1.1] mb-8"
                style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 400, fontStyle: 'italic' }}
              >
                {t('why.headline')}
              </h2>
              <p className="text-[#4a4a42] leading-relaxed mb-5 max-w-md">
                {t('why.body')}
              </p>
              <p className="text-[#4a4a42] leading-relaxed mb-12 max-w-md">
                {t('dna.body')}
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <Link href="/about" className="label-editorial text-[#04544A] flex items-center gap-3 hover:gap-5 transition-all duration-300">
                  Our Story
                  <svg width="20" height="8" viewBox="0 0 20 8" fill="none">
                    <path d="M16 1l3 3-3 3M19 4H1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square"/>
                  </svg>
                </Link>
                <Link href="/menu" className="label-editorial text-[#A38A7A] flex items-center gap-3 hover:gap-5 transition-all duration-300">
                  View Menus
                  <svg width="20" height="8" viewBox="0 0 20 8" fill="none">
                    <path d="M16 1l3 3-3 3M19 4H1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square"/>
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Image — no rounded corners */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative aspect-[4/5] overflow-hidden"
            >
              <img
                src={gatherImages.gallery[3]}
                alt="Gather Cater gathering"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
              {/* Accent: thin teal border offset */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-[#04544A]/20 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── STATEMENT ─── */}
      <section className="py-20 md:py-24 bg-[#04544A]" style={{ margin: 0, border: 'none' }}>
        <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="h-px bg-white/20 mb-14" />
            <p
              className="font-serif text-white leading-[1.15]"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 3.25rem)', fontWeight: 300, fontStyle: 'italic' }}
            >
              &ldquo;Most caterers feed guests.<br />
              Gather Catering hosts gatherings.&rdquo;
            </p>
            <div className="h-px bg-white/20 mt-14" />
          </motion.div>
        </div>
      </section>

      {/* ─── 02 · THE DIFFERENCE ─── */}
      <section className="py-24 md:py-32 bg-[#f0ede7]" style={{ margin: 0, border: 'none' }}>
        <span className="section-number absolute left-6 sm:left-10 lg:left-16 select-none pointer-events-none -mt-4">
          02
        </span>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="flex items-center gap-6 mb-14">
            <span className="label-editorial text-[#04544A]">The Difference</span>
            <div className="flex-1 h-px bg-[#c8c0b4]" />
          </motion.div>

          <motion.h2
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-[#0c1c1a] mb-16"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, fontStyle: 'italic' }}
          >
            The way we think<br />is the difference.
          </motion.h2>

          {/* Comparison table — no cards */}
          <div className="max-w-3xl">
            {/* Header row */}
            <div className="grid grid-cols-2 gap-8 mb-3">
              <span className="label-editorial text-[#A38A7A]">Others Ask</span>
              <span className="label-editorial text-[#04544A]">We Think</span>
            </div>
            <div className="h-px bg-[#c8c0b4] mb-1" />

            {mindsetPairs.map((pair, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="grid grid-cols-2 gap-8 py-5">
                  <p className="text-[#9a9080] line-through text-sm leading-relaxed">{pair.other}</p>
                  <p className="text-[#0c1c1a] font-medium text-sm leading-relaxed">{pair.gather}</p>
                </div>
                <div className="h-px bg-[#c8c0b4]/50" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 03 · SERVICES ─── */}
      <section className="py-24 md:py-32 bg-[#faf9f6]" style={{ margin: 0, border: 'none' }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="flex items-center gap-6 mb-14">
            <span className="label-editorial text-[#04544A]">Services</span>
            <div className="flex-1 h-px bg-[#c8c0b4]" />
          </motion.div>

          <div className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 items-start">
            {/* Left: heading + link */}
            <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.1 }}>
              <h2
                className="font-serif text-[#0c1c1a] mb-10 leading-[1.1]"
                style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', fontWeight: 400, fontStyle: 'italic' }}
              >
                {t('boutiqueFive.title')}
              </h2>
              <p className="text-[#4a4a42] leading-relaxed mb-10 max-w-sm">
                {t('boutiqueFive.subtitle')}
              </p>
              <Link href="/services" className="label-editorial text-[#04544A] flex items-center gap-3 hover:gap-5 transition-all duration-300">
                All Services
                <svg width="20" height="8" viewBox="0 0 20 8" fill="none">
                  <path d="M16 1l3 3-3 3M19 4H1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square"/>
                </svg>
              </Link>
            </motion.div>

            {/* Right: service list */}
            <div>
              {servicesList.map((svc, i) => (
                <motion.div
                  key={svc.num}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
                >
                  <div className="h-px bg-[#c8c0b4]" />
                  <div className="flex gap-6 py-6 group">
                    <span className="label-editorial text-[#c8c0b4] pt-0.5 shrink-0 w-6">{svc.num}</span>
                    <div className="flex-1">
                      <p className="font-serif text-[#0c1c1a] text-xl mb-1 group-hover:text-[#04544A] transition-colors duration-200" style={{ fontWeight: 500 }}>
                        {svc.title}
                      </p>
                      <p className="text-[#6a6658] text-sm leading-relaxed">{svc.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
              <div className="h-px bg-[#c8c0b4]" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── 04 · WORK / GALLERY ─── */}
      <section className="py-24 md:py-28 bg-[#0c1c1a]" style={{ margin: 0, border: 'none' }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="flex items-center gap-6 mb-14">
            <span className="label-editorial text-white/40">Our Work</span>
            <div className="flex-1 h-px bg-white/15" />
            <Link href="/gallery" className="label-editorial text-white/50 hover:text-white flex items-center gap-2 transition-colors duration-200 shrink-0">
              View all
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
                <path d="M12 1l3 3-3 3M15 4H1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square"/>
              </svg>
            </Link>
          </motion.div>

          {/* Editorial grid — no rounded corners */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
            {gatherImages.gallery.slice(0, 8).map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={`relative overflow-hidden group ${
                  i === 0 ? 'col-span-2 row-span-2 aspect-square' :
                  i === 3 ? 'col-span-2 aspect-[2/1]' :
                  'aspect-square'
                }`}
              >
                <img
                  src={src}
                  alt="Gather Cater"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 05 · VOICES ─── */}
      <Testimonials />

      {/* ─── INTERNATIONAL ─── */}
      <section className="py-20 md:py-24 bg-[#f0ede7]" style={{ margin: 0, border: 'none' }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-center">
            <motion.div {...fadeUp} transition={{ duration: 0.7 }}>
              <h2
                className="font-serif text-[#0c1c1a] leading-[1.1]"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, fontStyle: 'italic' }}
              >
                {t('international.headline')}
              </h2>
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.15 }}>
              <p className="text-[#4a4a42] leading-relaxed mb-8">
                {t('international.body')}
              </p>
              <Link href="/menu" className="label-editorial text-[#04544A] flex items-center gap-3 hover:gap-5 transition-all duration-300">
                Explore Our Menus
                <svg width="20" height="8" viewBox="0 0 20 8" fill="none">
                  <path d="M16 1l3 3-3 3M19 4H1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square"/>
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── LEAD FORM ─── */}
      <section className="py-24 md:py-28 bg-[#faf9f6]" style={{ margin: 0, border: 'none' }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 items-start">
            <motion.div {...fadeUp} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-6 mb-10">
                <span className="label-editorial text-[#04544A]">Enquire</span>
                <div className="flex-1 h-px bg-[#c8c0b4]" />
              </div>
              <h2
                className="font-serif text-[#0c1c1a] leading-[1.1] mb-6"
                style={{ fontSize: 'clamp(2.2rem, 4vw, 3.25rem)', fontWeight: 400, fontStyle: 'italic' }}
              >
                {t('leadGen.headline')}
              </h2>
              <p className="text-[#6a6658] leading-relaxed max-w-sm">
                {t('leadGen.subheadline')}
              </p>
            </motion.div>

            <motion.form
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.1 }}
              onSubmit={handleLeadSubmit}
              className="space-y-0"
            >
              {[
                { key: 'name', type: 'text', placeholder: t('leadGen.name'), required: true },
                { key: 'email', type: 'email', placeholder: t('leadGen.email'), required: true },
                { key: 'phone', type: 'tel', placeholder: t('leadGen.phone'), required: false },
              ].map((field) => (
                <div key={field.key}>
                  <div className="h-px bg-[#c8c0b4]" />
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={leadForm[field.key as keyof typeof leadForm]}
                    onChange={(e) => setLeadForm({ ...leadForm, [field.key]: e.target.value })}
                    required={field.required}
                    className="w-full bg-transparent py-4 text-[#0c1c1a] placeholder:text-[#9a9080] outline-none text-sm"
                  />
                </div>
              ))}
              <div className="h-px bg-[#c8c0b4]" />
              <div className="pt-8">
                <button
                  type="submit"
                  disabled={leadStatus === 'loading'}
                  className="label-editorial border border-[#04544A] text-[#04544A] px-10 py-4 hover:bg-[#04544A] hover:text-white transition-all duration-300 disabled:opacity-50"
                >
                  {leadStatus === 'loading' ? 'Sending...' : leadStatus === 'success' ? 'Thank you ✓' : t('leadGen.submit')}
                </button>
                {leadStatus === 'error' && (
                  <p className="mt-3 text-xs text-red-600">Something went wrong. Please try again.</p>
                )}
              </div>
            </motion.form>
          </div>
        </div>
      </section>

      <ParallaxSection speed={0.12}>
        <BlogShowcase />
      </ParallaxSection>

      {/* ─── CLOSING CTA ─── */}
      <section
        className="relative py-36 md:py-48 overflow-hidden"
        style={{ margin: 0, border: 'none' }}
      >
        <div className="absolute inset-0 z-0">
          <img
            src={gatherImages.gallery[6]}
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0c1c1a]/75" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div {...fadeUp} transition={{ duration: 0.7 }}>
            <div className="h-px bg-white/20 mb-14 max-w-xs" />
            <h2
              className="font-serif text-white leading-[1.08] mb-10"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 300, fontStyle: 'italic' }}
            >
              {t('closing.headline')}
            </h2>
            <p className="text-white/60 mb-12 label-editorial">
              Plan your gathering with confidence.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <Link href="/contact">
                <span className="label-editorial border border-white text-white px-8 py-4 hover:bg-white hover:text-[#04544A] transition-all duration-300 inline-flex items-center gap-3">
                  {t('closing.cta')}
                  <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
                    <path d="M12 1l3 3-3 3M15 4H1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square"/>
                  </svg>
                </span>
              </Link>
              <Link href="/menu">
                <span className="label-editorial text-white/50 hover:text-white transition-colors duration-200 flex items-center gap-3">
                  View Menu
                  <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
                    <path d="M12 1l3 3-3 3M15 4H1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square"/>
                  </svg>
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
