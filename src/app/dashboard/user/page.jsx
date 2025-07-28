'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiPlusCircle, FiMapPin, FiPackage, FiBarChart2 } from 'react-icons/fi';
import { useAuth } from '../../_components/AuthContext';
import withAuth from '../../_components/withAuth';

function UserDashboard() {
  const { user } = useAuth();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const storedName = localStorage.getItem('userName') || user?.email?.split('@')[0] || 'User';
    setUserName(storedName);
  }, [user]);

  const cards = [
    {
      title: 'Active Ads',
      value: '12',
      change: '+2.5%',
      isPositive: true,
      icon: FiBarChart2,
    },
    {
      title: 'Total Locations',
      value: '24',
      change: '+4.1%',
      isPositive: true,
      icon: FiMapPin,
    },
    {
      title: 'Current Plan',
      value: 'Pro',
      change: 'Active',
      isPositive: true,
      icon: FiPackage,
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Welcome back, {userName}!
          </h1>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Here's what's happening with your advertising campaigns today.
          </p>
        </div>
        <Link
          href="/dashboard/ads/new"
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
        >
          <FiPlusCircle className="mr-2 h-5 w-5" />
          Run New Ad
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 transition-all duration-200 hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {card.title}
                </p>
                <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
                  {card.value}
                </p>
                <p className={`mt-2 text-sm ${
                  card.isPositive
                    ? 'text-green-600 dark:text-green-400'
                    : 'text-red-600 dark:text-red-400'
                }`}>
                  {card.change}
                </p>
              </div>
              <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <card.icon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Recent Activity
          </h2>
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                      <FiBarChart2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      Ad Campaign {i + 1}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Updated 2 hours ago
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-400">
                  Active
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Quick Actions
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <Link
              href="/dashboard/ads"
              className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            >
              <FiBarChart2 className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-2" />
              <span className="text-sm font-medium text-gray-900 dark:text-white">View Ads</span>
            </Link>
            <Link
              href="/dashboard/locations"
              className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            >
              <FiMapPin className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-2" />
              <span className="text-sm font-medium text-gray-900 dark:text-white">Manage Locations</span>
            </Link>
            <Link
              href="/dashboard/plans"
              className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            >
              <FiPackage className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-2" />
              <span className="text-sm font-medium text-gray-900 dark:text-white">Upgrade Plan</span>
            </Link>
            <div className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-2 relative">
                <span className="absolute inset-0 flex items-center justify-center font-bold">?</span>
              </div>
              <span className="text-sm font-medium text-gray-900 dark:text-white">Help Center</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuth(UserDashboard, ['user']); 