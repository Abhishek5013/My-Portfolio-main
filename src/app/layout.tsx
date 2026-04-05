import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/header';
import { Background } from '@/components/background';
import { DynamicIsland } from '@/components/dynamic-island';

export const metadata: Metadata = {
  title: 'Abhishek - Personal Portfolio',
  description: 'A personal portfolio website with an iOS-inspired design.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn('font-body antialiased dark')}>
          <Background />
          <DynamicIsland />
          <Header />
          {children}
      </body>
    </html>
  );
}
