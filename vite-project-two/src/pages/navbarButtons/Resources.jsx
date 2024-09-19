import React, { useState } from "react";
import {
  FiShoppingBag,
  FiPlayCircle,
  FiBox,
  FiMapPin,
  FiUserCheck,
  FiBriefcase,
  FiRefreshCcw,
  FiEdit,
  FiImage,
} from "react-icons/fi";

const Resources = () => {
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
        Resources
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
        <div className="absolute left-1/2 transform -translate-x-1/2 w-full sm:w-[400px] md:w-[500px] rounded-lg shadow-lg backdrop-blur-md ring-1 ring-white ring-opacity-5">
          <div className="py-4 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-white">
            {/* Get Started Section */}
            <div className="space-y-6">
              <h3 className="font-semibold text-sm text-gray-300">Get started</h3>
              <div className="space-y-4">
                <button className="flex items-center space-x-4 group">
                  <span className="p-3 rounded-md border backdrop-blur-md border-gray-600 group-hover:bg-white group-hover:text-black transition-colors">
                    <FiShoppingBag
                      size={20}
                      className="text-white group-hover:text-black transition-colors"
                    />
                  </span>
                  <span className="text-sm group-hover:text-white">Marketplace</span>
                </button>
                <button className="flex items-center space-x-4 group">
                  <span className="p-3 rounded-md border backdrop-blur-md border-gray-600 group-hover:bg-white group-hover:text-black transition-colors">
                    <FiPlayCircle
                      size={20}
                      className="text-white group-hover:text-black transition-colors"
                    />
                  </span>
                  <span className="text-sm group-hover:text-white">Academy</span>
                </button>
                <button className="flex items-center space-x-4 group">
                  <span className="p-3 rounded-md border backdrop-blur-md border-gray-600 group-hover:bg-white group-hover:text-black transition-colors">
                    <FiBox
                      size={20}
                      className="text-white group-hover:text-black transition-colors"
                    />
                  </span>
                  <span className="text-sm group-hover:text-white">Figma</span>
                </button>
              </div>
            </div>

            {/* Programs Section */}
            <div className="space-y-6">
              <h3 className="font-semibold text-sm text-gray-300">Programs</h3>
              <div className="space-y-4">
                <button className="flex items-center space-x-4 group">
                  <span className="p-3 rounded-md border backdrop-blur-md border-gray-600 group-hover:bg-white group-hover:text-black transition-colors">
                    <FiMapPin
                      size={20}
                      className="text-white group-hover:text-black transition-colors"
                    />
                  </span>
                  <span className="text-sm group-hover:text-white">Meetups</span>
                </button>
                <button className="flex items-center space-x-4 group">
                  <span className="p-3 rounded-md border backdrop-blur-md border-gray-600 group-hover:bg-white group-hover:text-black transition-colors">
                    <FiUserCheck
                      size={20}
                      className="text-white group-hover:text-black transition-colors"
                    />
                  </span>
                  <span className="text-sm group-hover:text-white">Partners</span>
                </button>
                <button className="flex items-center space-x-4 group">
                  <span className="p-3 rounded-md border backdrop-blur-md border-gray-600 group-hover:bg-white group-hover:text-black transition-colors">
                    <FiBriefcase
                      size={20}
                      className="text-white group-hover:text-black transition-colors"
                    />
                  </span>
                  <span className="text-sm group-hover:text-white">Experts</span>
                </button>
              </div>
            </div>

            {/* Recent Section */}
            <div className="space-y-6">
              <h3 className="font-semibold text-sm text-gray-300">Recent</h3>
              <div className="space-y-4">
                <button className="flex items-center space-x-4 group">
                  <span className="p-3 rounded-md border backdrop-blur-md border-gray-600 group-hover:bg-white group-hover:text-black transition-colors">
                    <FiRefreshCcw
                      size={20}
                      className="text-white group-hover:text-black transition-colors"
                    />
                  </span>
                  <span className="text-sm group-hover:text-white">Updates</span>
                </button>
                <button className="flex items-center space-x-4 group">
                  <span className="p-3 rounded-md border backdrop-blur-md border-gray-600 group-hover:bg-white group-hover:text-black transition-colors">
                    <FiEdit
                      size={20}
                      className="text-white group-hover:text-black transition-colors"
                    />
                  </span>
                  <span className="text-sm group-hover:text-white">Blog</span>
                </button>
                <button className="flex items-center space-x-4 group">
                  <span className="p-3 rounded-md border backdrop-blur-md border-gray-600 group-hover:bg-white group-hover:text-black transition-colors">
                    <FiImage
                      size={20}
                      className="text-white group-hover:text-black transition-colors"
                    />
                  </span>
                  <span className="text-sm group-hover:text-white">Gallery</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(Resources);
