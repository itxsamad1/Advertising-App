'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo without text.png"
                alt="M Tech Logo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                M Tech
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md transition duration-200">
              Home
            </Link>
            <Link href="/plans" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md transition duration-200">
              Plans
            </Link>
            <Link href="/locations" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md transition duration-200">
              Locations
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md transition duration-200">
              About
            </Link>
            <Link href="/signin" className="text-blue-600 hover:text-blue-700 px-4 py-2 rounded-md border border-blue-600 transition duration-200">
              Sign In
            </Link>
            <Link href="/signup" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:opacity-90 px-4 py-2 rounded-md transition duration-200">
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="menu-button inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none transition duration-200"
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
      </div>

      {/* Mobile Menu - Side Drawer */}
      <div 
        className={`fixed inset-y-0 right-0 transform md:hidden w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out z-50 mobile-menu ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="px-4 py-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Image
                  src="/logo without text.png"
                  alt="M Tech Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  M Tech
                </span>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="rounded-md text-gray-500 hover:text-gray-700 focus:outline-none transition duration-200"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex-1 px-4 py-6 space-y-6">
            <Link 
              href="/" 
              className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md transition duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/plans" 
              className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md transition duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Plans
            </Link>
            <Link 
              href="/locations" 
              className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md transition duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Locations
            </Link>
            <Link 
              href="/about" 
              className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md transition duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </div>

          <div className="px-4 py-6 border-t border-gray-200 space-y-4">
            <Link
              href="/signin"
              className="block w-full text-center text-blue-600 hover:text-blue-700 px-4 py-2 rounded-md border border-blue-600 transition duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="block w-full text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:opacity-90 px-4 py-2 rounded-md transition duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar; 