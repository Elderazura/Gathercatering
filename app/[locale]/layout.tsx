import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/lib/routing';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Gather Catering - Premium catering services in Dubai & Abu Dhabi, UAE. International cuisine with Indian hospitality. Host with confidence." />
        <meta name="keywords" content="catering Dubai, catering Abu Dhabi, event catering UAE, corporate catering, wedding catering Dubai" />
        <meta name="author" content="Gather Catering" />
        <meta property="og:title" content="Gather Catering - Premium Catering Services in UAE" />
        <meta property="og:description" content="Great gatherings are not just about food, but about how people are brought together" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={locale === 'ar' ? 'ar_AE' : 'en_AE'} />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={locale === 'ar' ? 'rtl' : ''} style={{ background: '#ffffff', margin: 0, padding: 0, overflowX: 'hidden' }}>
        <NextIntlClientProvider messages={messages}>
          <Navigation />
          <main style={{ margin: 0, padding: 0, background: '#ffffff', minHeight: '100vh' }}>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
