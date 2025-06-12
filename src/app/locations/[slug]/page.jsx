'use client';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';

const locations = {
  'shahrah-e-faisal': {
    name: 'Shahrah-e-Faisal',
    address: 'Aisha Bawany Academy to SUIT, Shahrah-e-Faisal, Karachi',
    screenSize: '3ft x 6ft',
    traffic: 'Very High',
    type: 'Main Highway',
    description: 'Prime location on Karachi\'s busiest highway, strategically positioned between Aisha Bawany Academy and SUIT on Shahrah-e-Faisal. This premium spot ensures maximum visibility to a diverse flow of traffic throughout the day.',
    image: '/shahrah-e-faisal.jpg'
  }
};

export default function LocationPage() {
  const params = useParams();
  const location = locations[params.slug];

  if (!location) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-900">Location not found</h1>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
        >
          {/* Location Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src={location.image}
              alt={location.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
              className="transition-transform hover:scale-105 duration-300"
              priority
            />
          </motion.div>

          {/* Location Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg p-6 lg:p-8"
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              {location.name}
            </h1>
            <div className="space-y-4">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Location</h2>
                <p className="text-gray-600 mt-1">{location.address}</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Screen Specifications</h2>
                <p className="text-gray-600 mt-1">Size: {location.screenSize}</p>
                <p className="text-gray-600">Traffic Density: {location.traffic}</p>
                <p className="text-gray-600">Area Type: {location.type}</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Overview</h2>
                <p className="text-gray-600 mt-1">{location.description}</p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8"
            >
              <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-3 rounded-lg hover:opacity-90 transition duration-200 text-lg font-medium">
                Book This Location
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 