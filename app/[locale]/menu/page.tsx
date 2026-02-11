'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowRight, Sun, Briefcase, Zap, Home, Trees, Sparkles, Heart, Star, Users } from 'lucide-react';
import { Link } from '@/lib/routing';
import { Button } from '@/components/ui/button';
import { gatherImages } from '@/lib/constants';
import { menuData } from '@/lib/menuData';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const fadeIn = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

export default function MenuPage() {
  const t = useTranslations('menu');
  const [activeCuisine, setActiveCuisine] = useState(0);
  const [vibe, setVibe] = useState<string | null>(null);
  const [setting, setSetting] = useState<string | null>(null);
  const [story, setStory] = useState<string | null>(null);
  const cuisine = menuData[activeCuisine];

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero - Image with overlapping content card (same as About/Services) */}
      <section className="relative" style={{ margin: 0, border: 'none' }}>
        <div className="relative h-[55vh] min-h-[380px] md:h-[65vh]">
          <img
            src={gatherImages.gallery[0]}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        </div>
        <div className="relative z-10 -mt-20 md:-mt-28 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 md:p-12 shadow-xl"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary leading-tight">
              {t('title')}
            </h1>
            <p className="mt-5 text-lg text-gray-600 max-w-2xl">
              {t('subtitle')}
            </p>
            <p className="mt-4 text-gray-600">
              {t('intro')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="/contact">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-full w-full sm:w-auto">
                  {t('customizing.requestBtn')}
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5 rounded-full w-full sm:w-auto">
                  {t('customizing.downloadBtn')}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image strip - same 3-col grid as Services */}
      <section style={{ margin: 0, border: 'none' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-3 gap-2 md:gap-4">
            <motion.div {...fadeIn} className="aspect-[3/4] overflow-hidden">
              <img src={gatherImages.gallery[1]} alt="" className="h-full w-full object-cover" />
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="aspect-[3/4] overflow-hidden">
              <img src={gatherImages.gallery[2]} alt="" className="h-full w-full object-cover" />
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="aspect-[3/4] overflow-hidden">
              <img src={gatherImages.gallery[3]} alt="" className="h-full w-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full Menu - Cuisine tabs + accordion */}
      <section className="py-20 md:py-28 bg-[#F8F7F5]" style={{ margin: 0, border: 'none' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
              {t('fullMenuTitle')}
            </h2>
            <p className="text-gray-600">{t('fullMenuSubtitle')}</p>
          </motion.div>

          <div className="flex flex-wrap gap-2 mb-10">
            {menuData.map((c, i) => (
              <button
                key={c.id}
                onClick={() => setActiveCuisine(i)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCuisine === i
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-white/90 border border-gray-200'
                }`}
              >
                {c.title}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCuisine}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-gray-600 italic mb-8">{cuisine.tagline}</p>
              <Accordion type="multiple" className="space-y-2">
                {cuisine.categories.map((cat) => (
                  <AccordionItem
                    key={cat.name}
                    value={cat.name}
                    className="bg-white border border-gray-100"
                  >
                    <AccordionTrigger className="px-6 py-5 hover:no-underline [&[data-state=open]]:bg-primary/5">
                      <span className="font-semibold text-primary">{cat.name}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-5">
                      <ul className="grid sm:grid-cols-2 gap-2 text-gray-700">
                        {cat.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Customizing - Interactive selection */}
      <section className="py-20 md:py-28 bg-[#F8F7F5]" style={{ margin: 0, border: 'none' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn}>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
              {t('customizing.title')}
            </h2>
            <p className="text-gray-600 mb-12">{t('customizing.body')}</p>

            {/* Vibe selector */}
            <div className="mb-10">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                {t('customizing.vibeLabel')}
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { key: 'vibeRelaxed', icon: Sun },
                  { key: 'vibeProfessional', icon: Briefcase },
                  { key: 'vibeHighEnergy', icon: Zap },
                ].map(({ key, icon: Icon }) => (
                  <motion.button
                    key={key}
                    type="button"
                    onClick={() => setVibe(vibe === key ? null : key)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center gap-3 px-5 py-4 rounded-xl border-2 transition-all ${
                      vibe === key
                        ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20'
                        : 'bg-white border-gray-200 text-gray-700 hover:border-primary/40 hover:bg-white'
                    }`}
                  >
                    <Icon className="h-5 w-5 shrink-0" />
                    <span className="font-medium">{t(`customizing.${key}`)}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Setting selector */}
            <div className="mb-10">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                {t('customizing.settingLabel')}
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { key: 'settingIndoor', icon: Home },
                  { key: 'settingOutdoor', icon: Trees },
                ].map(({ key, icon: Icon }) => (
                  <motion.button
                    key={key}
                    type="button"
                    onClick={() => setSetting(setting === key ? null : key)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center gap-3 px-5 py-4 rounded-xl border-2 transition-all ${
                      setting === key
                        ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20'
                        : 'bg-white border-gray-200 text-gray-700 hover:border-primary/40 hover:bg-white'
                    }`}
                  >
                    <Icon className="h-5 w-5 shrink-0" />
                    <span className="font-medium">{t(`customizing.${key}`)}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Story selector */}
            <div className="mb-12">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                {t('customizing.storyLabel')}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { key: 'storyCelebration', icon: Sparkles },
                  { key: 'storyConnection', icon: Users },
                  { key: 'storyImpress', icon: Star },
                  { key: 'storyIntimate', icon: Heart },
                ].map(({ key, icon: Icon }) => (
                  <motion.button
                    key={key}
                    type="button"
                    onClick={() => setStory(story === key ? null : key)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex flex-col items-center gap-2 px-4 py-4 rounded-xl border-2 transition-all ${
                      story === key
                        ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20'
                        : 'bg-white border-gray-200 text-gray-700 hover:border-primary/40 hover:bg-white'
                    }`}
                  >
                    <Icon className="h-6 w-6 shrink-0" />
                    <span className="text-sm font-medium text-center">{t(`customizing.${key}`)}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            <p className="text-sm text-gray-500 italic mb-8">
              {t('customizing.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="rounded-full w-full sm:w-auto">
                  {t('customizing.requestBtn')}
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5 rounded-full w-full sm:w-auto">
                  {t('customizing.downloadBtn')}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA - same as Services */}
      <section className="py-20 md:py-28 bg-primary text-white" style={{ margin: 0, border: 'none' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 {...fadeIn} className="text-2xl md:text-3xl font-bold mb-6">
            {t('ctaTitle')}
          </motion.h2>
          <motion.p {...fadeIn} transition={{ delay: 0.1 }} className="opacity-95 mb-10">
            {t('ctaSubtitle')}
          </motion.p>
          <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/95 rounded-full px-10">
                {t('ctaBtn')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
