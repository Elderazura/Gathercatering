'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { gatherImages } from '@/lib/constants';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
};

const faqs = [
  { q: 'What areas do you serve?', a: 'Dubai, Abu Dhabi, and across the UAE.' },
  { q: 'How far in advance should I book?', a: 'We recommend 2–4 weeks, though we can accommodate shorter notice.' },
  { q: 'Do you accommodate dietary restrictions?', a: 'Yes — vegetarian, vegan, gluten-free, halal, and more.' },
  { q: 'What is included?', a: 'Menu planning, food preparation, setup, service staff, and cleanup.' },
];

export default function ContactPage() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guests: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', eventType: '', eventDate: '', guests: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass = "w-full bg-transparent py-4 text-[#0c1c1a] placeholder:text-[#9a9080] outline-none text-sm";
  const selectClass = "w-full bg-transparent py-4 text-[#0c1c1a] outline-none text-sm appearance-none cursor-pointer";

  return (
    <div>
      {/* ─── HERO ─── */}
      <section className="relative h-[65vh] min-h-[460px] pt-14 sm:pt-16 overflow-hidden" style={{ margin: 0, border: 'none' }}>
        <img
          src={gatherImages.gallery[4]}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/38 to-black/12" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

        <div className="relative z-10 flex h-full flex-col justify-end pb-14 px-6 sm:px-10 lg:px-16">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="label-editorial text-white/55 mb-5"
            >
              Get in Touch
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-white leading-[1.08]"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 400, fontStyle: 'italic' }}
            >
              {t('title')}
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="h-px bg-white/30 w-20 mt-7 mb-6"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-white/70 text-sm sm:text-base leading-relaxed"
            >
              {t('subtitle')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* ─── CONTACT INFO ─── */}
      <section className="py-16 md:py-20 bg-[#faf9f6]" style={{ margin: 0, border: 'none' }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid sm:grid-cols-3 gap-0">
            {[
              { label: 'Email', value: 'contact@gathercater.ae', href: 'mailto:contact@gathercater.ae' },
              { label: 'Location', value: 'Dubai & Abu Dhabi, UAE', href: null },
              { label: 'Response Time', value: 'Within 24 hours', href: null },
            ].map((info, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.07 }}
              >
                <div className="h-px bg-[#c8c0b4] sm:hidden" />
                <div className="py-6 sm:py-0 sm:pr-10 sm:border-r border-[#c8c0b4] last:border-0 last:pr-0 sm:pl-10 first:pl-0">
                  <p className="label-editorial text-[#9a9080] mb-2">{info.label}</p>
                  {info.href ? (
                    <a href={info.href} className="text-[#0c1c1a] font-medium hover:text-[#04544A] transition-colors text-sm">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-[#0c1c1a] font-medium text-sm">{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
            <div className="h-px bg-[#c8c0b4] sm:hidden" />
          </div>
        </div>
      </section>

      {/* ─── FORM + IMAGE ─── */}
      <section className="py-16 md:py-24 bg-[#f0ede7]" style={{ margin: 0, border: 'none' }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-14 lg:gap-20">

            {/* Form */}
            <motion.div {...fadeUp} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-6 mb-12">
                <span className="label-editorial text-[#04544A]">Plan Your Gathering</span>
                <div className="flex-1 h-px bg-[#c8c0b4]" />
              </div>

              <form onSubmit={handleSubmit}>
                {/* Row 1 */}
                <div className="grid sm:grid-cols-2 gap-x-8">
                  <div>
                    <div className="h-px bg-[#c8c0b4]" />
                    <input type="text" name="name" id="name" required placeholder={`${t('name')} *`} value={formData.name} onChange={handleChange} className={inputClass} />
                  </div>
                  <div>
                    <div className="h-px bg-[#c8c0b4]" />
                    <input type="email" name="email" id="email" required placeholder={`${t('email')} *`} value={formData.email} onChange={handleChange} className={inputClass} />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid sm:grid-cols-2 gap-x-8">
                  <div>
                    <div className="h-px bg-[#c8c0b4]" />
                    <input type="tel" name="phone" placeholder={t('phone')} value={formData.phone} onChange={handleChange} className={inputClass} />
                  </div>
                  <div>
                    <div className="h-px bg-[#c8c0b4]" />
                    <select name="eventType" value={formData.eventType} onChange={handleChange} className={selectClass}>
                      <option value="">{t('eventType')}</option>
                      <option value="corporate">Corporate</option>
                      <option value="wedding">Wedding</option>
                      <option value="birthday">Birthday</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid sm:grid-cols-2 gap-x-8">
                  <div>
                    <div className="h-px bg-[#c8c0b4]" />
                    <input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} className={inputClass} />
                  </div>
                  <div>
                    <div className="h-px bg-[#c8c0b4]" />
                    <input type="number" name="guests" min="1" placeholder={t('guests')} value={formData.guests} onChange={handleChange} className={inputClass} />
                  </div>
                </div>

                {/* Message */}
                <div className="h-px bg-[#c8c0b4]" />
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder={`${t('message')} *`}
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                />

                <div className="h-px bg-[#c8c0b4] mb-8" />

                {status === 'success' && (
                  <p className="label-editorial text-[#04544A] mb-6">{t('success')}</p>
                )}
                {status === 'error' && (
                  <p className="label-editorial text-red-600 mb-6">{t('error')}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="label-editorial border border-[#04544A] text-[#04544A] px-10 py-4 hover:bg-[#04544A] hover:text-white transition-all duration-300 disabled:opacity-40"
                >
                  {status === 'loading' ? 'Sending...' : t('submit')}
                </button>
              </form>
            </motion.div>

            {/* Right: image + why */}
            <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.1 }} className="space-y-8">
              <div className="aspect-[4/5] overflow-hidden relative">
                <img
                  src="/images/gather/food/gather-pics-40.jpg"
                  alt=""
                  className="h-full w-full object-cover"
                />
                <div className="absolute -bottom-3 -left-3 w-full h-full border border-[#04544A]/20 -z-10" />
              </div>

              {/* Why Gather — editorial list */}
              <div>
                <div className="flex items-center gap-6 mb-6">
                  <span className="label-editorial text-[#04544A]">Why Gather</span>
                  <div className="flex-1 h-px bg-[#c8c0b4]" />
                </div>
                {[
                  'Host\'s mindset in every detail',
                  'International cuisine, warm hospitality',
                  'Elegant setups without the drama',
                  'Dubai, Abu Dhabi & UAE',
                  'Impeccable coordination',
                ].map((point, i) => (
                  <div key={i}>
                    <div className="h-px bg-[#c8c0b4]/50" />
                    <p className="py-3 text-[#4a4a42] text-sm">{point}</p>
                  </div>
                ))}
                <div className="h-px bg-[#c8c0b4]/50" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-24 md:py-28 bg-[#faf9f6]" style={{ margin: 0, border: 'none' }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div {...fadeUp} className="flex items-center gap-6 mb-14">
            <span className="label-editorial text-[#04544A]">Questions</span>
            <div className="flex-1 h-px bg-[#c8c0b4]" />
          </motion.div>

          <div className="max-w-3xl">
            {faqs.map((faq, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.07 }}>
                <div className="h-px bg-[#c8c0b4]" />
                <div className="grid sm:grid-cols-[2fr_3fr] gap-6 py-7">
                  <p className="text-[#0c1c1a] font-medium text-sm leading-relaxed">{faq.q}</p>
                  <p className="text-[#6a6658] text-sm leading-relaxed">{faq.a}</p>
                </div>
              </motion.div>
            ))}
            <div className="h-px bg-[#c8c0b4]" />
          </div>
        </div>
      </section>
    </div>
  );
}
