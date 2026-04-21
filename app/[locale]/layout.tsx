import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/lib/routing';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Cormorant_Garamond, Jost } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { siteConfig, pageMetadata } from '@/lib/seo';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-jost',
  display: 'swap',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const siteUrl = siteConfig.url;
const defaultMeta = pageMetadata.home;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const ogLocale = locale === 'ar' ? 'ar_AE' : 'en_AE';
  const canonical = locale === routing.defaultLocale ? siteUrl : `${siteUrl.replace(/\/$/, '')}/${locale}`;

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: defaultMeta.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: defaultMeta.description,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    robots: { index: true, follow: true },
    openGraph: {
      type: 'website',
      locale: ogLocale,
      url: canonical,
      siteName: siteConfig.name,
      title: defaultMeta.title,
      description: defaultMeta.description,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: defaultMeta.title,
      description: defaultMeta.description,
    },
    alternates: {
      canonical,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'en' | 'ar')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} className={`${cormorant.variable} ${jost.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#04544A" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/logos/Logo_Green.png" />
        <JsonLd />
      </head>
      <body
        className={locale === 'ar' ? 'rtl' : ''}
        style={{ background: 'var(--background)', margin: 0, padding: 0, overflowX: 'hidden' }}
      >
        <NextIntlClientProvider messages={messages}>
          <Navigation />
          <main
            role="main"
            style={{ margin: 0, padding: 0, background: 'var(--background)', minHeight: '100vh' }}
          >
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
