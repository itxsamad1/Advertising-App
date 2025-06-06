'use client';
import { useState } from 'react';

const locations = [
  {
    id: 1,
    name: 'I.I Chundrigar Road',
    address: 'I.I Chundrigar Road, Karachi',
    screenSize: '12m x 8m',
    traffic: 'Very High',
    type: 'Business District',
    description: 'Located in the heart of Karachi\'s financial district, this screen captures the attention of business professionals and corporate audience.'
  },
  {
    id: 2,
    name: 'Shahrah-e-Faisal',
    address: 'Fouzia Wahab Flyover, Shahrah-e-Faisal, Karachi',
    screenSize: '15m x 10m',
    traffic: 'Very High',
    type: 'Main Highway',
    description: 'Prime location on Karachi\'s busiest highway, offering maximum visibility to commuters and travelers.'
  },
  {
    id: 3,
    name: 'University Road',
    address: 'University Road, Karachi',
    screenSize: '10m x 6m',
    traffic: 'High',
    type: 'Educational & Commercial',
    description: 'Strategic placement near educational institutions and commercial areas, targeting young professionals and students.'
  }
];

export default function LocationsPage() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 lg:text-5xl">
            Our Screen Locations in Karachi
          </h1>
          <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our strategically placed SMD screens across Karachi. Each location is carefully selected to maximize your advertisement's visibility.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Map Placeholder */}
          <div className="bg-gray-100 rounded-lg p-4 sm:p-6 min-h-[300px] sm:min-h-[400px] flex items-center justify-center order-2 lg:order-1">
            <div className="text-center">
              <p className="text-gray-500 mb-2 text-base sm:text-lg">Karachi City Map</p>
              <p className="text-xs sm:text-sm text-gray-400">Interactive map showing our premium SMD screen locations across Karachi.</p>
            </div>
          </div>

          {/* Locations List */}
          <div className="space-y-4 order-1 lg:order-2">
            {locations.map((location) => (
              <div
                key={location.id}
                className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedLocation(location)}
              >
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{location.name}</h3>
                <div className="mt-2 space-y-2">
                  <p className="text-sm sm:text-base text-gray-600">
                    <span className="font-medium">Address:</span> {location.address}
                  </p>
                  <p className="text-sm sm:text-base text-gray-600">
                    <span className="font-medium">Screen Size:</span> {location.screenSize}
                  </p>
                  <p className="text-sm sm:text-base text-gray-600">
                    <span className="font-medium">Traffic:</span> {location.traffic}
                  </p>
                  <p className="text-sm sm:text-base text-gray-600">
                    <span className="font-medium">Type:</span> {location.type}
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 mt-2">{location.description}</p>
                </div>
                <button className="mt-4 text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base flex items-center">
                  View Details
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 sm:mt-16 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Want to know more about our locations?</h2>
          <p className="mt-4 text-sm sm:text-base text-gray-600">
            Our team is here to help you choose the perfect location for your advertisement in Karachi.
          </p>
          <button className="mt-6 bg-blue-600 text-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-md hover:bg-blue-700 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
} 