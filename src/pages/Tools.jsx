import { useState, useEffect } from 'react';
import defaultTools from '../data/defaultTools.json';

function Tools() {
  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState({ 
    title: '', 
    url: '', 
    imageUrl: '', 
    description: '',
    requiresAdBlock: false 
  });
  const [error, setError] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // Load links from localStorage or use default tools
  useEffect(() => {
    const savedLinks = localStorage.getItem('toolLinks');
    if (savedLinks) {
      setLinks(JSON.parse(savedLinks));
    } else {
      setLinks(defaultTools.tools);
    }
  }, []);

  // Save links to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('toolLinks', JSON.stringify(links));
  }, [links]);

  // Function to save current tools to defaultTools.json
  const saveToDefault = () => {
    try {
      const toolsToSave = JSON.stringify({ tools: links }, null, 2);
      // Copy this to clipboard so you can update the defaultTools.json file
      navigator.clipboard.writeText(toolsToSave);
      alert('Tools data copied to clipboard! Paste this into src/data/defaultTools.json to save as default tools.');
    } catch (err) {
      alert('Error copying tools data: ' + err.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    try {
      const url = new URL(newLink.url); // Validate URL format
      if (!newLink.title.trim()) {
        setError('Please enter a title for the link');
        return;
      }

      // Validate image URL if provided
      if (newLink.imageUrl && !newLink.imageUrl.match(/^https?:\/\/.+/)) {
        setError('Please enter a valid image URL (starting with http:// or https://)');
        return;
      }

      if (editingId) {
        setLinks(links.map(link => 
          link.id === editingId ? { ...newLink, id: editingId } : link
        ));
        setEditingId(null);
      } else {
        setLinks([...links, { ...newLink, id: Date.now() }]);
      }

      setNewLink({ title: '', url: '', imageUrl: '', description: '', requiresAdBlock: false });
      setError('');
      setIsFormVisible(false);
    } catch {
      setError('Please enter a valid URL (including http:// or https://)');
    }
  };

  const handleEdit = (link) => {
    setNewLink({ ...link });
    setEditingId(link.id);
    setIsFormVisible(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (id) => {
    setLinks(links.filter(link => link.id !== id));
  };

  const handleCancel = () => {
    setNewLink({ title: '', url: '', imageUrl: '', description: '', requiresAdBlock: false });
    setEditingId(null);
    setError('');
    setIsFormVisible(false);
  };

  return (
    <div className="w-full">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Useful Tools</h1>
            <p className="text-xl text-gray-600">Add and manage helpful tools and resources.</p>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={saveToDefault}
              className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition-colors shadow-lg"
              title="Save current tools as default"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
              </svg>
            </button>
            <button
              onClick={() => setIsFormVisible(!isFormVisible)}
              className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isFormVisible ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Add/Edit form */}
        {isFormVisible && (
          <form onSubmit={handleSubmit} className="mb-8 bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              {editingId ? 'Edit Tool' : 'Add New Tool'}
            </h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-blue-800 mb-1">Title *</label>
                <input
                  type="text"
                  id="title"
                  value={newLink.title}
                  onChange={(e) => setNewLink({ ...newLink, title: e.target.value })}
                  className="w-full p-2 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter tool name"
                  required
                />
              </div>
              <div>
                <label htmlFor="url" className="block text-blue-800 mb-1">URL *</label>
                <input
                  type="text"
                  id="url"
                  value={newLink.url}
                  onChange={(e) => setNewLink({ ...newLink, url: e.target.value })}
                  className="w-full p-2 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="https://example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="imageUrl" className="block text-blue-800 mb-1">Image URL (Optional)</label>
                <input
                  type="text"
                  id="imageUrl"
                  value={newLink.imageUrl}
                  onChange={(e) => setNewLink({ ...newLink, imageUrl: e.target.value })}
                  className="w-full p-2 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              <div>
                <label htmlFor="description" className="block text-blue-800 mb-1">Description (Optional)</label>
                <textarea
                  id="description"
                  value={newLink.description}
                  onChange={(e) => setNewLink({ ...newLink, description: e.target.value })}
                  className="w-full p-2 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 min-h-[100px]"
                  placeholder="Enter a description of the tool..."
                />
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="requiresAdBlock"
                  checked={newLink.requiresAdBlock}
                  onChange={(e) => setNewLink({ ...newLink, requiresAdBlock: e.target.checked })}
                  className="w-4 h-4 text-blue-600 rounded border-blue-300 focus:ring-blue-500"
                />
                <label htmlFor="requiresAdBlock" className="text-blue-800">
                  Requires Ad Blocking for safe access
                </label>
              </div>
              {error && <p className="text-red-600">{error}</p>}
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  {editingId ? 'Save Changes' : 'Add Tool'}
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        )}

        {/* Links grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map(link => (
            <div key={link.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              {/* Website preview */}
              <div className="aspect-video w-full bg-gray-100 relative">
                <img
                  src={link.imageUrl || `https://image.thum.io/get/width/600/crop/800/${link.url}`}
                  alt={`Preview of ${link.title}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/600x400?text=Preview+Not+Available';
                  }}
                />
                {link.requiresAdBlock && (
                  <div className="absolute top-2 right-2 bg-yellow-500 rounded-full p-2 shadow-lg" title="Ad Blocking Recommended">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
              
              {/* Link details */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{link.title}</h3>
                {link.description && (
                  <p className="text-gray-600 mb-4 line-clamp-3">{link.description}</p>
                )}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      Visit Site
                    </a>
                    <button
                      onClick={() => handleEdit(link)}
                      className="text-green-600 hover:text-green-800 transition-colors"
                    >
                      Edit
                    </button>
                  </div>
                  <button
                    onClick={() => handleDelete(link.id)}
                    className="text-red-600 hover:text-red-800 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {links.length === 0 && (
          <div className="text-center text-gray-500 py-8">
            No tools added yet. Click the + button to add your first tool!
          </div>
        )}
      </div>
    </div>
  );
}

export default Tools; 