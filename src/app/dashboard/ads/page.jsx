'use client';
import { useState } from 'react';
import { FiPlay, FiPause, FiPlus, FiX, FiEye } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

// Animation variants
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const listItemVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 }
};

// Dummy data for demonstration
const initialAds = [
  {
    id: 1,
    name: 'Summer Sale Campaign',
    status: 'Active',
    location: 'Shahrah-e-Faisal',
    startDate: '2024-03-01',
    endDate: '2024-03-15',
    views: '125K',
    engagement: '4.8%'
  },
  {
    id: 2,
    name: 'New Product Launch',
    status: 'Active',
    location: 'Gulshan-e-Iqbal',
    startDate: '2024-03-05',
    endDate: '2024-03-19',
    views: '98K',
    engagement: '3.9%'
  },
  {
    id: 3,
    name: 'Brand Awareness',
    status: 'Paused',
    location: 'Clifton',
    startDate: '2024-02-20',
    endDate: '2024-03-05',
    views: '78K',
    engagement: '3.2%'
  }
];

export default function AdsPage() {
  const [ads, setAds] = useState(initialAds);
  const [showNewAdModal, setShowNewAdModal] = useState(false);
  const [selectedAd, setSelectedAd] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const toggleAdStatus = (adId) => {
    setAds(prevAds => prevAds.map(ad => {
      if (ad.id === adId) {
        const newStatus = ad.status === 'Active' ? 'Paused' : 'Active';
        // If this is the selected ad in the modal, update its status too
        if (selectedAd && selectedAd.id === adId) {
          setSelectedAd({ ...ad, status: newStatus });
        }
        return { ...ad, status: newStatus };
      }
      return ad;
    }));
  };

  const handleViewDetails = (ad) => {
    setSelectedAd(ad);
    setShowDetailsModal(true);
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.3 }}
      className="space-y-6 max-w-full"
    >
      <div className="sticky top-0 z-10 bg-gray-50 dark:bg-gray-900 pb-4 px-1">
        <div className="max-w-full flex flex-col sm:flex-row items-center justify-between gap-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white truncate">Advertising Campaigns</h1>
          <button
            onClick={() => setShowNewAdModal(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-offset-gray-900 min-w-[120px]"
          >
            <FiPlus className="mr-2 h-5 w-5" />
            Run New Ad
          </button>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        <motion.div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {ads.map((ad) => (
              <motion.div
                key={ad.id}
                variants={listItemVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">{ad.name}</h3>
                    <span className={`mt-1 inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full ${
                      ad.status === 'Active'
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400'
                        : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400'
                    }`}>
                      {ad.status}
                    </span>
                  </div>
                  <button
                    onClick={() => handleViewDetails(ad)}
                    className="ml-2 p-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                  >
                    <FiEye className="h-5 w-5" />
                  </button>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  <p>{ad.location}</p>
                </div>
                <div className="mt-3 flex justify-end">
                  <button
                    onClick={() => toggleAdStatus(ad.id)}
                    className={`inline-flex items-center px-3 py-1 rounded-md text-sm font-medium ${
                      ad.status === 'Active'
                        ? 'text-yellow-700 bg-yellow-50 hover:bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900/30 dark:hover:bg-yellow-900/50'
                        : 'text-green-700 bg-green-50 hover:bg-green-100 dark:text-green-400 dark:bg-green-900/30 dark:hover:bg-green-900/50'
                    }`}
                  >
                    {ad.status === 'Active' ? (
                      <>
                        <FiPause className="mr-1.5 h-4 w-4" />
                        Pause
                      </>
                    ) : (
                      <>
                        <FiPlay className="mr-1.5 h-4 w-4" />
                        Resume
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block bg-white dark:bg-gray-800 shadow-sm rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Campaign Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Location
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Duration
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Performance
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <AnimatePresence mode="popLayout">
                {ads.map((ad) => (
                  <motion.tr
                    key={ad.id}
                    variants={listItemVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.2 }}
                    className="bg-white dark:bg-gray-800"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">{ad.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          ad.status === 'Active'
                            ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400'
                            : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400'
                        }`}
                      >
                        {ad.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {ad.location}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {ad.startDate} to {ad.endDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 dark:text-white">{ad.views} views</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{ad.engagement} engagement</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => toggleAdStatus(ad.id)}
                          className={`inline-flex items-center px-3 py-1 rounded-md text-sm font-medium ${
                            ad.status === 'Active'
                              ? 'text-yellow-700 bg-yellow-50 hover:bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900/30 dark:hover:bg-yellow-900/50'
                              : 'text-green-700 bg-green-50 hover:bg-green-100 dark:text-green-400 dark:bg-green-900/30 dark:hover:bg-green-900/50'
                          }`}
                        >
                          {ad.status === 'Active' ? (
                            <>
                              <FiPause className="mr-1.5 h-4 w-4" />
                              Pause
                            </>
                          ) : (
                            <>
                              <FiPlay className="mr-1.5 h-4 w-4" />
                              Resume
                            </>
                          )}
                        </button>
                        <button
                          onClick={() => handleViewDetails(ad)}
                          className="text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-2 rounded-lg transition-colors"
                        >
                          <FiEye className="h-5 w-5" />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </div>

      {/* Details Modal */}
      <AnimatePresence>
        {showDetailsModal && selectedAd && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed z-50 inset-0 overflow-y-auto"
          >
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.75 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 transition-opacity"
                aria-hidden="true"
              >
                <div className="absolute inset-0 bg-gray-500 dark:bg-gray-900 opacity-75"></div>
              </motion.div>
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              >
                <div className="absolute top-0 right-0 pt-4 pr-4">
                  <button
                    onClick={() => setShowDetailsModal(false)}
                    className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none"
                  >
                    <FiX className="h-6 w-6" />
                  </button>
                </div>
                <div className="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    Campaign Details
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Campaign Name</h4>
                      <p className="mt-1 text-sm text-gray-900 dark:text-white">{selectedAd.name}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Status</h4>
                      <span className={`mt-1 inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full ${
                        selectedAd.status === 'Active'
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400'
                          : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400'
                      }`}>
                        {selectedAd.status}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Location</h4>
                      <p className="mt-1 text-sm text-gray-900 dark:text-white">{selectedAd.location}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Duration</h4>
                      <p className="mt-1 text-sm text-gray-900 dark:text-white">
                        {selectedAd.startDate} to {selectedAd.endDate}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Performance</h4>
                      <div className="mt-1 grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                          <p className="text-sm text-gray-500 dark:text-gray-400">Views</p>
                          <p className="mt-1 text-sm font-medium text-gray-900 dark:text-white">{selectedAd.views}</p>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                          <p className="text-sm text-gray-500 dark:text-gray-400">Engagement</p>
                          <p className="mt-1 text-sm font-medium text-gray-900 dark:text-white">{selectedAd.engagement}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    onClick={() => toggleAdStatus(selectedAd.id)}
                    className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium sm:ml-3 sm:w-auto sm:text-sm ${
                      selectedAd.status === 'Active'
                        ? 'text-yellow-700 bg-yellow-50 hover:bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900/30 dark:hover:bg-yellow-900/50'
                        : 'text-green-700 bg-green-50 hover:bg-green-100 dark:text-green-400 dark:bg-green-900/30 dark:hover:bg-green-900/50'
                    }`}
                  >
                    {selectedAd.status === 'Active' ? (
                      <>
                        <FiPause className="mr-1.5 h-4 w-4" />
                        Pause Campaign
                      </>
                    ) : (
                      <>
                        <FiPlay className="mr-1.5 h-4 w-4" />
                        Resume Campaign
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowDetailsModal(false)}
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* New Ad Modal */}
      <AnimatePresence>
        {showNewAdModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed z-50 inset-0 overflow-y-auto"
          >
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.75 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 transition-opacity"
                aria-hidden="true"
              >
                <div className="absolute inset-0 bg-gray-500 dark:bg-gray-900 opacity-75"></div>
              </motion.div>
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              >
                <div className="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Run New Ad Campaign</h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Please contact our sales team to set up a new advertising campaign.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    onClick={() => setShowNewAdModal(false)}
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-offset-gray-900 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Contact Sales
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowNewAdModal(false)}
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
} 