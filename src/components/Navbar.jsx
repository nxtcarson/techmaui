import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-md w-full">
      <div className="w-full px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-blue-600">StudentTechHelper</span>
          </Link>
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
            <Link to="/adblocking" className="text-gray-700 hover:text-blue-600 font-medium">Ad Blocking</Link>
            <Link to="/extensions" className="text-gray-700 hover:text-blue-600 font-medium">Extensions</Link>
            <Link to="/tools" className="text-gray-700 hover:text-blue-600 font-medium">Tools</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 