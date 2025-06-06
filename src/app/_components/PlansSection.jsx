'use client';
import { useState } from 'react';

const PlansSection = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  
  const plans = [
    {
      name: 'Basic',
      price: '15,000',
      duration: 'per day',
      features: [
        '4 Hours Screen Time',
        'Single Location',
        'Basic Analytics',
        'Standard Support',
        'Ad Design Consultation'
      ],
      description: 'Perfect for small businesses and short campaigns',
      featured: false
    },
    {
      name: 'Professional',
      price: '75,000',
      duration: 'per week',
      features: [
        '8 Hours Screen Time',
        'Multiple Locations',
        'Advanced Analytics',
        'Priority Support',
        'Professional Ad Design',
        'Peak Hour Slots'
      ],
      description: 'Ideal for growing businesses and medium-term campaigns',
      featured: false
    },
    {
      name: 'Enterprise',
      price: '250,000',
      duration: 'per month',
      features: [
        '24/7 Screen Time',
        'All Premium Locations',
        'Real-time Analytics',
        'Dedicated Support',
        'Custom Ad Design Team',
        'Premium Slots Guaranteed',
        'Multi-screen Synchronization'
      ],
      description: 'Best for large businesses and long-term advertising',
      featured: false
    }
  ];

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    // You can add more functionality here, like opening a modal or redirecting to a checkout page
    console.log('Selected plan:', plan.name);
  };

  return (
    <div className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl lg:text-4xl">
            Choose Your Advertising Plan
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Select the perfect plan that matches your advertising needs in Karachi
          </p>
        </div>

        <div className="mt-8 sm:mt-12 md:mt-16 space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-6 sm:p-8 bg-white border rounded-2xl shadow-sm flex flex-col transition-all duration-300 ${
                selectedPlan?.name === plan.name
                  ? 'border-blue-600 transform scale-[1.02]'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
              onClick={() => handlePlanSelect(plan)}
            >
              <div className="mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">{plan.name}</h3>
                <p className="mt-2 text-sm sm:text-base text-gray-500">{plan.description}</p>
                <p className="mt-6 sm:mt-8 flex items-baseline text-gray-900">
                  <span className="text-3xl sm:text-4xl font-extrabold">₨{plan.price}</span>
                  <span className="ml-2 text-sm sm:text-base font-medium text-gray-500">{plan.duration}</span>
                </p>
              </div>

              <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 sm:h-6 sm:w-6 text-green-500"
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
                    <p className="ml-2 sm:ml-3 text-sm sm:text-base text-gray-700">{feature}</p>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handlePlanSelect(plan)}
                className={`mt-6 sm:mt-8 block w-full py-2 sm:py-3 px-4 sm:px-6 border border-transparent rounded-md text-center text-sm sm:text-base font-medium transition-colors ${
                  selectedPlan?.name === plan.name
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                }`}
              >
                {selectedPlan?.name === plan.name ? 'Selected' : `Select ${plan.name} Plan`}
              </button>
            </div>
          ))}
        </div>

        {selectedPlan && (
          <div className="mt-8 sm:mt-12 text-center">
            <p className="text-base sm:text-lg text-gray-600 mb-4">
              You've selected the <span className="font-semibold">{selectedPlan.name}</span> plan
            </p>
            <button
              onClick={() => {
                // Add checkout or contact functionality
                console.log('Proceeding with plan:', selectedPlan.name);
              }}
              className="inline-flex items-center px-6 py-2 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Proceed with {selectedPlan.name} Plan
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlansSection; 