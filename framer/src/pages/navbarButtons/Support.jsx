import React, { useState } from "react";
import { FiHelpCircle, FiMessageCircle, FiAlertTriangle } from "react-icons/fi";

const Support = () => {
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
      <button className="inline-flex justify-center w-full rounded-md text-base font-semibold shadow-sm px-3 mt-1 hover:bg-[#1D1D1C] bg-black text-[#949494]">
        Support
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
        <div className="absolute left-1/2 transform -translate-x-1/2 w-full sm:w-[250px] rounded-lg shadow-sm backdrop-blur-lg ring-1 ring-white ring-opacity-5">
          <div className="py-4 px-4 grid grid-cols-1 gap-6 text-white">
            <button className="flex items-center space-x-4 group">
              <span className="p-3 rounded-md  border backdrop-blur-md border-gray-600  group-hover:bg-white group-hover:text-black transition-colors">
                <FiHelpCircle
                  size={20}
                  className="text-white  group-hover:text-black transition-colors"
                />
              </span>
              <span className="text-sm group-hover:text-white">Help</span>
            </button>
            <button className="flex items-center space-x-4 group">
              <span className="p-3 rounded-md bg-transparent border backdrop-blur-md border-gray-600 group-hover:bg-white group-hover:text-black transition-colors">
                <FiMessageCircle
                  size={20}
                  className="text-white group-hover:text-black transition-colors"
                />
              </span>
              <span className="text-sm group-hover:text-white">Community</span>
            </button>
            <button className="flex items-center space-x-4 group">
              <span className="p-3 rounded-md bg-transparent border backdrop-blur-md border-gray-600 group-hover:bg-white group-hover:text-black transition-colors">
                <FiAlertTriangle
                  size={20}
                  className="text-white group-hover:text-black transition-colors"
                />
              </span>
              <span className="text-sm group-hover:text-white">Emergency</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Support;
