'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const AnimatedHero = () => {
  const [mounted, setMounted] = useState(false);
  const [dimensions, setDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800
  });
  
  // Words to cycle through
  const words = ['Presence', 'Credibility', 'Recognition', 'Exposure', 'Impact', 'Story'];
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  useEffect(() => {
    const type = () => {
      const currentFullWord = words[wordIndex];
      
      if (isDeleting) {
        setCurrentWord(prev => prev.substring(0, prev.length - 1));
        setTypingSpeed(50); // Faster when deleting
      } else {
        setCurrentWord(currentFullWord.substring(0, currentWord.length + 1));
        setTypingSpeed(150); // Normal speed when typing
      }
      
      // If word is complete
      if (!isDeleting && currentWord === currentFullWord) {
        setTimeout(() => setIsDeleting(true), 1500); // Wait before starting to delete
      }
      
      // If word is deleted
      if (isDeleting && currentWord === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        setTypingSpeed(150);
      }
    };
    
    const timer = setTimeout(type, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentWord, isDeleting, wordIndex, typingSpeed, words]);

  useEffect(() => {
    setMounted(true);
    
    if (typeof window !== 'undefined') {
      const updateDimensions = () => {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight
        });
      };
      
      updateDimensions();
      window.addEventListener('resize', updateDimensions);
      
      return () => window.removeEventListener('resize', updateDimensions);
    }
  }, []);

  // Reduced number of elements and pre-calculated values
  const elements = Array.from({ length: 12 }, () => ({
    initialScale: Math.random() * 1.5 + 0.5,
    width: Math.random() * 200 + 50,
    height: Math.random() * 200 + 50,
    opacity: Math.random() * 0.2 + 0.05,
    duration: Math.random() * 8 + 15,
    initialX: Math.random() * dimensions.width,
    initialY: Math.random() * dimensions.height,
  }));

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-b from-blue-900 to-black dark:from-gray-900 dark:to-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {elements.map((element, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-500/20 rounded-full"
            initial={{
              x: element.initialX,
              y: element.initialY,
              scale: element.initialScale,
            }}
            animate={{
              x: [
                element.initialX,
                (element.initialX + dimensions.width/2) % dimensions.width,
                element.initialX,
              ],
              y: [
                element.initialY,
                (element.initialY + dimensions.height/2) % dimensions.height,
                element.initialY,
              ],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: element.width,
              height: element.height,
              filter: 'blur(40px)',
              opacity: element.opacity,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Transform Your Brand{' '}
            <span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-100 inline-block min-w-[280px] min-h-[100px]"
            >
              {currentWord}
              <span className="animate-blink">|</span>
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl text-blue-100 mb-8 mt-4"
          >
            Premium SMD Screen Advertising Solutions in Prime Locations
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <Link
              href="/plans"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full p-1"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-white rounded-full mx-auto"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AnimatedHero; 