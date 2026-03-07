'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import VideoHero from '@/components/VideoHero';
import ParallaxSection from '@/components/ParallaxSection';
import Testimonials from '@/components/Testimonials';
import BlogShowcase from '@/components/BlogShowcase';
import { Link } from '@/lib/routing';
import { gatherImages } from '@/lib/constants';
import { Home, Users, Flame, Heart, ArrowRight, ChefHat, Sparkles, UtensilsCrossed } from 'lucide-react';
import { Button } from '@/components/ui/button';

const hostMindsetPairs = [
  { caterers: 'How many plates?', gather: 'How do guests feel when they arrive?', icon: Heart },
  { caterers: 'Is the food hot?', gather: 'Is the grill sizzling at the right moment?', icon: Flame },
  { caterers: 'What time do we leave?', gather: "How do we make the host feel like a guest?", icon: Sparkles },
  { caterers: 'Menu Execution', gather: 'The Flow of the Conversation', icon: ChefHat },
];

const boutiqueServices = [
  { key: 'diningRoom' as const, Icon: Home },
  { key: 'socialFlow' as const, Icon: Users },
  { key: 'liveRitual' as const, Icon: Flame },
];

const fadeUp = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

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
        body: JSON.stringify({ ...leadForm, message: 'Home page lead - interested in planning a gathering' }),
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
    <div className="min-h-screen bg-white">
      <VideoHero />

      {/* Brand Story */}
      <section id="why" className="py-20 md:py-28 bg-[#F8F7F5]" style={{ margin: 0, border: 'none' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-primary leading-[1.15] mb-6">
                {t('why.headline')}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-xl">
                {t('why.body')}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-10 max-w-xl">
                {t('dna.body')}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/about">
                  <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 rounded-full px-8">
                    {t('why.cta')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/menu">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8 group">
                    {t('dna.cta')}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl ring-1 ring-black/5">
                <img
                  src={gatherImages.gallery[0]}
                  alt="Gather Cater"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* International - Full-width statement */}
      <section id="international" className="py-24 md:py-32 bg-primary text-white relative" style={{ margin: 0, border: 'none' }}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl translate-y-1/2" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-8"
          >
            {t('international.headline')}
          </motion.h2>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl opacity-95 leading-relaxed mb-12"
          >
            {t('international.body')}
          </motion.p>
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
            <Link href="/menu">
              <Button size="lg" className="bg-white text-primary hover:bg-white/95 rounded-full px-10">
                <UtensilsCrossed className="mr-2 h-5 w-5" />
                Explore Our Menus
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Host's Mindset - 2x2 cards with stronger design */}
      <section id="host-mindset" className="py-20 md:py-28 bg-[#F8F7F5]" style={{ margin: 0, border: 'none' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">The Host&apos;s Mindset</h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              We think differently. So your gathering feels different.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {hostMindsetPairs.map((pair, i) => {
              const Icon = pair.icon;
              return (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  whileHover={{ y: -6 }}
                  className="group bg-white rounded-2xl p-8 border border-[#E8E6E3] hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon className="h-7 w-7" />
                  </div>
                  <p className="text-sm text-gray-500 mb-3 line-through">{pair.caterers}</p>
                  <p className="text-lg font-semibold text-primary leading-snug">{pair.gather}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Boutique Services - Cards with images */}
      <section className="py-20 md:py-28 bg-primary text-white" style={{ margin: 0, border: 'none' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t('boutiqueFive.title')}</h2>
            <p className="text-xl opacity-95">{t('boutiqueFive.subtitle')}</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {boutiqueServices.map((svc, i) => (
              <motion.div
                key={svc.key}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all"
              >
                <svc.Icon className="h-12 w-12 text-white mb-6" />
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {t(`boutiqueFive.${svc.key}.title`)}
                </h3>
                <p className="text-white/90 leading-relaxed mb-6">
                  {t(`boutiqueFive.${svc.key}.description`)}
                </p>
                <Link href="/services" className="text-white/90 hover:text-white font-medium text-sm inline-flex items-center gap-1">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp} className="text-center mt-12">
            <Link href="/services">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/95 rounded-full px-10">
                {t('boutiqueFive.cta')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>


      {/* Gallery */}
      <section className="py-20 md:py-24 bg-white" style={{ margin: 0, border: 'none' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">Our Work</h2>
            <span className="text-gray-500">Moments of excellence</span>
            <Link href="/gallery" className="text-primary font-semibold hover:underline inline-flex items-center gap-1">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0">
            {gatherImages.gallery.slice(0, 8).map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="relative h-56 sm:h-64 w-72 sm:w-80 shrink-0 rounded-2xl overflow-hidden snap-center group"
              >
                <img
                  src={src}
                  alt="Gather Cater"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Lead Gen Form */}
      <section id="lead" className="py-20 md:py-28 bg-white" style={{ margin: 0, border: 'none' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">
              {t('leadGen.headline')}
            </h2>
            <p className="text-gray-600">{t('leadGen.subheadline')}</p>
          </motion.div>
          <motion.form {...fadeUp} transition={{ delay: 0.1 }} onSubmit={handleLeadSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder={t('leadGen.name')}
              value={leadForm.name}
              onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-full border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            />
            <input
              type="email"
              name="email"
              placeholder={t('leadGen.email')}
              value={leadForm.email}
              onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-full border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            />
            <input
              type="tel"
              name="phone"
              placeholder={t('leadGen.phone')}
              value={leadForm.phone}
              onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-full border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            />
            <Button type="submit" size="lg" disabled={leadStatus === 'loading'} className="w-full rounded-full py-6">
              {leadStatus === 'loading' ? 'Sending...' : leadStatus === 'success' ? 'Thank you!' : t('leadGen.submit')}
            </Button>
            {leadStatus === 'error' && <p className="text-sm text-red-600 text-center">Something went wrong. Please try again.</p>}
          </motion.form>
        </div>
      </section>

      <ParallaxSection speed={0.12}>
        <BlogShowcase />
      </ParallaxSection>

      {/* Closing CTA */}
      <section
        className="relative py-28 md:py-36 min-h-[400px] flex items-center justify-center overflow-hidden"
        style={{ margin: 0, border: 'none' }}
      >
        <div className="absolute inset-0 z-0">
          <img src={gatherImages.gallery[2]} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h2
            {...fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-white"
          >
            {t('closing.headline')}
          </motion.h2>
          <motion.p
            {...fadeUp}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/95 mb-12"
          >
            Plan your gathering with confidence.
          </motion.p>
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/95 rounded-full px-10 py-6 text-lg">
                {t('closing.cta')}
              </Button>
            </Link>
            <Link href="/menu">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 rounded-full px-10 py-6 text-lg">
                View Menu
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
