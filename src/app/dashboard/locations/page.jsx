'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FiMapPin } from 'react-icons/fi';

const locations = [
  {
    id: 'shahrah-e-faisal',
    name: 'Shahrah-e-Faisal',
    address: 'Aisha Bawany Academy to SUIT, Shahrah-e-Faisal, Karachi',
    screenSize: '3ft x 6ft',
    traffic: 'Very High',
    type: 'Main Highway',
    description: 'Prime location on Karachi\'s busiest highway, strategically positioned between Aisha Bawany Academy and SUIT on Shahrah-e-Faisal. This premium spot ensures maximum visibility to a diverse flow of traffic throughout the day.',
    image: '/images/shahrah-e-faisal-optimized.webp',
    stats: {
      dailyTraffic: '150K+',
      visibility: '98%',
      impressions: '200K+'
    }
  }
];

export default function LocationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Our Premium Locations</h1>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {locations.map((location) => (
          <div key={location.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Location Image */}
              <div className="md:w-1/3 relative h-64 md:h-auto">
                <Image
                  src={location.image}
                  alt={location.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Location Details */}
              <div className="flex-1 p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">{location.name}</h2>
                    <p className="mt-1 text-gray-500 dark:text-gray-400 flex items-center">
                      <FiMapPin className="w-4 h-4 mr-1" />
                      {location.address}
                    </p>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400">
                    {location.type}
                  </span>
                </div>

                <div className="mt-4">
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Daily Traffic</p>
                      <p className="mt-1 text-xl font-semibold text-gray-900 dark:text-white">{location.stats.dailyTraffic}</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Visibility Rate</p>
                      <p className="mt-1 text-xl font-semibold text-gray-900 dark:text-white">{location.stats.visibility}</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Daily Impressions</p>
                      <p className="mt-1 text-xl font-semibold text-gray-900 dark:text-white">{location.stats.impressions}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Screen Size:</span>
                      <span className="ml-2 text-sm text-gray-900 dark:text-white">{location.screenSize}</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Traffic Level:</span>
                      <span className="ml-2 text-sm text-gray-900 dark:text-white">{location.traffic}</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">{location.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 