import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AdBlocking from './pages/AdBlocking';
import Tools from './pages/Tools';
import Study from './pages/Study';
import Research from './pages/Research';
import Budget from './pages/Budget';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Navigation */}
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <Link to="/" className="flex items-center">
                  <span className="text-xl font-bold text-purple-600">TechMaui</span>
                </Link>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link
                    to="/adblocking"
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-purple-600"
                  >
                    Ad Blocking
                  </Link>
                  <Link
                    to="/tools"
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-purple-600"
                  >
                    Tools
                  </Link>
                  <Link
                    to="/study"
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-purple-600"
                  >
                    Study
                  </Link>
                  <Link
                    to="/research"
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-purple-600"
                  >
                    Research
                  </Link>
                  <Link
                    to="/budget"
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-purple-600"
                  >
                    Budget
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/adblocking" element={<AdBlocking />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/study" element={<Study />} />
            <Route path="/research" element={<Research />} />
            <Route path="/budget" element={<Budget />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-white shadow-lg mt-8">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="text-center text-gray-500 text-sm">
              © {new Date().getFullYear()} TechMaui. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
