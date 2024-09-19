import React, { useState } from "react";
import { LuMoon } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-black h-14 shadow-md">
      <div className="flex items-center space-x-3">
        <img src="/logo-dark.webp" alt="Logo" className="h-5 w-5" />
        <span className="hidden md:block text-white text-lg font-bold">
          Aceternity UI
        </span>
        <p className="hidden md:block bg-[#171717] text-white border-[#262626] border-[1px] text-xs font-bold px-2 py-0 rounded">
          pro
        </p>

        <div className="hidden md:flex items-start text-sm space-x-6 text-[#C9CACB]">
          <a
            href="#"
            className="hover:text-[#C9CACB] text-sm font-semibold transition-colors"
          >
            Component Packs
          </a>
          <a
            href="#"
            className="hover:text-[#C9CACB] text-sm font-semibold transition-colors"
          >
            Templates
          </a>
          <a
            href="#"
            className="hover:text-[#C9CACB] text-sm font-semibold transition-colors"
          >
            Pricing
          </a>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button
          aria-label="Toggle Dark Mode"
          className="hidden md:block hover:text-white hover:border hover:border-[#262626] rounded-lg px-1.5 py-1.5 transition-colors"
        >
          <LuMoon className="text-gray-400 w-4 h-4" />
        </button>

        <button
          aria-label="Search"
          className="hidden md:block hover:text-white hover:border hover:border-[#262626] rounded-lg px-1.5 py-1.5 transition-colors"
        >
          <IoIosSearch className="text-gray-400 w-4 h-4" />
        </button>

        <button
          aria-label="Shopping Cart"
          className="hover:text-white hover:border hover:border-[#262626] rounded-lg px-1.5 py-1.5 transition-colors"
        >
          <MdOutlineShoppingCart className="text-gray-400 w-4 h-4" />
        </button>

        <a
          href="#"
          className="hidden md:block text-gray-400 font-bold text-sm hover:text-white transition-colors"
        >
          Login
        </a>

        <button className="hidden md:block bg-white text-black font-semibold py-2 px-6 text-sm rounded-lg w-36 hover:bg-gray-100 transition-colors">
          Get All-Access
        </button>

        <button
          aria-label="Toggle Menu"
          className="md:hidden text-white"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <IoClose className="text-white w-6 h-6" />
          ) : (
            <FiMenu className="text-white w-6 h-6" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-14 left-0 right-0 bg-black border-t border-gray-800 text-white flex flex-col space-y-2 px-6 py-4 md:hidden">
          <a href="#" className="hover:text-gray-300 transition-colors">
            Component Packs
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            Templates
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            Pricing
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            Community
          </a>

          <button className="bg-white text-black font-semibold w-1/2 py-1.5 px-4 text-sm rounded-lg hover:bg-gray-100 transition-colors">
            Get Pro
          </button>
          <div className="flex gap-4">
            <button
              aria-label="Twitter X"
              className="hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-gray-400 w-4 h-4"
              >
                <path d="M23.707 1.707a1 1 0 00-1.414-1.414L12 10.586 1.707.293a1 1 0 00-1.414 1.414L10.586 12 .293 22.293a1 1 0 001.414 1.414L12 13.414l10.293 10.293a1 1 0 001.414-1.414L13.414 12l10.293-10.293z" />
              </svg>
            </button>

            <button
              aria-label="Toggle Dark Mode"
              className="hover:text-white transition-colors"
            >
              <LuMoon className="text-gray-400 w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default React.memo(NavBar);
