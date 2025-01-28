import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AdBlocking from './pages/AdBlocking';
import Tools from './pages/Tools';
import Study from './pages/Study';
import Research from './pages/Research';
import Budget from './pages/Budget';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Extensions from './pages/Extensions';
import About from './pages/About';
import Terms from './pages/Terms';
import { useState } from 'react';

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100" style={{ colorScheme: 'light' }}>
        {/* Navigation */}
        <nav className="bg-white shadow-lg" style={{ colorScheme: 'light' }}>
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
                    style={{ colorScheme: 'light' }}
                  >
                    Ad Blocking
                  </Link>
                  <Link
                    to="/extensions"
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-purple-600"
                    style={{ colorScheme: 'light' }}
                  >
                    Extensions
                  </Link>
                  <Link
                    to="/tools"
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-purple-600"
                    style={{ colorScheme: 'light' }}
                  >
                    Tools
                  </Link>
                  <Link
                    to="/study"
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-purple-600"
                    style={{ colorScheme: 'light' }}
                  >
                    Study
                  </Link>
                  <Link
                    to="/research"
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-purple-600"
                    style={{ colorScheme: 'light' }}
                  >
                    Research
                  </Link>
                  <Link
                    to="/budget"
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-purple-600"
                    style={{ colorScheme: 'light' }}
                  >
                    Budget
                  </Link>
                </div>
              </div>
              
              {/* Profile and Theme Toggle */}
              <div className="flex items-center space-x-4">
                <button
                  className={`p-1.5 rounded-full ${
                    'bg-purple-50 text-purple-500 hover:bg-purple-100'
                  } transition-colors duration-200`}
                  title="Switch to dark mode"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                </button>
                
                {/* Profile Dropdown */}
                <div className="relative">
                  <button
                    onClick={toggleDropdown}
                    className="flex items-center p-1.5 bg-purple-50 text-purple-500 hover:text-purple-600 hover:bg-purple-100 focus:outline-none transition-all duration-200 rounded-full"
                    style={{ colorScheme: 'light' }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                  
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50 border border-purple-100 transform transition-all duration-200 ease-out" style={{ colorScheme: 'light' }}>
                      <Link
                        to="/signup"
                        className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200"
                        onClick={() => setIsDropdownOpen(false)}
                        style={{ backgroundColor: 'white', color: 'rgb(55, 65, 81)' }}
                      >
                        Sign Up
                      </Link>
                      <Link
                        to="/login"
                        className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200"
                        onClick={() => setIsDropdownOpen(false)}
                        style={{ backgroundColor: 'white', color: 'rgb(55, 65, 81)' }}
                      >
                        Login
                      </Link>
                      <Link
                        to="/about"
                        className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200"
                        onClick={() => setIsDropdownOpen(false)}
                        style={{ backgroundColor: 'white', color: 'rgb(55, 65, 81)' }}
                      >
                        About
                      </Link>
                      <button
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200"
                        onClick={() => {
                          navigator.clipboard.writeText('nxtcarson@gmail.com');
                          setIsDropdownOpen(false);
                          alert('Email copied to clipboard!');
                        }}
                        style={{ backgroundColor: 'white', color: 'rgb(55, 65, 81)' }}
                      >
                        Contact
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" style={{ colorScheme: 'light' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/adblocking" element={<AdBlocking />} />
            <Route path="/extensions" element={<Extensions />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/study" element={<Study />} />
            <Route path="/research" element={<Research />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/about" element={<About />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-white shadow-lg mt-8" style={{ colorScheme: 'light' }}>
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
