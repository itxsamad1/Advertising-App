import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="relative bg-white overflow-hidden pt-16 sm:pt-20">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Advertise on Premium</span>{' '}
                <span className="block text-blue-600">SMD Screens</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Reach thousands of potential customers with our strategically placed SMD screens across Karachi. Choose from flexible plans and make your brand shine in the digital landscape.
              </p>
              <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-3 sm:gap-4">
                <div className="rounded-md shadow">
                  <Link
                    href="/plans"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                  >
                    View Plans
                  </Link>
                </div>
                <div>
                  <Link
                    href="/locations"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                  >
                    View Locations
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-64 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
          <div className="text-white text-center px-4">
            <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">SMD</div>
            <div className="text-xl sm:text-2xl">Digital Advertising Solutions</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 