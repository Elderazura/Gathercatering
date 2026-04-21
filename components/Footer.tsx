'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/lib/routing';
import Image from 'next/image';

export default function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0c1c1a] text-white">
      {/* Top rule */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="h-px bg-white/10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14 md:py-16">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 md:gap-20 items-start">

          {/* Left: logo + tagline */}
          <div>
            <div className="relative w-36 h-10 mb-6">
              <Image
                src="/logos/Logo_white.png"
                alt="Gather Cater"
                fill
                className="object-contain object-left"
                sizes="144px"
              />
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              {t('description')}
            </p>
            <div className="mt-8">
              <a
                href={`mailto:${t('email')}`}
                className="label-editorial text-white/40 hover:text-white transition-colors duration-200"
              >
                {t('email')}
              </a>
            </div>
          </div>

          {/* Right: nav columns */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-3">
            <div className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/services', label: 'Services' },
              ].map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href as '/'}
                    className="label-editorial text-white/40 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              {[
                { href: '/menu', label: 'Menu' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href as '/'}
                    className="label-editorial text-white/40 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom: rule + copyright */}
        <div className="h-px bg-white/10 mt-12 mb-6" />
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="label-editorial text-white/25">
            &copy; {year} Gather Cater. {t('rights')}
          </p>
          <p className="label-editorial text-white/20">
            Dubai · Abu Dhabi · UAE
          </p>
        </div>
      </div>
    </footer>
  );
}
