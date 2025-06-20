'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900 pt-24 overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 pt-8 pb-8 bg-white dark:bg-gray-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
        >
          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                <span className="block">Advertise on Premium</span>{' '}
                <span className="block text-blue-600 dark:text-blue-400">SMD Screens</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Reach Millions of potential customers with our strategically placed SMD screens across Karachi. Choose from flexible plans and make your brand shine in the digital landscape.
              </p>
              <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-4 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0">
                A Prime Location with high footfall & vehicle traffic, perfect for maximum visibility and brand exposure.
              </p>
              <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-3 sm:gap-4">
                <div>
                  <Link
                    href="/plans"
                    className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-full text-white bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-500 dark:to-blue-700 hover:opacity-90 md:py-4 md:text-lg md:px-10 transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
                  >
                    View Plans
                  </Link>
                </div>
                <div>
                  <Link
                    href="/locations"
                    className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-full text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/50 md:py-4 md:text-lg md:px-10 transition-all duration-200 transform hover:scale-105 hover:shadow-md border border-blue-100 dark:border-blue-800"
                  >
                    View Locations
                  </Link>
                </div>
              </div>
            </motion.div>
          </main>
        </motion.div>

        {/* Right side with image and text */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full mt-8 lg:mt-24"
        >
          <div className="relative h-64 w-full sm:h-72 md:h-96 lg:w-full lg:h-[calc(100%-6rem)]">
            {/* Background with square shape */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-800"></div>
            </div>
            
            {/* Content */}
            <div className="relative h-full flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-white text-center px-4 pt-8"
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">SMD Screen</div>
                <div className="text-lg md:text-xl opacity-90">(Surface Mount Device Screen)</div>
              </motion.div>
              <div className="relative w-full h-[calc(100%-6rem)] mt-4">
                <Image
                  src="/images/screen img-optimized.webp"
                  alt="SMD Screen"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  style={{ objectFit: 'contain', objectPosition: 'bottom' }}
                  className="drop-shadow-2xl"
                  quality={90}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection; 