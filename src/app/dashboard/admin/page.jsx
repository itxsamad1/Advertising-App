'use client';
import { useAuth } from '../../_components/AuthContext';
import withAuth from '../../_components/withAuth';
import { FiUsers, FiTrendingUp, FiDollarSign, FiSettings, FiShield, FiDatabase } from 'react-icons/fi';

function AdminDashboard() {
  const { user } = useAuth();

  const stats = [
    {
      name: 'Total Revenue',
      value: '$124,592',
      icon: FiDollarSign,
      change: '+28%',
      changeType: 'positive',
    },
    {
      name: 'Total Users',
      value: '2,345',
      icon: FiUsers,
      change: '+12%',
      changeType: 'positive',
    },
    {
      name: 'Active Campaigns',
      value: '45',
      icon: FiTrendingUp,
      change: '+23%',
      changeType: 'positive',
    },
  ];

  const adminTools = [
    {
      name: 'User Management',
      description: 'Manage user accounts, roles, and permissions',
      icon: FiUsers,
    },
    {
      name: 'Security Settings',
      description: 'Configure security policies and access controls',
      icon: FiShield,
    },
    {
      name: 'System Settings',
      description: 'Manage system configurations and preferences',
      icon: FiSettings,
    },
    {
      name: 'Database Management',
      description: 'Monitor and manage database operations',
      icon: FiDatabase,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Admin Dashboard
        </h1>
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-6">
          <p className="text-blue-600 dark:text-blue-400">
            Welcome back, {user?.email}!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {stat.name}
                </p>
                <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">
                  {stat.value}
                </p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                <stat.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <div className="mt-4">
              <span
                className={`text-sm font-medium ${
                  stat.changeType === 'positive'
                    ? 'text-green-600 dark:text-green-400'
                    : 'text-red-600 dark:text-red-400'
                }`}
              >
                {stat.change}
              </span>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {' '}
                vs last month
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {adminTools.map((tool) => (
          <div
            key={tool.name}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6"
          >
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <tool.icon className="w-5 h-5" />
              {tool.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              {tool.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default withAuth(AdminDashboard, ['admin']); 