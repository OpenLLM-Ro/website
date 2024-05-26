import React from 'react';
import type { Viewport } from 'next';
import { Providers } from './providers';
import { Montserrat } from 'next/font/google';
import { Footer } from '../components/footer';

export const metadata = {
  title: 'OpenLLM-Ro',
  description: 'Join our community building open LLMs for Romanian',
  icons: 'https://openllm.ro/logo.svg',
  keywords: ['OpenLLM', 'Romanian'],
  metadataBase: new URL('https://openllm.ro'),
  manifest: 'https://openllm.ro/manifest.json',
  openGraph: {
    title: 'OpenLLM-Ro',
    description: 'Join our community building open LLMs for Romanian',
    url: 'https://openllm.ro/',
    siteName: 'OpenLLM-Ro',
    images: 'https://openllm.ro/logo.svg',
    locale: 'en_US',
    type: 'website',
  },
};

export const viewport: Viewport = {
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

const montserrat = Montserrat({
  weight: ['400', '600'],
  subsets: ['latin'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
