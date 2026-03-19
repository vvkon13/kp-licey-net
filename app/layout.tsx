// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Коммерческое предложение - Перенос сайта на Next.js',
  description: 'Профессиональное коммерческое предложение для переноса сайта на современный стек технологий',
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
