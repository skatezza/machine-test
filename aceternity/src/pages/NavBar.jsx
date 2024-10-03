import React from "react";
import { copyConfig } from "../app/copy/copy-config";

const NavBar = () => {
  const { navbar } = copyConfig;

  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={navbar.logo} alt="Logo" className="h-8 w-auto mr-4" />
      </div>

      <div className="hidden md:flex space-x-6">
        {navbar.menuItems.map((item, index) => (
          <a key={index} href={item.href} className="hover:text-gray-300 transition-colors">
            {item.label}
          </a>
        ))}
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <button className="bg-white text-black font-semibold py-1.5 px-4 text-sm rounded-lg hover:bg-gray-100 transition-colors">
          {navbar.ctaButton.label}
        </button>
        {/* ... (rest of the buttons) */}
      </div>

      {/* ... (mobile menu button and menu) */}
    </nav>
  );
};

export default React.memo(NavBar);
