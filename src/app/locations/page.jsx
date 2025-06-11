'use client';
import { useState } from 'react';
import Image from 'next/image';

const locations = [
  {
    id: 1,
    name: 'Shahrah-e-Faisal',
    address: 'Aisha Bawany Academy to SUIT, Shahrah-e-Faisal, Karachi',
    screenSize: '3ft x 6ft',
    traffic: 'Very High',
    type: 'Main Highway',
    description: 'Prime location on Karachi\'s busiest highway, strategically positioned between Aisha Bawany Academy and SUIT on Shahrah-e-Faisal. This premium spot ensures maximum visibility to a diverse flow of traffic throughout the day.',
    image: '/shahrah-e-faisal.jpg'
  }
];

export default function LocationsPage() {
  const [selectedLocation] = useState(locations[0]);

  return (
    <div className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
            Our Premium Screen Location
          </h1>
          <p className="mt-4 text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our strategically placed SMD screen at one of Karachi's most prominent locations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Location Image */}
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src={selectedLocation.image}
              alt={selectedLocation.name}
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform hover:scale-105 duration-300"
            />
          </div>

          {/* Location Details */}
          <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              {selectedLocation.name}
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Location</h3>
                <p className="text-gray-600 mt-1">{selectedLocation.address}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Screen Specifications</h3>
                <p className="text-gray-600 mt-1">Size: {selectedLocation.screenSize}</p>
                <p className="text-gray-600">Traffic Density: {selectedLocation.traffic}</p>
                <p className="text-gray-600">Area Type: {selectedLocation.type}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Overview</h3>
                <p className="text-gray-600 mt-1">{selectedLocation.description}</p>
              </div>
            </div>

            <div className="mt-8">
              <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-3 rounded-lg hover:opacity-90 transition duration-200 text-lg font-medium">
                Book This Location
              </button>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center bg-blue-50 rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Want to know more?</h2>
          <p className="mt-4 text-lg text-gray-600">
            Our team is here to help you get the most out of your advertisement campaign.
          </p>
          <button className="mt-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-3 text-lg rounded-lg hover:opacity-90 transition duration-200">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
} 