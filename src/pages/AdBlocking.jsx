import { useState } from 'react';

function AdBlocking() {
  return (
    <div className="w-full">
      <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 hover:from-gray-600 hover:to-gray-900 transition-all duration-500 mb-4">
          Ad Blocking Guide
        </h1>
        <p className="text-xl text-gray-600 mb-8 hover:text-gray-800 transition-colors duration-200">
          Block ads and improve your browsing experience with uBlock Origin - the best free, open-source ad blocker.
        </p>
        
        <div className="space-y-8">
          <div className="group bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg border border-blue-100 hover:from-blue-100 hover:to-blue-50 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4 group-hover:text-blue-700 transition-colors duration-200">
              Why uBlock Origin?
            </h2>
            <ul className="list-disc list-inside text-blue-800 space-y-2 group-hover:text-blue-600 transition-colors duration-200">
              <li className="hover:translate-x-1 transform transition-transform duration-200">Free and open-source - no hidden costs or tracking</li>
              <li className="hover:translate-x-1 transform transition-transform duration-200">Light on system resources - won't slow down your browser</li>
              <li className="hover:translate-x-1 transform transition-transform duration-200">Blocks ads, trackers, and potential malware</li>
              <li className="hover:translate-x-1 transform transition-transform duration-200">Easy to use with no technical knowledge required</li>
            </ul>
          </div>

          <div className="group bg-gradient-to-br from-green-50 to-white p-6 rounded-lg border border-green-100 hover:from-green-100 hover:to-green-50 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            <h2 className="text-2xl font-semibold text-green-900 mb-4 group-hover:text-green-700 transition-colors duration-200">
              Installation Steps
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-green-800 mb-2 group-hover:text-green-700 transition-colors duration-200">
                  Step 1: Choose Your Browser
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <a href="https://addons.mozilla.org/firefox/addon/ublock-origin/" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="flex items-center p-4 bg-white rounded-lg shadow hover:shadow-lg hover:scale-105 transform transition-all duration-200 group">
                    <span className="text-lg font-medium group-hover:text-green-700 transition-colors duration-200">Firefox</span>
                    <span className="ml-auto text-green-600 transform group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </a>
                  <a href="https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center p-4 bg-white rounded-lg shadow hover:shadow-lg hover:scale-105 transform transition-all duration-200 group">
                    <span className="text-lg font-medium group-hover:text-green-700 transition-colors duration-200">Chrome</span>
                    <span className="ml-auto text-green-600 transform group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </a>
                  <a href="https://microsoftedge.microsoft.com/addons/detail/ublock-origin/odfafepnkmbhccpbejgmiehpchacaeak"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center p-4 bg-white rounded-lg shadow hover:shadow-lg hover:scale-105 transform transition-all duration-200 group">
                    <span className="text-lg font-medium group-hover:text-green-700 transition-colors duration-200">Edge</span>
                    <span className="ml-auto text-green-600 transform group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </a>
                </div>
              </div>

              <div className="hover:translate-x-1 transform transition-transform duration-200">
                <h3 className="text-xl font-medium text-green-800 mb-2 group-hover:text-green-700 transition-colors duration-200">
                  Step 2: Install
                </h3>
                <p className="text-green-700 group-hover:text-green-600 transition-colors duration-200">
                  Click the "Add to Browser" or "Install" button on your browser's extension store page.
                </p>
              </div>

              <div className="hover:translate-x-1 transform transition-transform duration-200">
                <h3 className="text-xl font-medium text-green-800 mb-2 group-hover:text-green-700 transition-colors duration-200">
                  Step 3: You're Done!
                </h3>
                <p className="text-green-700 group-hover:text-green-600 transition-colors duration-200">
                  That's it! uBlock Origin will start working immediately. You'll see its icon in your browser's toolbar.
                </p>
              </div>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-purple-50 to-white p-6 rounded-lg border border-purple-100 hover:from-purple-100 hover:to-purple-50 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            <h2 className="text-2xl font-semibold text-purple-900 mb-4 group-hover:text-purple-700 transition-colors duration-200">
              Tips for Use
            </h2>
            <ul className="list-disc list-inside text-purple-800 space-y-2 group-hover:text-purple-600 transition-colors duration-200">
              <li className="hover:translate-x-1 transform transition-transform duration-200">The extension works automatically - no configuration needed</li>
              <li className="hover:translate-x-1 transform transition-transform duration-200">If a website doesn't work properly, you can easily disable uBlock Origin for that site by clicking its icon and then the power button</li>
              <li className="hover:translate-x-1 transform transition-transform duration-200">The number on the icon shows how many ads were blocked on the current page</li>
              <li className="hover:translate-x-1 transform transition-transform duration-200">The extension updates automatically to protect against new threats</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdBlocking; 