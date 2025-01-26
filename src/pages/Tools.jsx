function Tools() {
  return (
    <div className="w-full">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Useful Tools</h1>
        <p className="text-xl text-gray-600 mb-8">Find tools and resources to make your school work easier.</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-green-50 p-6 rounded-lg border border-green-100">
            <h2 className="text-2xl font-semibold text-green-900 mb-2">Coming Soon</h2>
            <p className="text-green-800">We're gathering a collection of helpful tools and resources.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg border border-green-100">
            <h2 className="text-2xl font-semibold text-green-900 mb-2">Tool Categories</h2>
            <p className="text-green-800">Study aids, note-taking apps, research tools, and more.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tools; 