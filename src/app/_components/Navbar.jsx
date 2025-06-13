'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.menu-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navBackground = isScrolled
    ? 'bg-white dark:bg-gray-900'
    : isHome
    ? 'bg-transparent'
    : 'bg-white dark:bg-gray-900';

  const textColor = (!isScrolled && isHome)
    ? 'text-white'
    : 'text-gray-900 dark:text-white';

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${navBackground}`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/images/logo-icon.png" 
              alt="M Tech Solutions Logo" 
              width={40} 
              height={40} 
              className="w-10 h-10"
            />
            <span className={`text-xl font-bold ${textColor}`}>
              M Tech Solutions
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              href="/" 
              className={`${
                !isScrolled && isHome
                  ? 'text-white/90 hover:text-white'
                  : 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'
              } px-3 py-2 rounded-md transition-all duration-200 hover:bg-white/10`}
            >
              Home
            </Link>
            <Link 
              href="/plans" 
              className={`${
                !isScrolled && isHome
                  ? 'text-white/90 hover:text-white'
                  : 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'
              } px-3 py-2 rounded-md transition-all duration-200 hover:bg-white/10`}
            >
              Plans
            </Link>
            <Link 
              href="/locations" 
              className={`${
                !isScrolled && isHome
                  ? 'text-white/90 hover:text-white'
                  : 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'
              } px-3 py-2 rounded-md transition-all duration-200 hover:bg-white/10`}
            >
              Locations
            </Link>
            <Link 
              href="/about" 
              className={`${
                !isScrolled && isHome
                  ? 'text-white/90 hover:text-white'
                  : 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'
              } px-3 py-2 rounded-md transition-all duration-200 hover:bg-white/10`}
            >
              About
            </Link>
            <Link
              href="/signin"
              className={`${
                !isScrolled && isHome
                  ? 'text-white border-white hover:bg-white/10'
                  : 'text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30'
              } px-4 py-2 rounded-md border transition-all duration-200`}
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className={`${
                !isScrolled && isHome
                  ? 'bg-white text-blue-900 hover:bg-white/90'
                  : 'bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-500 dark:to-blue-700 text-white'
              } hover:opacity-90 px-4 py-2 rounded-md transition-all duration-200 transform hover:scale-105 hover:shadow-lg`}
            >
              Sign Up
            </Link>
            <div className="ml-4">
              <ThemeToggle isHome={isHome} isScrolled={isScrolled} />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle isHome={isHome} isScrolled={isScrolled} />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`menu-button p-2 rounded-lg ${
                !isScrolled && isHome
                  ? 'text-white hover:bg-white/10'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              } transition-all duration-200`}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu - Side Drawer */}
      <div 
        className={`fixed inset-y-0 right-0 transform md:hidden w-72 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-xl transition-transform duration-300 ease-out z-50 mobile-menu ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="px-6 py-6 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Image
                  src="/images/logo-icon.png"
                  alt="M Tech Solutions Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
                  M Tech Solutions
                </span>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 active:scale-95 transition-all duration-200"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto py-6 px-6">
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center px-4 py-3 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 active:scale-[0.98] transition-all duration-200"
              >
                Home
              </Link>
              <Link
                href="/plans"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center px-4 py-3 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 active:scale-[0.98] transition-all duration-200"
              >
                Plans
              </Link>
              <Link
                href="/locations"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center px-4 py-3 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 active:scale-[0.98] transition-all duration-200"
              >
                Locations
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center px-4 py-3 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 active:scale-[0.98] transition-all duration-200"
              >
                About
              </Link>
            </div>
          </div>

          <div className="p-6 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col space-y-3">
              <Link
                href="/signin"
                onClick={() => setIsMenuOpen(false)}
                className="w-full px-4 py-3 text-center rounded-lg border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 active:scale-[0.98] transition-all duration-200"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                onClick={() => setIsMenuOpen(false)}
                className="w-full px-4 py-3 text-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-500 dark:to-blue-700 text-white hover:opacity-90 active:scale-[0.98] transition-all duration-200"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar; 