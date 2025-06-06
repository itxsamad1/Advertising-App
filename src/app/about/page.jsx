export default function AboutPage() {
  const stats = [
    { label: 'Screens Deployed', value: '50+' },
    { label: 'Cities Covered', value: '5' },
    { label: 'Daily Viewers', value: '1M+' },
    { label: 'Happy Clients', value: '200+' }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: 'With over 15 years in digital advertising, Sarah leads our vision for the future of outdoor advertising.'
    },
    {
      name: 'Michael Chen',
      role: 'Technical Director',
      bio: 'Michael ensures our SMD screens are equipped with the latest technology for optimal performance.'
    },
    {
      name: 'Emma Williams',
      role: 'Client Success Manager',
      bio: 'Emma works closely with our clients to ensure their advertising campaigns exceed expectations.'
    }
  ];

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
            About AdScreen
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            We're revolutionizing outdoor advertising with cutting-edge SMD screen technology and data-driven insights.
          </p>
        </div>

        {/* Stats Section */}
        <div className="bg-blue-50 rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Vision</h3>
              <p className="text-gray-600">
                To transform urban advertising landscapes with innovative digital solutions that create meaningful connections between brands and audiences.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Values</h3>
              <p className="text-gray-600">
                We believe in transparency, innovation, and sustainability. Our commitment to these values drives everything we do.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-lg shadow-md p-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-blue-600">{member.name[0]}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">{member.name}</h3>
                <p className="text-blue-600 text-center text-sm mb-4">{member.role}</p>
                <p className="text-gray-600 text-center">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Want to learn more?</h2>
          <p className="mt-4 text-gray-600">
            We'd love to hear from you and discuss how we can help your business grow.
          </p>
          <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
} 