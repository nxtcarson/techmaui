import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AdBlocking from './pages/AdBlocking';
import Extensions from './pages/Extensions';
import Tools from './pages/Tools';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="w-full px-4 py-6">
          <Routes>
            <Route path="/" element={
              <div className="w-full">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Welcome to StudentTechHelper
                  </h1>
                  <p className="text-xl text-gray-600 mb-8">
                    Your guide to making school tech work better for you.
                  </p>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                      <h2 className="text-2xl font-semibold text-blue-900 mb-2">Ad Blocking</h2>
                      <p className="text-blue-800">Learn how to block ads and improve your browsing experience.</p>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
                      <h2 className="text-2xl font-semibold text-purple-900 mb-2">Browser Extensions</h2>
                      <p className="text-purple-800">Discover useful extensions to enhance your productivity.</p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                      <h2 className="text-2xl font-semibold text-green-900 mb-2">Useful Tools</h2>
                      <p className="text-green-800">Find tools and resources to make your school work easier.</p>
                    </div>
                  </div>
                </div>
              </div>
            } />
            <Route path="/adblocking" element={<AdBlocking />} />
            <Route path="/extensions" element={<Extensions />} />
            <Route path="/tools" element={<Tools />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
