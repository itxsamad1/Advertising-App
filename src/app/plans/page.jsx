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
    <div className="pt-24 pb-12 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Choose Your Plan
          </h1>
          <p className="max-w-3xl mt-5 mx-auto text-xl text-gray-500">
            Select the perfect advertising duration for your campaign. All plans include premium visibility on our network of 30+ strategically placed SMD screens.
          </p>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl shadow-lg bg-white divide-y divide-gray-200 ${
                plan.popular ? 'ring-2 ring-blue-600' : ''
              }`}
            >
              <div className="p-6">
                {plan.popular && (
                  <div className="absolute -top-4 right-8">
                    <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-blue-600 text-white">
                      Most Popular
                    </span>
                  </div>
                )}
                <h2 className="text-2xl font-semibold text-gray-900">{plan.name}</h2>
                <p className="mt-2 text-gray-500">{plan.duration}</p>
                <p className="mt-4">
                  <span className="text-4xl font-extrabold text-gray-900">PKR {plan.price}</span>
                </p>
                <Link
                  href="/signup"
                  className={`mt-8 block w-full py-3 px-6 rounded-lg text-center font-medium ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                  } transition-colors duration-200`}
                >
                  Get Started
                </Link>
              </div>
              <div className="px-6 pt-6 pb-8">
                <h3 className="text-sm font-semibold text-gray-900 tracking-wide uppercase">
                  What's included
                </h3>
                <ul className="mt-4 space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-6 w-6 text-green-500"
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
                      <p className="ml-3 text-base text-gray-500">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-500">
            Need a custom plan? <Link href="/contact" className="text-blue-600 font-medium hover:text-blue-500">Contact us</Link>
          </p>
        </div>
      </div>
    </div>
  );
} 