'use client';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import { FiUser, FiSun, FiMoon, FiLogOut, FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from './AuthContext';

const navigationLinks = [
  { name: 'Home', href: '/' },
  { name: 'Plans', href: '/plans' },
  { name: 'Locations', href: '/locations' },
  { name: 'About', href: '/about' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const isHome = pathname === '/';
  const { user, isAuthenticated, logout } = useAuth();

  // Memoize scroll handler
  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > 0;
    if (scrolled !== isScrolled) {
      setIsScrolled(scrolled);
    }
  }, [isScrolled]);

  useEffect(() => {
    setMounted(true);
    handleScroll(); // Initial check

    // Use passive listeners for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  // Memoize style computations
  const textColor = (!isScrolled && isHome)
    ? 'text-white dark:text-white'
    : 'text-gray-900 dark:text-white';

  const buttonClasses = (!isScrolled && isHome)
    ? 'text-white hover:bg-white/20'
    : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700';

  const signInButtonClasses = (!isScrolled && isHome)
    ? 'px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-all duration-200 hover:scale-105'
    : 'px-4 py-2 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 dark:hover:bg-blue-500/30 font-medium transition-all duration-200 hover:scale-105';

  const signUpButtonClasses = (!isScrolled && isHome)
    ? 'px-4 py-2 rounded-lg bg-white text-gray-900 hover:bg-gray-100 font-medium transition-all duration-200 hover:scale-105'
    : 'px-4 py-2 rounded-lg bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600 font-medium transition-all duration-200 hover:scale-105';

  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const getDashboardLink = () => {
    if (!user) return '/dashboard';
    return `/dashboard/${user.role}`;
  };

  if (!mounted) {
    return null; // Prevent flash of unstyled content
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled || !isHome
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm'
          : ''
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo-icon.png"
                alt="Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span
                className={`ml-2 text-lg font-semibold ${textColor}`}
              >
                M Tech Solutions
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center ml-8 space-x-6">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`${buttonClasses} px-3 py-2 rounded-lg transition-all duration-200 hover:scale-105`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors duration-200 ${buttonClasses}`}
            >
              {theme === 'dark' ? (
                <FiSun className="w-5 h-5" />
              ) : (
                <FiMoon className="w-5 h-5" />
              )}
            </button>

            {isAuthenticated ? (
              <div className="flex items-center space-x-2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={getDashboardLink()}
                    className={`px-4 py-2 rounded-lg bg-blue-600 dark:bg-blue-500 text-white font-medium transition-all duration-200 hover:bg-blue-700 dark:hover:bg-blue-600`}
                  >
                    Dashboard
                  </Link>
                </motion.div>
                <div className="relative group">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2 rounded-lg transition-all duration-200 bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 dark:hover:bg-blue-500/30`}
                  >
                    <FiUser className="w-5 h-5" />
                  </motion.button>
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="px-4 py-2 text-sm text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
                      Signed in as<br />
                      <span className="font-medium text-gray-900 dark:text-white">
                        {user?.email}
                      </span>
                    </div>
                    <Link
                      href="/profile"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <FiUser className="w-4 h-4 mr-2" />
                      Profile
                    </Link>
                    <button
                      onClick={logout}
                      className="flex items-center w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20"
                    >
                      <FiLogOut className="w-4 h-4 mr-2" />
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/signin"
                    className={signInButtonClasses}
                  >
                    Sign In
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/signup"
                    className={signUpButtonClasses}
                  >
                    Sign Up
                  </Link>
                </motion.div>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-lg transition-colors duration-200 ${buttonClasses}`}
            >
              {isMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden"
            >
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                    },
                  },
                }}
                className="px-2 pt-2 pb-3 space-y-1"
              >
                {/* Mobile Navigation Links */}
                {navigationLinks.map((link) => (
                  <motion.div key={link.name} variants={menuItemVariants}>
                    <Link
                      href={link.href}
                      className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.div variants={menuItemVariants}>
                  <button
                    onClick={toggleTheme}
                    className="w-full text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                  >
                    <div className="flex items-center">
                      {theme === 'dark' ? (
                        <FiSun className="w-4 h-4 mr-2" />
                      ) : (
                        <FiMoon className="w-4 h-4 mr-2" />
                      )}
                      {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                    </div>
                  </button>
                </motion.div>

                {isAuthenticated ? (
                  <>
                    <motion.div variants={menuItemVariants}>
                      <Link
                        href={getDashboardLink()}
                        className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Dashboard
                      </Link>
                    </motion.div>
                    <motion.div variants={menuItemVariants}>
                      <Link
                        href="/profile"
                        className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="flex items-center">
                          <FiUser className="w-4 h-4 mr-2" />
                          Profile
                        </div>
                      </Link>
                    </motion.div>
                    <motion.div variants={menuItemVariants}>
                      <button
                        onClick={() => {
                          logout();
                          setIsMenuOpen(false);
                        }}
                        className="w-full px-4 py-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors duration-200 flex items-center"
                      >
                        <FiLogOut className="w-4 h-4 mr-2" />
                        Logout
                      </button>
                    </motion.div>
                  </>
                ) : (
                  <motion.div 
                    variants={menuItemVariants}
                    className="flex flex-col space-y-3 pt-4 mt-4 border-t border-gray-200 dark:border-gray-700"
                  >
                    <Link
                      href="/signin"
                      onClick={() => setIsMenuOpen(false)}
                      className="w-full px-4 py-2 text-center border border-blue-600 dark:border-blue-500 rounded-lg text-blue-600 dark:text-blue-400 font-medium transition-colors hover:bg-blue-50 dark:hover:bg-blue-900/20 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                    >
                      Sign In
                    </Link>
                    <Link
                      href="/signup"
                      onClick={() => setIsMenuOpen(false)}
                      className="w-full px-4 py-2 text-center bg-blue-600 dark:bg-blue-500 rounded-lg text-white font-medium transition-colors hover:bg-blue-700 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                    >
                      Sign Up
                    </Link>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar; 