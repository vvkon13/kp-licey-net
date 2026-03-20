// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';


const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  display: 'swap', // 👈 Улучшает восприятие при загрузке
});

export const metadata: Metadata = {
  title: 'Коммерческое предложение — Модернизация licey.net',
  description: 'Перенос сайта на современный стек: Next.js + Headless API. Быстро, безопасно, с возможностью масштабирования.',

  // 🔒 Не индексировать (черновик/КП)
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },

  // 🌐 Open Graph / Facebook / Telegram / VK
  openGraph: {
    title: 'Коммерческое предложение — Модернизация licey.net',
    description: 'Перенос сайта на современный стек: Next.js + Headless API. Быстро, безопасно, с возможностью масштабирования.',
    type: 'website',
    locale: 'ru_RU',
    url: 'https://cp-licey-net.vercel.app/',
    siteName: 'Next.js & Headless API',
    images: [
      {
        url: 'https://cp-licey-net.vercel.app/og-proposal.png',
        width: 1200,
        height: 630,
        alt: 'Коммерческое предложение: модернизация licey.net',
      },
    ],
  },

  // 🐦 Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Коммерческое предложение — Модернизация licey.net',
    description: 'Перенос сайта на современный стек: Next.js + Headless API',
    images: ['https://cp-licey-net.vercel.app/og-proposal.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
