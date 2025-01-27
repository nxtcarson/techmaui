import { useState } from 'react';

function AdBlocking() {
  const [selectedBrowser, setSelectedBrowser] = useState('chrome');

  const browsers = [
    {
      id: 'chrome',
      name: 'Google Chrome',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      )
    },
    {
      id: 'firefox',
      name: 'Firefox',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
          <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
        </svg>
      )
    },
    {
      id: 'edge',
      name: 'Microsoft Edge',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 12c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9 9-4.03 9-9zm-9 7c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"/>
          <path d="M12 8v8M8 12h8"/>
        </svg>
      )
    }
  ];

  const installationSteps = {
    chrome: [
      {
        title: "Open Chrome Web Store",
        description: "Visit the Chrome Web Store by clicking the button below.",
        link: "https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm",
        buttonText: "Open Chrome Web Store"
      },
      {
        title: "Add to Chrome",
        description: "Click the 'Add to Chrome' button on the uBlock Origin page."
      },
      {
        title: "Confirm Installation",
        description: "Click 'Add extension' in the popup to confirm installation."
      }
    ],
    firefox: [
      {
        title: "Open Firefox Add-ons",
        description: "Visit the Firefox Add-ons page by clicking the button below.",
        link: "https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/",
        buttonText: "Open Firefox Add-ons"
      },
      {
        title: "Add to Firefox",
        description: "Click the 'Add to Firefox' button on the uBlock Origin page."
      },
      {
        title: "Allow Installation",
        description: "Click 'Add' in the popup to allow the installation."
      }
    ],
    edge: [
      {
        title: "Open Edge Add-ons",
        description: "Visit the Edge Add-ons page by clicking the button below.",
        link: "https://microsoftedge.microsoft.com/addons/detail/ublock-origin/odfafepnkmbhccpbejgmiehpchacaeak",
        buttonText: "Open Edge Add-ons"
      },
      {
        title: "Get uBlock Origin",
        description: "Click the 'Get' button on the uBlock Origin page."
      },
      {
        title: "Add Extension",
        description: "Click 'Add extension' in the popup to complete installation."
      }
    ]
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Block Ads with uBlock Origin
          </h1>
          <p className="text-xl text-gray-600">
            Follow these simple steps to install uBlock Origin, the best ad blocker for your browser.
          </p>
        </div>
      </div>

      {/* Browser Selection */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Your Browser</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {browsers.map((browser) => (
            <button
              key={browser.id}
              onClick={() => setSelectedBrowser(browser.id)}
              className={`p-4 rounded-lg border-2 transition duration-200 ${
                selectedBrowser === browser.id
                  ? 'border-purple-600 bg-purple-50'
                  : 'border-gray-200 hover:border-purple-600'
              }`}
            >
              <div className={`text-${selectedBrowser === browser.id ? 'purple' : 'gray'}-600 mb-2`}>
                {browser.icon}
              </div>
              <div className="font-medium">{browser.name}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Installation Steps */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Installation Steps</h2>
        <div className="space-y-6">
          {installationSteps[selectedBrowser].map((step, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">{step.title}</h3>
                <p className="text-gray-600 mt-1">{step.description}</p>
                {step.link && (
                  <a
                    href={step.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-200"
                  >
                    {step.buttonText}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Information */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why uBlock Origin?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-2">
            <h3 className="text-lg font-medium text-gray-900">Efficient</h3>
            <p className="text-gray-600">Uses less memory and CPU than other ad blockers while being more effective.</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-medium text-gray-900">Privacy-Focused</h3>
            <p className="text-gray-600">Blocks trackers and protects your privacy while browsing.</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-medium text-gray-900">Open Source</h3>
            <p className="text-gray-600">Transparent, community-driven development with no commercial interests.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdBlocking; 