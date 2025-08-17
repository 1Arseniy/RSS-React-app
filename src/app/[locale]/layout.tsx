import type { Metadata } from 'next';

import { ErrorBoundary, Menu } from '@/components';

import { ThemeProvider } from '@/context/ThemeProvider';
import StoreProvider from '@/app/[locale]/StoreProvider';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import React from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: 'Rick&Morty',
};

// eslint-disable-next-line react-refresh/only-export-components
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
  modal: React.ReactNode;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body>
        <ErrorBoundary>
          <NextIntlClientProvider>
            <ThemeProvider>
              <StoreProvider>
                <div id="root">
                  <Menu> {children}</Menu>
                </div>
              </StoreProvider>
            </ThemeProvider>
          </NextIntlClientProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
