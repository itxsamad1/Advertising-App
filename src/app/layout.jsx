import { Inter } from 'next/font/google';
import './globals.css';
import { metadata } from './metadata';
import ClientLayout from './_components/ClientLayout';

const inter = Inter({ subsets: ['latin'] });

// Viewport configuration must be in a separate export
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' }
  ]
};

export { metadata };

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
} 