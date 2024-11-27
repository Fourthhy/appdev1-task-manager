// src/App.js
import React, { useState } from 'react';

function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>

      <div className={`p-6 rounded-lg shadow-lg flex-column ${darkMode ? 'bg-white text-black' : 'bg-gray-800 text-white'} transition`}>
        <h1 className="text-2xl mb-4">{darkMode ? 'Dark Mode' : 'Light Mode'}</h1>
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition"
        >
          Switch to {darkMode ? 'Light' : 'Dark'} Mode
        </button>
      </div>
    </div>
  );
}

export default DarkMode;