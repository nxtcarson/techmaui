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
      title: "Install uBlock Origin",
      description: "Block ads in one click",
      link: "/adblocking",
      color: "red",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
          <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
        </svg>
      )
    },
    {
      title: "Get Dark Mode",
      description: "Install Dark Reader",
      link: "/extensions?category=media",
      color: "gray",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      )
    },
    {
      title: "Activate Windows",
      description: "Free Windows activation",
      link: "/tools",
      color: "blue",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  return (
    <div className="w-full space-y-8">
      {/* Hero Section */}
      <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 hover:scale-105 transition-transform duration-300">
            Make School Tech
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 transition-all duration-500"> Work Better</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 hover:text-gray-800 transition-colors duration-200">
            Your all-in-one guide to essential tools, extensions, and resources that make learning easier and more efficient.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/adblocking"
              className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 hover:scale-105 transform transition-all duration-200 hover:shadow-lg"
            >
              Get Started
            </Link>
            <Link
              to="/extensions"
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold border-2 border-purple-600 hover:bg-purple-50 hover:scale-105 transform transition-all duration-200 hover:shadow-lg hover:border-purple-700 hover:text-purple-700"
            >
              Browse Extensions
            </Link>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 hover:from-gray-600 hover:to-gray-900 transition-all duration-500 mb-8 text-center">
          Essential Features
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Link
              key={index}
              to={feature.link}
              className={`group bg-gradient-to-br from-${feature.color}-50 to-white p-6 rounded-lg border border-${feature.color}-100 hover:from-${feature.color}-100 hover:to-${feature.color}-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 transform`}
            >
              <div className={`text-${feature.color}-600 mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className={`text-2xl font-semibold text-${feature.color}-900 mb-2 group-hover:text-${feature.color}-700 transition-colors duration-200`}>
                {feature.title}
              </h3>
              <p className={`text-${feature.color}-800 group-hover:text-${feature.color}-600 transition-colors duration-200`}>
                {feature.description}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 hover:from-gray-600 hover:to-gray-900 transition-all duration-500 mb-8 text-center">
          Popular Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickActions.map((action, index) => (
            <Link
              key={index}
              to={action.link}
              className={`group flex items-center p-4 bg-gradient-to-br from-${action.color}-50 to-white rounded-lg border border-${action.color}-100 hover:from-${action.color}-100 hover:to-${action.color}-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 transform`}
            >
              <div className={`text-${action.color}-600 mr-4 transform group-hover:scale-110 transition-transform duration-300`}>
                {action.icon}
              </div>
              <div className="flex-1">
                <h3 className={`font-semibold text-${action.color}-900 group-hover:text-${action.color}-700 transition-colors duration-200`}>
                  {action.title}
                </h3>
                <p className={`text-${action.color}-800 text-sm group-hover:text-${action.color}-600 transition-colors duration-200`}>
                  {action.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home; 
