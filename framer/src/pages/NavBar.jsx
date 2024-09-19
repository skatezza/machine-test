import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Features from "./navbarButtons/Features";
import Resources from "./navbarButtons/Resources";
import Enterprise from "./navbarButtons/Enterprise";
import Support from "./navbarButtons/Support";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full  z-30 flex items-center justify-between px-4 py-4 bg-black h-14 shadow-md">
      <div className="flex items-center">
        <img src="/42876.jpeg" alt="Logo" className="h-12 w-12" />
        <span className="ml-2 block text-white text-lg font-bold">Framer</span>
      </div>

      <div className="hidden md:flex flex-grow justify-center">
        <Features />
        <Resources />
        <Support />
        <Enterprise />
        <button className="bg-black text-[#949494] mt-1 text-base font-semibold hover:bg-[#1D1D1C] px-2 rounded-md">
          Pricing
        </button>
        <button className="bg-black text-[#949494] mt-1 text-base font-semibold hover:bg-[#1D1D1C] px-2 rounded-md">
          Contact
        </button>
      </div>

      <div className="hidden sm:flex gap-3 items-center">
        <button className="bg-black text-white hover:bg-[#1D1D1C] px-2 py-0.5 rounded-md text-sm">
          Login
        </button>
        <button className="bg-white text-gray-700 font-semibold hover:bg-gray-100 px-2 py-0.5 rounded-md">
          Sign up
        </button>
      </div>

      <div className="flex sm:hidden items-center gap-4">
        <button className="text-white bg-black hover:bg-[#1D1D1C] px-2 py-0.5 rounded-md text-sm">
          Login
        </button>
        <button className="text-black bg-white hover:bg-gray-100 px-2 py-0.5 rounded-md text-sm">
          Sign up
        </button>
        <button
          onClick={toggleMenu}
          className="text-white hover:text-gray-300 focus:outline-none mr-2"
        >
          <FiMenu size={24} />
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-1/2 bg-black shadow-md transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-800">
          <span className="text-white text-lg font-bold">Framer</span>
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <FiX size={24} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 gap-4 mt-6 px-6 text-left">
          <div className="my-2">
            <Features />
          </div>
          <div className="my-2">
            <Resources />
          </div>
          <div className="my-2">
            <Support />
          </div>
          <div className="my-2">
            <Enterprise />
          </div>
          <button className="bg-black text-[#949494] text-base font-semibold hover:bg-[#1D1D1C] px-4 py-2 text-left">
            Pricing
          </button>
          <button className="bg-black text-[#949494] text-base font-semibold hover:bg-[#1D1D1C] px-4 py-2 text-left">
            Contact
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
};

export default NavBar;
