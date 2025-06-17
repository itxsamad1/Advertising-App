import './globals.css';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import Navbar from './_components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'M Tech Solutions - Premium SMD Screens',
  description: 'M Tech Solutions - Your Premium Digital Advertising Partner',
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/images/logo-icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/logo-192x192.png', sizes: '192x192', type: 'image/png' }
    ],
    shortcut: '/images/logo-icon.png',
    apple: '/images/logo-192x192.png'
  },
  themeColor: '#3B82F6',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'AdScreen',
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>M Tech Solutions - Premium SMD Screens</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/logo-icon.png" />
        <link rel="shortcut icon" type="image/png" href="/images/logo-icon.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/images/logo-192x192.png" />
        <meta name="theme-color" content="#3B82F6" />
      </head>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
} 