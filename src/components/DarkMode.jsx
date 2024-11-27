// src/App.js
import React, { useState } from 'react';

function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    // <div className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>

    //   <div className={`p-6 rounded-lg shadow-lg flex-column ${darkMode ? 'bg-white text-black' : 'bg-gray-800 text-white'} transition`}>
    //     <h1 className="text-2xl mb-4">{darkMode ? 'Dark Mode' : 'Light Mode'}</h1>
    //     <button
    //       onClick={toggleDarkMode}
    //       className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition"
    //     >
    //       Switch to {darkMode ? 'Light' : 'Dark'} Mode
    //     </button>
    //   </div>
    // </div>

    // <div class="relative group">
    //   <div class="bg-gray-200 p-4">
    //     <p>Lorem ipsum dolor sit amet...</p>
    //   </div>

    //   <div class="absolute top-0 right-0 hidden group-hover:block">
    //     <button class="bg-red-500 text-white px-2 py-1 rounded transition">Delete</button>
    //   </div>
    // </div>

    <div class="relative overflow-y-auto max-h-[300px] border-[1px] border-black w-[250px]">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  );
}

export default DarkMode;