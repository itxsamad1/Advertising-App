import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './_components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'AdScreen - Digital Outdoor Advertising Platform',
  description: 'Book advertising slots on premium SMD screens across the city. Reach your target audience with dynamic digital outdoor advertising.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-full`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
} 