'use client';
import { ThemeProvider } from 'next-themes';
import { AuthProvider } from './AuthContext';
import Navbar from './Navbar';
import Footer from './Footer';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const isDashboard = pathname?.startsWith('/dashboard');

  // Wait until mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <>
        <Navbar />
        <main>{children}</main>
        {!isDashboard && <Footer />}
      </>
    );
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <AuthProvider>
        <Navbar />
        <AnimatePresence mode="wait">
          <main key={pathname}>{children}</main>
        </AnimatePresence>
        {!isDashboard && <Footer />}
      </AuthProvider>
    </ThemeProvider>
  );
} 