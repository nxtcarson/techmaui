function AdBlocking() {
  return (
    <div className="w-full">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Ad Blocking</h1>
        <p className="text-xl text-gray-600 mb-8">Learn how to block ads and improve your browsing experience.</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h2 className="text-2xl font-semibold text-blue-900 mb-2">Coming Soon</h2>
            <p className="text-blue-800">We're working on comprehensive guides for ad blocking.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h2 className="text-2xl font-semibold text-blue-900 mb-2">Features</h2>
            <p className="text-blue-800">Step-by-step instructions for various ad blocking solutions.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdBlocking; 