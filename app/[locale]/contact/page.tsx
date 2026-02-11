'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, Check } from 'lucide-react';
import { gatherImages } from '@/lib/constants';

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

  const contactInfo = [
    { Icon: Mail, title: 'Email', content: 'contact@gathercatering.ae', link: 'mailto:contact@gathercatering.ae' },
    { Icon: MapPin, title: 'Location', content: 'Dubai & Abu Dhabi, UAE', link: null },
    { Icon: Clock, title: 'Response Time', content: 'Within 24 hours', link: null },
  ];

  return (
    <div className="pt-16 sm:pt-20 min-h-screen">
      {/* Hero */}
      <section
        className="relative py-20 md:py-28 bg-primary text-white"
        style={{ margin: 0, border: 'none' }}
      >
        <div className="absolute inset-0">
          <img src={gatherImages.gallery[4]} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            {t('title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl opacity-95"
          >
            {t('subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="py-16 md:py-20 bg-white" style={{ margin: 0, border: 'none' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6">
            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#F8F7F5] rounded-2xl p-6 text-center border border-[#E8E6E3]"
              >
                <info.Icon className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-primary mb-1">{info.title}</h3>
                {info.link ? (
                  <a href={info.link} className="text-gray-700 hover:text-primary transition-colors text-sm">
                    {info.content}
                  </a>
                ) : (
                  <p className="text-gray-700 text-sm">{info.content}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Image */}
      <section className="py-16 md:py-24 bg-[#F8F7F5]" style={{ margin: 0, border: 'none' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-[#E8E6E3]"
            >
              <h2 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{t('name')} *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{t('email')} *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">{t('phone')}</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent" />
                  </div>
                  <div>
                    <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-1">{t('eventType')}</label>
                    <select id="eventType" name="eventType" value={formData.eventType} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent">
                      <option value="">Select</option>
                      <option value="corporate">Corporate</option>
                      <option value="wedding">Wedding</option>
                      <option value="birthday">Birthday</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-1">{t('eventDate')}</label>
                    <input type="date" id="eventDate" name="eventDate" value={formData.eventDate} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent" />
                  </div>
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">{t('guests')}</label>
                    <input type="number" id="guests" name="guests" min="1" value={formData.guests} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{t('message')} *</label>
                  <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent" />
                </div>
                {status === 'success' && <div className="rounded-lg bg-green-100 text-green-800 px-4 py-3 text-sm">{t('success')}</div>}
                {status === 'error' && <div className="rounded-lg bg-red-100 text-red-800 px-4 py-3 text-sm">{t('error')}</div>}
                <button type="submit" disabled={status === 'loading'} className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-primary/90 disabled:opacity-50">
                  {status === 'loading' ? 'Sending...' : t('submit')}
                </button>
              </form>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img src="/images/gather/food/gather-pics-40.jpg" alt="" className="h-full w-full object-cover" />
              </div>
              <div className="bg-white rounded-2xl p-6 border border-[#E8E6E3]">
                <h3 className="text-xl font-bold text-primary mb-4">Why Gather Cater?</h3>
                <ul className="space-y-3">
                  {['Host\'s mindset in every detail', 'International cuisine with Indian hospitality', 'Elegant setups without the drama', 'Serving Dubai, Abu Dhabi & UAE', 'Impeccable coordination'].map((point, i) => (
                    <li key={i} className="flex gap-3 text-gray-700">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-white" style={{ margin: 0, border: 'none' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: 'What areas do you serve?', a: 'Dubai, Abu Dhabi, and across the UAE.' },
              { q: 'How far in advance should I book?', a: 'We recommend 2-4 weeks, though we can accommodate shorter notice.' },
              { q: 'Do you accommodate dietary restrictions?', a: 'Yes. Vegetarian, vegan, gluten-free, halal, and more.' },
              { q: 'What is included?', a: 'Menu planning, food prep, setup, service staff, and cleanup.' },
            ].map((faq, i) => (
              <div key={i} className="bg-[#F8F7F5] rounded-xl p-5 border border-[#E8E6E3]">
                <h3 className="font-semibold text-primary mb-2">{faq.q}</h3>
                <p className="text-gray-700 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
