import Image from 'next/image';
import Link from 'next/link';
import AnimatedHero from './_components/AnimatedHero';
import HeroSection from './_components/HeroSection';
import ClientWrapper, {
  DynamicPlansSection,
  DynamicFeaturesSection,
  DynamicLocationsSection,
  DynamicAboutSection
} from './_components/ClientWrapper';

export default function Home() {
  return (
    <div className="min-h-screen">
      <AnimatedHero />
      
      {/* SMD Information Section */}
      <section className="relative py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Advertise on Premium </span>
                <span className="text-blue-600 dark:text-blue-400">SMD Screens</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Reach Millions of potential customers with our strategically placed SMD screens across Karachi. Choose from flexible plans and make your brand shine in the digital landscape.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                A Prime Location with high footfall & vehicle traffic, perfect for maximum visibility and brand exposure.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/plans" className="inline-block px-8 py-4 text-base font-medium text-white bg-blue-600 dark:bg-blue-500 rounded-lg transition-all duration-300 hover:bg-blue-700 dark:hover:bg-blue-600 hover:shadow-lg transform hover:scale-105">
                  View Plans
                </Link>
                <Link href="/locations" className="inline-block px-8 py-4 text-base font-medium text-blue-600 dark:text-blue-400 bg-white dark:bg-gray-800 rounded-lg border-2 border-blue-600 dark:border-blue-400 transition-all duration-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:shadow-lg transform hover:scale-105">
                  View Locations
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-3xl transform rotate-6 scale-105 opacity-10"></div>
                <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl">
                  <h2 className="text-3xl font-bold text-center mb-2 text-gray-900 dark:text-white">SMD Screen</h2>
                  <p className="text-center text-gray-600 dark:text-gray-400 mb-6">(Surface Mount Device Screen)</p>
                  <Image
                    src="/screen-optimized.webp"
                    alt="SMD Screen Display"
                    width={600}
                    height={400}
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Why Choose Our SMD Screens?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Discover the advantages of digital outdoor advertising with our cutting-edge SMD screens
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl transition-all duration-300 hover:shadow-xl dark:shadow-blue-900/20 transform hover:scale-105">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Prime Locations</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our SMD screens are strategically placed at prime locations with high footfall & vehicle traffic.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl transition-all duration-300 hover:shadow-xl dark:shadow-blue-900/20 transform hover:scale-105">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Real-time Analytics</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Track your campaign performance with detailed analytics and audience insights.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl transition-all duration-300 hover:shadow-xl dark:shadow-blue-900/20 transform hover:scale-105">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Dynamic Content</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Update your advertisements in real-time and keep your content fresh and relevant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Advertising Plans</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Select the perfect advertising duration for your campaign. All plans include premium visibility on our network of 30+ strategically placed SMD screens.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Weekly Plan */}
            <div className="relative rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-lg dark:shadow-blue-900/20 transition-all duration-300 group hover:shadow-xl dark:hover:shadow-blue-900/30 hover:scale-[1.02]">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Weekly</h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400">Per Week</p>
              <p className="mt-8 mb-8">
                <span className="text-4xl font-extrabold text-gray-900 dark:text-white">PKR</span><br />
                <span className="text-4xl font-extrabold text-gray-900 dark:text-white">625,000</span>
              </p>
              <Link
                href="/signup"
                className="block w-full py-3 px-6 rounded-lg text-center font-medium mb-8
                  bg-blue-50 hover:bg-blue-600 dark:bg-blue-900/50 
                  text-blue-600 hover:text-white dark:text-blue-400 dark:hover:text-white
                  transition-all duration-300 transform hover:scale-105
                  hover:shadow-lg"
              >
                Get Started
              </Link>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  WHAT'S INCLUDED
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 dark:text-green-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">Ad Video Duration: 15 seconds</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 dark:text-green-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">Screen Size: 3ft x 6ft</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 dark:text-green-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">High-Traffic Location</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 dark:text-green-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">Premium Visibility</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 dark:text-green-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">30+ Screens Network</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Fortnight Plan */}
            <div className="relative rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-lg dark:shadow-blue-900/20 transition-all duration-300 group hover:shadow-xl dark:hover:shadow-blue-900/30 hover:scale-[1.02]">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Fortnight</h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400">Fifteen Days</p>
              <p className="mt-8 mb-8">
                <span className="text-4xl font-extrabold text-gray-900 dark:text-white">PKR</span><br />
                <span className="text-4xl font-extrabold text-gray-900 dark:text-white">1,250,000</span>
              </p>
              <Link
                href="/signup"
                className="block w-full py-3 px-6 rounded-lg text-center font-medium mb-8
                  bg-blue-50 hover:bg-blue-600 dark:bg-blue-900/50 
                  text-blue-600 hover:text-white dark:text-blue-400 dark:hover:text-white
                  transition-all duration-300 transform hover:scale-105
                  hover:shadow-lg"
              >
                Get Started
              </Link>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  WHAT'S INCLUDED
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 dark:text-green-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">Ad Video Duration: 15 seconds</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 dark:text-green-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">Screen Size: 3ft x 6ft</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 dark:text-green-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">High-Traffic Location</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 dark:text-green-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">Premium Visibility</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 dark:text-green-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">30+ Screens Network</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Monthly Plan */}
            <div className="relative rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-lg dark:shadow-blue-900/20 transition-all duration-300 group hover:shadow-xl dark:hover:shadow-blue-900/30 hover:scale-[1.02]">
              <div className="absolute top-0 right-0 mt-4 mr-4">
                <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-blue-600 dark:bg-blue-500 text-white shadow-lg">
                  Most Popular
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Monthly</h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400">Per Month</p>
              <p className="mt-8 mb-8">
                <span className="text-4xl font-extrabold text-gray-900 dark:text-white">PKR 2,500,000</span>
              </p>
              <Link
                href="/signup"
                className="block w-full py-3 px-6 rounded-lg text-center font-medium mb-8
                  bg-blue-50 hover:bg-blue-600 dark:bg-blue-900/50 
                  text-blue-600 hover:text-white dark:text-blue-400 dark:hover:text-white
                  transition-all duration-300 transform hover:scale-105
                  hover:shadow-lg"
              >
                Get Started
              </Link>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  WHAT'S INCLUDED
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 dark:text-green-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">Ad Video Duration: 15 seconds</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 dark:text-green-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">Screen Size: 3ft x 6ft</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 dark:text-green-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">High-Traffic Location</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 dark:text-green-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">Premium Visibility</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 dark:text-green-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">30+ Screens Network</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-base font-semibold text-blue-600 dark:text-blue-400 mb-2">ABOUT US</h3>
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Digital Advertising Excellence</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              We provide cutting-edge digital advertising solutions with our network of 30+ premium SMD screens strategically placed across Karachi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Premium Locations</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our SMD screens are placed at prime locations with high footfall & vehicle traffic, ensuring maximum visibility and brand exposure for your advertisements.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">High-Quality Displays</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Each screen measures 3ft x 6ft, providing crystal-clear visibility and vibrant colors that make your advertisements stand out day and night.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Impactful Advertising</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  With 15-second video slots and 24/7 display time, your message reaches thousands of potential customers throughout the day.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Wide Network Coverage</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  With our network of 30+ screens across Karachi, we ensure your brand reaches diverse audiences in multiple high-value locations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 