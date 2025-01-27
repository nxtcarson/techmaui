import { useState, useEffect } from 'react';

function Tools() {
  const defaultTools = [
    {
      name: "ChatGPT",
      description: "Advanced AI chatbot for homework help, writing assistance, and general knowledge.",
      icon: "/icons/chatgpt.png",
      category: "AI Assistant",
      url: "https://chat.openai.com",
      requiresAdBlock: false
    },
    {
      name: "Microsoft Activation",
      description: "PowerShell script for Windows/Office activation. Click to view step-by-step instructions.",
      icon: "/icons/windows.png",
      category: "System",
      url: "/activation.html",
      requiresAdBlock: false,
      warning: "⚠️ Make sure to run PowerShell as Administrator before running the activation command"
    },
    {
      name: "SponsorBlock",
      description: "Browser extension to automatically skip sponsored segments in YouTube videos. Community-driven and time-saving.",
      icon: "/icons/sponsorblock.png",
      category: "Browser Extension",
      url: "https://sponsor.ajay.app",
      requiresAdBlock: false
    },
    {
      name: "SpotX",
      description: "Modified Spotify desktop client patcher for Windows. Removes ads and enables premium features.",
      icon: "/icons/spotx.png",
      category: "System",
      url: "https://github.com/SpotX-Official/SpotX",
      requiresAdBlock: false,
      warning: "⚠️ Only for Windows Desktop Spotify (not Microsoft Store version). Use at your own risk."
    },
    {
      name: "Mobilism",
      description: "Community forum for modded Android apps and games. Trusted source for modified applications.",
      icon: "/icons/mobilism.png",
      category: "Android",
      url: "https://forum.mobilism.org",
      requiresAdBlock: true,
      warning: "⚠️ Always scan downloads with antivirus and use official apps when possible"
    },
    {
      name: "IHaveNoTV",
      description: "Free documentary streaming platform with a vast collection of educational content.",
      icon: "/icons/ihavenotv.png",
      category: "Streaming",
      url: "https://ihavenotv.com",
      requiresAdBlock: true
    },
    {
      name: "STEAMRIP",
      description: "Game download portal for PC games. Direct downloads available.",
      icon: "/icons/steamrip.png",
      category: "Games",
      url: "https://steamrip.com",
      requiresAdBlock: true,
      warning: "⚠️ Use antivirus and scan downloads. AdBlock required for safe browsing."
    },
    {
      name: "FitGirl Repacks",
      description: "Highly compressed game repacks. Trusted source for PC game downloads.",
      icon: "/icons/fitgirl.png",
      category: "Games",
      url: "https://fitgirl-repacks.site",
      requiresAdBlock: true,
      warning: "⚠️ Only download torrents on home network. VPN recommended for popular downloads."
    },
    {
      name: "Quillbot",
      description: "AI-powered paraphrasing tool to help improve your writing.",
      icon: "/icons/quillbot.png",
      category: "Writing",
      url: "https://quillbot.com",
      requiresAdBlock: true
    },
    {
      name: "Anna's Archive",
      description: "Search engine for books, papers, comics, magazines, and more.",
      icon: "/icons/annas.png",
      category: "Research",
      url: "https://annas-archive.org",
      requiresAdBlock: true
    },
    {
      name: "LibGen",
      description: "Find and download educational books and textbooks.",
      icon: "/icons/libgen.png",
      category: "Books",
      url: "https://libgen.is",
      requiresAdBlock: true
    },
    {
      name: "Symbolab",
      description: "Advanced math problem solver with step-by-step solutions for algebra, calculus, and more.",
      icon: "/icons/symbolab.png",
      category: "Math",
      url: "https://www.symbolab.com",
      requiresAdBlock: true
    },
    {
      name: "MathPapa",
      description: "Free algebra calculator with step-by-step explanations for solving equations.",
      icon: "/icons/mathpapa.png",
      category: "Math",
      url: "https://www.mathpapa.com/algebra-calculator.html",
      requiresAdBlock: true
    },
    {
      name: "Clever",
      description: "School resource portal for accessing educational tools and applications.",
      icon: "/icons/clever.png",
      category: "School",
      url: "https://clever.com",
      requiresAdBlock: false
    }
  ];

  const [tools, setTools] = useState(defaultTools);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hasUblock, setHasUblock] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Get unique categories from tools
  const categories = [
    { id: 'all', name: 'All Tools' },
    ...Array.from(new Set(defaultTools.map(tool => tool.category)))
      .map(category => ({
        id: category.toLowerCase().replace(/\s+/g, '-'),
        name: category
      }))
      .sort((a, b) => a.name.localeCompare(b.name))
  ];

  // Filter tools based on category and search query
  const filteredTools = tools
    .filter(tool => 
      (selectedCategory === 'all' || tool.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory) &&
      (searchQuery === '' || 
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.category.toLowerCase().includes(searchQuery.toLowerCase()))
    );

  // Save to localStorage whenever tools change
  useEffect(() => {
    try {
      localStorage.setItem('toolLinks', JSON.stringify(tools));
    } catch (error) {
      console.error('Error saving tools to localStorage:', error);
    }
  }, [tools]);

  // Check for uBlock Origin
  useEffect(() => {
    const checkUblock = () => {
      try {
        const test = document.createElement('div');
        test.innerHTML = '&nbsp;';
        test.className = 'adsbox';
        document.body.appendChild(test);
        const isBlocked = test.offsetHeight === 0;
        document.body.removeChild(test);
        setHasUblock(isBlocked);
      } catch (error) {
        console.error('Error checking for uBlock:', error);
        setHasUblock(false);
      }
    };
    
    checkUblock();
  }, []);

  // Debug log
  useEffect(() => {
    console.log('Current tools:', tools);
  }, [tools]);

  return (
    <div className="w-full space-y-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 hover:from-gray-600 hover:to-gray-900 transition-all duration-500 mb-4">
            Useful Tools
          </h1>
          <p className="text-xl text-gray-600">
            Essential websites and tools to enhance your learning experience.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="space-y-4 mb-8">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
            <svg
              className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg transition duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-purple-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {!hasUblock && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">Ad Blocker Required</h3>
                <div className="mt-2 text-sm text-red-700">
                  <p>For your safety and better experience, please install uBlock Origin before using these tools. Many of these sites contain intrusive ads and potential security risks without an ad blocker.</p>
                  <a
                    href="/adblocking"
                    className="inline-flex items-center mt-3 text-red-800 hover:text-red-900 font-medium"
                  >
                    Install uBlock Origin →
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredTools.length > 0 ? (
            filteredTools.map((tool, index) => (
              <div key={index} className="bg-purple-50 p-6 rounded-lg border border-purple-100 flex flex-col hover:shadow-lg transition-all duration-300 hover:-translate-y-1 transform">
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={tool.icon}
                    alt={`${tool.name} icon`}
                    className="w-12 h-12 rounded-lg"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/48?text=' + tool.name[0];
                    }}
                  />
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-purple-900">{tool.name}</h2>
                    <span className="inline-block bg-purple-200 text-purple-800 text-sm px-2 py-1 rounded mt-1">
                      {tool.category}
                    </span>
                  </div>
                </div>
                <p className="text-purple-800 mb-4 flex-1">{tool.description}</p>
                {tool.warning && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded p-3 mb-4 text-yellow-800 text-sm">
                    {tool.warning}
                  </div>
                )}
                {tool.requiresAdBlock && !hasUblock && (
                  <div className="bg-red-50 border border-red-200 rounded p-3 mb-4 text-red-800 text-sm">
                    ⚠️ This site requires uBlock Origin for safe access
                  </div>
                )}
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-purple-100 text-purple-600 font-semibold py-2 px-4 rounded border border-purple-200 transition duration-200 flex items-center justify-center gap-2 hover:shadow-md"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                  Open {tool.name}
                </a>
              </div>
            ))
          ) : (
            <div className="col-span-2 text-center text-gray-500 py-8">
              No tools found matching your search criteria.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Tools; 