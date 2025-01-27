import { Link } from 'react-router-dom';

function Home() {
  const features = [
    {
      title: "Ad Blocking",
      description: "Block unwanted ads and improve your browsing experience with our step-by-step guide.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
        </svg>
      ),
      color: "blue",
      link: "/adblocking"
    },
    {
      title: "Browser Extensions",
      description: "Essential extensions for productivity, research, and a better browsing experience.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
          <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
        </svg>
      ),
      color: "purple",
      link: "/extensions"
    },
    {
      title: "Useful Tools",
      description: "Curated collection of online tools and resources to enhance your learning experience.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
        </svg>
      ),
      color: "green",
      link: "/tools"
    }
  ];

  const quickActions = [
    {
      title: "Block Ads Now",
      description: "Get started with uBlock Origin",
      link: "/adblocking",
      color: "blue"
    },
    {
      title: "Essential Extensions",
      description: "Must-have browser extensions",
      link: "/extensions",
      color: "purple"
    },
    {
      title: "Study Tools",
      description: "Access learning resources",
      link: "/tools",
      color: "green"
    }
  ];

  return (
    <div className="w-full space-y-8">
      {/* Hero Section */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Make School Tech
            <span className="text-purple-600"> Work Better</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your all-in-one guide to essential tools, extensions, and resources that make learning easier and more efficient.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/adblocking"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition duration-200"
            >
              Get Started
            </Link>
            <Link
              to="/extensions"
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold border-2 border-purple-600 hover:bg-purple-50 transition duration-200"
            >
              Browse Extensions
            </Link>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Essential Features</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Link
              key={index}
              to={feature.link}
              className={`bg-${feature.color}-50 p-6 rounded-lg border border-${feature.color}-100 hover:bg-${feature.color}-100 transition duration-200`}
            >
              <div className={`text-${feature.color}-600 mb-4`}>
                {feature.icon}
              </div>
              <h3 className={`text-2xl font-semibold text-${feature.color}-900 mb-2`}>
                {feature.title}
              </h3>
              <p className={`text-${feature.color}-800`}>
                {feature.description}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickActions.map((action, index) => (
            <Link
              key={index}
              to={action.link}
              className={`flex items-center p-4 bg-${action.color}-50 rounded-lg border border-${action.color}-100 hover:bg-${action.color}-100 transition duration-200`}
            >
              <div className="flex-1">
                <h3 className={`font-semibold text-${action.color}-900`}>{action.title}</h3>
                <p className={`text-${action.color}-800 text-sm`}>{action.description}</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 text-${action.color}-600`} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home; 