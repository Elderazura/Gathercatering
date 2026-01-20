'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/lib/routing';
import Image from 'next/image';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 md:col-span-2">
            <div className="relative w-28 sm:w-32 h-8 sm:h-10 mb-3 sm:mb-4">
              <Image
                src="/logos/Logo_white.png"
                alt="Gather Catering"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 112px, 128px"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector('.logo-fallback')) {
                    target.style.display = 'none';
                    const fallback = document.createElement('span');
                    fallback.className = 'logo-fallback text-lg sm:text-xl font-bold text-white';
                    fallback.textContent = 'Gather Cater';
                    parent.appendChild(fallback);
                  }
                }}
              />
            </div>
            <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed">{t('description')}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">{t('contact')}</h3>
            <p className="text-sm sm:text-base text-gray-300">
              <a
                href={`mailto:${t('email')}`}
                className="hover:text-white transition-colors break-all"
              >
                {t('email')}
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-sm sm:text-base text-gray-300">
          <p>&copy; {new Date().getFullYear()} Gather Catering. {t('rights')}</p>
        </div>
      </div>
    </footer>
  );
}
