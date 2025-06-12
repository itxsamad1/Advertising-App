'use client';
import Link from 'next/link';

const plans = [
  {
    name: 'Weekly',
    price: '625,000',
    duration: 'Per Week',
    features: [
      'Ad Video Duration: 15 seconds',
      'Screen Size: 3ft x 6ft',
      'High-Traffic Location',
      'Premium Visibility',
      '30+ Screens Network',
      '24/7 Display Time'
    ]
  },
  {
    name: 'Fortnight',
    price: '1,250,000',
    duration: 'Fifteen Days',
    features: [
      'Ad Video Duration: 15 seconds',
      'Screen Size: 3ft x 6ft',
      'High-Traffic Location',
      'Premium Visibility',
      '30+ Screens Network',
      '24/7 Display Time',
      'Extended Campaign Duration'
    ]
  },
  {
    name: 'Monthly',
    price: '2,500,000',
    duration: 'Per Month',
    popular: true,
    features: [
      'Ad Video Duration: 15 seconds',
      'Screen Size: 3ft x 6ft',
      'High-Traffic Location',
      'Premium Visibility',
      '30+ Screens Network',
      '24/7 Display Time',
      'Maximum Campaign Impact',
      'Best Value for Money'
    ]
  }
];

export default function PlansPage() {
  return (
    <div className="min-h-screen pt-28 pb-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Choose Your Plan
          </h1>
          <p className="max-w-3xl mt-5 mx-auto text-xl text-gray-600 dark:text-gray-300">
            Select the perfect advertising duration for your campaign. All plans include premium visibility on our network of 30+ strategically placed SMD screens.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl bg-white dark:bg-gray-800 shadow-lg dark:shadow-blue-900/20 transition-all duration-300 group hover:shadow-xl dark:hover:shadow-blue-900/30 hover:scale-[1.02] ${
                plan.popular ? 'hover:border-2 hover:border-blue-600 dark:hover:border-blue-400' : ''
              }`}
            >
              <div className="p-8">
                {plan.popular && (
                  <div className="absolute top-0 right-0 mt-6 mr-8">
                    <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-blue-600 dark:bg-blue-500 text-white shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{plan.name}</h2>
                <p className="mt-2 text-gray-500 dark:text-gray-400">{plan.duration}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900 dark:text-white">PKR {plan.price}</span>
                </p>
                <Link
                  href="/signup"
                  className={`mt-8 block w-full py-3 px-6 rounded-lg text-center font-medium transition-all duration-300 transform hover:scale-105 
                    bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 
                    group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-blue-800 
                    group-hover:dark:from-blue-500 group-hover:dark:to-blue-700 
                    group-hover:text-white hover:shadow-lg`}
                >
                  Get Started
                </Link>
              </div>
              <div className="px-8 pb-8">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wide uppercase mb-4">
                  What's included
                </h3>
                <ul className="space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-6 w-6 text-green-500 dark:text-green-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-600 dark:text-gray-300">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Need a custom plan? <Link href="/contact" className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200">Contact us</Link>
          </p>
        </div>
      </div>
    </div>
  );
} 