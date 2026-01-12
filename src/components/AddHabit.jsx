import { createPortal } from 'react-dom';

export default function AddHabit({ isOpen, onClose, onSave }) {
  if (!isOpen) return null;

  const types = ['Every day', 'N times a week'];

  return createPortal(
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl min-w-[300px]">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            placeholder="Enter habit name"
          />

          <div className="flex gap-6 mt-4">
            {types.map((type, index) => (
              <label
                key={index}
                className="flex items-center gap-2 text-gray-700 text-sm font-semibold"
              >
                <input
                  type="radio"
                  name="habitType"
                  id={`habitType-${index}`}
                  className="accent-blue-500 w-4 h-4"
                />
                {type}
              </label>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center pt-4">
          <button
            onClick={onClose}
            className="mt-2 px-4 py-2 left bg-blue-500 hover:bg-blue-600 text-white rounded shadow transition"
          >
            Close
          </button>
          <button
            onClick={onSave}
            className="mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded shadow transition"
          >
            Save
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
