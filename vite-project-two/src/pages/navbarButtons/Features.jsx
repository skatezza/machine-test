import React, { useState } from "react";
import {
  FiLayout,
  FiSettings,
  FiFileText,
  FiGlobe,
  FiDatabase,
  FiAperture,
  FiTrendingUp,
  FiLayers,
  FiLink2,
} from "react-icons/fi";

const Features = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Centered Features Button */}
      <button
        className="inline-flex justify-center w-full rounded-md text-base font-semibold shadow-sm px-3   mt-1 hover:bg-[#1D1D1C] bg-black text-[#949494]"
      >
        Features
        <svg
          className={`-mr-1 ml-1 h-4 w-4 mt-1 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute left-1/2 transform -translate-x-1/2 w-full sm:w-[400px] md:w-[500px] rounded-lg shadow-lg backdrop-blur-lg  ring-1 ring-white ring-opacity-5"
        >
          <div className="py-4 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-white">
            <div className="space-y-6">
              <h3 className="font-semibold text-sm text-gray-300">Design</h3>
              <div className="space-y-4">
                <button className="flex items-center space-x-4 hover:text-white">
                  <span className="p-3 rounded-md border backdrop-blur-md border-gray-600  hover:bg-white hover:text-black">
                    <FiLayout size={20} />
                  </span>
                  <span className="text-sm">Design</span>
                </button>
                <button className="flex items-center space-x-4 hover:text-white">
                  <span className="p-3 rounded-md border backdrop-blur-md border-gray-600 hover:bg-white hover:text-black">
                    <FiLink2 size={20} />
                  </span>
                  <span className="text-sm">Navigation</span>
                </button>
                <button className="flex items-center space-x-4 hover:text-white">
                  <span className="p-3 rounded-md border backdrop-blur-md border-gray-600 hover:bg-white hover:text-black">
                    <FiAperture size={20} />
                  </span>
                  <span className="text-sm">Animations</span>
                </button>
              </div>
            </div>

            {/* Section 2: Publish */}
            <div className="space-y-6">
              <h3 className="font-semibold text-sm text-gray-300">Publish</h3>
              <div className="space-y-4">
                <button className="flex items-center space-x-4 hover:text-white">
                  <span className="p-3 rounded-md border backdrop-blur-md border-gray-600 hover:bg-white hover:text-black">
                    <FiSettings size={20} />
                  </span>
                  <span className="text-sm">Management</span>
                </button>
                <button className="flex items-center space-x-4 hover:text-white">
                  <span className="p-3 rounded-md border backdrop-blur-md border-gray-600 hover:bg-white hover:text-black">
                    <FiFileText size={20} />
                  </span>
                  <span className="text-sm">Forms</span>
                </button>
                <button className="flex items-center space-x-4 hover:text-white">
                  <span className="p-3 rounded-md border backdrop-blur-md border-gray-600 hover:bg-white hover:text-black">
                    <FiTrendingUp size={20} />
                  </span>
                  <span className="text-sm">SEO</span>
                </button>
              </div>
            </div>

            {/* Section 3: Scale */}
            <div className="space-y-6">
              <h3 className="font-semibold text-sm text-gray-300">Scale</h3>
              <div className="space-y-4">
                <button className="flex items-center space-x-4 hover:text-white">
                  <span className="p-3 rounded-md border backdrop-blur-md border-gray-600 hover:bg-white hover:text-black">
                    <FiGlobe size={20} />
                  </span>
                  <span className="text-sm">Localization</span>
                </button>
                <button className="flex items-center space-x-4 hover:text-white">
                  <span className="p-3 rounded-md border backdrop-blur-md border-gray-600 hover:bg-white hover:text-black">
                    <FiDatabase size={20} />
                  </span>
                  <span className="text-sm">CMS</span>
                </button>
                <button className="flex items-center space-x-4 hover:text-white">
                  <span className="p-3 rounded-md border backdrop-blur-md border-gray-600 hover:bg-white hover:text-black">
                    <FiLayers size={20} />
                  </span>
                  <span className="text-sm">AI</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Features;
