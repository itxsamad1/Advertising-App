const PlansSection = () => {
  const plans = [
    {
      name: 'Basic',
      price: '499',
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
      price: '1,999',
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
      featured: true
    },
    {
      name: 'Enterprise',
      price: '5,999',
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

  return (
    <div className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Choose Your Advertising Plan
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Select the perfect plan that matches your advertising needs
          </p>
        </div>

        <div className="mt-16 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={'relative p-8 bg-white border ' + 
                (plan.featured ? 'border-blue-600' : 'border-gray-200') + 
                ' rounded-2xl shadow-sm flex flex-col'}
            >
              {plan.featured && (
                <div className="absolute top-0 p-4 transform -translate-y-1/2">
                  <span className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-blue-100 text-blue-600">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-gray-900">{plan.name}</h3>
                <p className="mt-2 text-gray-500">{plan.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">₹{plan.price}</span>
                  <span className="text-base font-medium text-gray-500">{plan.duration}</span>
                </p>
              </div>

              <ul className="mt-6 space-y-4 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
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
                    <p className="ml-3 text-base text-gray-700">{feature}</p>
                  </li>
                ))}
              </ul>

              <button
                className={'mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium ' +
                  (plan.featured
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-blue-50 text-blue-600 hover:bg-blue-100')
                }
              >
                Select {plan.name} Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlansSection; 