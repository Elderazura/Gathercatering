'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/lib/routing';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Navigation() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en';
    const cleanPath = pathname === '/' ? '' : pathname;
    window.location.href = `/${newLocale}${cleanPath}`;
  };

  const navItems = [
    { href: '/', label: t('home') },
    { href: '/about', label: t('about') },
    { href: '/services', label: t('services') },
    { href: '/menu', label: t('menu') },
    { href: '/blog', label: t('blog') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#faf9f6] border-b border-[#c8c0b4]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-14 sm:h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-32 h-9 sm:w-44 sm:h-12 md:w-52 md:h-14 transition-all duration-300">
              <AnimatePresence mode="wait">
                {isScrolled ? (
                  <motion.div
                    key="green-logo"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src="/logos/Logo_Green.png"
                      alt="Gather Cater"
                      fill
                      className="object-contain object-left"
                      priority
                      sizes="(max-width: 768px) 176px, 208px"
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="white-logo"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src="/logos/Logo_white.png"
                      alt="Gather Cater"
                      fill
                      className="object-contain object-left"
                      priority
                      sizes="(max-width: 768px) 176px, 208px"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`label-editorial transition-colors duration-200 ${
                  pathname === item.href
                    ? isScrolled ? 'text-[#04544A]' : 'text-white'
                    : isScrolled
                    ? 'text-[#4a4a42] hover:text-[#04544A]'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}

            <div className="flex items-center gap-5 ml-4 pl-5 border-l border-current/20">
              <button
                type="button"
                onClick={toggleLanguage}
                className={`label-editorial transition-colors duration-200 ${
                  isScrolled ? 'text-[#4a4a42] hover:text-[#04544A]' : 'text-white/70 hover:text-white'
                }`}
              >
                {locale === 'en' ? 'ع' : 'EN'}
              </button>
              <Link href="/contact">
                <span className={`label-editorial border px-4 py-2 transition-all duration-200 ${
                  isScrolled
                    ? 'border-[#04544A] text-[#04544A] hover:bg-[#04544A] hover:text-white'
                    : 'border-white/60 text-white hover:border-white hover:bg-white/10'
                }`}>
                  Enquire
                </span>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            type="button"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            className={`lg:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center ${
              isScrolled ? 'text-[#1a1a1a]' : 'text-white'
            }`}
          >
            <div className="w-6 flex flex-col gap-[5px]">
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="block h-px bg-current origin-center"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                className="block h-px bg-current"
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="block h-px bg-current origin-center"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-[#faf9f6] border-t border-[#c8c0b4] overflow-hidden"
          >
            <div className="px-6 py-8 space-y-1">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-3 border-b border-[#d5cfc5] label-editorial ${
                      pathname === item.href ? 'text-[#04544A]' : 'text-[#4a4a42]'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-6 flex items-center justify-between">
                <button
                  type="button"
                  onClick={toggleLanguage}
                  className="label-editorial text-[#4a4a42]"
                >
                  {locale === 'en' ? 'العربية' : 'English'}
                </button>
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="label-editorial border border-[#04544A] text-[#04544A] px-5 py-2.5">
                    Enquire
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
