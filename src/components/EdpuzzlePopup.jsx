import { useNavigate } from 'react-router-dom';

function EdpuzzlePopup({ onClose }) {
  const navigate = useNavigate();

  const handleYes = () => {
    navigate('/tools');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white rounded-xl shadow-2xl p-8 max-w-md mx-4 animate-fade-in">
        <div className="flex flex-col items-center text-center space-y-6">
          <h2 className="text-2xl font-semibold text-purple-900">Need Help with Edpuzzle?</h2>
          <p className="text-lg text-purple-800">
            Are you looking to get around those pesky Edpuzzles? Try out this bookmarklet!
          </p>
          <div className="flex gap-4 w-full">
            <button
              onClick={handleYes}
              className="flex-1 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition duration-200"
            >
              Yes, Show Me!
            </button>
            <button
              onClick={onClose}
              className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition duration-200"
            >
              No, Thanks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EdpuzzlePopup; 