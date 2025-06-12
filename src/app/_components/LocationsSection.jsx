import Image from 'next/image';

const LocationsSection = () => {
  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">Our Locations</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Strategic Advertising Spots
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
            Our network of 30+ SMD screens is strategically placed at high-traffic locations across Karachi.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10">
            <div className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl dark:shadow-blue-900/20 overflow-hidden rounded-2xl transition-all duration-300 transform hover:scale-[1.02]">
              <div className="px-4 py-5 sm:p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Shahrah-e-Faisal</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100">Screen Specifications</h4>
                        <ul className="mt-2 text-gray-600 dark:text-gray-300 space-y-2">
                          <li className="flex items-center">
                            <svg className="h-5 w-5 text-blue-500 dark:text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Size: 3ft x 6ft
                          </li>
                          <li className="flex items-center">
                            <svg className="h-5 w-5 text-blue-500 dark:text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Ad Duration: 15 seconds
                          </li>
                          <li className="flex items-center">
                            <svg className="h-5 w-5 text-blue-500 dark:text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            24/7 Operation
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100">Location Benefits</h4>
                        <ul className="mt-2 text-gray-600 dark:text-gray-300 space-y-2">
                          <li className="flex items-center">
                            <svg className="h-5 w-5 text-blue-500 dark:text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            High vehicle traffic area
                          </li>
                          <li className="flex items-center">
                            <svg className="h-5 w-5 text-blue-500 dark:text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Premium business district
                          </li>
                          <li className="flex items-center">
                            <svg className="h-5 w-5 text-blue-500 dark:text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Maximum brand visibility
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-64 lg:h-full min-h-[300px] rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                    <Image
                      src="/shahrah-e-faisal.jpg"
                      alt="Shahrah-e-Faisal Location"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Additional locations can be added here with the same structure */}
            <div className="text-center">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                More locations coming soon across Karachi. Contact us to learn about our expanding network of 30+ screens.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationsSection; 