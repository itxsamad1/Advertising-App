import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import Navbar from './_components/Navbar';
import Footer from './_components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'AdScreen - Premium SMD Advertising Solutions',
  description: 'Digital outdoor advertising solutions with strategically placed SMD screens across Karachi.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300`}>
        <Providers>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
} 