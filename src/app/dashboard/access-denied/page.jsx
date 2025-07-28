'use client';
import { useAuth } from '../../_components/AuthContext';
import { FiAlertTriangle } from 'react-icons/fi';
import Link from 'next/link';

export default function AccessDenied() {
  const { user } = useAuth();

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <FiAlertTriangle className="w-16 h-16 text-red-500" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Access Denied
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Sorry, you don't have permission to access this page.
        </p>
        <Link
          href={`/dashboard/${user?.role || ''}`}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Return to Dashboard
        </Link>
      </div>
    </div>
  );
} 