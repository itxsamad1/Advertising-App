'use client';
import { useState } from 'react';
import { FiCheck, FiInfo } from 'react-icons/fi';

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
    ],
    stats: {
      averageViews: '875K',
      engagement: '4.2%',
      roi: '2.8x'
    }
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
    ],
    stats: {
      averageViews: '1.75M',
      engagement: '4.5%',
      roi: '3.2x'
    }
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
    ],
    stats: {
      averageViews: '3.5M',
      engagement: '4.8%',
      roi: '3.5x'
    }
  }
];

export default function PlansPage() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Advertising Plans</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden h-full flex flex-col ${
              plan.popular ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            {plan.popular && (
              <div className="bg-blue-500 dark:bg-blue-600 text-white text-center text-sm font-medium py-1.5">
                Most Popular
              </div>
            )}
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{plan.name}</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{plan.duration}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-900 dark:text-white whitespace-nowrap">
                    PKR {plan.price}
                  </p>
                </div>
              </div>

              {/* Plan Stats */}
              <div className="grid grid-cols-3 gap-2">
                <div className="text-center p-2.5 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Avg. Views</p>
                  <p className="text-base font-semibold text-gray-900 dark:text-white">{plan.stats.averageViews}</p>
                </div>
                <div className="text-center p-2.5 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Engagement</p>
                  <p className="text-base font-semibold text-gray-900 dark:text-white">{plan.stats.engagement}</p>
                </div>
                <div className="text-center p-2.5 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Avg. ROI</p>
                  <p className="text-base font-semibold text-gray-900 dark:text-white">{plan.stats.roi}</p>
                </div>
              </div>

              {/* Features */}
              <div className="mt-6 flex-1">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Features included:</h3>
                <ul className="space-y-2.5">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <FiCheck className="h-4 w-4 text-green-500 dark:text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="ml-2.5 text-sm text-gray-500 dark:text-gray-400 leading-5">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => {
                  setSelectedPlan(plan);
                  setShowContactModal(true);
                }}
                className={`mt-6 w-full px-4 py-2.5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                  plan.popular
                    ? 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600'
                    : 'bg-gray-600 hover:bg-gray-700 dark:bg-gray-500 dark:hover:bg-gray-600'
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900`}
              >
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed z-50 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 dark:bg-gray-900 opacity-75"></div>
            </div>
            <div className="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 sm:mx-0 sm:h-10 sm:w-10">
                    <FiInfo className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      Contact Sales Team
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Please contact our sales team to get started with the {selectedPlan?.name} plan.
                        We'll help you set up your advertising campaign and answer any questions you may have.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  onClick={() => setShowContactModal(false)}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Contact Sales
                </button>
                <button
                  type="button"
                  onClick={() => setShowContactModal(false)}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 