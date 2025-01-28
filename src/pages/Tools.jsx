import { useState, useEffect } from 'react';
import SEOHead from '../components/SEOHead';

function Tools() {
  const defaultTools = [
    {
      name: "Request Tools",
      description: "Need help with Windows/Office activation, game tools, or any other software? Email me for personalized assistance - I'm here to help you with all your tech needs!",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
          <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
        </svg>
      ),
      category: "Support",
      url: "nxtcarson@gmail.com",
      requiresAdBlock: false,
      warning: "✨ Click the button below to copy my email address to your clipboard! I can help with Windows/Office activation, game tools, and more.",
      lastVerified: new Date().toISOString().split('T')[0],
      isEmail: true
    },
    {
      name: "ChatGPT",
      description: "AI-powered chat assistant for writing, research, and problem-solving.",
      icon: "/icons/tools/chatgpt.png",
      category: "AI",
      url: "https://chat.openai.com",
      requiresAdBlock: false,
      lastVerified: "2024-01-27"
    },
    {
      name: "SponsorBlock",
      description: "Skip sponsored segments in YouTube videos automatically.",
      icon: "/icons/tools/sponsorblock.png",
      category: "Browser Extension",
      url: "https://sponsor.ajay.app",
      requiresAdBlock: false
    },
    {
      name: "QuillBot",
      description: "AI writing and paraphrasing tool for better writing.",
      icon: "/icons/tools/quillbot.png",
      category: "Writing",
      url: "https://quillbot.com",
      requiresAdBlock: false
    },
    {
      name: "Anna's Archive",
      description: "Search engine for academic papers and educational materials.",
      icon: "/icons/tools/annas.png",
      category: "Academic",
      url: "https://annas-archive.org",
      requiresAdBlock: false
    },
    {
      name: "Symbolab",
      description: "Step-by-step math problem solver with explanations.",
      icon: "/icons/tools/symbolab.png",
      category: "Math",
      url: "https://www.symbolab.com",
      requiresAdBlock: false
    }
  ];

  const [tools, setTools] = useState(defaultTools);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hasUblock, setHasUblock] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState([]);

  // Get unique categories from tools
  const categories = [
    { id: 'all', name: 'All Tools' },
    { id: 'favorites', name: 'Favorites' },
    ...Array.from(new Set(defaultTools.map(tool => tool.category)))
      .map(category => ({
        id: category.toLowerCase().replace(/\s+/g, '-'),
        name: category
      }))
      .sort((a, b) => a.name.localeCompare(b.name))
  ];

  // Filter tools based on category and search query
  const filteredTools = tools
    .filter(tool => {
      if (selectedCategory === 'favorites') {
        return favorites.includes(tool.name);
      }
      return (selectedCategory === 'all' || tool.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory) &&
        (searchQuery === '' || 
          tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tool.category.toLowerCase().includes(searchQuery.toLowerCase()));
    });

  // Save to localStorage whenever tools change
  useEffect(() => {
    try {
      localStorage.setItem('toolLinks', JSON.stringify(tools));
    } catch (error) {
      console.error('Error saving tools to localStorage:', error);
    }
  }, [tools]);

  // Check for uBlock Origin - improved detection
  useEffect(() => {
    const checkUblock = async () => {
      try {
        // Create multiple test elements with common ad class names
        const testElements = [
          { className: 'adsbox', innerHTML: '&nbsp;' },
          { className: 'adsbygoogle', innerHTML: '&nbsp;' },
          { className: 'ad-placeholder', innerHTML: '&nbsp;' }
        ];

        const results = await Promise.all(testElements.map(({ className, innerHTML }) => {
          return new Promise(resolve => {
            const test = document.createElement('div');
            test.className = className;
            test.innerHTML = innerHTML;
            document.body.appendChild(test);
            
            // Use requestAnimationFrame to ensure the element is rendered
            requestAnimationFrame(() => {
              const isBlocked = test.offsetHeight === 0;
              document.body.removeChild(test);
              resolve(isBlocked);
            });
          });
        }));

        // If any test detects an adblocker, consider it as blocked
        setHasUblock(results.some(result => result));
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

  // Load favorites from localStorage
  useEffect(() => {
    try {
      const savedFavorites = localStorage.getItem('toolFavorites');
      if (savedFavorites) {
        setFavorites(JSON.parse(savedFavorites));
      }
    } catch (error) {
      console.error('Error loading favorites:', error);
    }
  }, []);

  // Save favorites to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('toolFavorites', JSON.stringify(favorites));
    } catch (error) {
      console.error('Error saving favorites:', error);
    }
  }, [favorites]);

  const toggleFavorite = (toolName) => {
    setFavorites(prev => {
      const newFavorites = prev.includes(toolName)
        ? prev.filter(name => name !== toolName)
        : [...prev, toolName];
      return newFavorites;
    });
  };

  const handleCopy = async (text, isEmail = false) => {
    try {
      await navigator.clipboard.writeText(text);
      alert(isEmail ? 'Email copied to clipboard!' : 'Link copied to clipboard!');
    } catch (error) {
      console.error('Error copying:', error);
    }
  };

  return (
    <div className="min-h-[calc(100vh-16rem)] relative bg-gradient-to-br from-purple-50 via-white to-purple-50 overflow-hidden">
      <SEOHead 
        title="Useful Tools"
        description="A curated collection of essential tools and resources for students."
        keywords="student tools, learning resources, educational tools, study aids"
      />
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-purple-100">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400">
              Useful Tools
            </h1>
            <p className="mt-2 text-gray-600">
              A curated collection of tools to enhance your experience
            </p>
          </div>

          {/* AdBlock Warning */}
          {!hasUblock && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center text-red-800">
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                </svg>
                <span>For your safety, please install an ad blocker before using these tools. We recommend <a href="https://ublockorigin.com/" target="_blank" rel="noopener noreferrer" className="underline">uBlock Origin</a>.</span>
              </div>
            </div>
          )}

          {/* Terms of Service Notice */}
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center text-blue-800">
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
              </svg>
              <span>By using these tools, you agree to our <a href="/terms" className="underline">Terms of Service</a> and acknowledge that you are responsible for complying with your local laws and regulations.</span>
            </div>
          </div>

          {/* View Toggle and Favorites Filter */}
          <div className="flex justify-end items-center mb-4">
              <button
              onClick={() => setSelectedCategory(favorites.length ? 'favorites' : 'all')}
              className={`flex items-center gap-2 px-4 py-2 rounded ${
                selectedCategory === 'favorites' ? 'bg-purple-600 text-white' : 'bg-gray-100'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              Favorites ({favorites.length})
              </button>
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredTools.length > 0 ? (
              filteredTools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-purple-50 p-6 rounded-lg border border-purple-100 flex flex-col hover:shadow-lg transition-all duration-300 hover:-translate-y-1 transform"
                >
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
                      <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-semibold text-purple-900">{tool.name}</h2>
                        <div className="flex gap-2">
                          <button
                            onClick={() => toggleFavorite(tool.name)}
                            className={`p-1.5 rounded hover:bg-purple-100 transition-colors duration-200 ${
                              favorites.includes(tool.name) ? 'text-purple-700' : 'text-purple-500'
                            } hover:text-purple-700`}
                            title={favorites.includes(tool.name) ? 'Remove from favorites' : 'Add to favorites'}
                            style={{ backgroundColor: 'white' }}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                            </svg>
                          </button>
                          <button
                            onClick={() => handleCopy(tool.url, tool.isEmail)}
                            className="p-1.5 rounded hover:bg-purple-100 transition-colors duration-200 text-purple-500 hover:text-purple-700"
                            title="Copy link"
                            style={{ backgroundColor: 'white' }}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
                              <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <span className="inline-block bg-purple-200 text-purple-800 text-sm px-2 py-1 rounded mt-1">
                        {tool.category}
                      </span>
                    </div>
                  </div>
                  <p className="text-purple-800 mb-4 flex-1">
                    {tool.description}
                  </p>
                  <div className="flex items-center text-sm text-purple-600 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    Last verified: {new Date(tool.lastVerified).toLocaleDateString()}
                  </div>
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
                  <button
                    onClick={() => handleCopy(tool.url, tool.isEmail)}
                    className="bg-white hover:bg-purple-100 text-purple-600 font-semibold py-2 px-4 rounded border border-purple-200 transition duration-200 flex items-center justify-center gap-2 hover:shadow-md"
                  >
                    {tool.isEmail ? (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                          <path fillRule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z" />
                          <path fillRule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z" />
                        </svg>
                        Email me at nxtcarson@gmail.com
                      </>
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                        Open {tool.name}
                      </>
                    )}
                  </button>
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
    </div>
  );
}

export default Tools; 