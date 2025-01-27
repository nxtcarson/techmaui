function AdBlocking() {
  return (
    <div className="w-full">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Ad Blocking Guide</h1>
        <p className="text-xl text-gray-600 mb-8">Block ads and improve your browsing experience with uBlock Origin - the best free, open-source ad blocker.</p>
        
        <div className="space-y-8">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Why uBlock Origin?</h2>
            <ul className="list-disc list-inside text-blue-800 space-y-2">
              <li>Free and open-source - no hidden costs or tracking</li>
              <li>Light on system resources - won't slow down your browser</li>
              <li>Blocks ads, trackers, and potential malware</li>
              <li>Easy to use with no technical knowledge required</li>
            </ul>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border border-green-100">
            <h2 className="text-2xl font-semibold text-green-900 mb-4">Installation Steps</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-green-800 mb-2">Step 1: Choose Your Browser</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <a href="https://addons.mozilla.org/firefox/addon/ublock-origin/" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="flex items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                    <span className="text-lg font-medium">Firefox</span>
                    <span className="ml-auto text-green-600">→</span>
                  </a>
                  <a href="https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                    <span className="text-lg font-medium">Chrome</span>
                    <span className="ml-auto text-green-600">→</span>
                  </a>
                  <a href="https://microsoftedge.microsoft.com/addons/detail/ublock-origin/odfafepnkmbhccpbejgmiehpchacaeak"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                    <span className="text-lg font-medium">Edge</span>
                    <span className="ml-auto text-green-600">→</span>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium text-green-800 mb-2">Step 2: Install</h3>
                <p className="text-green-700">Click the "Add to Browser" or "Install" button on your browser's extension store page.</p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-green-800 mb-2">Step 3: You're Done!</h3>
                <p className="text-green-700">That's it! uBlock Origin will start working immediately. You'll see its icon in your browser's toolbar.</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
            <h2 className="text-2xl font-semibold text-purple-900 mb-4">Tips for Use</h2>
            <ul className="list-disc list-inside text-purple-800 space-y-2">
              <li>The extension works automatically - no configuration needed</li>
              <li>If a website doesn't work properly, you can easily disable uBlock Origin for that site by clicking its icon and then the power button</li>
              <li>The number on the icon shows how many ads were blocked on the current page</li>
              <li>The extension updates automatically to protect against new threats</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdBlocking; 