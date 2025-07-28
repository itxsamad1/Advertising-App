'use client';
import { useState, useEffect } from 'react';
import { useAuth } from '../../_components/AuthContext';
import withAuth from '../../_components/withAuth';
import { 
  FiUsers, 
  FiTrendingUp, 
  FiMap, 
  FiSettings, 
  FiDownload, 
  FiCheck, 
  FiX,
  FiEye,
  FiEdit2,
  FiTrash2,
  FiFilter
} from 'react-icons/fi';

function ManagerDashboard() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('users'); // users, pending, approved
  const [users, setUsers] = useState([]);
  const [pendingContent, setPendingContent] = useState([]);

  // Simulated data - replace with actual API calls
  useEffect(() => {
    // Simulated users data
    const mockUsers = [
      { id: 1, name: 'Syed Wasey', email: 'wasey@example.com', status: 'Active', joinDate: '2024-01-15', adsCount: 5 },
      { id: 2, name: 'Aarish Maqsood', email: 'aarish@example.com', status: 'Active', joinDate: '2024-02-01', adsCount: 3 },
      { id: 3, name: 'Abdul Samad', email: 'samad@example.com', status: 'Inactive', joinDate: '2024-01-20', adsCount: 0 },
    ];
    setUsers(mockUsers);

    // Simulated pending content
    const mockPending = [
      { 
        id: 1, 
        user: 'Syed Wasey', 
        title: 'Summer Campaign', 
        submittedDate: '2024-03-10', 
        type: 'Video',
        status: 'Pending',
        location: 'Shahrah-e-Faisal'
      },
      { 
        id: 2, 
        user: 'Abdul Samad', 
        title: 'Product Launch', 
        submittedDate: '2024-03-09', 
        type: 'Image',
        status: 'Pending',
        location: 'Shahrah-e-Faisal'
      },
    ];
    setPendingContent(mockPending);
  }, []);

  const stats = [
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
    {
      name: 'Locations',
      value: '12',
      icon: FiMap,
      change: '+3',
      changeType: 'positive',
    },
  ];

  const handleApprove = (id) => {
    // Implement approval logic
    setPendingContent(prev => 
      prev.map(item => 
        item.id === id ? { ...item, status: 'Approved' } : item
      )
    );
  };

  const handleReject = (id) => {
    // Implement rejection logic
    setPendingContent(prev => 
      prev.map(item => 
        item.id === id ? { ...item, status: 'Rejected' } : item
      )
    );
  };

  const handleDownload = (id) => {
    // Implement download logic
    console.log('Downloading content:', id);
  };

  const renderTabs = () => (
    <div className="flex space-x-4 mb-6">
      <button
        onClick={() => setActiveTab('users')}
        className={`px-4 py-2 rounded-lg font-medium ${
          activeTab === 'users'
            ? 'bg-blue-600 text-white'
            : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
        }`}
      >
        User Management
      </button>
      <button
        onClick={() => setActiveTab('pending')}
        className={`px-4 py-2 rounded-lg font-medium ${
          activeTab === 'pending'
            ? 'bg-blue-600 text-white'
            : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
        }`}
      >
        Pending Approvals
      </button>
    </div>
  );

  const renderUserManagement = () => (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            User Management
          </h2>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
              <FiFilter className="w-5 h-5" />
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Export Data
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Join Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Ads
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    {user.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500 dark:text-gray-300">
                    {user.email}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    user.status === 'Active'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-400'
                      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-400'
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                  {user.joinDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                  {user.adsCount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button className="text-blue-600 dark:text-blue-400 hover:text-blue-900">
                      <FiEye className="w-5 h-5" />
                    </button>
                    <button className="text-green-600 dark:text-green-400 hover:text-green-900">
                      <FiEdit2 className="w-5 h-5" />
                    </button>
                    <button className="text-red-600 dark:text-red-400 hover:text-red-900">
                      <FiTrash2 className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderPendingApprovals = () => (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Pending Approvals
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                User
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Submitted
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {pendingContent.map((content) => (
              <tr key={content.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    {content.user}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900 dark:text-white">
                    {content.title}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500 dark:text-gray-300">
                    {content.type}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500 dark:text-gray-300">
                    {content.location}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                  {content.submittedDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    content.status === 'Pending'
                      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-400'
                      : content.status === 'Approved'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-400'
                      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-400'
                  }`}>
                    {content.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => handleDownload(content.id)}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-900"
                    >
                      <FiDownload className="w-5 h-5" />
                    </button>
                    {content.status === 'Pending' && (
                      <>
                        <button 
                          onClick={() => handleApprove(content.id)}
                          className="text-green-600 dark:text-green-400 hover:text-green-900"
                        >
                          <FiCheck className="w-5 h-5" />
                        </button>
                        <button 
                          onClick={() => handleReject(content.id)}
                          className="text-red-600 dark:text-red-400 hover:text-red-900"
                        >
                          <FiX className="w-5 h-5" />
                        </button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Manager Dashboard
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

      {renderTabs()}
      
      {activeTab === 'users' ? renderUserManagement() : renderPendingApprovals()}
    </div>
  );
}

export default withAuth(ManagerDashboard, ['manager', 'admin']); 