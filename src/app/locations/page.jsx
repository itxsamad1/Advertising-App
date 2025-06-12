'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const locations = [
  {
    id: 'shahrah-e-faisal',
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
  return (
    <div className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
            Our Premium Screen Location
          </h1>
          <p className="mt-4 text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our strategically placed SMD screen at Karachi's most prominent location.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/locations/${location.id}`}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative h-64 md:h-full min-h-[300px]">
                      <Image
                        src={location.image}
                        alt={location.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{ objectFit: 'cover' }}
                        className="transition-transform hover:scale-105 duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">{location.name}</h2>
                      <p className="text-gray-600 mb-6">{location.address}</p>
                      <div className="space-y-4">
                        <div className="flex items-center text-gray-500">
                          <span className="font-medium mr-2">Screen Size:</span>
                          {location.screenSize}
                        </div>
                        <div className="flex items-center text-gray-500">
                          <span className="font-medium mr-2">Traffic:</span>
                          {location.traffic}
                        </div>
                        <div className="flex items-center text-gray-500">
                          <span className="font-medium mr-2">Type:</span>
                          {location.type}
                        </div>
                      </div>
                      <p className="mt-6 text-gray-600">{location.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 