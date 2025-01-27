import { useState } from 'react';

function Extensions() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Extensions' },
    { id: 'productivity', name: 'Productivity' },
    { id: 'study', name: 'Study & Research' },
    { id: 'language', name: 'Language & Writing' },
    { id: 'privacy', name: 'Privacy & Security' },
    { id: 'media', name: 'Media Tools' }
  ];

  const extensions = [
    {
      name: "DeepL Translate",
      description: "Instant translation with superior accuracy. Supports over 25 languages.",
      category: "language",
      chrome: "https://chrome.google.com/webstore/detail/deepl-translate-beta-vers/cofdbpoegempjloogbagkncekinflcnj",
      firefox: "https://addons.mozilla.org/firefox/addon/to-deepl/",
      edge: "https://microsoftedge.microsoft.com/addons/detail/deepl-translate/eljdmlajicbzjohpmdbbcjlnpqojcbkp"
    },
    {
      name: "ClearURLs",
      description: "Removes tracking elements from URLs to enhance privacy.",
      category: "privacy",
      chrome: "https://chrome.google.com/webstore/detail/clearurls/lckanjgmijmafbedllaakclkaicjfmnk",
      firefox: "https://addons.mozilla.org/firefox/addon/clearurls/",
      edge: "https://microsoftedge.microsoft.com/addons/detail/clearurls/mdkdmaickkfdekbjdoojfalpbkgaddei"
    },
    {
      name: "Google Scholar Button",
      description: "Quick access to Google Scholar search and citations.",
      category: "study",
      chrome: "https://chrome.google.com/webstore/detail/google-scholar-button/ldipcbpaocekfooobnbcddclnhejkcpn",
      firefox: "https://addons.mozilla.org/firefox/addon/google-scholar-button/",
      edge: "https://microsoftedge.microsoft.com/addons/detail/google-scholar-button/kcgclholejgcimhkgicjpjpndlkjhbid"
    },
    {
      name: "OneTab",
      description: "Convert all tabs into a list to save memory and stay organized.",
      category: "productivity",
      chrome: "https://chrome.google.com/webstore/detail/onetab/chphlpgkkbolifaimnlloiipkdnihall",
      firefox: "https://addons.mozilla.org/firefox/addon/onetab/",
      edge: "https://microsoftedge.microsoft.com/addons/detail/onetab/hoimpamkkoehapgenciaoajfkfkpgfop"
    },
    {
      name: "Momentum",
      description: "Replace new tab page with a personal dashboard featuring to-dos, weather, and inspiration.",
      category: "productivity",
      chrome: "https://chrome.google.com/webstore/detail/momentum/laookkfknpbbblfpciffpaejjkokdgca",
      firefox: "https://addons.mozilla.org/firefox/addon/momentumdash/",
      edge: "https://microsoftedge.microsoft.com/addons/detail/momentum/jdoanlopeanabgejgldakgnkgpjlimmh"
    },
    {
      name: "Dark Reader",
      description: "Dark mode for every website. Take care of your eyes, use dark theme for night and daily browsing.",
      category: "media",
      chrome: "https://chrome.google.com/webstore/detail/dark-reader/eimadpbcbfnmbkopoojfekhnkhdbieeh",
      firefox: "https://addons.mozilla.org/firefox/addon/darkreader/",
      edge: "https://microsoftedge.microsoft.com/addons/detail/dark-reader/ifoakfbpdcdoeenechcleahebpibofpc"
    }
  ];

  const filteredExtensions = selectedCategory === 'all'
    ? extensions
    : extensions.filter(ext => ext.category === selectedCategory);

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Essential Browser Extensions
          </h1>
          <p className="text-xl text-gray-600">
            Enhance your browsing experience with these carefully selected extensions.
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex flex-wrap gap-4">
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

      {/* Extensions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredExtensions.map((extension, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{extension.name}</h3>
            <p className="text-gray-600 mb-4">{extension.description}</p>
            <div className="space-y-2">
              {extension.chrome && (
                <a
                  href={extension.chrome}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 bg-blue-50 text-blue-700 rounded hover:bg-blue-100 transition duration-200"
                >
                  <span>Chrome</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              )}
              {extension.firefox && (
                <a
                  href={extension.firefox}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 bg-orange-50 text-orange-700 rounded hover:bg-orange-100 transition duration-200"
                >
                  <span>Firefox</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              )}
              {extension.edge && (
                <a
                  href={extension.edge}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 bg-green-50 text-green-700 rounded hover:bg-green-100 transition duration-200"
                >
                  <span>Edge</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Extensions; 