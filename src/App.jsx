import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AdBlocking from './pages/AdBlocking';
import Tools from './pages/Tools';
import Study from './pages/Study';
import Research from './pages/Research';
import Budget from './pages/Budget';
import { useState } from 'react';

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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
              <div className="flex items-center space-x-4">
                <Link to="/adblocking" className="text-gray-600 hover:text-purple-600">Ad Blocking</Link>
                <Link to="/extensions" className="text-gray-600 hover:text-purple-600">Extensions</Link>
                <Link to="/tools" className="text-gray-600 hover:text-purple-600">Tools</Link>
                <Link to="/study" className="text-gray-600 hover:text-purple-600">Study</Link>
                <Link to="/research" className="text-gray-600 hover:text-purple-600">Research</Link>
                <Link to="/budget" className="text-gray-600 hover:text-purple-600">Budget</Link>
                
                {/* Dropdown Menu */}
                <div className="relative">
                  <button
                    onClick={toggleDropdown}
                    className="flex items-center text-gray-600 hover:text-purple-600 focus:outline-none"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                  
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                      <Link
                        to="/signup"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Sign Up
                      </Link>
                      <Link
                        to="/login"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Login
                      </Link>
                      <Link
                        to="/about"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        About
                      </Link>
                      <Link
                        to="/contact"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Contact
                      </Link>
                    </div>
                  )}
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
