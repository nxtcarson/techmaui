function Extensions() {
  return (
    <div className="w-full">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Browser Extensions</h1>
        <p className="text-xl text-gray-600 mb-8">Discover useful extensions to enhance your productivity.</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
            <h2 className="text-2xl font-semibold text-purple-900 mb-2">Coming Soon</h2>
            <p className="text-purple-800">We're curating a list of the most helpful browser extensions for students.</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
            <h2 className="text-2xl font-semibold text-purple-900 mb-2">Categories</h2>
            <p className="text-purple-800">Extensions for productivity, research, writing, and more.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Extensions; 