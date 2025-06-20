'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

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

const PlansSection = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [hoveredPlan, setHoveredPlan] = useState(null);

  return (
    <div className="py-16 bg-gradient-to-b from-white dark:from-gray-900 to-blue-50 dark:to-gray-800">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">Pricing Plans</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            Choose Your Perfect Plan
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 mx-auto">
            Select the perfect advertising duration for your campaign. All plans include premium visibility on our network of 30+ strategically placed SMD screens.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className={`rounded-2xl shadow-lg bg-white dark:bg-gray-800 p-8 relative cursor-pointer transition-all duration-300 ${
                  selectedPlan === plan.name ? 'ring-2 ring-blue-600 dark:ring-blue-500 transform scale-105' : ''
                }`}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                onClick={() => setSelectedPlan(plan.name)}
                onHoverStart={() => setHoveredPlan(plan.name)}
                onHoverEnd={() => setHoveredPlan(null)}
              >
                {plan.popular && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-4 right-8"
                  >
                    <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-blue-600 dark:bg-blue-500 text-white">
                      Most Popular
                    </span>
                  </motion.div>
                )}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{plan.name}</h3>
                  <p className="mt-4 text-gray-500 dark:text-gray-400">{plan.duration}</p>
                  <p className="mt-8">
                    <span className="text-4xl font-extrabold text-gray-900 dark:text-white">PKR {plan.price}</span>
                  </p>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={`/signup?plan=${plan.name}`}
                      className={`mt-8 block w-full py-3 px-6 rounded-lg text-center font-medium ${
                        selectedPlan === plan.name || hoveredPlan === plan.name
                          ? 'bg-blue-600 dark:bg-blue-500 text-white'
                          : 'bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-800'
                      } transition-colors duration-200`}
                    >
                      {selectedPlan === plan.name ? 'Selected Plan' : 'Get Started'}
                    </Link>
                  </motion.div>

                  <div className="mt-8">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wide uppercase">
                      What's included
                    </h4>
                    <ul className="mt-4 space-y-4">
                      {plan.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start"
                        >
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
                          <p className="ml-3 text-base text-gray-500 dark:text-gray-400">{feature}</p>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-gray-500 dark:text-gray-400">
            Need a custom plan?{' '}
            <Link href="/contact" className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-500 dark:hover:text-blue-300">
              Contact us
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PlansSection; 