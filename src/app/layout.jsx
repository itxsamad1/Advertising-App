import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './_components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'AdScreen - Digital Outdoor Advertising Platform',
  description: 'Book advertising slots on premium SMD screens across Karachi. Reach your target audience with dynamic digital outdoor advertising.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-full w-full m-0 p-0 overflow-x-hidden`}>
        <div className="flex flex-col min-h-screen w-full">
          <Navbar />
          <main className="flex-grow w-full">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
} 