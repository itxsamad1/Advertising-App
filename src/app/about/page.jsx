import Link from 'next/link';

export default function AboutPage() {
  const stats = [
    { label: 'Screens Deployed', value: '30+' },
    { label: 'Locations in Karachi', value: '1' },
    { label: 'Daily Viewers', value: '500K+' },
    { label: 'Happy Clients', value: '15+' }
  ];

  const team = [
    {
      name: 'Person 1',
      role: 'CEO & Founder',
      bio: 'Leading the vision and strategy of our digital advertising solutions with extensive experience in the industry.'
    },
    {
      name: 'Person 2',
      role: 'Technical Director',
      bio: 'Managing our technical infrastructure and ensuring optimal performance of our SMD screens across Karachi.'
    },
    {
      name: 'Person 3',
      role: 'Client Success Manager',
      bio: 'Dedicated to ensuring client satisfaction and maximizing the impact of advertising campaigns.'
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
            About AdScreen
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Revolutionizing outdoor advertising in Karachi with cutting-edge SMD screen technology and data-driven insights.
          </p>
        </div>

        {/* Stats Section */}
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 mb-16 transition-colors duration-300">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-blue-900/20 p-6 transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-900/30">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Vision</h3>
              <p className="text-gray-600 dark:text-gray-300">
                To transform Karachi's advertising landscape with innovative digital solutions that create meaningful connections between brands and audiences.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-blue-900/20 p-6 transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-900/30">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Values</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We believe in transparency, innovation, and sustainability. Our commitment to these values drives everything we do.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-blue-900/20 p-6 transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-900/30">
                <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/50 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-blue-600 dark:text-blue-400">{member.name[7]}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-2">{member.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 text-center text-sm mb-4">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300 text-center">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Want to learn more?</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            We'd love to hear from you and discuss how we can help your business grow in Karachi.
          </p>
          <Link 
            href="/contact"
            className="mt-6 inline-block bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
} 