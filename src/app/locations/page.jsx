'use client';
import { useState } from 'react';

const locations = [
  {
    id: 1,
    name: 'City Center Mall',
    address: '123 Main Street',
    screenSize: '10m x 6m',
    traffic: 'High',
    type: 'Shopping Mall'
  },
  {
    id: 2,
    name: 'Central Station',
    address: '456 Transit Ave',
    screenSize: '8m x 4m',
    traffic: 'Very High',
    type: 'Transport Hub'
  },
  {
    id: 3,
    name: 'Business District',
    address: '789 Corporate Blvd',
    screenSize: '12m x 8m',
    traffic: 'High',
    type: 'Business Area'
  },
  {
    id: 4,
    name: 'Sports Complex',
    address: '321 Stadium Road',
    screenSize: '15m x 10m',
    traffic: 'Medium-High',
    type: 'Entertainment'
  }
];

export default function LocationsPage() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
            Our Screen Locations
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our strategically placed SMD screens across the city. Each location is carefully selected to maximize your advertisement's visibility.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Placeholder */}
          <div className="bg-gray-100 rounded-lg p-6 min-h-[400px] flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-500 mb-2">Interactive Map Coming Soon</p>
              <p className="text-sm text-gray-400">We're working on an interactive map to help you better visualize our screen locations.</p>
            </div>
          </div>

          {/* Locations List */}
          <div className="space-y-4">
            {locations.map((location) => (
              <div
                key={location.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedLocation(location)}
              >
                <h3 className="text-xl font-semibold text-gray-900">{location.name}</h3>
                <div className="mt-2 space-y-2">
                  <p className="text-gray-600"><span className="font-medium">Address:</span> {location.address}</p>
                  <p className="text-gray-600"><span className="font-medium">Screen Size:</span> {location.screenSize}</p>
                  <p className="text-gray-600"><span className="font-medium">Traffic:</span> {location.traffic}</p>
                  <p className="text-gray-600"><span className="font-medium">Type:</span> {location.type}</p>
                </div>
                <button className="mt-4 text-blue-600 hover:text-blue-700 font-medium">
                  View Details →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Want to know more about our locations?</h2>
          <p className="mt-4 text-gray-600">
            Our team is here to help you choose the perfect location for your advertisement.
          </p>
          <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
} 